emailjs.init({
  publicKey: 'rNNP43bprqgFovXvD',
});

// Page Load Animations

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

// Form Actions

document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));

const form = document.getElementById('form');
const submitBtn = document.getElementById('submit');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  console.log('Form submitted');

  const formData = new FormData(form);

  const data = {
    name: formData.get('name'),
    contactNumber: formData.get('number'),
    email: formData.get('email'),
    service: formData.get('services'),
    description: formData.get('describe'),
  };

  console.log(data);

  try {
    await emailjs.send('service_g5pb5l9', 'template_5qkj1bi', data);

    submitBtn.textContent = 'Message Sent ✓';

    form.reset();

    setTimeout(() => {
      submitBtn.textContent = 'Send Message';
      submitBtn.disabled = false;
    }, 3000);
  } catch (error) {
    console.log('Email failed:', error);

    submitBtn.textContent = 'Try Again';
    submitBtn.disabled = false;
  }
});
