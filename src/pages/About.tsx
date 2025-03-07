
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Users, Award, Globe, Landmark } from 'lucide-react';

const About = () => {
  const stats = [
    { id: 1, value: '25+', label: 'Years of Experience', icon: <Landmark className="w-6 h-6 text-sky-blue" /> },
    { id: 2, value: '500+', label: 'Clients Worldwide', icon: <Globe className="w-6 h-6 text-sky-blue" /> },
    { id: 3, value: '150+', label: 'Expert Consultants', icon: <Users className="w-6 h-6 text-sky-blue" /> },
    { id: 4, value: '98%', label: 'Client Satisfaction', icon: <Award className="w-6 h-6 text-sky-blue" /> },
  ];

  const leadershipTeam = [
    {
      id: 1,
      name: 'Jennifer Morrison',
      role: 'CEO & Founder',
      bio: 'With over 20 years in management consulting, Jennifer founded our firm with a vision to create impactful business transformations.',
      image: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
      id: 2,
      name: 'Michael Chang',
      role: 'Managing Director',
      bio: 'Michael brings extensive experience in strategy development and operational excellence across multiple industries.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      role: 'Head of Digital',
      bio: 'Sarah leads our digital practice, helping clients navigate the complex landscape of digital transformation.',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
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
        {/* Hero Section */}
        <section className="bg-black text-white py-16 mb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 reveal">About Our Firm</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto reveal">
              We are a global consulting firm dedicated to helping organizations solve their most complex business challenges.
            </p>
          </div>
        </section>
        
        {/* Our Mission */}
        <section className="container mx-auto px-4 mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 reveal">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-impact tracking-wider bg-sky-blue text-white rounded">
                OUR MISSION
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Driving Business Excellence</h2>
              <p className="text-lg text-gray-600">
                Our mission is to partner with ambitious organizations to drive meaningful change, unlock new opportunities, and create sustainable value through innovative strategies and operational excellence.
              </p>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="bg-light-gray py-16 mb-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.id} className="bg-white p-6 rounded-lg shadow-md text-center reveal">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-black mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Leadership Team */}
        <section className="container mx-auto px-4 mb-16">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the experienced leaders who guide our firm and inspire our consultants.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipTeam.map((leader, index) => (
              <div 
                key={leader.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all-fast reveal"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                  <p className="text-sky-blue font-medium mb-3">{leader.role}</p>
                  <p className="text-gray-600 text-sm">{leader.bio}</p>
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
