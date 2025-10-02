import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 bg-[#FAF7F2] shadow-md z-50 border-b border-[#CBB89D]/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#6B4F37] rounded-full flex items-center justify-center">
              <span className="text-[#FAF7F2] font-bold text-lg" style={{ fontFamily: 'Playfair Display' }}>V</span>
            </div>
            <h1 className="text-xl text-[#6B4F37]" style={{ fontFamily: 'Playfair Display' }}>
              Vintage Brew Café
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-[#6B4F37] hover:text-[#8DA399] transition-colors font-medium"
              style={{ fontFamily: 'Inter' }}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-[#6B4F37] hover:text-[#8DA399] transition-colors font-medium"
              style={{ fontFamily: 'Inter' }}
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('reservation')}
              className="text-[#6B4F37] hover:text-[#8DA399] transition-colors font-medium"
              style={{ fontFamily: 'Inter' }}
            >
              Reservation
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-[#6B4F37] hover:text-[#8DA399] transition-colors font-medium"
              style={{ fontFamily: 'Inter' }}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-[#6B4F37] hover:text-[#8DA399] transition-colors font-medium"
              style={{ fontFamily: 'Inter' }}
            >
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-[#6B4F37]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#CBB89D]/30">
            <nav className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-[#6B4F37] hover:text-[#8DA399] transition-colors font-medium text-left py-2"
                style={{ fontFamily: 'Inter' }}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-[#6B4F37] hover:text-[#8DA399] transition-colors font-medium text-left py-2"
                style={{ fontFamily: 'Inter' }}
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('reservation')}
                className="text-[#6B4F37] hover:text-[#8DA399] transition-colors font-medium text-left py-2"
                style={{ fontFamily: 'Inter' }}
              >
                Reservation
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-[#6B4F37] hover:text-[#8DA399] transition-colors font-medium text-left py-2"
                style={{ fontFamily: 'Inter' }}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-[#6B4F37] hover:text-[#8DA399] transition-colors font-medium text-left py-2"
                style={{ fontFamily: 'Inter' }}
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}