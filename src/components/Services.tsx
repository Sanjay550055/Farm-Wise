import React from 'react';
import { 
  Sprout, 
  Users, 
  TrendingUp, 
  Truck, 
  BookOpen, 
  Headphones,
  ArrowRight
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Sprout,
      title: 'Precision Agriculture',
      description: 'Advanced farming techniques using GPS, sensors, and data analytics for optimal crop production.',
      features: ['Variable Rate Application', 'Soil Health Mapping', 'Yield Optimization', 'Resource Efficiency'],
      color: 'from-green-400 to-emerald-600'
    },
    {
      icon: Users,
      title: 'Farm Consultation',
      description: 'Expert agricultural consultancy services to help you make informed farming decisions.',
      features: ['Crop Planning', 'Sustainable Practices', 'Market Analysis', 'Financial Planning'],
      color: 'from-blue-400 to-cyan-600'
    },
    {
      icon: TrendingUp,
      title: 'Market Intelligence',
      description: 'Real-time market data and analytics to help you maximize profits and minimize risks.',
      features: ['Price Forecasting', 'Demand Analysis', 'Supply Chain Insights', 'Trade Opportunities'],
      color: 'from-purple-400 to-pink-600'
    },
    {
      icon: Truck,
      title: 'Supply Chain Solutions',
      description: 'End-to-end supply chain management from farm to market with logistics optimization.',
      features: ['Cold Storage', 'Transportation', 'Quality Control', 'Direct Marketing'],
      color: 'from-orange-400 to-red-600'
    },
    {
      icon: BookOpen,
      title: 'Training & Education',
      description: 'Comprehensive training programs to keep farmers updated with latest agricultural practices.',
      features: ['Online Courses', 'Workshops', 'Certification Programs', 'Best Practices'],
      color: 'from-teal-400 to-green-600'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and assistance for all your agricultural needs.',
      features: ['Technical Support', 'Emergency Response', 'Equipment Maintenance', 'Expert Guidance'],
      color: 'from-indigo-400 to-purple-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive
            <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent block mt-2">
              Agricultural Services
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From precision farming to market intelligence, we provide end-to-end solutions 
            that cover every aspect of modern agriculture.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              {/* Icon with gradient background */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>

              {/* Service Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Service Features */}
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <button className="group/btn flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors duration-200">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Farm?
          </h3>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of farmers who have revolutionized their agricultural practices 
            with our comprehensive solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 text-green-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg">
              Get Free Consultation
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              View Pricing Plans
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;