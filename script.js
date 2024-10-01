const themeSwitcher = document.getElementById('theme-switcher');
const githubLink = document.getElementById('github');
const emailLink = document.getElementById('email');

// Check for saved theme in local storage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
    githubLink.classList.remove('light'); // Remove light class
    githubLink.classList.add('dark'); // Add dark class
    emailLink.classList.remove('light'); // Remove light class
    emailLink.classList.add('dark'); // Add dark class
}

themeSwitcher.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    // Change the class of the GitHub link based on the theme
    if (document.body.classList.contains('dark-theme')) {
        githubLink.classList.remove('light'); // Remove light class
        githubLink.classList.add('dark'); // Add dark class
        emailLink.classList.remove('light'); // Remove light class
        emailLink.classList.add('dark'); // Add dark class
        localStorage.setItem('theme', 'dark'); // Save theme in local storage
    } else {
        githubLink.classList.remove('dark'); // Remove dark class
        githubLink.classList.add('light'); // Add light class
        emailLink.classList.remove('dark'); // Remove dark class
        emailLink.classList.add('light'); // Add light class
        localStorage.setItem('theme', 'light'); // Save theme in local storage
    }
});
