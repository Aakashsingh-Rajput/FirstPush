
import React from 'react';
import { ArrowRight, Github, Linkedin, FileText, Globe } from 'lucide-react';

export const Hero = () => {
  const scrollToGuides = () => {
    const element = document.getElementById('guides');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Take Your{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                First Push
              </span>{' '}
              Into Tech
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
              Your journey into tech starts here. Get step-by-step guidance to build your GitHub profile, 
              craft a standout portfolio, and make your first open source contribution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={scrollToGuides}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
              >
                Learn More
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { icon: Github, label: 'GitHub Setup', color: 'from-gray-600 to-gray-800' },
              { icon: Linkedin, label: 'LinkedIn Profile', color: 'from-blue-600 to-blue-800' },
              { icon: Globe, label: 'Portfolio Site', color: 'from-purple-600 to-purple-800' },
              { icon: FileText, label: 'Resume Tips', color: 'from-green-600 to-green-800' },
            ].map((item, index) => (
              <div
                key={item.label}
                className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`p-3 rounded-lg bg-gradient-to-r ${item.color} mb-3`}>
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700 text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
