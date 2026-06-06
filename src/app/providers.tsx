"use client";

import { ThemeProvider } from "@/contexts/ThemeContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import ErrorBoundary from "@/components/ErrorBoundary";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          {children}
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
