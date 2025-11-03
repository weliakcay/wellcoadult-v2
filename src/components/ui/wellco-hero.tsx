"use client"

import * as React from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { WellcoButton } from "@/components/ui/wellco-button"
import { WellcoCard } from "@/components/ui/wellco-card"

interface WellcoHeroSectionProps {
  title: string
  subtitle?: string
  description?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonHref?: string
  image?: {
    src: string
    alt: string
    width?: number
    height?: number
  }
  stats?: Array<{
    value: string
    label: string
  }>
  className?: string
  variant?: "default" | "gradient" | "dark"
  showStats?: boolean
  showImage?: boolean
}

export function WellcoHeroSection({
  title,
  subtitle,
  description,
  primaryButtonText = "Keşfet",
  secondaryButtonText = "Daha Fazla",
  primaryButtonHref = "#products",
  secondaryButtonHref = "#about",
  image,
  stats,
  className,
  variant = "default",
  showStats = true,
  showImage = true,
}: WellcoHeroSectionProps) {
  return (
    <section
      data-wellco-hero
      className={cn(
        "relative overflow-hidden",
        {
          "bg-gradient-to-br from-[#111827] to-[#374151] text-white": variant === "dark",
          "bg-gradient-to-br from-[#F9FAFB] to-[#FFFFFF]": variant === "default",
          "bg-gradient-to-br from-[#6EC3C0]/10 to-[#FFB3B3]/10": variant === "gradient",
        },
        className
      )}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#6EC3C0]/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#FFB3B3]/20 rounded-full blur-3xl animate-float-medium" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#6EC3C0]/10 to-[#FFB3B3]/10 rounded-full blur-3xl animate-float" />
      </div>

      <div className="relative container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="space-y-8">
            {/* Badge/Subtitle */}
            {subtitle && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#6EC3C0]/10 border border-[#6EC3C0]/20 rounded-full">
                <span className="w-2 h-2 bg-[#6EC3C0] rounded-full animate-pulse" />
                <span className={cn(
                  "text-sm font-medium",
                  variant === "dark" ? "text-[#6EC3C0]" : "text-[#6EC3C0]"
                )}>
                  {subtitle}
                </span>
              </div>
            )}

            {/* Title */}
            <h1 className={cn(
              "text-4xl lg:text-6xl font-bold leading-tight",
              variant === "dark" ? "text-white" : "text-[#111827]",
              "animate-slide-up"
            )}>
              {title}
            </h1>

            {/* Description */}
            {description && (
              <p className={cn(
                "text-lg lg:text-xl leading-relaxed max-w-xl",
                variant === "dark" ? "text-gray-300" : "text-gray-600",
                "animate-slide-up"
              )}>
                {description}
              </p>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
              <WellcoButton
                variant={variant === "dark" ? "primary" : "primary"}
                size="lg"
                asChild
                className="animate-glow"
              >
                <a href={primaryButtonHref}>{primaryButtonText}</a>
              </WellcoButton>
              
              <WellcoButton
                variant={variant === "dark" ? "outline" : "outline"}
                size="lg"
                asChild
              >
                <a href={secondaryButtonHref}>{secondaryButtonText}</a>
              </WellcoButton>
            </div>

            {/* Stats */}
            {showStats && stats && stats.length > 0 && (
              <div className="grid grid-cols-3 gap-4 pt-8 animate-fade-in">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={cn(
                      "text-2xl lg:text-3xl font-bold",
                      variant === "dark" ? "text-[#6EC3C0]" : "text-[#6EC3C0]"
                    )}>
                      {stat.value}
                    </div>
                    <div className={cn(
                      "text-sm font-medium",
                      variant === "dark" ? "text-gray-400" : "text-gray-600"
                    )}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Image Column */}
          {showImage && image && (
            <div className="relative animate-fade-in">
              <div className="relative">
                {/* Card Container */}
                <WellcoCard
                  variant={variant === "dark" ? "dark" : "gradient"}
                  className="p-0 overflow-hidden"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </WellcoCard>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#6EC3C0] rounded-full animate-float-fast opacity-80" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#FFB3B3] rounded-full animate-float-medium opacity-80" />
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-[#6EC3C0] rounded-full animate-float-slow opacity-60" />
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#6EC3C0]/20 to-[#FFB3B3]/20 rounded-xl blur-xl -z-10" />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

// Alternative hero with trust indicators
interface WellcoTrustHeroProps extends WellcoHeroSectionProps {
  trustIndicators?: Array<{
    icon: React.ComponentType<{ className?: string }>
    title: string
    description: string
  }>
}

export function WellcoTrustHero({
  trustIndicators,
  ...props
}: WellcoTrustHeroProps) {
  return (
    <>
      <WellcoHeroSection {...props} />
      
      {trustIndicators && trustIndicators.length > 0 && (
        <div className="bg-[#F9FAFB] py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {trustIndicators.map((indicator, index) => (
                <WellcoCard
                  key={index}
                  variant="soft"
                  className="text-center"
                >
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-12 h-12 bg-[#6EC3C0]/10 rounded-full flex items-center justify-center">
                      <indicator.icon className="w-6 h-6 text-[#6EC3C0]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#111827] mb-2">
                        {indicator.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {indicator.description}
                      </p>
                    </div>
                  </div>
                </WellcoCard>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
