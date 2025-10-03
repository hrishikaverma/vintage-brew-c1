import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { ChevronLeft, ChevronRight, Star, Quote, Play, MapPin, Calendar, Coffee, Heart, Users, Award, TrendingUp, Smile } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    name: "Emily Watson",
    role: "Regular Customer",
    location: "Downtown",
    text: "Vintage Brew Café has become my second home. The atmosphere is incredibly cozy, and their honey latte is absolutely divine. The staff always remembers my order and greets me with a warm smile.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1758599543111-36ce5c34fceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTk0MDcxMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "2 days ago",
    platform: "Google",
    verified: true,
    helpfulVotes: 23
  },
  {
    name: "James Martinez",
    role: "Business Professional",
    location: "Financial District",
    text: "I've tried coffee shops all over the city, but nothing compares to Vintage Brew. Their vintage espresso is perfectly balanced, and the rustic ambiance makes it the perfect spot for client meetings.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc1OTMyMTY2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "1 week ago",
    platform: "Yelp",
    verified: true,
    helpfulVotes: 31
  },
  {
    name: "Sarah Thompson",
    role: "Local Artist",
    location: "Arts Quarter",
    text: "This place has soul. The attention to detail in both the décor and the coffee is exceptional. I've spent countless hours here working on my art, and the creative energy is infectious.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1618622127587-3261f2b2f553?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFydGlzdCUyMGNyZWF0aXZlJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTk0NDEwMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "3 days ago",
    platform: "Facebook",
    verified: true,
    helpfulVotes: 18
  },
  {
    name: "David Chen",
    role: "Coffee Enthusiast",
    location: "University Area",
    text: "As someone who takes coffee seriously, I can confidently say that Vintage Brew serves some of the best coffee in town. Their cold brew is smooth, and their pastries are freshly baked perfection.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1616157541164-44d02156fef0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBlbnRodXNpYXN0JTIwbWFuJTIwY2FzdWFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU5NDQxMDEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "5 days ago",
    platform: "TripAdvisor",
    verified: true,
    helpfulVotes: 27
  },
  {
    name: "Margaret Williams",
    role: "Retired Teacher",
    location: "Suburban",
    text: "I've been coming here for morning coffee for over a year. The warmth and friendliness of the staff makes every visit special. It's like visiting family.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1758686254593-7c4cd55b2621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwd29tYW4lMjBzbWlsaW5nJTIwZnJpZW5kbHl8ZW58MXx8fHwxNzU5NDQxMDEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "1 day ago",
    platform: "Google",
    verified: true,
    helpfulVotes: 15
  },
  {
    name: "Alex Rodriguez",
    role: "University Student",
    location: "Campus",
    text: "Perfect study spot! Great WiFi, comfortable seating, and the best chai latte in town. The background music creates the perfect ambiance for productivity.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1561065533-316e3142d586?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHN0dWRlbnQlMjBoYXBweSUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTQ0MTAxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "4 days ago",
    platform: "Yelp",
    verified: true,
    helpfulVotes: 12
  }
];

const customerPhotos = [
  {
    image: "https://images.unsplash.com/photo-1693740834551-27138c279af2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwY3VzdG9tZXIlMjBleHBlcmllbmNlJTIwcGhvdG9zfGVufDF8fHx8MTc1OTQ0MTAyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Perfect latte art!",
    author: "Emily W."
  },
  {
    image: "https://images.unsplash.com/photo-1542338332-76971ae8c292?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBlbmpveWluZyUyMGNvZmZlZSUyMHRvZ2V0aGVyJTIwY2FmZXxlbnwxfHx8fDE3NTk0NDEwMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Great times with friends",
    author: "James M."
  }
];

const stats = [
  { number: "500+", label: "Happy Customers", icon: Users, color: "#D4AF37" },
  { number: "4.9", label: "Average Rating", icon: Star, color: "#8DA399" },
  { number: "8", label: "Years Serving", icon: Award, color: "#6B4F37" },
  { number: "15+", label: "Coffee Varieties", icon: Coffee, color: "#CBB89D" }
];

const ratingBreakdown = [
  { stars: 5, count: 420, percentage: 84 },
  { stars: 4, count: 65, percentage: 13 },
  { stars: 3, count: 12, percentage: 2.4 },
  { stars: 2, count: 3, percentage: 0.6 },
  { stars: 1, count: 0, percentage: 0 }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const TestimonialCard = ({ testimonial, index, featured = false }: { 
    testimonial: any, 
    index: number, 
    featured?: boolean 
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(107, 79, 55, 0.15)" }}
      className={`${featured ? 'md:col-span-2' : ''}`}
    >
      <Card className="bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#CBB89D]/30 overflow-hidden h-full">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4 mb-4">
            <div className="relative">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#D4AF37]/30">
                <ImageWithFallback
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {testimonial.verified && (
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center">
                  <Star className="w-3 h-3 text-white fill-current" />
                </div>
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-[#6B4F37]" style={{ fontFamily: 'Playfair Display' }}>
                  {testimonial.name}
                </h4>
                <Badge variant="secondary" className="text-xs">
                  {testimonial.platform}
                </Badge>
              </div>
              <p className="text-[#8DA399] text-sm" style={{ fontFamily: 'Inter' }}>
                {testimonial.role}
              </p>
              <div className="flex items-center space-x-2 mt-1">
                <MapPin className="w-3 h-3 text-[#6B4F37]/50" />
                <span className="text-xs text-[#6B4F37]/50" style={{ fontFamily: 'Inter' }}>
                  {testimonial.location}
                </span>
                <Calendar className="w-3 h-3 text-[#6B4F37]/50 ml-2" />
                <span className="text-xs text-[#6B4F37]/50" style={{ fontFamily: 'Inter' }}>
                  {testimonial.date}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < testimonial.rating
                    ? 'fill-[#D4AF37] text-[#D4AF37]'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>

          <div className="relative mb-4">
            <Quote className="absolute -top-2 -left-2 w-6 h-6 text-[#CBB89D]/30" />
            <blockquote
              className={`text-[#6B4F37]/80 leading-relaxed italic pl-4 ${
                featured ? 'text-base' : 'text-sm'
              }`}
              style={{ fontFamily: 'Inter' }}
            >
              {testimonial.text}
            </blockquote>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="w-4 h-4 text-red-500" />
              <span className="text-xs text-[#6B4F37]/60" style={{ fontFamily: 'Inter' }}>
                {testimonial.helpfulVotes} found helpful
              </span>
            </div>
            {testimonial.verified && (
              <Badge className="bg-[#8DA399]/10 text-[#8DA399] text-xs">
                Verified Customer
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-[#FAF7F2] to-[#F5F2ED]">
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
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Smile className="w-8 h-8 text-[#D4AF37]" />
            </motion.div>
            <h2 
              className="text-4xl md:text-6xl text-[#6B4F37]"
              style={{ fontFamily: 'Playfair Display' }}
            >
              What Our Customers Say
            </h2>
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Star className="w-8 h-8 text-[#D4AF37] fill-current" />
            </motion.div>
          </div>
          <p 
            className="text-lg text-[#6B4F37]/70 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter' }}
          >
            Don't just take our word for it. Here's what our wonderful community of coffee lovers 
            has to say about their Vintage Brew experience.
          </p>

          {/* View Mode Toggle */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <Button
              variant={viewMode === 'carousel' ? 'default' : 'outline'}
              onClick={() => setViewMode('carousel')}
              className="bg-[#6B4F37] hover:bg-[#6B4F37]/90"
              style={{ fontFamily: 'Inter' }}
            >
              Featured Reviews
            </Button>
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              onClick={() => setViewMode('grid')}
              className="bg-[#8DA399] hover:bg-[#8DA399]/90"
              style={{ fontFamily: 'Inter' }}
            >
              All Reviews
            </Button>
          </div>
        </motion.div>

        {/* Featured Testimonial Carousel */}
        {viewMode === 'carousel' && (
          <motion.div 
            className="max-w-5xl mx-auto relative mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white shadow-2xl border border-[#CBB89D]/30 overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    {/* Platform Badge */}
                    <div className="flex justify-center mb-6">
                      <Badge className={`px-4 py-2 ${
                        testimonials[currentIndex].platform === 'Google' ? 'bg-blue-500' :
                        testimonials[currentIndex].platform === 'Yelp' ? 'bg-red-500' :
                        testimonials[currentIndex].platform === 'Facebook' ? 'bg-blue-600' :
                        'bg-green-500'
                      } text-white`}>
                        {testimonials[currentIndex].platform} Review
                      </Badge>
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center space-x-1 mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.1, type: "spring" }}
                        >
                          <Star className="w-8 h-8 fill-[#D4AF37] text-[#D4AF37]" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Quote */}
                    <div className="relative mb-8">
                      <Quote className="absolute -top-4 -left-4 w-12 h-12 text-[#CBB89D]/20" />
                      <blockquote 
                        className="text-xl md:text-2xl text-[#6B4F37] leading-relaxed italic max-w-4xl mx-auto"
                        style={{ fontFamily: 'Playfair Display' }}
                      >
                        {testimonials[currentIndex].text}
                      </blockquote>
                    </div>

                    {/* Customer Info */}
                    <div className="flex items-center justify-center space-x-6">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-[#D4AF37]/30 shadow-lg">
                        <ImageWithFallback
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <h4 
                          className="text-xl text-[#6B4F37] mb-1"
                          style={{ fontFamily: 'Playfair Display' }}
                        >
                          {testimonials[currentIndex].name}
                        </h4>
                        <p 
                          className="text-[#8DA399] mb-1"
                          style={{ fontFamily: 'Inter' }}
                        >
                          {testimonials[currentIndex].role}
                        </p>
                        <div className="flex items-center space-x-3 text-sm text-[#6B4F37]/60">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{testimonials[currentIndex].location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{testimonials[currentIndex].date}</span>
                          </div>
                          {testimonials[currentIndex].verified && (
                            <Badge className="bg-[#D4AF37]/10 text-[#D4AF37]">
                              ✓ Verified
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </CardContent>
            </Card>

            {/* Navigation */}
            <motion.button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full border-2 border-[#8DA399] text-[#8DA399] hover:bg-[#8DA399] hover:text-white shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6 mx-auto" />
            </motion.button>

            <motion.button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full border-2 border-[#8DA399] text-[#8DA399] hover:bg-[#8DA399] hover:text-white shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6 mx-auto" />
            </motion.button>

            {/* Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-[#8DA399] scale-125' 
                      : 'bg-[#CBB89D] hover:bg-[#8DA399]/50'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* All Reviews Grid */}
        {viewMode === 'grid' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index} 
                testimonial={testimonial} 
                index={index}
                featured={index === 0}
              />
            ))}
          </motion.div>
        )}

        {/* Enhanced Analytics Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Rating Breakdown Chart */}
            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border border-[#CBB89D]/30 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center justify-center space-x-3 mb-8">
                  <TrendingUp className="w-6 h-6 text-[#D4AF37]" />
                  <h3 className="text-2xl text-[#6B4F37]" style={{ fontFamily: 'Playfair Display' }}>
                    Rating Analytics
                  </h3>
                  <Badge className="bg-[#8DA399]/10 text-[#8DA399]">Live Data</Badge>
                </div>

                {/* Overall Rating Display */}
                <div className="text-center mb-8 p-6 bg-gradient-to-r from-[#D4AF37]/10 to-[#8DA399]/10 rounded-2xl">
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <motion.div
                      className="text-5xl text-[#6B4F37]"
                      style={{ fontFamily: 'Playfair Display' }}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      4.9
                    </motion.div>
                    <div className="text-left">
                      <div className="flex items-center space-x-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: i * 0.1, type: "spring" }}
                          >
                            <Star className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                          </motion.div>
                        ))}
                      </div>
                      <p className="text-sm text-[#6B4F37]/70" style={{ fontFamily: 'Inter' }}>
                        Based on 500+ reviews
                      </p>
                    </div>
                  </div>
                  <p className="text-[#6B4F37]/80 text-sm" style={{ fontFamily: 'Inter' }}>
                    Excellent • 96% recommend us to friends
                  </p>
                </div>

                {/* Detailed Rating Breakdown */}
                <div className="space-y-4">
                  {ratingBreakdown.map((rating, index) => (
                    <motion.div
                      key={rating.stars}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group hover:bg-[#F5F2ED]/50 p-3 rounded-xl transition-all duration-300"
                    >
                      <div className="flex items-center space-x-4 mb-2">
                        <div className="flex items-center space-x-1 w-16">
                          <span className="text-sm text-[#6B4F37] font-medium">{rating.stars}</span>
                          <Star className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                        </div>
                        <div className="flex-1 relative">
                          <div className="h-3 bg-[#CBB89D]/20 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-[#D4AF37] to-[#8DA399] rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${rating.percentage}%` }}
                              transition={{ delay: index * 0.2, duration: 1, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="text-sm text-[#6B4F37]/80 font-medium w-12 text-right">
                            {rating.percentage}%
                          </span>
                          <Badge variant="secondary" className="text-xs w-12 justify-center">
                            {rating.count}
                          </Badge>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Trust Indicators */}
                <div className="mt-8 pt-6 border-t border-[#CBB89D]/30">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-[#8DA399]/10 rounded-xl">
                      <div className="text-2xl text-[#8DA399] mb-1" style={{ fontFamily: 'Playfair Display' }}>
                        96%
                      </div>
                      <p className="text-xs text-[#6B4F37]/70" style={{ fontFamily: 'Inter' }}>
                        Would Recommend
                      </p>
                    </div>
                    <div className="text-center p-4 bg-[#D4AF37]/10 rounded-xl">
                      <div className="text-2xl text-[#D4AF37] mb-1" style={{ fontFamily: 'Playfair Display' }}>
                        4.2
                      </div>
                      <p className="text-xs text-[#6B4F37]/70" style={{ fontFamily: 'Inter' }}>
                        Avg. Visit Rating
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Review Trends & Insights */}
            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border border-[#CBB89D]/30 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center justify-center space-x-3 mb-8">
                  <Users className="w-6 h-6 text-[#8DA399]" />
                  <h3 className="text-2xl text-[#6B4F37]" style={{ fontFamily: 'Playfair Display' }}>
                    Customer Insights
                  </h3>
                  <Badge className="bg-[#D4AF37]/10 text-[#D4AF37]">Real-time</Badge>
                </div>

                {/* Top Mentioned Items */}
                <div className="mb-8">
                  <h4 className="text-lg text-[#6B4F37] mb-4" style={{ fontFamily: 'Playfair Display' }}>
                    Most Loved Items
                  </h4>
                  <div className="space-y-3">
                    {[
                      { item: 'Honey Latte', mentions: 89, color: '#D4AF37' },
                      { item: 'Vintage Espresso', mentions: 73, color: '#8DA399' },
                      { item: 'Artisan Croissant', mentions: 65, color: '#CBB89D' },
                      { item: 'Cold Brew Delight', mentions: 52, color: '#6B4F37' }
                    ].map((item, index) => (
                      <motion.div
                        key={item.item}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-3 bg-[#F5F2ED]/50 rounded-lg hover:bg-[#F5F2ED] transition-colors group"
                      >
                        <div className="flex items-center space-x-3">
                          <div 
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: item.color }}
                          />
                          <span className="text-[#6B4F37]" style={{ fontFamily: 'Inter' }}>
                            {item.item}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-[#6B4F37]/70">{item.mentions} mentions</span>
                          <Heart className="w-4 h-4 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Review Platforms */}
                <div className="mb-8">
                  <h4 className="text-lg text-[#6B4F37] mb-4" style={{ fontFamily: 'Playfair Display' }}>
                    Review Sources
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { platform: 'Google', count: 245, color: '#4285F4', percentage: 49 },
                      { platform: 'Yelp', count: 132, count: 132, color: '#FF1A1A', percentage: 26 },
                      { platform: 'Facebook', count: 89, color: '#1877F2', percentage: 18 },
                      { platform: 'TripAdvisor', count: 34, color: '#00AA6C', percentage: 7 }
                    ].map((platform, index) => (
                      <motion.div
                        key={platform.platform}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1, type: "spring" }}
                        className="text-center p-4 bg-white/60 rounded-xl border border-[#CBB89D]/20 hover:shadow-lg transition-all duration-300"
                      >
                        <div 
                          className="text-lg mb-1"
                          style={{ fontFamily: 'Playfair Display', color: platform.color }}
                        >
                          {platform.count}
                        </div>
                        <p className="text-xs text-[#6B4F37]/70 mb-1" style={{ fontFamily: 'Inter' }}>
                          {platform.platform}
                        </p>
                        <div className="w-full bg-[#CBB89D]/20 rounded-full h-1">
                          <motion.div
                            className="h-1 rounded-full"
                            style={{ backgroundColor: platform.color }}
                            initial={{ width: 0 }}
                            animate={{ width: `${platform.percentage}%` }}
                            transition={{ delay: index * 0.2, duration: 1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Customer Sentiment */}
                <div className="p-6 bg-gradient-to-r from-[#8DA399]/10 to-[#D4AF37]/10 rounded-2xl">
                  <h4 className="text-lg text-[#6B4F37] mb-4" style={{ fontFamily: 'Playfair Display' }}>
                    Customer Sentiment
                  </h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <motion.div
                        className="text-2xl mb-1"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        😊
                      </motion.div>
                      <div className="text-lg text-[#8DA399]" style={{ fontFamily: 'Playfair Display' }}>
                        92%
                      </div>
                      <p className="text-xs text-[#6B4F37]/70">Positive</p>
                    </div>
                    <div>
                      <div className="text-2xl mb-1">😐</div>
                      <div className="text-lg text-[#CBB89D]" style={{ fontFamily: 'Playfair Display' }}>
                        6%
                      </div>
                      <p className="text-xs text-[#6B4F37]/70">Neutral</p>
                    </div>
                    <div>
                      <div className="text-2xl mb-1">😟</div>
                      <div className="text-lg text-[#6B4F37]/50" style={{ fontFamily: 'Playfair Display' }}>
                        2%
                      </div>
                      <p className="text-xs text-[#6B4F37]/70">Negative</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Premium Stats Dashboard */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl text-[#6B4F37] mb-4" style={{ fontFamily: 'Playfair Display' }}>
              Our Journey in Numbers
            </h3>
            <p className="text-[#6B4F37]/70 max-w-2xl mx-auto" style={{ fontFamily: 'Inter' }}>
              Every cup tells a story, every customer becomes part of our family. 
              Here's what we've achieved together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="relative group"
                onHoverStart={() => setHoveredStat(index)}
                onHoverEnd={() => setHoveredStat(null)}
                whileHover={{ scale: 1.02, y: -5 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                {/* Background Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-[#F5F2ED] rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500" />
                
                <Card className="relative bg-white shadow-xl border-2 border-[#CBB89D]/20 group-hover:border-[#D4AF37]/40 rounded-2xl overflow-hidden transition-all duration-500">
                  {/* Decorative Top Bar */}
                  <div 
                    className="h-2 w-full transition-all duration-500"
                    style={{ 
                      background: `linear-gradient(90deg, ${stat.color}, ${stat.color}80)` 
                    }}
                  />
                  
                  <CardContent className="p-8 text-center">
                    {/* Icon with Animation */}
                    <motion.div
                      className="mb-6 relative"
                      animate={{ 
                        scale: hoveredStat === index ? 1.2 : 1,
                        rotate: hoveredStat === index ? 5 : 0
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Icon Background Circle */}
                      <div 
                        className="w-20 h-20 mx-auto rounded-full flex items-center justify-center transition-all duration-500"
                        style={{ 
                          backgroundColor: hoveredStat === index ? `${stat.color}20` : '#F5F2ED',
                          border: `2px solid ${hoveredStat === index ? stat.color : '#CBB89D40'}`
                        }}
                      >
                        <stat.icon 
                          className="w-10 h-10 transition-colors duration-500" 
                          style={{ 
                            color: hoveredStat === index ? stat.color : '#6B4F37' 
                          }}
                        />
                      </div>
                      
                      {/* Floating Particles Effect */}
                      {hoveredStat === index && (
                        <motion.div
                          className="absolute inset-0"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-2 h-2 rounded-full"
                              style={{ backgroundColor: stat.color }}
                              initial={{ 
                                x: Math.random() * 40 - 20, 
                                y: Math.random() * 40 - 20,
                                scale: 0 
                              }}
                              animate={{ 
                                y: -50,
                                scale: [0, 1, 0],
                                opacity: [0, 1, 0]
                              }}
                              transition={{ 
                                duration: 2, 
                                delay: i * 0.2,
                                repeat: Infinity 
                              }}
                            />
                          ))}
                        </motion.div>
                      )}
                    </motion.div>

                    {/* Number with Counter Animation */}
                    <motion.div 
                      className="text-4xl md:text-5xl mb-3 font-bold"
                      style={{ 
                        fontFamily: 'Playfair Display',
                        color: hoveredStat === index ? stat.color : '#6B4F37'
                      }}
                      animate={{ 
                        scale: hoveredStat === index ? 1.1 : 1,
                        textShadow: hoveredStat === index ? `0 0 20px ${stat.color}40` : '0 0 0px transparent'
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {stat.number}
                    </motion.div>

                    {/* Label */}
                    <motion.p 
                      className="text-[#6B4F37]/80 uppercase tracking-wider"
                      style={{ fontFamily: 'Inter' }}
                      animate={{ 
                        color: hoveredStat === index ? stat.color : '#6B4F3780'
                      }}
                    >
                      {stat.label}
                    </motion.p>

                    {/* Progress Bar */}
                    <div className="mt-6 w-full bg-[#CBB89D]/20 rounded-full h-1 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: stat.color }}
                        initial={{ width: 0 }}
                        animate={{ 
                          width: hoveredStat === index ? '100%' : '70%'
                        }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>

                    {/* Hover Details */}
                    <AnimatePresence>
                      {hoveredStat === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          className="mt-4 p-3 bg-[#F5F2ED]/80 rounded-lg"
                        >
                          <p className="text-xs text-[#6B4F37]/70" style={{ fontFamily: 'Inter' }}>
                            {index === 0 && "Growing every day with loyal customers who love our craft"}
                            {index === 1 && "Consistently rated excellent across all review platforms"}
                            {index === 2 && "Eight wonderful years of brewing happiness"}
                            {index === 3 && "From classic espresso to innovative seasonal blends"}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>

                  {/* Corner Decoration */}
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <Coffee className="w-6 h-6 text-[#6B4F37]" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Achievement Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            {[
              { icon: Award, text: "Best Coffee Shop 2023", color: "#D4AF37" },
              { icon: Heart, text: "Community Favorite", color: "#8DA399" },
              { icon: Star, text: "Top Rated Café", color: "#6B4F37" },
              { icon: Users, text: "People's Choice", color: "#CBB89D" }
            ].map((badge, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-[#CBB89D]/30"
              >
                <badge.icon 
                  className="w-4 h-4" 
                  style={{ color: badge.color }}
                />
                <span className="text-sm text-[#6B4F37]" style={{ fontFamily: 'Inter' }}>
                  {badge.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Customer Photos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl text-[#6B4F37] mb-8" style={{ fontFamily: 'Playfair Display' }}>
            Shared by Our Community
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {customerPhotos.map((photo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="relative rounded-2xl overflow-hidden shadow-lg"
              >
                <ImageWithFallback
                  src={photo.image}
                  alt={photo.caption}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm" style={{ fontFamily: 'Inter' }}>
                    "{photo.caption}"
                  </p>
                  <p className="text-xs opacity-80">- {photo.author}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}