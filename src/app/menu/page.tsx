import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Star, Clock, Users } from "lucide-react";
import Link from "next/link";

export default function MenuPage() {
  const vegTiffins = [
    {
      name: "Veg Lunch Tiffin",
      price: 90,
      description: "Complete vegetarian meal for lunch",
      items: ["4 Fresh Chapati", "Dal (Lentil Curry)", "Seasonal Sabzi", "Steamed Rice", "Salad & Pickle"],
      popular: true,
      rating: 4.8,
      ordersPerDay: 150
    },
    {
      name: "Veg Dinner Tiffin",
      price: 90,
      description: "Light and nutritious dinner option",
      items: ["4 Fresh Chapati", "Dal Tadka", "Mixed Vegetable", "Jeera Rice", "Raita"],
      popular: false,
      rating: 4.7,
      ordersPerDay: 120
    }
  ];

  const specialTiffins = [
    {
      name: "Special Lunch Tiffin",
      price: 120,
      description: "Premium vegetarian meal with extra items",
      items: ["4 Fresh Chapati", "Special Dal Makhani", "2 Vegetables", "Jeera Rice", "Sweet Dish", "Papad"],
      popular: true,
      rating: 4.9,
      ordersPerDay: 80
    },
    {
      name: "Executive Tiffin",
      price: 150,
      description: "Luxury meal for special occasions",
      items: ["4 Butter Chapati", "Dal Bukhara", "Paneer Dish", "Veg Biryani", "Gulab Jamun", "Salad", "Dessert"],
      popular: false,
      rating: 5.0,
      ordersPerDay: 40
    }
  ];

  const weeklyMenus = [
    {
      name: "Weekly Veg Package",
      price: 580,
      originalPrice: 630,
      description: "7 days veg tiffin service",
      items: ["Different Menu Daily", "Weekend Special", "Free Delivery", "Save ₹40"],
      popular: true,
      rating: 4.8,
      ordersPerDay: 50
    },
    {
      name: "Weekly Special Package",
      price: 820,
      originalPrice: 840,
      description: "7 days special tiffin service",
      items: ["Premium Menu Daily", "Weekend Royal Special", "Free Delivery", "Save ₹20"],
      popular: false,
      rating: 4.9,
      ordersPerDay: 30
    },
    {
      name: "Monthly Veg Package",
      price: 2500,
      originalPrice: 2700,
      description: "30 days veg tiffin service",
      items: ["Varied Menu", "Weekly Special", "Free Delivery", "Save ₹200"],
      popular: true,
      rating: 4.8,
      ordersPerDay: 25
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Tiffin <span className="text-orange-500">Menu</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fresh, homemade tiffins prepared daily with love and care. 
              Choose from our variety of delicious options.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Tabs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="veg" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="veg" className="text-lg">Veg Tiffins</TabsTrigger>
              <TabsTrigger value="special" className="text-lg">Special Tiffins</TabsTrigger>
              <TabsTrigger value="weekly" className="text-lg">Weekly/Monthly</TabsTrigger>
            </TabsList>

            {/* Veg Tiffins */}
            <TabsContent value="veg" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {vegTiffins.map((tiffin) => (
                  <Card key={tiffin.name} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <CardTitle className="text-2xl">{tiffin.name}</CardTitle>
                            {tiffin.popular && (
                              <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                                Popular
                              </Badge>
                            )}
                          </div>
                          <CardDescription className="text-lg">{tiffin.description}</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-green-600">₹{tiffin.price}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span>{tiffin.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4 text-blue-500" />
                          <span>{tiffin.ordersPerDay} orders/day</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-6">
                        {tiffin.items.map((item, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <Link href="/book" className="flex-1">
                          <Button className="w-full bg-green-500 hover:bg-green-600">
                            Order Now
                          </Button>
                        </Link>
                        <Link href="/book">
                          <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-50">
                            Customize
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Special Tiffins */}
            <TabsContent value="special" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {specialTiffins.map((tiffin) => (
                  <Card key={tiffin.name} className="hover:shadow-lg transition-shadow border-orange-200">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <CardTitle className="text-2xl">{tiffin.name}</CardTitle>
                            {tiffin.popular && (
                              <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                                Popular
                              </Badge>
                            )}
                          </div>
                          <CardDescription className="text-lg">{tiffin.description}</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-orange-600">₹{tiffin.price}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span>{tiffin.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4 text-blue-500" />
                          <span>{tiffin.ordersPerDay} orders/day</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-6">
                        {tiffin.items.map((item, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <Link href="/book" className="flex-1">
                          <Button className="w-full bg-orange-500 hover:bg-orange-600">
                            Order Now
                          </Button>
                        </Link>
                        <Link href="/book">
                          <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                            Customize
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Weekly/Monthly Packages */}
            <TabsContent value="weekly" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {weeklyMenus.map((package_) => (
                  <Card key={package_.name} className="hover:shadow-lg transition-shadow relative">
                    {package_.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 px-3">
                          Best Value
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="text-center pt-8">
                      <CardTitle className="text-2xl">{package_.name}</CardTitle>
                      <CardDescription className="text-lg">{package_.description}</CardDescription>
                      <div className="mt-4">
                        <div className="text-4xl font-bold text-purple-600">₹{package_.price}</div>
                        {package_.originalPrice && (
                          <div className="text-lg text-gray-500 line-through">
                            ₹{package_.originalPrice}
                          </div>
                        )}
                        {package_.originalPrice && (
                          <div className="text-sm text-green-600 font-semibold">
                            Save ₹{package_.originalPrice - package_.price}
                          </div>
                        )}
                      </div>
                      <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span>{package_.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4 text-blue-500" />
                          <span>{package_.ordersPerDay} orders/day</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-6">
                        {package_.items.map((item, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                      <Link href="/book" className="w-full">
                        <Button className="w-full bg-purple-500 hover:bg-purple-600">
                          Subscribe Now
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Menu Schedule */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Weekly Menu Schedule
            </h2>
            <p className="text-xl text-gray-600">
              Different menu every day to keep your meals exciting
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            {[
              { day: "Monday", special: "Chole Masala" },
              { day: "Tuesday", special: "Rajma Curry" },
              { day: "Wednesday", special: "Mixed Veg" },
              { day: "Thursday", special: "Kadhi Pakora" },
              { day: "Friday", special: "Aloo Gobi" },
              { day: "Saturday", special: "Paneer Special" },
              { day: "Sunday", special: "Royal Thali" }
            ].map((day) => (
              <Card key={day.day} className="text-center hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{day.day}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-orange-50 rounded-lg p-3">
                    <div className="text-sm font-semibold text-orange-700">
                      Special
                    </div>
                    <div className="text-sm text-gray-700 mt-1">
                      {day.special}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Can't Decide? Let Us Help!
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us for personalized recommendations based on your preferences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 px-8">
                Get Started
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}