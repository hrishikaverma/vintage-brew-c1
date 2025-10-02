import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, Coffee, Users, Award } from 'lucide-react';

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Head Barista & Owner",
    image: "https://images.unsplash.com/photo-1663141214785-4dad16507ea2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJpc3RhJTIwbWFraW5nJTIwY29mZmVlfGVufDF8fHx8MTc1ODEzMDE2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "With 15 years of coffee expertise, Sarah brings passion and precision to every cup."
  },
  {
    name: "Michael Chen",
    role: "Master Roaster",
    image: "https://images.unsplash.com/photo-1663141214785-4dad16507ea2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJpc3RhJTIwbWFraW5nJTIwY29mZmVlfGVufDF8fHx8MTc1ODEzMDE2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Michael's artistry in roasting brings out the unique flavors in each coffee bean."
  },
  {
    name: "Emma Rodriguez",
    role: "Pastry Chef",
    image: "https://images.unsplash.com/photo-1663141214785-4dad16507ea2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJpc3RhJTIwbWFraW5nJTIwY29mZmVlfGVufDF8fHx8MTc1ODEzMDE2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Emma creates our delicious pastries and baked goods fresh every morning."
  }
];

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "Every cup is crafted with love and attention to detail"
  },
  {
    icon: Coffee,
    title: "Quality",
    description: "We source the finest beans and ingredients for exceptional taste"
  },
  {
    icon: Users,
    title: "Community",
    description: "Creating a warm space where connections flourish"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering the best coffee experience"
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-[#FAF7F2]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl text-[#6B4F37] mb-4"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Our Story
          </h2>
          <p 
            className="text-lg text-[#6B4F37]/70 max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter' }}
          >
            Born from a dream to create the perfect gathering place, Vintage Brew Café has been serving exceptional coffee and creating lasting memories since 2015.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
          <div className="space-y-6">
            <h3 
              className="text-3xl text-[#6B4F37]"
              style={{ fontFamily: 'Playfair Display' }}
            >
              A Journey of Flavor & Warmth
            </h3>
            <p 
              className="text-[#6B4F37]/80 leading-relaxed"
              style={{ fontFamily: 'Inter' }}
            >
              What started as a small dream in 2015 has grown into a beloved community gathering place. Our founder, Sarah Johnson, traveled the world studying coffee cultures and brought those experiences back to create something truly special.
            </p>
            <p 
              className="text-[#6B4F37]/80 leading-relaxed"
              style={{ fontFamily: 'Inter' }}
            >
              Every element of Vintage Brew Café was carefully chosen to create an atmosphere of warmth and comfort. From our reclaimed wood furniture to our carefully curated vintage decorations, we've built a space that feels like home.
            </p>
            <p 
              className="text-[#6B4F37]/80 leading-relaxed"
              style={{ fontFamily: 'Inter' }}
            >
              Today, we're proud to serve over 500 happy customers regularly, each one becoming part of our extended coffee family. Our commitment to quality, community, and exceptional service remains at the heart of everything we do.
            </p>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1648125942978-55c17f4dec6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwY29mZmVlJTIwc2hvcCUyMGludGVyaW9yJTIwcnVzdGljfGVufDF8fHx8MTc1ODE3NzkzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Coffee shop interior"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1655583961257-24bd2d2adcf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY29mZmVlJTIwYmVhbnN8ZW58MXx8fHwxNzU4MTc3OTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Coffee beans"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="mt-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1663141214785-4dad16507ea2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJpc3RhJTIwbWFraW5nJTIwY29mZmVlfGVufDF8fHx8MTc1ODEzMDE2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Barista making coffee"
                className="w-full h-32 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 
              className="text-3xl text-[#6B4F37] mb-4"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Our Mission & Values
            </h3>
            <p 
              className="text-[#6B4F37]/70 max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter' }}
            >
              We believe great coffee has the power to bring people together and create meaningful moments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#CBB89D]/30">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-[#8DA399]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-[#8DA399]" />
                    </div>
                    <h4 
                      className="text-xl text-[#6B4F37] mb-3"
                      style={{ fontFamily: 'Playfair Display' }}
                    >
                      {value.title}
                    </h4>
                    <p 
                      className="text-[#6B4F37]/70 text-sm"
                      style={{ fontFamily: 'Inter' }}
                    >
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center mb-12">
            <h3 
              className="text-3xl text-[#6B4F37] mb-4"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Meet Our Team
            </h3>
            <p 
              className="text-[#6B4F37]/70 max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter' }}
            >
              The passionate people behind every perfect cup, dedicated to making your experience exceptional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#CBB89D]/30">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 
                    className="text-xl text-[#6B4F37] mb-1"
                    style={{ fontFamily: 'Playfair Display' }}
                  >
                    {member.name}
                  </h4>
                  <p 
                    className="text-[#8DA399] mb-3"
                    style={{ fontFamily: 'Inter' }}
                  >
                    {member.role}
                  </p>
                  <p 
                    className="text-[#6B4F37]/70 text-sm"
                    style={{ fontFamily: 'Inter' }}
                  >
                    {member.description}
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