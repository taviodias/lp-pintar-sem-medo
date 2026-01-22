import React, { useEffect, type ReactNode } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function HotmartPayment({
  children,
  className,
}: {
  children: ReactNode;
  className?: React.ComponentProps<"button">["className"];
}) {
  useEffect(() => {
    // This part might not be strictly necessary if Hotmart provides a single script file,
    // but helps manage script loading if it is dynamic.
    const scriptId = "hotmart-script";
    if (!document.getElementById(scriptId)) {
      // 1. Injetar o Script
      const script = document.createElement("script");
      script.src = "https://static.hotmart.com/checkout/widget.min.js";
      script.id = scriptId; // Adiciona ID para verificação
      script.async = true;
      document.head.appendChild(script);

      // 2. Injetar o CSS
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = "https://static.hotmart.com/css/hotmart-fb.min.css";
      document.head.appendChild(link);
    }
  }, []);

  return (
    <Button
      asChild
      size="lg"
      className={cn(
        className,
        "bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-full shadow-elegant transition-all duration-300 hover:scale-105",
      )}
    >
      <a
        onClick={(e) => e.preventDefault()}
        href="https://pay.hotmart.com/N103746015V?checkoutMode=2"
        className="hotmart-fb"
      >
        {children}
      </a>
    </Button>
  );
}
