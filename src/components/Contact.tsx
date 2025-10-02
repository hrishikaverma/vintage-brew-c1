import { Card, CardContent } from './ui/card';
import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#F5F2ED]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl text-[#6B4F37] mb-4"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Visit Us
          </h2>
          <p 
            className="text-lg text-[#6B4F37]/70 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter' }}
          >
            Come and experience the warmth of Vintage Brew Café. We're always excited to welcome new friends to our coffee family.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-white shadow-lg border border-[#CBB89D]/30">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-[#8DA399] mt-1 flex-shrink-0" />
                  <div>
                    <h3 
                      className="text-xl text-[#6B4F37] mb-2"
                      style={{ fontFamily: 'Playfair Display' }}
                    >
                      Location
                    </h3>
                    <p 
                      className="text-[#6B4F37]/80"
                      style={{ fontFamily: 'Inter' }}
                    >
                      123 Vintage Street<br />
                      Coffee District, CD 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border border-[#CBB89D]/30">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-[#8DA399] mt-1 flex-shrink-0" />
                  <div>
                    <h3 
                      className="text-xl text-[#6B4F37] mb-2"
                      style={{ fontFamily: 'Playfair Display' }}
                    >
                      Phone & Email
                    </h3>
                    <p 
                      className="text-[#6B4F37]/80 mb-2"
                      style={{ fontFamily: 'Inter' }}
                    >
                      <strong>Phone:</strong> (555) 123-BREW
                    </p>
                    <p 
                      className="text-[#6B4F37]/80"
                      style={{ fontFamily: 'Inter' }}
                    >
                      <strong>Email:</strong> hello@vintagebrewcafe.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border border-[#CBB89D]/30">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-[#8DA399] mt-1 flex-shrink-0" />
                  <div>
                    <h3 
                      className="text-xl text-[#6B4F37] mb-2"
                      style={{ fontFamily: 'Playfair Display' }}
                    >
                      Opening Hours
                    </h3>
                    <div className="space-y-1 text-[#6B4F37]/80" style={{ fontFamily: 'Inter' }}>
                      <p><strong>Monday - Friday:</strong> 7:00 AM - 9:00 PM</p>
                      <p><strong>Saturday - Sunday:</strong> 8:00 AM - 10:00 PM</p>
                      <p><strong>Holidays:</strong> 8:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border border-[#CBB89D]/30">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-[#8DA399] mt-1 flex-shrink-0" />
                  <div>
                    <h3 
                      className="text-xl text-[#6B4F37] mb-2"
                      style={{ fontFamily: 'Playfair Display' }}
                    >
                      Follow Us
                    </h3>
                    <p 
                      className="text-[#6B4F37]/80 mb-4"
                      style={{ fontFamily: 'Inter' }}
                    >
                      Stay connected for daily specials, events, and coffee tips!
                    </p>
                    <div className="flex space-x-4">
                      <a 
                        href="#" 
                        className="w-10 h-10 bg-[#8DA399] rounded-full flex items-center justify-center text-white hover:bg-[#6B4F37] transition-colors"
                        aria-label="Facebook"
                      >
                        <Facebook size={20} />
                      </a>
                      <a 
                        href="#" 
                        className="w-10 h-10 bg-[#8DA399] rounded-full flex items-center justify-center text-white hover:bg-[#6B4F37] transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram size={20} />
                      </a>
                      <a 
                        href="#" 
                        className="w-10 h-10 bg-[#8DA399] rounded-full flex items-center justify-center text-white hover:bg-[#6B4F37] transition-colors"
                        aria-label="Twitter"
                      >
                        <Twitter size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="space-y-6">
            <Card className="bg-white shadow-lg border border-[#CBB89D]/30">
              <CardContent className="p-6">
                <h3 
                  className="text-xl text-[#6B4F37] mb-4"
                  style={{ fontFamily: 'Playfair Display' }}
                >
                  Find Us Here
                </h3>
                
                {/* Google Maps Embed */}
                <div className="w-full h-80 bg-[#F5F2ED] rounded-lg overflow-hidden shadow-inner">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74844127932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1647834901240!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                
                <div className="mt-4 p-4 bg-[#F5F2ED] rounded-lg">
                  <p 
                    className="text-[#6B4F37]/80 text-sm"
                    style={{ fontFamily: 'Inter' }}
                  >
                    <strong>Parking:</strong> Street parking available. Paid lot next door for extended stays.
                  </p>
                  <p 
                    className="text-[#6B4F37]/80 text-sm mt-1"
                    style={{ fontFamily: 'Inter' }}
                  >
                    <strong>Public Transport:</strong> Bus stop 50m away. Metro station 2 blocks north.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border border-[#CBB89D]/30">
              <CardContent className="p-6">
                <h3 
                  className="text-xl text-[#6B4F37] mb-4"
                  style={{ fontFamily: 'Playfair Display' }}
                >
                  Special Services
                </h3>
                <div className="space-y-3 text-[#6B4F37]/80" style={{ fontFamily: 'Inter' }}>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                    <span>Free WiFi for all customers</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                    <span>Private event hosting available</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                    <span>Coffee delivery within 3 miles</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                    <span>Corporate catering services</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                    <span>Coffee beans retail sales</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}