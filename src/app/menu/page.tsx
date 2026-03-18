import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Star, Clock, Users, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function MenuPage() {
  const mealPlans = [
    {
      category: "Mini Meals",
      items: [
        {
          name: "Mini Rice Meal",
          price: 89,
          originalPrice: 149,
          description: "Rice, Sookhi Sabji/Raita, Dal",
          items: ["Steamed Rice", "Sookhi Sabji", "Dal", "Raita"],
          popular: false,
          rating: 4.6,
          type: "veg"
        },
        {
          name: "Mini Roti Meal",
          price: 89,
          originalPrice: 149,
          description: "4 Roti, Paneer/Veg Gravy, Sookhi Sabji/Raita, Salad",
          items: ["4 Fresh Rotis", "Paneer/Veg Gravy", "Sookhi Sabji", "Raita", "Salad"],
          popular: false,
          rating: 4.5,
          type: "veg"
        }
      ]
    },
    {
      category: "Regular Meals",
      items: [
        {
          name: "Regular Veg Rice Meal",
          price: 99,
          originalPrice: 159,
          description: "Steamed Rice/Jeera Rice, Dal, Paneer/Veg Gravy, Sookhi Sabji/Raita, Salad",
          items: ["Steamed Rice", "Dal", "Paneer/Veg Gravy", "Sookhi Sabji", "Raita", "Salad"],
          popular: false,
          rating: 4.7,
          type: "veg"
        },
        {
          name: "Regular Non Veg Rice Meal",
          price: 109,
          originalPrice: 169,
          description: "Steamed Rice/Jeera Rice, Dal, Egg/Chicken/Veg Gravy, Sookhi Sabji/Raita, Salad",
          items: ["Steamed Rice", "Dal", "Egg/Chicken Gravy", "Sookhi Sabji", "Raita", "Salad"],
          popular: false,
          rating: 4.6,
          type: "non-veg"
        },
        {
          name: "Regular Veg Meal",
          price: 99,
          originalPrice: 159,
          description: "4 Roti, Rice, Dal, Paneer/Veg Gravy, Salad",
          items: ["4 Rotis", "Steamed Rice", "Dal", "Paneer/Veg Gravy", "Salad"],
          popular: true,
          rating: 4.8,
          type: "veg"
        },
        {
          name: "Regular Non Veg Meal",
          price: 109,
          originalPrice: 169,
          description: "4 Roti, Rice, Dal, Egg/Chicken/Veg Gravy, Salad",
          items: ["4 Rotis", "Steamed Rice", "Dal", "Egg/Chicken Gravy", "Salad"],
          popular: true,
          rating: 4.7,
          type: "non-veg"
        },
        {
          name: "Regular Veg Roti Meal",
          price: 104,
          originalPrice: 169,
          description: "4 Roti, Dal, Paneer/Veg Gravy, Sookhi Sabji/Raita, Salad",
          items: ["4 Rotis", "Dal", "Paneer/Veg Gravy", "Sookhi Sabji", "Raita", "Salad"],
          popular: false,
          rating: 4.6,
          type: "veg"
        },
        {
          name: "Regular Non Veg Roti Meal",
          price: 114,
          originalPrice: 179,
          description: "4 Roti, Dal, Egg/Chicken/Veg Gravy, Sookhi Sabji/Raita, Salad",
          items: ["4 Rotis", "Dal", "Egg/Chicken Gravy", "Sookhi Sabji", "Raita", "Salad"],
          popular: false,
          rating: 4.5,
          type: "non-veg"
        }
      ]
    },
    {
      category: "Premium Meals",
      items: [
        {
          name: "Premium Veg Meal",
          price: 124,
          originalPrice: 179,
          description: "4 Roti, Paneer/Veg Gravy, Sookhi Sabji/Raita, Salad, Steamed Rice/Jeera Rice, Dal, Raita/Sweets",
          items: ["4 Rotis", "Paneer/Veg Gravy", "Sookhi Sabji", "Raita", "Salad", "Steamed Rice", "Dal", "Sweets"],
          popular: true,
          rating: 4.9,
          type: "veg"
        },
        {
          name: "Premium Non Veg Meal",
          price: 129,
          originalPrice: 189,
          description: "4 Roti, Egg/Chicken/Veg Gravy, Sookhi Sabji/Raita, Salad, Steamed Rice/Jeera Rice, Dal, Raita/Sweets",
          items: ["4 Rotis", "Egg/Chicken Gravy", "Sookhi Sabji", "Raita", "Salad", "Steamed Rice", "Dal", "Sweets"],
          popular: true,
          rating: 4.8,
          type: "non-veg"
        }
      ]
    }
  ];

  const weeklyMenu = [
    { day: "Monday", veg: "Chole Masala", nonVeg: "Chicken Curry", special: "Dal Makhani" },
    { day: "Tuesday", veg: "Rajma Chawal", nonVeg: "Egg Curry", special: "Kadhi Pakora" },
    { day: "Wednesday", veg: "Mixed Veg", nonVeg: "Mutton Curry", special: "Aloo Gobi" },
    { day: "Thursday", veg: "Kadhi Chawal", nonVeg: "Fish Curry", special: "Palak Paneer" },
    { day: "Friday", veg: "Chana Masala", nonVeg: "Chicken Biryani", special: "Malai Kofta" },
    { day: "Saturday", veg: "Paneer Special", nonVeg: "Egg Biryani", special: "Royal Thali" },
    { day: "Sunday", veg: "Royal Thali", nonVeg: "Special Thali", special: "Festive Special" }
  ];

  const today = new Date().getDay();
  const todayMenu = weeklyMenu[today === 0 ? 6 : today - 1]; // Sunday=0, Monday=1, etc.

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-orange-500">Meal Plans</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fresh, homemade meals prepared daily with love and care. 
              Choose from our variety of delicious meal plans.
            </p>
            <div className="mt-8 p-4 bg-white rounded-lg shadow-sm max-w-2xl mx-auto">
              <h3 className="font-semibold text-orange-600 mb-2">Today's Menu</h3>
              <div className="text-sm text-gray-700">
                <p><span className="font-medium">Veg:</span> {todayMenu.veg}</p>
                <p><span className="font-medium">Non-Veg:</span> {todayMenu.nonVeg}</p>
                <p><span className="font-medium">Special:</span> {todayMenu.special}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meal Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="mini" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="mini" className="text-sm md:text-lg">Mini Meals</TabsTrigger>
              <TabsTrigger value="regular" className="text-sm md:text-lg">Regular Meals</TabsTrigger>
              <TabsTrigger value="premium" className="text-sm md:text-lg">Premium Meals</TabsTrigger>
              <TabsTrigger value="bulk" className="text-sm md:text-lg">Bulk Orders</TabsTrigger>
            </TabsList>

            {/* Mini Meals */}
            <TabsContent value="mini" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {mealPlans[0].items.map((meal) => (
                  <Card key={meal.name} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <CardTitle className="text-2xl">{meal.name}</CardTitle>
                            {meal.popular && (
                              <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                                <TrendingUp className="w-3 h-3 mr-1" />
                                Popular
                              </Badge>
                            )}
                          </div>
                          <CardDescription className="text-lg">{meal.description}</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-orange-600">₹{meal.price}</div>
                          {meal.originalPrice && (
                            <div className="text-lg text-gray-500 line-through">
                              ₹{meal.originalPrice}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span>{meal.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Badge variant={meal.type === 'veg' ? 'default' : 'destructive'} className="text-xs">
                            {meal.type === 'veg' ? '🟢 Veg' : '🔴 Non-Veg'}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-6">
                        {meal.items.map((item, index) => (
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

            {/* Regular Meals */}
            <TabsContent value="regular" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mealPlans[1].items.map((meal) => (
                  <Card key={meal.name} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <CardTitle className="text-xl">{meal.name}</CardTitle>
                            {meal.popular && (
                              <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                                <TrendingUp className="w-3 h-3 mr-1" />
                                Popular
                              </Badge>
                            )}
                          </div>
                          <CardDescription className="text-sm">{meal.description}</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-orange-600">₹{meal.price}</div>
                          {meal.originalPrice && (
                            <div className="text-sm text-gray-500 line-through">
                              ₹{meal.originalPrice}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span>{meal.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Badge variant={meal.type === 'veg' ? 'default' : 'destructive'} className="text-xs">
                            {meal.type === 'veg' ? '🟢 Veg' : '🔴 Non-Veg'}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-6">
                        {meal.items.map((item, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-orange-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                      <Link href="/book" className="w-full">
                        <Button className="w-full bg-orange-500 hover:bg-orange-600">
                          Order Now
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Premium Meals */}
            <TabsContent value="premium" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {mealPlans[2].items.map((meal) => (
                  <Card key={meal.name} className="hover:shadow-lg transition-shadow border-orange-200">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <CardTitle className="text-2xl">{meal.name}</CardTitle>
                            {meal.popular && (
                              <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                                <TrendingUp className="w-3 h-3 mr-1" />
                                Popular
                              </Badge>
                            )}
                          </div>
                          <CardDescription className="text-lg">{meal.description}</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-orange-600">₹{meal.price}</div>
                          {meal.originalPrice && (
                            <div className="text-lg text-gray-500 line-through">
                              ₹{meal.originalPrice}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span>{meal.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Badge variant={meal.type === 'veg' ? 'default' : 'destructive'} className="text-xs">
                            {meal.type === 'veg' ? '🟢 Veg' : '🔴 Non-Veg'}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-6">
                        {meal.items.map((item, index) => (
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

            {/* Bulk Orders */}
            <TabsContent value="bulk" className="space-y-8">
              <div className="max-w-2xl mx-auto">
                <Card className="text-center">
                  <CardHeader>
                    <CardTitle className="text-2xl">Bulk Roti Meal Plan</CardTitle>
                    <CardDescription className="text-lg">Fresh Rotis for bulk orders</CardDescription>
                    <div className="mt-4">
                      <div className="text-4xl font-bold text-orange-600">Starting from ₹150</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 mb-8">
                      <p className="text-gray-600">
                        Perfect for parties, events, or large families. Get fresh, homemade rotis delivered to your doorstep.
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-left">
                        <div className="bg-orange-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-orange-700">Small Order</h4>
                          <p className="text-sm text-gray-600">20-50 rotis</p>
                          <p className="font-bold text-orange-600">₹150 per 10 rotis</p>
                        </div>
                        <div className="bg-orange-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-orange-700">Large Order</h4>
                          <p className="text-sm text-gray-600">50+ rotis</p>
                          <p className="font-bold text-orange-600">₹140 per 10 rotis</p>
                        </div>
                      </div>
                    </div>
                    <Link href="/contact">
                      <Button size="lg" className="w-full bg-orange-500 hover:bg-orange-600">
                        Contact for Bulk Orders
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Weekly Menu Schedule */}
      <section className="py-20 bg-white">
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
            {weeklyMenu.map((day, index) => (
              <Card key={day.day} className={`text-center hover:shadow-md transition-shadow ${
                today === index ? 'ring-2 ring-orange-500 bg-orange-50' : ''
              }`}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{day.day}</CardTitle>
                  {today === index && (
                    <Badge className="bg-orange-500 text-white">Today</Badge>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="bg-green-50 rounded p-2">
                      <div className="text-xs font-semibold text-green-700">Veg</div>
                      <div className="text-sm text-gray-700">{day.veg}</div>
                    </div>
                    <div className="bg-red-50 rounded p-2">
                      <div className="text-xs font-semibold text-red-700">Non-Veg</div>
                      <div className="text-sm text-gray-700">{day.nonVeg}</div>
                    </div>
                    <div className="bg-orange-50 rounded p-2">
                      <div className="text-xs font-semibold text-orange-700">Special</div>
                      <div className="text-sm text-gray-700">{day.special}</div>
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