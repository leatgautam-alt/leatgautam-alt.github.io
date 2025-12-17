import { MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const regions = [
  {
    city: "Varanasi",
    status: "Primary Market",
    description: "Our home base with deep local networks, active construction projects, and established broker relationships. Strong growth potential in emerging localities.",
    highlights: ["Active projects under construction", "Strong broker network", "High-growth localities"],
  },
  {
    city: "Lucknow",
    status: "Primary Market",
    description: "State capital with robust infrastructure development and expanding real estate market. Ideal for both residential and commercial investments.",
    highlights: ["Capital city opportunities", "Infrastructure growth", "Premium locations"],
  },
  {
    city: "Tier 2 Expansion",
    status: "Strategic Growth",
    description: "Planned expansion into select Tier 2 cities offering higher growth yields. Early-mover advantage in emerging markets with strong fundamentals.",
    highlights: ["Higher yield potential", "Emerging opportunities", "Strategic selection"],
  },
];

const RegionsSection = () => {
  return (
    <section id="regions" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-gold uppercase tracking-widest mb-4 block">
            Geographic Focus
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Strategic Presence in{" "}
            <span className="text-gold">High-Growth Markets</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We focus on markets where local expertise and strong networks enable us to 
            identify the best investment opportunities before they become mainstream.
          </p>
        </div>

        {/* Regions Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {regions.map((region, index) => (
            <div
              key={region.city}
              className="group relative bg-card rounded-lg border border-border overflow-hidden hover:border-gold/50 hover:shadow-elegant transition-all duration-300"
            >
              {/* Header */}
              <div className="p-8 pb-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-gold" />
                    <span className="text-xs font-medium text-gold uppercase tracking-wider">
                      {region.status}
                    </span>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-gold transition-colors" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                  {region.city}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {region.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="p-8 pt-0">
                <div className="pt-6 border-t border-border">
                  <ul className="space-y-3">
                    {region.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mr-3" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Explore Investment Opportunities
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RegionsSection;
