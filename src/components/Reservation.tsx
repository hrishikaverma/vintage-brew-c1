import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from './ui/select';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { CheckCircle, Calendar, Clock, Users } from 'lucide-react';

export function Reservation() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section id="reservation" className="py-20 bg-[#FAF7F2]">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="bg-white shadow-xl border border-[#CBB89D]/30">
            <CardContent className="p-12 text-center">
              <CheckCircle className="w-16 h-16 text-[#8DA399] mx-auto mb-6" />
              <h3 
                className="text-2xl text-[#6B4F37] mb-4"
                style={{ fontFamily: 'Playfair Display' }}
              >
                Reservation Confirmed!
              </h3>
              <p 
                className="text-[#6B4F37]/70 mb-6"
                style={{ fontFamily: 'Inter' }}
              >
                Thank you for choosing Vintage Brew Café. We've sent a confirmation email to your address. We look forward to serving you!
              </p>
              <div className="bg-[#F5F2ED] rounded-lg p-4">
                <p className="text-[#6B4F37] text-sm" style={{ fontFamily: 'Inter' }}>
                  <strong>Reservation Details:</strong><br />
                  {formData.name} • {formData.guests} guests<br />
                  {formData.date} at {formData.time}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="reservation" className="py-20 bg-[#FAF7F2]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 
              className="text-4xl md:text-5xl text-[#6B4F37] mb-4"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Reserve Your Table
            </h2>
            <p 
              className="text-lg text-[#6B4F37]/70 max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter' }}
            >
              Join us for an unforgettable coffee experience. Book your table now and let us take care of the rest.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Reservation Form */}
            <Card className="bg-white shadow-xl border border-[#CBB89D]/30">
              <CardHeader className="pb-6">
                <CardTitle 
                  className="text-2xl text-[#6B4F37]"
                  style={{ fontFamily: 'Playfair Display' }}
                >
                  Make a Reservation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-[#6B4F37]" style={{ fontFamily: 'Inter' }}>
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="mt-1 border-[#CBB89D] focus:border-[#8DA399]"
                        required
                        style={{ fontFamily: 'Inter' }}
                      />
                    </div>
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
                        required
                        style={{ fontFamily: 'Inter' }}
                      />
                    </div>
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

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="date" className="text-[#6B4F37]" style={{ fontFamily: 'Inter' }}>
                        Date
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                        className="mt-1 border-[#CBB89D] focus:border-[#8DA399]"
                        required
                        style={{ fontFamily: 'Inter' }}
                      />
                    </div>
                    <div>
                      <Label htmlFor="time" className="text-[#6B4F37]" style={{ fontFamily: 'Inter' }}>
                        Time
                      </Label>
                      <Select value={formData.time} onValueChange={(value) => handleInputChange('time', value)}>
                        <SelectTrigger className="mt-1 border-[#CBB89D] focus:border-[#8DA399]" style={{ fontFamily: 'Inter' }}>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="08:00">8:00 AM</SelectItem>
                          <SelectItem value="08:30">8:30 AM</SelectItem>
                          <SelectItem value="09:00">9:00 AM</SelectItem>
                          <SelectItem value="09:30">9:30 AM</SelectItem>
                          <SelectItem value="10:00">10:00 AM</SelectItem>
                          <SelectItem value="10:30">10:30 AM</SelectItem>
                          <SelectItem value="11:00">11:00 AM</SelectItem>
                          <SelectItem value="11:30">11:30 AM</SelectItem>
                          <SelectItem value="12:00">12:00 PM</SelectItem>
                          <SelectItem value="12:30">12:30 PM</SelectItem>
                          <SelectItem value="13:00">1:00 PM</SelectItem>
                          <SelectItem value="13:30">1:30 PM</SelectItem>
                          <SelectItem value="14:00">2:00 PM</SelectItem>
                          <SelectItem value="14:30">2:30 PM</SelectItem>
                          <SelectItem value="15:00">3:00 PM</SelectItem>
                          <SelectItem value="15:30">3:30 PM</SelectItem>
                          <SelectItem value="16:00">4:00 PM</SelectItem>
                          <SelectItem value="16:30">4:30 PM</SelectItem>
                          <SelectItem value="17:00">5:00 PM</SelectItem>
                          <SelectItem value="17:30">5:30 PM</SelectItem>
                          <SelectItem value="18:00">6:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="guests" className="text-[#6B4F37]" style={{ fontFamily: 'Inter' }}>
                        Guests
                      </Label>
                      <Select value={formData.guests} onValueChange={(value) => handleInputChange('guests', value)}>
                        <SelectTrigger className="mt-1 border-[#CBB89D] focus:border-[#8DA399]" style={{ fontFamily: 'Inter' }}>
                          <SelectValue placeholder="Number" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Guest</SelectItem>
                          <SelectItem value="2">2 Guests</SelectItem>
                          <SelectItem value="3">3 Guests</SelectItem>
                          <SelectItem value="4">4 Guests</SelectItem>
                          <SelectItem value="5">5 Guests</SelectItem>
                          <SelectItem value="6">6 Guests</SelectItem>
                          <SelectItem value="7">7 Guests</SelectItem>
                          <SelectItem value="8">8 Guests</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#6B4F37] hover:bg-[#6B4F37]/90 text-white py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{ fontFamily: 'Inter' }}
                  >
                    Reserve Table
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Info Section */}
            <div className="space-y-8">
              <Card className="bg-white shadow-lg border border-[#CBB89D]/30">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Calendar className="w-6 h-6 text-[#8DA399]" />
                    <h3 
                      className="text-xl text-[#6B4F37]"
                      style={{ fontFamily: 'Playfair Display' }}
                    >
                      Reservation Policy
                    </h3>
                  </div>
                  <ul className="text-[#6B4F37]/70 space-y-2" style={{ fontFamily: 'Inter' }}>
                    <li>• Reservations are held for 15 minutes past the reserved time</li>
                    <li>• For parties of 6 or more, please call us directly</li>
                    <li>• Cancellations can be made up to 2 hours before your reservation</li>
                    <li>• Same-day reservations subject to availability</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg border border-[#CBB89D]/30">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="w-6 h-6 text-[#8DA399]" />
                    <h3 
                      className="text-xl text-[#6B4F37]"
                      style={{ fontFamily: 'Playfair Display' }}
                    >
                      Opening Hours
                    </h3>
                  </div>
                  <div className="text-[#6B4F37]/70 space-y-1" style={{ fontFamily: 'Inter' }}>
                    <p><strong>Monday - Friday:</strong> 7:00 AM - 9:00 PM</p>
                    <p><strong>Saturday - Sunday:</strong> 8:00 AM - 10:00 PM</p>
                    <p><strong>Holidays:</strong> 8:00 AM - 6:00 PM</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg border border-[#CBB89D]/30">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Users className="w-6 h-6 text-[#8DA399]" />
                    <h3 
                      className="text-xl text-[#6B4F37]"
                      style={{ fontFamily: 'Playfair Display' }}
                    >
                      Group Bookings
                    </h3>
                  </div>
                  <p className="text-[#6B4F37]/70 mb-3" style={{ fontFamily: 'Inter' }}>
                    Planning a special event or meeting? We offer group bookings and catering services.
                  </p>
                  <Button
                    variant="outline"
                    className="border-[#8DA399] text-[#8DA399] hover:bg-[#8DA399] hover:text-white"
                    style={{ fontFamily: 'Inter' }}
                  >
                    Contact for Group Bookings
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}