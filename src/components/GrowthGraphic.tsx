
import React, { useEffect, useRef, useState } from 'react';
import { Target, Lightbulb, Rocket, Zap, Award, ArrowRight } from 'lucide-react';

const GrowthGraphic: React.FC = () => {
  const graphRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  
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
      icon: <Award className="w-10 h-10 text-sky-blue" />
    },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      if (!graphRef.current) return;
      
      const graphElement = graphRef.current;
      const graphPosition = graphElement.getBoundingClientRect();
      const isVisible = graphPosition.top < window.innerHeight && graphPosition.bottom > 0;
      
      if (isVisible) {
        // Start the milestone animation sequence
        setActiveIndex(0);
        const interval = setInterval(() => {
          setActiveIndex(prev => {
            if (prev >= milestones.length - 1) {
              clearInterval(interval);
              return prev;
            }
            return prev + 1;
          });
        }, 1000);
        
        return () => clearInterval(interval);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [milestones.length]);
  
  const goToNextMilestone = () => {
    if (activeIndex < milestones.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      // Loop back to beginning
      setActiveIndex(0);
    }
  };
  
  return (
    <section className="py-8 px-6 bg-black text-white">
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
            <div className="relative overflow-hidden" style={{ minHeight: '250px' }}>
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
                  <div className="w-16 h-16 rounded-full bg-black border-2 border-sky-blue flex items-center justify-center z-10 relative animate-pulse shrink-0">
                    <div className="icon-container animate-fade-in">
                      {milestone.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-sky-blue/30 transition-all flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-impact text-sky-blue">
                        {milestone.year}
                      </h4>
                      <span className="text-xl font-impact text-white/50">
                        {index + 1}/{milestones.length}
                      </span>
                    </div>
                    <h3 className="text-xl font-impact text-white mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Controls */}
            <div className="flex justify-center mt-6">
              <div className="flex items-center gap-4">
                <button 
                  onClick={goToNextMilestone}
                  className="flex items-center justify-center px-4 py-2 bg-sky-blue hover:bg-sky-blue/80 text-white rounded-full transition-all"
                >
                  Next Step <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                
                <div className="flex gap-1">
                  {milestones.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        activeIndex === idx ? 'bg-sky-blue w-6' : 'bg-white/30'
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
