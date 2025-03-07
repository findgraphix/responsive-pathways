
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronRight, Calendar, User, Tag } from 'lucide-react';

const Insights = () => {
  const insightsPosts = [
    {
      id: 1,
      title: "The Future of Digital Transformation in Post-Pandemic World",
      excerpt: "How businesses are reimagining their digital strategies and capabilities in the wake of global disruption.",
      category: "Digital",
      date: "June 15, 2023",
      author: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      title: "ESG Strategy: Building Sustainable Business Models",
      excerpt: "How organizations are incorporating environmental, social, and governance factors into their core business strategies.",
      category: "Sustainability",
      date: "May 28, 2023",
      author: "Michael Chen",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      title: "Supply Chain Resilience in an Uncertain Global Economy",
      excerpt: "Strategies for building robust supply chains that can withstand disruptions and adapt to changing market conditions.",
      category: "Operations",
      date: "April 12, 2023",
      author: "David Rodriguez",
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 4,
      title: "AI and Machine Learning: Transforming Data Analysis",
      excerpt: "How artificial intelligence and machine learning are revolutionizing the way businesses analyze and utilize data.",
      category: "Technology",
      date: "March 5, 2023",
      author: "Jessica Wright",
      image: "https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
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
        <section className="container mx-auto px-4 mb-16">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Insights</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expert perspectives, research, and ideas to help you navigate the changing business landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insightsPosts.map((post, index) => (
              <div 
                key={post.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all-fast reveal"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-0 left-0 m-4">
                    <span className="inline-block px-2 py-1 text-xs font-impact tracking-wider bg-sky-blue text-white rounded">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-3 hover:text-sky-blue transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <span className="flex items-center mr-4">
                      <Calendar className="w-4 h-4 mr-1" /> {post.date}
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" /> {post.author}
                    </span>
                  </div>
                  <button className="text-sky-blue font-medium hover:text-black transition-colors flex items-center">
                    Read more <ChevronRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center reveal">
            <a href="#" className="inline-block px-6 py-3 bg-sky-blue text-white rounded-md text-center font-medium hover:bg-black transition-colors">
              View All Insights
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Insights;
