
import React from 'react';
import { Github, Linkedin, Globe, FileText, ArrowRight, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Guides = () => {
  const guides = [
    {
      icon: Github,
      title: 'GitHub Mastery',
      description: 'Set up your profile, create repositories, and make your first pull request with confidence.',
      duration: '30 min',
      difficulty: 'Beginner',
      gradient: 'from-gray-600 to-gray-800',
      topics: ['Profile Setup', 'First Repository', 'Pull Requests', 'README Writing'],
      link: '/guides/github'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn Optimization',
      description: 'Craft a professional profile that stands out to recruiters and showcases your potential.',
      duration: '45 min',
      difficulty: 'Beginner',
      gradient: 'from-blue-600 to-blue-800',
      topics: ['Profile Photo', 'Headline Writing', 'Experience Section', 'Networking Tips'],
      link: '/guides/linkedin'
    },
    {
      icon: Globe,
      title: 'Portfolio Creation',
      description: 'Build a stunning portfolio website that showcases your projects and personality.',
      duration: '2 hours',
      difficulty: 'Intermediate',
      gradient: 'from-purple-600 to-purple-800',
      topics: ['Design Principles', 'Project Showcase', 'Responsive Design', 'Deployment'],
      link: '/guides/portfolio'
    },
    {
      icon: FileText,
      title: 'Resume Crafting',
      description: 'Write a compelling resume that gets past ATS systems and impresses hiring managers.',
      duration: '1 hour',
      difficulty: 'Beginner',
      gradient: 'from-green-600 to-green-800',
      topics: ['ATS Optimization', 'Skills Section', 'Project Descriptions', 'Formatting Tips'],
      link: '/guides/resume'
    }
  ];

  return (
    <section id="guides" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Step-by-Step Guides
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Master the fundamentals with our comprehensive guides. Each one is designed to take you 
            from zero to confident in record time.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {guides.map((guide, index) => (
            <div
              key={guide.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 rounded-xl bg-gradient-to-r ${guide.gradient}`}>
                  <guide.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-right">
                  <div className="flex items-center text-sm text-gray-500 mb-1">
                    <Clock className="h-4 w-4 mr-1" />
                    {guide.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Star className="h-4 w-4 mr-1" />
                    {guide.difficulty}
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{guide.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{guide.description}</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">What You'll Learn:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {guide.topics.map((topic, i) => (
                    <div key={i} className="text-sm text-gray-600 flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                      {topic}
                    </div>
                  ))}
                </div>
              </div>
              
              <Link 
                to={guide.link}
                className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 group-hover:scale-105"
              >
                Start Guide
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
