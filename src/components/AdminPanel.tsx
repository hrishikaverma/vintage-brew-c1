import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AdminLayout } from './admin/AdminLayout';
import { AdminDashboard } from './admin/AdminDashboard';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Switch } from './ui/switch';
import { Progress } from './ui/progress';
import {
  Coffee, Plus, Edit, Trash2, Eye, Search, Filter, MoreHorizontal,
  Users, Calendar, Package, BarChart3, Settings, Star, Clock,
  CheckCircle, XCircle, AlertCircle, DollarSign, ShoppingBag,
  Upload, Download, RefreshCw, Save, X, Check, Phone, Mail,
  MapPin, UserPlus, FileText, Camera, Heart, TrendingUp
} from 'lucide-react';

// Mock authentication state
const mockUser = {
  id: 1,
  name: 'Sarah Johnson',
  email: 'sarah@vintagebrewcafe.com',
  role: 'admin',
  avatar: '/admin-avatar.jpg'
};

// Menu Management Component
function MenuManagement() {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Vintage Espresso', category: 'Hot Drinks', price: 4.50, status: 'active', sales: 142, image: '/menu-1.jpg' },
    { id: 2, name: 'Caramel Macchiato', category: 'Hot Drinks', price: 5.25, status: 'active', sales: 128, image: '/menu-2.jpg' },
    { id: 3, name: 'Cold Brew Special', category: 'Cold Drinks', price: 4.75, status: 'active', sales: 87, image: '/menu-3.jpg' },
    { id: 4, name: 'Artisan Croissant', category: 'Pastries', price: 3.50, status: 'inactive', sales: 45, image: '/menu-4.jpg' },
    { id: 5, name: 'Blueberry Muffin', category: 'Pastries', price: 3.25, status: 'active', sales: 67, image: '/menu-5.jpg' }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl text-[#6B4F37]" style={{ fontFamily: 'Playfair Display' }}>
            Menu Management
          </h2>
          <p className="text-[#6B4F37]/70" style={{ fontFamily: 'Inter' }}>
            Manage your café menu items, pricing, and availability
          </p>
        </div>
        <Button
          onClick={() => setShowAddForm(true)}
          className="bg-[#8DA399] hover:bg-[#8DA399]/90 text-white"
          style={{ fontFamily: 'Inter' }}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Menu Item
        </Button>
      </div>

      {/* Filters */}
      <Card className="bg-white/90 backdrop-blur-sm shadow-lg border border-[#CBB89D]/30">
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B4F37]/40" />
                <Input 
                  placeholder="Search menu items..."
                  className="pl-10 border-[#CBB89D]/30 focus:border-[#8DA399]"
                  style={{ fontFamily: 'Inter' }}
                />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-48 border-[#CBB89D]/30">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="hot-drinks">Hot Drinks</SelectItem>
                <SelectItem value="cold-drinks">Cold Drinks</SelectItem>
                <SelectItem value="pastries">Pastries</SelectItem>
                <SelectItem value="sandwiches">Sandwiches</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-32 border-[#CBB89D]/30">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-white/90 backdrop-blur-sm shadow-lg border border-[#CBB89D]/30 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative h-48 bg-[#F5F2ED]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <Badge 
                  className={`absolute top-3 right-3 ${
                    item.status === 'active' ? 'bg-green-500' : 'bg-gray-500'
                  } text-white`}
                >
                  {item.status}
                </Badge>
                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="text-lg" style={{ fontFamily: 'Playfair Display' }}>
                    {item.name}
                  </h3>
                  <p className="text-sm opacity-90" style={{ fontFamily: 'Inter' }}>
                    {item.category}
                  </p>
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl text-[#8DA399]" style={{ fontFamily: 'Playfair Display' }}>
                    ${item.price}
                  </span>
                  <div className="flex items-center space-x-1 text-[#D4AF37]">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm" style={{ fontFamily: 'Inter' }}>4.8</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-[#6B4F37]/70" style={{ fontFamily: 'Inter' }}>
                      Sales this month
                    </p>
                    <p className="text-lg text-[#6B4F37]" style={{ fontFamily: 'Inter' }}>
                      {item.sales}
                    </p>
                  </div>
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>

                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setEditingItem(item)}
                    className="flex-1 border-[#8DA399] text-[#8DA399] hover:bg-[#8DA399] hover:text-white"
                  >
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#CBB89D] text-[#6B4F37] hover:bg-[#F5F2ED]"
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-red-300 text-red-600 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Add/Edit Form Modal */}
      <AnimatePresence>
        {(showAddForm || editingItem) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => {
              setShowAddForm(false);
              setEditingItem(null);
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl"
            >
              <Card className="bg-white shadow-2xl border border-[#CBB89D]/30">
                <CardHeader>
                  <CardTitle 
                    className="text-xl text-[#6B4F37]"
                    style={{ fontFamily: 'Playfair Display' }}
                  >
                    {editingItem ? 'Edit Menu Item' : 'Add New Menu Item'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-[#6B4F37]">Item Name</Label>
                      <Input 
                        id="name"
                        defaultValue={editingItem?.name || ''}
                        className="mt-1 border-[#CBB89D]/30 focus:border-[#8DA399]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="category" className="text-[#6B4F37]">Category</Label>
                      <Select>
                        <SelectTrigger className="mt-1 border-[#CBB89D]/30">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hot-drinks">Hot Drinks</SelectItem>
                          <SelectItem value="cold-drinks">Cold Drinks</SelectItem>
                          <SelectItem value="pastries">Pastries</SelectItem>
                          <SelectItem value="sandwiches">Sandwiches</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="price" className="text-[#6B4F37]">Price ($)</Label>
                      <Input 
                        id="price"
                        type="number"
                        step="0.25"
                        defaultValue={editingItem?.price || ''}
                        className="mt-1 border-[#CBB89D]/30 focus:border-[#8DA399]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="status" className="text-[#6B4F37]">Status</Label>
                      <div className="flex items-center space-x-3 mt-3">
                        <Switch 
                          defaultChecked={editingItem?.status === 'active'}
                        />
                        <span className="text-sm text-[#6B4F37]">Available for order</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description" className="text-[#6B4F37]">Description</Label>
                    <Textarea 
                      id="description"
                      placeholder="Enter item description..."
                      className="mt-1 border-[#CBB89D]/30 focus:border-[#8DA399]"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label className="text-[#6B4F37]">Item Image</Label>
                    <div className="mt-2 border-2 border-dashed border-[#CBB89D]/50 rounded-lg p-6 text-center">
                      <Camera className="w-8 h-8 text-[#CBB89D] mx-auto mb-2" />
                      <p className="text-sm text-[#6B4F37]/70">
                        Click to upload or drag and drop
                      </p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Choose File
                      </Button>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-3 pt-4 border-t border-[#CBB89D]/30">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setShowAddForm(false);
                        setEditingItem(null);
                      }}
                      className="border-[#CBB89D] text-[#6B4F37]"
                    >
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </Button>
                    <Button
                      className="bg-[#8DA399] hover:bg-[#8DA399]/90 text-white"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      {editingItem ? 'Update Item' : 'Add Item'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Simple placeholder components for other pages
function OrdersManagement() {
  return (
    <div className="space-y-6">
      <Card className="bg-white/90 backdrop-blur-sm shadow-lg border border-[#CBB89D]/30">
        <CardHeader>
          <CardTitle className="text-xl text-[#6B4F37]" style={{ fontFamily: 'Playfair Display' }}>
            Orders Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-[#6B4F37]/70" style={{ fontFamily: 'Inter' }}>
            Orders management functionality will be implemented here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

function ReservationsManagement() {
  return (
    <div className="space-y-6">
      <Card className="bg-white/90 backdrop-blur-sm shadow-lg border border-[#CBB89D]/30">
        <CardHeader>
          <CardTitle className="text-xl text-[#6B4F37]" style={{ fontFamily: 'Playfair Display' }}>
            Reservations Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-[#6B4F37]/70" style={{ fontFamily: 'Inter' }}>
            Reservations management functionality will be implemented here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

function CustomersManagement() {
  return (
    <div className="space-y-6">
      <Card className="bg-white/90 backdrop-blur-sm shadow-lg border border-[#CBB89D]/30">
        <CardHeader>
          <CardTitle className="text-xl text-[#6B4F37]" style={{ fontFamily: 'Playfair Display' }}>
            Customers Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-[#6B4F37]/70" style={{ fontFamily: 'Inter' }}>
            Customers management functionality will be implemented here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

function StaffManagement() {
  return (
    <div className="space-y-6">
      <Card className="bg-white/90 backdrop-blur-sm shadow-lg border border-[#CBB89D]/30">
        <CardHeader>
          <CardTitle className="text-xl text-[#6B4F37]" style={{ fontFamily: 'Playfair Display' }}>
            Staff Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-[#6B4F37]/70" style={{ fontFamily: 'Inter' }}>
            Staff management functionality will be implemented here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

function InventoryManagement() {
  return (
    <div className="space-y-6">
      <Card className="bg-white/90 backdrop-blur-sm shadow-lg border border-[#CBB89D]/30">
        <CardHeader>
          <CardTitle className="text-xl text-[#6B4F37]" style={{ fontFamily: 'Playfair Display' }}>
            Inventory Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-[#6B4F37]/70" style={{ fontFamily: 'Inter' }}>
            Inventory management functionality will be implemented here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

function Analytics() {
  return (
    <div className="space-y-6">
      <Card className="bg-white/90 backdrop-blur-sm shadow-lg border border-[#CBB89D]/30">
        <CardHeader>
          <CardTitle className="text-xl text-[#6B4F37]" style={{ fontFamily: 'Playfair Display' }}>
            Analytics & Reports
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-[#6B4F37]/70" style={{ fontFamily: 'Inter' }}>
            Analytics and reporting functionality will be implemented here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

function SettingsManagement() {
  return (
    <div className="space-y-6">
      <Card className="bg-white/90 backdrop-blur-sm shadow-lg border border-[#CBB89D]/30">
        <CardHeader>
          <CardTitle className="text-xl text-[#6B4F37]" style={{ fontFamily: 'Playfair Display' }}>
            Settings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-[#6B4F37]/70" style={{ fontFamily: 'Inter' }}>
            Settings management functionality will be implemented here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export function AdminPanel() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Mock authentication

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <AdminDashboard />;
      case 'menu':
        return <MenuManagement />;
      case 'orders':
        return <OrdersManagement />;
      case 'reservations':
        return <ReservationsManagement />;
      case 'customers':
        return <CustomersManagement />;
      case 'staff':
        return <StaffManagement />;
      case 'inventory':
        return <InventoryManagement />;
      case 'analytics':
        return <Analytics />;
      case 'settings':
        return <SettingsManagement />;
      default:
        return <AdminDashboard />;
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center">
        <Card className="w-full max-w-md bg-white shadow-xl border border-[#CBB89D]/30">
          <CardHeader>
            <CardTitle 
              className="text-2xl text-[#6B4F37] text-center"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Admin Login
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-[#6B4F37]">Email</Label>
              <Input 
                id="email"
                type="email"
                className="mt-1 border-[#CBB89D]/30 focus:border-[#8DA399]"
              />
            </div>
            <div>
              <Label htmlFor="password" className="text-[#6B4F37]">Password</Label>
              <Input 
                id="password"
                type="password"
                className="mt-1 border-[#CBB89D]/30 focus:border-[#8DA399]"
              />
            </div>
            <Button
              onClick={() => setIsAuthenticated(true)}
              className="w-full bg-[#8DA399] hover:bg-[#8DA399]/90 text-white"
            >
              Login
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <AdminLayout 
      currentPage={currentPage} 
      onPageChange={setCurrentPage}
    >
      {renderPage()}
    </AdminLayout>
  );
}