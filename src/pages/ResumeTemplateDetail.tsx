import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, Edit, ArrowLeft, Star, Share2, Eye, Printer } from 'lucide-react';

interface ResumeTemplate {
  id: string;
  title: string;
  description: string;
  experienceLevel: string;
  format: string;
  icon: React.ReactNode;
  popular?: boolean;
  content: React.ReactNode;
  tips: string[];
  bestFor: string[];
}

const ResumeTemplateDetail: React.FC = () => {
  const { templateId } = useParams();
  const navigate = useNavigate();

  const resumeTemplates: ResumeTemplate[] = [
    {
      id: 'student-resume',
      title: 'Student Resume',
      description: 'Perfect for internships, research roles, and academic applications',
      experienceLevel: 'Student',
      format: 'PDF',
      icon: '🎓',
      popular: true,
      content: (
        <div className="space-y-6 p-6 bg-white border rounded-lg">
          <div className="text-center border-b pb-4">
            <h2 className="text-2xl font-bold text-gray-800">Taylor Mitchell</h2>
            <p className="text-gray-600">📍 Boston, MA | 📞 (555) 123-4567 | ✉ taylor.mitchell@email.edu</p>
            <p className="text-gray-600">🔗 linkedin.com/in/taylormitchell</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-3">Education</h3>
            <div className="mb-4">
              <p className="font-medium">Bachelor of Science in Computer Science</p>
              <p className="text-gray-600">Boston University | Expected May 2025</p>
              <p className="text-gray-600">GPA: 3.8/4.0 | Honors Program</p>
              <p className="text-gray-600">Relevant Coursework: Data Structures, Algorithms, Web Development</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-3">Projects</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium">E-Commerce Website (Python, Django)</p>
                <p className="text-gray-600 text-sm">Course Project | Spring 2024</p>
                <ul className="text-gray-700 text-sm ml-4 mt-1">
                  <li>• Developed a full-stack e-commerce platform with user authentication and payment processing</li>
                  <li>• Collaborated with a team of 3 using Agile methodology</li>
                </ul>
              </div>
              <div>
                <p className="font-medium">Data Analysis Research Assistant</p>
                <p className="text-gray-600 text-sm">BU Data Science Lab | Fall 2023 – Present</p>
                <ul className="text-gray-700 text-sm ml-4 mt-1">
                  <li>• Cleaned and analyzed datasets using Python (Pandas, NumPy)</li>
                  <li>• Assisted in publishing findings in a university research journal</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-3">Skills</h3>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-medium text-gray-800">Programming:</p>
                <p className="text-gray-600">Python, Java, SQL, HTML/CSS</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">Tools:</p>
                <p className="text-gray-600">Git, VS Code, Tableau</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">Soft Skills:</p>
                <p className="text-gray-600">Problem-solving, teamwork, technical writing</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-3">Leadership & Activities</h3>
            <ul className="text-gray-700 text-sm space-y-2">
              <li>• <span className="font-medium">VP, Computer Science Club</span> – Organized hackathons and coding workshops</li>
              <li>• <span className="font-medium">Volunteer Tutor</span> – Taught coding basics to high school students (2023-Present)</li>
            </ul>
          </div>
        </div>
      ),
      tips: [
        'Focus on education and relevant coursework since work experience is limited',
        'Include projects, research, and extracurricular activities to showcase skills',
        'Highlight leadership roles and volunteer work to demonstrate initiative',
        'Use action verbs and quantify achievements where possible',
        'Keep it concise - aim for 1 page maximum'
      ],
      bestFor: [
        'College students seeking internships',
        'Graduate students applying for research positions',
        'Recent graduates with limited work experience',
        'Academic applications and scholarships',
        'Part-time job applications'
      ]
    },
    {
      id: 'entry-level-resume',
      title: 'Entry-Level Resume',
      description: 'Ideal for recent graduates applying for their first full-time role',
      experienceLevel: 'Entry-Level',
      format: 'PDF',
      icon: '💼',
      content: (
        <div className="space-y-6 p-6 bg-white border rounded-lg">
          <div className="text-center border-b pb-4">
            <h2 className="text-2xl font-bold text-gray-800">Jordan Lee</h2>
            <p className="text-gray-600">📍 Austin, TX | 📞 (555) 987-6543 | ✉ jordan.lee@email.com</p>
            <p className="text-gray-600">🔗 linkedin.com/in/jordanlee</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-3">Professional Summary</h3>
            <p className="text-gray-700">Detail-oriented Marketing graduate with internship experience in digital marketing and content creation. Skilled in SEO, social media management, and data analysis.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-3">Education</h3>
            <div className="mb-4">
              <p className="font-medium">B.A. in Marketing</p>
              <p className="text-gray-600">University of Texas at Austin | May 2024</p>
              <p className="text-gray-600">Minor in Business Analytics | GPA: 3.6</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-3">Experience</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Digital Marketing Intern</p>
                <p className="text-gray-600 text-sm">TechStart Inc. | Summer 2023</p>
                <ul className="text-gray-700 text-sm ml-4 mt-1">
                  <li>• Managed company LinkedIn, increasing followers by 30%</li>
                  <li>• Conducted competitor analysis using SEMrush</li>
                </ul>
              </div>
              <div>
                <p className="font-medium">Campus Brand Ambassador</p>
                <p className="text-gray-600 text-sm">Red Bull USA | 2022-2023</p>
                <ul className="text-gray-700 text-sm ml-4 mt-1">
                  <li>• Promoted events and increased student engagement by 40%</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-3">Skills</h3>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-medium text-gray-800">Digital Marketing:</p>
                <p className="text-gray-600">SEO, Google Analytics, Meta Ads</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">Tools:</p>
                <p className="text-gray-600">Canva, Hootsuite, Excel</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">Languages:</p>
                <p className="text-gray-600">Fluent in Spanish</p>
              </div>
            </div>
          </div>
        </div>
      ),
      tips: [
        'Balance education and internship experience',
        'Emphasize transferable skills from part-time jobs and activities',
        'Include relevant coursework if work experience is light',
        'Use specific metrics and achievements to stand out',
        'Tailor skills section to match job requirements'
      ],
      bestFor: [
        'Recent graduates seeking first full-time position',
        'Career changers with transferable skills',
        'Individuals with internship experience',
        'Entry-level positions in any industry',
        'Graduate programs and training positions'
      ]
    },
    {
      id: 'mid-level-resume',
      title: 'Mid-Level Resume',
      description: 'Perfect for professionals with 3-7 years of experience looking to advance',
      experienceLevel: 'Mid-Level',
      format: 'PDF',
      icon: '👥',
      content: (
        <div className="space-y-6 p-6 bg-white border rounded-lg">
          <div className="text-center border-b pb-4">
            <h2 className="text-2xl font-bold text-gray-800">Morgan Carter</h2>
            <p className="text-gray-600">📍 Chicago, IL | 📞 (555) 456-7890 | ✉ morgan.carter@email.com</p>
            <p className="text-gray-600">🔗 linkedin.com/in/morgancarter</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-3">Professional Summary</h3>
            <p className="text-gray-700">HR Specialist with 5+ years of experience in talent acquisition and employee relations. Proven track record in improving retention and streamlining hiring processes.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-3">Experience</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium">HR Generalist</p>
                <p className="text-gray-600 text-sm">XYZ Corp | 2021-Present</p>
                <ul className="text-gray-700 text-sm ml-4 mt-1">
                  <li>• Reduced time-to-hire by 20% by implementing an ATS (Greenhouse)</li>
                  <li>• Conducted 50+ interviews annually and onboarded 30+ new hires</li>
                </ul>
              </div>
              <div>
                <p className="font-medium">Recruiting Coordinator</p>
                <p className="text-gray-600 text-sm">ABC Staffing | 2019-2021</p>
                <ul className="text-gray-700 text-sm ml-4 mt-1">
                  <li>• Managed full-cycle recruiting for 10+ mid-level roles per quarter</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-3">Education & Certifications</h3>
            <ul className="text-gray-700 text-sm space-y-2">
              <li>• PHR Certification (2023)</li>
              <li>• B.S. in Psychology | University of Illinois (2019)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-3">Skills</h3>
            <p className="text-gray-700">ATS (Workday, Greenhouse), Employee Relations, Performance Management</p>
          </div>
        </div>
      ),
      tips: [
        'Prioritize work experience over education',
        'Include quantifiable achievements and metrics',
        'Highlight specialized skills and certifications',
        'Show progression and growth in your career',
        'Focus on leadership and project management experience'
      ],
      bestFor: [
        'Professionals with 3-7 years of experience',
        'Individuals seeking career advancement',
        'Specialists looking to move into management',
        'Career changers with relevant experience',
        'Professionals seeking industry changes'
      ]
    },
    {
      id: 'experienced-resume',
      title: 'Experienced Professional Resume',
      description: 'Designed for senior managers, executives, and specialists with deep expertise',
      experienceLevel: 'Experienced',
      format: 'PDF',
      icon: '🏆',
      content: (
        <div className="space-y-6 p-6 bg-white border rounded-lg">
          <div className="text-center border-b pb-4">
            <h2 className="text-2xl font-bold text-gray-800">Dr. Sarah Kim</h2>
            <p className="text-gray-600">📍 San Francisco, CA | 📞 (555) 789-1234 | ✉ sarah.kim@email.com</p>
            <p className="text-gray-600">🔗 linkedin.com/in/drsarahkim</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-3">Executive Summary</h3>
            <p className="text-gray-700">Healthcare Executive with 12+ years of experience in hospital administration and policy reform. Led $10M+ operational efficiency projects and improved patient care metrics by 35%.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-3">Key Achievements</h3>
            <ul className="text-gray-700 text-sm space-y-2">
              <li>• Reduced ER wait times by 40% at City General Hospital (2022)</li>
              <li>• Secured $5M in grant funding for community health initiatives</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-3">Experience</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Chief Operating Officer</p>
                <p className="text-gray-600 text-sm">City General Hospital | 2020-Present</p>
              </div>
              <div>
                <p className="font-medium">Director of Operations</p>
                <p className="text-gray-600 text-sm">Regional Medical Center | 2015-2020</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-3">Education</h3>
            <ul className="text-gray-700 text-sm space-y-2">
              <li>• MBA, Healthcare Management | Stanford University</li>
              <li>• MD | Johns Hopkins University</li>
            </ul>
          </div>
        </div>
      ),
      tips: [
        'Lead with executive summary instead of objective',
        'Focus on strategic impact and leadership achievements',
        'Include only relevant early-career experience',
        'Emphasize board positions and industry recognition',
        'Show thought leadership and industry influence'
      ],
      bestFor: [
        'Senior managers and executives',
        'Industry specialists with deep expertise',
        'Consultants and advisors',
        'Board members and directors',
        'Thought leaders and speakers'
      ]
    }
  ];

  const template = resumeTemplates.find(t => t.id === templateId);

  if (!template) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Template Not Found</h1>
          <Button onClick={() => navigate('/resources/templates')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Templates
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/resources/templates')}
            className="mb-4 hover:bg-gray-100"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Templates
          </Button>
          
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-4xl">{template.icon}</span>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{template.title}</h1>
                  {template.popular && (
                    <Badge variant="secondary" className="mt-2">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  )}
                </div>
              </div>
              <p className="text-xl text-gray-600 mb-4">{template.description}</p>
              
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  {template.format} Format
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  {template.experienceLevel} Level
                </span>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button variant="outline">
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
              <Button variant="outline">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button>
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Resume Preview</h2>
              {template.content}
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Template Features</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Best For:</h3>
                  <ul className="space-y-1">
                    {template.bestFor.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Pro Tips:</h3>
                  <ul className="space-y-1">
                    {template.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Edit className="w-4 h-4 mr-2" />
                  Customize Template
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Printer className="w-4 h-4 mr-2" />
                  Print Version
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share with Team
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Related Templates</h3>
              <div className="space-y-3">
                {resumeTemplates
                  .filter(t => t.id !== template.id)
                  .slice(0, 2)
                  .map((relatedTemplate) => (
                    <div 
                      key={relatedTemplate.id}
                      className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                      onClick={() => navigate(`/templates/${relatedTemplate.id}`)}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{relatedTemplate.icon}</span>
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm">{relatedTemplate.title}</h4>
                          <p className="text-xs text-gray-600">{relatedTemplate.experienceLevel}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplateDetail;
















