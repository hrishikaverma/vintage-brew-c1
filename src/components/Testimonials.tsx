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

        {/* Rating Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <Card className="bg-white/80 backdrop-blur-sm shadow-lg border border-[#CBB89D]/30">
            <CardContent className="p-8">
              <h3 className="text-2xl text-[#6B4F37] text-center mb-6" style={{ fontFamily: 'Playfair Display' }}>
                Rating Breakdown
              </h3>
              <div className="space-y-3">
                {ratingBreakdown.map((rating, index) => (
                  <div key={rating.stars} className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 w-12">
                      <span className="text-sm text-[#6B4F37]">{rating.stars}</span>
                      <Star className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    </div>
                    <div className="flex-1">
                      <Progress 
                        value={rating.percentage} 
                        className="h-2" 
                      />
                    </div>
                    <span className="text-sm text-[#6B4F37]/60 w-16 text-right">
                      {rating.count}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Enhanced Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              onHoverStart={() => setHoveredStat(index)}
              onHoverEnd={() => setHoveredStat(null)}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-white/60 backdrop-blur-sm shadow-lg border border-[#CBB89D]/30 p-6 hover:shadow-xl transition-all duration-300">
                <motion.div
                  animate={{ 
                    color: hoveredStat === index ? stat.color : '#6B4F37',
                    scale: hoveredStat === index ? 1.1 : 1
                  }}
                  className="mb-4 flex justify-center"
                >
                  <stat.icon className="w-8 h-8" />
                </motion.div>
                <motion.div 
                  className="text-3xl md:text-4xl mb-2"
                  style={{ 
                    fontFamily: 'Playfair Display',
                    color: hoveredStat === index ? stat.color : '#6B4F37'
                  }}
                  animate={{ scale: hoveredStat === index ? 1.1 : 1 }}
                >
                  {stat.number}
                </motion.div>
                <p 
                  className="text-[#6B4F37]/70"
                  style={{ fontFamily: 'Inter' }}
                >
                  {stat.label}
                </p>
              </Card>
            </motion.div>
          ))}
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