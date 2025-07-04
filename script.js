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
