import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from './ui/select';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Textarea } from './ui/textarea';
import { Switch } from './ui/switch';
import { CheckCircle, Calendar, Clock, Users, MapPin, Phone, Mail, Star, Heart, Sparkles, Coffee, Utensils, Wifi, Shield, Gift, PartyPopper, Calendar as CalendarIcon, Timer, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const tableOptions = [
  { id: 'window', name: 'Window Seat', capacity: 2, description: 'Perfect for intimate conversations', premium: true },
  { id: 'corner', name: 'Cozy Corner', capacity: 4, description: 'Quiet spot for small groups', premium: false },
  { id: 'center', name: 'Center Table', capacity: 6, description: 'Great for larger gatherings', premium: false },
  { id: 'outdoor', name: 'Outdoor Patio', capacity: 4, description: 'Fresh air and garden views', premium: true },
  { id: 'counter', name: 'Coffee Bar', capacity: 2, description: 'Watch our baristas in action', premium: false },
  { id: 'private', name: 'Private Room', capacity: 8, description: 'Perfect for business meetings', premium: true }
];

const timeSlots = [
  { time: '08:00', label: '8:00 AM', available: true, popular: false },
  { time: '08:30', label: '8:30 AM', available: true, popular: true },
  { time: '09:00', label: '9:00 AM', available: true, popular: true },
  { time: '09:30', label: '9:30 AM', available: false, popular: false },
  { time: '10:00', label: '10:00 AM', available: true, popular: true },
  { time: '10:30', label: '10:30 AM', available: true, popular: false },
  { time: '11:00', label: '11:00 AM', available: true, popular: false },
  { time: '11:30', label: '11:30 AM', available: false, popular: false },
  { time: '12:00', label: '12:00 PM', available: true, popular: true },
  { time: '12:30', label: '12:30 PM', available: true, popular: true },
  { time: '13:00', label: '1:00 PM', available: true, popular: false },
  { time: '13:30', label: '1:30 PM', available: true, popular: false },
  { time: '14:00', label: '2:00 PM', available: true, popular: true },
  { time: '14:30', label: '2:30 PM', available: false, popular: false },
  { time: '15:00', label: '3:00 PM', available: true, popular: true },
  { time: '15:30', label: '3:30 PM', available: true, popular: false },
  { time: '16:00', label: '4:00 PM', available: true, popular: true },
  { time: '16:30', label: '4:30 PM', available: true, popular: false },
  { time: '17:00', label: '5:00 PM', available: true, popular: true },
  { time: '17:30', label: '5:30 PM', available: true, popular: false },
  { time: '18:00', label: '6:00 PM', available: true, popular: true }
];

const specialOffers = [
  { id: 'birthday', name: 'Birthday Celebration', icon: PartyPopper, description: 'Free dessert for the birthday person' },
  { id: 'business', name: 'Business Meeting', icon: Wifi, description: 'Complimentary WiFi and charging stations' },
  { id: 'anniversary', name: 'Anniversary Special', icon: Heart, description: 'Romantic table setting with rose petals' },
  { id: 'study', name: 'Study Session', icon: Coffee, description: 'Quiet environment with free refills' }
];

export function Reservation() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTable, setSelectedTable] = useState<string>('');
  const [selectedOffer, setSelectedOffer] = useState<string>('');
  const [emailUpdates, setEmailUpdates] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    specialRequests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 8000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const today = new Date();
    const maxDate = new Date(today.getTime() + (60 * 24 * 60 * 60 * 1000)); // 60 days from now
    return maxDate.toISOString().split('T')[0];
  };

  if (isSubmitted) {
    return (
      <section id="reservation" className="py-20 bg-gradient-to-b from-[#FAF7F2] to-[#F5F2ED]">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <Card className="bg-white shadow-2xl border border-[#CBB89D]/30 overflow-hidden">
              <div className="bg-gradient-to-r from-[#8DA399] to-[#D4AF37] h-2" />
              <CardContent className="p-12 text-center">
                {/* Success Animation */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="relative mb-8"
                >
                  <div className="w-24 h-24 bg-[#8DA399]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-12 h-12 text-[#8DA399]" />
                  </div>
                  
                  {/* Floating Sparkles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-[#D4AF37] rounded-full"
                      initial={{ scale: 0, x: 0, y: 0 }}
                      animate={{ 
                        scale: [0, 1, 0],
                        x: [0, Math.cos(i * 60 * Math.PI / 180) * 80],
                        y: [0, Math.sin(i * 60 * Math.PI / 180) * 80]
                      }}
                      transition={{ 
                        duration: 2,
                        delay: 0.5 + i * 0.1,
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                      style={{
                        left: '50%',
                        top: '50%',
                        marginLeft: '-4px',
                        marginTop: '-4px'
                      }}
                    />
                  ))}
                </motion.div>

                <motion.h3 
                  className="text-3xl md:text-4xl text-[#6B4F37] mb-4"
                  style={{ fontFamily: 'Playfair Display' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Reservation Confirmed!
                </motion.h3>

                <motion.p 
                  className="text-lg text-[#6B4F37]/70 mb-8 max-w-2xl mx-auto"
                  style={{ fontFamily: 'Inter' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Thank you for choosing Vintage Brew Café! We've sent a confirmation email to your address. 
                  We're excited to serve you and create a memorable experience.
                </motion.p>

                {/* Detailed Confirmation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="grid md:grid-cols-2 gap-6 mb-8"
                >
                  <div className="bg-gradient-to-br from-[#F5F2ED] to-[#FAF7F2] rounded-2xl p-6">
                    <h4 className="text-lg text-[#6B4F37] mb-4" style={{ fontFamily: 'Playfair Display' }}>
                      Reservation Details
                    </h4>
                    <div className="space-y-3 text-sm text-[#6B4F37]" style={{ fontFamily: 'Inter' }}>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-[#8DA399]" />
                        <span><strong>{formData.name}</strong> • {formData.guests} guests</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-[#8DA399]" />
                        <span>{formData.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-[#8DA399]" />
                        <span>{formData.time}</span>
                      </div>
                      {selectedTable && (
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-[#8DA399]" />
                          <span>{tableOptions.find(t => t.id === selectedTable)?.name}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#8DA399]/10 to-[#D4AF37]/10 rounded-2xl p-6">
                    <h4 className="text-lg text-[#6B4F37] mb-4" style={{ fontFamily: 'Playfair Display' }}>
                      What to Expect
                    </h4>
                    <div className="space-y-3 text-sm text-[#6B4F37]" style={{ fontFamily: 'Inter' }}>
                      <div className="flex items-center space-x-2">
                        <Coffee className="w-4 h-4 text-[#D4AF37]" />
                        <span>Freshly brewed artisan coffee</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Heart className="w-4 h-4 text-[#D4AF37]" />
                        <span>Warm, welcoming atmosphere</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-[#D4AF37]" />
                        <span>Exceptional service</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                        <span>Memorable experience</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="border-t border-[#CBB89D]/30 pt-6"
                >
                  <p className="text-sm text-[#6B4F37]/60 mb-4" style={{ fontFamily: 'Inter' }}>
                    Need to make changes? Contact us:
                  </p>
                  <div className="flex justify-center space-x-6 text-sm text-[#6B4F37]">
                    <div className="flex items-center space-x-1">
                      <Phone className="w-4 h-4" />
                      <span>(555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Mail className="w-4 h-4" />
                      <span>reservations@vintagebrew.com</span>
                    </div>
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 mt-8"
                >
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-[#6B4F37] hover:bg-[#6B4F37]/90 text-white"
                    style={{ fontFamily: 'Inter' }}
                  >
                    Make Another Reservation
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#8DA399] text-[#8DA399] hover:bg-[#8DA399] hover:text-white"
                    style={{ fontFamily: 'Inter' }}
                  >
                    Add to Calendar
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="reservation" className="py-20 bg-gradient-to-b from-[#FAF7F2] to-[#F5F2ED]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Utensils className="w-8 h-8 text-[#D4AF37]" />
              </motion.div>
              <h2 
                className="text-4xl md:text-6xl text-[#6B4F37]"
                style={{ fontFamily: 'Playfair Display' }}
              >
                Reserve Your Experience
              </h2>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Coffee className="w-8 h-8 text-[#8DA399]" />
              </motion.div>
            </div>
            <p 
              className="text-lg text-[#6B4F37]/70 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Inter' }}
            >
              Join us for an unforgettable coffee experience. Choose your perfect spot, 
              select your preferred time, and let us create magical moments for you.
            </p>

            {/* Progress Indicator */}
            <div className="flex justify-center space-x-4 mt-8">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <motion.div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      currentStep >= step 
                        ? 'bg-[#8DA399] border-[#8DA399] text-white' 
                        : 'bg-white border-[#CBB89D] text-[#6B4F37]'
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {step}
                  </motion.div>
                  {step < 3 && (
                    <div className={`w-12 h-1 mx-2 transition-colors duration-300 ${
                      currentStep > step ? 'bg-[#8DA399]' : 'bg-[#CBB89D]/30'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-center space-x-8 mt-2 text-sm text-[#6B4F37]/60" style={{ fontFamily: 'Inter' }}>
              <span>Details</span>
              <span>Table & Time</span>
              <span>Preferences</span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Reservation Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border border-[#CBB89D]/30 overflow-hidden">
                <div className="bg-gradient-to-r from-[#8DA399] to-[#D4AF37] h-1" />
                <CardHeader className="pb-6">
                  <div className="flex items-center justify-between">
                    <CardTitle 
                      className="text-2xl text-[#6B4F37]"
                      style={{ fontFamily: 'Playfair Display' }}
                    >
                      {currentStep === 1 && "Your Information"}
                      {currentStep === 2 && "Choose Your Spot"}
                      {currentStep === 3 && "Final Details"}
                    </CardTitle>
                    <Badge className="bg-[#D4AF37]/10 text-[#D4AF37]">
                      Step {currentStep} of 3
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    <AnimatePresence mode="wait">
                      {/* Step 1: Basic Information */}
                      {currentStep === 1 && (
                        <motion.div
                          key="step1"
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-6"
                        >
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="name" className="text-[#6B4F37] flex items-center space-x-2" style={{ fontFamily: 'Inter' }}>
                                <Users className="w-4 h-4" />
                                <span>Full Name</span>
                              </Label>
                              <Input
                                id="name"
                                type="text"
                                value={formData.name}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                                className="mt-2 border-[#CBB89D] focus:border-[#8DA399] focus:ring-2 focus:ring-[#8DA399]/20"
                                placeholder="Enter your full name"
                                required
                                style={{ fontFamily: 'Inter' }}
                              />
                            </div>
                            <div>
                              <Label htmlFor="phone" className="text-[#6B4F37] flex items-center space-x-2" style={{ fontFamily: 'Inter' }}>
                                <Phone className="w-4 h-4" />
                                <span>Phone Number</span>
                              </Label>
                              <Input
                                id="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                className="mt-2 border-[#CBB89D] focus:border-[#8DA399] focus:ring-2 focus:ring-[#8DA399]/20"
                                placeholder="(555) 123-4567"
                                required
                                style={{ fontFamily: 'Inter' }}
                              />
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="email" className="text-[#6B4F37] flex items-center space-x-2" style={{ fontFamily: 'Inter' }}>
                              <Mail className="w-4 h-4" />
                              <span>Email Address</span>
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              className="mt-2 border-[#CBB89D] focus:border-[#8DA399] focus:ring-2 focus:ring-[#8DA399]/20"
                              placeholder="your.email@example.com"
                              required
                              style={{ fontFamily: 'Inter' }}
                            />
                          </div>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="date" className="text-[#6B4F37] flex items-center space-x-2" style={{ fontFamily: 'Inter' }}>
                                <CalendarIcon className="w-4 h-4" />
                                <span>Preferred Date</span>
                              </Label>
                              <Input
                                id="date"
                                type="date"
                                value={formData.date}
                                onChange={(e) => handleInputChange('date', e.target.value)}
                                className="mt-2 border-[#CBB89D] focus:border-[#8DA399] focus:ring-2 focus:ring-[#8DA399]/20"
                                min={getMinDate()}
                                max={getMaxDate()}
                                required
                                style={{ fontFamily: 'Inter' }}
                              />
                            </div>
                            <div>
                              <Label htmlFor="guests" className="text-[#6B4F37] flex items-center space-x-2" style={{ fontFamily: 'Inter' }}>
                                <Users className="w-4 h-4" />
                                <span>Number of Guests</span>
                              </Label>
                              <Select value={formData.guests} onValueChange={(value) => handleInputChange('guests', value)}>
                                <SelectTrigger className="mt-2 border-[#CBB89D] focus:border-[#8DA399]" style={{ fontFamily: 'Inter' }}>
                                  <SelectValue placeholder="Select guests" />
                                </SelectTrigger>
                                <SelectContent>
                                  {[1,2,3,4,5,6,7,8].map(num => (
                                    <SelectItem key={num} value={num.toString()}>
                                      {num} {num === 1 ? 'Guest' : 'Guests'}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* Step 2: Table Selection & Time */}
                      {currentStep === 2 && (
                        <motion.div
                          key="step2"
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-8"
                        >
                          {/* Table Selection */}
                          <div>
                            <h4 className="text-lg text-[#6B4F37] mb-4" style={{ fontFamily: 'Playfair Display' }}>
                              Choose Your Perfect Spot
                            </h4>
                            <div className="grid md:grid-cols-2 gap-4">
                              {tableOptions.map((table) => (
                                <motion.div
                                  key={table.id}
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  onClick={() => setSelectedTable(table.id)}
                                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                                    selectedTable === table.id
                                      ? 'border-[#8DA399] bg-[#8DA399]/10 shadow-lg'
                                      : 'border-[#CBB89D]/30 bg-white hover:border-[#8DA399]/50 hover:bg-[#F5F2ED]'
                                  }`}
                                >
                                  <div className="flex items-center justify-between mb-2">
                                    <h5 className="text-[#6B4F37]" style={{ fontFamily: 'Playfair Display' }}>
                                      {table.name}
                                    </h5>
                                    <div className="flex items-center space-x-2">
                                      {table.premium && <Badge className="bg-[#D4AF37] text-white text-xs">Premium</Badge>}
                                      <span className="text-sm text-[#6B4F37]/60">Up to {table.capacity}</span>
                                    </div>
                                  </div>
                                  <p className="text-sm text-[#6B4F37]/70" style={{ fontFamily: 'Inter' }}>
                                    {table.description}
                                  </p>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Time Selection */}
                          <div>
                            <h4 className="text-lg text-[#6B4F37] mb-4" style={{ fontFamily: 'Playfair Display' }}>
                              Select Your Time
                            </h4>
                            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                              {timeSlots.map((slot) => (
                                <motion.button
                                  key={slot.time}
                                  type="button"
                                  whileHover={{ scale: slot.available ? 1.05 : 1 }}
                                  whileTap={{ scale: slot.available ? 0.95 : 1 }}
                                  onClick={() => slot.available && handleInputChange('time', slot.time)}
                                  disabled={!slot.available}
                                  className={`p-3 rounded-lg text-sm transition-all duration-300 relative ${
                                    formData.time === slot.time
                                      ? 'bg-[#8DA399] text-white shadow-lg'
                                      : slot.available
                                      ? 'bg-white border border-[#CBB89D]/30 text-[#6B4F37] hover:border-[#8DA399] hover:bg-[#F5F2ED]'
                                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                  }`}
                                  style={{ fontFamily: 'Inter' }}
                                >
                                  {slot.label}
                                  {slot.popular && slot.available && (
                                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#D4AF37] rounded-full" />
                                  )}
                                </motion.button>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* Step 3: Preferences & Special Requests */}
                      {currentStep === 3 && (
                        <motion.div
                          key="step3"
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-6"
                        >
                          {/* Special Offers */}
                          <div>
                            <h4 className="text-lg text-[#6B4F37] mb-4" style={{ fontFamily: 'Playfair Display' }}>
                              Special Occasion?
                            </h4>
                            <div className="grid md:grid-cols-2 gap-4">
                              {specialOffers.map((offer) => (
                                <motion.div
                                  key={offer.id}
                                  whileHover={{ scale: 1.02 }}
                                  onClick={() => setSelectedOffer(selectedOffer === offer.id ? '' : offer.id)}
                                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                                    selectedOffer === offer.id
                                      ? 'border-[#D4AF37] bg-[#D4AF37]/10'
                                      : 'border-[#CBB89D]/30 bg-white hover:border-[#D4AF37]/50'
                                  }`}
                                >
                                  <div className="flex items-center space-x-3 mb-2">
                                    <offer.icon className="w-5 h-5 text-[#D4AF37]" />
                                    <h5 className="text-[#6B4F37]" style={{ fontFamily: 'Playfair Display' }}>
                                      {offer.name}
                                    </h5>
                                  </div>
                                  <p className="text-sm text-[#6B4F37]/70" style={{ fontFamily: 'Inter' }}>
                                    {offer.description}
                                  </p>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Special Requests */}
                          <div>
                            <Label htmlFor="requests" className="text-[#6B4F37] flex items-center space-x-2" style={{ fontFamily: 'Inter' }}>
                              <Sparkles className="w-4 h-4" />
                              <span>Special Requests or Dietary Requirements</span>
                            </Label>
                            <Textarea
                              id="requests"
                              value={formData.specialRequests}
                              onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                              className="mt-2 border-[#CBB89D] focus:border-[#8DA399] focus:ring-2 focus:ring-[#8DA399]/20"
                              placeholder="Let us know about any allergies, special occasions, or preferences..."
                              rows={4}
                              style={{ fontFamily: 'Inter' }}
                            />
                          </div>

                          {/* Email Updates */}
                          <div className="flex items-center space-x-3 p-4 bg-[#F5F2ED] rounded-xl">
                            <Switch
                              checked={emailUpdates}
                              onCheckedChange={setEmailUpdates}
                              className="data-[state=checked]:bg-[#8DA399]"
                            />
                            <div>
                              <Label className="text-[#6B4F37]" style={{ fontFamily: 'Inter' }}>
                                Email Updates
                              </Label>
                              <p className="text-sm text-[#6B4F37]/70" style={{ fontFamily: 'Inter' }}>
                                Receive updates about your reservation and special offers
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-8 pt-6 border-t border-[#CBB89D]/30">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                        disabled={currentStep === 1}
                        className="border-[#CBB89D] text-[#6B4F37] hover:bg-[#F5F2ED] disabled:opacity-50"
                        style={{ fontFamily: 'Inter' }}
                      >
                        Previous
                      </Button>
                      
                      {currentStep < 3 ? (
                        <Button
                          type="button"
                          onClick={nextStep}
                          className="bg-[#8DA399] hover:bg-[#8DA399]/90 text-white"
                          style={{ fontFamily: 'Inter' }}
                        >
                          Next Step
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          className="bg-[#6B4F37] hover:bg-[#6B4F37]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                          style={{ fontFamily: 'Inter' }}
                        >
                          <CalendarIcon className="w-4 h-4 mr-2" />
                          Confirm Reservation
                        </Button>
                      )}
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Info Sidebar */}
            <div className="space-y-6">
              {/* Venue Preview */}
              <Card className="bg-white/90 backdrop-blur-sm shadow-xl border border-[#CBB89D]/30 overflow-hidden">
                <div className="relative h-48">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1729824155651-28388f2a31d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwY2FmZSUyMGludGVyaW9yJTIwc2VhdGluZyUyMGFyZWF8ZW58MXx8fHwxNzU5NDk2MTk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Vintage Brew Café Interior"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg" style={{ fontFamily: 'Playfair Display' }}>
                      Vintage Brew Café
                    </h3>
                    <p className="text-sm opacity-90" style={{ fontFamily: 'Inter' }}>
                      Cozy • Elegant • Memorable
                    </p>
                  </div>
                </div>
              </Card>

              {/* Quick Info Cards */}
              <div className="space-y-4">
                <Card className="bg-white/90 backdrop-blur-sm shadow-lg border border-[#CBB89D]/30">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <Clock className="w-6 h-6 text-[#8DA399]" />
                      <h3 className="text-lg text-[#6B4F37]" style={{ fontFamily: 'Playfair Display' }}>
                        Opening Hours
                      </h3>
                    </div>
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
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/90 backdrop-blur-sm shadow-lg border border-[#CBB89D]/30">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <Shield className="w-6 h-6 text-[#8DA399]" />
                      <h3 className="text-lg text-[#6B4F37]" style={{ fontFamily: 'Playfair Display' }}>
                        Reservation Policy
                      </h3>
                    </div>
                    <ul className="text-sm text-[#6B4F37]/70 space-y-2" style={{ fontFamily: 'Inter' }}>
                      <li className="flex items-start space-x-2">
                        <Timer className="w-3 h-3 mt-1 text-[#8DA399]" />
                        <span>15-minute grace period</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Users className="w-3 h-3 mt-1 text-[#8DA399]" />
                        <span>Groups 6+ call directly</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CalendarIcon className="w-3 h-3 mt-1 text-[#8DA399]" />
                        <span>Cancel 2 hours prior</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Star className="w-3 h-3 mt-1 text-[#8DA399]" />
                        <span>Same-day availability</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-[#8DA399]/10 to-[#D4AF37]/10 shadow-lg border border-[#CBB89D]/30">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <Award className="w-6 h-6 text-[#D4AF37]" />
                      <h3 className="text-lg text-[#6B4F37]" style={{ fontFamily: 'Playfair Display' }}>
                        Why Choose Us?
                      </h3>
                    </div>
                    <div className="space-y-3 text-sm text-[#6B4F37]" style={{ fontFamily: 'Inter' }}>
                      <div className="flex items-center space-x-2">
                        <Coffee className="w-4 h-4 text-[#D4AF37]" />
                        <span>Award-winning artisan coffee</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Heart className="w-4 h-4 text-[#D4AF37]" />
                        <span>Warm, welcoming atmosphere</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Wifi className="w-4 h-4 text-[#D4AF37]" />
                        <span>Free high-speed WiFi</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-[#D4AF37]" />
                        <span>Prime downtown location</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#6B4F37] text-white shadow-xl">
                  <CardContent className="p-6 text-center">
                    <Gift className="w-8 h-8 mx-auto mb-3 text-[#D4AF37]" />
                    <h3 className="text-lg mb-2" style={{ fontFamily: 'Playfair Display' }}>
                      Special Offer
                    </h3>
                    <p className="text-sm opacity-90 mb-4" style={{ fontFamily: 'Inter' }}>
                      First-time visitors get 10% off their order with reservation
                    </p>
                    <Badge className="bg-[#D4AF37] text-[#6B4F37]">
                      Use code: WELCOME10
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}