import LocationCard from "@/components/LocationCard";
import locationDowntown from "@/assets/location-downtown.jpg";
import locationAlley from "@/assets/location-alley.jpg";

const Locations = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Visit Us
          </p>
          <h1 className="text-5xl font-bold mb-4">Our Locations</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Two unique spaces in San Luis Obispo, each offering the same commitment to 
            quality, community, and exceptional experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <LocationCard
              name="Downtown"
              address="685 Higuera St, San Luis Obispo, CA 93401"
              phone="(805) 439-2060"
              hours="Daily: 8am - 9pm"
              image={locationDowntown}
              mapLink="https://maps.google.com/?q=685+Higuera+St,+San+Luis+Obispo,+CA+93401"
            />
            <div className="mt-6 space-y-4">
              <h3 className="text-2xl font-bold">Downtown Location</h3>
              <p className="text-muted-foreground">
                Our flagship location in the heart of downtown SLO features a spacious patio, 
                perfect for people-watching while enjoying your morning coffee or evening cocktail. 
                This is where it all began, and it remains a beloved gathering spot for locals 
                and visitors alike.
              </p>
              <div className="space-y-2">
                <p className="font-semibold">Features:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Outdoor patio seating</li>
                  <li>Full bar and cocktail menu</li>
                  <li>Live music on weekends</li>
                  <li>WiFi and laptop-friendly workspace</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <LocationCard
              name="Duncan Alley"
              address="1108 Broad St, San Luis Obispo, CA 93401"
              phone="(805) 439-2060"
              hours="Daily: 8am - 9pm"
              image={locationAlley}
              mapLink="https://maps.google.com/?q=1108+Broad+St,+San+Luis+Obispo,+CA+93401"
            />
            <div className="mt-6 space-y-4">
              <h3 className="text-2xl font-bold">Duncan Alley Location</h3>
              <p className="text-muted-foreground">
                Our newest location offers a more intimate, artistic atmosphere with rotating 
                local art displays and a cozy interior perfect for focused work or quiet 
                conversations. Located in the creative Duncan Alley, it's a hidden gem for 
                those in the know.
              </p>
              <div className="space-y-2">
                <p className="font-semibold">Features:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Art-adorned interior with rotating exhibits</li>
                  <li>Quiet, focused workspace</li>
                  <li>Full coffee and food menu</li>
                  <li>Intimate event space available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-muted rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-center mb-8">Find Us on the Map</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-video rounded-lg overflow-hidden shadow-medium">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.1234567890123!2d-120.6625!3d35.2828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDE2JzU4LjEiTiAxMjDCsDM5JzQ1LjAiVw!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Downtown Location Map"
              />
            </div>
            <div className="aspect-video rounded-lg overflow-hidden shadow-medium">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.1234567890123!2d-120.6635!3d35.2825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDE2JzU3LjAiTiAxMjDCsDM5JzQ4LjYiVw!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Duncan Alley Location Map"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
