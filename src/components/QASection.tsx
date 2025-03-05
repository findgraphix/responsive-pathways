
import React, { useState } from 'react';

interface Category {
  id: number;
  name: string;
  content: string;
}

interface Industry {
  id: number;
  name: string;
  categories: Category[];
}

const QASection: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  
  const industries: Industry[] = [
    {
      id: 1,
      name: 'Retail',
      categories: [
        { id: 1, name: 'Digital Transformation', content: 'Our retail digital transformation services help businesses adapt to changing consumer behaviors by implementing omnichannel strategies, enhancing online presence, and integrating digital technologies throughout the customer journey. We focus on creating seamless shopping experiences across all touchpoints, optimizing inventory management, and leveraging data analytics for personalized marketing and improved customer engagement.' },
        { id: 2, name: 'Supply Chain Optimization', content: 'We help retail businesses streamline their supply chain operations to reduce costs, minimize stockouts, and improve delivery times. Our approach includes demand forecasting, inventory optimization, and implementation of advanced tracking technologies to ensure products move efficiently from suppliers to consumers.' },
        { id: 3, name: 'Customer Experience', content: 'Enhance your customer experience strategy with our data-driven insights and personalization techniques. We help retailers create memorable shopping experiences that drive loyalty and increase customer lifetime value.' },
      ],
    },
    {
      id: 2,
      name: 'Private Industry',
      categories: [
        { id: 1, name: 'Operational Efficiency', content: 'Our operational efficiency consulting helps private industries identify and eliminate waste, optimize processes, and implement lean methodologies. We focus on reducing costs while maintaining or improving quality, resulting in sustainable competitive advantage.' },
        { id: 2, name: 'Growth Strategy', content: 'Develop comprehensive growth strategies tailored to your unique market position. We analyze market opportunities, competitive landscapes, and internal capabilities to create actionable plans for sustainable expansion.' },
        { id: 3, name: 'Risk Management', content: 'Protect your business with our comprehensive risk management solutions. We identify potential threats, develop mitigation strategies, and implement monitoring systems to safeguard your operations and reputation.' },
      ],
    },
    {
      id: 3,
      name: 'Manufacturing Services',
      categories: [
        { id: 1, name: 'Industry 4.0 Implementation', content: 'Transform your manufacturing operations with Industry 4.0 technologies including IoT, AI, and advanced robotics. Our experts help you select and implement the right digital solutions to increase productivity, reduce downtime, and improve quality control.' },
        { id: 2, name: 'Lean Manufacturing', content: 'Optimize your production processes with our lean manufacturing consulting. We help eliminate waste, streamline workflows, and implement continuous improvement practices that reduce costs and enhance product quality.' },
        { id: 3, name: 'Sustainable Production', content: 'Develop sustainable manufacturing practices that reduce environmental impact while improving efficiency. We help you implement energy-efficient technologies, waste reduction strategies, and circular economy principles.' },
      ],
    },
    {
      id: 4,
      name: 'Technology',
      categories: [
        { id: 1, name: 'Cloud Migration', content: 'Seamlessly transition your IT infrastructure to the cloud with our comprehensive migration services. We assess your current systems, design optimal cloud architectures, and manage the migration process to minimize disruption while maximizing security and performance.' },
        { id: 2, name: 'Cybersecurity', content: 'Protect your digital assets with our advanced cybersecurity solutions. We perform vulnerability assessments, implement robust security measures, and develop incident response plans to safeguard your business from evolving threats.' },
        { id: 3, name: 'AI Implementation', content: 'Harness the power of artificial intelligence to drive innovation and efficiency. Our AI specialists help you identify high-value use cases, develop and deploy AI solutions, and integrate them with your existing systems.' },
      ],
    },
    {
      id: 5,
      name: 'Oil and Gas',
      categories: [
        { id: 1, name: 'Operational Excellence', content: 'Optimize your oil and gas operations with our performance improvement expertise. We help streamline processes, enhance asset utilization, and implement best practices to maximize production efficiency and safety.' },
        { id: 2, name: 'Digital Oilfield', content: 'Transform your operations with digital oilfield technologies. We help implement IoT sensors, advanced analytics, and automation systems to enhance real-time monitoring, predictive maintenance, and remote operations capabilities.' },
        { id: 3, name: 'Energy Transition', content: 'Navigate the changing energy landscape with our strategic advisory services. We help oil and gas companies develop diversification strategies, reduce carbon footprint, and identify opportunities in renewable and alternative energy markets.' },
      ],
    },
    {
      id: 6,
      name: 'Healthcare & Life Sciences',
      categories: [
        { id: 1, name: 'Digital Health', content: 'Accelerate your digital health initiatives with our comprehensive consulting services. We help healthcare organizations implement telehealth solutions, patient engagement platforms, and integrated health information systems to improve care delivery and patient outcomes.' },
        { id: 2, name: 'Operational Improvement', content: 'Enhance healthcare operations with our performance improvement expertise. We help optimize patient flow, reduce wait times, and streamline clinical workflows to increase efficiency while maintaining quality of care.' },
        { id: 3, name: 'Regulatory Compliance', content: 'Navigate complex healthcare regulations with our compliance consulting services. We help organizations understand and implement requirements for HIPAA, FDA, and other regulatory frameworks to minimize risk and ensure adherence to industry standards.' },
      ],
    },
    {
      id: 7,
      name: 'Chemicals',
      categories: [
        { id: 1, name: 'Process Optimization', content: 'Improve your chemical processes with our optimization expertise. We analyze current operations, identify inefficiencies, and implement enhancements to increase yields, reduce waste, and improve product quality.' },
        { id: 2, name: 'Sustainable Chemistry', content: 'Develop more sustainable chemical products and processes with our green chemistry consulting. We help companies reduce environmental impact, comply with regulations, and meet growing consumer demand for eco-friendly solutions.' },
        { id: 3, name: 'Supply Chain Resilience', content: 'Strengthen your chemical supply chain against disruptions. We help identify vulnerabilities, develop contingency plans, and implement robust systems to ensure continuous operations in challenging circumstances.' },
      ],
    },
    {
      id: 8,
      name: 'Consumer Products',
      categories: [
        { id: 1, name: 'Brand Strategy', content: 'Develop a powerful brand identity that resonates with your target audience. Our brand strategists help you define your unique positioning, create compelling messaging, and build emotional connections with consumers.' },
        { id: 2, name: 'Product Innovation', content: 'Accelerate your product innovation cycle with our consumer-centered approach. We help identify unmet needs, develop concepts, and bring innovative products to market that drive growth and differentiation.' },
        { id: 3, name: 'E-commerce Optimization', content: 'Maximize your e-commerce performance with our digital expertise. We help optimize online shopping experiences, implement effective digital marketing strategies, and leverage data analytics to drive conversion and customer loyalty.' },
      ],
    },
    {
      id: 9,
      name: 'Mining',
      categories: [
        { id: 1, name: 'Operational Excellence', content: 'Enhance mining operations with our performance improvement expertise. We help optimize extraction processes, maintenance schedules, and asset utilization to increase productivity while reducing costs.' },
        { id: 2, name: 'Digital Mining', content: 'Transform your mining operations with digital technologies. We help implement IoT sensors, autonomous equipment, predictive analytics, and integrated control systems to enhance safety, efficiency, and decision-making.' },
        { id: 3, name: 'Sustainable Mining', content: 'Develop environmentally responsible mining practices. We help implement energy-efficient technologies, water management systems, and land reclamation strategies to minimize environmental impact while maintaining operational excellence.' },
      ],
    },
    {
      id: 10,
      name: 'Financial Services',
      categories: [
        { id: 1, name: 'Digital Banking', content: 'Transform your financial services with digital banking solutions. We help implement user-friendly platforms, automated processes, and data-driven insights to enhance customer experience and operational efficiency.' },
        { id: 2, name: 'Risk Management', content: 'Strengthen your financial risk management capabilities. We help identify, assess, and mitigate various types of risk, including credit, market, operational, and compliance risks, with advanced analytics and robust frameworks.' },
        { id: 3, name: 'Wealth Management', content: 'Enhance your wealth management offerings with our strategic consulting. We help develop personalized investment strategies, implement digital platforms, and optimize client engagement to attract and retain high-net-worth individuals.' },
      ],
    },
  ];
  
  const handleIndustryClick = (industry: Industry) => {
    setSelectedIndustry(industry);
    setSelectedCategory(null);
  };
  
  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
  };
  
  const resetSelections = () => {
    setSelectedIndustry(null);
    setSelectedCategory(null);
  };
  
  return (
    <section className="py-20 md:px-6 px-2 bg-light-gray">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-impact tracking-wider bg-black text-white rounded">
            DISCOVER SOLUTIONS
          </span>
          <h2 className="text-3xl md:text-4xl font-impact text-black mb-6">
            Find the Right Solution for Your Business
          </h2>
          <p className="text-base md:text-lg text-black/70 max-w-3xl mx-auto">
            Answer a few questions to discover tailored insights and solutions specific to your industry and business needs.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 transition-all duration-500">
          {!selectedIndustry ? (
            <>
              <h3 className="text-xl md:text-2xl font-impact text-black mb-6">
                What is your industry?
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {industries.map((industry) => (
                  <button
                    key={industry.id}
                    onClick={() => handleIndustryClick(industry)}
                    className="px-4 py-3 bg-light-gray hover:bg-sky-blue hover:text-white text-black text-sm md:text-base font-impact rounded transition-all-fast flex items-center justify-center text-center h-20"
                  >
                    {industry.name}
                  </button>
                ))}
              </div>
            </>
          ) : !selectedCategory ? (
            <>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl md:text-2xl font-impact text-black">
                  What is your business need?
                </h3>
                <button
                  onClick={resetSelections}
                  className="text-sm text-sky-blue hover:underline transition-all-fast"
                >
                  ← Back to industries
                </button>
              </div>
              <p className="mb-8 text-black/70">
                You selected: <span className="font-semibold">{selectedIndustry.name}</span>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedIndustry.categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryClick(category)}
                    className="px-4 py-3 bg-light-gray hover:bg-sky-blue hover:text-white text-black text-sm md:text-base font-impact rounded transition-all-fast flex items-center justify-center text-center h-16"
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl md:text-2xl font-impact text-black">
                  {selectedCategory.name}
                </h3>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="text-sm text-sky-blue hover:underline transition-all-fast"
                >
                  ← Back to business needs
                </button>
              </div>
              <p className="mb-4 text-black/70">
                Industry: <span className="font-semibold">{selectedIndustry.name}</span>
              </p>
              <div className="bg-light-gray/50 p-6 rounded-lg">
                <p className="text-black leading-relaxed">
                  {selectedCategory.content}
                </p>
                <div className="mt-8 flex justify-center">
                  <button className="px-6 py-3 bg-sky-blue text-white font-impact hover:bg-black transition-all-fast rounded">
                    Request a Consultation
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default QASection;
