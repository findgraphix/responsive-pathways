
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Users, Medal, Goal, Clock, GraduationCap, Award } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Jessica Chen",
      title: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Michael Rodriguez",
      title: "Chief Operating Officer",
      image: "https://images.unsplash.com/photo-1556157382-97eda2f9e946?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Sarah Johnson",
      title: "Chief Financial Officer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "David Kim",
      title: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    }
  ];

  const timelineEvents = [
    {
      year: "2005",
      title: "Company Founded",
      description: "Established with a vision to transform business consulting"
    },
    {
      year: "2010",
      title: "International Expansion",
      description: "Opened first international offices in Europe and Asia"
    },
    {
      year: "2015",
      title: "Digital Transformation",
      description: "Launched specialized digital services practice"
    },
    {
      year: "2020",
      title: "Industry Recognition",
      description: "Named among top consulting firms globally"
    },
    {
      year: "Today",
      title: "Continued Innovation",
      description: "Leading the way in sustainable and AI-driven consulting solutions"
    }
  ];

  return (
    <div className="min-h-screen font-rubik tracking-wide">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-16 reveal">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Company</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to transform businesses through innovative consulting and digital solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md text-center reveal">
              <div className="flex justify-center mb-4 icon-container">
                <Medal className="w-12 h-12 text-sky-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To empower organizations with strategic insights and innovative solutions that drive sustainable growth.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center reveal" style={{animationDelay: "0.2s"}}>
              <div className="flex justify-center mb-4 icon-container">
                <Goal className="w-12 h-12 text-sky-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading global partner for businesses navigating complex challenges and opportunities.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center reveal" style={{animationDelay: "0.4s"}}>
              <div className="flex justify-center mb-4 icon-container">
                <Award className="w-12 h-12 text-sky-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Values</h3>
              <p className="text-gray-600">
                Excellence, integrity, innovation, collaboration, and client focus guide everything we do.
              </p>
            </div>
          </div>
        </section>
        
        {/* Timeline Section */}
        <section className="bg-gray-50 py-16 mb-16 reveal">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
            
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-sky-blue/20"></div>
              
              {timelineEvents.map((event, index) => (
                <div 
                  key={index} 
                  className={`relative mb-12 reveal ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="md:w-1/2 mb-6 md:mb-0 md:px-8">
                      <span className="text-sky-blue font-bold text-3xl block mb-2">{event.year}</span>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                    
                    <div className="md:w-1/2 relative">
                      <div className="absolute left-1/2 md:left-auto md:right-1/2 transform -translate-x-1/2 md:translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-sky-blue border-4 border-white shadow-md"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="container mx-auto px-4 mb-16 reveal">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the experts who guide our company's vision and strategy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden text-center reveal"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-48 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sky-blue">{member.title}</p>
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

export default About;
