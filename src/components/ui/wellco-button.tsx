"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const wellcoButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-wellco-focus-ring",
  {
    variants: {
      variant: {
        // Primary button - Mint color from PDF
        primary: "bg-[#6EC3C0] text-white hover:bg-[#4A9B9D] shadow-lg hover:shadow-xl hover:scale-105 active:scale-95",
        
        // Secondary button - Rose/Pink color from PDF  
        secondary: "bg-[#FFB3B3] text-[#111827] hover:bg-[#E68B8B] shadow-md hover:shadow-lg",
        
        // Outline variant with mint
        outline: "border-2 border-[#6EC3C0] bg-transparent text-[#6EC3C0] hover:bg-[#6EC3C0] hover:text-white",
        
        // Ghost variant
        ghost: "hover:bg-[#F9FAFB] text-[#111827] hover:text-[#6EC3C0]",
        
        // Dark variant for dark backgrounds
        dark: "bg-[#111827] text-white hover:bg-[#374151] hover:text-[#6EC3C0]",
        
        // Gradient variant with mint-rose
        gradient: "bg-gradient-to-r from-[#6EC3C0] to-[#FFB3B3] text-white hover:from-[#4A9B9D] hover:to-[#E68B8B] shadow-lg",
        
        // Success variant
        success: "bg-[#10B981] text-white hover:bg-[#059669]",
        
        // Warning variant
        warning: "bg-[#F59E0B] text-white hover:bg-[#D97706]",
        
        // Error variant
        error: "bg-[#EF4444] text-white hover:bg-[#DC2626]",
      },
      size: {
        default: "h-10 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 text-xs",
        lg: "h-12 rounded-lg px-8 has-[>svg]:px-6 text-base",
        xl: "h-14 rounded-lg px-10 has-[>svg]:px-8 text-lg",
        icon: "size-10",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface WellcoButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof wellcoButtonVariants> {
  asChild?: boolean
}

function WellcoButton({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: WellcoButtonProps) {
  const Comp = asChild ? "span" : "button"
  
  return (
    <Comp
      data-wellco-button
      className={cn(wellcoButtonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { WellcoButton, wellcoButtonVariants }
