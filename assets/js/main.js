// Minimal enhancements: smooth scroll and theme toggle placeholder
(function(){
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(l => l.addEventListener('click', e => {
    const target = document.querySelector(l.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }));

  const toggle = document.querySelector('[data-theme-toggle]');
  if(toggle){
    toggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('light');
    });
  }
})();
