import { Phone, Mail, MessageCircle, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/917309086686?text=Hello%2C%20I%27m%20interested%20in%20real%20estate%20consulting%20services.", "_blank");
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-cream-dark">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <span className="text-sm font-semibold text-gold uppercase tracking-widest mb-4 block">
              Get In Touch
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Ready to Start Your{" "}
              <span className="text-gold">Investment Journey?</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Whether you're exploring your first real estate investment or looking to 
              expand your portfolio, our team is ready to provide personalized guidance 
              tailored to your goals.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6">
              <a
                href="tel:+917309086686"
                className="flex items-center gap-5 p-5 bg-card rounded-lg border border-border hover:border-gold/30 hover:shadow-soft transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Phone className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Call Us</p>
                  <p className="font-serif text-xl font-semibold text-primary">
                    +91 73090 86686
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground ml-auto group-hover:text-gold group-hover:translate-x-1 transition-all" />
              </a>

              <a
                href="mailto:contact@leat.in"
                className="flex items-center gap-5 p-5 bg-card rounded-lg border border-border hover:border-gold/30 hover:shadow-soft transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Mail className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email Us</p>
                  <p className="font-serif text-xl font-semibold text-primary">
                    contact@leat.in
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground ml-auto group-hover:text-gold group-hover:translate-x-1 transition-all" />
              </a>

              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center gap-5 p-5 bg-card rounded-lg border border-border hover:border-gold/30 hover:shadow-soft transition-all duration-300 group text-left"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <MessageCircle className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">WhatsApp</p>
                  <p className="font-serif text-xl font-semibold text-primary">
                    +91 73090 86686
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground ml-auto group-hover:text-gold group-hover:translate-x-1 transition-all" />
              </button>
            </div>
          </div>

          {/* Right - CTA Card */}
          <div className="flex items-center">
            <div className="w-full bg-primary rounded-lg p-10 lg:p-12">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-6 w-6 text-gold" />
                <span className="text-sm font-medium text-gold uppercase tracking-wider">
                  Based in Varanasi
                </span>
              </div>
              <h3 className="font-serif text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
                Schedule a Free Consultation
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed mb-8">
                Discuss your investment goals with our experts. We'll analyze your 
                requirements and present curated opportunities aligned with your 
                wealth-building objectives.
              </p>
              
              <div className="space-y-4">
                <Button
                  variant="gold"
                  size="lg"
                  className="w-full"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Message on WhatsApp
                </Button>
                <Button
                  variant="hero-outline"
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <a href="tel:+917309086686">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>

              <p className="text-xs text-primary-foreground/50 text-center mt-6">
                No obligation. We respect your time and privacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
