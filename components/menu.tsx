"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Plus, Star } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import CartModal from "./cart-modal"
export default function Menu() {
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [showCartModal, setShowCartModal] = useState(false)
  const [selectedCartItem, setSelectedCartItem] = useState<any>(null)
  const menuCategories = [
    {
      title: "Hot Beverages",
      items: [
        {
          name: "Espresso",
          price: "$3.50",
          description: "Rich and bold espresso shot made from premium arabica beans",
          image: "/espresso2.jpg",
          popular: true,
          rating: 4.8,
          ingredients: ["Premium Arabica Beans", "Filtered Water"],
        },
        {
          name: "Cappuccino",
          price: "$4.50",
          description: "Perfect balance of espresso, steamed milk and velvety foam",
          image: "/Cappuccino.jpg",
          popular: false,
          rating: 4.6,
          ingredients: ["Espresso", "Steamed Milk", "Milk Foam"],
        },
        {
          name: "Latte",
          price: "$4.75",
          description: "Smooth espresso with steamed milk and light foam",
          image: "/latte.jpg",
          popular: true,
          rating: 4.7,
          ingredients: ["Espresso", "Steamed Milk", "Light Foam"],
        },
        {
          name: "Americano",
          price: "$3.25",
          description: "Classic espresso diluted with hot water",
          image: "/black.jpeg",
          popular: false,
          rating: 4.4,
          ingredients: ["Espresso", "Hot Water"],
        },
        {
          name: "Mocha",
          price: "$5.25",
          description: "Rich chocolate and espresso with steamed milk",
          image: "/mocha.jpg",
          popular: true,
          rating: 4.9,
          ingredients: ["Espresso", "Chocolate Syrup", "Steamed Milk", "Whipped Cream"],
        },
        {
          name: "Macchiato",
          price: "$4.25",
          description: "Espresso 'marked' with a dollop of foamed milk",
          image: "/Macchiato.jpg",
          popular: false,
          rating: 4.5,
          ingredients: ["Espresso", "Foamed Milk"],
        },
      ],
    },
    {
      title: "Cold Beverages",
      items: [
        {
          name: "Iced Coffee",
          price: "$3.75",
          description: "Refreshing cold brew coffee served over ice",
          image: "/Iced Coffee1.jpg",
          popular: false,
          rating: 4.3,
          ingredients: ["Cold Brew Coffee", "Ice", "Simple Syrup"],
        },
        {
          name: "Frappuccino",
          price: "$5.25",
          description: "Blended coffee drink with whipped cream topping",
          image: "/pexels-valeriya-1028419.jpg",
          popular: true,
          rating: 4.8,
          ingredients: ["Coffee", "Milk", "Ice", "Sugar", "Whipped Cream"],
        },
        {
          name: "Cold Brew",
          price: "$4.00",
          description: "Smooth cold-brewed coffee, less acidic than regular iced coffee",
          image: "/Cold Brew.jpg",
          popular: false,
          rating: 4.6,
          ingredients: ["Cold Brew Concentrate", "Water", "Ice"],
        },
        {
          name: "Iced Latte",
          price: "$4.50",
          description: "Espresso with cold milk served over ice",
          image: "/Iced Latte.jpg",
          popular: true,
          rating: 4.7,
          ingredients: ["Espresso", "Cold Milk", "Ice"],
        },
        {
          name: "Iced Americano",
          price: "$3.50",
          description: "Espresso shots with cold water over ice",
          image: "/Iced Americano.jpg",
          popular: false,
          rating: 4.2,
          ingredients: ["Espresso", "Cold Water", "Ice"],
        },
      ],
    },
    {
      title: "Specialty Drinks",
      items: [
        {
          name: "Caramel Macchiato",
          price: "$5.75",
          description: "Vanilla syrup, steamed milk, espresso, and caramel drizzle",
          image: "/Caramel Macchiato.jpg",
          popular: true,
          rating: 4.9,
          ingredients: ["Vanilla Syrup", "Steamed Milk", "Espresso", "Caramel Sauce"],
        },
        {
          name: "Chai Latte",
          price: "$4.25",
          description: "Spiced tea blend with steamed milk",
          image: "/Chai Latte.jpg",
          popular: true,
          rating: 4.6,
          ingredients: ["Chai Tea", "Steamed Milk", "Cinnamon", "Cardamom"],
        },
        {
          name: "Hot Chocolate",
          price: "$3.75",
          description: "Rich chocolate drink topped with whipped cream",
          image: "/pexels-alleksana-6463658.jpg",
          popular: false,
          rating: 4.5,
          ingredients: ["Premium Chocolate", "Steamed Milk", "Whipped Cream"],
        },
      ],
    },
    {
      title: "Pastries & Desserts",
      items: [
        {
          name: "Croissant",
          price: "$2.50",
          description: "Buttery, flaky French pastry baked fresh daily",
          image: "/pexels-roman-odintsov-6534448.jpg",
          popular: true,
          rating: 4.7,
          ingredients: ["Butter", "Flour", "Yeast", "Salt"],
        },
        {
          name: "Blueberry Muffin",
          price: "$3.00",
          description: "Fresh baked muffin with real blueberries",
          image: "/pexels-valeriya-7474211.jpg",
          popular: false,
          rating: 4.4,
          ingredients: ["Fresh Blueberries", "Flour", "Sugar", "Eggs"],
        },
        {
          name: "Chocolate Cake",
          price: "$4.50",
          description: "Rich, moist chocolate cake slice",
          image: "/pexels-busra-yurt-2148943872-33312980.jpg",
          popular: true,
          rating: 4.8,
          ingredients: ["Dark Chocolate", "Flour", "Eggs", "Butter"],
        },
        {
          name: "Cheesecake",
          price: "$5.00",
          description: "Creamy New York style cheesecake",
          image: "/pexels-pixelperfectmom-18296426.jpg",
          popular: true,
          rating: 4.9,
          ingredients: ["Cream Cheese", "Graham Crackers", "Sugar", "Vanilla"],
        },
        {
          name: "Danish Pastry",
          price: "$3.25",
          description: "Flaky pastry with fruit or cream filling",
          image: "/pexels-valeriya-7474247.jpg",
          popular: false,
          rating: 4.3,
          ingredients: ["Puff Pastry", "Fruit Filling", "Cream"],
        },
      ],
    },
    {
      title: "Sandwiches & Light Meals",
      items: [
        {
          name: "Club Sandwich",
          price: "$8.50",
          description: "Triple-decker with turkey, bacon, lettuce, and tomato",
          image: "/pexels-the-castlebar-3902897-15662232.jpg",
          popular: true,
          rating: 4.6,
          ingredients: ["Turkey", "Bacon", "Lettuce", "Tomato", "Mayo"],
        },
        {
          name: "Grilled Panini",
          price: "$7.75",
          description: "Pressed sandwich with mozzarella, tomato, and basil",
          image: "/grilled-panini-with-melting-cheese-greens_419341-78549 (2).jpg",
          popular: true,
          rating: 4.5,
          ingredients: ["Mozzarella", "Tomato", "Basil", "Ciabatta Bread"],
        },
        {
          name: "Caesar Salad",
          price: "$6.50",
          description: "Fresh romaine with parmesan, croutons, and Caesar dressing",
          image: "/pexels-guvo59-28933153.jpg",
          popular: false,
          rating: 4.2,
          ingredients: ["Romaine Lettuce", "Parmesan", "Croutons", "Caesar Dressing"],
        },
      ],
    },
    {
      title: "Breakfast Items",
      items: [
        {
          name: "Avocado Toast",
          price: "$6.25",
          description: "Smashed avocado on sourdough with lime and sea salt",
          image: "/pexels-valeriya-kobzar-42371713-16496268.jpg",
          popular: true,
          rating: 4.7,
          ingredients: ["Avocado", "Sourdough Bread", "Lime", "Sea Salt"],
        },
        {
          name: "Breakfast Burrito",
          price: "$7.50",
          description: " Breakfast Burrito Scrambled eggs, cheese, and bacon wrapped in tortilla",
          image: "/pexels-clayton-de-araujo-414048915-15200487.jpg",
          popular: true,
          rating: 4.6,
          ingredients: ["Eggs", "Cheese", "Bacon", "Tortilla"],
        },
        {
          name: "Pancakes",
          price: "$5.75",
          description: "Fluffy pancakes served with maple syrup and butter",
          image: "/pexels-skyler-ewing-266953-10518222 (2).jpg",
          popular: false,
          rating: 4.4,
          ingredients: ["Flour", "Eggs", "Milk", "Maple Syrup"],
        },
      ],
    },
  ]

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Menu</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully crafted selection of beverages and treats
          </p>
        </div>

        {menuCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">{category.title}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, itemIndex) => (
                <Card
                  key={itemIndex}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                >
                  <div className="relative">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    {item.popular && <Badge className="absolute top-2 right-2 bg-amber-600">Popular</Badge>}
                    <div className="absolute top-2 left-2 flex items-center bg-white/90 rounded-full px-2 py-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium ml-1">{item.rating}</span>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl">{item.name}</CardTitle>
                      <span className="text-2xl font-bold text-amber-600">{item.price}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          className="w-full bg-amber-600 hover:bg-amber-700"
                          onClick={() => setSelectedItem(item)}
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">{item.name}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover rounded-lg"
                          />
                          <div className="flex justify-between items-center">
                            <span className="text-3xl font-bold text-amber-600">{item.price}</span>
                            <div className="flex items-center">
                              <Star className="h-5 w-5 text-yellow-400 fill-current" />
                              <span className="ml-1 font-medium">{item.rating}</span>
                            </div>
                          </div>
                          <p className="text-gray-600">{item.description}</p>
                          <div>
                            <h4 className="font-semibold mb-2">Ingredients:</h4>
                            <div className="flex flex-wrap gap-2">
                              {item.ingredients.map((ingredient, idx) => (
                                <Badge key={idx} variant="secondary">
                                  {ingredient}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <Button
                            className="w-full bg-amber-600 hover:bg-amber-700 text-lg py-3"
                            onClick={() => {
                              setSelectedCartItem(item)
                              setShowCartModal(true)
                            }}
                          >
                            Add to Order - {item.price}
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
      <CartModal isOpen={showCartModal} onClose={() => setShowCartModal(false)} item={selectedCartItem} />
    </section>
  )
}

