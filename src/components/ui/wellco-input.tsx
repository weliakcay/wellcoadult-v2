"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

export interface WellcoInputProps
  extends React.ComponentProps<"input"> {
  variant?: "default" | "mint" | "rose" | "dark"
  label?: string
  error?: string
  success?: string
}

const WellcoInput = React.forwardRef<HTMLInputElement, WellcoInputProps>(
  ({ className, type, variant = "default", label, error, success, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label 
            data-wellco-label
            className={cn(
              "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
              {
                "text-[#111827]": !error && !success,
                "text-[#EF4444]": error,
                "text-[#10B981]": success,
              }
            )}
          >
            {label}
          </label>
        )}
        <div className="relative">
          <input
            type={type}
            data-wellco-input
            data-variant={variant}
            className={cn(
              // Base input styles
              "flex h-10 w-full rounded-lg border bg-background px-3 py-2 text-sm ring-offset-background transition-all",
              "file:border-0 file:bg-transparent file:text-sm file:font-medium",
              "placeholder:text-muted-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wellco-focus-ring focus-visible:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50",
              
              // Variant styles
              {
                "border-[#E5E7EB] focus-visible:border-[#6EC3C0]": variant === "default",
                "border-[#6EC3C0]/20 focus-visible:border-[#6EC3C0] bg-[#6EC3C0]/5": variant === "mint",
                "border-[#FFB3B3]/20 focus-visible:border-[#FFB3B3] bg-[#FFB3B3]/5": variant === "rose",
                "border-[#374151] bg-[#374151] text-white focus-visible:border-[#6EC3C0]": variant === "dark",
              },
              
              // Error and success states
              {
                "border-[#EF4444] focus-visible:ring-[#EF4444]/20": error,
                "border-[#10B981] focus-visible:ring-[#10B981]/20": success,
              },
              
              className
            )}
            ref={ref}
            {...props}
          />
          
          {/* Status icons */}
          {error && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <svg 
                className="w-4 h-4 text-[#EF4444]" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" 
                  clipRule="evenodd" 
                />
              </svg>
            </div>
          )}
          
          {success && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <svg 
                className="w-4 h-4 text-[#10B981]" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                  clipRule="evenodd" 
                />
              </svg>
            </div>
          )}
        </div>
        
        {/* Help text */}
        {error && (
          <p className="text-sm text-[#EF4444]" role="alert">
            {error}
          </p>
        )}
        
        {success && (
          <p className="text-sm text-[#10B981]">
            {success}
          </p>
        )}
      </div>
    )
  }
)

WellcoInput.displayName = "WellcoInput"

export interface WellcoTextareaProps
  extends React.ComponentProps<"textarea"> {
  variant?: "default" | "mint" | "rose" | "dark"
  label?: string
  error?: string
  success?: string
  resize?: "none" | "vertical" | "horizontal" | "both"
}

const WellcoTextarea = React.forwardRef<HTMLTextAreaElement, WellcoTextareaProps>(
  ({ className, variant = "default", label, error, success, resize = "vertical", ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label 
            data-wellco-label
            className={cn(
              "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
              {
                "text-[#111827]": !error && !success,
                "text-[#EF4444]": error,
                "text-[#10B981]": success,
              }
            )}
          >
            {label}
          </label>
        )}
        <div className="relative">
          <textarea
            data-wellco-textarea
            data-variant={variant}
            className={cn(
              // Base textarea styles
              "flex min-h-[80px] w-full rounded-lg border bg-background px-3 py-2 text-sm ring-offset-background transition-all",
              "placeholder:text-muted-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wellco-focus-ring focus-visible:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "resize-none": resize === "none",
              "resize-y": resize === "vertical",
              "resize-x": resize === "horizontal",
              "resize": resize === "both",
              
              // Variant styles
              {
                "border-[#E5E7EB] focus-visible:border-[#6EC3C0]": variant === "default",
                "border-[#6EC3C0]/20 focus-visible:border-[#6EC3C0] bg-[#6EC3C0]/5": variant === "mint",
                "border-[#FFB3B3]/20 focus-visible:border-[#FFB3B3] bg-[#FFB3B3]/5": variant === "rose",
                "border-[#374151] bg-[#374151] text-white focus-visible:border-[#6EC3C0]": variant === "dark",
              },
              
              // Error and success states
              {
                "border-[#EF4444] focus-visible:ring-[#EF4444]/20": error,
                "border-[#10B981] focus-visible:ring-[#10B981]/20": success,
              },
              
              className
            )}
            ref={ref}
            {...props}
          />
          
          {/* Status icons for textarea */}
          {(error || success) && (
            <div className="absolute right-3 top-3">
              {error && (
                <svg 
                  className="w-4 h-4 text-[#EF4444]" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" 
                    clipRule="evenodd" 
                  />
                </svg>
              )}
              
              {success && (
                <svg 
                  className="w-4 h-4 text-[#10B981]" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                    clipRule="evenodd" 
                  />
                </svg>
              )}
            </div>
          )}
        </div>
        
        {/* Help text */}
        {error && (
          <p className="text-sm text-[#EF4444]" role="alert">
            {error}
          </p>
        )}
        
        {success && (
          <p className="text-sm text-[#10B981]">
            {success}
          </p>
        )}
      </div>
    )
  }
)

WellcoTextarea.displayName = "WellcoTextarea"

export { WellcoInput, WellcoTextarea }
