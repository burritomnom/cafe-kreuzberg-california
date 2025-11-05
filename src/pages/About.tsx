import { Heart, Award, Users, Coffee } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Coffee,
      title: "Quality First",
      description: "We source the finest ingredients and craft everything with care, from our specialty coffee to our creative cuisine.",
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "We're more than a cafe - we're a gathering place for creativity, connection, and conversation.",
    },
    {
      icon: Heart,
      title: "Sustainable Practices",
      description: "We prioritize local suppliers, sustainable sourcing, and environmentally conscious operations.",
    },
    {
      icon: Award,
      title: "Excellence in Service",
      description: "Our team is passionate about creating exceptional experiences for every guest, every day.",
    },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Our Story
          </p>
          <h1 className="text-5xl font-bold mb-6">
            Where European Elegance Meets California Soul
          </h1>
          <p className="text-xl text-muted-foreground">
            Since 2010, we've been creating a unique third space where community thrives 
            from morning until evening.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">The Beginning</h2>
            <p className="text-lg text-muted-foreground">
              Kreuzberg was born from a simple vision: create a space that feels like home, 
              serves exceptional coffee, and brings people together. Inspired by the vibrant 
              cafe culture of Berlin and the laid-back California lifestyle, we set out to 
              build something special in San Luis Obispo.
            </p>
            <p className="text-lg text-muted-foreground">
              Our name, Kreuzberg, pays homage to one of Berlin's most creative and diverse 
              neighborhoods - a place where art, culture, and community intersect. We've 
              brought that same spirit to California, creating a welcoming environment where 
              everyone belongs.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Philosophy</h2>
            <p className="text-lg text-muted-foreground">
              <em>De Mane Usque Ad Vesperum</em> - from morning until evening - isn't just 
              our tagline, it's our promise. We're here for your morning coffee, your 
              afternoon workspace, your lunch meeting, and your evening cocktail.
            </p>
            <p className="text-lg text-muted-foreground">
              We believe in the power of good food, great coffee, and genuine connection. 
              Every item on our menu is crafted with care, every space is designed for 
              comfort, and every interaction is an opportunity to brighten someone's day.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What We Stand For</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our values guide everything we do, from sourcing ingredients to serving guests.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="hover:shadow-medium transition-smooth">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Section */}
        <div className="bg-muted rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            We love our community. Come be creative with us. Whether you're here for a quick 
            espresso or settling in for the afternoon, you're part of the Kreuzberg family.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">15+</p>
              <p className="text-muted-foreground">Years in Business</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">100+</p>
              <p className="text-muted-foreground">Events per Year</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">2</p>
              <p className="text-muted-foreground">San Luis Obispo Locations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
