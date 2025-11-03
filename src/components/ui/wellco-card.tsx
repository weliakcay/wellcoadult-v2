"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

interface WellcoCardProps extends React.ComponentProps<"div"> {
  variant?: "default" | "mint" | "rose" | "dark" | "gradient" | "soft"
  hover?: boolean
  glow?: boolean
  size?: "sm" | "default" | "lg"
}

function WellcoCard({ 
  className, 
  variant = "default", 
  hover = false,
  glow = false,
  size = "default",
  ...props 
}: WellcoCardProps) {
  return (
    <div
      data-wellco-card
      data-variant={variant}
      data-hover={hover}
      data-glow={glow}
      data-size={size}
      className={cn(
        // Base card styles
        "rounded-xl border transition-all duration-300",
        
        // Size variants
        {
          "p-3": size === "sm",
          "p-6": size === "default", 
          "p-8": size === "lg",
        },
        
        // Variant styles
        {
          "bg-card text-card-foreground shadow-sm": variant === "default",
          "bg-[#6EC3C0]/10 border-[#6EC3C0]/20 text-[#111827]": variant === "mint",
          "bg-[#FFB3B3]/10 border-[#FFB3B3]/20 text-[#111827]": variant === "rose", 
          "bg-[#111827] text-white border-[#374151]": variant === "dark",
          "bg-gradient-to-br from-[#6EC3C0]/10 to-[#FFB3B3]/10 border-[#6EC3C0]/20": variant === "gradient",
          "bg-[#F9FAFB] border-[#E5E7EB]": variant === "soft",
        },
        
        // Hover effects
        {
          "hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1": hover,
        },
        
        // Glow effects
        {
          "hover:shadow-[0_0_30px_rgba(110,195,192,0.3)]": glow && variant === "mint",
          "hover:shadow-[0_0_30px_rgba(255,179,179,0.3)]": glow && variant === "rose",
          "hover:shadow-[0_0_30px_rgba(17,24,39,0.3)]": glow && variant === "dark",
        },
        
        className
      )}
      {...props}
    />
  )
}

function WellcoCardHeader({ 
  className, 
  ...props 
}: React.ComponentProps<"div">) {
  return (
    <div
      data-wellco-card-header
      className={cn(
        "flex flex-col space-y-1.5 pb-4",
        className
      )}
      {...props}
    />
  )
}

function WellcoCardTitle({ 
  className, 
  ...props 
}: React.ComponentProps<"div">) {
  return (
    <div
      data-wellco-card-title
      className={cn(
        "text-lg font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function WellcoCardDescription({ 
  className, 
  ...props 
}: React.ComponentProps<"div">) {
  return (
    <div
      data-wellco-card-description
      className={cn(
        "text-sm text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function WellcoCardContent({ 
  className, 
  ...props 
}: React.ComponentProps<"div">) {
  return (
    <div
      data-wellco-card-content
      className={cn("pt-0", className)}
      {...props}
    />
  )
}

function WellcoCardFooter({ 
  className, 
  ...props 
}: React.ComponentProps<"div">) {
  return (
    <div
      data-wellco-card-footer
      className={cn(
        "flex items-center pt-4",
        className
      )}
      {...props}
    />
  )
}

// Specialized cards
function WellcoFeatureCard({ 
  className, 
  icon: Icon, 
  title, 
  description, 
  ...props 
}: React.ComponentProps<"div"> & {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}) {
  return (
    <WellcoCard
      variant="mint"
      hover
      className={cn("text-center", className)}
      {...props}
    >
      <div className="flex flex-col items-center space-y-3">
        <div className="w-12 h-12 bg-[#6EC3C0] rounded-full flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-[#111827]">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </WellcoCard>
  )
}

function WellcoTestimonialCard({ 
  className, 
  quote, 
  author, 
  role,
  ...props 
}: React.ComponentProps<"div"> & {
  quote: string
  author: string
  role: string
}) {
  return (
    <WellcoCard
      variant="soft"
      className={cn("relative", className)}
      {...props}
    >
      <div className="flex flex-col space-y-3">
        <div className="text-4xl text-[#6EC3C0] leading-none">"</div>
        <p className="text-gray-700 italic">{quote}</p>
        <div className="border-t pt-3">
          <p className="font-semibold text-[#111827]">{author}</p>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </WellcoCard>
  )
}

function WellcoProductCard({ 
  className, 
  image, 
  title, 
  price, 
  badge,
  onAddToCart,
  ...props 
}: React.ComponentProps<"div"> & {
  image: string
  title: string
  price: string
  badge?: string
  onAddToCart?: () => void
}) {
  return (
    <WellcoCard
      hover
      glow
      className={cn("overflow-hidden", className)}
      {...props}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover rounded-t-xl"
        />
        {badge && (
          <div className="absolute top-2 right-2 bg-[#6EC3C0] text-white px-2 py-1 rounded-full text-xs font-medium">
            {badge}
          </div>
        )}
      </div>
      
      <div className="p-4 space-y-3">
        <h3 className="font-semibold text-[#111827]">{title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-[#6EC3C0]">{price}</span>
          <WellcoButton
            variant="primary"
            size="sm"
            onClick={onAddToCart}
          >
            Sepete Ekle
          </WellcoButton>
        </div>
      </div>
    </WellcoCard>
  )
}

export {
  WellcoCard,
  WellcoCardHeader,
  WellcoCardFooter,
  WellcoCardTitle,
  WellcoCardDescription,
  WellcoCardContent,
  WellcoFeatureCard,
  WellcoTestimonialCard,
  WellcoProductCard,
}
