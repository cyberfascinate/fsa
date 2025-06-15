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

  const teamMembers = [
    {
      name: "CA Faith Goyal",
      role: "Founder & Managing Director",
      qualifications: "ACA | B.Tech (ECE)",
      image: "/public/images/team/Faith_Goyal.png",
      bgColor: "bg-gradient-to-br from-purple-500 via-pink-500 to-red-500",
    },
    {
      name: "Dr. N. K. Goyal",
      role: "Business & Strategy Expert",
      qualifications: "M.B.B.S., M.D",
      image: "/public/images/team/NK_Goyal.png",
      bgColor: "bg-gradient-to-br from-red-600 to-red-800",
    },
    {
      name: "CA Vinay Goyal",
      role: "Auditing & Compliance Expert",
      qualifications: "ACA | B.Com",
      image: "/public/images/team/Vinay_Goyal.png",
      bgColor: "bg-gradient-to-br from-blue-600 to-blue-800",
    },
    {
      name: "Lokesh Choraria",
      role: "AI & Automation Expert",
      qualifications: "B.Tech (ECE)",
      image: "/public/images/team/Lokesh_choraria.png",
      bgColor: "bg-gradient-to-br from-yellow-500 to-orange-500",
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
              A multidisciplinary business consulting firm providing specialized, expert-driven solutions in the fields of taxation, legal affairs, finance, and digital transformation
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
                Driving Business Excellence Through Expert Advisory
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 transition-colors">
                At Felicity Strategic Advisors, we integrate extensive domain expertise with advanced technological capabilities to provide 
                comprehensive business solutions. Our multidisciplinary methodology guarantees that every facet of your enterprise's 
                growth is underpinned by professional rigor and excellence.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors">
                We act as physicians to your business, meticulously diagnosing challenges and recommending effective strategies 
                that foster sustainable growth while ensuring full regulatory compliance across all operational dimensions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 transition-colors">
                <div className="text-3xl font-bold text-[#004aad] dark:text-blue-400 mb-2 transition-colors">100+</div>
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

      {/* Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
              Meet Our Team – Multidisciplinary Experts Under One Roof
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors">
              Our diverse team brings together expertise from multiple disciplines to provide comprehensive business solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-xl group">
                {/* Photo with colored background */}
                <div className={`${member.bgColor} p-8 text-center relative overflow-hidden`}>
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white/30 shadow-lg group-hover:scale-105 transition-transform">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-white/90 text-sm font-medium mb-2">{member.role}</p>
                  <div className="inline-flex items-center space-x-1 bg-white/20 rounded-full px-3 py-1">
                    <GraduationCap className="h-3 w-3 text-white" />
                    <span className="text-white text-xs font-medium">{member.qualifications}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Team Stats */}
          <div className="mt-16 bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 transition-colors">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                Collective Expertise
              </h3>
              <p className="text-gray-600 dark:text-gray-400 transition-colors">
                Our team's combined experience spans multiple industries and disciplines
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg transition-colors">
                <Award className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-2 transition-colors" />
                <div className="font-semibold text-gray-900 dark:text-white transition-colors">Leadership</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors">Strategic Vision</div>
              </div>
              <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg transition-colors">
                <TrendingUp className="h-8 w-8 text-red-600 dark:text-red-400 mx-auto mb-2 transition-colors" />
                <div className="font-semibold text-gray-900 dark:text-white transition-colors">Strategy</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors">Business Growth</div>
              </div>
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg transition-colors">
                <Users className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-2 transition-colors" />
                <div className="font-semibold text-gray-900 dark:text-white transition-colors">Compliance</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors">Risk Management</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg transition-colors">
                <Briefcase className="h-8 w-8 text-yellow-600 dark:text-yellow-400 mx-auto mb-2 transition-colors" />
                <div className="font-semibold text-gray-900 dark:text-white transition-colors">Innovation</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors">AI & Automation</div>
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