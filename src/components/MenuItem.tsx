import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MenuItemProps {
  name: string;
  description?: string;
  price: string;
  dietary?: string[];
  image?: string;
}

const MenuItem = ({ name, description, price, dietary, image }: MenuItemProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-medium transition-smooth group">
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-smooth group-hover:scale-110"
          />
        </div>
      )}
      <CardContent className={`${image ? "p-4" : "p-6"}`}>
        <div className="flex justify-between items-start gap-4 mb-2">
          <h3 className="font-semibold text-lg">{name}</h3>
          <span className="text-primary font-semibold flex-shrink-0">{price}</span>
        </div>
        {description && (
          <p className="text-sm text-muted-foreground mb-3">{description}</p>
        )}
        {dietary && dietary.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {dietary.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MenuItem;
