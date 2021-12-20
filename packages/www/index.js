window.addEventListener('load', () => {
  const form = document.getElementById('form');
  const success = document.getElementById('success');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.classList.add('hidden');
    success.classList.add('visible');
  });
});
