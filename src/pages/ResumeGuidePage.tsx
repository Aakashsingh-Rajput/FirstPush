
import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { FileText, Check, ExternalLink, Copy, ArrowLeft, Star, User, Briefcase, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

const ResumeGuidePage = () => {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [resumeData, setResumeData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    summary: '',
    experience: '',
    education: '',
    skills: '',
    projects: ''
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

  const generateResumeContent = () => {
    return `${resumeData.name || 'Your Name'}
${resumeData.email || 'your.email@example.com'} | ${resumeData.phone || '(555) 123-4567'} | ${resumeData.location || 'City, State'} | LinkedIn: linkedin.com/in/yourprofile | GitHub: github.com/yourusername

PROFESSIONAL SUMMARY
${resumeData.summary || 'Motivated software developer with strong foundation in modern web technologies and passion for creating innovative solutions. Proven ability to work collaboratively in team environments and deliver high-quality code. Seeking opportunities to contribute to dynamic development projects and continue growing technical expertise.'}

TECHNICAL SKILLS
Programming Languages: ${resumeData.skills || 'JavaScript, Python, Java, HTML/CSS'}
Frameworks & Libraries: React, Node.js, Express, Bootstrap, jQuery
Databases: MongoDB, PostgreSQL, MySQL
Tools & Technologies: Git/GitHub, VS Code, Docker, AWS, Agile/Scrum

EXPERIENCE
${resumeData.experience || `Software Developer Intern | TechCorp Inc. | June 2023 - August 2023
• Developed responsive web applications using React and JavaScript, improving user experience for 1000+ daily users
• Collaborated with cross-functional team of 5 developers to implement new features and fix bugs
• Reduced page load times by 25% through code optimization and performance improvements
• Participated in daily stand-ups and sprint planning meetings using Agile methodology

Junior Web Developer | StartupXYZ | September 2022 - May 2023
• Built and maintained company website using HTML, CSS, and JavaScript
• Created automated testing scripts that reduced manual testing time by 40%
• Worked closely with design team to implement pixel-perfect UI components`}

PROJECTS
${resumeData.projects || `E-Commerce Platform | React, Node.js, MongoDB
• Developed full-stack web application with user authentication, shopping cart, and payment processing
• Implemented RESTful APIs and integrated third-party payment gateway (Stripe)
• Deployed application on AWS with 99.9% uptime

Task Management App | Vue.js, Firebase
• Created collaborative project management tool with real-time updates and team messaging
• Implemented drag-and-drop functionality and responsive design for mobile compatibility
• Achieved 95% user satisfaction rate based on beta testing feedback`}

EDUCATION
${resumeData.education || `Bachelor of Science in Computer Science | University Name | Expected May 2024
Relevant Coursework: Data Structures, Algorithms, Database Systems, Software Engineering, Web Development
GPA: 3.8/4.0 | Dean's List: Fall 2022, Spring 2023`}

CERTIFICATIONS & ACHIEVEMENTS
• AWS Certified Cloud Practitioner (2023)
• First Place - University Hackathon 2023
• Google Analytics Individual Qualification (IQ)
• Contributing member to 3 open-source projects on GitHub`;
  };

  const steps = [
    {
      id: 1,
      title: "Contact Information & Header",
      description: "Create a professional header with all essential contact details.",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={resumeData.name}
                onChange={(e) => setResumeData(prev => ({...prev, name: e.target.value}))}
                placeholder="John Doe"
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                value={resumeData.email}
                onChange={(e) => setResumeData(prev => ({...prev, email: e.target.value}))}
                placeholder="john.doe@email.com"
                type="email"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={resumeData.phone}
                onChange={(e) => setResumeData(prev => ({...prev, phone: e.target.value}))}
                placeholder="(555) 123-4567"
              />
            </div>
            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={resumeData.location}
                onChange={(e) => setResumeData(prev => ({...prev, location: e.target.value}))}
                placeholder="San Francisco, CA"
              />
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Header Best Practices:</h4>
            <ul className="text-blue-800 space-y-1 text-sm">
              <li>• Use a professional email address (avoid nicknames)</li>
              <li>• Include LinkedIn and GitHub profile links</li>
              <li>• Keep formatting clean and consistent</li>
              <li>• Make sure phone number is current and professional</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Professional Summary",
      description: "Write a compelling summary that highlights your value proposition.",
      content: (
        <div className="space-y-4">
          <div>
            <Label htmlFor="summary">Professional Summary (2-3 sentences)</Label>
            <Textarea
              id="summary"
              value={resumeData.summary}
              onChange={(e) => setResumeData(prev => ({...prev, summary: e.target.value}))}
              placeholder="Motivated software developer with strong foundation in modern web technologies and passion for creating innovative solutions..."
              rows={4}
            />
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 mb-2">Summary Formula:</h4>
            <p className="text-green-800 text-sm">
              <strong>[Your Role/Level]</strong> + <strong>[Key Skills/Technologies]</strong> + <strong>[What You're Seeking]</strong>
            </p>
            <p className="text-green-700 text-xs mt-2">
              Example: "Junior developer with expertise in React and Node.js seeking opportunities to contribute to innovative web applications."
            </p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Skills Section",
      description: "Organize your technical skills by category for easy scanning.",
      content: (
        <div className="space-y-4">
          <div>
            <Label htmlFor="skills">Technical Skills (comma-separated)</Label>
            <Textarea
              id="skills"
              value={resumeData.skills}
              onChange={(e) => setResumeData(prev => ({...prev, skills: e.target.value}))}
              placeholder="JavaScript, Python, React, Node.js, MongoDB, Git"
              rows={3}
            />
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-900 mb-2">Skills Organization:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-purple-800">Programming Languages:</p>
                <p className="text-purple-700">JavaScript, Python, Java</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">Frameworks:</p>
                <p className="text-purple-700">React, Node.js, Express</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">Databases:</p>
                <p className="text-purple-700">MongoDB, PostgreSQL</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">Tools:</p>
                <p className="text-purple-700">Git, Docker, AWS</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Experience & Projects",
      description: "Showcase your work experience and key projects with quantifiable achievements.",
      content: (
        <div className="space-y-4">
          <div>
            <Label htmlFor="experience">Work Experience</Label>
            <Textarea
              id="experience"
              value={resumeData.experience}
              onChange={(e) => setResumeData(prev => ({...prev, experience: e.target.value}))}
              placeholder="Include internships, part-time jobs, freelance work..."
              rows={4}
            />
          </div>
          <div>
            <Label htmlFor="projects">Key Projects</Label>
            <Textarea
              id="projects"
              value={resumeData.projects}
              onChange={(e) => setResumeData(prev => ({...prev, projects: e.target.value}))}
              placeholder="Describe 2-3 of your best projects with technologies used and impact..."
              rows={4}
            />
          </div>
          <div className="bg-amber-50 p-4 rounded-lg">
            <h4 className="font-semibold text-amber-900 mb-2">Writing Strong Bullet Points:</h4>
            <ul className="text-amber-800 space-y-1 text-sm">
              <li>• Start with action verbs (Built, Developed, Implemented, Led)</li>
              <li>• Include specific technologies and tools used</li>
              <li>• Quantify results when possible (25% improvement, 1000+ users)</li>
              <li>• Focus on impact and outcomes, not just tasks</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Education & Final Review",
      description: "Add education details and perform a comprehensive review of your resume.",
      content: (
        <div className="space-y-4">
          <div>
            <Label htmlFor="education">Education</Label>
            <Textarea
              id="education"
              value={resumeData.education}
              onChange={(e) => setResumeData(prev => ({...prev, education: e.target.value}))}
              placeholder="Degree, School Name, Graduation Date, GPA (if 3.5+), Relevant Coursework..."
              rows={3}
            />
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Complete Resume Preview:</h4>
            <div className="bg-white p-4 border rounded text-xs max-h-60 overflow-y-auto whitespace-pre-line">
              {generateResumeContent()}
            </div>
          </div>
          <Button 
            onClick={() => copyToClipboard(generateResumeContent())}
            className="w-full"
          >
            <Copy className="mr-2 h-4 w-4" />
            Copy Complete Resume
          </Button>
          <div className="bg-red-50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-900 mb-2">Final Checklist:</h4>
            <div className="space-y-2">
              {[
                "Proofread for spelling and grammar errors",
                "Keep to 1-2 pages maximum",
                "Use consistent formatting throughout",
                "Save as PDF to preserve formatting",
                "Test ATS compatibility with jobscan.co",
                "Tailor for each job application"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Checkbox id={`final-${index}`} />
                  <label htmlFor={`final-${index}`} className="text-sm text-red-800">{item}</label>
                </div>
              ))}
            </div>
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
              <div className="p-3 rounded-xl bg-gradient-to-r from-green-600 to-green-800 mr-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Resume Crafting</h1>
                <p className="text-gray-600">Create a compelling resume that gets you noticed</p>
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
              <h3 className="text-2xl font-bold text-green-900 mb-2">Mission Accomplished! 🎉</h3>
              <p className="text-green-800 mb-6">
                You've created a professional resume that will help you stand out to employers and land interviews!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/guides/github">
                  <Button className="bg-gray-600 hover:bg-gray-700">
                    Review: GitHub Guide
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

export default ResumeGuidePage;
