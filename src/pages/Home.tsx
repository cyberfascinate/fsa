import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Shield, Users, Zap, FileText, Building2, Calculator, Bot, BookOpen, Sparkles, Clock, User } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Domain Experts",
      description: "CAs, Lawyers, Engineers under one roof"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Pan-India Presence",
      description: "Serving clients across India in diverse sectors"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Proven Track Record",
      description: "Success in compliance and litigation"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Tech-First Approach",
      description: "Scalable tech, automation-first solutions"
    }
  ];

  const services = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Taxation & Compliance",
      description: "Direct & Indirect Tax Litigation, GST Compliance, Income Tax Returns",
      href: "/services#taxation"
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Corporate & Startup Advisory",
      description: "Company Incorporation, Legal Advisory, Due Diligence",
      href: "/services#corporate"
    },
    {
      icon: <Calculator className="h-8 w-8" />,
      title: "Financial Advisory & Virtual CFO",
      description: "Capital Structuring, Business Valuation, Cash Flow Planning",
      href: "/services#finance"
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "AI Tools & Digital Transformation",
      description: "AI-Powered Automation, OCR Solutions, Cloud Infrastructure",
      href: "/ai-tools"
    }
  ];

  const aiTools = [
    {
      name: 'Likh.AI',
      description: 'Digitizes handwritten parchis into GST-ready data using GPT-4o + OCR',
      status: 'Live'
    },
    {
      name: 'MITRA.AI',
      description: 'Merging ITR documentation and Automation using AI for seamless file management.',
      status: 'Coming Soon'
    },
    {
      name: 'Prompt Library',
      description: 'Custom prompt library drafted by our experts for your use cases relating to legal, accounting, taxation, compliance and advisory fields.',
      status: 'Live'
    }
  ];

  // const blogPosts = [
  //   {
  //     title: 'How AI is Revolutionizing Tax Compliance for Indian SMEs',
  //     category: 'AI & Technology',
  //     readTime: '8 min read',
  //     date: '2025-01-15'
  //   },
  //   {
  //     title: 'Top 5 Legal Mistakes Every Startup Should Avoid',
  //     category: 'Legal Insights',
  //     readTime: '6 min read',
  //     date: '2025-01-12'
  //   },
  //   {
  //     title: 'Virtual CFO Services: The Future of SME Financial Management',
  //     category: 'Finance',
  //     readTime: '7 min read',
  //     date: '2025-01-10'
  //   }
  // ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-yellow-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 md:py-20 lg:py-28 transition-colors duration-300 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-6 transition-colors leading-tight">
              <span className="block mb-2">Empowering Growth with</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004aad] to-[#ad0000] block">
                Integrity and Excellence
              </span>
            </h1>
            <div className="max-w-5xl mx-auto">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed transition-colors px-2">
                  Felicity Strategic Advisors combines expert knowledge and AI-powered innovation to deliver taxation, legal, compliance & regulatory, financial management and digital transformation services that accelerate the growth of Indian businesses.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 max-w-md sm:max-w-none mx-auto">
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#004aad] to-[#ad0000] text-white font-semibold rounded-lg hover:from-[#003d8a] hover:to-[#8a0000] transition-all transform hover:scale-105 shadow-lg"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#004aad] text-[#004aad] dark:text-blue-400 dark:border-blue-400 font-semibold rounded-lg hover:bg-[#004aad] hover:text-white dark:hover:bg-blue-400 dark:hover:text-white transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors">
              Experience the difference of working with true domain experts who combine traditional expertise with cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#004aad] to-[#ad0000] text-white rounded-full mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-50 to-yellow-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12 transition-colors duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">
                  Our Commitment to Excellence
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                    <span className="text-gray-700 dark:text-gray-300 transition-colors">Transparent pricing and ethical execution</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                    <span className="text-gray-700 dark:text-gray-300 transition-colors">24/7 support for critical business needs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                    <span className="text-gray-700 dark:text-gray-300 transition-colors">Customized solutions for your unique challenges</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                    <span className="text-gray-700 dark:text-gray-300 transition-colors">Proven track record with 100+ satisfied clients</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-block bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg transition-colors">
                  <div className="text-4xl font-bold text-[#004aad] dark:text-blue-400 mb-2 transition-colors">10x</div>
                  <div className="text-gray-600 dark:text-gray-400 transition-colors">Client Revenue Growth</div>
                  <div className="text-sm text-gray-500 dark:text-gray-500 mt-2">Post onboarding with us</div>
                </div>
                
                <div className="inline-block bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg transition-colors">
                  <div className="text-4xl font-bold text-[#004aad] dark:text-blue-400 mb-2 transition-colors">100x</div>
                  <div className="text-gray-600 dark:text-gray-400 transition-colors">Refunds Received</div>
                  <div className="text-sm text-gray-500 dark:text-gray-500 mt-2">Post Shifting to FSAPL.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
              Featured Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors">
              Comprehensive solutions designed to accelerate your business growth and ensure compliance excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-[#c4a668] dark:hover:border-[#c4a668] group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#004aad] to-[#ad0000] text-white rounded-lg group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-[#004aad] dark:group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors">
                      {service.description}
                    </p>
                    <div className="inline-flex items-center text-[#004aad] dark:text-blue-400 font-medium group-hover:text-[#ad0000] dark:group-hover:text-red-400 transition-colors">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI Tools Teaser */}
      <section className="py-20 bg-gradient-to-r from-[#ad0000] to-[#004aad] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <Sparkles className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI-Powered Business Solutions
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Discover our cutting-edge AI tools designed specifically for Indian businesses. 
              From OCR automation to intelligent audit systems, we're building the future of business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {aiTools.map((tool, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{tool.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    tool.status === 'Live' 
                      ? 'bg-green-500 text-white' 
                      : tool.status === 'Beta'
                      ? 'bg-yellow-500 text-white'
                      : 'bg-gray-500 text-white'
                  }`}>
                    {tool.status}
                  </span>
                </div>
                <p className="text-white/80 mb-4">{tool.description}</p>
                <div className="flex items-center text-white/60 text-sm">
                  <Bot className="h-4 w-4 mr-2" />
                  <span>AI-Powered Solution</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/ai-tools"
              className="inline-flex items-center px-8 py-4 bg-white text-[#004aad] font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Explore All AI Tools
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Teaser */}
      {/* <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#004aad] to-[#ad0000] rounded-full mb-6">
              <BookOpen className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
              Expert Insights & Industry Trends
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors">
              Stay ahead with our latest insights on tax, legal, finance, and AI trends shaping the Indian business landscape. 
              Learn from our experts and industry thought leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all group border border-gray-200 dark:border-gray-700">
                <div className="mb-4">
                  <span className="inline-block bg-[#004aad] text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-[#004aad] dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>CA Faith Goyal</span>
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-400 dark:text-gray-500">
                  {new Date(post.date).toLocaleDateString('en-IN', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#004aad] to-[#ad0000] text-white font-semibold rounded-lg hover:from-[#003d8a] hover:to-[#8a0000] transition-all transform hover:scale-105 shadow-lg"
            >
              Read All Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;