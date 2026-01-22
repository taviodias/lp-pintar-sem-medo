import React, { useEffect, type ReactNode } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

export default function HotmartPayment({
  children,
  className,
}: {
  children: ReactNode;
  className?: React.ComponentProps<"button">["className"];
}) {
  const isMobile = useIsMobile();
  useEffect(() => {
    const scriptId = "hotmart-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "https://static.hotmart.com/checkout/widget.min.js";
      script.id = scriptId; // Adiciona ID para verificação
      script.async = true;
      document.head.appendChild(script);

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = "https://static.hotmart.com/css/hotmart-fb.min.css";
      document.head.appendChild(link);
    }
  }, []);

  const buttonClick = (e: React.MouseEvent) => {
    if (!isMobile) {
      e.preventDefault();
    }
  };

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
        onClick={buttonClick}
        href="https://pay.hotmart.com/N103746015V?checkoutMode=2"
        className="hotmart-fb"
      >
        {children}
      </a>
    </Button>
  );
}
