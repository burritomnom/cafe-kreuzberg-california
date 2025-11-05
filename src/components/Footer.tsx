import { Link } from "react-router-dom";
import { Coffee, Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">Kreuzberg</span>
            </div>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              European elegance meets California casual. From morning until evening.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/60 hover:text-primary transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/60 hover:text-primary transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link to="/menu" className="text-sm text-secondary-foreground/80 hover:text-primary transition-smooth">
                Menu
              </Link>
              <Link to="/locations" className="text-sm text-secondary-foreground/80 hover:text-primary transition-smooth">
                Locations
              </Link>
              <Link to="/events" className="text-sm text-secondary-foreground/80 hover:text-primary transition-smooth">
                Events
              </Link>
              <Link to="/contact" className="text-sm text-secondary-foreground/80 hover:text-primary transition-smooth">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="flex flex-col gap-3 text-sm text-secondary-foreground/80">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>685 Higuera St</p>
                  <p>San Luis Obispo, CA 93401</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:8054392060" className="hover:text-primary transition-smooth">
                  (805) 439-2060
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:hello@kreuzberg.cafe" className="hover:text-primary transition-smooth">
                  hello@kreuzberg.cafe
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Subscribe to our newsletter for updates and special offers.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50"
              />
              <Button variant="default" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-12 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Kreuzberg Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
