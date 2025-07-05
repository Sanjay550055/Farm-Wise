import React from 'react';
import { Award, Users, Globe, Target } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    {
      icon: Users,
      number: '50,000+',
      label: 'Happy Farmers',
      description: 'Trusted by farmers worldwide'
    },
    {
      icon: Globe,
      number: '25+',
      label: 'Countries',
      description: 'Global agricultural impact'
    },
    {
      icon: Award,
      number: '15+',
      label: 'Years Experience',
      description: 'Agricultural innovation expertise'
    },
    {
      icon: Target,
      number: '95%',
      label: 'Success Rate',
      description: 'Proven results and satisfaction'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Continuously developing cutting-edge agricultural technologies to solve modern farming challenges.'
    },
    {
      title: 'Sustainability',
      description: 'Committed to promoting sustainable farming practices that protect our environment for future generations.'
    },
    {
      title: 'Accessibility',
      description: 'Making advanced agricultural technology accessible to farmers of all scales, from smallholders to large enterprises.'
    },
    {
      title: 'Community',
      description: 'Building a global community of farmers, experts, and innovators working together for agricultural excellence.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About
            <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent ml-3">
              Agro Fusion
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're pioneering the future of agriculture through innovative technology solutions 
            that empower farmers to achieve sustainable growth and maximize productivity.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Revolutionizing Agriculture Through Technology
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded by a team of agricultural experts and technology innovators, Agro Fusion 
              bridges the gap between traditional farming wisdom and modern technological capabilities. 
              Our mission is to create sustainable, profitable, and efficient agricultural systems 
              that benefit farmers, consumers, and the environment.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              With over 15 years of combined experience in agriculture and technology, we understand 
              the unique challenges farmers face today. Our comprehensive platform integrates AI, 
              IoT, satellite imagery, and data analytics to provide actionable insights that drive 
              real results.
            </p>
            
            {/* Our Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image Placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8 h-96">
              <div className="w-full h-full bg-gradient-to-br from-green-200 to-emerald-200 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-10 w-10 text-white" />
                  </div>
                  <p className="text-green-700 font-medium">Global Agricultural Innovation</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-emerald-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-gray-50 rounded-2xl p-8 md:p-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="font-semibold text-gray-900 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h3>
          <p className="text-lg text-green-100 max-w-4xl mx-auto leading-relaxed">
            To democratize access to advanced agricultural technology, enabling farmers worldwide 
            to make data-driven decisions that increase productivity, reduce environmental impact, 
            and ensure food security for future generations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;