import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-real-estate.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern luxury real estate development"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center space-x-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gold-light">
              Trusted Real Estate Consulting
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="animate-fade-up-delay-1 font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Build Wealth Through{" "}
            <span className="text-gold">Strategic</span>{" "}
            Property Investment
          </h1>

          {/* Subheading */}
          <p className="animate-fade-up-delay-2 text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mb-10 font-light leading-relaxed">
            Leat partners with serious investors to identify high-potential real estate 
            opportunities. We focus on long-term value creation with transparent processes 
            and unwavering commitment to quality.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 mb-16">
            <Button variant="gold" size="lg" className="group">
              Start Your Investment Journey
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="hero-outline" size="lg">
              View Our Projects
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="animate-fade-up-delay-3 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gold/20 rounded-lg">
                <TrendingUp className="h-5 w-5 text-gold" />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary-foreground">High Yield Focus</p>
                <p className="text-xs text-primary-foreground/60">Strategic locations</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gold/20 rounded-lg">
                <Shield className="h-5 w-5 text-gold" />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary-foreground">Legal Clarity</p>
                <p className="text-xs text-primary-foreground/60">Complete documentation</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gold/20 rounded-lg">
                <Clock className="h-5 w-5 text-gold" />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary-foreground">On-Time Delivery</p>
                <p className="text-xs text-primary-foreground/60">Strict timelines</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gold rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
