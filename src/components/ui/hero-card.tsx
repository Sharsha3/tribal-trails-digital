import * as React from "react"
import { cn } from "@/lib/utils"

export interface HeroCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "elevated"
  children: React.ReactNode
}

const HeroCard = React.forwardRef<HTMLDivElement, HeroCardProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg transition-smooth",
          {
            "card-gradient shadow-soft border border-border/20": variant === "default",
            "bg-white/10 backdrop-blur-md border border-white/20 shadow-medium": variant === "glass",
            "card-gradient shadow-strong hover:shadow-glow hover:-translate-y-1 transition-spring": variant === "elevated",
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
HeroCard.displayName = "HeroCard"

export { HeroCard }