'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { WellcoButton } from '@/components/ui/wellco-button';
import { GradientText } from '@/components/ui/GradientText';
import { WellcoHeroSection } from '@/components/ui/wellco-hero';
import { ArrowRight, Shield, Truck, Bot } from 'lucide-react';

export function HeroSection() {
  useEffect(() => {
    // Parallax scroll effect
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const heroContent = document.getElementById('hero-content');

      if (heroContent) {
        heroContent.style.transform = `translate3d(0, ${-(scrolled * 0.1)}px, 0)`;
        heroContent.style.opacity = String(1 - scrolled / 600);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <WellcoHeroSection
      variant="gradient"
      title={
        <span>
          Sağlık, Mutluluk,
          <br />
          <GradientText>Güven</GradientText>
        </span>
      }
      subtitle="Wellco Adult"
      description={
        <span>
          Cinsel sağlık ve mutluluğunuz için{' '}
          <span className="text-[#6EC3C0] font-medium">eğitici</span>,{' '}
          <span className="text-[#6EC3C0] font-medium">güven odaklı</span> ve{' '}
          <span className="text-[#6EC3C0] font-medium">modern</span> bir platform.
        </span>
      }
      primaryButtonText="Ürünleri Keşfet"
      secondaryButtonText="Sexual Wellness 101"
      primaryButtonHref="/urunler"
      secondaryButtonHref="/blog"
      showStats={true}
      stats={[
        { value: "10K+", label: "Mutlu Müşteri" },
        { value: "500+", label: "Kaliteli Ürün" },
        { value: "24/7", label: "AI Destek" },
      ]}
      trustIndicators={[
        {
          icon: Shield,
          title: "SSL Güvenli Ödeme",
          description: "256-bit SSL şifreleme ile korumalı"
        },
        {
          icon: Truck,
          title: "Gizli Kargo",
          description: "Paket bilgileriniz gizli tutulur"
        },
        {
          icon: Bot,
          title: "7/24 AI Destek",
          description: "Uzman AI danışmanlarımız size yardımcı"
        },
      ]}
    />
  );
}
