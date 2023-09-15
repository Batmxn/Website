const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const navHeader = document.querySelector('header nav h1');
const heroText = document.querySelector('.hero');

if (!window.localStorage.getItem('dark-mode')) {
    window.localStorage.setItem('dark-mode', 'false')
    body.classList.remove('dark-mode');
    navHeader.style.color = '#333'; // Default text color
    heroText.style.color = '#fff'; // Default text color
} else {
    const DarkmodeState = window.localStorage.getItem('dark-mode')

    if (DarkmodeState === 'true') {
        body.classList.add('dark-mode');
        navHeader.style.color = '#333'; // Text color in dark mode
        heroText.style.color = '#fff'; // Text color in dark mode
    } else {
        body.classList.remove('dark-mode');
        navHeader.style.color = '#333'; // Default text color
        heroText.style.color = '#333'; // Default text color
    }
}

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        window.localStorage.setItem('dark-mode','true')
        body.classList.add('dark-mode');
        navHeader.style.color = '#333'; // Text color in dark mode
        heroText.style.color = '#fff'; // Text color in dark mode
    } else {
        window.localStorage.setItem('dark-mode','false')
        body.classList.remove('dark-mode');
        navHeader.style.color = '#333'; // Default text color
        heroText.style.color = '#fff'; // Default text color
    }
});