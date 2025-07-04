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
