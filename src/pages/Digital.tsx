
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Code, Database, Monitor, CloudCog } from 'lucide-react';

const Digital = () => {
  const digitalServices = [
    {
      id: 1,
      title: "Digital Strategy",
      description: "Develop a comprehensive digital roadmap that aligns with your business objectives and market opportunities.",
      icon: <Monitor className="w-10 h-10 text-sky-blue" />,
      features: ["Digital Maturity Assessment", "Technology Roadmapping", "Digital Investment Planning"]
    },
    {
      id: 2,
      title: "Web & Mobile Development",
      description: "Create engaging, user-centered digital experiences that drive customer engagement and conversion.",
      icon: <Code className="w-10 h-10 text-sky-blue" />,
      features: ["Custom Application Development", "UI/UX Design", "Progressive Web Apps"]
    },
    {
      id: 3,
      title: "Cloud Solutions",
      description: "Harness the power of cloud technology to enhance scalability, security, and operational efficiency.",
      icon: <CloudCog className="w-10 h-10 text-sky-blue" />,
      features: ["Cloud Migration", "Infrastructure Optimization", "Cloud Native Applications"]
    },
    {
      id: 4,
      title: "Data & Analytics",
      description: "Transform your data into actionable insights that drive informed decision-making and business value.",
      icon: <Database className="w-10 h-10 text-sky-blue" />,
      features: ["Business Intelligence", "Predictive Analytics", "Data Visualization"]
    }
  ];

  return (
    <div className="min-h-screen font-rubik tracking-wide">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <section className="container mx-auto px-4 mb-16 reveal">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Digital Transformation</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We help organizations leverage digital technologies to create new business models, enhance customer experiences, and improve operational efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {digitalServices.map((service) => (
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
                  <p className="font-medium text-sm mb-2 text-sky-blue">Services include:</p>
                  <ul className="text-sm text-gray-600">
                    {service.features.map((feature, index) => (
                      <li key={index} className="mb-1">• {feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-gray-50 rounded-lg shadow-md reveal">
            <h3 className="text-xl font-bold mb-4 text-center">Our Digital Transformation Approach</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div className="p-4">
                <div className="w-10 h-10 rounded-full bg-sky-blue/20 flex items-center justify-center mx-auto mb-3">
                  <span className="text-sky-blue font-bold">1</span>
                </div>
                <h4 className="font-bold mb-2">Assess</h4>
                <p className="text-sm text-gray-600">Evaluate current digital capabilities and identify opportunities</p>
              </div>
              <div className="p-4">
                <div className="w-10 h-10 rounded-full bg-sky-blue/20 flex items-center justify-center mx-auto mb-3">
                  <span className="text-sky-blue font-bold">2</span>
                </div>
                <h4 className="font-bold mb-2">Design</h4>
                <p className="text-sm text-gray-600">Create a tailored digital transformation roadmap</p>
              </div>
              <div className="p-4">
                <div className="w-10 h-10 rounded-full bg-sky-blue/20 flex items-center justify-center mx-auto mb-3">
                  <span className="text-sky-blue font-bold">3</span>
                </div>
                <h4 className="font-bold mb-2">Implement</h4>
                <p className="text-sm text-gray-600">Execute digital initiatives with agile methodology</p>
              </div>
              <div className="p-4">
                <div className="w-10 h-10 rounded-full bg-sky-blue/20 flex items-center justify-center mx-auto mb-3">
                  <span className="text-sky-blue font-bold">4</span>
                </div>
                <h4 className="font-bold mb-2">Optimize</h4>
                <p className="text-sm text-gray-600">Continuously improve digital capabilities</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Digital;
