const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const navHeader = document.querySelector('header nav h1');
const heroText = document.querySelector('.hero');

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
        navHeader.style.color = '#fff'; // Text color in dark mode
        heroText.style.color = '#fff'; // Text color in dark mode
    } else {
        body.classList.remove('dark-mode');
        navHeader.style.color = '#333'; // Default text color
        heroText.style.color = '#fff'; // Default text color
    }
});
