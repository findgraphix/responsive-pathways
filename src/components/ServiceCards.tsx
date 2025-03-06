
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardsProps {
  id?: string;
}

const ServiceCards: React.FC<ServiceCardsProps> = ({ id }) => {
  const services = [
    {
      id: 1,
      title: 'Business Strategy',
      description: 'Develop winning strategies that align with your vision and drive sustainable growth in competitive markets.',
      icon: '📊',
    },
    {
      id: 2,
      title: 'Digital Innovation',
      description: 'Transform your business with cutting-edge digital solutions that enhance customer experience and operational efficiency.',
      icon: '💡',
    },
    {
      id: 3,
      title: 'Performance Improvement',
      description: 'Optimize your operations and maximize profitability with our proven performance enhancement methodologies.',
      icon: '📈',
    },
  ];
  
  return (
    <section id={id} className="py-20 md:px-6 px-2 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-impact tracking-wider bg-black text-white rounded">
            OUR SERVICES
          </span>
          <h2 className="text-3xl md:text-4xl font-impact text-black mb-6">
            Comprehensive Solutions for Complex Challenges
          </h2>
          <p className="text-base md:text-lg text-black/70 max-w-3xl mx-auto">
            We provide tailored consulting services to help businesses navigate change, drive growth, and achieve exceptional results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-light-gray rounded-lg p-8 transition-all duration-500 hover:shadow-xl hover:translate-y-[-8px]"
            >
              <div className="mb-6 text-4xl">{service.icon}</div>
              <h3 className="text-xl font-impact text-black mb-4 group-hover:text-sky-blue transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-black/70 mb-6">
                {service.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center text-sky-blue font-impact group-hover:translate-x-2 transition-all duration-300"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
