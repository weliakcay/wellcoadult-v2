// Wellco Component Library - PDF Renkleri ile Güncellenmiş
// Bu dosya tüm Wellco özel component'lerini bir arada export eder

// Button Components
export { WellcoButton, wellcoButtonVariants } from "./wellco-button"

// Card Components
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
} from "./wellco-card"

// Input Components
export { WellcoInput, WellcoTextarea } from "./wellco-input"

// Hero Section Components
export { WellcoHeroSection, WellcoTrustHero } from "./wellco-hero"

// Gradient Text (Mevcut)
export { GradientText } from "./gradient-text"

// Re-export existing shadcn/ui components for consistency
export { Button } from "./button"
export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent } from "./card"
export { Input } from "./input"
export { Textarea } from "./textarea"
export { Badge } from "./badge"
export { Dialog, DialogPortal, DialogOverlay, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from "./dialog"
