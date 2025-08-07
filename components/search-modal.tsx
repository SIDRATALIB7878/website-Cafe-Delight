"use client"

import { useState, useMemo } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Star, Plus } from 'lucide-react'
import Image from "next/image"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("")

  // All menu items for search
  const allMenuItems = [
    {
      name: "Espresso",
      price: "$3.50",
      description: "Rich and bold espresso shot made from premium arabica beans",
      image: "/placeholder-gkwei.png",
      category: "Hot Beverages",
      rating: 4.8,
    },
    {
      name: "Cappuccino",
      price: "$4.50",
      description: "Perfect balance of espresso, steamed milk and velvety foam",
      image: "/placeholder-47bvd.png",
      category: "Hot Beverages",
      rating: 4.6,
    },
    {
      name: "Latte",
      price: "$4.75",
      description: "Smooth espresso with steamed milk and light foam",
      image: "/placeholder-1xoih.png",
      category: "Hot Beverages",
      rating: 4.7,
    },
    {
      name: "Iced Coffee",
      price: "$3.75",
      description: "Refreshing cold brew coffee served over ice",
      image: "/iced-coffee-cubes.png",
      category: "Cold Beverages",
      rating: 4.3,
    },
    {
      name: "Frappuccino",
      price: "$5.25",
      description: "Blended coffee drink with whipped cream topping",
      image: "/placeholder-o47c6.png",
      category: "Cold Beverages",
      rating: 4.8,
    },
    {
      name: "Cold Brew",
      price: "$4.00",
      description: "Smooth cold-brewed coffee, less acidic than regular iced coffee",
      image: "/cold-brew-glass.png",
      category: "Cold Beverages",
      rating: 4.6,
    },
    {
      name: "Croissant",
      price: "$2.50",
      description: "Buttery, flaky French pastry baked fresh daily",
      image: "/fresh-croissant.png",
      category: "Pastries & Desserts",
      rating: 4.7,
    },
    {
      name: "Blueberry Muffin",
      price: "$3.00",
      description: "Fresh baked muffin with real blueberries",
      image: "/blueberry-muffin.png",
      category: "Pastries & Desserts",
      rating: 4.4,
    },
    {
      name: "Chocolate Cake",
      price: "$4.50",
      description: "Rich, moist chocolate cake slice",
      image: "/chocolate-cake-slice.png",
      category: "Pastries & Desserts",
      rating: 4.8,
    },
    {
      name: "Caramel Macchiato",
      price: "$5.75",
      description: "Vanilla syrup, steamed milk, espresso, and caramel drizzle",
      image: "/placeholder.svg?height=200&width=300",
      category: "Specialty Drinks",
      rating: 4.9,
    },
    {
      name: "Club Sandwich",
      price: "$8.50",
      description: "Triple-decker with turkey, bacon, lettuce, and tomato",
      image: "/placeholder.svg?height=200&width=300",
      category: "Sandwiches & Light Meals",
      rating: 4.6,
    },
    {
      name: "Avocado Toast",
      price: "$6.25",
      description: "Smashed avocado on sourdough with lime and sea salt",
      image: "/placeholder.svg?height=200&width=300",
      category: "Breakfast Items",
      rating: 4.7,
    },
  ]

  // Filter items based on search query
  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return []
    
    return allMenuItems.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery])

  const handleItemClick = (item: any) => {
    // Scroll to menu section and close search
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Search className="h-6 w-6 text-amber-600" />
            Search Menu
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for coffee, food, pastries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 text-lg py-3"
              autoFocus
            />
          </div>

          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto">
            {searchQuery.trim() === "" ? (
              <div className="text-center py-8">
                <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 mb-2">Start typing to search our menu</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline" className="cursor-pointer" onClick={() => setSearchQuery("coffee")}>
                    Coffee
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer" onClick={() => setSearchQuery("latte")}>
                    Latte
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer" onClick={() => setSearchQuery("croissant")}>
                    Croissant
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer" onClick={() => setSearchQuery("sandwich")}>
                    Sandwich
                  </Badge>
                </div>
              </div>
            ) : filteredItems.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">No items found for "{searchQuery}"</p>
                <p className="text-sm text-gray-400 mt-2">Try searching for coffee, pastries, or sandwiches</p>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-sm text-gray-600">Found {filteredItems.length} items</p>
                {filteredItems.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleItemClick(item)}
                    className="flex items-center gap-4 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold">{item.name}</h4>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600 ml-1">{item.rating}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs">
                          {item.category}
                        </Badge>
                        <span className="font-bold text-amber-600">{item.price}</span>
                      </div>
                    </div>
                    <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
