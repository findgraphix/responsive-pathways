
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { LineChart, Presentation, Smartphone, MessageSquare } from 'lucide-react';

const ConsultingServices = () => {
  const services = [
    {
      id: 1,
      title: "Strategy Consulting",
      description: "Develop clear strategies to achieve your business objectives and create sustainable competitive advantage.",
      icon: <LineChart className="w-10 h-10 text-sky-blue" />,
      features: ["Market Analysis", "Strategic Planning", "Competitive Positioning"]
    },
    {
      id: 2,
      title: "Management Consulting",
      description: "Optimize your operations, improve organizational effectiveness, and enhance business performance.",
      icon: <Presentation className="w-10 h-10 text-sky-blue" />,
      features: ["Process Optimization", "Organizational Development", "Performance Management"]
    },
    {
      id: 3,
      title: "Technology Consulting",
      description: "Leverage technology to transform your business and create new value opportunities.",
      icon: <Smartphone className="w-10 h-10 text-sky-blue" />,
      features: ["Digital Transformation", "IT Strategy", "System Implementation"]
    },
    {
      id: 4,
      title: "Communication Consulting",
      description: "Enhance your communication strategies to better engage with stakeholders and build your brand.",
      icon: <MessageSquare className="w-10 h-10 text-sky-blue" />,
      features: ["Stakeholder Engagement", "Crisis Communication", "Brand Messaging"]
    }
  ];

  useEffect(() => {
    // Add reveal animations on scroll
    const revealElements = document.querySelectorAll('.reveal');
    
    const reveal = () => {
      revealElements.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', reveal);
    // Trigger once on load
    reveal();
    
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <div className="min-h-screen font-rubik tracking-wide">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <section className="container mx-auto px-4 mb-16 reveal">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Consulting Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive consulting services tailored to your unique business challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all-fast reveal"
                style={{animationDelay: `${service.id * 0.1}s`}}
              >
                <div className="flex justify-center mb-4 icon-container">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{service.description}</p>
                <div className="border-t border-gray-200 pt-4 mt-auto">
                  <p className="font-medium text-sm mb-2 text-sky-blue">Key services:</p>
                  <ul className="text-sm text-gray-600">
                    {service.features.map((feature, index) => (
                      <li key={index} className="mb-1">• {feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a href="#" className="inline-block px-6 py-3 bg-sky-blue text-white rounded-md text-center font-medium hover:bg-black transition-colors">
              Contact Us For a Consultation
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ConsultingServices;
