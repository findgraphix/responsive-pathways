
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const InsightsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  
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
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (insights.length - 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? insights.length - 2 : prev - 1));
  };
  
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);
  
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
        
        <div className="relative overflow-hidden">
          <div 
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-out"
            style={{ width: `${insights.length * 100}%` }}
          >
            {insights.map((insight) => (
              <div 
                key={insight.id} 
                className="w-full md:w-1/2 px-4"
                style={{ flex: `0 0 ${100 / insights.length}%` }}
              >
                <div className="bg-light-gray rounded-lg overflow-hidden group">
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
