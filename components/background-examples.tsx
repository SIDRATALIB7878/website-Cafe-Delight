import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function BackgroundExamples() {
  return (
    <div className="space-y-20">
      {/* 1. CSS Pattern Background */}
      <section className="py-20 coffee-pattern">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">CSS Pattern Background</h2>
          <p className="text-xl text-gray-600">Using CSS patterns for subtle backgrounds</p>
        </div>
      </section>

      {/* 2. Dots Pattern */}
      <section className="py-20 dots-pattern">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Dots Pattern</h2>
          <p className="text-xl text-gray-600">Subtle dot pattern background</p>
        </div>
      </section>

      {/* 3. Tailwind Gradient */}
      <section className="py-20 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-4">Tailwind Gradient</h2>
          <p className="text-xl text-orange-100">Beautiful gradient using Tailwind classes</p>
          <Button className="mt-6 bg-white text-orange-600 hover:bg-gray-100">Get Started</Button>
        </div>
      </section>

      {/* 4. Image with Overlay */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `url('/cozy-cafe.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-4">Image with Overlay</h2>
          <p className="text-xl text-gray-200">Background image with dark overlay for better text readability</p>
        </div>
      </section>

      {/* 5. Cards with different backgrounds */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Different Card Backgrounds</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Solid color background */}
            <Card className="bg-amber-500 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-4">Solid Color</h3>
                <p>Simple solid background color</p>
              </CardContent>
            </Card>

            {/* Gradient background */}
            <Card className="bg-gradient-to-br from-purple-600 to-blue-600 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-4">Gradient</h3>
                <p>Beautiful gradient background</p>
              </CardContent>
            </Card>

            {/* Pattern background */}
            <Card className="waves-pattern">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Pattern</h3>
                <p className="text-gray-700">CSS pattern background</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
