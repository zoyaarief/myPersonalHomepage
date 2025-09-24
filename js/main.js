// Main page functionality
document.addEventListener('DOMContentLoaded', function() {
  console.log('Homepage loaded successfully');

  // Simple fade-in animation for hero section
  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    heroSection.style.opacity = '0';
    heroSection.style.transform = 'translateY(20px)';
    heroSection.style.transition = 'all 0.8s ease';

    setTimeout(() => {
      heroSection.style.opacity = '1';
      heroSection.style.transform = 'translateY(0)';
    }, 100);
  }

  // Add smooth scrolling for better user experience
  const smoothScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  // Add click handlers for smooth navigation
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Only apply smooth scroll to internal links (starting with #)
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        smoothScroll(this.getAttribute('href'));
      }
    });
  });

  // Add scroll-based animations for sections
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all sections for scroll animations
  const sections = document.querySelectorAll('.about-section, .education-section, .skills-section');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
  });
});
