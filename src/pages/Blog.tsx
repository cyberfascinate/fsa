import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock, User, ArrowRight, BookOpen, TrendingUp, Filter, Mail } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Tax & Compliance', 'AI & Technology', 'Startup Advisory', 'Finance', 'Legal Insights'];

  const blogPosts = [
    {
      id: 1,
      title: 'How AI is Revolutionizing Tax Compliance for Indian SMEs',
      excerpt: 'Discover how artificial intelligence tools like Likh.AI are transforming the way small businesses handle GST compliance and documentation.',
      content: 'The digital transformation of tax compliance has reached a tipping point...',
      category: 'AI & Technology',
      author: 'CA Faith Goyal',
      authorRole: 'Founder & Managing Director',
      date: '2025-01-15',
      readTime: '8 min read',
      featured: true,
      image: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['AI', 'Tax Compliance', 'GST', 'SME']
    },
    {
      id: 2,
      title: 'Top 5 Legal Mistakes Every Startup Should Avoid',
      excerpt: 'Learn about the most common legal pitfalls that can derail your startup journey and how to navigate them successfully.',
      content: 'Starting a business in India involves navigating complex legal requirements...',
      category: 'Legal Insights',
      author: 'CA Faith Goyal',
      authorRole: 'Founder & Managing Director',
      date: '2025-01-12',
      readTime: '6 min read',
      featured: true,
      image: 'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Startup', 'Legal', 'Compliance', 'Business']
    },
    {
      id: 3,
      title: 'Virtual CFO Services: The Future of SME Financial Management',
      excerpt: 'Why hiring a Virtual CFO is becoming essential for growing businesses and how it can transform your financial strategy.',
      content: 'The role of financial management in business success cannot be overstated...',
      category: 'Finance',
      author: 'CA Faith Goyal',
      authorRole: 'Founder & Managing Director',
      date: '2025-01-10',
      readTime: '7 min read',
      featured: false,
      image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['CFO', 'Finance', 'SME', 'Strategy']
    },
    {
      id: 4,
      title: 'GST Compliance Made Simple: A Complete Guide for 2025',
      excerpt: 'Navigate the complexities of GST compliance with our comprehensive guide covering filing, refunds, and best practices.',
      content: 'GST compliance remains one of the most challenging aspects...',
      category: 'Tax & Compliance',
      author: 'CA Faith Goyal',
      authorRole: 'Founder & Managing Director',
      date: '2025-01-08',
      readTime: '12 min read',
      featured: false,
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['GST', 'Compliance', 'Tax', 'Guide']
    },
    {
      id: 5,
      title: 'Startup Funding Readiness: Preparing Your Legal Documentation',
      excerpt: 'Essential legal documents and compliance requirements every startup needs before approaching investors.',
      content: 'Securing funding is a critical milestone for any startup...',
      category: 'Startup Advisory',
      author: 'CA Faith Goyal',
      authorRole: 'Founder & Managing Director',
      date: '2025-01-05',
      readTime: '9 min read',
      featured: false,
      image: 'https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Startup', 'Funding', 'Legal', 'Investment']
    },
    {
      id: 6,
      title: 'Digital Transformation Trends Shaping Indian Businesses in 2025',
      excerpt: 'Explore the key technology trends that are driving digital transformation across Indian SMEs and corporates.',
      content: 'The pace of digital transformation in India has accelerated dramatically...',
      category: 'AI & Technology',
      author: 'CA Faith Goyal',
      authorRole: 'Founder & Managing Director',
      date: '2025-01-03',
      readTime: '10 min read',
      featured: false,
      image: 'https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Digital Transformation', 'Technology', 'AI', 'Business']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#004aad] to-[#ad0000] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <BookOpen className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Insights & Expertise
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
              Stay ahead with our expert insights on tax, legal, finance, and AI trends shaping Indian business landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                placeholder="Search articles, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#004aad] focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2 overflow-x-auto">
              <Filter className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
              <div className="flex space-x-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                      selectedCategory === category
                        ? 'bg-[#004aad] text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-3 mb-8">
              <TrendingUp className="h-6 w-6 text-[#004aad] dark:text-blue-400" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white transition-colors">Featured Articles</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all group">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#004aad] text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#004aad] dark:group-hover:text-blue-400 transition-colors">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 transition-colors">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString('en-IN', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#004aad] to-[#ad0000] rounded-full flex items-center justify-center">
                          <User className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white transition-colors">{post.author}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors">{post.authorRole}</p>
                        </div>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-[#004aad] dark:text-blue-400 hover:text-[#ad0000] dark:hover:text-red-400 font-medium transition-colors"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 transition-colors">
            {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
          </h2>

          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article key={post.id} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:border-[#c4a668] dark:hover:border-[#c4a668] hover:shadow-lg transition-all group">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-[#004aad] dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-3 transition-colors">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-3 transition-colors">
                      <span>{new Date(post.date).toLocaleDateString('en-IN')}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded text-xs transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-[#004aad] dark:text-blue-400 hover:text-[#ad0000] dark:hover:text-red-400 font-medium text-sm transition-colors"
                    >
                      Read Article
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4 transition-colors" />
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2 transition-colors">No articles found</h3>
              <p className="text-gray-600 dark:text-gray-400 transition-colors">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-[#004aad] to-[#ad0000] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Mail className="h-12 w-12 mx-auto mb-6 text-white/80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated with Expert Insights
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Get the latest articles on tax, legal, finance, and AI trends delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-6 py-3 bg-white text-[#004aad] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-80 mt-3">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            Need Expert Guidance?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto transition-colors">
            Our team of experienced professionals is ready to help you navigate complex business challenges 
            with personalized solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#004aad] to-[#ad0000] text-white font-semibold rounded-lg hover:from-[#003d8a] hover:to-[#8a0000] transition-all transform hover:scale-105"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-[#004aad] text-[#004aad] dark:text-blue-400 dark:border-blue-400 font-semibold rounded-lg hover:bg-[#004aad] hover:text-white dark:hover:bg-blue-400 dark:hover:text-white transition-all"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;