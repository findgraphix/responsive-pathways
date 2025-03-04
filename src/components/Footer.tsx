
import React, { useState } from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribed email:', email);
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };
  
  return (
    <footer className="bg-black text-white">
      {/* Upper Section */}
      <div className="container mx-auto max-w-6xl py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl md:text-3xl font-impact mb-6 leading-tight max-w-md">
              Transforming businesses for a better, more sustainable future
            </h3>
            <div className="mb-8">
              <span className="text-2xl font-impact text-sky-blue">COMPANY</span>
            </div>
            <p className="text-white/70 max-w-md">
              Our team of experienced consultants delivers innovative solutions 
              to help organizations navigate complex challenges and capitalize 
              on new opportunities.
            </p>
          </div>
          
          {/* Subscription */}
          <div className="flex flex-col justify-start">
            <h3 className="text-xl font-impact mb-6">
              Subscribe to our newsletter
            </h3>
            <p className="text-white/70 mb-6">
              Stay informed about industry trends, best practices, and our latest insights.
            </p>
            <form onSubmit={handleSubmit} className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="px-4 py-3 bg-white/10 text-white placeholder:text-white/50 rounded focus:outline-none focus:ring-2 focus:ring-sky-blue flex-grow"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-sky-blue text-white font-impact hover:bg-white hover:text-black transition-all-fast rounded"
                >
                  Subscribe
                </button>
              </div>
              {isSubscribed && (
                <p className="text-sky-blue mt-2 animate-fade-in">
                  Thank you for subscribing!
                </p>
              )}
            </form>
            
            <div>
              <h4 className="text-lg font-impact mb-4">Follow us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="p-2 text-white hover:text-sky-blue transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="p-2 text-white hover:text-sky-blue transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="p-2 text-white hover:text-sky-blue transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="p-2 text-white hover:text-sky-blue transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Middle Section - Links */}
      <div className="border-t border-white/10">
        <div className="container mx-auto max-w-6xl py-8 px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            <div>
              <h4 className="text-sm font-impact mb-4 text-white/80">About</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-white/60 hover:text-sky-blue transition-colors">Our Company</a></li>
                <li><a href="#" className="text-sm text-white/60 hover:text-sky-blue transition-colors">Leadership</a></li>
                <li><a href="#" className="text-sm text-white/60 hover:text-sky-blue transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-impact mb-4 text-white/80">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-white/60 hover:text-sky-blue transition-colors">Strategy</a></li>
                <li><a href="#" className="text-sm text-white/60 hover:text-sky-blue transition-colors">Operations</a></li>
                <li><a href="#" className="text-sm text-white/60 hover:text-sky-blue transition-colors">Digital</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-impact mb-4 text-white/80">Industries</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-white/60 hover:text-sky-blue transition-colors">Retail</a></li>
                <li><a href="#" className="text-sm text-white/60 hover:text-sky-blue transition-colors">Healthcare</a></li>
                <li><a href="#" className="text-sm text-white/60 hover:text-sky-blue transition-colors">Financial</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-impact mb-4 text-white/80">Insights</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-white/60 hover:text-sky-blue transition-colors">Articles</a></li>
                <li><a href="#" className="text-sm text-white/60 hover:text-sky-blue transition-colors">Reports</a></li>
                <li><a href="#" className="text-sm text-white/60 hover:text-sky-blue transition-colors">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-impact mb-4 text-white/80">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-white/60 hover:text-sky-blue transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-sm text-white/60 hover:text-sky-blue transition-colors">Terms of Use</a></li>
                <li><a href="#" className="text-sm text-white/60 hover:text-sky-blue transition-colors">Cookies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-impact mb-4 text-white/80">Contact</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-white/60 hover:text-sky-blue transition-colors">Get in Touch</a></li>
                <li><a href="#" className="text-sm text-white/60 hover:text-sky-blue transition-colors">Office Locations</a></li>
                <li><a href="#" className="text-sm text-white/60 hover:text-sky-blue transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Section - Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto max-w-6xl py-6 px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/60 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} COMPANY. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-white/60 hover:text-sky-blue transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-white/60 hover:text-sky-blue transition-colors">
                Terms
              </a>
              <a href="#" className="text-sm text-white/60 hover:text-sky-blue transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
