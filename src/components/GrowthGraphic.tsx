
import React, { useEffect, useRef } from 'react';

const GrowthGraphic: React.FC = () => {
  const graphRef = useRef<HTMLDivElement>(null);
  
  const milestones = [
    {
      id: 1,
      year: 'Strategy',
      title: 'Define Your Vision',
      description: 'We help you articulate a clear vision and develop strategic objectives aligned with your business goals.',
    },
    {
      id: 2,
      year: 'Analysis',
      title: 'Identify Opportunities',
      description: 'Our experts analyze your market position, competitive landscape, and internal capabilities to uncover growth opportunities.',
    },
    {
      id: 3,
      year: 'Development',
      title: 'Create Solutions',
      description: 'We develop tailored solutions and implementation roadmaps to address your specific challenges and opportunities.',
    },
    {
      id: 4,
      year: 'Execution',
      title: 'Implement Changes',
      description: 'Our consultants work alongside your team to execute strategic initiatives and drive meaningful organizational change.',
    },
    {
      id: 5,
      year: 'Results',
      title: 'Measure Success',
      description: 'We track key performance indicators and make data-driven adjustments to ensure you achieve your desired outcomes.',
    },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      if (!graphRef.current) return;
      
      const graphElement = graphRef.current;
      const graphPosition = graphElement.getBoundingClientRect();
      const isVisible = graphPosition.top < window.innerHeight && graphPosition.bottom > 0;
      
      if (isVisible) {
        const milestoneElements = graphElement.querySelectorAll('.milestone');
        milestoneElements.forEach((element, index) => {
          setTimeout(() => {
            element.classList.add('active');
          }, index * 300);
        });
        
        const lineElement = graphElement.querySelector('.timeline-line-inner');
        if (lineElement) {
          lineElement.classList.add('active');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-impact tracking-wider bg-sky-blue text-white rounded">
            OUR APPROACH
          </span>
          <h2 className="text-3xl md:text-4xl font-impact text-white mb-6">
            Business Growth Journey
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto">
            Our proven methodology helps businesses achieve sustainable growth through a systematic approach to strategy and execution.
          </p>
        </div>
        
        <div ref={graphRef} className="relative pt-10 pb-20">
          {/* Timeline Line */}
          <div className="timeline-line absolute top-32 left-1/2 transform -translate-x-1/2 w-1 h-[calc(100%-8rem)] bg-white/20">
            <div className="timeline-line-inner w-1 h-0 bg-sky-blue transition-all duration-[2000ms] origin-top"></div>
          </div>
          
          {milestones.map((milestone, index) => (
            <div
              key={milestone.id}
              className={`milestone relative flex flex-col md:flex-row items-center md:items-start gap-8 mb-16 last:mb-0 opacity-0 transition-all duration-700 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Point */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 md:relative md:left-0 md:transform-none">
                <div className="w-10 h-10 rounded-full bg-black border-2 border-sky-blue flex items-center justify-center z-10 relative">
                  <span className="w-3 h-3 rounded-full bg-sky-blue"></span>
                </div>
              </div>
              
              {/* Content */}
              <div className={`w-full md:w-[calc(50%-2.5rem)] text-center md:text-left ${
                index % 2 === 0 ? 'md:text-right' : ''
              }`}>
                <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                  <h4 className="text-lg font-impact text-sky-blue mb-2">
                    {milestone.year}
                  </h4>
                  <h3 className="text-xl md:text-2xl font-impact text-white mb-4">
                    {milestone.title}
                  </h3>
                  <p className="text-white/70">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthGraphic;
