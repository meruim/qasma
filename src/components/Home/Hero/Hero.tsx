import React from "react";
import { GitHubHook } from "@/hooks";
import hero_interface from "@/assets/img/hero_interface.png";
import guidance_logo from "@/assets/img/guidance_logo.png";
import jrmsu_logo from "@/assets/img/jrmsu_logo.png";
import "./Hero.css";

export const Hero: React.FC = () => {
  const { releaseInfo, isLoading, hasDownloaded, downloadApp } = GitHubHook();

  return (
    <div className="w-full min-h-[calc(100vh-64px)] flex items-center justify-center px-6 py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
        {/* Left Content Section */}
        <div className="flex-1 text-center lg:text-left">
          {/* Logos */}
          <div className="flex justify-center lg:justify-start items-center gap-4 sm:gap-5 md:gap-6 lg:gap-6 mb-4 sm:mb-6 md:mb-7 lg:mb-8">
            <img
              src={jrmsu_logo}
              alt="JRMSU Logo"
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-24 lg:h-24 object-contain"
            />
            <img
              src={guidance_logo}
              alt="Guidance Logo"
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-24 lg:h-24 object-contain"
            />
          </div>

          {/* University Name */}
          <h2 className="text-primary text-base sm:text-lg md:text-xl lg:text-xl font-bold mb-1 sm:mb-2">
            Jose Rizal Memorial State University
          </h2>

          {/* Subtitle */}
          <p className="text-red-600 text-sm sm:text-base md:text-base italic mb-6 sm:mb-7 md:mb-8 lg:mb-8">
            The Premier University in Zamboanga del Norte
          </p>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-6 sm:mb-7 md:mb-8 lg:mb-8 leading-tight text-gray-900">
            QR-Code-Enabled Appointment And Schedule Management App
          </h1>

          {/* Location */}
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-8 sm:mb-9 md:mb-10 lg:mb-10">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
              fill="#ea580c"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-orange-600 font-semibold text-sm sm:text-base md:text-base">
              Katipunan Campus, Katipunan Z.N
            </p>
          </div>

          {/* Download Button */}
          <div className="flex flex-col items-center lg:items-start gap-2 sm:gap-3">
            <button
              onClick={downloadApp}
              disabled={isLoading}
              className="bg-primary text-white font-bold py-3.5 px-10 sm:py-4 sm:px-12 md:py-4 md:px-14 rounded-lg text-sm sm:text-base md:text-base disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95"
            >
              <span className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                {isLoading
                  ? "Loading..."
                  : hasDownloaded
                  ? "Click here if not started"
                  : `Download${
                      releaseInfo.size ? ` (${releaseInfo.size})` : ""
                    }`}
              </span>
            </button>

            {/* Download Status */}
            {hasDownloaded && (
              <p className="text-sm sm:text-base font-semibold text-primary">
                Your download is starting...
              </p>
            )}

            {/* Version Info */}
            <p className="text-sm sm:text-base text-gray-600">
              {isLoading ? (
                "Checking for latest version..."
              ) : (
                <span className="flex items-center gap-2">
                  Version {releaseInfo.version} (Build {releaseInfo.buildNumber}
                  )
                  {releaseInfo.isPrerelease && (
                    <span className="text-xs px-2 py-1 rounded-full font-bold bg-orange-600 text-white">
                      PRE-RELEASE
                    </span>
                  )}
                </span>
              )}
            </p>
          </div>
        </div>

        {/* Phone Mockup Section */}
        <div className="hidden lg:flex flex-1 justify-center">
          <img
            src={hero_interface}
            alt="App Interface"
            className="w-64 h-auto object-contain"
            style={{ mixBlendMode: "darken" }}
          />
        </div>
      </div>
    </div>
  );
};
