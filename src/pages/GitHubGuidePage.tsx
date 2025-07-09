
import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Github, Check, ExternalLink, Copy, ArrowLeft, User, Star, GitBranch, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

const GitHubGuidePage = () => {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [profileData, setProfileData] = useState({
    name: '',
    bio: '',
    location: '',
    website: '',
    company: ''
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

  const generateReadme = () => {
    const readme = `# Hi there 👋, I'm ${profileData.name || 'Your Name'}

## About Me
${profileData.bio || 'Write a brief description about yourself here.'}

${profileData.location ? `📍 **Location:** ${profileData.location}` : ''}
${profileData.company ? `🏢 **Company:** ${profileData.company}` : ''}
${profileData.website ? `🌐 **Website:** ${profileData.website}` : ''}

## 🔧 Technologies & Tools
- **Languages:** JavaScript, TypeScript, Python
- **Frontend:** React, HTML, CSS
- **Backend:** Node.js, Express
- **Databases:** MongoDB, PostgreSQL
- **Tools:** Git, Docker, VS Code

## 📊 GitHub Stats
![Your GitHub stats](https://github-readme-stats.vercel.app/api?username=yourusername&show_icons=true&theme=radical)

## 🤝 Connect with me
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Twitter: [@YourTwitter](https://twitter.com/yourhandle)
- Email: your.email@example.com

---
⭐️ From [${profileData.name || 'YourUsername'}](https://github.com/yourusername)`;
    
    return readme;
  };

  const steps = [
    {
      id: 1,
      title: "Create Your GitHub Account",
      description: "Sign up for a free GitHub account if you haven't already.",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">Visit GitHub.com and click "Sign up" to create your account. Choose a username that represents you professionally.</p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Pro Tips:</h4>
            <ul className="text-blue-800 space-y-1 text-sm">
              <li>• Use your real name or a professional variation</li>
              <li>• Keep it simple and memorable</li>
              <li>• Avoid numbers or special characters if possible</li>
            </ul>
          </div>
          <Button 
            onClick={() => window.open('https://github.com/signup', '_blank')}
            className="w-full"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Go to GitHub Signup
          </Button>
        </div>
      )
    },
    {
      id: 2,
      title: "Set Up Your Profile",
      description: "Complete your GitHub profile with professional information.",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={profileData.name}
                onChange={(e) => setProfileData(prev => ({...prev, name: e.target.value}))}
                placeholder="John Doe"
              />
            </div>
            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={profileData.location}
                onChange={(e) => setProfileData(prev => ({...prev, location: e.target.value}))}
                placeholder="San Francisco, CA"
              />
            </div>
            <div>
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                value={profileData.company}
                onChange={(e) => setProfileData(prev => ({...prev, company: e.target.value}))}
                placeholder="Your Company"
              />
            </div>
            <div>
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                value={profileData.website}
                onChange={(e) => setProfileData(prev => ({...prev, website: e.target.value}))}
                placeholder="https://yourwebsite.com"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              value={profileData.bio}
              onChange={(e) => setProfileData(prev => ({...prev, bio: e.target.value}))}
              placeholder="Software developer passionate about creating amazing user experiences..."
              rows={3}
            />
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Create Your First Repository",
      description: "Start with a 'Hello World' repository to learn the basics.",
      content: (
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Repository Checklist:</h4>
            <div className="space-y-2">
              {[
                "Choose a descriptive repository name",
                "Add a clear description",
                "Initialize with README",
                "Choose appropriate license",
                "Make it public for visibility"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Checkbox id={`repo-${index}`} />
                  <label htmlFor={`repo-${index}`} className="text-sm">{item}</label>
                </div>
              ))}
            </div>
          </div>
          <Button 
            onClick={() => window.open('https://github.com/new', '_blank')}
            className="w-full"
          >
            <Github className="mr-2 h-4 w-4" />
            Create New Repository
          </Button>
        </div>
      )
    },
    {
      id: 4,
      title: "Craft an Amazing README",
      description: "Create a professional README that showcases your profile.",
      content: (
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">README Preview:</h4>
            <pre className="text-xs bg-white p-3 rounded border overflow-x-auto whitespace-pre-wrap">
              {generateReadme()}
            </pre>
          </div>
          <Button 
            onClick={() => copyToClipboard(generateReadme())}
            className="w-full"
            variant="outline"
          >
            <Copy className="mr-2 h-4 w-4" />
            Copy README Template
          </Button>
        </div>
      )
    },
    {
      id: 5,
      title: "Make Your First Commit",
      description: "Learn the Git workflow and make your first commit.",
      content: (
        <div className="space-y-4">
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
            <div className="mb-2"># Clone your repository</div>
            <div className="mb-2">git clone https://github.com/yourusername/your-repo.git</div>
            <div className="mb-2"># Navigate to the directory</div>
            <div className="mb-2">cd your-repo</div>
            <div className="mb-2"># Make changes and add them</div>
            <div className="mb-2">git add .</div>
            <div className="mb-2"># Commit your changes</div>
            <div className="mb-2">git commit -m "Initial commit: Add README"</div>
            <div># Push to GitHub</div>
            <div>git push origin main</div>
          </div>
          <Button 
            onClick={() => copyToClipboard(`git clone https://github.com/yourusername/your-repo.git\ncd your-repo\ngit add .\ngit commit -m "Initial commit: Add README"\ngit push origin main`)}
            variant="outline"
            className="w-full"
          >
            <Copy className="mr-2 h-4 w-4" />
            Copy Git Commands
          </Button>
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
              <div className="p-3 rounded-xl bg-gradient-to-r from-gray-600 to-gray-800 mr-4">
                <Github className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">GitHub Mastery</h1>
                <p className="text-gray-600">Build your developer presence from scratch</p>
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
              <h3 className="text-2xl font-bold text-green-900 mb-2">Congratulations! 🎉</h3>
              <p className="text-green-800 mb-6">
                You've completed the GitHub Mastery guide! Your developer journey has officially begun.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/guides/linkedin">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Next: LinkedIn Guide
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

export default GitHubGuidePage;
