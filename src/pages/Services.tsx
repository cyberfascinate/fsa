import React from 'react';
import { FileText, Building2, Calculator, Bot, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      id: 'taxation',
      icon: <FileText className="h-12 w-12" />,
      title: 'Taxation & Regulatory Compliance',
      description: 'Comprehensive tax solutions and regulatory compliance services to keep your business compliant and optimized.',
      services: [
        'Direct & Indirect Tax Litigation',
        'GST Compliance, Filing & Refunds',
        'Income Tax Returns, Scrutiny & Appeals',
        'EPF & ESIC Compliance',
        'DPIIT & Startup India Registration',
        'Transfer Pricing & Structuring'
      ],
      color: 'from-[#004aad] to-[#003d8a]'
    },
    {
      id: 'corporate',
      icon: <Building2 className="h-12 w-12" />,
      title: 'Corporate & Startup Services',
      description: 'End-to-end corporate services from incorporation to governance, designed for startups and established businesses.',
      services: [
        'Company/LLP/Trust Incorporation',
        'Corporate Governance & ROC Filings',
        'Sectoral Registrations & Licenses',
        'Startup Legal Advisory & Due Diligence',
        'Contract Drafting (Agreements, Notices)',
        'Audit & Assurance via partner firms'
      ],
      color: 'from-[#c4a668] to-[#a08c4f]'
    },
    {
      id: 'finance',
      icon: <Calculator className="h-12 w-12" />,
      title: 'Finance & Management Advisory',
      description: 'Strategic financial guidance and management advisory services to optimize your business performance.',
      services: [
        'Virtual CFO Services',
        'Capital Structuring & Investment Readiness',
        'Business Valuation & Strategic Forecasting',
        'Cash Flow Planning',
        'Accounting & Bookkeeping',
        'Personal Investment Advisory'
      ],
      color: 'from-[#ad0000] to-[#8a0000]'
    },
    {
      id: 'digital',
      icon: <Bot className="h-12 w-12" />,
      title: 'Digital Transformation',
      description: 'Cutting-edge AI and digital solutions to modernize your business operations and drive efficiency.',
      services: [
        'AI-Powered Business Automation',
        'Likh.AI (OCR for handwritten bills/invoices)',
        'Cloud Security & Infrastructure Setup',
        'Website & Brand Development',
        'Digital Payment Interface Integration',
        'Custom Software Development'
      ],
      color: 'from-[#004aad] to-[#ad0000]'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#004aad] to-[#ad0000] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
              Explore our full suite of consulting services, crafted to support startups, SMEs, and corporates 
              with expert-backed solutions for sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
              Comprehensive Business Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors">
              From compliance to growth strategy, we provide integrated solutions that address every aspect of your business needs.
            </p>
          </div>

          <div className="space-y-20">
            {serviceCategories.map((category, index) => (
              <div
                key={category.id}
                id={category.id}
                className={`relative ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${category.color} text-white rounded-xl mb-6`}>
                      {category.icon}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 transition-colors">
                      {category.description}
                    </p>
                    <div className="space-y-3">
                      {category.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 transition-colors" />
                          <span className="text-gray-700 dark:text-gray-300 transition-colors">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className={`bg-gradient-to-br ${category.color} rounded-2xl p-8 text-white`}>
                      <div className="text-center">
                        <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                          {React.cloneElement(category.icon, { className: "h-16 w-16" })}
                        </div>
                        <h4 className="text-2xl font-bold mb-4">Expert Solutions</h4>
                        <p className="text-white/90 mb-6">
                          Our specialized team delivers tailored solutions that drive measurable results for your business.
                        </p>
                        <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                          <div className="text-3xl font-bold mb-1">99%</div>
                          <div className="text-sm text-white/80">Client Satisfaction Rate</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-12 text-center transition-colors">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto transition-colors">
              Let our expert team help you navigate complex business challenges and unlock your growth potential. 
              Contact us today for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#004aad] to-[#ad0000] text-white font-semibold rounded-lg hover:from-[#003d8a] hover:to-[#8a0000] transition-all transform hover:scale-105 shadow-lg"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/ai-tools"
                className="inline-flex items-center px-8 py-4 border-2 border-[#004aad] text-[#004aad] dark:text-blue-400 dark:border-blue-400 font-semibold rounded-lg hover:bg-[#004aad] hover:text-white dark:hover:bg-blue-400 dark:hover:text-white transition-all"
              >
                Explore AI Tools
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;