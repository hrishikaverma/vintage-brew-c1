import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  MapPin, Phone, Clock, Mail, Facebook, Instagram, Twitter, 
  Navigation, Car, Bus, Wifi, Calendar, Coffee, Users, 
  MessageCircle, Send, Star, Heart, Gift, Sparkles,
  CheckCircle, ExternalLink, Copy, Share2,
  Globe, Camera, PlayCircle, Award, Shield, Zap, Headphones,
  CreditCard, QrCode, Smartphone, Truck, PartyPopper, Building
} from 'lucide-react';

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    primary: "(555) 123-BREW",
    secondary: "(555) 123-2739", 
    description: "Available 7AM-9PM daily",
    action: "tel:+15551232739",
    color: "#8DA399"
  },
  {
    icon: Mail,
    title: "Email Us", 
    primary: "hello@vintagebrewcafe.com",
    secondary: "events@vintagebrewcafe.com",
    description: "Response within 2 hours",
    action: "mailto:hello@vintagebrewcafe.com",
    color: "#D4AF37"
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    primary: "Chat with us now",
    secondary: "AI + Human support",
    description: "Online support 8AM-8PM",
    action: "#chat",
    color: "#CBB89D"
  },
  {
    icon: Navigation,
    title: "Get Directions",
    primary: "123 Vintage Street",
    secondary: "Coffee District, CD 12345",
    description: "2 mins from metro station",
    action: "#directions",
    color: "#6B4F37"
  }
];

const services = [
  { icon: Wifi, title: "Free WiFi", description: "High-speed internet for all" },
  { icon: PartyPopper, title: "Private Events", description: "Perfect for celebrations" },
  { icon: Truck, title: "Coffee Delivery", description: "Within 3 miles radius" },
  { icon: Building, title: "Corporate Catering", description: "Office coffee solutions" },
  { icon: Coffee, title: "Retail Coffee Beans", description: "Take home our blends" },
  { icon: Calendar, title: "Coffee Workshops", description: "Learn brewing techniques" }
];

const socialLinks = [
  { icon: Facebook, name: "Facebook", url: "#", followers: "12K", color: "#1877F2" },
  { icon: Instagram, name: "Instagram", url: "#", followers: "18K", color: "#E4405F" },
  { icon: Twitter, name: "Twitter", url: "#", followers: "8K", color: "#1DA1F2" }
];

const gallery = [
  {
    image: "https://images.unsplash.com/photo-1709380146579-e46f2736650a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwZXh0ZXJpb3IlMjBzdG9yZWZyb250fGVufDF8fHx8MTc1OTQ5ODQxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Our Storefront",
    description: "Welcoming exterior"
  },
  {
    image: "https://images.unsplash.com/photo-1719581228581-35014cbd9b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwaW50ZXJpb3IlMjBzZWF0aW5nJTIwbW9kZXJufGVufDF8fHx8MTc1OTQ5ODQyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Cozy Interior",
    description: "Perfect ambiance"
  },
  {
    image: "https://images.unsplash.com/photo-1758593386024-ed651519742c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwYmFyaXN0YSUyMHdvcmtpbmclMjBjb3VudGVyfGVufDF8fHx8MTc1OTQ5ODQyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Expert Baristas",
    description: "Crafting perfection"
  }
];

export function Contact() {
  const [activeContact, setActiveContact] = useState<number | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setShowContactForm(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const copyAddress = () => {
    navigator.clipboard.writeText("123 Vintage Street, Coffee District, CD 12345");
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#F5F2ED] to-[#FAF7F2]">
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
              <MapPin className="w-8 h-8 text-[#D4AF37]" />
            </motion.div>
            <h2 
              className="text-4xl md:text-6xl text-[#6B4F37]"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Visit Us Today
            </h2>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Heart className="w-8 h-8 text-[#8DA399]" />
            </motion.div>
          </div>
          <p 
            className="text-lg text-[#6B4F37]/70 max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter' }}
          >
            Come and experience the warmth of Vintage Brew Café. We're always excited to welcome 
            new friends to our coffee family. Multiple ways to connect, one amazing experience.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Quick Contact Methods */}
          <motion.div 
            className="lg:col-span-1 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 
              className="text-2xl text-[#6B4F37] mb-6"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Get In Touch
            </h3>
            
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -2 }}
                onHoverStart={() => setActiveContact(index)}
                onHoverEnd={() => setActiveContact(null)}
                className="group cursor-pointer"
              >
                <Card className={`bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${
                  activeContact === index ? 'border-[#D4AF37]' : 'border-[#CBB89D]/30'
                }`}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <motion.div
                        className="p-3 rounded-full"
                        style={{ backgroundColor: `${method.color}20` }}
                        whileHover={{ rotate: 5 }}
                      >
                        <method.icon 
                          className="w-6 h-6"
                          style={{ color: method.color }}
                        />
                      </motion.div>
                      <div className="flex-1">
                        <h4 
                          className="text-lg text-[#6B4F37] mb-1"
                          style={{ fontFamily: 'Playfair Display' }}
                        >
                          {method.title}
                        </h4>
                        <p 
                          className="text-[#6B4F37] mb-1"
                          style={{ fontFamily: 'Inter' }}
                        >
                          {method.primary}
                        </p>
                        <p 
                          className="text-[#6B4F37]/70 text-sm mb-2"
                          style={{ fontFamily: 'Inter' }}
                        >
                          {method.secondary}
                        </p>
                        <p 
                          className="text-xs text-[#8DA399]"
                          style={{ fontFamily: 'Inter' }}
                        >
                          {method.description}
                        </p>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ExternalLink className="w-4 h-4 text-[#8DA399]" />
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Button
                onClick={() => setShowContactForm(true)}
                className="bg-[#8DA399] hover:bg-[#8DA399]/90 text-white"
                style={{ fontFamily: 'Inter' }}
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
              <Button
                onClick={copyAddress}
                variant="outline"
                className="border-[#CBB89D] text-[#6B4F37] hover:bg-[#F5F2ED]"
                style={{ fontFamily: 'Inter' }}
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy Address
              </Button>
            </div>
          </motion.div>

          {/* Interactive Map & Location */}
          <motion.div 
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border border-[#CBB89D]/30 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle 
                    className="text-2xl text-[#6B4F37]"
                    style={{ fontFamily: 'Playfair Display' }}
                  >
                    Find Us Here
                  </CardTitle>
                  <Badge className="bg-[#8DA399] text-white">
                    Open Now
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                {/* Enhanced Map */}
                <div className="relative w-full h-80 bg-[#F5F2ED] rounded-2xl overflow-hidden shadow-inner mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74844127932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1647834901240!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-2xl"
                  />
                  
                  {/* Floating Action Buttons */}
                  <div className="absolute top-4 right-4 space-y-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-[#8DA399] hover:bg-white"
                    >
                      <Navigation className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-[#8DA399] hover:bg-white"
                    >
                      <Share2 className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>

                {/* Location Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-[#8DA399]/10 to-[#D4AF37]/10 rounded-2xl p-6">
                    <h4 
                      className="text-lg text-[#6B4F37] mb-4 flex items-center"
                      style={{ fontFamily: 'Playfair Display' }}
                    >
                      <Car className="w-5 h-5 mr-2 text-[#8DA399]" />
                      Parking & Transport
                    </h4>
                    <div className="space-y-3 text-sm text-[#6B4F37]" style={{ fontFamily: 'Inter' }}>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                        <span>Free street parking available</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                        <span>Paid lot next door ($2/hour)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                        <span>Bus stop 50m away (Lines 15, 23)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                        <span>Metro station 2 blocks north</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#CBB89D]/10 to-[#8DA399]/10 rounded-2xl p-6">
                    <h4 
                      className="text-lg text-[#6B4F37] mb-4 flex items-center"
                      style={{ fontFamily: 'Playfair Display' }}
                    >
                      <Clock className="w-5 h-5 mr-2 text-[#D4AF37]" />
                      Opening Hours
                    </h4>
                    <div className="space-y-2 text-sm text-[#6B4F37]" style={{ fontFamily: 'Inter' }}>
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="text-[#8DA399]">7:00 AM - 9:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday - Sunday</span>
                        <span className="text-[#8DA399]">8:00 AM - 10:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Holidays</span>
                        <span className="text-[#8DA399]">8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="border-t border-[#CBB89D]/30 pt-2 mt-3">
                        <div className="flex items-center space-x-2 text-[#8DA399]">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          <span className="text-xs">Currently Open</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Services & Social Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border border-[#CBB89D]/30">
              <CardHeader>
                <CardTitle 
                  className="text-2xl text-[#6B4F37] flex items-center"
                  style={{ fontFamily: 'Playfair Display' }}
                >
                  <Sparkles className="w-6 h-6 mr-2 text-[#D4AF37]" />
                  Special Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="p-4 bg-gradient-to-br from-[#F5F2ED] to-[#FAF7F2] rounded-xl border border-[#CBB89D]/20 hover:border-[#8DA399]/40 transition-all"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-[#8DA399]/10 rounded-lg">
                          <service.icon className="w-5 h-5 text-[#8DA399]" />
                        </div>
                        <div>
                          <h5 
                            className="text-[#6B4F37] mb-1"
                            style={{ fontFamily: 'Playfair Display' }}
                          >
                            {service.title}
                          </h5>
                          <p 
                            className="text-xs text-[#6B4F37]/70"
                            style={{ fontFamily: 'Inter' }}
                          >
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Media & Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border border-[#CBB89D]/30">
              <CardHeader>
                <CardTitle 
                  className="text-2xl text-[#6B4F37] flex items-center"
                  style={{ fontFamily: 'Playfair Display' }}
                >
                  <Camera className="w-6 h-6 mr-2 text-[#8DA399]" />
                  Follow Our Journey
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Social Links */}
                <div className="flex justify-center space-x-4 mb-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative"
                    >
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 group-hover:shadow-xl"
                        style={{ backgroundColor: social.color }}
                      >
                        <social.icon className="w-6 h-6" />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-black/80 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                          {social.followers} followers
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Gallery Preview */}
                <div className="grid grid-cols-3 gap-2">
                  {gallery.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setCurrentImageIndex(index)}
                      className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                    >
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <PlayCircle className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute bottom-2 left-2 right-2">
                        <p className="text-white text-xs truncate" style={{ fontFamily: 'Inter' }}>
                          {item.title}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Contact Form Modal */}
        <AnimatePresence>
          {showContactForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setShowContactForm(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-2xl"
              >
                <Card className="bg-white shadow-2xl border border-[#CBB89D]/30">
                  {formSubmitted ? (
                    <CardContent className="p-12 text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="mb-6"
                      >
                        <CheckCircle className="w-16 h-16 text-[#8DA399] mx-auto" />
                      </motion.div>
                      <h3 
                        className="text-2xl text-[#6B4F37] mb-4"
                        style={{ fontFamily: 'Playfair Display' }}
                      >
                        Message Sent Successfully!
                      </h3>
                      <p 
                        className="text-[#6B4F37]/70"
                        style={{ fontFamily: 'Inter' }}
                      >
                        Thank you for reaching out! We'll get back to you within 2 hours.
                      </p>
                    </CardContent>
                  ) : (
                    <>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle 
                            className="text-2xl text-[#6B4F37]"
                            style={{ fontFamily: 'Playfair Display' }}
                          >
                            Send us a Message
                          </CardTitle>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setShowContactForm(false)}
                            className="text-[#6B4F37]/60 hover:text-[#6B4F37]"
                          >
                            ✕
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <form onSubmit={handleFormSubmit} className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="name" className="text-[#6B4F37]" style={{ fontFamily: 'Inter' }}>
                                Full Name
                              </Label>
                              <Input
                                id="name"
                                value={formData.name}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                                className="mt-1 border-[#CBB89D] focus:border-[#8DA399]"
                                required
                                style={{ fontFamily: 'Inter' }}
                              />
                            </div>
                            <div>
                              <Label htmlFor="email" className="text-[#6B4F37]" style={{ fontFamily: 'Inter' }}>
                                Email Address
                              </Label>
                              <Input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                className="mt-1 border-[#CBB89D] focus:border-[#8DA399]"
                                required
                                style={{ fontFamily: 'Inter' }}
                              />
                            </div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="phone" className="text-[#6B4F37]" style={{ fontFamily: 'Inter' }}>
                                Phone Number
                              </Label>
                              <Input
                                id="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                className="mt-1 border-[#CBB89D] focus:border-[#8DA399]"
                                style={{ fontFamily: 'Inter' }}
                              />
                            </div>
                            <div>
                              <Label htmlFor="subject" className="text-[#6B4F37]" style={{ fontFamily: 'Inter' }}>
                                Subject
                              </Label>
                              <Input
                                id="subject"
                                value={formData.subject}
                                onChange={(e) => handleInputChange('subject', e.target.value)}
                                className="mt-1 border-[#CBB89D] focus:border-[#8DA399]"
                                required
                                style={{ fontFamily: 'Inter' }}
                              />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="message" className="text-[#6B4F37]" style={{ fontFamily: 'Inter' }}>
                              Message
                            </Label>
                            <Textarea
                              id="message"
                              value={formData.message}
                              onChange={(e) => handleInputChange('message', e.target.value)}
                              className="mt-1 border-[#CBB89D] focus:border-[#8DA399]"
                              rows={4}
                              required
                              style={{ fontFamily: 'Inter' }}
                            />
                          </div>
                          <Button
                            type="submit"
                            className="w-full bg-[#8DA399] hover:bg-[#8DA399]/90 text-white"
                            style={{ fontFamily: 'Inter' }}
                          >
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </Button>
                        </form>
                      </CardContent>
                    </>
                  )}
                </Card>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}