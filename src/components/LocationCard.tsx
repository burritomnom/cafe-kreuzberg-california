import { MapPin, Clock, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface LocationCardProps {
  name: string;
  address: string;
  phone: string;
  hours: string;
  image: string;
  mapLink: string;
}

const LocationCard = ({ name, address, phone, hours, image, mapLink }: LocationCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-large transition-smooth">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={`${name} location`}
          className="w-full h-full object-cover transition-smooth group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-primary-foreground">
          {name}
        </h3>
      </div>
      <CardContent className="p-6 space-y-4">
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium">{address}</p>
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline inline-flex items-center gap-1 mt-1"
            >
              Get Directions
              <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Clock className="h-5 w-5 text-primary flex-shrink-0" />
          <p className="text-sm">{hours}</p>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5 text-primary flex-shrink-0" />
          <a href={`tel:${phone.replace(/\D/g, "")}`} className="text-sm hover:text-primary transition-smooth">
            {phone}
          </a>
        </div>
        <Button className="w-full mt-4" variant="outline">
          View Location Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default LocationCard;
