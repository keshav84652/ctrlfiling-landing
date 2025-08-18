"use client";

import { cn } from "@/ui/cn";
import { Icons } from "@/ui/icons";

export function CtaLink({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const handleClick = () => {
    window.open("https://cal.com/keshav-kasat/30min", "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "font-medium text-sm flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden xl:flex",
        className,
      )}
    >
      <span>{text}</span>
      <Icons.ArrowOutward />
    </button>
  );
}
