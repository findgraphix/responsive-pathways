
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import QASection from '../components/QASection';
import ServiceCards from '../components/ServiceCards';
import GrowthGraphic from '../components/GrowthGraphic';
import InsightsSection from '../components/InsightsSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href && href !== '#') {
          const targetId = href.substring(1);
          const target = document.getElementById(targetId);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
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
      
      <main>
        <HeroSlider />
        <QASection id="consulting-services" />
        <ServiceCards id="services" />
        <GrowthGraphic id="digital" />
        <InsightsSection id="insights" />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
