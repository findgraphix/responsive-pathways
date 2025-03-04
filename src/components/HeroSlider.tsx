
import React, { useState, useEffect } from 'react';

const HeroSlider: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: 'Strategic Consulting',
      description: 'Transform your business with our strategic consulting services. We help you navigate complex challenges, identify growth opportunities, and implement effective solutions for sustainable success.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 2,
      title: 'Digital Transformation',
      description: 'Embrace the digital future with our comprehensive transformation services. We integrate cutting-edge technologies to enhance your operations, customer experience, and competitive advantage.',
      image: 'https://images.unsplash.com/photo-1581092921461-7d9dcad713f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 3,
      title: 'Data Analytics',
      description: 'Unlock the power of your data with our advanced analytics solutions. We help you collect, analyze, and visualize critical information to make informed decisions and drive business growth.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 4,
      title: 'Change Management',
      description: 'Navigate organizational change with confidence. Our specialists develop tailored strategies to manage transitions, engage stakeholders, and ensure smooth implementation of new initiatives.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 5,
      title: 'Operational Excellence',
      description: 'Optimize your business processes and maximize efficiency. We identify improvement opportunities, eliminate waste, and implement best practices to enhance your operational performance.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);
  
  const handleDotClick = (index: number) => {
    setActiveSlide(index);
  };
  
  return (
    <section className="relative w-full h-screen overflow-hidden mt-16">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-16 lg:px-24">
            <div className="w-full max-w-md">
              <div 
                className={`transform transition-all duration-1000 delay-300 ${
                  index === activeSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <span className="inline-block px-3 py-1 mb-4 text-xs font-impact tracking-wider bg-sky-blue text-white rounded">
                  OUR SERVICES
                </span>
                <h1 className="text-3xl md:text-5xl font-impact text-white mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-sm md:text-base text-light-gray mb-8 max-w-lg">
                  {slide.description}
                </p>
                <button className="px-6 py-3 bg-white text-black font-impact hover:bg-sky-blue hover:text-white transition-all-fast rounded">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slider Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeSlide ? 'bg-sky-blue w-6' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
