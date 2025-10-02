import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, Heart } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#6B4F37] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[#FAF7F2] rounded-full flex items-center justify-center">
                <span className="text-[#6B4F37] font-bold text-lg" style={{ fontFamily: 'Playfair Display' }}>V</span>
              </div>
              <h3 className="text-xl" style={{ fontFamily: 'Playfair Display' }}>
                Vintage Brew Café
              </h3>
            </div>
            <p 
              className="text-[#FAF7F2]/80 mb-6 leading-relaxed"
              style={{ fontFamily: 'Inter' }}
            >
              Where every cup tells a story and every visit feels like coming home. Brewing happiness since 2015.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-[#8DA399] rounded-full flex items-center justify-center hover:bg-[#FAF7F2] hover:text-[#6B4F37] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-[#8DA399] rounded-full flex items-center justify-center hover:bg-[#FAF7F2] hover:text-[#6B4F37] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-[#8DA399] rounded-full flex items-center justify-center hover:bg-[#FAF7F2] hover:text-[#6B4F37] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              className="text-lg mb-4 text-[#D4AF37]"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3" style={{ fontFamily: 'Inter' }}>
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-[#FAF7F2]/80 hover:text-[#D4AF37] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('menu')}
                  className="text-[#FAF7F2]/80 hover:text-[#D4AF37] transition-colors"
                >
                  Our Menu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('reservation')}
                  className="text-[#FAF7F2]/80 hover:text-[#D4AF37] transition-colors"
                >
                  Reservations
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-[#FAF7F2]/80 hover:text-[#D4AF37] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-[#FAF7F2]/80 hover:text-[#D4AF37] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 
              className="text-lg mb-4 text-[#D4AF37]"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Contact Info
            </h4>
            <div className="space-y-3" style={{ fontFamily: 'Inter' }}>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#8DA399] mt-0.5 flex-shrink-0" />
                <div className="text-[#FAF7F2]/80">
                  <p>123 Vintage Street</p>
                  <p>Coffee District, CD 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#8DA399] flex-shrink-0" />
                <p className="text-[#FAF7F2]/80">(555) 123-BREW</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#8DA399] flex-shrink-0" />
                <p className="text-[#FAF7F2]/80">hello@vintagebrewcafe.com</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 
              className="text-lg mb-4 text-[#D4AF37]"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Stay Connected
            </h4>
            <p 
              className="text-[#FAF7F2]/80 mb-4"
              style={{ fontFamily: 'Inter' }}
            >
              Subscribe to get updates on daily specials, events, and coffee tips!
            </p>
            
            {isSubscribed ? (
              <div className="bg-[#8DA399] rounded-lg p-4 text-center">
                <p className="text-white" style={{ fontFamily: 'Inter' }}>
                  Thanks for subscribing! ☕
                </p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#FAF7F2] text-[#6B4F37] border-[#CBB89D] placeholder:text-[#6B4F37]/60"
                  required
                  style={{ fontFamily: 'Inter' }}
                />
                <Button
                  type="submit"
                  className="w-full bg-[#8DA399] hover:bg-[#D4AF37] text-white transition-colors"
                  style={{ fontFamily: 'Inter' }}
                >
                  Subscribe
                </Button>
              </form>
            )}

            <div className="mt-6 pt-4 border-t border-[#FAF7F2]/20">
              <p 
                className="text-[#FAF7F2]/60 text-sm"
                style={{ fontFamily: 'Inter' }}
              >
                <strong>Hours:</strong><br />
                Mon-Fri: 7AM-9PM<br />
                Sat-Sun: 8AM-10PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#FAF7F2]/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p 
              className="text-[#FAF7F2]/60 text-sm"
              style={{ fontFamily: 'Inter' }}
            >
              © 2025 Vintage Brew Café. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-[#FAF7F2]/60">
              <span style={{ fontFamily: 'Inter' }}>Made with</span>
              <Heart className="w-4 h-4 text-[#D4AF37] fill-current" />
              <span style={{ fontFamily: 'Inter' }}>for coffee lovers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}