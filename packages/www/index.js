window.addEventListener('load', () => {
  const form = document.getElementById('form');
  const success = document.getElementById('success');
  const emailInput = document.getElementById('email');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = emailInput.value;

    if (!email) {
      return;
    }

    form.classList.add('hidden');
    success.classList.add('visible');

    fetch('https://backend.vocably.pro/email', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  });
});
