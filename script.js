const themeSwitcher = document.getElementById('theme-switcher');
const githubLink = document.getElementById('github');
const emailLink = document.getElementById('email');

// Theme switching logic
themeSwitcher.addEventListener('click', () => {
    if (document.documentElement.classList.contains('dark-theme')) {
        document.documentElement.classList.remove('dark-theme');
        document.documentElement.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.classList.remove('light-theme');
        document.documentElement.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    }
});
