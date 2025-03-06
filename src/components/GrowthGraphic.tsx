
import React, { useEffect, useRef, useState } from 'react';
import { Target, Lightbulb, Rocket, Zap, Award, ArrowRight, Sparkles } from 'lucide-react';

interface GrowthGraphicProps {
  id?: string;
}

const GrowthGraphic: React.FC<GrowthGraphicProps> = ({ id }) => {
  const graphRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  
  const milestones = [
    {
      id: 1,
      year: 'Strategy',
      title: 'Define Your Vision',
      description: 'We help you articulate a clear vision and develop strategic objectives aligned with your business goals.',
      icon: <Target className="w-10 h-10 text-sky-blue" />
    },
    {
      id: 2,
      year: 'Analysis',
      title: 'Identify Opportunities',
      description: 'Our experts analyze your market position, competitive landscape, and internal capabilities to uncover growth opportunities.',
      icon: <Lightbulb className="w-10 h-10 text-sky-blue" />
    },
    {
      id: 3,
      year: 'Development',
      title: 'Create Solutions',
      description: 'We develop tailored solutions and implementation roadmaps to address your specific challenges and opportunities.',
      icon: <Rocket className="w-10 h-10 text-sky-blue" />
    },
    {
      id: 4,
      year: 'Execution',
      title: 'Implement Changes',
      description: 'Our consultants work alongside your team to execute strategic initiatives and drive meaningful organizational change.',
      icon: <Zap className="w-10 h-10 text-sky-blue" />
    },
    {
      id: 5,
      year: 'Results',
      title: 'Measure Success',
      description: 'We track key performance indicators and make data-driven adjustments to ensure you achieve your desired outcomes.',
      icon: <Award className="w-10 h-10 text-amber-400" />,
      isSpecial: true
    },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      if (!graphRef.current) return;
      
      const graphElement = graphRef.current;
      const graphPosition = graphElement.getBoundingClientRect();
      const isVisible = graphPosition.top < window.innerHeight && graphPosition.bottom > 0;
      
      if (isVisible) {
        setIsAutoPlaying(true);
      } else {
        setIsAutoPlaying(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const rotateSlides = () => {
      setActiveIndex(prev => {
        if (prev >= milestones.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    };
    
    // Set up timer for slide rotation
    // For Results slide (index 4), pause for 3 seconds instead of 2
    const currentDelay = activeIndex === 4 ? 3000 : 2000;
    
    const timer = setTimeout(rotateSlides, currentDelay);
    
    return () => clearTimeout(timer);
  }, [activeIndex, isAutoPlaying, milestones.length]);
  
  const goToNextMilestone = () => {
    setIsAutoPlaying(false); // Pause auto-rotation when manually navigating
    
    if (activeIndex < milestones.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      // Loop back to beginning
      setActiveIndex(0);
    }
    
    // Resume auto-rotation after 5 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };
  
  return (
    <section id={id} className="py-8 md:px-6 px-2 bg-black text-white relative overflow-hidden">
      {/* Celebration animation overlay - only visible during Results slide */}
      <div 
        className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
          activeIndex === 4 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="celebration-container">
          {/* Multiple animated sparkle elements */}
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-4 h-4 rounded-full bg-amber-400"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 1.5}s`,
                animation: `celebrate 1.5s infinite ease-out`,
                opacity: 0
              }}
            />
          ))}
          {/* Gold confetti */}
          {[...Array(30)].map((_, i) => (
            <div 
              key={`confetti-${i}`}
              className="absolute w-2 h-8 bg-amber-400"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-5%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animationDelay: `${Math.random() * 2}s`,
                animation: `confetti 4s infinite linear`,
                opacity: 0.7
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-6">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-impact tracking-wider bg-sky-blue text-white rounded">
            OUR APPROACH
          </span>
          <h2 className="text-3xl md:text-4xl font-impact text-white mb-4">
            Business Growth Journey
          </h2>
          <p className="text-base text-white/70 max-w-3xl mx-auto">
            Our proven methodology helps businesses achieve sustainable growth through a systematic approach.
          </p>
        </div>
        
        <div ref={graphRef} className="relative pt-5 pb-5 flex justify-center">
          <div className="w-full max-w-4xl">
            {/* Milestone Content */}
            <div className="relative overflow-hidden" style={{ minHeight: '350px' }}>
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.id}
                  className={`milestone flex flex-col md:flex-row items-center gap-6 transition-all duration-700 absolute w-full ${
                    activeIndex === index 
                      ? 'opacity-100 translate-x-0 z-10' 
                      : index < activeIndex 
                        ? 'opacity-0 -translate-x-full' 
                        : 'opacity-0 translate-x-full'
                  }`}
                >
                  {/* Icon with Number */}
                  <div className={`w-16 h-16 rounded-full bg-black border-2 ${milestone.isSpecial ? 'border-amber-400' : 'border-sky-blue'} flex items-center justify-center z-10 relative animate-pulse shrink-0`}>
                    <div className="icon-container animate-fade-in">
                      {milestone.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`${milestone.isSpecial ? 'bg-black/70' : 'bg-black/50'} backdrop-blur-sm p-6 md:p-8 rounded-lg border ${milestone.isSpecial ? 'border-amber-400/30' : 'border-white/10'} hover:border-sky-blue/30 transition-all flex-1 relative overflow-hidden`}
                       style={{ minHeight: '250px' }}
                  >
                    {milestone.isSpecial && (
                      <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
                        <div className="absolute top-0 left-0">
                          <Sparkles className="w-8 h-8 text-amber-400 animate-scale-up" />
                        </div>
                        <div className="absolute top-1/4 right-1/4">
                          <Sparkles className="w-6 h-6 text-amber-400 animate-scale-up" style={{ animationDelay: '0.5s' }} />
                        </div>
                        <div className="absolute bottom-1/3 left-1/3">
                          <Sparkles className="w-10 h-10 text-amber-400 animate-scale-up" style={{ animationDelay: '0.8s' }} />
                        </div>
                        <div className="absolute bottom-1/4 right-1/6">
                          <Sparkles className="w-7 h-7 text-amber-400 animate-scale-up" style={{ animationDelay: '1.2s' }} />
                        </div>
                      </div>
                    )}
                    <div className="flex justify-between items-center mb-2">
                      <h4 className={`text-lg font-impact ${milestone.isSpecial ? 'text-amber-400' : 'text-sky-blue'}`}>
                        {milestone.year}
                      </h4>
                      <span className="text-xl font-impact text-white/50">
                        {index + 1}/{milestones.length}
                      </span>
                    </div>
                    <h3 className={`text-xl font-impact ${milestone.isSpecial ? 'text-amber-400' : 'text-white'} mb-3`}>
                      {milestone.title}
                    </h3>
                    <p className="text-white/70 text-sm md:text-base">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Controls */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-4">
                <button 
                  onClick={goToNextMilestone}
                  className="flex items-center justify-center px-3 py-1.5 bg-sky-blue hover:bg-sky-blue/80 text-white rounded-full transition-all"
                >
                  Next Step <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                
                <div className="flex gap-1">
                  {milestones.map((milestone, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveIndex(idx);
                        setIsAutoPlaying(false);
                        setTimeout(() => setIsAutoPlaying(true), 5000);
                      }}
                      className={`w-2 h-2 rounded-full transition-all ${
                        activeIndex === idx 
                          ? (milestone.isSpecial ? 'bg-amber-400 w-6' : 'bg-sky-blue w-6') 
                          : 'bg-white/30'
                      }`}
                      aria-label={`Go to step ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthGraphic;
