"use client";

import type React from "react";
import type { DateRange } from "react-day-picker";
import { cn } from "@/ui/utils";
import { Button } from "@/ui/components/button";
import { Calendar } from "@/ui/components/calendar";
import { Icons } from "@/ui/components/icons";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/components/popover";

type Props = {
  range: DateRange;
  className: React.HTMLAttributes<HTMLDivElement>;
  onSelect: (range?: DateRange) => void;
  placeholder: string;
  disabled?: boolean;
};

export function DateRangePicker({
  className,
  range,
  disabled,
  onSelect,
  placeholder,
}: Props) {
  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild disabled={disabled}>
          <Button
            variant="outline"
            className={cn("justify-start text-left font-medium space-x-2")}
          >
            <span>{placeholder}</span>
            <Icons.ChevronDown />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 mt-2" align="end">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={range?.from}
            selected={range}
            onSelect={onSelect}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
