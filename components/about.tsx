import { Card, CardContent } from "@/components/ui/card"
import { Coffee, Users, Award, Clock } from "lucide-react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function About() {
  const features = [
    {
      icon: Coffee,
      title: "Premium Coffee",
      description: "Sourced from the finest coffee beans around the world",
    },
    {
      icon: Users,
      title: "Friendly Staff",
      description: "Our experienced baristas are passionate about coffee",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in coffee and service",
    },
    {
      icon: Clock,
      title: "Always Fresh",
      description: "Coffee roasted daily to ensure maximum freshness",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Cafe Delight</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Since 2010, we've been serving the community with exceptional coffee and creating memorable experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
            <p className="text-gray-600 leading-relaxed">
              Cafe Delight was born from a simple passion: to create the perfect cup of coffee and share it with our
              community. What started as a small neighborhood cafe has grown into a beloved gathering place where
              friends meet, ideas are born, and memories are made.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe that great coffee brings people together. Every cup we serve is crafted with care, using only
              the finest ingredients and time-honored brewing techniques.
            </p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <div className="relative cursor-pointer">
                <Image
                
                  src="/pexels-pavel-danilyuk-7180762.jpg"
                  alt="Cafe Owner"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <div className="space-y-4">
                <Image
                  src="/smiling-coffee-owner.png"
                  alt="Cafe Owner"
                  width={800}
                  height={600}
                  className="w-full rounded-lg"
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Meet Our Founder</h3>
                  <p className="text-gray-600">
                    John Smith founded Cafe Delight in 2010 with a vision to create the perfect coffee experience. With
                    over 15 years in the coffee industry, John brings passion and expertise to every cup we serve.
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow duration-300 hover:-translate-y-2 transition-transform"
            >
              <CardContent className="p-6">
                <feature.icon className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
