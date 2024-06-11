document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        if (body.classList.contains('dark')) {
            themeToggle.textContent = 'Modo Claro';
        } else {
            themeToggle.textContent = 'Modo Escuro';
        }
    });

    // Set the initial theme based on user preference or default to light mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark');
        themeToggle.textContent = 'Modo Claro';
    }
});
