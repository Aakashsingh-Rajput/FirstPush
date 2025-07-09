
import React, { useState } from 'react';
import { ArrowLeft, Download, Star, Eye, Copy, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '@/components/Footer';

const TemplatesPage = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const templates = [
    {
      id: 'resume-modern',
      title: 'Modern Resume Template',
      description: 'Clean, ATS-friendly resume template perfect for tech professionals',
      type: 'PDF Template',
      downloads: 1247,
      rating: 4.9,
      preview: '/api/placeholder/300/400',
      features: ['ATS Optimized', 'Easy to Edit', 'Professional Design', 'Multiple Sections'],
      content: `# Modern Resume Template

## Personal Information
- **Name:** [Your Full Name]
- **Email:** [your.email@example.com]
- **Phone:** [+1 (555) 123-4567]
- **LinkedIn:** [linkedin.com/in/yourprofile]
- **GitHub:** [github.com/yourusername]

## Professional Summary
[2-3 sentences highlighting your key skills and career objectives]

## Technical Skills
- **Languages:** JavaScript, Python, Java, HTML/CSS
- **Frameworks:** React, Node.js, Express, Django
- **Tools:** Git, Docker, AWS, MongoDB
- **Soft Skills:** Problem-solving, Team collaboration, Communication

## Experience
### [Job Title] | [Company Name] | [Date]
- [Achievement or responsibility with quantifiable impact]
- [Another key accomplishment]
- [Technical skills used]

## Education
### [Degree] | [University] | [Year]
- **Relevant Coursework:** Data Structures, Algorithms, Web Development
- **GPA:** [If 3.5+]

## Projects
### [Project Name] | [Technologies Used]
- [Brief description and impact]
- **Link:** [github.com/yourusername/project]`
    },
    {
      id: 'portfolio-react',
      title: 'React Portfolio Starter',
      description: 'Complete React portfolio template with modern design and animations',
      type: 'Code Template',
      downloads: 856,
      rating: 4.8,
      preview: '/api/placeholder/300/400',
      features: ['Responsive Design', 'Dark Mode', 'Animations', 'SEO Optimized'],
      content: `// Portfolio Starter Code
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="portfolio">
      <header className="hero">
        <h1>Your Name</h1>
        <p>Full Stack Developer</p>
        <div className="social-links">
          <a href="https://github.com/yourusername">GitHub</a>
          <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
        </div>
      </header>
      
      <section className="about">
        <h2>About Me</h2>
        <p>Passionate developer with experience in modern web technologies...</p>
      </section>
      
      <section className="projects">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          {/* Project cards will go here */}
        </div>
      </section>
      
      <section className="contact">
        <h2>Get In Touch</h2>
        <p>Let's build something amazing together!</p>
      </section>
    </div>
  );
}

export default App;`
    }
  ];

  const handleCopy = (content: string, id: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Templates & Tools</h1>
          <p className="text-gray-600">Professional templates to jumpstart your career</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {templates.map((template) => (
            <div key={template.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{template.title}</h3>
                    <p className="text-gray-600 text-sm">{template.description}</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                    {template.type}
                  </span>
                </div>

                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-sm font-medium">{template.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Download className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="text-sm text-gray-600">{template.downloads} downloads</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  {template.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-gray-900">Template Content</h4>
                    <button
                      onClick={() => handleCopy(template.content, template.id)}
                      className="flex items-center px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm transition-colors"
                    >
                      {copiedId === template.id ? (
                        <>
                          <Check className="h-3 w-3 mr-1" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3 mr-1" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="text-xs text-gray-700 bg-white p-3 rounded border max-h-48 overflow-y-auto">
                    {template.content}
                  </pre>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </button>
                  <button className="flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TemplatesPage;
