"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Minus, Plus, ShoppingCart, Trash2, CheckCircle, User, MapPin, Phone } from 'lucide-react'
import Image from "next/image"
import { useCart, type CartItem } from "@/components/cart-context"

interface CartModalProps {
  isOpen: boolean
  onClose: () => void
  item: {
    name: string
    price: string
    image: string
    ingredients: string[]
  } | null
}

export default function CartModal({ isOpen, onClose, item }: CartModalProps) {
  const [quantity, setQuantity] = useState(1)
  const [showCheckout, setShowCheckout] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    address: "",
  })

  const { cartItems, addToCart, updateQuantity, getTotalItems, getTotalPrice, clearCart } = useCart()

  const handleAddToCart = () => {
    if (!item) return

    const newItem: CartItem = {
      id: Date.now().toString(),
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: quantity,
      ingredients: item.ingredients,
    }

    addToCart(newItem)
    setQuantity(1)
    onClose()
  }

  const handleCheckout = () => {
    setShowCheckout(true)
  }

  const handleOrderComplete = () => {
    setOrderComplete(true)
    setTimeout(() => {
      clearCart()
      setShowCheckout(false)
      setOrderComplete(false)
      setCustomerInfo({ name: "", phone: "", address: "" })
      onClose()
    }, 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setCustomerInfo((prev) => ({ ...prev, [field]: value }))
  }

  // Order Complete Screen
  if (orderComplete) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md">
          <div className="text-center space-y-6 py-8">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Confirmed!</h2>
              <p className="text-gray-600">Thank you for your order. We'll prepare it shortly.</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-green-800">
                <strong>Order Total:</strong> ${getTotalPrice()}
              </p>
              <p className="text-sm text-green-800">
                <strong>Items:</strong> {getTotalItems()} items
              </p>
              <p className="text-sm text-green-800">
                <strong>Estimated Time:</strong> 15-20 minutes
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  // Checkout Screen
  if (showCheckout) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <ShoppingCart className="h-6 w-6 text-amber-600" />
              Checkout
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-3">Order Summary</h3>
              {cartItems.map((cartItem) => (
                <div key={cartItem.id} className="flex justify-between items-center mb-2">
                  <span className="text-sm">
                    {cartItem.name} x{cartItem.quantity}
                  </span>
                  <span className="text-sm font-semibold">
                    ${(Number.parseFloat(cartItem.price.replace("$", "")) * cartItem.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between items-center font-bold">
                  <span>Total:</span>
                  <span className="text-amber-600">${getTotalPrice()}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Customer Information</h3>
              <div className="space-y-3">
                <Input
                  type="text"
                  placeholder="Full Name"
                  value={customerInfo.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={customerInfo.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Address (Optional)"
                  value={customerInfo.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-3">
              <Button
                onClick={handleOrderComplete}
                disabled={!customerInfo.name || !customerInfo.phone}
                className="w-full bg-green-600 hover:bg-green-700 text-lg py-3"
              >
                <CheckCircle className="h-5 w-5 mr-2" />
                Complete Order - ${getTotalPrice()}
              </Button>
              <Button variant="outline" onClick={() => setShowCheckout(false)} className="w-full">
                Back to Cart
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  // Cart View or Add Item View
  if (cartItems.length > 0 && !item) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <ShoppingCart className="h-6 w-6 text-amber-600" />
              Your Cart ({getTotalItems()} items)
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {cartItems.map((cartItem) => (
              <div key={cartItem.id} className="flex items-center gap-3 p-3 border rounded-lg">
                <Image
                  src={cartItem.image || "/placeholder.svg"}
                  alt={cartItem.name}
                  width={60}
                  height={60}
                  className="rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold">{cartItem.name}</h4>
                  <p className="text-amber-600 font-bold">{cartItem.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => updateQuantity(cartItem.id, cartItem.quantity - 1)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center">{cartItem.quantity}</span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => updateQuantity(cartItem.id, cartItem.quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => updateQuantity(cartItem.id, 0)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}

            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-2xl font-bold text-amber-600">${getTotalPrice()}</span>
              </div>
              <Button onClick={handleCheckout} className="w-full bg-amber-600 hover:bg-amber-700 text-lg py-3">
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  // Add to Cart Screen
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Add to Cart</DialogTitle>
        </DialogHeader>

        {item && (
          <div className="space-y-4">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-lg"
            />

            <div>
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-2xl font-bold text-amber-600">{item.price}</p>
            </div>

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

            <div className="flex items-center gap-4">
              <span className="font-semibold">Quantity:</span>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-bold">{quantity}</span>
                <Button size="sm" variant="outline" onClick={() => setQuantity(quantity + 1)}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex justify-between items-center p-4 bg-amber-50 rounded-lg">
              <span className="font-semibold">Total:</span>
              <span className="text-xl font-bold text-amber-600">
                ${(Number.parseFloat(item.price.replace("$", "")) * quantity).toFixed(2)}
              </span>
            </div>

            <Button onClick={handleAddToCart} className="w-full bg-amber-600 hover:bg-amber-700 text-lg py-3">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
