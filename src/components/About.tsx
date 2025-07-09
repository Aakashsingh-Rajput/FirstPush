
import React from 'react';
import { Target, Users, Lightbulb } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why FirstPush?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We believe everyone deserves a smooth entry into tech. FirstPush provides the guidance, 
            resources, and confidence you need to make your mark in the digital world.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: 'Clear Direction',
              description: 'Step-by-step guides that break down complex processes into manageable tasks, perfect for beginners.',
              gradient: 'from-blue-500 to-blue-600'
            },
            {
              icon: Users,
              title: 'Community Focused',
              description: 'Built by developers, for developers. Real-world advice from people who\'ve been in your shoes.',
              gradient: 'from-purple-500 to-purple-600'
            },
            {
              icon: Lightbulb,
              title: 'Practical Learning',
              description: 'No fluff, just actionable content that gets you results. Templates, checklists, and pro tips included.',
              gradient: 'from-green-500 to-green-600'
            }
          ].map((item, index) => (
            <div
              key={item.title}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${item.gradient} mb-6`}>
                <item.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
