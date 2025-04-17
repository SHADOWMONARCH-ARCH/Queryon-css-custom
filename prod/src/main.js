function toggleTheme() {
    const body = document.body;
    const current = body.classList.contains('dark-mode');
    body.classList.toggle('dark-mode', !current);
  }

  // Optional: auto-switch based on system theme
  (function initTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const body = document.body;
    if (!body.classList.contains('dark-mode') && prefersDark) {
      body.classList.add('dark-mode');
    }
  })();