emailjs.init({
  publicKey: 'rNNP43bprqgFovXvD',
});

// Header Hide

const header = document.getElementById('header');
const logo = document.getElementById('headerLogo');

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 300) {
    header.classList.add('header-hide');
    logo.classList.add('header-logo-hide');
  } else {
    header.classList.remove('header-hide');
  }
  lastScrollY = currentScrollY;
});

// Form Actions

document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));

const form = document.getElementById('form');
const submitBtn = document.getElementById('submit');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';

  const formData = new FormData(form);

  const data = {
    name: formData.get('name'),
    contactNumber: formData.get('number'),
    email: formData.get('email'),
    service: formData.get('services'),
    description: formData.get('describe'),
  };

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
