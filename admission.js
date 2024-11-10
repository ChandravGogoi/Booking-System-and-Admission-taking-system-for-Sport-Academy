document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('enrollment-modal');
  const enrollButtons = document.querySelectorAll('.enroll-btn');
  const closeButton = document.querySelector('.close');
  const enrollmentForm = document.getElementById('enrollment-form');
  const selectedCourseSpan = document.getElementById('selected-course');

  enrollButtons.forEach(button => {
      button.addEventListener('click', () => {
          const courseName = button.getAttribute('data-course');
          selectedCourseSpan.textContent = courseName;
          modal.style.display = 'block';
      });
  });

  closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  });

  enrollmentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('enroll-name').value;
      const email = document.getElementById('enroll-email').value;
      const phone = document.getElementById('enroll-phone').value;
      const course = selectedCourseSpan.textContent;

      // Here you would typically send this data to a server
      console.log(`Enrollment submitted for ${course}:`, { name, email, phone });

      alert('Thank you for enrolling! We will contact you soon.');
      modal.style.display = 'none';
      enrollmentForm.reset();
  });

  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // Here you would typically send this data to a server
      console.log('Contact form submitted:', { name, email, message });

      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
  });
});