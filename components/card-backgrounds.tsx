import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CardBackgrounds() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Cards with Backgrounds</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card with image background */}
          <Card
            className="overflow-hidden bg-cover bg-center text-white relative min-h-[300px] flex flex-col justify-end"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2)), url('/fresh-croissant.png')`,
            }}
          >
            <CardHeader>
              <CardTitle className="text-white">Fresh Pastries</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 mb-4">Baked fresh daily with premium ingredients</p>
              <Button className="bg-amber-600 hover:bg-amber-700">Order Now</Button>
            </CardContent>
          </Card>

          {/* Card with pattern background */}
          <Card
            className="bg-amber-100 relative overflow-hidden"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f59e0b' fillOpacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          >
            <CardHeader>
              <CardTitle className="text-gray-900">Special Offers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">Get 20% off on your first order</p>
              <Button variant="outline" className="border-amber-600 text-amber-600 bg-transparent">
                Claim Offer
              </Button>
            </CardContent>
          </Card>

          {/* Card with gradient background */}
          <Card className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
            <CardHeader>
              <CardTitle className="text-white">Premium Membership</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-100 mb-4">Join our loyalty program for exclusive benefits</p>
              <Button className="bg-white text-purple-600 hover:bg-gray-100">Join Now</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
