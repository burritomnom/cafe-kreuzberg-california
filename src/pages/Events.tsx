import { Calendar, Music, Users, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Live Jazz Night",
      date: "Every Friday, 7pm - 10pm",
      location: "Downtown Location",
      description: "Join us for smooth jazz featuring local musicians. Perfect for date night or catching up with friends over craft cocktails.",
    },
    {
      title: "Saturday Acoustic Sessions",
      date: "Every Saturday, 8pm - 11pm",
      location: "Downtown Location",
      description: "Intimate acoustic performances from talented singer-songwriters in our community.",
    },
    {
      title: "Sunday Brunch & Mimosas",
      date: "Every Sunday, 10am - 2pm",
      location: "Both Locations",
      description: "Extended brunch menu with bottomless mimosas. Reservations recommended for parties of 6 or more.",
    },
    {
      title: "Art Opening Reception",
      date: "First Thursday of Each Month, 6pm - 9pm",
      location: "Duncan Alley Location",
      description: "Celebrate local artists with rotating exhibitions. Complimentary wine and appetizers.",
    },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Events & Live Music
          </p>
          <h1 className="text-5xl font-bold mb-4">What's Happening</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From live music to art openings, there's always something special happening at Kreuzberg. 
            Join us for unforgettable experiences.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-medium transition-smooth">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    {event.title.includes("Jazz") || event.title.includes("Acoustic") ? (
                      <Music className="h-6 w-6 text-primary" />
                    ) : event.title.includes("Art") ? (
                      <Users className="h-6 w-6 text-primary" />
                    ) : (
                      <Calendar className="h-6 w-6 text-primary" />
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <p className="text-sm font-medium text-primary mb-4">{event.location}</p>
                  <p className="text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Private Events */}
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Private Events & Catering</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Looking for the perfect venue for your next celebration? Both of our locations 
                are available for private events, from intimate gatherings to larger celebrations.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Corporate meetings and team building events</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Birthday parties and celebrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Wedding receptions and rehearsal dinners</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Art shows and community gatherings</span>
                </li>
              </ul>
              <Button size="lg" className="gap-2">
                <Mail className="h-4 w-4" />
                Inquire About Private Events
              </Button>
            </div>
            <div className="bg-background rounded-xl p-8 shadow-medium">
              <h3 className="text-2xl font-bold mb-4">Event Packages Include:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Dedicated event space for 2-6 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Customized food and beverage menus</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Professional barista and bar service</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Audio equipment for presentations or music</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Setup and cleanup services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center bg-muted rounded-2xl p-12">
          <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter to receive updates about upcoming events, 
            live music schedules, and special announcements.
          </p>
          <Button size="lg" variant="default">
            Subscribe to Newsletter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Events;
