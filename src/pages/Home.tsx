import Hero from "@/components/Hero";
import LocationCard from "@/components/LocationCard";
import { Coffee, Users, Music, Wifi, Leaf, Beer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import coffeeSpread from "@/assets/coffee-spread.jpg";
import locationDowntown from "@/assets/location-downtown.jpg";
import locationAlley from "@/assets/location-alley.jpg";

const Home = () => {
  const features = [
    { icon: Coffee, title: "Specialty Coffee", description: "Artisanal beans, expertly crafted" },
    { icon: Users, title: "Community Hub", description: "A creative space for everyone" },
    { icon: Music, title: "Live Music", description: "Local artists every weekend" },
    { icon: Wifi, title: "Work Friendly", description: "Free WiFi and cozy workspace" },
    { icon: Leaf, title: "Vegan Options", description: "Plant-based menu selections" },
    { icon: Beer, title: "Full Bar", description: "Craft cocktails and local brews" },
  ];

  return (
    <div className="pt-20">
      <Hero />

      {/* Our Story Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">
                Our Story
              </p>
              <h2 className="text-4xl font-bold mb-6">
                Where Berlin Meets California
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Since 2010, we've been creating a unique space where European sophistication 
                meets California casual. More than just a cafe, we're a community gathering place 
                that transforms throughout the day.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Start your morning with artisanal coffee and fresh pastries, settle in for lunch 
                with creative sandwiches and salads, and end your evening with craft cocktails and 
                live music. We love our community. Come be creative with us.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-background rounded-lg">
                  <p className="text-3xl font-bold text-primary">15+</p>
                  <p className="text-sm text-muted-foreground">Years Serving</p>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <p className="text-3xl font-bold text-primary">2</p>
                  <p className="text-sm text-muted-foreground">Locations</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={coffeeSpread}
                alt="Artisanal coffee and pastries at Kreuzberg Cafe"
                className="rounded-lg shadow-large w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">
              What We Offer
            </p>
            <h2 className="text-4xl font-bold">Your Third Space</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center hover:shadow-medium transition-smooth group">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-smooth">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">
              Visit Us
            </p>
            <h2 className="text-4xl font-bold mb-4">Two Locations to Serve You</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each location offers a unique atmosphere while maintaining the same commitment 
              to quality and community.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <LocationCard
              name="Downtown"
              address="685 Higuera St, San Luis Obispo, CA 93401"
              phone="(805) 439-2060"
              hours="Daily: 8am - 9pm"
              image={locationDowntown}
              mapLink="https://maps.google.com/?q=685+Higuera+St,+San+Luis+Obispo,+CA+93401"
            />
            <LocationCard
              name="Duncan Alley"
              address="1108 Broad St, San Luis Obispo, CA 93401"
              phone="(805) 439-2060"
              hours="Daily: 8am - 9pm"
              image={locationAlley}
              mapLink="https://maps.google.com/?q=1108+Broad+St,+San+Luis+Obispo,+CA+93401"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
