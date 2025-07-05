import React from 'react';
import { 
  Smartphone, 
  CloudRain, 
  BarChart3, 
  Leaf, 
  Satellite, 
  AlertTriangle,
  Zap,
  Shield
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Mobile Monitoring',
      description: 'Real-time crop monitoring and management from your smartphone with intuitive controls and notifications.',
      color: 'bg-blue-500'
    },
    {
      icon: CloudRain,
      title: 'Weather Intelligence',
      description: 'Advanced weather prediction and climate analysis to optimize planting, irrigation, and harvesting schedules.',
      color: 'bg-cyan-500'
    },
    {
      icon: BarChart3,
      title: 'Smart Analytics',
      description: 'Data-driven insights and predictive analytics to maximize yield and minimize resource waste.',
      color: 'bg-purple-500'
    },
    {
      icon: Leaf,
      title: 'Crop Management',
      description: 'Comprehensive crop lifecycle management with automated recommendations and growth tracking.',
      color: 'bg-green-500'
    },
    {
      icon: Satellite,
      title: 'Satellite Imagery',
      description: 'High-resolution satellite monitoring for field health assessment and precision agriculture.',
      color: 'bg-orange-500'
    },
    {
      icon: AlertTriangle,
      title: 'Early Warning System',
      description: 'Proactive alerts for pest detection, disease prevention, and optimal harvest timing.',
      color: 'bg-red-500'
    },
    {
      icon: Zap,
      title: 'IoT Integration',
      description: 'Seamless integration with IoT sensors for soil moisture, temperature, and nutrient monitoring.',
      color: 'bg-yellow-500'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Comprehensive risk assessment and mitigation strategies for weather, pests, and market volatility.',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent block mt-2">
              Modern Agriculture
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive suite of tools empowers farmers with cutting-edge technology 
            to make informed decisions and achieve sustainable growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-green-300 transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-green-50 text-green-700 rounded-full text-sm font-medium mb-4">
            Ready to transform your farming experience?
          </div>
          <div>
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105">
              Explore All Features
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;