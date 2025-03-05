
import React, { useState, useRef, useEffect, TouchEvent } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const InsightsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  const insights = [
    {
      id: 1,
      title: 'The Future of Digital Transformation in Post-Pandemic World',
      category: 'Digital',
      date: 'June 15, 2023',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 2,
      title: 'ESG Strategy: Building Sustainable Business Models',
      category: 'Sustainability',
      date: 'May 28, 2023',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 3,
      title: 'Supply Chain Resilience in an Uncertain Global Economy',
      category: 'Operations',
      date: 'April 12, 2023',
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 4,
      title: 'AI and Machine Learning: Transforming Data Analysis',
      category: 'Technology',
      date: 'March 5, 2023',
      image: 'https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
  ];

  // Minimum swipe distance threshold
  const minSwipeDistance = 50;
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    }
    
    if (isRightSwipe) {
      prevSlide();
    }
  };
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === insights.length - 2 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? insights.length - 2 : prev - 1));
  };
  
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentSlide * (100/insights.length)}%)`;
    }
  }, [currentSlide, insights.length]);
  
  // Make the slider show only two cards at a time on mobile
  const getItemWidth = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? 100 : 50; // 100% on mobile, 50% on desktop
    }
    return 50;
  };
  
  const [itemWidth, setItemWidth] = useState(getItemWidth());
  
  useEffect(() => {
    const handleResize = () => {
      setItemWidth(getItemWidth());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <span className="inline-block px-3 py-1 mb-4 text-xs font-impact tracking-wider bg-black text-white rounded">
              INSIGHTS
            </span>
            <h2 className="text-3xl md:text-4xl font-impact text-black mb-4 md:mb-0">
              Our Latest Insights
            </h2>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-light-gray hover:bg-sky-blue text-black hover:text-white transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-light-gray hover:bg-sky-blue text-black hover:text-white transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-out"
          >
            {insights.map((insight) => (
              <div 
                key={insight.id} 
                className="px-4"
                style={{ flex: `0 0 ${itemWidth}%` }}
              >
                <div className="bg-light-gray rounded-lg overflow-hidden group shadow-md">
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={insight.image}
                      alt={insight.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <span className="inline-block px-2 py-1 mb-2 text-xs font-impact tracking-wider bg-sky-blue text-white rounded">
                        {insight.category}
                      </span>
                      <p className="text-sm text-white/70">{insight.date}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-impact text-black mb-4 transition-colors group-hover:text-sky-blue">
                      {insight.title}
                    </h3>
                    <button className="text-sky-blue font-impact hover:text-black transition-colors flex items-center">
                      Read more <ChevronRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Slide indicator dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: insights.length - 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-sky-blue w-6' : 'bg-black/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-block px-6 py-3 bg-white text-black font-impact border-2 border-black hover:bg-black hover:text-white transition-all-fast rounded"
          >
            See All Insights
          </a>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
