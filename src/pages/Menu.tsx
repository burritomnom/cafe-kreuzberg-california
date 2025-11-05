import MenuItem from "@/components/MenuItem";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import foodBreakfast from "@/assets/food-breakfast.jpg";
import foodLunch from "@/assets/food-lunch.jpg";
import cocktailsImage from "@/assets/cocktails.jpg";

const Menu = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Our Menu
          </p>
          <h1 className="text-5xl font-bold mb-4">Crafted with Care</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From artisanal coffee to creative cuisine and craft cocktails. 
            Menu subject to change based on seasonal availability.
          </p>
        </div>

        <Tabs defaultValue="coffee" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
            <TabsTrigger value="coffee">Coffee & Drinks</TabsTrigger>
            <TabsTrigger value="breakfast">Breakfast</TabsTrigger>
            <TabsTrigger value="lunch">Lunch & Dinner</TabsTrigger>
            <TabsTrigger value="bar">Bar & Cocktails</TabsTrigger>
          </TabsList>

          {/* Coffee & Drinks */}
          <TabsContent value="coffee" className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Espresso Drinks</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <MenuItem name="Cappuccino" description="Classic espresso with steamed milk" price="$4.50" />
                <MenuItem name="Latte" description="Smooth espresso and steamed milk" price="$4.75" />
                <MenuItem name="Mocha" description="Espresso, chocolate, steamed milk" price="$5.25" />
                <MenuItem name="Americano" description="Espresso with hot water" price="$3.75" />
                <MenuItem name="Macchiato" description="Espresso marked with foam" price="$3.50" />
                <MenuItem name="Gibraltar" description="Espresso with steamed milk in gibraltar glass" price="$4.25" />
                <MenuItem name="Matcha Latte" description="Premium matcha with steamed milk" price="$5.50" dietary={["Vegan Option"]} />
                <MenuItem name="Chai Latte" description="Spiced chai with steamed milk" price="$5.00" dietary={["Vegan Option"]} />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Cafe Drinks</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <MenuItem name="Drip Coffee" description="Freshly brewed daily" price="$3.00" />
                <MenuItem name="Nitro Cold Brew" description="Smooth, creamy cold brew on tap" price="$5.00" />
                <MenuItem name="Nitro Iced Tea" description="Refreshing iced tea on tap" price="$4.50" />
                <MenuItem name="Hot Tea" description="Selection of premium teas" price="$3.50" />
                <MenuItem name="Kombucha" description="Locally sourced probiotic drink" price="$5.50" dietary={["Vegan"]} />
              </div>
            </div>
          </TabsContent>

          {/* Breakfast */}
          <TabsContent value="breakfast" className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Morning Favorites</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <MenuItem 
                  name="Breakfast Burrito" 
                  description="Scrambled eggs, cheese, potatoes, choice of bacon or veggie" 
                  price="$10.50"
                  dietary={["Vegetarian Option"]}
                  image={foodBreakfast}
                />
                <MenuItem 
                  name="Bagel & Schmear" 
                  description="Toasted bagel with cream cheese" 
                  price="$6.00"
                  dietary={["Vegetarian"]}
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Pastries</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <MenuItem name="Morning Bun" description="Sweet, sticky cinnamon pastry" price="$4.50" />
                <MenuItem name="Plain Croissant" description="Buttery, flaky classic" price="$4.00" dietary={["Vegetarian"]} />
                <MenuItem name="Chocolate Croissant" description="Dark chocolate filled" price="$4.75" dietary={["Vegetarian"]} />
                <MenuItem name="Almond Croissant" description="Almond paste and sliced almonds" price="$5.00" dietary={["Vegetarian"]} />
                <MenuItem name="Ham & Cheese Croissant" description="Savory breakfast option" price="$7.00" />
                <MenuItem name="Blueberry Muffin" description="Fresh blueberries, crumb top" price="$4.25" dietary={["Vegetarian"]} />
              </div>
            </div>
          </TabsContent>

          {/* Lunch & Dinner */}
          <TabsContent value="lunch" className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Sandwiches</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <MenuItem 
                  name="Classic Club" 
                  description="Turkey, bacon, lettuce, tomato, mayo on sourdough" 
                  price="$12.00"
                  image={foodLunch}
                />
                <MenuItem 
                  name="Veggie Delight" 
                  description="Grilled vegetables, hummus, greens on ciabatta" 
                  price="$11.00"
                  dietary={["Vegan"]}
                />
                <MenuItem 
                  name="Italian Sub" 
                  description="Salami, prosciutto, provolone, peppers, olive oil" 
                  price="$13.00"
                />
                <MenuItem 
                  name="Caprese" 
                  description="Fresh mozzarella, tomato, basil, balsamic on focaccia" 
                  price="$11.50"
                  dietary={["Vegetarian"]}
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Salads & More</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <MenuItem 
                  name="Caesar Salad" 
                  description="Romaine, parmesan, croutons, caesar dressing" 
                  price="$10.00"
                  dietary={["Vegetarian", "Add Chicken +$4"]}
                />
                <MenuItem 
                  name="Garden Salad" 
                  description="Mixed greens, seasonal vegetables, choice of dressing" 
                  price="$9.50"
                  dietary={["Vegan Option"]}
                />
                <MenuItem 
                  name="Burrito Bowl" 
                  description="Rice, beans, choice of protein, fresh toppings" 
                  price="$12.50"
                  dietary={["Vegetarian Option"]}
                />
              </div>
            </div>
          </TabsContent>

          {/* Bar & Cocktails */}
          <TabsContent value="bar" className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Craft Cocktails</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <MenuItem 
                  name="House Old Fashioned" 
                  description="Bourbon, bitters, orange, cherry" 
                  price="$12.00"
                  image={cocktailsImage}
                />
                <MenuItem 
                  name="Kreuzberg Mule" 
                  description="Vodka, ginger beer, lime, fresh mint" 
                  price="$11.00"
                />
                <MenuItem 
                  name="Espresso Martini" 
                  description="Vodka, coffee liqueur, fresh espresso" 
                  price="$13.00"
                />
                <MenuItem 
                  name="Aperol Spritz" 
                  description="Aperol, prosecco, soda, orange" 
                  price="$11.00"
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Beer & Wine</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <MenuItem name="Local IPA" description="Rotating selection from SLO breweries" price="$7.00" />
                <MenuItem name="House Lager" description="Crisp and refreshing" price="$6.00" />
                <MenuItem name="Red Wine" description="Ask about our selection" price="$9.00" />
                <MenuItem name="White Wine" description="Ask about our selection" price="$9.00" />
              </div>
            </div>

            <div className="mt-8 p-6 bg-accent/10 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Happy Hour</h3>
              <p className="text-muted-foreground">Daily 4pm - 6pm | $2 off all cocktails and beer</p>
            </div>
          </TabsContent>
        </Tabs>

        <p className="text-center text-sm text-muted-foreground mt-12 italic">
          * Menu subject to change based on seasonal availability. Please inform staff of any dietary restrictions.
        </p>
      </div>
    </div>
  );
};

export default Menu;
