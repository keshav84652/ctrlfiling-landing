"use client";

import { Button } from "@/ui/button";
import { useEffect } from "react";

interface CalBookingProps {
  variant?: "default" | "outline";
  className?: string;
  children: React.ReactNode;
}

export function CalBooking({ variant = "outline", className, children }: CalBookingProps) {
  const handleClick = () => {
    // Open Cal.com in a new window/tab as fallback
    window.open("https://cal.com/keshav-kasat/30min", "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    
    script.onload = () => {
      // Initialize Cal.com after script loads
      if (typeof window !== 'undefined' && (window as any).Cal) {
        const Cal = (window as any).Cal;
        Cal("init", { origin: "https://app.cal.com" });
      }
    };
    
    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <Button
      variant={variant}
      className={className}
      onClick={handleClick}
      data-cal-namespace=""
      data-cal-link="keshav-kasat/30min"
      data-cal-config='{"layout":"month_view","theme":"dark"}'
    >
      {children}
    </Button>
  );
}