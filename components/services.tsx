"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { UtensilsCrossed, ShoppingBag, Users, Calendar, Coffee, Clock, MapPin, Phone } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: UtensilsCrossed,
      title: "Dine In",
      description: "Enjoy our cozy atmosphere with comfortable seating",
      details:
        "Experience the full ambiance of Cafe Delight with our comfortable indoor and outdoor seating. Perfect for meetings, dates, or casual hangouts.",
      features: ["Free WiFi", "Comfortable Seating", "Ambient Music", "Air Conditioning"],
      hours: "7:00 AM - 9:00 PM",
      price: "No additional charges",
    },
    {
      icon: ShoppingBag,
      title: "Takeaway",
      description: "Quick pickup for busy schedules",
      details:
        "Order ahead and pick up your favorite drinks and food items. Perfect for those on the go who don't want to compromise on quality.",
      features: ["Online Ordering", "Quick Pickup", "Eco-friendly Packaging", "Mobile App"],
      hours: "7:00 AM - 9:00 PM",
      price: "Same menu prices",
    },
    {
      icon: Users,
      title: "Catering",
      description: "Perfect for events and gatherings",
      details:
        "Let us cater your next event with our delicious coffee and food selection. From corporate meetings to family gatherings, we've got you covered.",
      features: ["Custom Menus", "Professional Service", "Setup & Cleanup", "Bulk Discounts"],
      hours: "By Appointment",
      price: "Starting from $15/person",
    },
    {
      icon: Calendar,
      title: "Private Events",
      description: "Host your special occasions with us",
      details:
        "Book our space for private parties, business meetings, or special celebrations. We provide a complete package for your memorable events.",
      features: ["Private Space", "Custom Decorations", "Dedicated Staff", "Audio/Visual Setup"],
      hours: "Flexible Timing",
      price: "Starting from $200/event",
    },
    {
      icon: Coffee,
      title: "Coffee Beans",
      description: "Take our premium beans home",
      details:
        "Purchase our freshly roasted coffee beans to enjoy the Cafe Delight experience at home. Available in various roasts and blends.",
      features: ["Fresh Roasted", "Multiple Blends", "Grinding Service", "Bulk Orders"],
      hours: "Available Daily",
      price: "$12-18/lb",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a variety of services to meet all your coffee and dining needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                  <CardHeader className="text-center">
                    <service.icon className="h-16 w-16 text-amber-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <CardTitle className="text-2xl group-hover:text-amber-600 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Badge variant="outline" className="border-amber-600 text-amber-600">
                      Click for Details
                    </Badge>
                  </CardContent>
                </Card>
              </DialogTrigger>

              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-3 text-2xl">
                    <service.icon className="h-8 w-8 text-amber-600" />
                    {service.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                  <p className="text-gray-700">{service.details}</p>

                  <div>
                    <h4 className="font-semibold mb-3 text-gray-900">Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="justify-center">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{service.hours}</span>
                    </div>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900">Price:</span>
                      <span className="text-amber-600 font-bold">{service.price}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1 bg-amber-600 hover:bg-amber-700">
                      <Phone className="h-4 w-4 mr-2" />
                      Book Now
                    </Button>
                    <Button variant="outline" className="flex-1 border-amber-600 text-amber-600 bg-transparent">
                      <MapPin className="h-4 w-4 mr-2" />
                      Visit Us
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}
