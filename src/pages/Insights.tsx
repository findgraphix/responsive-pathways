
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BookOpen, FileText, LineChart, ArrowRight } from 'lucide-react';

const Insights = () => {
  const insights = [
    {
      id: 1,
      title: "The Future of Work: Navigating Remote and Hybrid Models",
      excerpt: "Explore how organizations are adapting to new work paradigms and building effective remote-first cultures.",
      category: "Workplace Trends",
      date: "June 15, 2023",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Digital Transformation in the Financial Services Industry",
      excerpt: "An analysis of how digital technologies are disrupting traditional banking and creating new opportunities.",
      category: "Industry Insights",
      date: "May 28, 2023",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "Sustainability as a Competitive Advantage",
      excerpt: "How leading companies are incorporating ESG initiatives into their core business strategies.",
      category: "Strategy",
      date: "April 10, 2023",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      title: "Building Resilient Supply Chains in Uncertain Times",
      excerpt: "Strategies for mitigating risk and enhancing adaptability in global supply networks.",
      category: "Operations",
      date: "March 5, 2023",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const reports = [
    {
      id: 1,
      title: "Annual Technology Trends Report",
      description: "Comprehensive analysis of emerging technologies and their business implications"
    },
    {
      id: 2,
      title: "Industry Benchmark Study",
      description: "Comparative analysis of performance metrics across sectors"
    },
    {
      id: 3,
      title: "Future of Leadership",
      description: "Research on evolving leadership competencies in a digital age"
    }
  ];

  return (
    <div className="min-h-screen font-rubik tracking-wide">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <section className="container mx-auto px-4 mb-16 reveal">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Insights & Perspectives</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our latest thinking on business trends, industry developments, and strategic challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {insights.map((insight) => (
              <div 
                key={insight.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all-fast reveal"
                style={{animationDelay: `${insight.id * 0.1}s`}}
              >
                <div className="h-48 overflow-hidden">
                  <img src={insight.image} alt={insight.title} className="w-full h-full object-cover object-center" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-sky-blue font-semibold">{insight.category}</span>
                    <span className="text-xs text-gray-500">{insight.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{insight.title}</h3>
                  <p className="text-gray-600 mb-4">{insight.excerpt}</p>
                  <a href="#" className="inline-flex items-center text-sky-blue hover:text-black transition-colors">
                    Read more <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-16 reveal">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">Subscribe to Our Insights</h3>
                <p className="text-gray-600">
                  Stay ahead of industry trends with our monthly newsletter delivered to your inbox.
                </p>
              </div>
              <div className="md:w-1/3">
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-grow px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-blue" 
                  />
                  <button className="bg-sky-blue hover:bg-black text-white px-4 py-2 rounded-r-md transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="reveal">
            <h3 className="text-2xl font-bold mb-6 text-center">Featured Reports</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reports.map((report) => (
                <div 
                  key={report.id} 
                  className="p-6 border border-gray-200 rounded-lg hover:border-sky-blue transition-all flex flex-col items-center text-center"
                >
                  <FileText className="w-10 h-10 text-sky-blue mb-4" />
                  <h4 className="text-lg font-bold mb-2">{report.title}</h4>
                  <p className="text-gray-600 mb-4">{report.description}</p>
                  <a href="#" className="mt-auto inline-flex items-center text-sky-blue hover:text-black transition-colors">
                    Download <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Insights;
