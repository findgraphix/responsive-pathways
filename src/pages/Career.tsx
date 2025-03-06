
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Briefcase, GraduationCap, UserPlus, Award, Heart, Clock } from 'lucide-react';

const Career = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Consultant",
      department: "Strategy Consulting",
      location: "New York, NY",
      type: "Full-time"
    },
    {
      id: 2,
      title: "Data Scientist",
      department: "Analytics",
      location: "San Francisco, CA",
      type: "Full-time"
    },
    {
      id: 3,
      title: "UX/UI Designer",
      department: "Digital Experience",
      location: "Chicago, IL",
      type: "Full-time"
    },
    {
      id: 4,
      title: "Business Analyst",
      department: "Management Consulting",
      location: "Boston, MA",
      type: "Full-time"
    },
    {
      id: 5,
      title: "Marketing Specialist",
      department: "Marketing & Communications",
      location: "Remote",
      type: "Full-time"
    },
    {
      id: 6,
      title: "Technology Consultant",
      department: "IT Advisory",
      location: "Austin, TX",
      type: "Full-time"
    }
  ];

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Industry-leading salary and performance bonuses",
      icon: <Award className="w-10 h-10 text-sky-blue" />
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive medical, dental, and vision insurance",
      icon: <Heart className="w-10 h-10 text-sky-blue" />
    },
    {
      title: "Professional Development",
      description: "Continuous learning opportunities and career advancement",
      icon: <GraduationCap className="w-10 h-10 text-sky-blue" />
    },
    {
      title: "Work-Life Balance",
      description: "Flexible work arrangements and generous PTO",
      icon: <Clock className="w-10 h-10 text-sky-blue" />
    }
  ];

  return (
    <div className="min-h-screen font-rubik tracking-wide">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-16 reveal">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build your career with a company that values innovation, growth, and impact.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 md:p-12 shadow-md reveal">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-bold mb-4">Why Join Us?</h2>
                <p className="text-gray-600 mb-6">
                  We're a team of passionate professionals dedicated to solving our clients' most complex challenges. 
                  At our company, you'll have the opportunity to work on impactful projects, develop your skills, 
                  and grow your career alongside industry leaders.
                </p>
                <a 
                  href="#openings" 
                  className="inline-block px-6 py-3 bg-sky-blue text-white rounded-md text-center font-medium hover:bg-black transition-colors"
                >
                  View Open Positions
                </a>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Team collaborating" 
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="bg-white py-16 mb-16 reveal">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Benefits</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-lg shadow-md text-center reveal"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="flex justify-center mb-4 icon-container">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Job Openings Section */}
        <section id="openings" className="container mx-auto px-4 mb-16 reveal">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Current Openings</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our available positions and find your perfect fit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobOpenings.map((job) => (
              <div 
                key={job.id} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all-fast reveal"
                style={{animationDelay: `${job.id * 0.1}s`}}
              >
                <div className="flex items-start">
                  <div className="p-2 bg-sky-blue/10 rounded-md mr-4">
                    <Briefcase className="w-6 h-6 text-sky-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                    <p className="text-gray-600 mb-4">{job.department}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                        {job.location}
                      </span>
                      <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                        {job.type}
                      </span>
                    </div>
                    <a 
                      href="#" 
                      className="text-sky-blue hover:text-black transition-colors font-medium text-sm"
                    >
                      View Details →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10 reveal">
            <p className="text-gray-600 mb-6">
              Don't see a position that matches your skills? We're always looking for talented individuals.
            </p>
            <a 
              href="#" 
              className="inline-block px-6 py-3 bg-black text-white rounded-md text-center font-medium hover:bg-sky-blue transition-colors"
            >
              Submit General Application
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Career;
