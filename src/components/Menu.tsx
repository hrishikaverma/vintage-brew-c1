import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

const menuItems = {
  coffee: [
    {
      name: "Vintage Espresso",
      price: "$3.50",
      description: "Rich, bold espresso with notes of dark chocolate",
      image: "https://images.unsplash.com/photo-1630040995437-80b01c5dd52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjdXAlMjBsYXR0ZSUyMGFydHxlbnwxfHx8fDE3NTgxMDQ3MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: true
    },
    {
      name: "Honey Latte",
      price: "$4.75",
      description: "Creamy latte sweetened with local wildflower honey",
      image: "https://images.unsplash.com/photo-1630040995437-80b01c5dd52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjdXAlMjBsYXR0ZSUyMGFydHxlbnwxfHx8fDE3NTgxMDQ3MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: false
    },
    {
      name: "Rustic Cappuccino",
      price: "$4.25",
      description: "Traditional cappuccino with a touch of cinnamon",
      image: "https://images.unsplash.com/photo-1630040995437-80b01c5dd52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjdXAlMjBsYXR0ZSUyMGFydHxlbnwxfHx8fDE3NTgxMDQ3MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: false
    },
    {
      name: "Cold Brew Delight",
      price: "$4.50",
      description: "Smooth cold brew with vanilla and oat milk",
      image: "https://images.unsplash.com/photo-1630040995437-80b01c5dd52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjdXAlMjBsYXR0ZSUyMGFydHxlbnwxfHx8fDE3NTgxMDQ3MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: false
    }
  ],
  tea: [
    {
      name: "Earl Grey Supreme",
      price: "$3.25",
      description: "Classic Earl Grey with bergamot and lavender",
      image: "https://images.unsplash.com/photo-1655583961257-24bd2d2adcf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY29mZmVlJTIwYmVhbnN8ZW58MXx8fHwxNzU4MTc3OTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: false
    },
    {
      name: "Chamomile Dreams",
      price: "$3.00",
      description: "Soothing chamomile with honey and lemon",
      image: "https://images.unsplash.com/photo-1655583961257-24bd2d2adcf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY29mZmVlJTIwYmVhbnN8ZW58MXx8fHwxNzU4MTc3OTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: false
    }
  ],
  bakery: [
    {
      name: "Artisan Croissant",
      price: "$2.75",
      description: "Flaky, buttery croissant baked fresh daily",
      image: "https://images.unsplash.com/photo-1733754348873-feeb45df3bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0cnklMjBiYWtlcnklMjBjcm9pc3NhbnR8ZW58MXx8fHwxNzU4MTc3OTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: true
    },
    {
      name: "Blueberry Muffin",
      price: "$3.25",
      description: "Moist muffin packed with fresh blueberries",
      image: "https://images.unsplash.com/photo-1733754348873-feeb45df3bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0cnklMjBiYWtlcnklMjBjcm9pc3NhbnR8ZW58MXx8fHwxNzU4MTc3OTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: false
    },
    {
      name: "Vintage Scone",
      price: "$2.95",
      description: "Traditional scone with clotted cream and jam",
      image: "https://images.unsplash.com/photo-1733754348873-feeb45df3bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0cnklMjBiYWtlcnklMjBjcm9pc3NhbnR8ZW58MXx8fHwxNzU4MTc3OTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: false
    }
  ]
};

export function Menu() {
  return (
    <section id="menu" className="py-20 bg-[#F5F2ED]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl text-[#6B4F37] mb-4"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Our Menu
          </h2>
          <p 
            className="text-lg text-[#6B4F37]/70 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter' }}
          >
            Crafted with passion, served with love. Each item is made from the finest ingredients to create memorable moments.
          </p>
        </div>

        {/* Coffee Section */}
        <div className="mb-16">
          <h3 
            className="text-2xl md:text-3xl text-[#6B4F37] mb-8 text-center"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Coffee
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuItems.coffee.map((item, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#CBB89D]/30">
                <div className="relative">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {item.popular && (
                    <Badge className="absolute top-3 right-3 bg-[#D4AF37] text-white">
                      Popular
                    </Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 
                      className="text-lg text-[#6B4F37]"
                      style={{ fontFamily: 'Playfair Display' }}
                    >
                      {item.name}
                    </h4>
                    <span 
                      className="text-[#8DA399] font-semibold"
                      style={{ fontFamily: 'Inter' }}
                    >
                      {item.price}
                    </span>
                  </div>
                  <p 
                    className="text-[#6B4F37]/70 text-sm"
                    style={{ fontFamily: 'Inter' }}
                  >
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tea Section */}
        <div className="mb-16">
          <h3 
            className="text-2xl md:text-3xl text-[#6B4F37] mb-8 text-center"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Tea
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuItems.tea.map((item, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#CBB89D]/30">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 
                      className="text-lg text-[#6B4F37]"
                      style={{ fontFamily: 'Playfair Display' }}
                    >
                      {item.name}
                    </h4>
                    <span 
                      className="text-[#8DA399] font-semibold"
                      style={{ fontFamily: 'Inter' }}
                    >
                      {item.price}
                    </span>
                  </div>
                  <p 
                    className="text-[#6B4F37]/70 text-sm"
                    style={{ fontFamily: 'Inter' }}
                  >
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bakery Section */}
        <div>
          <h3 
            className="text-2xl md:text-3xl text-[#6B4F37] mb-8 text-center"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Fresh Bakery
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuItems.bakery.map((item, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#CBB89D]/30">
                <div className="relative">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {item.popular && (
                    <Badge className="absolute top-3 right-3 bg-[#D4AF37] text-white">
                      Popular
                    </Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 
                      className="text-lg text-[#6B4F37]"
                      style={{ fontFamily: 'Playfair Display' }}
                    >
                      {item.name}
                    </h4>
                    <span 
                      className="text-[#8DA399] font-semibold"
                      style={{ fontFamily: 'Inter' }}
                    >
                      {item.price}
                    </span>
                  </div>
                  <p 
                    className="text-[#6B4F37]/70 text-sm"
                    style={{ fontFamily: 'Inter' }}
                  >
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}