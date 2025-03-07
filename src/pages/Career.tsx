
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, Briefcase, Clock, ChevronDown, ChevronUp, Search } from 'lucide-react';

const Career = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  
  const jobCategories = ['All', 'Consulting', 'Technology', 'Strategy', 'Operations'];
  
  const jobListings = [
    {
      id: 1,
      title: 'Senior Strategy Consultant',
      location: 'New York, NY',
      type: 'Full-time',
      category: 'Strategy',
      description: 'We are seeking an experienced Strategy Consultant to join our growing team. In this role, you will work directly with clients to develop and implement strategic initiatives that drive business growth and transformation.',
      responsibilities: [
        'Partner with clients to identify strategic opportunities and challenges',
        'Conduct market and competitor analyses to inform strategy development',
        'Develop strategic recommendations and implementation roadmaps',
        'Present findings and recommendations to client executives',
        'Manage project teams and client relationships'
      ],
      requirements: [
        'MBA or equivalent advanced degree',
        '5+ years of strategy consulting experience',
        'Strong analytical and problem-solving skills',
        'Excellent communication and presentation abilities',
        'Experience in project management and team leadership'
      ]
    },
    {
      id: 2,
      title: 'Technology Consultant',
      location: 'San Francisco, CA',
      type: 'Full-time',
      category: 'Technology',
      description: 'Join our Technology practice to help clients leverage emerging technologies to transform their businesses. You will work on challenging projects that span digital strategy, technology implementation, and change management.',
      responsibilities: [
        'Assess client technology capabilities and identify improvement opportunities',
        'Develop technology strategies and implementation plans',
        'Support technology selection and implementation initiatives',
        'Facilitate workshops and training sessions for client teams',
        'Collaborate with cross-functional teams to deliver integrated solutions'
      ],
      requirements: [
        'Bachelor\'s degree in Computer Science, Information Systems, or related field',
        '3+ years of experience in technology consulting or IT management',
        'Knowledge of enterprise systems, cloud platforms, and emerging technologies',
        'Strong project management skills',
        'Excellent client-facing and communication skills'
      ]
    },
    {
      id: 3,
      title: 'Operations Consultant',
      location: 'Chicago, IL',
      type: 'Full-time',
      category: 'Operations',
      description: 'We are looking for an Operations Consultant to help our clients optimize their operational performance. In this role, you will identify efficiency opportunities, develop process improvements, and support implementation efforts.',
      responsibilities: [
        'Analyze business processes and identify improvement opportunities',
        'Develop operational excellence strategies and implementation plans',
        'Design new operating models and organizational structures',
        'Lead process improvement initiatives and change management efforts',
        'Measure and track operational performance improvements'
      ],
      requirements: [
        'Bachelor\'s degree in Business, Engineering, or related field',
        '3+ years of experience in operations consulting or management',
        'Knowledge of process improvement methodologies (Lean, Six Sigma)',
        'Strong analytical and problem-solving skills',
        'Excellent communication and stakeholder management abilities'
      ]
    },
    {
      id: 4,
      title: 'Associate Consultant',
      location: 'Boston, MA',
      type: 'Full-time',
      category: 'Consulting',
      description: 'Start your consulting career with our firm as an Associate Consultant. You will work alongside experienced consultants on client projects, develop core consulting skills, and build a foundation for your professional growth.',
      responsibilities: [
        'Support client engagements across various industries and functional areas',
        'Conduct research and analysis to inform client recommendations',
        'Develop presentations and client deliverables',
        'Participate in client meetings and workshops',
        'Contribute to business development activities'
      ],
      requirements: [
        'Bachelor\'s degree in Business, Economics, or related field',
        '0-2 years of professional experience',
        'Strong analytical and critical thinking skills',
        'Excellent written and verbal communication',
        'Ability to work effectively in teams and adapt to changing priorities'
      ]
    }
  ];
  
  // Filter jobs based on category and search query
  const filteredJobs = jobListings.filter(job => {
    const matchesCategory = activeFilter === 'All' || job.category === activeFilter;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  const toggleJobExpand = (jobId: number) => {
    if (expandedJob === jobId) {
      setExpandedJob(null);
    } else {
      setExpandedJob(jobId);
    }
  };

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
        <section className="bg-black text-white py-16 mb-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 reveal">Join Our Team</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto reveal">
              We're looking for exceptional talent to help our clients solve their most complex business challenges.
            </p>
          </div>
        </section>
        
        {/* Why Join Us */}
        <section className="container mx-auto px-4 mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 reveal">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-impact tracking-wider bg-sky-blue text-white rounded">
                WHY JOIN US
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Grow Your Career With Us</h2>
              <p className="text-lg text-gray-600">
                We offer challenging work, exceptional learning opportunities, and a collaborative culture that values diversity of thought and background.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 reveal">
              <div className="bg-light-gray p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-sky-blue">Meaningful Work</h3>
                <p className="text-gray-600">Work on impactful projects that solve real business challenges for leading organizations across industries.</p>
              </div>
              <div className="bg-light-gray p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-sky-blue">Accelerated Growth</h3>
                <p className="text-gray-600">Develop your skills rapidly through challenging assignments, formal training, and mentorship from industry experts.</p>
              </div>
              <div className="bg-light-gray p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-sky-blue">Collaborative Culture</h3>
                <p className="text-gray-600">Join a team that values collaboration, innovation, and inclusivity, where your voice and ideas matter.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Open Positions */}
        <section className="container mx-auto px-4 mb-16">
          <div className="text-center mb-8 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our current opportunities and find a role that matches your skills and career aspirations.
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="mb-8 reveal">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <Search className="w-5 h-5" />
                </span>
                <input 
                  type="text" 
                  placeholder="Search positions..." 
                  className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-blue"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {jobCategories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      activeFilter === category ? 'bg-sky-blue text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                    onClick={() => setActiveFilter(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Job Listings */}
            <div className="space-y-4">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <div 
                    key={job.id}
                    className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 reveal"
                  >
                    <div 
                      className="p-6 bg-white cursor-pointer flex justify-between items-center"
                      onClick={() => toggleJobExpand(job.id)}
                    >
                      <div>
                        <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {job.location}
                          </span>
                          <span className="flex items-center">
                            <Briefcase className="w-4 h-4 mr-1" />
                            {job.category}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {job.type}
                          </span>
                        </div>
                      </div>
                      <button className="text-gray-500">
                        {expandedJob === job.id ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                      </button>
                    </div>
                    
                    {expandedJob === job.id && (
                      <div className="p-6 border-t border-gray-200 bg-gray-50">
                        <p className="text-gray-700 mb-4">{job.description}</p>
                        
                        <h4 className="font-bold text-lg mb-2">Responsibilities:</h4>
                        <ul className="list-disc pl-5 mb-4">
                          {job.responsibilities.map((item, index) => (
                            <li key={index} className="text-gray-700 mb-1">{item}</li>
                          ))}
                        </ul>
                        
                        <h4 className="font-bold text-lg mb-2">Requirements:</h4>
                        <ul className="list-disc pl-5 mb-4">
                          {job.requirements.map((item, index) => (
                            <li key={index} className="text-gray-700 mb-1">{item}</li>
                          ))}
                        </ul>
                        
                        <button className="mt-2 px-6 py-2 bg-sky-blue text-white rounded-md hover:bg-black transition-colors">
                          Apply Now
                        </button>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-8 bg-gray-50 rounded-lg">
                  <p className="text-gray-500">No job listings match your current filters. Try adjusting your search.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Career;
