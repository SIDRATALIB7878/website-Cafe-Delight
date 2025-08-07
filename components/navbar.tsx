"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, X, Coffee, MoreVertical, ShoppingCart, Search, Bell, User, Heart, MapPin, Phone, Mail } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useCart } from "@/components/cart-context"
import CartModal from "@/components/cart-modal"
import AccountModal from "@/components/account-modal"
import SearchModal from "@/components/search-modal"

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [showCartModal, setShowCartModal] = useState(false)
  const [showAccountModal, setShowAccountModal] = useState(false)
  const [showSearchModal, setShowSearchModal] = useState(false)
  const { getTotalItems } = useCart()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Menu", href: "#menu" },
    { name: "Blogs", href: "#blogs" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  if (!mounted) {
    return (
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-amber-600" />
              <span className="text-2xl font-bold text-gray-900">Cafe Delight</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <span key={item.name} className="text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="text-gray-600">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-600">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-amber-600" />
            <span className="text-2xl font-bold text-gray-900">Cafe Delight</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.substring(1))}
                  className="text-gray-700 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Header Icons */}
          <div className="flex items-center space-x-2">
            {/* Search Icon */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-600 hover:text-amber-600"
              onClick={() => setShowSearchModal(true)}
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Notifications Icon */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-600 hover:text-amber-600 relative">
                  <Bell className="h-5 w-5" />
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-500 text-xs">
                    2
                  </Badge>
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Notifications</DialogTitle>
                </DialogHeader>
                <div className="space-y-3">
                  <div className="p-3 bg-amber-50 rounded-lg">
                    <p className="font-semibold text-sm">Special Offer!</p>
                    <p className="text-sm text-gray-600">Get 20% off on your next order</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="font-semibold text-sm">New Menu Items</p>
                    <p className="text-sm text-gray-600">Check out our seasonal specials</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Favorites Icon */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-600 hover:text-amber-600">
                  <Heart className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Your Favorites</DialogTitle>
                </DialogHeader>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <Coffee className="h-8 w-8 text-amber-600" />
                    <div>
                      <p className="font-semibold">Cappuccino</p>
                      <p className="text-sm text-gray-600">$4.50</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <Coffee className="h-8 w-8 text-amber-600" />
                    <div>
                      <p className="font-semibold">Chocolate Cake</p>
                      <p className="text-sm text-gray-600">$4.50</p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Cart Icon with Count */}
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 hover:text-amber-600 relative"
              onClick={() => setShowCartModal(true)}
            >
              <ShoppingCart className="h-5 w-5" />
              {getTotalItems() > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-amber-600 text-xs">
                  {getTotalItems()}
                </Badge>
              )}
            </Button>

            {/* User Profile Icon */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-600 hover:text-amber-600"
              onClick={() => setShowAccountModal(true)}
            >
              <User className="h-5 w-5" />
            </Button>

            {/* 3-Dot Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-600 hover:text-amber-600">
                  <MoreVertical className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {navItems.map((item) => (
                  <DropdownMenuItem
                    key={item.name}
                    onClick={() => scrollToSection(item.href.substring(1))}
                    className="cursor-pointer"
                  >
                    {item.name}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem className="cursor-pointer">
                  <MapPin className="h-4 w-4 mr-2" />
                  Location
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Us
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-amber-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Modals */}
      <CartModal isOpen={showCartModal} onClose={() => setShowCartModal(false)} item={null} />
      <AccountModal isOpen={showAccountModal} onClose={() => setShowAccountModal(false)} />
      <SearchModal isOpen={showSearchModal} onClose={() => setShowSearchModal(false)} />
    </nav>
  )
}
