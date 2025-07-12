
import React, { useState, useRef, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Linkedin, Check, ExternalLink, Copy, ArrowLeft, Star, Users, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Footer } from '@/components/Footer';
import axios from 'axios';

const LinkedInGuidePage = () => {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [profileData, setProfileData] = useState({
    headline: '',
    summary: '',
    currentRole: '',
    exCompany: '', // <-- add this
    skills: '',
    industry: ''
  });
  const { toast } = useToast();
  const [liveMessage, setLiveMessage] = useState('');
  const completionRef = useRef<HTMLDivElement>(null);
  const [aiSummary, setAiSummary] = useState('');
  const [loadingSummary, setLoadingSummary] = useState(false);

  useEffect(() => {
    if (completedSteps.length === steps.length && completionRef.current) {
      completionRef.current.focus();
    }
  }, [completedSteps]);

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
    setLiveMessage('Copied to clipboard!');
    setTimeout(() => setLiveMessage(''), 2000);
  };

  const roleSkillsMap: Record<string, string[]> = {
    'data scientist': ['Python', 'Tableau', 'SQL'],
    'data analyst': ['Excel', 'SQL', 'Power BI'],
    'software developer': ['JavaScript', 'React', 'Node.js'],
    'frontend developer': ['React', 'JavaScript', 'CSS'],
    'backend developer': ['Node.js', 'Express', 'MongoDB'],
    'full stack developer': ['React', 'Node.js', 'MongoDB'],
    'machine learning engineer': ['Python', 'TensorFlow', 'scikit-learn'],
    'devops engineer': ['AWS', 'Docker', 'Kubernetes'],
    'product manager': ['Agile', 'JIRA', 'Roadmapping'],
    'ui ux designer': ['Figma', 'Sketch', 'Adobe XD'],
    'android developer': ['Kotlin', 'Android Studio', 'Java'],
    'ios developer': ['Swift', 'Xcode', 'Objective-C'],
    // add more as needed
  };

  const generateHeadline = () => {
    const role = profileData.currentRole || 'Software Engineer';
    const industry = profileData.industry || 'Technology';
    // Use up to 2 skills if provided, else use defaults based on role
    let skills = '';
    if (profileData.skills) {
      const skillArr = profileData.skills.split(',').map(s => s.trim()).filter(Boolean);
      if (skillArr.length > 0) {
        skills = skillArr.slice(0, 2).join(', ');
      }
    } else if (role) {
      // Try to match role to mapping (case-insensitive)
      const key = role.trim().toLowerCase();
      if (roleSkillsMap[key]) {
        skills = roleSkillsMap[key].slice(0, 2).join(', ');
      } else {
        // fallback
        skills = 'Python, SQL';
      }
    } else {
      skills = 'Python, SQL';
    }
    // Only include Ex-Company if user entered it
    const exCompany = profileData.exCompany && profileData.exCompany.trim() !== '' ? `| ${profileData.exCompany}` : '';
    // Format: Role [| Ex-Company] | Industry | Skills | Open to new opportunities
    return `${role} ${exCompany} | ${industry} | ${skills} | Open to new opportunities`;
  };

  // Replace generateSummary with AI call
  const fetchAISummary = async (desc: string, skills: string) => {
    setLoadingSummary(true);
    try {
      const response = await axios.post('http://localhost:5001/api/generate-summary', {
        description: desc,
        skills: skills,
      });
      setAiSummary(response.data.summary);
    } catch (e) {
      setAiSummary('Could not generate summary. Please try again.');
    }
    setLoadingSummary(false);
  };

  useEffect(() => {
    if (profileData.summary || profileData.skills) {
      fetchAISummary(profileData.summary, profileData.skills);
    } else {
      setAiSummary('');
    }
  }, [profileData.summary, profileData.skills]);

  const steps = [
    {
      id: 1,
      title: "Professional Profile Photo",
      description: "Upload a high-quality, professional headshot that makes a great first impression.",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Photo Guidelines:</h4>
            <ul className="text-blue-800 space-y-1 text-sm">
              <li>• Use a recent, high-resolution photo (400x400px minimum)</li>
              <li>• Smile genuinely and maintain professional attire</li>
              <li>• Ensure good lighting with a clean, simple background</li>
              <li>• Face should take up 60% of the frame</li>
              <li>• No sunglasses, hats, or distracting elements</li>
            </ul>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg">
            <p className="text-amber-800 text-sm">
              <strong>Pro Tip:</strong> Profiles with professional photos receive 21x more profile views and 36x more messages!
            </p>
          </div>
          <div className="flex justify-center mt-4">
            <a
              href="https://www.linkedin.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition"
              aria-label="Sign up for LinkedIn (opens in a new tab)"
            >
              Sign up for LinkedIn
            </a>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Craft Your Headline",
      description: "Create a compelling headline that showcases your value proposition.",
      content: (
        <div className="space-y-4">
          <div>
            <Label htmlFor="currentRole">Current Role/Aspiration</Label>
            <Input
              id="currentRole"
              value={profileData.currentRole}
              onChange={(e) => setProfileData(prev => ({...prev, currentRole: e.target.value}))}
              placeholder="Software Developer"
            />
          </div>
          {/* Ex-Company input */}
          <div>
            <Label htmlFor="exCompany">Ex-Company (optional)</Label>
            <Input
              id="exCompany"
              value={profileData.exCompany}
              onChange={(e) => setProfileData(prev => ({...prev, exCompany: e.target.value}))}
              placeholder="Ex-Google"
            />
          </div>
          {/* Live-generated headline preview below Current Role/Aspiration */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Generated Headline:</h4>
            <p className="text-gray-700 italic">{generateHeadline()}</p>
            <Button 
              onClick={() => copyToClipboard(generateHeadline())}
              variant="outline"
              className="w-full mt-2"
            >
              <Copy className="mr-2 h-4 w-4" />
              Copy Headline
            </Button>
          </div>
          <div>
            <Label htmlFor="industry">Industry/Focus Area</Label>
            <Input
              id="industry"
              value={profileData.industry}
              onChange={(e) => setProfileData(prev => ({...prev, industry: e.target.value}))}
              placeholder="Technology"
            />
          </div>
          {/* Example ideal headline in gray box */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Example of an Ideal LinkedIn Headline:</h4>
            <p className="text-gray-700 italic">
              Software Engineer | Ex-Google | Building scalable web apps | Python, SQL | Open to new opportunities
            </p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Write Your Summary",
      description: "Create a compelling summary that tells your professional story.",
      content: (
        <div className="space-y-4">
          <div>
            <Label htmlFor="summary">Brief Description of Your Work/Interests</Label>
            <Textarea
              id="summary"
              value={profileData.summary}
              onChange={(e) => setProfileData(prev => ({...prev, summary: e.target.value}))}
              placeholder="Building full-stack applications using cutting-edge technologies"
              rows={2}
            />
          </div>
          <div>
            <Label htmlFor="skills">Key Skills (comma-separated)</Label>
            <Input
              id="skills"
              value={profileData.skills}
              onChange={(e) => setProfileData(prev => ({...prev, skills: e.target.value}))}
              placeholder="JavaScript, React, Node.js, Python, Git"
            />
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Generated Summary:</h4>
            {loadingSummary ? (
              <p className="text-gray-500 italic">Generating summary...</p>
            ) : (
              <div className="text-gray-700 text-sm whitespace-pre-line bg-white p-3 rounded border max-h-40 overflow-y-auto">
                {aiSummary}
              </div>
            )}
            <Button 
              onClick={() => copyToClipboard(aiSummary)}
              variant="outline"
              className="w-full"
              disabled={loadingSummary}
            >
              <Copy className="mr-2 h-4 w-4" />
              Copy Summary
            </Button>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Add Your Experience",
      description: "Document your work experience, projects, and achievements.",
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 mb-2">Experience Section Tips:</h4>
            <ul className="text-green-800 space-y-1 text-sm">
              <li>• Include internships, part-time jobs, and personal projects</li>
              <li>• Use action verbs (Built, Developed, Implemented, Led)</li>
              <li>• Quantify achievements with numbers when possible</li>
              <li>• Focus on impact and results, not just responsibilities</li>
              <li>• Add relevant coursework if you're a student</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Example Entry:</h4>
            <div className="text-sm">
              <p className="font-medium">Frontend Developer Intern</p>
              <p className="text-gray-600">TechCorp Inc. • 3 months</p>
              <p className="mt-2">• Developed responsive web applications using React and TypeScript</p>
              <p>• Collaborated with design team to implement UI/UX improvements</p>
              <p>• Reduced page load time by 30% through code optimization</p>
            </div>
          </div>
          <Button 
            onClick={() => window.open('https://linkedin.com/in/me/edit/experience/', '_blank')}
            className="w-full"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Add Experience on LinkedIn
          </Button>
        </div>
      )
    },
    {
      id: 5,
      title: "Build Your Network",
      description: "Connect with professionals and engage with content strategically.",
      content: (
        <div className="space-y-4">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-900 mb-2">Networking Strategy:</h4>
            <ul className="text-purple-800 space-y-1 text-sm">
              <li>• Connect with classmates, colleagues, and industry professionals</li>
              <li>• Send personalized connection requests with a brief message</li>
              <li>• Engage with posts by liking and commenting thoughtfully</li>
              <li>• Share relevant articles and insights in your field</li>
              <li>• Join industry-specific LinkedIn groups</li>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold">Target Connections</h4>
              <p className="text-sm text-gray-600">Aim for 100+ connections in your first month</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <Briefcase className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold">Daily Activity</h4>
              <p className="text-sm text-gray-600">Spend 10-15 minutes engaging daily</p>
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
      <main aria-label="LinkedIn Guide Main Content">
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
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 mr-4">
                  <Linkedin className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">LinkedIn Optimization</h1>
                  <p className="text-gray-600">Build a professional presence that attracts opportunities</p>
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
            {/* Accessibility live region for feedback */}
            <div aria-live="polite" className="sr-only" id="live-region">
              {liveMessage}
            </div>
            {/* Steps as ordered list */}
            <ol className="space-y-8" aria-label="LinkedIn Profile Optimization Steps">
              {steps.map((step) => (
                <li key={step.id} aria-label={`Step ${step.id}: ${step.title}`}
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
                        aria-label={completedSteps.includes(step.id) ? `Step ${step.id} completed` : `Step ${step.id} not completed`}
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
                      aria-pressed={completedSteps.includes(step.id)}
                      aria-label={completedSteps.includes(step.id) ? `Mark step ${step.id} as incomplete` : `Mark step ${step.id} as complete`}
                    >
                      {completedSteps.includes(step.id) ? 'Completed' : 'Mark Complete'}
                    </Button>
                  </div>
                  <div className="ml-12">
                    {step.content}
                  </div>
                </li>
              ))}
            </ol>
            {/* Completion Message */}
            {completedSteps.length === steps.length && (
              <div
                className="mt-8 bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
                tabIndex={-1}
                ref={completionRef}
                aria-live="polite"
                aria-label="All steps completed. Congratulations!"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full mb-4">
                  <Star className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-green-900 mb-2">Outstanding Work! 🎉</h3>
                <p className="text-green-800 mb-6">
                  Your LinkedIn profile is now optimized to attract recruiters and opportunities!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/guides/portfolio">
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      Next: Portfolio Guide
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
      </main>
      <Footer />
    </div>
  );
};

export default LinkedInGuidePage;
