import { TrendingUp, Building, Search, Handshake } from "lucide-react";
import constructionImage from "@/assets/construction-progress.jpg";

const services = [
  {
    icon: Search,
    title: "Property Analysis",
    description: "In-depth evaluation of properties focusing on location potential, market trends, and long-term appreciation prospects.",
  },
  {
    icon: TrendingUp,
    title: "Investment Strategy",
    description: "Customized wealth-building strategies aligned with your financial goals, risk tolerance, and investment timeline.",
  },
  {
    icon: Building,
    title: "Project Development",
    description: "Direct investment opportunities in our own high-quality construction projects with transparent progress updates.",
  },
  {
    icon: Handshake,
    title: "Transaction Support",
    description: "End-to-end assistance with documentation, legal verification, and smooth closing of property transactions.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-cream-dark">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-sm font-semibold text-gold uppercase tracking-widest mb-4 block">
              Our Services
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Comprehensive Consulting for{" "}
              <span className="text-gold">Smart Investors</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Whether you're seeking long-term wealth creation through strategic holdings 
              or exploring selective short-term opportunities, Leat provides the expertise 
              and local knowledge to make informed decisions.
            </p>

            {/* Services List */}
            <div className="space-y-6">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="flex gap-5 p-5 bg-card rounded-lg border border-border hover:border-gold/30 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <service.icon className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-primary mb-1">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-elegant">
              <img
                src={constructionImage}
                alt="Leat construction project in progress"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              
              {/* Overlay Stats */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-card/95 backdrop-blur-sm rounded-lg p-6 border border-border">
                  <p className="text-sm text-muted-foreground mb-2">Active Projects</p>
                  <div className="flex items-end gap-2">
                    <span className="font-serif text-4xl font-bold text-primary">50-60%</span>
                    <span className="text-sm text-muted-foreground pb-1">Completed</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Multiple projects under construction in Varanasi with more signed for upcoming years
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold/10 rounded-lg -z-10" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
