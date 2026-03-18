import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChefHat, Heart, Users, Award, Clock, MapPin } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-orange-500">YAY Tiffin</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serving fresh, homemade tiffins to Delhi families since 2020. 
              YAY Tiffin believes in delivering not just food, but happiness in every meal!
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our YAY Story
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                YAY Tiffin started with a simple mission: to provide fresh, 
                homemade meals to busy professionals and families who miss the taste of home-cooked food.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2020 by a team of food enthusiasts, we began with just 10 customers 
                in Janakpuri. Today, YAY Tiffin serves over 1000+ happy customers across West Delhi.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our commitment to quality, hygiene, and taste has made YAY Tiffin the preferred choice 
                for tiffin service in West Delhi.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">1000+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500">4.8/5</div>
                  <div className="text-gray-600">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500">4+</div>
                  <div className="text-gray-600">Years of Service</div>
                </div>
              </div>
            </div>
            <div className="bg-orange-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 text-center">
                  <ChefHat className="w-12 h-12 text-orange-500 mx-auto mb-3" />
                  <div className="font-semibold">Expert Chefs</div>
                  <div className="text-sm text-gray-600">Professional cooks</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <Heart className="w-12 h-12 text-red-500 mx-auto mb-3" />
                  <div className="font-semibold">Made with Love</div>
                  <div className="text-sm text-gray-600">Home-style cooking</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <Clock className="w-12 h-12 text-blue-500 mx-auto mb-3" />
                  <div className="font-semibold">On Time</div>
                  <div className="text-sm text-gray-600">Punctual delivery</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <Award className="w-12 h-12 text-purple-500 mx-auto mb-3" />
                  <div className="font-semibold">Quality</div>
                  <div className="text-sm text-gray-600">Best ingredients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>Quality First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We never compromise on quality. From ingredients to preparation, 
                  everything meets the highest standards.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Customer Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our customers are family. We listen, adapt, and ensure 
                  complete satisfaction with every meal.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle>Punctuality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We respect your time. Hot, fresh meals delivered exactly 
                  when you need them.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>Consistency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Same great taste, same quality, every single day. 
                  That's our promise to you.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The dedicated people behind your delicious meals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <CardTitle>Rajesh Kumar</CardTitle>
                <CardDescription>Founder & Head Chef</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  20+ years of culinary experience. Specializes in West Delhi 
                  cuisine and traditional home-style cooking.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <CardTitle>Priya Sharma</CardTitle>
                <CardDescription>Operations Manager</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ensures smooth operations and timely delivery. 
                  Customer satisfaction is her top priority.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <CardTitle>Amit Verma</CardTitle>
                <CardDescription>Quality Control</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Maintains highest standards of hygiene and quality 
                  in every meal we prepare.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Areas
            </h2>
            <p className="text-xl text-gray-600">
              We deliver fresh tiffins to these locations in Delhi
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
            {[
              "Janakpuri", "Palam", "Sagar Pur", "Uttam Nagar", 
              "Maya Puri", "Hari Nagar", "Tilak Nagar"
            ].map((area) => (
              <Card key={area} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <MapPin className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                  <h3 className="font-semibold">{area}</h3>
                  <p className="text-sm text-gray-600 mt-1">Available</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-4">
              Don't see your area? We're expanding soon!
            </p>
            <Link href="/contact">
              <Button className="bg-orange-500 hover:bg-orange-600">
                Request Service in Your Area
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Homemade Goodness?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join our family of satisfied customers and enjoy delicious, 
            fresh meals every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 px-8">
                Order Your First Tiffin
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Talk to Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}