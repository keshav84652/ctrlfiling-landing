"use client";

import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { useState, useEffect } from "react";

export default function Page() {
  const [showTrackingConsent, setShowTrackingConsent] = useState(false);

  useEffect(() => {
    // Client-side check for tracking consent
    const checkTrackingConsent = async () => {
      // For now, we'll just set it to false since we're focusing on the login functionality
      setShowTrackingConsent(false);
    };
    checkTrackingConsent();
  }, []);

  return (
    <div className="h-screen p-2">

      {/* Main Layout */}
      <div className="flex h-full">
        {/* Login Form Section - Full width */}
        <div className="w-full relative">
          {/* Form Content */}
          <div className="relative z-10 flex h-full items-center justify-center p-6">
            <div className="w-full max-w-md space-y-8">
              {/* Welcome Section */}
              <div className="text-center">
                <h1 className="text-lg mb-4 font-serif">Welcome to CTRL+Filing</h1>
                <p className="text-[#878787] text-sm mb-8">
                  Sign in to access your workflow management portal
                </p>
              </div>

              {/* Email Sign In Form */}
              <div className="space-y-4">
                <form 
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Show popup that account doesn't exist
                    alert('Account does not exist. Please book a call with our team to get started.');
                  }}
                >
                  <div>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      className="h-12 px-4"
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full h-12 bg-black text-white hover:bg-black/80"
                  >
                    Continue
                  </Button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Consent Banner */}
      {showTrackingConsent && <div>Consent Banner</div>}
    </div>
  );
}