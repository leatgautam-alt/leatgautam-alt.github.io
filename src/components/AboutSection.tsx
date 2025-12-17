import { Building2, FileCheck, Users, Target, Briefcase, Scale } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Investment-First Mindset",
    description: "We analyze properties through an investor's lens, focusing on long-term appreciation and yield potential rather than quick sales.",
  },
  {
    icon: FileCheck,
    title: "Transparent Documentation",
    description: "Every property comes with complete legal verification, clear title documentation, and full disclosure of all relevant information.",
  },
  {
    icon: Scale,
    title: "Legal Network",
    description: "Strong partnerships with experienced lawyers ensure every transaction is legally sound and properly documented.",
  },
  {
    icon: Building2,
    title: "Quality Construction",
    description: "Our own development projects maintain the highest build standards, with active sites already 50-60% complete.",
  },
  {
    icon: Users,
    title: "Local Expertise",
    description: "Deep-rooted network of brokers, financiers, and professionals in Varanasi and Lucknow for ground-level insights.",
  },
  {
    icon: Briefcase,
    title: "Long-Term Partnership",
    description: "We build lasting relationships with investors, supporting them through multiple property investments over time.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <span className="text-sm font-semibold text-gold uppercase tracking-widest mb-4 block">
            Why Choose Leat
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Real Estate Consulting Built on{" "}
            <span className="relative inline-block">
              Trust
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gold" />
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Lynaxis Estates And Trades Private Limited operates with a singular focus: 
            creating lasting wealth for our clients through strategic, transparent, 
            and quality-driven property investments.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 bg-card rounded-lg border border-border hover:border-gold/50 hover:shadow-elegant transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <feature.icon className="h-7 w-7 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
