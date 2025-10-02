import { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from './ui/button';

const testimonials = [
  {
    name: "Emily Watson",
    role: "Regular Customer",
    text: "Vintage Brew Café has become my second home. The atmosphere is incredibly cozy, and their honey latte is absolutely divine. The staff always remembers my order and greets me with a warm smile.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1663141214785-4dad16507ea2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJpc3RhJTIwbWFraW5nJTIwY29mZmVlfGVufDF8fHx8MTc1ODEzMDE2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "James Martinez",
    role: "Business Professional",
    text: "I've tried coffee shops all over the city, but nothing compares to Vintage Brew. Their vintage espresso is perfectly balanced, and the rustic ambiance makes it the perfect spot for client meetings.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1663141214785-4dad16507ea2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJpc3RhJTIwbWFraW5nJTIwY29mZmVlfGVufDF8fHx8MTc1ODEzMDE2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Sarah Thompson",
    role: "Local Artist",
    text: "This place has soul. The attention to detail in both the décor and the coffee is exceptional. I've spent countless hours here working on my art, and the creative energy is infectious.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1663141214785-4dad16507ea2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJpc3RhJTIwbWFraW5nJTIwY29mZmVlfGVufDF8fHx8MTc1ODEzMDE2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "David Chen",
    role: "Coffee Enthusiast",
    text: "As someone who takes coffee seriously, I can confidently say that Vintage Brew serves some of the best coffee in town. Their cold brew is smooth, and their pastries are freshly baked perfection.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1663141214785-4dad16507ea2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJpc3RhJTIwbWFraW5nJTIwY29mZmVlfGVufDF8fHx8MTc1ODEzMDE2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-[#FAF7F2]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl text-[#6B4F37] mb-4"
            style={{ fontFamily: 'Playfair Display' }}
          >
            What Our Customers Say
          </h2>
          <p 
            className="text-lg text-[#6B4F37]/70 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter' }}
          >
            Don't just take our word for it. Here's what our wonderful customers have to say about their Vintage Brew experience.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <Card className="bg-white shadow-xl border border-[#CBB89D]/30 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote 
                  className="text-xl md:text-2xl text-[#6B4F37] mb-8 leading-relaxed italic"
                  style={{ fontFamily: 'Playfair Display' }}
                >
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h4 
                      className="text-lg text-[#6B4F37]"
                      style={{ fontFamily: 'Playfair Display' }}
                    >
                      {testimonials[currentIndex].name}
                    </h4>
                    <p 
                      className="text-[#8DA399]"
                      style={{ fontFamily: 'Inter' }}
                    >
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full border-2 border-[#8DA399] text-[#8DA399] hover:bg-[#8DA399] hover:text-white shadow-lg"
          >
            <ChevronLeft size={20} />
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full border-2 border-[#8DA399] text-[#8DA399] hover:bg-[#8DA399] hover:text-white shadow-lg"
          >
            <ChevronRight size={20} />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex 
                    ? 'bg-[#8DA399]' 
                    : 'bg-[#CBB89D]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div 
              className="text-3xl md:text-4xl text-[#6B4F37] mb-2"
              style={{ fontFamily: 'Playfair Display' }}
            >
              500+
            </div>
            <p 
              className="text-[#6B4F37]/70"
              style={{ fontFamily: 'Inter' }}
            >
              Happy Customers
            </p>
          </div>
          <div className="text-center">
            <div 
              className="text-3xl md:text-4xl text-[#6B4F37] mb-2"
              style={{ fontFamily: 'Playfair Display' }}
            >
              4.9
            </div>
            <p 
              className="text-[#6B4F37]/70"
              style={{ fontFamily: 'Inter' }}
            >
              Average Rating
            </p>
          </div>
          <div className="text-center">
            <div 
              className="text-3xl md:text-4xl text-[#6B4F37] mb-2"
              style={{ fontFamily: 'Playfair Display' }}
            >
              8
            </div>
            <p 
              className="text-[#6B4F37]/70"
              style={{ fontFamily: 'Inter' }}
            >
              Years Serving
            </p>
          </div>
          <div className="text-center">
            <div 
              className="text-3xl md:text-4xl text-[#6B4F37] mb-2"
              style={{ fontFamily: 'Playfair Display' }}
            >
              15+
            </div>
            <p 
              className="text-[#6B4F37]/70"
              style={{ fontFamily: 'Inter' }}
            >
              Coffee Varieties
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}