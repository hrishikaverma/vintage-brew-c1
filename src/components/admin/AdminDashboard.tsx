import { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
  DollarSign, Users, Coffee, Calendar, TrendingUp, TrendingDown,
  Star, Clock, CheckCircle, AlertCircle, Package, ShoppingBag,
  Activity, Eye, Edit, MoreHorizontal, ArrowUpRight, ArrowDownRight
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

// Mock data
const statsData = [
  {
    title: "Today's Revenue",
    value: "$2,847",
    change: "+12.5%",
    changeType: "increase",
    icon: DollarSign,
    color: "#8DA399"
  },
  {
    title: "Active Orders",
    value: "23",
    change: "+3",
    changeType: "increase", 
    icon: ShoppingBag,
    color: "#D4AF37"
  },
  {
    title: "Reservations",
    value: "18",
    change: "-2",
    changeType: "decrease",
    icon: Calendar,
    color: "#CBB89D"
  },
  {
    title: "Customer Satisfaction",
    value: "4.8/5",
    change: "+0.2",
    changeType: "increase",
    icon: Star,
    color: "#6B4F37"
  }
];

const salesData = [
  { name: 'Mon', sales: 2400, orders: 24 },
  { name: 'Tue', sales: 1398, orders: 18 },
  { name: 'Wed', sales: 3800, orders: 32 },
  { name: 'Thu', sales: 3908, orders: 35 },
  { name: 'Fri', sales: 4800, orders: 42 },
  { name: 'Sat', sales: 3800, orders: 38 },
  { name: 'Sun', sales: 4300, orders: 41 }
];

const topProducts = [
  { name: 'Vintage Espresso', sales: 142, revenue: '$1,420', change: '+15%', color: '#8DA399' },
  { name: 'Caramel Macchiato', sales: 128, revenue: '$1,280', change: '+8%', color: '#D4AF37' },
  { name: 'Artisan Latte', sales: 95, revenue: '$950', change: '-3%', color: '#CBB89D' },
  { name: 'Cold Brew Special', sales: 87, revenue: '$870', change: '+22%', color: '#6B4F37' },
  { name: 'Chai Tea Latte', sales: 73, revenue: '$730', change: '+5%', color: '#8DA399' }
];

const recentOrders = [
  { id: '#1234', customer: 'John Doe', items: '2x Espresso, 1x Croissant', total: '$18.50', status: 'completed', time: '2 min ago' },
  { id: '#1235', customer: 'Sarah Smith', items: '1x Latte, 1x Muffin', total: '$12.75', status: 'preparing', time: '5 min ago' },
  { id: '#1236', customer: 'Mike Johnson', items: '3x Americano', total: '$15.00', status: 'pending', time: '8 min ago' },
  { id: '#1237', customer: 'Emma Wilson', items: '1x Cappuccino, 2x Cookies', total: '$14.25', status: 'completed', time: '12 min ago' },
  { id: '#1238', customer: 'Alex Brown', items: '1x Cold Brew, 1x Sandwich', total: '$16.50', status: 'preparing', time: '15 min ago' }
];

const upcomingReservations = [
  { id: 1, customer: 'Robert Davis', time: '2:00 PM', guests: 4, table: 'T-05', status: 'confirmed' },
  { id: 2, customer: 'Lisa Garcia', time: '3:30 PM', guests: 2, table: 'T-12', status: 'confirmed' },
  { id: 3, customer: 'David Martinez', time: '5:00 PM', guests: 6, table: 'T-08', status: 'pending' },
  { id: 4, customer: 'Jennifer Lee', time: '6:30 PM', guests: 3, table: 'T-03', status: 'confirmed' },
  { id: 5, customer: 'Mark Anderson', time: '7:00 PM', guests: 8, table: 'T-15', status: 'confirmed' }
];

const inventoryAlerts = [
  { item: 'Colombian Coffee Beans', level: 15, threshold: 20, status: 'low' },
  { item: 'Whole Milk', level: 25, threshold: 30, status: 'low' },
  { item: 'Sugar Packets', level: 45, threshold: 50, status: 'ok' },
  { item: 'Paper Cups (Large)', level: 8, threshold: 25, status: 'critical' }
];

export function AdminDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('today');

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="bg-white/90 backdrop-blur-sm shadow-lg border border-[#CBB89D]/30 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#6B4F37]/70 mb-1" style={{ fontFamily: 'Inter' }}>
                      {stat.title}
                    </p>
                    <h3 
                      className="text-xl md:text-2xl text-[#6B4F37] mb-2"
                      style={{ fontFamily: 'Playfair Display' }}
                    >
                      {stat.value}
                    </h3>
                    <div className="flex items-center space-x-1">
                      {stat.changeType === 'increase' ? (
                        <ArrowUpRight className="w-4 h-4 text-green-500" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4 text-red-500" />
                      )}
                      <span 
                        className={`text-sm ${
                          stat.changeType === 'increase' ? 'text-green-500' : 'text-red-500'
                        }`}
                        style={{ fontFamily: 'Inter' }}
                      >
                        {stat.change}
                      </span>
                    </div>
                  </div>
                  <div 
                    className="p-3 rounded-xl"
                    style={{ backgroundColor: `${stat.color}20` }}
                  >
                    <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Sales Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Card className="bg-white/90 backdrop-blur-sm shadow-lg border border-[#CBB89D]/30">
            <CardHeader className="pb-3 md:pb-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <CardTitle 
                  className="text-lg md:text-xl text-[#6B4F37]"
                  style={{ fontFamily: 'Playfair Display' }}
                >
                  Weekly Sales Overview
                </CardTitle>
                <div className="flex space-x-1 md:space-x-2">
                  {['today', 'week', 'month'].map((period) => (
                    <Button
                      key={period}
                      variant={selectedPeriod === period ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setSelectedPeriod(period)}
                      className={selectedPeriod === period ? 'bg-[#8DA399] text-white' : 'text-[#6B4F37]'}
                      style={{ fontFamily: 'Inter' }}
                    >
                      {period.charAt(0).toUpperCase() + period.slice(1)}
                    </Button>
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-3 md:p-6">
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#CBB89D" opacity={0.3} />
                  <XAxis dataKey="name" stroke="#6B4F37" />
                  <YAxis stroke="#6B4F37" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#FAF7F2', 
                      border: '1px solid #CBB89D',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="sales" fill="#8DA399" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Top Products */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Card className="bg-white/90 backdrop-blur-sm shadow-lg border border-[#CBB89D]/30">
            <CardHeader className="pb-3 md:pb-4">
              <CardTitle 
                className="text-lg md:text-xl text-[#6B4F37]"
                style={{ fontFamily: 'Playfair Display' }}
              >
                Top Selling Products
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 md:p-6">
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-[#F5F2ED] rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: product.color }}
                      />
                      <div>
                        <p className="text-sm text-[#6B4F37]" style={{ fontFamily: 'Inter' }}>
                          {product.name}
                        </p>
                        <p className="text-xs text-[#6B4F37]/60" style={{ fontFamily: 'Inter' }}>
                          {product.sales} sold
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-[#6B4F37]" style={{ fontFamily: 'Inter' }}>
                        {product.revenue}
                      </p>
                      <p 
                        className={`text-xs ${
                          product.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                        }`}
                        style={{ fontFamily: 'Inter' }}
                      >
                        {product.change}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Recent Orders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Card className="bg-white/90 backdrop-blur-sm shadow-lg border border-[#CBB89D]/30">
            <CardHeader className="pb-3 md:pb-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <CardTitle 
                  className="text-lg md:text-xl text-[#6B4F37]"
                  style={{ fontFamily: 'Playfair Display' }}
                >
                  Recent Orders
                </CardTitle>
                <Button variant="ghost" size="sm" className="text-[#8DA399] text-xs sm:text-sm">
                  <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">View All</span>
                  <span className="sm:hidden">All</span>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-3 md:p-6">
              <div className="space-y-3">
                {recentOrders.map((order) => (
                  <div key={order.id} className="p-3 border border-[#CBB89D]/20 rounded-lg hover:bg-[#F5F2ED] transition-colors">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-[#6B4F37] truncate" style={{ fontFamily: 'Inter' }}>
                            {order.id} - {order.customer}
                          </p>
                          <p className="text-xs text-[#6B4F37]/60 mt-1" style={{ fontFamily: 'Inter' }}>
                            {order.items}
                          </p>
                        </div>
                        <Badge 
                          className={`text-xs shrink-0 ${
                            order.status === 'completed' ? 'bg-green-100 text-green-700' :
                            order.status === 'preparing' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {order.status}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#8DA399]" style={{ fontFamily: 'Inter' }}>
                          {order.total}
                        </span>
                        <span className="text-[#6B4F37]/60" style={{ fontFamily: 'Inter' }}>
                          {order.time}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Upcoming Reservations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <Card className="bg-white/90 backdrop-blur-sm shadow-lg border border-[#CBB89D]/30">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle 
                  className="text-xl text-[#6B4F37]"
                  style={{ fontFamily: 'Playfair Display' }}
                >
                  Today's Reservations
                </CardTitle>
                <Button variant="ghost" size="sm" className="text-[#8DA399]">
                  <Calendar className="w-4 h-4 mr-2" />
                  Manage
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingReservations.map((reservation) => (
                  <div key={reservation.id} className="flex items-center justify-between p-3 border border-[#CBB89D]/20 rounded-lg hover:bg-[#F5F2ED] transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="text-center">
                        <p className="text-sm text-[#6B4F37]" style={{ fontFamily: 'Inter' }}>
                          {reservation.time}
                        </p>
                        <p className="text-xs text-[#6B4F37]/60" style={{ fontFamily: 'Inter' }}>
                          {reservation.table}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-[#6B4F37]" style={{ fontFamily: 'Inter' }}>
                          {reservation.customer}
                        </p>
                        <p className="text-xs text-[#6B4F37]/60" style={{ fontFamily: 'Inter' }}>
                          {reservation.guests} guests
                        </p>
                      </div>
                    </div>
                    <Badge 
                      className={`text-xs ${
                        reservation.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {reservation.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Inventory Alerts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Card className="bg-white/90 backdrop-blur-sm shadow-lg border border-[#CBB89D]/30">
          <CardHeader>
            <CardTitle 
              className="text-xl text-[#6B4F37] flex items-center"
              style={{ fontFamily: 'Playfair Display' }}
            >
              <Package className="w-5 h-5 mr-2 text-[#D4AF37]" />
              Inventory Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {inventoryAlerts.map((item, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-lg border-2 ${
                    item.status === 'critical' ? 'border-red-200 bg-red-50' :
                    item.status === 'low' ? 'border-yellow-200 bg-yellow-50' :
                    'border-green-200 bg-green-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm text-[#6B4F37]" style={{ fontFamily: 'Inter' }}>
                      {item.item}
                    </h4>
                    <AlertCircle 
                      className={`w-4 h-4 ${
                        item.status === 'critical' ? 'text-red-500' :
                        item.status === 'low' ? 'text-yellow-500' :
                        'text-green-500'
                      }`}
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-[#6B4F37]/70" style={{ fontFamily: 'Inter' }}>
                      <span>Current: {item.level}</span>
                      <span>Min: {item.threshold}</span>
                    </div>
                    <Progress 
                      value={(item.level / item.threshold) * 100} 
                      className={`h-2 ${
                        item.status === 'critical' ? 'bg-red-100' :
                        item.status === 'low' ? 'bg-yellow-100' :
                        'bg-green-100'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}