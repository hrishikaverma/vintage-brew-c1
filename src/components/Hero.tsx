import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-[#FAF7F2] to-[#F5F2ED]">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl text-[#6B4F37] leading-tight"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Brewed with Love,
              <br />
              <span className="text-[#8DA399]">Served with Warmth</span>
            </h1>
            <p 
              className="text-lg md:text-xl text-[#6B4F37]/80 max-w-lg leading-relaxed"
              style={{ fontFamily: 'Inter' }}
            >
              Step into our cozy corner of comfort where every cup tells a story, and every visit feels like coming home.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => scrollToSection('menu')}
              className="bg-[#6B4F37] hover:bg-[#6B4F37]/90 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ fontFamily: 'Inter' }}
            >
              View Menu
            </Button>
            <Button
              onClick={() => scrollToSection('reservation')}
              variant="outline"
              className="border-2 border-[#8DA399] text-[#8DA399] hover:bg-[#8DA399] hover:text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ fontFamily: 'Inter' }}
            >
              Reserve a Table
            </Button>
          </div>

          {/* Decorative elements */}
          <div className="flex items-center space-x-4 pt-8">
            <div className="w-12 h-0.5 bg-[#D4AF37]"></div>
            <span 
              className="text-[#6B4F37]/60 text-sm"
              style={{ fontFamily: 'Inter' }}
            >
              Established 2015
            </span>
            <div className="w-12 h-0.5 bg-[#D4AF37]"></div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1648125942978-55c17f4dec6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwY29mZmVlJTIwc2hvcCUyMGludGVyaW9yJTIwcnVzdGljfGVufDF8fHx8MTc1ODE3NzkzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Cozy coffee shop interior"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#6B4F37]/20 to-transparent"></div>
          </div>
          
          {/* Floating card */}
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-[#CBB89D]/30">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center">
                <span className="text-white font-bold">★</span>
              </div>
              <div>
                <p className="text-[#6B4F37] font-semibold" style={{ fontFamily: 'Inter' }}>4.9/5 Rating</p>
                <p className="text-[#6B4F37]/60 text-sm" style={{ fontFamily: 'Inter' }}>500+ Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}