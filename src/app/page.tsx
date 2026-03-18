import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, ChefHat, Users, Star, Phone, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">
                Fresh & Homemade
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Delicious Meal Plans
                <span className="text-orange-500"> Delivered Daily</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Fresh, homemade meals delivered to your doorstep in Delhi. 
                Choose from our variety of delicious meal plans.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8">
                    Order Now
                  </Button>
                </Link>
                <Link href="/menu">
                  <Button size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                    View Menu
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="font-semibold">4.8/5</span>
                  <span className="text-gray-600">(500+ reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-orange-500" />
                  <span className="font-semibold">1000+</span>
                  <span className="text-gray-600">Happy Customers</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-orange-50 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-orange-500">₹90</div>
                    <div className="text-sm text-gray-600">Veg Tiffin</div>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-red-500">₹120</div>
                    <div className="text-sm text-gray-600">Special Tiffin</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-green-500">4</div>
                    <div className="text-sm text-gray-600">Chapati</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-blue-500">Daily</div>
                    <div className="text-sm text-gray-600">Delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose YAY Tiffin?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing fresh, delicious, and affordable tiffin service 
              with unmatched convenience and quality. YAY Tiffin brings happiness to your meals!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <ChefHat className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>Fresh & Homemade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Prepared daily with fresh ingredients and traditional recipes
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <CardTitle>On-Time Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Guaranteed delivery timing for lunch and dinner
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <CardTitle>Wide Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Serving multiple areas across Delhi NCR
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CheckCircle className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <CardTitle>Quality Assured</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Hygienic preparation and quality ingredients guaranteed
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Meal Plans Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Meal Plans
            </h2>
            <p className="text-xl text-gray-600">
              Choose from our variety of delicious meal plans
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-green-600 font-bold text-xl">MINI</span>
                </div>
                <CardTitle>Mini Rice Meal</CardTitle>
                <CardDescription className="text-2xl font-bold text-green-600">₹89</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Steamed Rice
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Sookhi Sabji
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Dal
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Raita
                  </li>
                </ul>
                <Link href="/book">
                  <Button className="w-full mt-6 bg-green-500 hover:bg-green-600">
                    Order Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-orange-200">
              <CardHeader>
                <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-orange-600 font-bold text-xl">REG</span>
                </div>
                <CardTitle>Regular Veg Meal</CardTitle>
                <CardDescription className="text-2xl font-bold text-orange-600">₹99</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500" />
                    3 Rotis
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500" />
                    Steamed Rice
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500" />
                    Dal
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500" />
                    Paneer/Veg Gravy
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500" />
                    Salad
                  </li>
                </ul>
                <Link href="/book">
                  <Button className="w-full mt-6 bg-orange-500 hover:bg-orange-600">
                    Order Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-purple-600 font-bold text-xl">PRE</span>
                </div>
                <CardTitle>Premium Veg Meal</CardTitle>
                <CardDescription className="text-2xl font-bold text-purple-600">₹124</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-500" />
                    3 Rotis
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-500" />
                    Paneer/Veg Gravy
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-500" />
                    Sookhi Sabji
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-500" />
                    Raita
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-500" />
                    Salad
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-500" />
                    Steamed Rice
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-500" />
                    Dal
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-500" />
                    Sweets
                  </li>
                </ul>
                <Link href="/book">
                  <Button className="w-full mt-6 bg-purple-500 hover:bg-purple-600">
                    Order Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We Serve These Areas
            </h2>
            <p className="text-xl text-gray-600">
              Fresh tiffin delivery available in these Delhi locations
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
            {["Janakpuri", "Palam", "Sagar Pur", "Uttam Nagar", "Maya Puri", "Hari Nagar", "Tilak Nagar"].map((area) => (
              <Card key={area} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <MapPin className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">{area}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Order Your YAY Tiffin?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of happy customers enjoying fresh, homemade tiffins daily
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 px-8">
                Book Your Tiffin
              </Button>
            </Link>
            <a
              href="https://wa.me/918700189551?text=Hi%20I%20want%20to%20order%20tiffin"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}