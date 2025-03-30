"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Truck,
  Package,
  BarChart3,
  Settings,
  Users,
  AlertTriangle,
  Route,
  Brain,
  LogOut,
  Search,
  Bell,
  MessageSquare,
  ChevronDown,
  Home,
  FileText,
  CreditCard,
  HelpCircle,
  User,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarInput,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [userType, setUserType] = useState<"shipper" | "carrier">("shipper")

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-gray-950">
        <AppSidebar userType={userType} currentPath={pathname} />
        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-gray-800 bg-gray-950 px-6">
            <SidebarTrigger className="text-gray-400" />

            <div className="relative flex-1 md:max-w-sm">
              <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <input
                type="search"
                placeholder="Search..."
                className="h-9 w-full rounded-md border border-gray-800 bg-gray-900 pl-9 pr-4 text-sm text-gray-300 placeholder:text-gray-500 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>

            <div className="flex items-center gap-4 md:ml-auto">
              <Button
                variant="outline"
                size="sm"
                className="hidden border-gray-800 bg-gray-900 text-gray-300 hover:bg-gray-800 hover:text-white md:flex"
              >
                <span className="mr-2">{userType === "shipper" ? "Shipper" : "Carrier"} View</span>
                <ChevronDown className="h-4 w-4" />
              </Button>

              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="relative text-gray-400 hover:text-white">
                  <Bell className="h-5 w-5" />
                  <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-blue-600" />
                </Button>

                <Button variant="ghost" size="icon" className="relative text-gray-400 hover:text-white">
                  <MessageSquare className="h-5 w-5" />
                  <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-blue-600" />
                </Button>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                      <AvatarFallback>MT</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-gray-900 border-gray-800 text-gray-300">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-gray-800" />
                  <DropdownMenuItem className="hover:bg-gray-800 hover:text-white cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-800 hover:text-white cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-800 hover:text-white cursor-pointer">
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-gray-800" />
                  <DropdownMenuItem className="hover:bg-gray-800 hover:text-white cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          <main className="flex-1 overflow-auto bg-gray-950">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}

interface AppSidebarProps {
  userType: "shipper" | "carrier"
  currentPath: string
}

function AppSidebar({ userType, currentPath }: AppSidebarProps) {
  const shipperNavItems = [
    {
      icon: Home,
      title: "Dashboard",
      href: "/dashboard",
      isActive: currentPath === "/dashboard",
    },
    {
      icon: Package,
      title: "Shipments",
      href: "/dashboard/shipments",
      isActive: currentPath.startsWith("/dashboard/shipments"),
      subItems: [
        { title: "Active Shipments", href: "/dashboard/shipments/active" },
        { title: "Completed", href: "/dashboard/shipments/completed" },
        { title: "Drafts", href: "/dashboard/shipments/drafts" },
      ],
    },
    {
      icon: Truck,
      title: "Carriers",
      href: "/dashboard/carriers",
      isActive: currentPath.startsWith("/dashboard/carriers"),
      subItems: [
        { title: "Find Carriers", href: "/dashboard/carriers/find" },
        { title: "Preferred Carriers", href: "/dashboard/carriers/preferred" },
        { title: "Reviews", href: "/dashboard/carriers/reviews" },
      ],
    },
    {
      icon: Route,
      title: "Routes",
      href: "/dashboard/routes",
      isActive: currentPath.startsWith("/dashboard/routes"),
    },
    {
      icon: BarChart3,
      title: "Analytics",
      href: "/dashboard/analytics",
      isActive: currentPath.startsWith("/dashboard/analytics"),
      badge: "New",
    },
    {
      icon: FileText,
      title: "Documents",
      href: "/dashboard/documents",
      isActive: currentPath.startsWith("/dashboard/documents"),
    },
    {
      icon: CreditCard,
      title: "Payments",
      href: "/dashboard/payments",
      isActive: currentPath.startsWith("/dashboard/payments"),
    },
  ]

  const carrierNavItems = [
    {
      icon: Home,
      title: "Dashboard",
      href: "/dashboard",
      isActive: currentPath === "/dashboard",
    },
    {
      icon: Package,
      title: "Load Board",
      href: "/dashboard/loads",
      isActive: currentPath.startsWith("/dashboard/loads"),
      badge: "12 New",
    },
    {
      icon: Truck,
      title: "My Shipments",
      href: "/dashboard/my-shipments",
      isActive: currentPath.startsWith("/dashboard/my-shipments"),
      subItems: [
        { title: "Active", href: "/dashboard/my-shipments/active" },
        { title: "Completed", href: "/dashboard/my-shipments/completed" },
        { title: "Bids", href: "/dashboard/my-shipments/bids" },
      ],
    },
    {
      icon: Users,
      title: "Fleet",
      href: "/dashboard/fleet",
      isActive: currentPath.startsWith("/dashboard/fleet"),
      subItems: [
        { title: "Vehicles", href: "/dashboard/fleet/vehicles" },
        { title: "Drivers", href: "/dashboard/fleet/drivers" },
        { title: "Maintenance", href: "/dashboard/fleet/maintenance" },
      ],
    },
    {
      icon: BarChart3,
      title: "Earnings",
      href: "/dashboard/earnings",
      isActive: currentPath.startsWith("/dashboard/earnings"),
    },
    {
      icon: FileText,
      title: "Documents",
      href: "/dashboard/documents",
      isActive: currentPath.startsWith("/dashboard/documents"),
    },
  ]

  const navItems = userType === "shipper" ? shipperNavItems : carrierNavItems

  return (
    <Sidebar variant="floating" className="border-gray-800 bg-gray-900">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600">
            <Brain className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-white">MarocTransit</span>
            <span className="text-xs text-blue-400">AI-Powered Logistics</span>
          </div>
        </div>

        <div className="px-2 py-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <SidebarInput
              placeholder="Search..."
              className="pl-9 bg-gray-800 border-gray-700 text-gray-300 placeholder:text-gray-500 focus-visible:ring-blue-600"
            />
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.subItems ? (
                    <>
                      <SidebarMenuButton isActive={item.isActive}>
                        <item.icon className="h-4 w-4 mr-2" />
                        <span>{item.title}</span>
                        {item.badge && <Badge className="ml-auto bg-blue-600 text-white text-xs">{item.badge}</Badge>}
                        <ChevronDown className="ml-auto h-4 w-4" />
                      </SidebarMenuButton>
                      <SidebarMenuSub>
                        {item.subItems.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <Link href={subItem.href}>{subItem.title}</Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </>
                  ) : (
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <Link href={item.href}>
                        <item.icon className="h-4 w-4 mr-2" />
                        <span>{item.title}</span>
                        {item.badge && <Badge className="ml-auto bg-blue-600 text-white text-xs">{item.badge}</Badge>}
                      </Link>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>AI Features</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Brain className="h-4 w-4 mr-2 text-purple-500" />
                  <span>AI Matching</span>
                  <Badge className="ml-auto bg-purple-600 text-white text-xs">Pro</Badge>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Route className="h-4 w-4 mr-2 text-purple-500" />
                  <span>Route Optimization</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <AlertTriangle className="h-4 w-4 mr-2 text-purple-500" />
                  <span>Predictive Maintenance</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Settings className="h-4 w-4 mr-2" />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <HelpCircle className="h-4 w-4 mr-2" />
                  <span>Help & Support</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="p-2">
          <div className="flex items-center gap-3 rounded-md border border-gray-800 bg-gray-800/50 p-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
              <AvatarFallback>MT</AvatarFallback>
            </Avatar>
            <div className="flex flex-1 flex-col">
              <span className="text-xs font-medium text-white">Mohammed Tazi</span>
              <span className="text-xs text-gray-400">Premium Plan</span>
            </div>
            <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-400 hover:text-white">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

