"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Menu, X, Globe, ChevronDown, Brain, BarChart3, Route, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function MainNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  const languages = [
    { name: "English", code: "en", flag: "🇬🇧" },
    { name: "Français", code: "fr", flag: "🇫🇷" },
    { name: "العربية", code: "ar", flag: "🇲🇦" },
  ]

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Solutions",
      href: "/#solutions",
      submenu: [
        { name: "AI Route Optimization", href: "/solutions/route-optimization", icon: Route },
        { name: "Fleet Analytics", href: "/solutions/fleet-analytics", icon: BarChart3 },
        { name: "Predictive Maintenance", href: "/solutions/predictive-maintenance", icon: LineChart },
        { name: "AI Freight Matching", href: "/solutions/freight-matching", icon: Brain },
      ],
    },
    { name: "Features", href: "/#features" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[#0f172a] border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-white">MarocTransit</span>
              <span className="text-xs text-blue-400">AI-Powered Logistics</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) =>
              link.submenu ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger className="text-gray-300 hover:text-blue-500 font-medium flex items-center">
                    {link.name}
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="bg-gray-900 border-gray-800 w-56">
                    {link.submenu.map((subItem) => (
                      <DropdownMenuItem
                        key={subItem.name}
                        className="cursor-pointer text-gray-300 hover:text-white hover:bg-gray-800"
                        asChild
                      >
                        <Link href={subItem.href} className="flex items-center gap-2 p-2">
                          <subItem.icon className="h-4 w-4 text-blue-500" />
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link key={link.name} href={link.href} className="text-gray-200 hover:text-blue-500 font-medium">
                  {link.name}
                </Link>
              ),
            )}
          </nav>

          {/* Right side: Language & Auth */}
          <div className="hidden md:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center text-gray-300">
                  <Globe className="h-4 w-4 mr-1" />
                  <span>EN</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-gray-900 border-gray-800">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    className="cursor-pointer text-gray-300 hover:text-white hover:bg-gray-800"
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/login">
              <Button
                variant="outline"
                size="sm"
                className="text-gray-200 border-gray-700 hover:bg-gray-800 hover:text-white"
              >
                Login
              </Button>
            </Link>

            <Link href="/signup">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                Sign Up Free
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-gray-300">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 sm:w-80 bg-gray-950 border-gray-800">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b border-gray-800 py-4">
                  <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                      <Brain className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-white">MarocTransit</span>
                      <span className="text-xs text-blue-400">AI-Powered Logistics</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-300"
                  >
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>

                <div className="flex-1 overflow-auto py-4">
                  <nav className="flex flex-col space-y-1">
                    {navLinks.map((link) =>
                      link.submenu ? (
                        <div key={link.name} className="px-3 py-2">
                          <div className="text-gray-400 text-sm font-medium mb-2">{link.name}</div>
                          <div className="pl-2 flex flex-col space-y-1">
                            {link.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-blue-500 rounded-md flex items-center"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <subItem.icon className="h-4 w-4 mr-2 text-blue-500" />
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-blue-500 rounded-md"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.name}
                        </Link>
                      ),
                    )}
                  </nav>
                </div>

                <div className="border-t border-gray-800 py-4 space-y-3">
                  <div className="px-3">
                    <p className="text-xs text-gray-500 mb-2">Select Language</p>
                    <div className="grid grid-cols-3 gap-2">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          className="flex flex-col items-center justify-center p-2 text-gray-300 hover:bg-gray-800 rounded-md"
                        >
                          <span className="text-xl">{lang.flag}</span>
                          <span className="text-xs mt-1">{lang.code.toUpperCase()}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="px-3 space-y-2">
                    <Link href="/login">
                      <Button
                        variant="outline"
                        className="w-full justify-center text-gray-300 border-gray-700 hover:bg-gray-800"
                      >
                        Login
                      </Button>
                    </Link>
                    <Link href="/signup">
                      <Button className="w-full justify-center bg-blue-600 hover:bg-blue-700 text-white">
                        Sign Up Free
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

