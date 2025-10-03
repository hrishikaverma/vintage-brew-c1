import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, Coffee, Users, Award, Clock, MapPin, Star, Sparkles, Target, Globe, TreePine, Handshake, ChefHat, Leaf, Calendar, TrendingUp, BookOpen, Camera, Play, Quote } from 'lucide-react';

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Head Barista & Owner",
    image: "https://images.unsplash.com/photo-1697603899581-095022d5edd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwZm91bmRlciUyMHdvbWFuJTIwYmFyaXN0YXxlbnwxfHx8fDE3NTk0OTc3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "With 15 years of coffee expertise, Sarah brings passion and precision to every cup.",
    specialties: ["Latte Art", "Coffee Cupping", "Team Leadership"],
    achievement: "World Barista Championship Finalist 2019",
    quote: "Every cup tells a story, and I'm here to help you write yours."
  },
  {
    name: "Michael Chen",
    role: "Master Roaster",
    image: "https://images.unsplash.com/photo-1619478692272-9bc07b034430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjByb2FzdGVyJTIwbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1OTQ5NzcxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Michael's artistry in roasting brings out the unique flavors in each coffee bean.",
    specialties: ["Single Origin", "Blend Creation", "Quality Control"],
    achievement: "Certified Q Grader & Roast Master",
    quote: "Roasting is like conducting an orchestra - timing and harmony create magic."
  },
  {
    name: "Emma Rodriguez",
    role: "Pastry Chef",
    image: "https://images.unsplash.com/photo-1653552900145-5679d740bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0cnklMjBjaGVmJTIwd29tYW4lMjBiYWtpbmd8ZW58MXx8fHwxNzU5NDk3NzE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Emma creates our delicious pastries and baked goods fresh every morning.",
    specialties: ["Artisan Breads", "Seasonal Desserts", "Gluten-Free Options"],
    achievement: "Le Cordon Bleu Graduate & Award Winner",
    quote: "Baking is my love language - each pastry is made with care and joy."
  }
];

const timeline = [
  { year: '2015', event: 'Founded by Sarah Johnson', description: 'A dream begins with a single coffee bean' },
  { year: '2016', event: 'First Award Win', description: 'Best New Coffee Shop in the city' },
  { year: '2017', event: 'Expanded Seating', description: 'Added our cozy outdoor patio' },
  { year: '2018', event: 'Master Roaster Joins', description: 'Michael Chen brings his expertise' },
  { year: '2019', event: 'Sustainability Focus', description: 'Became fully eco-friendly certified' },
  { year: '2020', event: 'Community Support', description: 'Served free coffee to frontline workers' },
  { year: '2021', event: 'Pastry Program', description: 'Emma Rodriguez creates our bakery' },
  { year: '2022', event: 'Digital Innovation', description: 'Launched mobile ordering system' },
  { year: '2023', event: 'Coffee Education', description: 'Started barista training workshops' },
  { year: '2024', event: 'Excellence Recognition', description: '4.9-star rating across all platforms' }
];

const achievements = [
  { icon: Award, title: "Best Coffee Shop 2023", source: "City Magazine" },
  { icon: Star, title: "4.9/5 Average Rating", source: "500+ Reviews" },
  { icon: TreePine, title: "Eco-Certified Business", source: "Green Business Alliance" },
  { icon: Heart, title: "Community Choice Award", source: "Local Business Awards" }
];

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "Every cup is crafted with love and attention to detail",
    color: "#D4AF37",
    detail: "Our passion drives us to perfect every aspect of the coffee experience, from bean selection to the final sip."
  },
  {
    icon: Coffee,
    title: "Quality",
    description: "We source the finest beans and ingredients for exceptional taste",
    color: "#8DA399",
    detail: "Direct trade relationships with farmers ensure premium beans while supporting sustainable farming practices."
  },
  {
    icon: Users,
    title: "Community",
    description: "Creating a warm space where connections flourish",
    color: "#CBB89D",
    detail: "We're more than a coffee shop - we're a gathering place where friendships bloom and memories are made."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering the best coffee experience",
    color: "#6B4F37",
    detail: "Continuous improvement and attention to detail ensure every visit exceeds your expectations."
  }
];

export function About() {
  const [selectedTeamMember, setSelectedTeamMember] = useState<number | null>(null);
  const [activeTimelineItem, setActiveTimelineItem] = useState<number | null>(null);
  const [showFullStory, setShowFullStory] = useState(false);

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#FAF7F2] to-[#F5F2ED]">
      <div className="container mx-auto px-4">
        {/* Enhanced Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <BookOpen className="w-8 h-8 text-[#D4AF37]" />
            </motion.div>
            <h2 
              className="text-4xl md:text-6xl text-[#6B4F37]"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Our Story
            </h2>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="w-8 h-8 text-[#8DA399]" />
            </motion.div>
          </div>
          <p 
            className="text-lg text-[#6B4F37]/70 max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter' }}
          >
            Born from a dream to create the perfect gathering place, Vintage Brew Café has been 
            serving exceptional coffee and creating lasting memories since 2015. Every cup tells a story, 
            and we're honored to be part of yours.
          </p>
        </motion.div>

        {/* Hero Story Section */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 mb-24 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="space-y-8">
            <div className="flex items-center space-x-3 mb-6">
              <Target className="w-6 h-6 text-[#D4AF37]" />
              <h3 
                className="text-3xl text-[#6B4F37]"
                style={{ fontFamily: 'Playfair Display' }}
              >
                A Journey of Flavor & Warmth
              </h3>
            </div>

            <div className="space-y-6">
              <p 
                className="text-[#6B4F37]/80 leading-relaxed"
                style={{ fontFamily: 'Inter' }}
              >
                What started as a small dream in 2015 has grown into a beloved community gathering place. 
                Our founder, Sarah Johnson, traveled the world studying coffee cultures from the bustling 
                cafés of Vienna to the serene tea houses of Kyoto, bringing those experiences back to create 
                something truly special.
              </p>
              
              <AnimatePresence>
                {showFullStory && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-6"
                  >
                    <p 
                      className="text-[#6B4F37]/80 leading-relaxed"
                      style={{ fontFamily: 'Inter' }}
                    >
                      Every element of Vintage Brew Café was carefully chosen to create an atmosphere of 
                      warmth and comfort. From our reclaimed wood furniture to our carefully curated vintage 
                      decorations, we've built a space that feels like home. Our commitment to sustainability 
                      runs deep - from compostable cups to solar panels, we're dedicated to protecting the 
                      environment for future generations.
                    </p>
                    <p 
                      className="text-[#6B4F37]/80 leading-relaxed"
                      style={{ fontFamily: 'Inter' }}
                    >
                      Today, we're proud to serve over 500 happy customers regularly, each one becoming part 
                      of our extended coffee family. Our commitment to quality, community, and exceptional 
                      service remains at the heart of everything we do. We're not just serving coffee - 
                      we're crafting experiences, fostering connections, and creating moments that matter.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <Button
                onClick={() => setShowFullStory(!showFullStory)}
                variant="outline"
                className="border-[#8DA399] text-[#8DA399] hover:bg-[#8DA399] hover:text-white"
                style={{ fontFamily: 'Inter' }}
              >
                {showFullStory ? 'Read Less' : 'Read Full Story'}
                <BookOpen className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { number: '9+', label: 'Years Serving', icon: Calendar },
                { number: '500K+', label: 'Cups Brewed', icon: Coffee },
                { number: '15+', label: 'Awards Won', icon: Award },
                { number: '4.9', label: 'Star Rating', icon: Star }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-lg border border-[#CBB89D]/30"
                >
                  <stat.icon className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
                  <div className="text-2xl text-[#6B4F37]" style={{ fontFamily: 'Playfair Display' }}>
                    {stat.number}
                  </div>
                  <p className="text-xs text-[#6B4F37]/70" style={{ fontFamily: 'Inter' }}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Enhanced Image Gallery */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-2xl shadow-xl"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1755183813510-ece4dd2efc24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY29mZmVlJTIwc2hvcCUyMGFtYmlhbmNlJTIwYXRtb3NwaGVyZXxlbnwxfHx8fDE3NTk0OTc3MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Coffee shop interior"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-sm font-medium">Cozy Interior</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-2xl shadow-xl"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1567613745630-541570172a15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHJvYXN0aW5nJTIwcHJvY2Vzc3xlbnwxfHx8fDE3NTk0OTc3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Coffee beans"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-sm font-medium">Fresh Roasted</p>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-4 relative overflow-hidden rounded-2xl shadow-xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1647366475732-0685ae720824?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY29mZmVlJTIwc2hvcCUyMGhpc3RvcnklMjB0aW1lbGluZXxlbnwxfHx8fDE3NTk0OTc3MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Coffee crafting process"
                className="w-full h-32 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white">
                <p className="text-sm font-medium">Artisan Craftsmanship</p>
              </div>
            </motion.div>

            {/* Floating Achievement Badge */}
            <motion.div
              className="absolute -top-4 -right-4 bg-[#D4AF37] text-white p-3 rounded-full shadow-xl z-10"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Award className="w-6 h-6" />
            </motion.div>
          </div>
        </motion.div>

        {/* Interactive Timeline */}
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Clock className="w-6 h-6 text-[#D4AF37]" />
              <h3 
                className="text-3xl text-[#6B4F37]"
                style={{ fontFamily: 'Playfair Display' }}
              >
                Our Journey Through Time
              </h3>
            </div>
            <p 
              className="text-[#6B4F37]/70 max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter' }}
            >
              From humble beginnings to award-winning excellence - discover the milestones that shaped our story.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#D4AF37] via-[#8DA399] to-[#6B4F37] transform md:-translate-x-1/2" />
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} relative`}
                  onHoverStart={() => setActiveTimelineItem(index)}
                  onHoverEnd={() => setActiveTimelineItem(null)}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 z-10 ${
                      activeTimelineItem === index ? 'bg-[#D4AF37]' : 'bg-[#8DA399]'
                    }`}
                    animate={{ 
                      scale: activeTimelineItem === index ? 1.3 : 1,
                      boxShadow: activeTimelineItem === index ? '0 0 20px rgba(212, 175, 55, 0.5)' : '0 2px 10px rgba(0,0,0,0.1)'
                    }}
                  />

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} md:w-5/12`}>
                    <Card className={`bg-white/90 backdrop-blur-sm shadow-xl border-2 transition-all duration-300 ${
                      activeTimelineItem === index ? 'border-[#D4AF37] shadow-2xl' : 'border-[#CBB89D]/30'
                    }`}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <Badge className="bg-[#8DA399] text-white px-3 py-1">
                            {item.year}
                          </Badge>
                          <TrendingUp className="w-5 h-5 text-[#D4AF37]" />
                        </div>
                        <h4 
                          className="text-lg text-[#6B4F37] mb-2"
                          style={{ fontFamily: 'Playfair Display' }}
                        >
                          {item.event}
                        </h4>
                        <p 
                          className="text-[#6B4F37]/70 text-sm"
                          style={{ fontFamily: 'Inter' }}
                        >
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Mission & Values */}
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Target className="w-6 h-6 text-[#8DA399]" />
              <h3 
                className="text-3xl text-[#6B4F37]"
                style={{ fontFamily: 'Playfair Display' }}
              >
                Our Mission & Values
              </h3>
            </div>
            <p 
              className="text-[#6B4F37]/70 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Inter' }}
            >
              We believe great coffee has the power to bring people together and create meaningful moments. 
              Our values guide every decision we make and every cup we serve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group"
                >
                  <Card className="bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#CBB89D]/30 group-hover:border-[#D4AF37]/50 overflow-hidden">
                    {/* Decorative Top Bar */}
                    <div 
                      className="h-2 w-full transition-all duration-500"
                      style={{ backgroundColor: value.color }}
                    />
                    
                    <CardContent className="p-8 text-center relative">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                        <div className="w-full h-full bg-gradient-to-br from-transparent via-current to-transparent" />
                      </div>

                      {/* Icon */}
                      <motion.div
                        className="relative mb-6"
                        whileHover={{ rotate: 5 }}
                      >
                        <div 
                          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow"
                          style={{ backgroundColor: `${value.color}20`, border: `2px solid ${value.color}40` }}
                        >
                          <IconComponent 
                            className="w-10 h-10 transition-colors"
                            style={{ color: value.color }}
                          />
                        </div>
                      </motion.div>

                      {/* Content */}
                      <h4 
                        className="text-xl text-[#6B4F37] mb-4"
                        style={{ fontFamily: 'Playfair Display' }}
                      >
                        {value.title}
                      </h4>
                      <p 
                        className="text-[#6B4F37]/70 text-sm mb-4 leading-relaxed"
                        style={{ fontFamily: 'Inter' }}
                      >
                        {value.description}
                      </p>
                      
                      {/* Detailed Description on Hover */}
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        whileHover={{ opacity: 1, height: 'auto' }}
                        className="text-xs text-[#6B4F37]/60 italic border-t border-[#CBB89D]/20 pt-3"
                        style={{ fontFamily: 'Inter' }}
                      >
                        {value.detail}
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Interactive Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Users className="w-6 h-6 text-[#6B4F37]" />
              <h3 
                className="text-3xl text-[#6B4F37]"
                style={{ fontFamily: 'Playfair Display' }}
              >
                Meet Our Passionate Team
              </h3>
            </div>
            <p 
              className="text-[#6B4F37]/70 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Inter' }}
            >
              The passionate people behind every perfect cup, dedicated to making your experience exceptional. 
              Each team member brings unique skills and a shared love for coffee excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => setSelectedTeamMember(selectedTeamMember === index ? null : index)}
                className="cursor-pointer group"
              >
                <Card className="bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#CBB89D]/30 group-hover:border-[#8DA399]/50 overflow-hidden">
                  {/* Hero Image */}
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Floating Quote Icon */}
                    <motion.div
                      className="absolute top-4 right-4 bg-[#D4AF37] p-2 rounded-full text-white shadow-lg"
                      whileHover={{ rotate: 15 }}
                    >
                      <Quote className="w-4 h-4" />
                    </motion.div>

                    {/* Role Badge */}
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-[#8DA399]/90 text-white">
                        {member.role}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h4 
                      className="text-xl text-[#6B4F37] mb-3"
                      style={{ fontFamily: 'Playfair Display' }}
                    >
                      {member.name}
                    </h4>
                    
                    <p 
                      className="text-[#6B4F37]/70 text-sm mb-4 leading-relaxed"
                      style={{ fontFamily: 'Inter' }}
                    >
                      {member.description}
                    </p>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.specialties.map((specialty, idx) => (
                        <Badge 
                          key={idx}
                          variant="outline" 
                          className="text-xs border-[#CBB89D] text-[#6B4F37]"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>

                    {/* Achievement */}
                    <div className="flex items-center space-x-2 text-xs text-[#8DA399] mb-4">
                      <Award className="w-3 h-3" />
                      <span style={{ fontFamily: 'Inter' }}>{member.achievement}</span>
                    </div>

                    {/* Expandable Quote */}
                    <AnimatePresence>
                      {selectedTeamMember === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="border-t border-[#CBB89D]/30 pt-4 mt-4"
                        >
                          <blockquote 
                            className="text-sm text-[#6B4F37]/80 italic text-center"
                            style={{ fontFamily: 'Inter' }}
                          >
                            "{member.quote}"
                          </blockquote>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="text-center mt-4">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-[#8DA399] hover:text-[#6B4F37] hover:bg-[#F5F2ED]"
                      >
                        {selectedTeamMember === index ? 'Show Less' : 'Learn More'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="bg-gradient-to-r from-[#8DA399]/10 to-[#D4AF37]/10 rounded-3xl p-8"
          >
            <div className="text-center mb-8">
              <h4 
                className="text-2xl text-[#6B4F37] mb-4"
                style={{ fontFamily: 'Playfair Display' }}
              >
                Awards & Recognition
              </h4>
              <p 
                className="text-[#6B4F37]/70"
                style={{ fontFamily: 'Inter' }}
              >
                We're honored to be recognized by our community and industry peers
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg"
                >
                  <achievement.icon className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
                  <h5 
                    className="text-[#6B4F37] mb-2"
                    style={{ fontFamily: 'Playfair Display' }}
                  >
                    {achievement.title}
                  </h5>
                  <p 
                    className="text-xs text-[#6B4F37]/70"
                    style={{ fontFamily: 'Inter' }}
                  >
                    {achievement.source}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}