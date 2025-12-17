import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Leat helped me identify a property with real long-term potential. Their transparency and clarity stood out from typical brokers. I finally found a team that thinks like an investor.",
    author: "Mukesh Kumar",
    location: "Varanasi",
    investment: "Residential Investment",
  },
  {
    quote: "The legal documentation process was seamless. Every paper was in order, and I never had to worry about hidden issues. This level of professionalism is rare in real estate.",
    author: "Priya Sharma",
    location: "Lucknow",
    investment: "Commercial Property",
  },
  {
    quote: "What impressed me most was their honest assessment of properties. They told me to wait on some deals because the timing wasn't right. That's integrity you can trust.",
    author: "Rajesh Verma",
    location: "Varanasi",
    investment: "Land Investment",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-primary">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-gold uppercase tracking-widest mb-4 block">
            Client Stories
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Trusted by{" "}
            <span className="text-gold">Serious Investors</span>
          </h2>
          <p className="text-lg text-primary-foreground/70 leading-relaxed">
            Our clients value transparency, expertise, and long-term thinking. 
            Here's what they have to say about working with Leat.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="group relative bg-primary-foreground/5 backdrop-blur-sm rounded-lg p-8 border border-primary-foreground/10 hover:border-gold/30 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                  <Quote className="h-5 w-5 text-primary" />
                </div>
              </div>

              {/* Quote Text */}
              <blockquote className="mt-4 mb-8">
                <p className="text-primary-foreground/90 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </blockquote>

              {/* Author */}
              <div className="border-t border-primary-foreground/10 pt-6">
                <p className="font-serif text-lg font-semibold text-primary-foreground">
                  {testimonial.author}
                </p>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-sm text-primary-foreground/60">
                    {testimonial.location}
                  </p>
                  <span className="text-xs font-medium text-gold uppercase tracking-wider">
                    {testimonial.investment}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
