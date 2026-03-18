"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Phone, CheckCircle, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function BookTiffinPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedTiffin, setSelectedTiffin] = useState("");
  const [subscriptionType, setSubscriptionType] = useState("daily");
  const [formData, setFormData] = useState({
    customerName: "",
    mobileNumber: "",
    address: "",
    area: "",
    tiffinType: "",
    quantity: 1,
    deliveryTime: "",
    startDate: "",
    specialInstructions: "",
  });

  const mealOptions = [
    {
      id: "mini-rice",
      name: "Mini Rice Meal",
      price: 89,
      description: "Rice, Sookhi Sabji/Raita, Dal",
      type: "veg"
    },
    {
      id: "mini-roti",
      name: "Mini Roti Meal",
      price: 89,
      description: "3 Roti, Paneer/Veg Gravy, Sookhi Sabji/Raita, Salad",
      type: "veg"
    },
    {
      id: "regular-veg-rice",
      name: "Regular Veg Rice Meal",
      price: 99,
      description: "Steamed Rice/Jeera Rice, Dal, Paneer/Veg Gravy, Sookhi Sabji/Raita, Salad",
      type: "veg"
    },
    {
      id: "regular-nonveg-rice",
      name: "Regular Non Veg Rice Meal",
      price: 109,
      description: "Steamed Rice/Jeera Rice, Dal, Egg/Chicken/Veg Gravy, Sookhi Sabji/Raita, Salad",
      type: "non-veg"
    },
    {
      id: "regular-veg",
      name: "Regular Veg Meal",
      price: 99,
      description: "3 Roti, Rice, Dal, Paneer/Veg Gravy, Salad",
      type: "veg"
    },
    {
      id: "regular-nonveg",
      name: "Regular Non Veg Meal",
      price: 109,
      description: "3 Roti, Rice, Dal, Egg/Chicken/Veg Gravy, Salad",
      type: "non-veg"
    },
    {
      id: "regular-veg-roti",
      name: "Regular Veg Roti Meal",
      price: 104,
      description: "4 Roti, Dal, Paneer/Veg Gravy, Sookhi Sabji/Raita, Salad",
      type: "veg"
    },
    {
      id: "regular-nonveg-roti",
      name: "Regular Non Veg Roti Meal",
      price: 114,
      description: "4 Roti, Dal, Egg/Chicken/Veg Gravy, Sookhi Sabji/Raita, Salad",
      type: "non-veg"
    },
    {
      id: "premium-veg",
      name: "Premium Veg Meal",
      price: 124,
      description: "3 Roti, Paneer/Veg Gravy, Sookhi Sabji/Raita, Salad, Steamed Rice/Jeera Rice, Dal, Raita/Sweets",
      type: "veg"
    },
    {
      id: "premium-nonveg",
      name: "Premium Non Veg Meal",
      price: 129,
      description: "3 Roti, Egg/Chicken/Veg Gravy, Sookhi Sabji/Raita, Salad, Steamed Rice/Jeera Rice, Dal, Raita/Sweets",
      type: "non-veg"
    }
  ];

  const areas = [
    "Janakpuri",
    "Palam", 
    "Sagar Pur",
    "Uttam Nagar",
    "Maya Puri",
    "Hari Nagar",
    "Tilak Nagar"
  ];

  const calculateTotal = () => {
    const meal = mealOptions.find(m => m.id === selectedTiffin);
    if (!meal) return 0;
    
    let basePrice = meal.price * formData.quantity;
    
    if (subscriptionType === "weekly") {
      basePrice = basePrice * 7 * 0.95; // 5% discount for weekly
    } else if (subscriptionType === "monthly") {
      basePrice = basePrice * 30 * 0.9; // 10% discount for monthly
    }
    
    return Math.round(basePrice);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          totalPrice: calculateTotal(),
          subscriptionType,
        }),
      });

      if (response.ok) {
        toast({
          title: "Order Submitted Successfully!",
          description: "We'll contact you soon to confirm your order details.",
        });
        
        // Reset form
        setFormData({
          customerName: "",
          mobileNumber: "",
          address: "",
          area: "",
          tiffinType: "",
          quantity: 1,
          deliveryTime: "",
          startDate: "",
          specialInstructions: "",
        });
        setSelectedTiffin("");
        setSubscriptionType("daily");
      } else {
        throw new Error("Failed to submit order");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit order. Please try again or call us.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Book Your <span className="text-orange-500">Tiffin</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fresh, homemade tiffins delivered to your doorstep. 
              Fill in your details to place your order.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Tiffin Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-orange-500" />
                  Select Your Tiffin
                </CardTitle>
                <CardDescription>
                  Choose from our variety of delicious tiffin options
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mealOptions.map((meal) => (
                    <div
                      key={meal.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        selectedTiffin === meal.id
                          ? "border-orange-500 bg-orange-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => {
                        setSelectedTiffin(meal.id);
                        handleInputChange("tiffinType", meal.name);
                      }}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">{meal.name}</h3>
                          <p className="text-sm text-gray-600">{meal.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-orange-600">₹{meal.price}</div>
                        </div>
                      </div>
                      {selectedTiffin === meal.id && (
                        <div className="flex items-center gap-2 text-green-600 text-sm">
                          <CheckCircle className="w-4 h-4" />
                          <span>Selected</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Subscription Type */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-500" />
                  Subscription Type
                </CardTitle>
                <CardDescription>
                  Choose how long you want our service
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup value={subscriptionType} onValueChange={setSubscriptionType}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="daily" id="daily" />
                    <Label htmlFor="daily" className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">One Day</span>
                        <span className="text-sm text-gray-600">Perfect for trial</span>
                      </div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="weekly" id="weekly" />
                    <Label htmlFor="weekly" className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Weekly</span>
                        <Badge variant="secondary">5% OFF</Badge>
                      </div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="monthly" id="monthly" />
                    <Label htmlFor="monthly" className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Monthly</span>
                        <Badge variant="secondary">10% OFF</Badge>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Customer Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-green-500" />
                  Your Details
                </CardTitle>
                <CardDescription>
                  Please provide your contact and delivery information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="customerName">Full Name *</Label>
                    <Input
                      id="customerName"
                      value={formData.customerName}
                      onChange={(e) => handleInputChange("customerName", e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="mobileNumber">Mobile Number *</Label>
                    <Input
                      id="mobileNumber"
                      type="tel"
                      value={formData.mobileNumber}
                      onChange={(e) => handleInputChange("mobileNumber", e.target.value)}
                      placeholder="10-digit mobile number"
                      pattern="[0-9]{10}"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Delivery Address *</Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder="Enter your complete delivery address"
                    rows={3}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="area">Service Area *</Label>
                    <Select value={formData.area} onValueChange={(value) => handleInputChange("area", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your area" />
                      </SelectTrigger>
                      <SelectContent>
                        {areas.map((area) => (
                          <SelectItem key={area} value={area}>
                            {area}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="quantity">Quantity *</Label>
                    <Input
                      id="quantity"
                      type="number"
                      min="1"
                      max="10"
                      value={formData.quantity}
                      onChange={(e) => handleInputChange("quantity", parseInt(e.target.value))}
                      placeholder="Number of tiffins"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label>Delivery Time *</Label>
                    <RadioGroup 
                      value={formData.deliveryTime} 
                      onValueChange={(value) => handleInputChange("deliveryTime", value)}
                      className="flex flex-row gap-4 mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="lunch" id="lunch" />
                        <Label htmlFor="lunch">Lunch (12:00 PM - 2:00 PM)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="dinner" id="dinner" />
                        <Label htmlFor="dinner">Dinner (7:00 PM - 9:00 PM)</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div>
                    <Label htmlFor="startDate">Start Date *</Label>
                    <Input
                      id="startDate"
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => handleInputChange("startDate", e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="specialInstructions">Special Instructions (Optional)</Label>
                  <Textarea
                    id="specialInstructions"
                    value={formData.specialInstructions}
                    onChange={(e) => handleInputChange("specialInstructions", e.target.value)}
                    placeholder="Any dietary preferences, allergies, or special requests"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
                <CardDescription>
                  Review your order details before submitting
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedTiffin && (
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Meal Type:</span>
                      <span className="font-medium">
                        {mealOptions.find(m => m.id === selectedTiffin)?.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Price per meal:</span>
                      <span className="font-medium">
                        ₹{mealOptions.find(m => m.id === selectedTiffin)?.price}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Quantity:</span>
                      <span className="font-medium">{formData.quantity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Subscription:</span>
                      <span className="font-medium capitalize">{subscriptionType}</span>
                    </div>
                    {subscriptionType !== "daily" && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount:</span>
                        <span className="font-medium">
                          {subscriptionType === "weekly" ? "5%" : "10%"}
                        </span>
                      </div>
                    )}
                    <div className="border-t pt-3">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total Amount:</span>
                        <span className="text-orange-600">₹{calculateTotal()}</span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                type="submit"
                size="lg"
                className="flex-1 bg-orange-500 hover:bg-orange-600"
                disabled={isSubmitting || !selectedTiffin}
              >
                {isSubmitting ? "Submitting..." : "Submit Order"}
              </Button>
              <a
                href="https://wa.me/918700189551?text=Hi%20I%20want%20to%20order%20tiffin"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Order on WhatsApp</span>
              </a>
            </div>
          </form>

          {/* Info Box */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Order Information</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• You'll receive a confirmation call within 2 hours</li>
                  <li>• Payment can be made via cash, UPI, or bank transfer</li>
                  <li>• Free delivery within selected service areas</li>
                  <li>• Cancellation allowed 4 hours before delivery time</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}