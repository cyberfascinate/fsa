import React from 'react';
import { Bot, FileText, MessageSquare, Search, Eye, ExternalLink, ArrowRight, Zap, Shield, TrendingUp, FileSearch, Database } from 'lucide-react';

const AITools = () => {
  const tools = [
    {
      name: 'Likh.AI',
      category: 'Compliance Automation',
      description: 'Digitizes handwritten parchis into GST-ready data using GPT-4o + OCR technology.',
      features: [
        'OCR + AI Parsing',
        'Exports to Excel & Google Sheets',
        'Ideal for small businesses & tax consultants',
        'Multi-language support'
      ],
      icon: <FileText className="h-8 w-8" />,
      color: 'from-[#004aad] to-[#003d8a]',
      status: 'Live',
      visitUrl: 'https://likhaifsav1.streamlit.app/',
      buttonType: 'visit'
    },
    {
      name: 'MITRA.AI',
      category: 'File Organisation AI Agent',
      description: 'Merging ITR documentation and Automation using AI for seamless file management.',
      features: [
        'Automatically computes required documents from clients for ITR filing',
        'Event based and timed triggers',
        'Linked with existing email/ cloud drive setups',
        'Automatic file re-organisation and renaming'
      ],
      icon: <FileSearch className="h-8 w-8" />,
      color: 'from-[#c4a668] to-[#a08c4f]',
      status: 'Coming Soon',
      schematicImage: '/images/ai/mitraai/MITRA_D5-6.png',
      buttonType: 'schematic'
    },
    {
      name: 'Vouch.AI',
      category: 'Auditing AI Agent',
      description: 'Converts invoices into spreadsheet and automatically matches against respective ledgers.',
      features: [
        'More than 95% accuracy in OCR of invoices',
        'Event based and timed triggers',
        'Edit & Review function before vouching process',
        'Audit speed increased to 500%'
      ],
      icon: <Database className="h-8 w-8" />,
      color: 'from-[#ad0000] to-[#8a0000]',
      status: 'Coming Soon',
      schematicImage: '/images/ai/mitraai/WorkflowAudit-Vouching_D5-6.png',
      buttonType: 'schematic'
    },
    {
      name: 'Prompt Library',
      category: 'Knowledge Resource',
      description: 'Custom prompt library drafted by our experts for your use cases relating to legal, accounting, taxation, compliance and advisory fields.',
      features: [
        'Reusable Templates',
        'Legal Notices, Contracts, Letters',
        'Easy integration with GPT tools',
        'Customizable workflows'
      ],
      icon: <Bot className="h-8 w-8" />,
      color: 'from-[#004aad] to-[#ad0000]',
      status: 'Live',
      accessUrl: 'https://drive.google.com/file/d/100vAO1ISmBIc3elu6SN_Ur3-lg-36xUY/view?usp=drive_link',
      buttonType: 'access'
    }
  ];

  const benefits = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and reduce manual work by up to 80%'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Enhanced Accuracy',
      description: 'AI-powered validation ensures higher accuracy in compliance and documentation'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Scalable Solutions',
      description: 'Grow your practice with tools that scale with your business needs'
    }
  ];

  const handleButtonClick = (tool: any) => {
    const { buttonType, visitUrl, accessUrl, schematicImage } = tool;

    switch (buttonType) {
      case 'visit':
        if (visitUrl) window.open(visitUrl, '_blank');
      break;
      case 'access':
        if (accessUrl) window.open(accessUrl, '_blank');
      break;
      case 'schematic':
        if (schematicImage) window.open(schematicImage, '_blank');
      break;
      default:
        console.warn('Unknown button type');
    }
  };


  // const handleButtonClick = (tool: any) => {
  //   if (tool.buttonType === 'visit' && tool.visitUrl) {
  //     window.open(tool.visitUrl, '_blank');
  //   } else if (tool.buttonType === 'access' && tool.accessUrl) {
  //     window.open(tool.accessUrl, '_blank');
  //   } else if (tool.buttonType === 'schematic' && tool.schematicImage) {
  //     window.open(tool.schematicImage, '_blank');
  //   }
  // };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#ad0000] to-[#004aad] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <Bot className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Building the Future with AI
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
              We create intelligent tools for compliance, audit, finance, and legal professionals 
              to reduce manual work and boost efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
              Why Choose Our AI Solutions?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors">
              Our AI tools are specifically designed for Indian business needs, combining cutting-edge technology 
              with deep domain expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#ad0000] to-[#004aad] text-white rounded-full mb-6 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 transition-colors">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Tools Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
              Our AI Tool Suite
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors">
              Discover powerful AI solutions designed to transform your professional workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                {/* Header */}
                <div className={`bg-gradient-to-r ${tool.color} p-6 text-white`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-white/20 p-3 rounded-lg">
                        {tool.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{tool.name}</h3>
                        <p className="text-white/80">{tool.category}</p>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      tool.status === 'Live' 
                        ? 'bg-green-500 text-white' 
                        : tool.status === 'Beta'
                        ? 'bg-yellow-500 text-white'
                        : 'bg-gray-500 text-white'
                    }`}>
                      {tool.status}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-6 transition-colors">
                    {tool.description}
                  </p>

                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 transition-colors">Key Features:</h4>
                  <div className="space-y-3 mb-6">
                    {tool.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tool.color}`}></div>
                        <span className="text-gray-700 dark:text-gray-300 transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="flex justify-center">
                    <button 
                      onClick={() => handleButtonClick(tool)}
                      className={`w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${tool.color} text-white font-medium rounded-lg hover:opacity-90 transition-opacity`}
                    >
                      {tool.buttonType === 'visit' && (
                        <>
                          Visit Tool
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </>
                      )}
                      {tool.buttonType === 'access' && (
                        <>
                          Request Access
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </>
                      )}
                      {tool.buttonType === 'schematic' && (
                        <>
                          See Technical Schematic
                          <Eye className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#004aad] to-[#ad0000] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join hundreds of professionals who are already using our AI tools to streamline their operations 
            and deliver better results to their clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-[#004aad] font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Schedule Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#004aad] transition-all"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AITools;