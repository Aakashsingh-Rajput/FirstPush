
import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Globe, Check, ExternalLink, Copy, ArrowLeft, Star, Palette, Code, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

const PortfolioGuidePage = () => {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [portfolioData, setPortfolioData] = useState({
    name: '',
    tagline: '',
    about: '',
    project1: '',
    project2: '',
    project3: '',
    skills: '',
    contact: ''
  });
  const { toast } = useToast();

  const toggleStep = (stepId: number) => {
    setCompletedSteps(prev => 
      prev.includes(stepId) 
        ? prev.filter(id => id !== stepId)
        : [...prev, stepId]
    );
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard!",
      description: "The text has been copied to your clipboard.",
    });
  };

  const generateHtmlTemplate = () => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${portfolioData.name || 'Your Name'} - Portfolio</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        
        /* Header */
        header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 100px 0; text-align: center; }
        h1 { font-size: 3rem; margin-bottom: 10px; }
        .tagline { font-size: 1.2rem; opacity: 0.9; }
        
        /* Sections */
        section { padding: 80px 0; }
        .section-title { font-size: 2.5rem; text-align: center; margin-bottom: 50px; color: #2c3e50; }
        
        /* About */
        .about { background: #f8f9fa; }
        .about-content { max-width: 800px; margin: 0 auto; text-align: center; font-size: 1.1rem; }
        
        /* Projects */
        .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-top: 50px; }
        .project-card { background: white; padding: 30px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); transition: transform 0.3s; }
        .project-card:hover { transform: translateY(-5px); }
        
        /* Skills */
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 20px; margin-top: 30px; }
        .skill-item { background: #e3f2fd; padding: 15px; text-align: center; border-radius: 8px; font-weight: bold; color: #1976d2; }
        
        /* Contact */
        .contact { background: #2c3e50; color: white; text-align: center; }
        .contact-info { font-size: 1.1rem; }
        
        /* Responsive */
        @media (max-width: 768px) {
            h1 { font-size: 2rem; }
            section { padding: 50px 0; }
            .section-title { font-size: 2rem; }
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <h1>${portfolioData.name || 'Your Name'}</h1>
            <p class="tagline">${portfolioData.tagline || 'Full Stack Developer & Creative Problem Solver'}</p>
        </div>
    </header>

    <section class="about">
        <div class="container">
            <h2 class="section-title">About Me</h2>
            <div class="about-content">
                <p>${portfolioData.about || 'I am a passionate developer who loves creating innovative solutions and beautiful user experiences. With a strong foundation in modern web technologies, I enjoy tackling complex problems and bringing ideas to life through code.'}</p>
            </div>
        </div>
    </section>

    <section class="projects">
        <div class="container">
            <h2 class="section-title">Featured Projects</h2>
            <div class="projects-grid">
                <div class="project-card">
                    <h3>${portfolioData.project1 || 'E-Commerce Platform'}</h3>
                    <p>A full-stack e-commerce solution built with React and Node.js, featuring user authentication, payment processing, and inventory management.</p>
                    <p><strong>Tech Stack:</strong> React, Node.js, MongoDB, Stripe API</p>
                </div>
                <div class="project-card">
                    <h3>${portfolioData.project2 || 'Task Management App'}</h3>
                    <p>A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.</p>
                    <p><strong>Tech Stack:</strong> Vue.js, Firebase, Socket.io</p>
                </div>
                <div class="project-card">
                    <h3>${portfolioData.project3 || 'Weather Dashboard'}</h3>
                    <p>An interactive weather dashboard that displays current conditions and forecasts with beautiful data visualizations and location-based services.</p>
                    <p><strong>Tech Stack:</strong> JavaScript, Chart.js, Weather API</p>
                </div>
            </div>
        </div>
    </section>

    <section class="skills">
        <div class="container">
            <h2 class="section-title">Skills & Technologies</h2>
            <div class="skills-grid">
                ${(portfolioData.skills || 'JavaScript,React,Node.js,Python,HTML/CSS,Git').split(',').map(skill => 
                    `<div class="skill-item">${skill.trim()}</div>`
                ).join('')}
            </div>
        </div>
    </section>

    <section class="contact">
        <div class="container">
            <h2 class="section-title">Get In Touch</h2>
            <div class="contact-info">
                <p>Ready to collaborate? Let's create something amazing together!</p>
                <p><strong>Email:</strong> ${portfolioData.contact || 'your.email@example.com'}</p>
                <p><strong>LinkedIn:</strong> linkedin.com/in/yourprofile</p>
                <p><strong>GitHub:</strong> github.com/yourusername</p>
            </div>
        </div>
    </section>
</body>
</html>`;
  };

  const steps = [
    {
      id: 1,
      title: "Plan Your Portfolio Structure",
      description: "Define the key sections and content for your portfolio website.",
      content: (
        <div className="space-y-4">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-900 mb-2">Essential Portfolio Sections:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                "Hero/Introduction",
                "About Me",
                "Featured Projects",
                "Skills & Technologies",
                "Contact Information",
                "Resume/CV Download"
              ].map((section, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Checkbox id={`section-${index}`} />
                  <label htmlFor={`section-${index}`} className="text-sm text-purple-800">{section}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg">
            <p className="text-amber-800 text-sm">
              <strong>Pro Tip:</strong> Keep it simple and focused. Quality over quantity - showcase your 3-5 best projects rather than everything you've ever built.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Create Your Content",
      description: "Write compelling copy and gather materials for your portfolio.",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                value={portfolioData.name}
                onChange={(e) => setPortfolioData(prev => ({...prev, name: e.target.value}))}
                placeholder="John Doe"
              />
            </div>
            <div>
              <Label htmlFor="tagline">Professional Tagline</Label>
              <Input
                id="tagline"
                value={portfolioData.tagline}
                onChange={(e) => setPortfolioData(prev => ({...prev, tagline: e.target.value}))}
                placeholder="Full Stack Developer & Creative Problem Solver"
              />
            </div>
            <div>
              <Label htmlFor="contact">Contact Email</Label>
              <Input
                id="contact"
                value={portfolioData.contact}
                onChange={(e) => setPortfolioData(prev => ({...prev, contact: e.target.value}))}
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <Label htmlFor="skills">Skills (comma-separated)</Label>
              <Input
                id="skills"
                value={portfolioData.skills}
                onChange={(e) => setPortfolioData(prev => ({...prev, skills: e.target.value}))}
                placeholder="JavaScript, React, Node.js, Python"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="about">About Me Section</Label>
            <Textarea
              id="about"
              value={portfolioData.about}
              onChange={(e) => setPortfolioData(prev => ({...prev, about: e.target.value}))}
              placeholder="Write a brief introduction about yourself, your passion for development, and what makes you unique..."
              rows={3}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="project1">Project 1 Name</Label>
              <Input
                id="project1"
                value={portfolioData.project1}
                onChange={(e) => setPortfolioData(prev => ({...prev, project1: e.target.value}))}
                placeholder="E-Commerce Platform"
              />
            </div>
            <div>
              <Label htmlFor="project2">Project 2 Name</Label>
              <Input
                id="project2"
                value={portfolioData.project2}
                onChange={(e) => setPortfolioData(prev => ({...prev, project2: e.target.value}))}
                placeholder="Task Management App"
              />
            </div>
            <div>
              <Label htmlFor="project3">Project 3 Name</Label>
              <Input
                id="project3"
                value={portfolioData.project3}
                onChange={(e) => setPortfolioData(prev => ({...prev, project3: e.target.value}))}
                placeholder="Weather Dashboard"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Design & Layout",
      description: "Choose a design system and create a visually appealing layout.",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <Palette className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold">Color Scheme</h4>
              <p className="text-sm text-gray-600">Choose 2-3 colors that reflect your personality</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <Code className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold">Typography</h4>
              <p className="text-sm text-gray-600">Select readable fonts that match your style</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <Smartphone className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h4 className="font-semibold">Responsive Design</h4>
              <p className="text-sm text-gray-600">Ensure it looks great on all devices</p>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Design Principles:</h4>
            <ul className="text-sm space-y-1">
              <li>• Keep it clean and uncluttered</li>
              <li>• Use plenty of white space</li>
              <li>• Maintain consistent styling throughout</li>
              <li>• Make navigation intuitive</li>
              <li>• Optimize images for web</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Build Your Portfolio",
      description: "Code your portfolio using HTML, CSS, and JavaScript or your preferred framework.",
      content: (
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Portfolio Template Preview:</h4>
            <div className="bg-white p-4 border rounded text-xs">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded mb-2 text-center">
                <div className="font-bold text-lg">{portfolioData.name || 'Your Name'}</div>
                <div className="opacity-90">{portfolioData.tagline || 'Full Stack Developer & Creative Problem Solver'}</div>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-2">
                <div className="bg-gray-100 p-2 rounded text-center">About</div>
                <div className="bg-gray-100 p-2 rounded text-center">Projects</div>
                <div className="bg-gray-100 p-2 rounded text-center">Contact</div>
              </div>
              <div className="text-gray-600">Responsive portfolio layout with modern design...</div>
            </div>
          </div>
          <Button 
            onClick={() => copyToClipboard(generateHtmlTemplate())}
            className="w-full"
          >
            <Copy className="mr-2 h-4 w-4" />
            Copy HTML Template
          </Button>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button 
              variant="outline"
              onClick={() => window.open('https://netlify.com', '_blank')}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Deploy on Netlify
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.open('https://vercel.com', '_blank')}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Deploy on Vercel
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.open('https://pages.github.com', '_blank')}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              GitHub Pages
            </Button>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Deploy & Share",
      description: "Make your portfolio live and share it with the world.",
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 mb-2">Deployment Checklist:</h4>
            <div className="space-y-2">
              {[
                "Test on multiple devices and browsers",
                "Optimize images for faster loading",
                "Add meta tags for SEO",
                "Connect custom domain (optional)",
                "Set up Google Analytics (optional)",
                "Add contact form functionality"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Checkbox id={`deploy-${index}`} />
                  <label htmlFor={`deploy-${index}`} className="text-sm text-green-800">{item}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Share Your Portfolio:</h4>
            <ul className="text-blue-800 space-y-1 text-sm">
              <li>• Add the link to your LinkedIn profile</li>
              <li>• Include it in your GitHub profile README</li>
              <li>• Share on Twitter and other social media</li>
              <li>• Add to your email signature</li>
              <li>• Include in job applications and resumes</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  const progress = (completedSteps.length / steps.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      
      <div className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link 
              to="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-purple-800 mr-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Portfolio Creation</h1>
                <p className="text-gray-600">Build a stunning showcase of your work and skills</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="bg-gray-200 rounded-full h-2 mb-6">
              <div 
                className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="text-sm text-gray-600 mb-8">
              Progress: {completedSteps.length} of {steps.length} steps completed ({Math.round(progress)}%)
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 ${
                  completedSteps.includes(step.id) ? 'ring-2 ring-green-500' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        completedSteps.includes(step.id) 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      {completedSteps.includes(step.id) ? <Check className="h-4 w-4" /> : step.id}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  <Button
                    onClick={() => toggleStep(step.id)}
                    variant={completedSteps.includes(step.id) ? "default" : "outline"}
                    size="sm"
                  >
                    {completedSteps.includes(step.id) ? 'Completed' : 'Mark Complete'}
                  </Button>
                </div>
                
                <div className="ml-12">
                  {step.content}
                </div>
              </div>
            ))}
          </div>

          {/* Completion Message */}
          {completedSteps.length === steps.length && (
            <div className="mt-8 bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-green-900 mb-2">Fantastic Work! 🎉</h3>
              <p className="text-green-800 mb-6">
                Your portfolio is ready to impress! You now have a professional showcase of your skills and projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/guides/resume">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Next: Resume Guide
                  </Button>
                </Link>
                <Link to="/">
                  <Button variant="outline">
                    Back to Home
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioGuidePage;
