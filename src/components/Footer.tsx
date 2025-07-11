
import React from 'react';
import { Github, Twitter, Linkedin, Mail, Heart, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const quickLinks = [
    { name: 'GitHub Guide', path: '/guides/github' },
    { name: 'LinkedIn Guide', path: '/guides/linkedin' },
    { name: 'Portfolio Guide', path: '/guides/portfolio' },
    { name: 'Resume Guide', path: '/guides/resume' }
  ];

  const resources = [
    { name: 'Templates & Tools', path: '/resources/templates' },
    { name: 'Learning Resources', path: '/resources/learning' },
    { name: 'Community', path: '/resources/community' },
    { name: 'Profile', path: '/profile' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              FirstPush
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Empowering the next generation of developers to take their first step into tech with confidence.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="mr-4 hover:text-white" aria-label="GitHub"><Github className="h-5 w-5" /></a>
              <a href="mailto:firstpush.delta@gmail.com" className="hover:text-white" aria-label="Email"><Mail className='h-5 w-5' /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Guides</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link 
                    to={resource.path} 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest guides and resources delivered to your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white text-sm focus:outline-none focus:border-blue-500"
              />
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors">
                <Mail className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 FirstPush. Empowering your tech journey.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="hover:underline">Terms & Conditions</Link>
            <a href="mailto:firstpush.delta@gmail.com" className="hover:underline" aria-label="Contact Email">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
