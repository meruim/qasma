import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export const InstallGuide: React.FC = () => {
  const [openStep, setOpenStep] = useState<number | null>(1);

  const toggleStep = (step: number) => {
    setOpenStep(openStep === step ? null : step);
  };

  return (
    <div className="w-full flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Installation Guide
          </h1>
          <div className="w-20 h-1 bg-primary"></div>
        </div>

        {/* Steps */}
        <div className="space-y-3">
          {/* Step 1 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleStep(1)}
              className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0 text-sm">
                  1
                </div>
                <h2 className="text-base sm:text-lg font-semibold text-gray-900 text-left">
                  Download
                </h2>
              </div>
              {openStep === 1 ? (
                <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
              )}
            </button>

            {openStep === 1 && (
              <div className="p-4 pt-0 bg-white">
                <p className="text-gray-700 text-sm sm:text-base mb-3">
                  Tap "Download APK"
                </p>
                <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center border border-gray-200">
                  <span className="text-gray-500 text-sm">
                    Image placeholder
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Step 2 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleStep(2)}
              className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0 text-sm">
                  2
                </div>
                <h2 className="text-base sm:text-lg font-semibold text-gray-900 text-left">
                  Allow Installation
                </h2>
              </div>
              {openStep === 2 ? (
                <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
              )}
            </button>

            {openStep === 2 && (
              <div className="p-4 pt-0 bg-white">
                <p className="text-gray-600 mb-2 italic text-xs sm:text-sm">
                  First time only - skip this if already enabled
                </p>
                <div className="text-gray-700 text-sm sm:text-base mb-3 space-y-1">
                  <p>• Tap "Settings" when prompted</p>
                  <p>• Enable "Install unknown apps"</p>
                  <p>• Tap "Back"</p>
                </div>
                <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center border border-gray-200">
                  <span className="text-gray-500 text-sm">
                    Image placeholder
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Step 3 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleStep(3)}
              className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0 text-sm">
                  3
                </div>
                <h2 className="text-base sm:text-lg font-semibold text-gray-900 text-left">
                  Install
                </h2>
              </div>
              {openStep === 3 ? (
                <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
              )}
            </button>

            {openStep === 3 && (
              <div className="p-4 pt-0 bg-white">
                <div className="text-gray-700 text-sm sm:text-base mb-3 space-y-1">
                  <p>• Tap "Install"</p>
                  <p>• Tap "Open"</p>
                </div>
                <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center border border-gray-200">
                  <span className="text-gray-500 text-sm">
                    Image placeholder
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Step 4 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleStep(4)}
              className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0 text-sm">
                  4
                </div>
                <h2 className="text-base sm:text-lg font-semibold text-gray-900 text-left">
                  Sign In
                </h2>
              </div>
              {openStep === 4 ? (
                <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
              )}
            </button>

            {openStep === 4 && (
              <div className="p-4 pt-0 bg-white">
                <div className="text-gray-700 text-sm sm:text-base mb-3 space-y-1">
                  <p>• Enter your Student ID</p>
                  <p>• Start using the app</p>
                </div>
                <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center border border-gray-200">
                  <span className="text-gray-500 text-sm">
                    Image placeholder
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Note */}
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-6">
          <p className="text-gray-700 text-sm sm:text-base">
            <span className="font-semibold">⚠️ Note:</span> You may see a
            security warning - this is normal.
          </p>
          <p className="text-gray-700 text-sm sm:text-base mt-2">
            <span className="font-semibold">✓</span> The app is safe to use.
          </p>
        </div>
      </div>
    </div>
  );
};
