
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Building2, Factory, Code, Globe, ChartPieIcon, Briefcase } from 'lucide-react';

const Industries = () => {
  const industriesList = [
    {
      id: 1,
      title: "Technology",
      description: "Innovative solutions for tech companies navigating digital transformation.",
      icon: <Code className="w-10 h-10 text-sky-blue" />,
      examples: ["Software Development", "Cloud Migration", "AI Integration"]
    },
    {
      id: 2,
      title: "Manufacturing",
      description: "Streamlining operations and optimizing supply chains for manufacturing excellence.",
      icon: <Factory className="w-10 h-10 text-sky-blue" />,
      examples: ["Lean Manufacturing", "Industry 4.0", "Supply Chain Optimization"]
    },
    {
      id: 3,
      title: "Financial Services",
      description: "Strategic guidance for financial institutions in a changing regulatory landscape.",
      icon: <Building2 className="w-10 h-10 text-sky-blue" />,
      examples: ["Risk Management", "Digital Banking", "Regulatory Compliance"]
    },
    {
      id: 4,
      title: "Healthcare",
      description: "Transforming patient care through innovative healthcare consulting solutions.",
      icon: <ChartPieIcon className="w-10 h-10 text-sky-blue" />,
      examples: ["Patient Experience", "Healthcare Technology", "Operational Efficiency"]
    },
    {
      id: 5,
      title: "Retail",
      description: "Evolving retail strategies for modern consumer experiences.",
      icon: <Globe className="w-10 h-10 text-sky-blue" />,
      examples: ["Digital Commerce", "Customer Analytics", "Supply Chain Management"]
    },
    {
      id: 6,
      title: "Energy",
      description: "Sustainable solutions for the energy sector's evolving challenges.",
      icon: <Briefcase className="w-10 h-10 text-sky-blue" />,
      examples: ["Renewable Energy", "Operational Excellence", "Regulatory Strategy"]
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
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Industries</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We bring deep industry knowledge and specialized expertise to every client engagement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesList.map((industry) => (
              <div 
                key={industry.id} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all-fast reveal"
                style={{animationDelay: `${industry.id * 0.1}s`}}
              >
                <div className="flex justify-center mb-4 icon-container">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-medium mb-3 text-center">{industry.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{industry.description}</p>
                <div className="border-t border-gray-200 pt-4 mt-auto">
                  <p className="font-medium text-sm mb-2 text-sky-blue">Expertise includes:</p>
                  <ul className="text-sm text-gray-600">
                    {industry.examples.map((example, index) => (
                      <li key={index} className="mb-1">• {example}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Industries;
