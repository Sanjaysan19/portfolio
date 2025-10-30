// ============================================
// PORTFOLIO CONFIGURATION
// Edit this section to customize your portfolio
// ============================================

const portfolioConfig = {
  // Personal Information
  personalInfo: {
    name: "Sanjay Kumar S",
    firstName: "Sanjay ",
    lastName: "Kumar",
    title: "Full-Stack Web Developer",
    tagline: "Passionate Full-stack developer skilled in modern web technologies",
    email: "s.sanjaykumar.dev@gmail.com",
    googleSheetsEmail: "s.sanjaykumar.dev@gmail.com",
    phone: "+918489417713",
    phoneDisplay: "+91 8489417713",
    location: "Chennai (Velachery), Tamil Nadu",
    linkedIn: "https://www.linkedin.com/in/sanjay-kumar-s-999ba824a",
    github: "https://github.com/sanjaykumar"
  },

  // Education
  education: [
    {
      institution: "Mailam Engineering College",
      degree: "Bachelor of Technology (Information Technology)",
      year: "2021 - 2025",
      percentage: "82%"
    },
    {
      institution: "Code99 IT Academy",
      course: "MERN Stack Development",
      year: "Recent Graduate"
    }
  ],

  // Skills with proficiency levels
  skills: [
    { name: "HTML5", level: 90, category: "Frontend" },
    { name: "CSS3", level: 85, category: "Frontend" },
    { name: "JavaScript", level: 88, category: "Frontend" },
    { name: "React.js", level: 85, category: "Frontend" },
    { name: "Bootstrap", level: 80, category: "Frontend" },
    { name: "Node.js", level: 75, category: "Backend" },
    { name: "MongoDB", level: 70, category: "Database" },
    { name: "Git & GitHub", level: 85, category: "Tools" },
    { name: "DevOps (GitHub Actions)", level: 65, category: "DevOps" }
  ],

  // Projects
  projects: [
    {
      title: "Mental Wellness Web App",
      description: "Responsive and interactive mental wellness application using React.js with daily habit tracking, mindfulness exercises, and self-awareness tools.",
      technologies: ["React.js", "HTML5", "CSS3", "JavaScript"],
      category: "Web Application",
      liveUrl: "www.vinoth-babu.com",
      githubUrl: ""
    },
    {
      title: "Fruits Ecommerce Website",
      description: "Dynamic e-commerce platform with shopping cart, checkout process, JavaScript form validations, and fully responsive design.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      category: "E-commerce",
      liveUrl: "www.fruitbunch.in",
      githubUrl: ""
    },
    {
      title: "Course Selling Platform",
      description: "Full-stack e-learning platform with Razorpay payment integration, email notifications, React.js frontend, and Node.js backend.",
      technologies: ["React.js", "Node.js", "Razorpay", "Nodemailer"],
      category: "Full-Stack",
      liveUrl: "",
      githubUrl: ""
    }
  ],

  // Google Sheets Configuration
  googleSheets: {
    scriptUrl: "REPLACE_WITH_YOUR_GOOGLE_APPS_SCRIPT_URL",
    sheetName: "Sheet1",
    headers: ["Date", "Name", "Email", "Message"]
  },

  // Color Scheme (easily customizable)
  colors: {
    primaryBlue: "#00BFFF",
    lightBlue: "#87CEEB",
    deepBlue: "#1E90FF",
    accentBlue: "#00D4FF",
    black: "#000000",
    darkGrey: "#1a1a1a",
    mediumGrey: "#2c2c2c",
    lightGrey: "#cccccc"
  }
};

// ============================================
// TO CUSTOMIZE YOUR PORTFOLIO:
// 1. Edit the portfolioConfig object above
// 2. Replace Google Apps Script URL in googleSheets.scriptUrl
// 3. Update colors in the colors section
// 4. Add your actual project URLs
// 5. Update social media links
// ============================================

// ============================================
// ULTRA-MODERN PORTFOLIO - ADVANCED ANIMATIONS
// ============================================

// Navigation functionality
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navClose = document.getElementById('navClose');
const navLinks = document.querySelectorAll('.nav-link');
const backToTop = document.getElementById('backToTop');
const scrollProgress = document.getElementById('scrollProgress');
const particlesContainer = document.getElementById('particles');

// Navbar scroll effect & scroll progress
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Back to top button
  if (window.scrollY > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }

  // Scroll progress indicator
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (window.scrollY / windowHeight) * 100;
  scrollProgress.style.width = scrolled + '%';
});

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
});

// Close menu button
navClose.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  document.body.style.overflow = 'auto';
});

// Smooth scroll and close menu on link click
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }

    // Close mobile menu
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
});

// Back to top button
backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Scroll animations for skill bars
const observerOptions = {
  threshold: 0.5,
  rootMargin: '0px 0px -100px 0px'
};

const animateOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('skill-progress')) {
        const progress = entry.target.getAttribute('data-progress');
        entry.target.style.setProperty('--progress-width', progress + '%');
        entry.target.classList.add('animated');
      }
    }
  });
}, observerOptions);

// Observe all skill progress bars
const skillBars = document.querySelectorAll('.skill-progress');
skillBars.forEach(bar => {
  animateOnScroll.observe(bar);
});

// ============================================
// GOOGLE SHEETS INTEGRATION FOR CONTACT FORM
// ============================================

// IMPORTANT: Replace this URL with your actual Google Apps Script Web App URL
// Follow the setup instructions in the HTML comments above the contact form
const GOOGLE_SCRIPT_URL = portfolioConfig.googleSheets.scriptUrl;

// Contact form handling with Google Sheets integration
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const submitBtn = document.getElementById('submitBtn');
const btnText = submitBtn?.querySelector('.btn-text');
const btnLoader = submitBtn?.querySelector('.btn-loader');

// Toast notification function
function showToast(message, type = 'success') {
  // Remove any existing toasts
  const existingToast = document.querySelector('.toast-notification');
  if (existingToast) {
    existingToast.remove();
  }

  const toast = document.createElement('div');
  toast.className = `toast-notification toast-${type}`;
  toast.innerHTML = `
    <div class="toast-content">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        ${type === 'success' 
          ? '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>'
          : '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>'}
      </svg>
      <span>${message}</span>
    </div>
  `;
  
  document.body.appendChild(toast);
  
  // Trigger animation
  setTimeout(() => toast.classList.add('show'), 10);
  
  // Remove after 5 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 5000);
}

// Form submission handler
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  // Check if Google Script URL is configured
  if (GOOGLE_SCRIPT_URL === 'REPLACE_WITH_YOUR_GOOGLE_APPS_SCRIPT_URL') {
    showToast(
      `⚠️ Google Sheets not configured yet. Please check the setup instructions in the HTML comments. You can still email me directly at ${portfolioConfig.personalInfo.email}`,
      'error'
    );
    return;
  }
  
  // Get form data
  const formData = new FormData(contactForm);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  
  // Validate form
  if (!name || !email || !message) {
    showToast('Please fill in all fields', 'error');
    return;
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showToast('Please enter a valid email address', 'error');
    return;
  }
  
  // Show loading state
  submitBtn.disabled = true;
  btnText.style.display = 'none';
  btnLoader.style.display = 'inline-flex';
  submitBtn.style.opacity = '0.7';
  
  try {
    // Send to Google Sheets
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: formData,
      mode: 'no-cors' // Important for Google Apps Script
    });
    
    // Note: With mode: 'no-cors', we won't get a response, but the request will be sent
    // Show success message
    showToast(
      `✨ Thank you, ${name}! Your message has been sent successfully. I'll get back to you soon at ${email}!`,
      'success'
    );
    
    // Show success animation
    contactForm.style.display = 'none';
    formSuccess.classList.add('show');
    
    // Reset form and show it again after 5 seconds
    setTimeout(() => {
      contactForm.reset();
      formSuccess.classList.remove('show');
      contactForm.style.display = 'block';
      submitBtn.disabled = false;
      btnText.style.display = 'inline';
      btnLoader.style.display = 'none';
      submitBtn.style.opacity = '1';
    }, 5000);
    
  } catch (error) {
    console.error('Error submitting form:', error);
    
    // Show error message with fallback
    showToast(
      `❌ Oops! Something went wrong. Please try again or email me directly at ${portfolioConfig.personalInfo.email}`,
      'error'
    );
    
    // Reset button state
    submitBtn.disabled = false;
    btnText.style.display = 'inline';
    btnLoader.style.display = 'none';
    submitBtn.style.opacity = '1';
  }
});

// Add form field validation on input
const formInputs = contactForm.querySelectorAll('.form-control');
formInputs.forEach(input => {
  input.addEventListener('input', function() {
    if (this.value.trim()) {
      this.style.borderColor = 'var(--sky-blue-primary)';
    } else {
      this.style.borderColor = 'var(--color-border)';
    }
  });
  
  input.addEventListener('blur', function() {
    if (!this.value.trim()) {
      this.style.borderColor = 'var(--color-border)';
    }
  });
});

// Smooth scroll for CTA buttons
const ctaButtons = document.querySelectorAll('.hero-buttons .btn');
ctaButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = button.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Add fade-in animation to sections on scroll
const fadeInElements = document.querySelectorAll('.education-card, .project-card, .skill-category');

const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, index * 100);
      fadeInObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

// This is now handled by initStaggeredAnimations() function

// Prevent default action on project buttons (since they're demos)
const projectButtons = document.querySelectorAll('.projects-btn');
const projectURL = ["https://www.agrisa.co.in/",
                    "https://www.fruitbunch.in/",
                    "https://www.genius-minds.co.in/",
                    "https://www.vinoth-babu.com"
                        ]
projectButtons.forEach( (button ,index) => {
  button.addEventListener('click', () => {
    const link =projectURL[index];
    if(link){
   window.open(link, "_blank");
    // You can add custom logic here for viewing projects
    console.log(`Project button clicked ${index + 0}:${link}`);
    }else{
      alert(`under maintance  ${index + 0}`);
    }
  });
});

// ============================================
// PARTICLE SYSTEM
// ============================================
function createParticles() {
  const particleCount = 50;
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 10 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    particlesContainer.appendChild(particle);
  }
}

// ============================================
// MAGNETIC CURSOR EFFECT
// ============================================
let cursorGlow = null;

function createCursorGlow() {
  cursorGlow = document.createElement('div');
  cursorGlow.classList.add('cursor-glow');
  document.body.appendChild(cursorGlow);

  document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
  });
}

// ============================================
// 3D TILT EFFECT FOR PROJECT CARDS
// ============================================
function init3DTilt() {
  const cards = document.querySelectorAll('.project-card');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px) scale(1.03)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
    });
  });
}

// ============================================
// TYPING ANIMATION FOR HERO SUBTITLE
// ============================================
function typeWriter() {
  const subtitle = document.querySelector('.hero-subtitle');
  if (!subtitle) return;
  
  const text = subtitle.textContent;
  subtitle.textContent = '';
  subtitle.style.borderRight = '2px solid var(--sky-blue-primary)';
  
  let i = 0;
  const speed = 100;
  
  function type() {
    if (i < text.length) {
      subtitle.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      setTimeout(() => {
        subtitle.style.borderRight = 'none';
      }, 500);
    }
  }
  
  setTimeout(type, 500);
}

// ============================================
// INTERSECTION OBSERVER FOR STAGGERED ANIMATIONS
// ============================================
function initStaggeredAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe elements
  document.querySelectorAll('.education-card, .project-card, .skill-category').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    el.dataset.delay = index * 100;
    observer.observe(el);
  });
}

// ============================================
// GLOWING BUTTON RIPPLE EFFECT
// ============================================
function initButtonRipples() {
  const buttons = document.querySelectorAll('.btn-primary');
  
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const ripple = document.createElement('span');
      ripple.style.position = 'absolute';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.style.width = '0';
      ripple.style.height = '0';
      ripple.style.borderRadius = '50%';
      ripple.style.background = 'rgba(255, 255, 255, 0.6)';
      ripple.style.transform = 'translate(-50%, -50%)';
      ripple.style.animation = 'ripple 0.6s ease-out';
      
      this.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  });
}

// Add ripple animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to {
      width: 300px;
      height: 300px;
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// ============================================
// SMOOTH SECTION REVEAL WITH COUNTER ANIMATION
// ============================================
function animateCounters() {
  const percentages = document.querySelectorAll('.skill-percentage');
  
  percentages.forEach(percentage => {
    const target = parseInt(percentage.textContent);
    let current = 0;
    const increment = target / 50;
    
    const updateCounter = () => {
      if (current < target) {
        current += increment;
        percentage.textContent = Math.ceil(current) + '%';
        requestAnimationFrame(updateCounter);
      } else {
        percentage.textContent = target + '%';
      }
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateCounter();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(percentage);
  });
}

// ============================================
// PAGE LOAD ANIMATION
// ============================================
function initPageLoad() {
  document.documentElement.classList.add('loading');
  
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.documentElement.classList.remove('loading');
    }, 100);
  });
}
//view-button=======
// const viewBtn = document.getElementById("project-btn");
// const projectURL = "https://www.vinoth-babu.com/";
// viewBtn.addEventListener("click", () => {
//   window.open(projectURL, "_blank"); // Opens in a new tab
// });
// ============================================
// INITIALIZE ALL ANIMATIONS
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Ultra-Modern Portfolio Initialized!');
  
  // Initialize all features
  createParticles();
  createCursorGlow();
  init3DTilt();
  typeWriter();
  initStaggeredAnimations();
  initButtonRipples();
  animateCounters();
  initPageLoad();
  
  console.log('✨ All animations loaded successfully!');
});