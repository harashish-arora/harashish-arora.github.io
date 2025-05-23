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

// Theme switching logic here

// Words of Wisdom Quotes
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "Do not wait to strike till the iron is hot; but make it hot by striking. - William Butler Yeats",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar"
];

// Randomly select a quote
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

// Display the quote in the #wisdom-quote element
document.getElementById('wisdom-quote').textContent = randomQuote;

function updateClock() {
    const clockElement = document.getElementById('clock');
    if (!clockElement) return; // Avoid errors if the clock element is missing

    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Month is 0-based
    const year = now.getFullYear();

    const currentTime = `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
    clockElement.textContent = currentTime;
}

// Initial call to display the time immediately
updateClock();
// Update the time every second
setInterval(updateClock, 1000);

// Animated Gallery Script
const galleryImages = document.querySelectorAll('.gallery-image');
let currentImageIndex = 0;

function switchImage() {
    galleryImages[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    galleryImages[currentImageIndex].classList.add('active');
}

// Start slideshow
setInterval(switchImage, 4000); // Change image every 4 seconds

