import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-serif text-3xl font-bold text-primary-foreground tracking-tight">
                Leat
              </span>
            </div>
            <p className="text-sm text-primary-foreground/60 mb-2">
              Lynaxis Estates And Trades Private Limited
            </p>
            <p className="text-primary-foreground/70 leading-relaxed max-w-md mb-6">
              Building long-term wealth through strategic real estate investments. 
              Trusted consulting with transparent processes and unwavering commitment to quality.
            </p>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-gold" />
              <span className="text-sm text-primary-foreground/70">
                Varanasi, Uttar Pradesh, India
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-primary-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#about", label: "About Us" },
                { href: "#services", label: "Services" },
                { href: "#regions", label: "Regions" },
                { href: "#testimonials", label: "Testimonials" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-primary-foreground mb-6">
              Contact Us
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+917309086686"
                className="flex items-center space-x-3 text-sm text-primary-foreground/70 hover:text-gold transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+91 73090 86686</span>
              </a>
              <a
                href="mailto:contact@leat.in"
                className="flex items-center space-x-3 text-sm text-primary-foreground/70 hover:text-gold transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>contact@leat.in</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/50">
              © {currentYear} Leat - Lynaxis Estates And Trades Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-xs text-primary-foreground/50 hover:text-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-primary-foreground/50 hover:text-gold transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
