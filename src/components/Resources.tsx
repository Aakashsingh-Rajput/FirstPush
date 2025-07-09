
import React from 'react';
import { Download, ExternalLink, BookOpen, Video, Code, Users, FileText, Palette, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Resources = () => {
  const resourceCategories = [
    {
      title: 'Templates & Tools',
      icon: Download,
      gradient: 'from-blue-500 to-blue-600',
      items: [
        { name: 'Resume Template', type: 'PDF', description: 'ATS-friendly resume template', featured: true },
        { name: 'Portfolio Starter', type: 'Code', description: 'React portfolio boilerplate' },
        { name: 'LinkedIn Checklist', type: 'PDF', description: 'Profile optimization guide' },
        { name: 'GitHub README Template', type: 'Markdown', description: 'Professional README template' }
      ],
      link: '/resources/templates'
    },
    {
      title: 'Learning Resources',
      icon: BookOpen,
      gradient: 'from-purple-500 to-purple-600',
      items: [
        { name: 'Git & GitHub Course', type: 'Video', description: 'Complete Git tutorial series', featured: true },
        { name: 'JavaScript Roadmap', type: 'Guide', description: 'Step-by-step learning path' },
        { name: 'CSS Grid & Flexbox', type: 'Interactive', description: 'Hands-on CSS practice' },
        { name: 'API Integration Guide', type: 'Tutorial', description: 'REST API fundamentals' }
      ],
      link: '/resources/learning'
    },
    {
      title: 'Community & Support',
      icon: Users,
      gradient: 'from-green-500 to-green-600',
      items: [
        { name: 'Discord Community', type: 'Chat', description: 'Connect with fellow learners', featured: true },
        { name: 'Code Review Sessions', type: 'Live', description: 'Weekly community reviews' },
        { name: 'Mentorship Program', type: 'Program', description: '1-on-1 guidance from pros' },
        { name: 'Job Board', type: 'Listings', description: 'Entry-level opportunities' }
      ],
      link: '/resources/community'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Video': return Video;
      case 'Code': return Code;
      case 'PDF': return FileText;
      case 'Interactive': return Palette;
      default: return ExternalLink;
    }
  };

  return (
    <section id="resources" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Curated Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to succeed, carefully selected and organized. 
            Templates, tutorials, and tools to accelerate your learning.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6">
          {resourceCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${category.gradient} mr-3`}>
                  <category.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-3 mb-4">
                {category.items.map((item, i) => {
                  const TypeIcon = getTypeIcon(item.type);
                  return (
                    <div
                      key={i}
                      className={`bg-white rounded-lg p-3 hover:shadow-md transition-all duration-200 cursor-pointer group/item ${
                        item.featured ? 'ring-2 ring-blue-200' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-1">
                            <h4 className="font-medium text-gray-900 text-sm group-hover/item:text-blue-600 transition-colors">
                              {item.name}
                            </h4>
                            {item.featured && (
                              <span className="ml-2 px-2 py-0.5 text-xs bg-blue-100 text-blue-600 rounded-full">
                                Popular
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-600">{item.description}</p>
                        </div>
                        <div className="flex items-center ml-2">
                          <span className="text-xs text-gray-500 mr-1">{item.type}</span>
                          <TypeIcon className="h-3 w-3 text-gray-400 group-hover/item:text-blue-600" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <Link 
                to={category.link}
                className="w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white text-sm font-medium rounded-lg hover:from-gray-900 hover:to-black transition-all duration-200 group-hover:scale-[1.02]"
              >
                Explore All
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
            <Zap className="mr-2 h-5 w-5" />
            Browse All Resources
          </div>
        </div>
      </div>
    </section>
  );
};
