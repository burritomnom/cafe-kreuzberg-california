import { ExternalLink, Truck, Clock, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Order = () => {
  const doordashUrl = "https://www.doordash.com/store/kreuzberg-california-san-luis-obispo-1367223";

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Order Online
          </p>
          <h1 className="text-5xl font-bold mb-4">Delivery & Pickup</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Craving Kreuzberg? Order your favorites for delivery or pickup through DoorDash. 
            From morning coffee to evening cocktails, we've got you covered.
          </p>
        </div>

        {/* Main DoorDash CTA */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-smooth">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Left Side - Info */}
                <div className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Truck className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">Order on DoorDash</h2>
                      <Badge variant="secondary" className="mt-1">Official Partner</Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Get your Kreuzberg favorites delivered straight to your door or ready for pickup. 
                    Full menu available including coffee, food, and select beverages.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-medium">Fast Delivery</p>
                        <p className="text-sm text-muted-foreground">Typically 30-45 minutes</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-medium">Easy Payment</p>
                        <p className="text-sm text-muted-foreground">Secure checkout via DoorDash</p>
                      </div>
                    </div>
                  </div>

                  <Button 
                    asChild 
                    size="lg" 
                    className="w-full group"
                  >
                    <a 
                      href={doordashUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Order Now on DoorDash
                      <ExternalLink className="ml-2 h-4 w-4 transition-smooth group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>

                {/* Right Side - Visual */}
                <div className="hidden md:flex items-center justify-center p-8 bg-muted">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Truck className="h-12 w-12 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-primary">Available Daily</p>
                      <p className="text-2xl font-bold">8am - 9pm</p>
                      <p className="text-sm text-muted-foreground">Both Locations</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* How It Works */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-medium transition-smooth">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Browse Menu</h3>
                <p className="text-muted-foreground">
                  Click the button above to view our full menu on DoorDash and add your favorites to cart
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-medium transition-smooth">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Choose Delivery</h3>
                <p className="text-muted-foreground">
                  Select delivery to your location or pickup from your preferred Kreuzberg location
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-medium transition-smooth">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Enjoy!</h3>
                <p className="text-muted-foreground">
                  Track your order in real-time and enjoy Kreuzberg from the comfort of your home
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto bg-muted rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-center mb-8">Ordering Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">What's available for delivery?</h3>
              <p className="text-muted-foreground">
                Our full food menu is available, including breakfast, lunch, sandwiches, salads, and pastries. 
                Coffee drinks and select non-alcoholic beverages are also available. Note: Alcoholic beverages 
                may have restrictions based on local delivery laws.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">What are the delivery hours?</h3>
              <p className="text-muted-foreground">
                Delivery and pickup are available daily from 8:00 AM to 9:00 PM at both locations, 
                matching our regular business hours.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Do you offer contactless delivery?</h3>
              <p className="text-muted-foreground">
                Yes! Through DoorDash, you can request contactless delivery. Your order will be left 
                at your door with a notification when it arrives.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Can I schedule an order in advance?</h3>
              <p className="text-muted-foreground">
                Yes, DoorDash allows you to schedule orders in advance for both delivery and pickup.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
