// Great Job adding in detailed comments on your JS pages
// Projects page functionality
document.addEventListener('DOMContentLoaded', function() {
  console.log('Projects page loaded successfully');

  // Animate project items on scroll
  const projectItems = document.querySelectorAll('.project-item');

  const animateOnScroll = () => {
    projectItems.forEach(item => {
      const itemTop = item.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (itemTop < windowHeight * 0.8) {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }
    });
  };

  // Initial setup for animation
  projectItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'all 0.6s ease';
  });

  // Animate on load and scroll
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);

  // Add hover effects for project items
  projectItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
    });

    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = 'none';
    });
  });

  // Add click tracking for project interactions
  projectItems.forEach((item, index) => {
    item.addEventListener('click', function() {
      console.log(`Project ${index + 1} clicked: ${this.querySelector('.project-title').textContent}`);
    });
  });

  // Simple project filter/search functionality
  const createProjectSearch = () => {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search projects...';
    searchInput.className = 'project-search';
    searchInput.style.cssText = `
            width: 100%;
            max-width: 400px;
            padding: 10px;
            margin: 20px auto;
            display: block;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 16px;
        `;

    const container = document.querySelector('.container');
    const title = container.querySelector('.page-title');
    title.insertAdjacentElement('afterend', searchInput);

    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();

      projectItems.forEach(item => {
        const title = item.querySelector('.project-title').textContent.toLowerCase();
        const details = item.querySelector('.project-details').textContent.toLowerCase();

        if (title.includes(searchTerm) || details.includes(searchTerm)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  };

  // Initialize search functionality
  createProjectSearch();
});
