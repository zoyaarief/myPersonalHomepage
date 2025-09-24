// Contact form functionality
document.addEventListener('DOMContentLoaded', function() {
  console.log('Contact page loaded successfully');

  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      // Simple form validation
      if (name && email && message) {
        // Simulate form submission
        showSuccessMessage(name);
        contactForm.reset();
      } else {
        showErrorMessage('Please fill in all fields.');
      }
    });

    // Add real-time validation
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', function() {
        validateField(this);
      });

      input.addEventListener('input', function() {
        clearErrorState(this);
      });
    });
  }

  function validateField(field) {
    const value = field.value.trim();
    if (!value) {
      setErrorState(field, 'This field is required');
    } else if (field.type === 'email' && !isValidEmail(value)) {
      setErrorState(field, 'Please enter a valid email address');
    } else {
      clearErrorState(field);
    }
  }

  function setErrorState(field, message) {
    field.style.borderColor = '#dc3545';
    showFieldError(field, message);
  }

  function clearErrorState(field) {
    field.style.borderColor = '#ddd';
    hideFieldError(field);
  }

  function showFieldError(field, message) {
    let errorElement = field.parentNode.querySelector('.error-message');
    if (!errorElement) {
      errorElement = document.createElement('div');
      errorElement.className = 'error-message';
      errorElement.style.color = '#dc3545';
      errorElement.style.fontSize = '0.875rem';
      errorElement.style.marginTop = '0.25rem';
      field.parentNode.appendChild(errorElement);
    }
    errorElement.textContent = message;
  }

  function hideFieldError(field) {
    const errorElement = field.parentNode.querySelector('.error-message');
    if (errorElement) {
      errorElement.remove();
    }
  }

  function showSuccessMessage(name) {
    alert(`Thank you ${name}! Your message has been received.`);
  }

  function showErrorMessage(message) {
    alert(message);
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Add character counter for message field
  const messageField = document.getElementById('message');
  if (messageField) {
    const counter = document.createElement('div');
    counter.className = 'char-counter';
    counter.style.cssText = `
            text-align: right;
            font-size: 0.875rem;
            color: #666;
            margin-top: 0.25rem;
        `;
    messageField.parentNode.appendChild(counter);

    const updateCounter = () => {
      const currentLength = messageField.value.length;
      const maxLength = 500;
      counter.textContent = `${currentLength}/${maxLength} characters`;

      if (currentLength > maxLength * 0.9) {
        counter.style.color = '#dc3545';
      } else {
        counter.style.color = '#666';
      }
    };

    messageField.addEventListener('input', updateCounter);
    updateCounter(); // Initialize counter
  }
});
