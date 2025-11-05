import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Get in Touch
          </p>
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. 
            Reach out and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone (Optional)</Label>
                  <Input id="phone" type="tel" placeholder="(805) 555-1234" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What's this about?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us what's on your mind..."
                    rows={6}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info Cards */}
          <div className="space-y-6">
            <Card className="hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Our Locations</h3>
                    <div className="space-y-3 text-muted-foreground">
                      <div>
                        <p className="font-medium text-foreground">Downtown</p>
                        <p className="text-sm">685 Higuera St</p>
                        <p className="text-sm">San Luis Obispo, CA 93401</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Duncan Alley</p>
                        <p className="text-sm">1108 Broad St</p>
                        <p className="text-sm">San Luis Obispo, CA 93401</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Phone</h3>
                    <a
                      href="tel:8054392060"
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      (805) 439-2060
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <a
                      href="mailto:hello@kreuzberg.cafe"
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      hello@kreuzberg.cafe
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Hours</h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p className="text-sm">Monday - Sunday</p>
                      <p className="text-sm font-medium text-foreground">8:00 AM - 9:00 PM</p>
                      <p className="text-xs mt-2">Both locations</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-muted rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-semibold text-lg mb-2">Do you take reservations?</h3>
              <p className="text-muted-foreground">
                We accept reservations for parties of 6 or more. For smaller groups, 
                we operate on a first-come, first-served basis.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Do you have WiFi?</h3>
              <p className="text-muted-foreground">
                Yes! Free WiFi is available at both locations. We're a laptop-friendly 
                workspace during daytime hours.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Are you dog-friendly?</h3>
              <p className="text-muted-foreground">
                Well-behaved dogs are welcome on our outdoor patio areas at both locations.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Do you cater events?</h3>
              <p className="text-muted-foreground">
                Yes! We offer catering services and private event space. Contact us for 
                details and availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
