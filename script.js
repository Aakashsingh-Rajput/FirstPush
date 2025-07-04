// Responsive Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Smooth scroll for 'Explore Guides' button
const ctaBtn = document.querySelector('.cta-btn');
if (ctaBtn) {
  ctaBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const guidesSection = document.getElementById('guides');
    if (guidesSection) {
      guidesSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// Placeholder: Terminal Tips interactivity
const terminalTipBtn = document.getElementById('terminalTipBtn');
if (terminalTipBtn) {
  terminalTipBtn.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Terminal Tips coming soon!');
  });
}

// Resume Guide Dashboard Interactivity

document.addEventListener('DOMContentLoaded', function () {
  // Progress Bar & Stepper
  const steps = [
    { name: 'Contact Info', time: '2 min' },
    { name: 'Education', time: '5 min' },
    { name: 'Skills', time: '8 min' },
    { name: 'Projects', time: '15 min' },
    { name: 'Experience', time: '12 min' },
  ];
  let activeStep = 0;
  let progress = 0;
  const progressBar = document.getElementById('progress-bar');
  const progressBadge = document.getElementById('progress-badge');
  const stepperList = document.getElementById('stepper-list');

  function renderStepper() {
    stepperList.innerHTML = '';
    steps.forEach((step, idx) => {
      const div = document.createElement('div');
      div.className = 'stepper-row' + (idx === activeStep ? ' stepper-active' : idx < activeStep ? ' stepper-complete' : '');
      div.innerHTML = `
        <span class="icon-check" aria-hidden="true"></span>
        <span class="stepper-name">${step.name}</span>
        <span class="stepper-time">${step.time}</span>
        ${idx < activeStep ? '<span class="icon-check" aria-label="Complete"></span>' : idx === activeStep ? '<span class="icon-calendar" aria-label="Current"></span>' : ''}
      `;
      stepperList.appendChild(div);
    });
  }

  function animateProgress() {
    progress = (progress + 1) % 101;
    progressBar.style.width = progress + '%';
    progressBadge.textContent = progress + '% Complete';
  }

  function animateStepper() {
    activeStep = (activeStep + 1) % steps.length;
    renderStepper();
  }

  if (progressBar && progressBadge && stepperList) {
    renderStepper();
    setInterval(animateProgress, 100);
    setInterval(animateStepper, 2000);
  }

  // Community Stats
  const communityStats = [
    { label: 'Active Students', value: '12,847', icon: 'icon-file' },
    { label: 'Resumes Reviewed', value: '45,293', icon: 'icon-file' },
    { label: 'Success Stories', value: '3,421', icon: 'icon-file' },
    { label: 'Mentor Sessions', value: '8,156', icon: 'icon-file' },
  ];
  const statsGrid = document.getElementById('community-stats');
  if (statsGrid) {
    statsGrid.innerHTML = '';
    communityStats.forEach(stat => {
      const div = document.createElement('div');
      div.className = 'stats-card';
      div.innerHTML = `
        <div class="stats-icon ${stat.icon}"></div>
        <div class="stats-value">${stat.value}</div>
        <div class="stats-label">${stat.label}</div>
      `;
      statsGrid.appendChild(div);
    });
  }

  // Templates
  const featuredTemplates = [
    { name: 'Clean Tech', downloads: '2.3k', rating: 4.9, category: 'Most Popular' },
    { name: 'Modern SWE', downloads: '1.8k', rating: 4.8, category: 'Engineering' },
    { name: 'Data Focus', downloads: '1.2k', rating: 4.7, category: 'Analytics' },
    { name: 'Creative UX', downloads: '956', rating: 4.9, category: 'Design' },
  ];
  const templateGallery = document.getElementById('template-gallery');
  if (templateGallery) {
    templateGallery.innerHTML = '';
    featuredTemplates.forEach(t => {
      const div = document.createElement('div');
      div.className = 'card';
      div.innerHTML = `
        <div class="template-icon icon-file"></div>
        <div class="template-title">${t.name}</div>
        <div class="template-meta">
          <span>${t.downloads} downloads</span>
          <span>★ ${t.rating}</span>
        </div>
      `;
      templateGallery.appendChild(div);
    });
  }

  // Tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const tab = btn.getAttribute('data-tab');
      document.getElementById('tab-' + tab).classList.add('active');
    });
  });

  // Community Tab Content
  const communityTab = document.querySelector('.community-features');
  if (communityTab) {
    communityTab.innerHTML = `
      <div class="card">
        <div class="card-header"><span class="card-title">Peer Review Hub</span></div>
        <div class="card-content">
          <p>Get anonymous feedback from fellow students and give back to the community.</p>
          <div class="badge badge-accent">247 Reviews This Week</div>
          <div class="badge" style="background: #b8f2e6; color: #22223b;">Avg. Response Time: 2.3 hours</div>
        </div>
      </div>
      <div class="card">
        <div class="card-header"><span class="card-title">Success Stories</span></div>
        <div class="card-content">
          <p>Browse successful resumes from students who landed their dream internships.</p>
          <ul>
            <li>Google SWE Intern</li>
            <li>Meta Data Science</li>
            <li>Apple UX Design</li>
          </ul>
        </div>
      </div>
      <div class="card">
        <div class="card-header"><span class="card-title">Live Collaboration</span></div>
        <div class="card-content">
          <p>Join virtual review sessions and get real-time feedback from mentors.</p>
          <button class="btn btn-primary btn-sm">Join Next Session</button>
        </div>
      </div>
    `;
  }

  // Analysis Tab Content
  const analysisTab = document.querySelector('.analysis-features');
  if (analysisTab) {
    analysisTab.innerHTML = `
      <div>
        <h3>Real-Time Content Analysis</h3>
        <p>Get instant feedback on your resume content with AI-powered analysis tools that help you optimize for both ATS systems and human recruiters.</p>
        <div class="badge" style="background: #b8f2e6; color: #22223b;">Bullet Point Strength: Strong</div>
        <div class="badge badge-accent">Keyword Density: Optimal</div>
        <div class="badge" style="background: #7c83fd; color: #fff;">Readability Score: Excellent</div>
      </div>
      <div class="card">
        <div class="card-header"><span class="card-title">Achievement Translator</span></div>
        <div class="card-content">
          <div class="badge" style="background: #f9c0c0; color: #b22222;">WEAK</div>
          <div>Worked on a team project</div>
          <div class="icon-arrow"></div>
          <div class="badge" style="background: #b8f2e6; color: #22223b;">STRONG</div>
          <div>Collaborated with 5-person team to deliver project 2 weeks ahead of schedule, improving efficiency by 25%</div>
        </div>
      </div>
    `;
  }

  // Learning Tab Content
  const learningTab = document.querySelector('.learning-features');
  if (learningTab) {
    learningTab.innerHTML = `
      <div class="card">
        <div class="card-header"><span class="card-title">Role-Specific Guides</span></div>
        <div class="card-content">
          <ul>
            <li>Software Engineering</li>
            <li>Data Science</li>
            <li>UX Design</li>
            <li>Cybersecurity</li>
          </ul>
        </div>
      </div>
      <div class="card">
        <div class="card-header"><span class="card-title">Skill Gap Analysis</span></div>
        <div class="card-content">
          <ul>
            <li>React: <span style="color: #2ecc40;">Match</span></li>
            <li>Python: <span style="color: #f1c40f;">Improve</span></li>
            <li>AWS: <span style="color: #e74c3c;">Missing</span></li>
          </ul>
        </div>
      </div>
      <div class="card">
        <div class="card-header"><span class="card-title">Video Learning</span></div>
        <div class="card-content">
          <div class="icon-play" style="width:2em;height:2em;"></div>
          <div>"Red Flags Recruiters Spot in 6 Seconds"</div>
        </div>
      </div>
    `;
  }

  // Gamification Cards
  const gamificationGrid = document.getElementById('gamification-cards');
  if (gamificationGrid) {
    gamificationGrid.innerHTML = `
      <div class="card">
        <div class="card-header"><span class="card-title">7-Day Sprint Challenge</span></div>
        <div class="card-content">
          <ul>
            <li>Day 1: Contact Info <span class="icon-check"></span></li>
            <li>Day 2: Education <span class="icon-check"></span></li>
            <li>Day 3: Skills <span class="icon-calendar"></span></li>
            <li>Day 4: Projects <span class="icon-file"></span></li>
          </ul>
          <button class="btn btn-primary btn-sm">Continue Challenge</button>
        </div>
      </div>
      <div class="card">
        <div class="card-header"><span class="card-title">Achievement Badges</span></div>
        <div class="card-content">
          <div class="badge badge-accent">First Draft</div>
          <div class="badge" style="background: #b8f2e6; color: #22223b;">Peer Helper</div>
          <div class="badge" style="background: #7c83fd; color: #fff;">Mentor</div>
        </div>
      </div>
      <div class="card">
        <div class="card-header"><span class="card-title">Weekly Leaderboard</span></div>
        <div class="card-content">
          <ul>
            <li>1. Sarah J. - 47 reviews given</li>
            <li>2. Mike K. - 42 reviews given</li>
          </ul>
        </div>
      </div>
    `;
  }
});

// --- GitHub Guide Interactivity ---
document.addEventListener('DOMContentLoaded', function () {
  // Tab navigation
  const tabButtons = document.querySelectorAll('.gg-tab');
  const tabPanels = document.querySelectorAll('.gg-tab-panel');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(panel => panel.hidden = true);
      btn.classList.add('active');
      const tab = btn.getAttribute('data-tab');
      const panel = document.querySelector(`.gg-tab-panel[data-tab="${tab}"]`);
      if (panel) panel.hidden = false;
      btn.setAttribute('aria-selected', 'true');
      tabButtons.forEach(b => { if (b !== btn) b.setAttribute('aria-selected', 'false'); });
    });
  });

  // Milestones checklist
  const milestones = [
    { id: 0, title: "Create your first repository", completed: true },
    { id: 1, title: "Write a compelling README", completed: true },
    { id: 2, title: "Make your first commit", completed: false },
    { id: 3, title: "Create your first pull request", completed: false },
    { id: 4, title: "Add project documentation", completed: false },
    { id: 5, title: "Contribute to open source", completed: false },
  ];
  let checkedItems = [0, 1];
  const milestonesList = document.getElementById('gg-milestones-list');
  function renderMilestones() {
    milestonesList.innerHTML = '';
    milestones.forEach(milestone => {
      const div = document.createElement('div');
      div.className = 'gg-milestone' + (checkedItems.includes(milestone.id) ? ' completed' : '');
      div.tabIndex = 0;
      div.setAttribute('role', 'checkbox');
      div.setAttribute('aria-checked', checkedItems.includes(milestone.id));
      div.innerHTML = `
        <span class="gg-milestone-icon">${checkedItems.includes(milestone.id) ? '✅' : '⚪'}</span>
        <span>${milestone.title}</span>
        ${checkedItems.includes(milestone.id) ? '<span class="gg-badge">Completed</span>' : ''}
      `;
      div.addEventListener('click', () => toggleMilestone(milestone.id));
      div.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { toggleMilestone(milestone.id); e.preventDefault(); } });
      milestonesList.appendChild(div);
    });
    updateProgress();
  }
  function toggleMilestone(id) {
    if (checkedItems.includes(id)) {
      checkedItems = checkedItems.filter(item => item !== id);
    } else {
      checkedItems.push(id);
    }
    renderMilestones();
  }
  function updateProgress() {
    const completedCount = checkedItems.length;
    const percent = Math.round((completedCount / milestones.length) * 100);
    document.getElementById('gg-progress-percentage').textContent = percent + '%';
    document.getElementById('gg-progress-bar-inner').style.width = percent + '%';
    document.getElementById('gg-progress-count').textContent = completedCount;
  }
  if (milestonesList) renderMilestones();

  // Learning modules
  const learnModules = [
    { title: "Git Basics", description: "Learn essential Git commands and workflows", duration: "15 min", level: "Beginner", icon: '🌱' },
    { title: "README Mastery", description: "Create compelling project documentation", duration: "20 min", level: "Beginner", icon: '📄' },
    { title: "Open Source Contribution", description: "Make your first pull request", duration: "30 min", level: "Intermediate", icon: '🌍' },
    { title: "Profile Optimization", description: "Showcase your skills effectively", duration: "25 min", level: "Beginner", icon: '🧑‍💻' },
    { title: "Project Structure", description: "Organize your repositories professionally", duration: "18 min", level: "Intermediate", icon: '🗂️' },
    { title: "Community Building", description: "Engage with the developer community", duration: "22 min", level: "Beginner", icon: '👥' },
  ];
  const learnGrid = document.querySelector('.gg-learn-grid');
  if (learnGrid) {
    learnGrid.innerHTML = '';
    learnModules.forEach(module => {
      const card = document.createElement('div');
      card.className = 'gg-card';
      card.innerHTML = `
        <div class="gg-card-header"><span class="gg-tab-icon">${module.icon}</span> ${module.title}</div>
        <div class="gg-card-desc">${module.description}</div>
        <div class="gg-learn-meta">
          <span class="gg-badge">${module.level}</span>
          <span class="gg-learn-duration">${module.duration}</span>
        </div>
        <button class="gg-btn gg-btn-outline gg-btn-block mt-2"><span class="gg-btn-icon">▶️</span> Start Module</button>
      `;
      learnGrid.appendChild(card);
    });
  }

  // Community profiles
  const communityProfiles = [
    { name: "Alex Chen", level: "Beginner", projects: 8, stars: 24, avatar: '', description: "Full-stack developer passionate about React and Node.js", upvotes: 15 },
    { name: "Sarah Johnson", level: "Intermediate", projects: 15, stars: 67, avatar: '', description: "Frontend developer specializing in modern web technologies", upvotes: 32 },
    { name: "Mike Rodriguez", level: "Beginner", projects: 5, stars: 12, avatar: '', description: "Learning Python and data science fundamentals", upvotes: 8 },
  ];
  const communityGrid = document.getElementById('gg-community-grid');
  if (communityGrid) {
    communityGrid.innerHTML = '';
    communityProfiles.forEach(profile => {
      const card = document.createElement('div');
      card.className = 'gg-card';
      card.innerHTML = `
        <div class="gg-card-header">
          <span class="gg-tab-icon">👤</span> ${profile.name} <span class="gg-badge">${profile.level}</span>
        </div>
        <div class="gg-card-body">${profile.description}</div>
        <div class="gg-community-meta">
          <span>Projects: <b>${profile.projects}</b></span>
          <span>Stars: <b>${profile.stars}</b></span>
          <button class="gg-btn gg-btn-outline gg-btn-sm"><span class="gg-btn-icon">👍</span> ${profile.upvotes}</button>
        </div>
      `;
      communityGrid.appendChild(card);
    });
  }

  // Mentors
  const mentors = [
    { name: "Emily Davis", role: "Senior Frontend Developer", company: "Tech Corp", expertise: ["React", "TypeScript", "UI/UX"], rating: 4.9, sessions: 127 },
    { name: "David Kim", role: "Full Stack Engineer", company: "StartupXYZ", expertise: ["Node.js", "Python", "AWS"], rating: 4.8, sessions: 89 },
    { name: "Maria Garcia", role: "Open Source Maintainer", company: "OSS Foundation", expertise: ["Git", "Open Source", "Community"], rating: 5.0, sessions: 156 },
  ];
  const mentorsList = document.getElementById('gg-mentors-list');
  if (mentorsList) {
    mentorsList.innerHTML = '';
    mentors.forEach(mentor => {
      const card = document.createElement('div');
      card.className = 'gg-mentor-card';
      card.innerHTML = `
        <div><b>${mentor.name}</b></div>
        <div class="gg-mentor-role">${mentor.role} @ ${mentor.company}</div>
        <div class="gg-mentor-expertise">${mentor.expertise.map(skill => `<span class='gg-badge'>${skill}</span>`).join(' ')}</div>
        <div class="gg-mentor-rating"><span>⭐</span> ${mentor.rating} &middot; ${mentor.sessions} sessions</div>
        <button class="gg-btn gg-btn-block gg-btn-primary">Connect</button>
      `;
      mentorsList.appendChild(card);
    });
  }

  // README Editor live preview
  const readmeInput = document.getElementById('gg-readme-input');
  const readmePreview = document.getElementById('gg-readme-preview');
  if (readmeInput && readmePreview) {
    const defaultContent = `# Hi there 👋\n\nI'm a passionate developer learning to build amazing projects!\n\n## 🔭 I'm currently working on\n- Building my first full-stack application\n- Contributing to open source projects\n\n## 🌱 I'm currently learning\n- React and Next.js\n- TypeScript\n- Database design\n\n## 📫 How to reach me\n- Email: hello@example.com\n- LinkedIn: linkedin.com/in/yourprofile`;
    readmeInput.value = defaultContent;
    function renderPreview() {
      // Simple markdown to HTML (headings, lists, paragraphs)
      let text = readmeInput.value;
      text = text.replace(/^### (.*)$/gm, '<h3>$1</h3>');
      text = text.replace(/^## (.*)$/gm, '<h2>$1</h2>');
      text = text.replace(/^# (.*)$/gm, '<h1>$1</h1>');
      text = text.replace(/^\- (.*)$/gm, '<li>$1</li>');
      text = text.replace(/(<li>.*<\/li>)/gms, '<ul>$1</ul>');
      text = text.replace(/\n{2,}/g, '</p><p>');
      text = '<p>' + text + '</p>';
      readmePreview.innerHTML = text;
    }
    readmeInput.addEventListener('input', renderPreview);
    renderPreview();
  }
});

// --- LinkedIn Guide Interactivity ---
document.addEventListener('DOMContentLoaded', function () {
  if (!document.body.classList.contains('linkedin-guide')) return;

  // Tab navigation
  const tabButtons = document.querySelectorAll('.gg-tab');
  const tabPanels = document.querySelectorAll('.gg-tab-panel');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(panel => panel.hidden = true);
      btn.classList.add('active');
      const tab = btn.getAttribute('data-tab');
      const panel = document.querySelector(`.gg-tab-panel[data-tab="${tab}"]`);
      if (panel) panel.hidden = false;
      btn.setAttribute('aria-selected', 'true');
      tabButtons.forEach(b => { if (b !== btn) b.setAttribute('aria-selected', 'false'); });
    });
  });

  // --- Dashboard Tab ---
  const dashboardPanel = document.querySelector('.gg-tab-panel[data-tab="dashboard"]');
  if (dashboardPanel) {
    // Profile progress and checklist
    const profileSections = [
      { id: "photo", title: "Professional Photo", completed: true, points: 15 },
      { id: "headline", title: "Compelling Headline", completed: true, points: 20 },
      { id: "about", title: "About Section", completed: true, points: 25 },
      { id: "experience", title: "Experience/Projects", completed: false, points: 20 },
      { id: "education", title: "Education Details", completed: false, points: 10 },
      { id: "skills", title: "Skills & Endorsements", completed: false, points: 10 },
    ];
    const completedSections = profileSections.filter(s => s.completed).map(s => s.id);
    const profileProgress = Math.round((completedSections.length / profileSections.length) * 100);
    dashboardPanel.innerHTML = `
      <div class="gg-dashboard-grid">
        <div class="gg-card gg-progress-card">
          <div class="gg-card-header">Profile Strength</div>
          <div class="gg-card-body">
            <div class="gg-progress-percentage">${profileProgress}%</div>
            <div class="gg-progress-bar"><div class="gg-progress-bar-inner" style="width:${profileProgress}%"></div></div>
            <div class="gg-progress-desc">${completedSections.length} of ${profileSections.length} sections completed</div>
          </div>
        </div>
        <div class="gg-card">
          <div class="gg-card-header">Achievements</div>
          <div class="gg-card-body">
            <div class="gg-achievement-row">
              <span class="gg-achievement-icon">🏆</span>
              <div>
                <div class="gg-achievement-count">7</div>
                <div class="gg-achievement-label">Badges earned</div>
              </div>
            </div>
          </div>
        </div>
        <div class="gg-card">
          <div class="gg-card-header">Community Rank</div>
          <div class="gg-card-body">
            <div class="gg-achievement-row">
              <span class="gg-achievement-icon">⭐</span>
              <div>
                <div class="gg-achievement-count">#156</div>
                <div class="gg-achievement-label">This month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="gg-card gg-milestones-card">
        <div class="gg-card-header">Your LinkedIn Journey</div>
        <div class="gg-card-desc">Complete these sections to build a standout profile</div>
        <div class="gg-milestones-list">
          ${profileSections.map(section => `
            <div class="gg-milestone${section.completed ? ' completed' : ''}" tabindex="0" role="checkbox" aria-checked="${section.completed}">
              <span class="gg-milestone-icon">${section.completed ? '✅' : '⚪'}</span>
              <span>${section.title}</span>
              <span class="gg-badge">+${section.points} pts</span>
              ${section.completed ? '<span class="gg-badge">Completed</span>' : ''}
            </div>
          `).join('')}
        </div>
      </div>
      <div class="gg-dashboard-grid">
        <div class="gg-card">
          <div class="gg-card-header">Recent Feedback</div>
          <div class="gg-card-body">
            <div class="gg-feedback-row">
              <span class="gg-tab-icon">👤</span>
              <div class="gg-feedback-main">
                <div><b>John Doe</b> reviewed your headline</div>
                <div class="gg-feedback-time">2 hours ago</div>
              </div>
            </div>
            <div class="gg-feedback-row">
              <span class="gg-tab-icon">👤</span>
              <div class="gg-feedback-main">
                <div><b>Maria Smith</b> gave you a 5-star rating</div>
                <div class="gg-feedback-time">1 day ago</div>
              </div>
            </div>
          </div>
        </div>
        <div class="gg-card">
          <div class="gg-card-header">Upcoming Events</div>
          <div class="gg-card-body">
            <div class="gg-event-row">
              <span class="gg-tab-icon">📅</span>
              <div>
                <div class="gg-event-title">LinkedIn Workshop</div>
                <div class="gg-event-time">Tomorrow, 2:00 PM</div>
              </div>
            </div>
            <div class="gg-event-row">
              <span class="gg-tab-icon">🎥</span>
              <div>
                <div class="gg-event-title">Recruiter Q&A Session</div>
                <div class="gg-event-time">Friday, 4:00 PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // TODO: Render other tabs (builder, templates, community, analyzer, mentors, resources) with similar logic and data as in the React code.
});
