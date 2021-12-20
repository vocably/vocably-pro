window.addEventListener('load', () => {
  const form = document.getElementById('form');
  const success = document.getElementById('success');
  const email = document.getElementById('email');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.classList.add('hidden');
    success.classList.add('visible');

    fetch('https://backend.vocably.pro/email', {
      method: 'POST',
      body: JSON.stringify({ email: email.value }),
    });
  });
});
