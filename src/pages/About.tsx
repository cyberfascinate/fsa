import React from 'react';
import { Award, Target, TrendingUp, Users, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  const steps = [
    {
      number: "01",
      title: "Understand Your Needs",
      description: "We begin by thoroughly analyzing your business requirements, challenges, and objectives."
    },
    {
      number: "02",
      title: "Develop Tailored Strategies",
      description: "Our experts craft customized solutions that align with your specific business goals."
    },
    {
      number: "03",
      title: "Implement with Precision",
      description: "We execute strategies with meticulous attention to detail and regulatory compliance."
    },
    {
      number: "04",
      title: "Measure and Refine Outcomes",
      description: "Continuous monitoring ensures optimal results and ongoing improvement."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#004aad] to-[#ad0000] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Felicity Strategic Advisors
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
              A multidisciplinary consulting firm offering expert-led solutions for taxation, law, finance, and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">
                Driving Business Excellence Through Expert Guidance
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 transition-colors">
                At Felicity Strategic Advisors, we combine deep domain expertise with cutting-edge technology to deliver 
                comprehensive business solutions. Our multidisciplinary approach ensures that every aspect of your business 
                growth is supported by professional excellence.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors">
                We serve as your trusted business physicians, diagnosing challenges and prescribing effective solutions 
                that drive sustainable growth and ensure regulatory compliance across all business functions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 transition-colors">
                <div className="text-3xl font-bold text-[#004aad] dark:text-blue-400 mb-2 transition-colors">500+</div>
                <div className="text-gray-600 dark:text-gray-400 transition-colors">Clients Served</div>
              </div>
              <div className="text-center bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 transition-colors">
                <div className="text-3xl font-bold text-[#c4a668] dark:text-yellow-400 mb-2 transition-colors">10+</div>
                <div className="text-gray-600 dark:text-gray-400 transition-colors">Years Experience</div>
              </div>
              <div className="text-center bg-red-50 dark:bg-red-900/20 rounded-xl p-6 transition-colors">
                <div className="text-3xl font-bold text-[#ad0000] dark:text-red-400 mb-2 transition-colors">15+</div>
                <div className="text-gray-600 dark:text-gray-400 transition-colors">Industry Sectors</div>
              </div>
              <div className="text-center bg-green-50 dark:bg-green-900/20 rounded-xl p-6 transition-colors">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2 transition-colors">24/7</div>
                <div className="text-gray-600 dark:text-gray-400 transition-colors">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
              Meet Our Founder
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors">
              Visionary leadership driving innovation in business consulting
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden transition-colors">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              <div className="lg:col-span-1 bg-gradient-to-br from-[#004aad] to-[#ad0000] p-8 text-white">
                <div className="text-center">
                  {/* Professional Photo */}
                  <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/30 shadow-lg">
                    <img
                      src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="CA Faith Goyal - Founder & Managing Director"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">CA Faith Goyal</h3>
                  <p className="text-blue-100 mb-4">Founder & Managing Director</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <GraduationCap className="h-4 w-4" />
                      <span>ACA | B.Tech ECE | LLB</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 p-8">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors">Professional Journey</h4>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 transition-colors">
                  <p>
                    With over 10 years of extensive experience spanning pharmaceuticals, consulting, and technology sectors, 
                    CA Faith Goyal brings a unique multidisciplinary perspective to business strategy and operations.
                  </p>
                  <p>
                    As the driving force behind Faith Pharmaceuticals Ltd. and a former international inline speed skater, 
                    Faith combines competitive excellence with business acumen to deliver exceptional results for clients.
                  </p>
                  <p>
                    Under Faith's leadership, our consulting practice has achieved remarkable 10x revenue growth post-qualification, 
                    establishing Felicity Strategic Advisors as a trusted partner for businesses across India.
                  </p>
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg transition-colors">
                    <Award className="h-8 w-8 text-[#004aad] dark:text-blue-400 mx-auto mb-2 transition-colors" />
                    <div className="font-semibold text-gray-900 dark:text-white transition-colors">ACA Qualified</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors">Chartered Accountant</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg transition-colors">
                    <TrendingUp className="h-8 w-8 text-[#c4a668] dark:text-yellow-400 mx-auto mb-2 transition-colors" />
                    <div className="font-semibold text-gray-900 dark:text-white transition-colors">10x Growth</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors">Revenue Achievement</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg transition-colors">
                    <Users className="h-8 w-8 text-[#ad0000] dark:text-red-400 mx-auto mb-2 transition-colors" />
                    <div className="font-semibold text-gray-900 dark:text-white transition-colors">Multi-Industry</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors">Expertise</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Target className="h-16 w-16 text-[#004aad] dark:text-blue-400 mx-auto mb-6 transition-colors" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">
              Our Vision
            </h2>
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-white italic max-w-5xl mx-auto leading-relaxed transition-colors">
              "To make expert-backed, tech-driven, and ethically sound consulting accessible to growing Indian businesses — 
              without dependence on outdated, slow, or exploitative systems."
            </blockquote>
          </div>
        </div>
      </section>

      {/* 4-Step Approach */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
              Our 4-Step Approach
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors">
              A proven methodology that ensures consistent results and client satisfaction across all our engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-200 dark:border-gray-700 h-full">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#004aad] to-[#ad0000] text-white rounded-full text-xl font-bold mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 transition-colors">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-gradient-to-r from-[#004aad] to-[#ad0000] transform translate-x-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;