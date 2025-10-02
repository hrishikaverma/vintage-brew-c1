import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Coffee, Leaf, Cookie, Star, Heart, ShoppingCart, Search, Filter, Clock, Award } from 'lucide-react';

const menuItems = {
  coffee: [
    {
      name: "Vintage Espresso",
      price: "$3.50",
      description: "Rich, bold espresso with notes of dark chocolate and a velvety crema",
      image: "https://images.unsplash.com/photo-1601477575132-df687f64f14c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMGNvZmZlZSUyMGN1cCUyMGRhcmt8ZW58MXx8fHwxNzU5NDI5NzI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: true,
      rating: 4.9,
      prepTime: "3 min",
      tags: ["Strong", "Classic"]
    },
    {
      name: "Honey Latte",
      price: "$4.75",
      description: "Creamy latte sweetened with local wildflower honey and steamed milk",
      image: "https://images.unsplash.com/photo-1598859098127-37db61b019d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25leSUyMGxhdHRlJTIwY29mZmVlJTIwbWlsayUyMGZvYW18ZW58MXx8fHwxNzU5NDM3MDcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: false,
      rating: 4.7,
      prepTime: "4 min",
      tags: ["Sweet", "Creamy"]
    },
    {
      name: "Rustic Cappuccino",
      price: "$4.25",
      description: "Traditional cappuccino with a touch of cinnamon and perfect foam art",
      image: "https://images.unsplash.com/photo-1565581627391-7c8b11507a20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBwdWNjaW5vJTIwY2lubmFtb24lMjBjb2ZmZWUlMjBmb2FtfGVufDF8fHx8MTc1OTQzNzA3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: false,
      rating: 4.6,
      prepTime: "4 min",
      tags: ["Spiced", "Traditional"]
    },
    {
      name: "Cold Brew Delight",
      price: "$4.50",
      description: "Smooth cold brew with vanilla and oat milk, perfect for warm days",
      image: "https://images.unsplash.com/photo-1577819445935-e773c99f8412?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xkJTIwYnJldyUyMGNvZmZlZSUyMGljZSUyMHZhbmlsbGF8ZW58MXx8fHwxNzU5NDM3MDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: false,
      rating: 4.8,
      prepTime: "2 min",
      tags: ["Cold", "Refreshing"]
    }
  ],
  tea: [
    {
      name: "Earl Grey Supreme",
      price: "$3.25",
      description: "Classic Earl Grey with bergamot and lavender, served with lemon",
      image: "https://images.unsplash.com/photo-1707336666897-fcbfef7bdf56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYXJsJTIwZ3JleSUyMHRlYSUyMGN1cCUyMGJlcmdhbW90fGVufDF8fHx8MTc1OTQzNzA4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: false,
      rating: 4.5,
      prepTime: "5 min",
      tags: ["Citrusy", "Classic"]
    },
    {
      name: "Chamomile Dreams",
      price: "$3.00",
      description: "Soothing chamomile with honey and lemon, perfect for relaxation",
      image: "https://images.unsplash.com/photo-1682530017002-34e2cb7b1653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFtb21pbGUlMjB0ZWElMjBob25leSUyMGxlbW9uJTIwaGVyYmFsfGVufDF8fHx8MTc1OTQzNzA4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: true,
      rating: 4.4,
      prepTime: "6 min",
      tags: ["Herbal", "Relaxing"]
    }
  ],
  bakery: [
    {
      name: "Artisan Croissant",
      price: "$2.75",
      description: "Flaky, buttery croissant baked fresh daily with premium French butter",
      image: "https://images.unsplash.com/photo-1681218079567-35aef7c8e7e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNyb2lzc2FudCUyMGJ1dHRlcnklMjBwYXN0cnklMjBiYWtlcnl8ZW58MXx8fHwxNzU5NDM3MDg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: true,
      rating: 4.8,
      prepTime: "0 min",
      tags: ["Fresh", "French"]
    },
    {
      name: "Blueberry Muffin",
      price: "$3.25",
      description: "Moist muffin packed with fresh blueberries and a crispy sugar top",
      image: "https://images.unsplash.com/photo-1637861004881-000f8268d491?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlYmVycnklMjBtdWZmaW4lMjBmcmVzaCUyMGJha2VkfGVufDF8fHx8MTc1OTQzNzA5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: false,
      rating: 4.6,
      prepTime: "0 min",
      tags: ["Fruity", "Sweet"]
    },
    {
      name: "Vintage Scone",
      price: "$2.95",
      description: "Traditional scone with clotted cream and homemade strawberry jam",
      image: "https://images.unsplash.com/photo-1650419741906-1cdead9c9b4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY29uZSUyMGNsb3R0ZWQlMjBjcmVhbSUyMGphbSUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc1OTQzNzA5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: false,
      rating: 4.7,
      prepTime: "0 min",
      tags: ["Traditional", "British"]
    }
  ]
};

export function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All Items', icon: Filter, count: Object.values(menuItems).flat().length },
    { id: 'coffee', label: 'Coffee', icon: Coffee, count: menuItems.coffee.length },
    { id: 'tea', label: 'Tea', icon: Leaf, count: menuItems.tea.length },
    { id: 'bakery', label: 'Bakery', icon: Cookie, count: menuItems.bakery.length }
  ];

  const getAllItems = () => {
    return [
      ...menuItems.coffee.map(item => ({ ...item, category: 'coffee' })),
      ...menuItems.tea.map(item => ({ ...item, category: 'tea' })),
      ...menuItems.bakery.map(item => ({ ...item, category: 'bakery' }))
    ];
  };

  const getFilteredItems = () => {
    let items = activeCategory === 'all' ? getAllItems() : 
                 menuItems[activeCategory as keyof typeof menuItems].map(item => ({ ...item, category: activeCategory }));
    
    if (searchTerm) {
      items = items.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    return items;
  };

  const toggleFavorite = (itemName: string) => {
    setFavorites(prev => 
      prev.includes(itemName) 
        ? prev.filter(name => name !== itemName)
        : [...prev, itemName]
    );
  };

  const MenuItem = ({ item, index }: { item: any, index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <Card className="bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#CBB89D]/30 overflow-hidden group-hover:border-[#D4AF37]/50">
        <div className="relative overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          >
            <ImageWithFallback
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover"
            />
          </motion.div>
          
          {/* Overlay with actions */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <span className="text-white text-xs">{item.rating}</span>
                </div>
                <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
                  <Clock className="w-3 h-3 text-white" />
                  <span className="text-white text-xs">{item.prepTime}</span>
                </div>
              </div>
              
              <motion.button
                onClick={() => toggleFavorite(item.name)}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart 
                  className={`w-5 h-5 ${favorites.includes(item.name) ? 'fill-red-500 text-red-500' : ''}`} 
                />
              </motion.button>
            </div>
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col space-y-2">
            {item.popular && (
              <Badge className="bg-[#D4AF37] text-white shadow-lg">
                <Award className="w-3 h-3 mr-1" />
                Popular
              </Badge>
            )}
            {item.tags?.slice(0, 1).map((tag: string) => (
              <Badge key={tag} variant="secondary" className="bg-white/90 text-[#6B4F37] text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Price Badge */}
          <div className="absolute top-3 right-3">
            <Badge className="bg-[#6B4F37] text-white text-lg px-3 py-1 shadow-lg">
              {item.price}
            </Badge>
          </div>
        </div>
        
        <CardContent className="p-6">
          <div className="space-y-3">
            <div>
              <h4 
                className="text-xl text-[#6B4F37] group-hover:text-[#8DA399] transition-colors"
                style={{ fontFamily: 'Playfair Display' }}
              >
                {item.name}
              </h4>
              <p 
                className="text-[#6B4F37]/70 text-sm leading-relaxed mt-2"
                style={{ fontFamily: 'Inter' }}
              >
                {item.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {item.tags?.map((tag: string) => (
                <span 
                  key={tag}
                  className="text-xs px-2 py-1 bg-[#CBB89D]/20 text-[#6B4F37] rounded-full"
                  style={{ fontFamily: 'Inter' }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Add to Cart Button */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                className="w-full bg-[#8DA399] hover:bg-[#7A9189] text-white group-hover:bg-[#6B4F37] transition-all duration-300"
                style={{ fontFamily: 'Inter' }}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Order
              </Button>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-[#F5F2ED] to-[#FAF7F2]">
      <div className="container mx-auto px-4">
        {/* Enhanced Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Coffee className="w-8 h-8 text-[#D4AF37]" />
            </motion.div>
            <h2 
              className="text-4xl md:text-6xl text-[#6B4F37]"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Our Menu
            </h2>
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              <Cookie className="w-8 h-8 text-[#D4AF37]" />
            </motion.div>
          </div>
          <p 
            className="text-lg text-[#6B4F37]/70 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter' }}
          >
            Crafted with passion, served with love. Each item is made from the finest ingredients 
            to create memorable moments that warm your heart and delight your senses.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          className="max-w-md mx-auto mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#6B4F37]/50 w-5 h-5" />
            <input
              type="text"
              placeholder="Search menu items..."
              className="w-full pl-12 pr-4 py-3 bg-white border-2 border-[#CBB89D]/30 rounded-full focus:border-[#D4AF37] transition-colors text-[#6B4F37] placeholder-[#6B4F37]/50"
              style={{ fontFamily: 'Inter' }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-12">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 bg-white/80 backdrop-blur-sm p-2 rounded-2xl shadow-lg border border-[#CBB89D]/30">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center space-x-2 py-3 px-4 rounded-xl data-[state=active]:bg-[#6B4F37] data-[state=active]:text-white transition-all duration-300"
                  style={{ fontFamily: 'Inter' }}
                >
                  <category.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.label}</span>
                  <Badge variant="secondary" className="ml-1 data-[state=active]:bg-white/20 data-[state=active]:text-white text-xs">
                    {category.count}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchTerm}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {getFilteredItems().map((item, index) => (
              <MenuItem key={`${item.name}-${index}`} item={item} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {getFilteredItems().length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Search className="w-16 h-16 text-[#6B4F37]/30 mx-auto mb-4" />
            <h3 className="text-2xl text-[#6B4F37] mb-2" style={{ fontFamily: 'Playfair Display' }}>
              No items found
            </h3>
            <p className="text-[#6B4F37]/60" style={{ fontFamily: 'Inter' }}>
              Try adjusting your search or browse different categories
            </p>
          </motion.div>
        )}

        {/* Favorites Summary */}
        {favorites.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-[#CBB89D]/30"
          >
            <Heart className="w-8 h-8 text-red-500 fill-current mx-auto mb-4" />
            <h3 className="text-2xl text-[#6B4F37] mb-2" style={{ fontFamily: 'Playfair Display' }}>
              Your Favorites
            </h3>
            <p className="text-[#6B4F37]/70 mb-4" style={{ fontFamily: 'Inter' }}>
              You have {favorites.length} favorite item{favorites.length !== 1 ? 's' : ''}
            </p>
            <Button
              className="bg-[#D4AF37] hover:bg-[#E5C048] text-[#6B4F37]"
              style={{ fontFamily: 'Inter' }}
            >
              View Favorites
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}