
import React from 'react';
import { Download, ExternalLink, BookOpen, Video, Code, Users } from 'lucide-react';

export const Resources = () => {
  const resourceCategories = [
    {
      title: 'Templates & Tools',
      icon: Download,
      gradient: 'from-blue-500 to-blue-600',
      items: [
        { name: 'Resume Template', type: 'PDF', description: 'ATS-friendly resume template' },
        { name: 'Portfolio Starter', type: 'Code', description: 'React portfolio boilerplate' },
        { name: 'LinkedIn Checklist', type: 'PDF', description: 'Profile optimization checklist' },
        { name: 'GitHub README Template', type: 'Markdown', description: 'Professional README template' }
      ]
    },
    {
      title: 'Learning Resources',
      icon: BookOpen,
      gradient: 'from-purple-500 to-purple-600',
      items: [
        { name: 'Git & GitHub Course', type: 'Video', description: 'Comprehensive Git tutorial series' },
        { name: 'JavaScript Roadmap', type: 'Guide', description: 'Step-by-step learning path' },
        { name: 'CSS Grid & Flexbox', type: 'Interactive', description: 'Hands-on CSS practice' },
        { name: 'API Integration Guide', type: 'Tutorial', description: 'REST API fundamentals' }
      ]
    },
    {
      title: 'Community & Support',
      icon: Users,
      gradient: 'from-green-500 to-green-600',
      items: [
        { name: 'Discord Community', type: 'Chat', description: 'Connect with fellow learners' },
        { name: 'Code Review Sessions', type: 'Live', description: 'Weekly community reviews' },
        { name: 'Mentorship Program', type: 'Program', description: '1-on-1 guidance from pros' },
        { name: 'Job Board', type: 'Listings', description: 'Entry-level opportunities' }
      ]
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Video': return Video;
      case 'Code': return Code;
      default: return ExternalLink;
    }
  };

  return (
    <section id="resources" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Curated Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to succeed, carefully selected and organized. 
            Templates, tutorials, and tools to accelerate your learning.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {resourceCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.gradient} mr-4`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.items.map((item, i) => {
                  const TypeIcon = getTypeIcon(item.type);
                  return (
                    <div
                      key={i}
                      className="bg-white rounded-lg p-4 hover:shadow-md transition-all duration-200 cursor-pointer group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {item.name}
                            </h4>
                            <span className="ml-2 px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                              {item.type}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                        <TypeIcon className="h-5 w-5 text-gray-400 group-hover:text-blue-600 ml-3 transition-colors" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Explore All Resources
            <ExternalLink className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
