import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Coffee, Users, Award } from "lucide-react"

export default function SectionBackgrounds() {
  return (
    <div className="space-y-20">
      {/* Section with pattern background */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23f3f4f6' fillOpacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Pattern Background Section</h2>
            <p className="text-xl text-gray-600">This section has a subtle pattern background</p>
          </div>
        </div>
      </section>

      {/* Section with image background */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/coffee-plantation-mountains.png')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-8">Image Background Section</h2>
            <p className="text-xl mb-8">This section has a coffee plantation background</p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Coffee, title: "Premium Beans", desc: "Sourced globally" },
                { icon: Users, title: "Expert Team", desc: "Skilled baristas" },
                { icon: Award, title: "Quality First", desc: "Award winning" },
              ].map((item, index) => (
                <Card key={index} className="bg-white/90 backdrop-blur-sm">
                  <CardHeader className="text-center">
                    <item.icon className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gradient background section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Gradient Background</h2>
            <p className="text-xl text-gray-600">This section uses a warm gradient background</p>
          </div>
        </div>
      </section>
    </div>
  )
}
