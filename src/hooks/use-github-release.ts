import { useState, useEffect } from "react";
import { GithubService } from "@/services";
import { ReleaseParser } from "@/utils";
import { AppConfig } from "@/config";

const useGitHubRelease = () => {
  const [releaseInfo, setReleaseInfo] = useState<ReleaseParser.ReleaseInfo>({
    version: AppConfig.defaultVersion,
    buildNumber: AppConfig.defaultBuildNumber,
    downloadUrl: "#",
    isPrerelease: false,
    size: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasDownloaded, setHasDownloaded] = useState(false);

  useEffect(() => {
    fetchLatestRelease();
  }, []);

  const fetchLatestRelease = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const release = await GithubService.githubService.getLatestRelease();
      const parsedInfo = ReleaseParser.releaseParser.parseRelease(release);

      setReleaseInfo(parsedInfo);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to fetch release";
      setError(errorMessage);
      console.error("Error fetching release:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const downloadApp = () => {
    if (releaseInfo.downloadUrl && releaseInfo.downloadUrl !== "#") {
      const link = document.createElement("a");
      link.href = releaseInfo.downloadUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setHasDownloaded(true);
    }
  };

  return {
    releaseInfo,
    isLoading,
    error,
    hasDownloaded,
    downloadApp,
    refetch: fetchLatestRelease,
  };
};

export default useGitHubRelease;
