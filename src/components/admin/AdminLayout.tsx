import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import {
  LayoutDashboard, Coffee, ShoppingCart, Calendar, Users, 
  UserCheck, Package, BarChart3, Settings, LogOut, Menu as MenuIcon,
  Bell, Search, Plus, Download, Upload, RefreshCw, Eye, Edit,
  Trash2, Filter, Star, TrendingUp, TrendingDown, Activity,
  Clock, CheckCircle, XCircle, AlertCircle, DollarSign,
  ShoppingBag, CalendarDays, MessageSquare, MapPin, Phone, X
} from 'lucide-react';

const sidebarItems = [
  { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', badge: null },
  { id: 'menu', icon: Coffee, label: 'Menu Management', badge: '12' },
  { id: 'orders', icon: ShoppingCart, label: 'Orders', badge: '3' },
  { id: 'reservations', icon: Calendar, label: 'Reservations', badge: '8' },
  { id: 'customers', icon: Users, label: 'Customers', badge: null },
  { id: 'staff', icon: UserCheck, label: 'Staff', badge: null },
  { id: 'inventory', icon: Package, label: 'Inventory', badge: '2' },
  { id: 'analytics', icon: BarChart3, label: 'Analytics', badge: null },
  { id: 'settings', icon: Settings, label: 'Settings', badge: null }
];

interface AdminLayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function AdminLayout({ children, currentPage, onPageChange }: AdminLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) {
        setSidebarCollapsed(false); // Always expanded on mobile when shown
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const notifications = [
    { id: 1, type: 'order', message: 'New order #1234 received', time: '2 min ago', urgent: true },
    { id: 2, type: 'reservation', message: 'Reservation for 4 people at 7 PM', time: '15 min ago', urgent: false },
    { id: 3, type: 'inventory', message: 'Colombian beans running low', time: '1 hour ago', urgent: true },
    { id: 4, type: 'review', message: 'New 5-star review received', time: '2 hours ago', urgent: false }
  ];

  // Mobile navigation component
  const MobileNavigation = () => (
    <nav className="p-4 space-y-2">
      {sidebarItems.map((item) => (
        <motion.button
          key={item.id}
          onClick={() => {
            onPageChange(item.id);
            setMobileMenuOpen(false);
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full flex items-center space-x-3 p-4 rounded-xl transition-all group ${
            currentPage === item.id
              ? 'bg-[#8DA399] text-white shadow-lg'
              : 'text-[#6B4F37] hover:bg-[#F5F2ED]'
          }`}
        >
          <item.icon className="w-5 h-5" />
          <div className="flex items-center justify-between flex-1">
            <span style={{ fontFamily: 'Inter' }}>{item.label}</span>
            {item.badge && (
              <Badge className="bg-[#D4AF37] text-white text-xs">
                {item.badge}
              </Badge>
            )}
          </div>
        </motion.button>
      ))}
      
      {/* Mobile User Profile */}
      <div className="mt-8 p-4 bg-[#F5F2ED] rounded-xl">
        <div className="flex items-center space-x-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/admin-avatar.jpg" />
            <AvatarFallback className="bg-[#8DA399] text-white">SJ</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-sm text-[#6B4F37]" style={{ fontFamily: 'Inter' }}>
              Sarah Johnson
            </p>
            <p className="text-xs text-[#6B4F37]/60" style={{ fontFamily: 'Inter' }}>
              Admin
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-[#6B4F37] hover:bg-[#CBB89D]/30"
          >
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex">
      {/* Desktop Sidebar */}
      {!isMobile && (
        <motion.div
          className={`bg-white shadow-xl border-r border-[#CBB89D]/30 relative z-20 ${
            sidebarCollapsed ? 'w-16' : 'w-64'
          }`}
          animate={{ width: sidebarCollapsed ? 64 : 256 }}
          transition={{ duration: 0.3 }}
        >
        {/* Logo & Toggle */}
        <div className="p-4 border-b border-[#CBB89D]/30">
          <div className="flex items-center justify-between">
            <AnimatePresence>
              {!sidebarCollapsed && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-8 h-8 bg-[#8DA399] rounded-lg flex items-center justify-center">
                    <Coffee className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h1 className="text-lg text-[#6B4F37]" style={{ fontFamily: 'Playfair Display' }}>
                      Vintage Brew
                    </h1>
                    <p className="text-xs text-[#6B4F37]/60" style={{ fontFamily: 'Inter' }}>
                      Admin Panel
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="text-[#6B4F37] hover:bg-[#F5F2ED]"
            >
              <MenuIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {sidebarItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all group ${
                currentPage === item.id
                  ? 'bg-[#8DA399] text-white shadow-lg'
                  : 'text-[#6B4F37] hover:bg-[#F5F2ED]'
              }`}
            >
              <item.icon className={`w-5 h-5 ${sidebarCollapsed ? 'mx-auto' : ''}`} />
              <AnimatePresence>
                {!sidebarCollapsed && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="flex items-center justify-between flex-1"
                  >
                    <span style={{ fontFamily: 'Inter' }}>{item.label}</span>
                    {item.badge && (
                      <Badge className="bg-[#D4AF37] text-white text-xs">
                        {item.badge}
                      </Badge>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </nav>

        {/* User Profile */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className={`flex items-center space-x-3 p-3 bg-[#F5F2ED] rounded-xl ${
            sidebarCollapsed ? 'justify-center' : ''
          }`}>
            <Avatar className="w-8 h-8">
              <AvatarImage src="/admin-avatar.jpg" />
              <AvatarFallback className="bg-[#8DA399] text-white">SJ</AvatarFallback>
            </Avatar>
            <AnimatePresence>
              {!sidebarCollapsed && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="flex-1"
                >
                  <p className="text-sm text-[#6B4F37]" style={{ fontFamily: 'Inter' }}>
                    Sarah Johnson
                  </p>
                  <p className="text-xs text-[#6B4F37]/60" style={{ fontFamily: 'Inter' }}>
                    Admin
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        </motion.div>
      )}

      {/* Mobile Sidebar Sheet */}
      {isMobile && (
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetContent side="left" className="w-72 p-0 bg-white border-r border-[#CBB89D]/30">
            <div className="p-4 border-b border-[#CBB89D]/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#8DA399] rounded-lg flex items-center justify-center">
                    <Coffee className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h1 className="text-lg text-[#6B4F37]" style={{ fontFamily: 'Playfair Display' }}>
                      Vintage Brew
                    </h1>
                    <p className="text-xs text-[#6B4F37]/60" style={{ fontFamily: 'Inter' }}>
                      Admin Panel
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <MobileNavigation />
          </SheetContent>
        </Sheet>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b border-[#CBB89D]/30 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Mobile Menu Trigger */}
              {isMobile && (
                <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[#6B4F37] hover:bg-[#F5F2ED] lg:hidden"
                    >
                      <MenuIcon className="w-5 h-5" />
                    </Button>
                  </SheetTrigger>
                </Sheet>
              )}
              
              <div className="flex-1 min-w-0">
                <h1 
                  className={`${isMobile ? 'text-lg' : 'text-2xl'} text-[#6B4F37] capitalize truncate`}
                  style={{ fontFamily: 'Playfair Display' }}
                >
                  {currentPage === 'dashboard' ? 'Dashboard' : currentPage.replace('-', ' ')}
                </h1>
                {!isMobile && (
                  <p 
                    className="text-sm text-[#6B4F37]/60"
                    style={{ fontFamily: 'Inter' }}
                  >
                    Welcome back, Sarah! Here's what's happening today.
                  </p>
                )}
              </div>
            </div>
            
            <div className="flex items-center space-x-2 md:space-x-4">
              {/* Search - Hidden on mobile */}
              {!isMobile && (
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B4F37]/40" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-2 border border-[#CBB89D]/30 rounded-lg text-sm focus:outline-none focus:border-[#8DA399] bg-[#FAF7F2] w-48"
                    style={{ fontFamily: 'Inter' }}
                  />
                </div>
              )}

              {/* Notifications */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative text-[#6B4F37] hover:bg-[#F5F2ED]"
                >
                  <Bell className="w-5 h-5" />
                  <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 bg-[#D4AF37] text-white text-xs">
                    {notifications.filter(n => n.urgent).length}
                  </Badge>
                </Button>

                {/* Notifications Dropdown */}
                <AnimatePresence>
                  {showNotifications && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className={`absolute right-0 top-12 ${isMobile ? 'w-screen max-w-sm -right-4' : 'w-80'} bg-white shadow-xl border border-[#CBB89D]/30 rounded-xl p-4 z-50`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg text-[#6B4F37]" style={{ fontFamily: 'Playfair Display' }}>
                          Notifications
                        </h3>
                        <Button variant="ghost" size="sm" className="text-[#6B4F37]/60">
                          Mark all read
                        </Button>
                      </div>
                      <div className="space-y-3 max-h-80 overflow-y-auto">
                        {notifications.map((notification) => (
                          <div 
                            key={notification.id}
                            className={`p-3 rounded-lg border ${
                              notification.urgent 
                                ? 'border-[#D4AF37]/30 bg-[#D4AF37]/5' 
                                : 'border-[#CBB89D]/20 bg-[#F5F2ED]'
                            }`}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <p className="text-sm text-[#6B4F37]" style={{ fontFamily: 'Inter' }}>
                                  {notification.message}
                                </p>
                                <p className="text-xs text-[#6B4F37]/60 mt-1" style={{ fontFamily: 'Inter' }}>
                                  {notification.time}
                                </p>
                              </div>
                              {notification.urgent && (
                                <AlertCircle className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Quick Actions - Hidden on mobile */}
              {!isMobile && (
                <Button
                  size="sm"
                  className="bg-[#8DA399] hover:bg-[#8DA399]/90 text-white"
                  style={{ fontFamily: 'Inter' }}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Quick Add
                </Button>
              )}

              {/* Mobile Quick Add */}
              {isMobile && (
                <Button
                  size="sm"
                  className="bg-[#8DA399] hover:bg-[#8DA399]/90 text-white px-3"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              )}

              {/* Logout - Hidden on mobile (available in mobile menu) */}
              {!isMobile && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-[#6B4F37] hover:bg-[#F5F2ED]"
                >
                  <LogOut className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className={`flex-1 ${isMobile ? 'p-4' : 'p-6'} overflow-auto`}>
          {children}
        </main>
      </div>

      {/* Click overlay for notifications */}
      {showNotifications && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowNotifications(false)}
        />
      )}
    </div>
  );
}