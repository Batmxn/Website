const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const heroText = document.querySelector('.hero') ?? undefined;

if (!window.localStorage.getItem('dark-mode')) {
	window.localStorage.setItem('dark-mode', 'false');
    body.classList.remove('dark-mode');
    if (heroText) {
	    heroText.style.color = '#fff'; // Default text color
    }

} else {
	const DarkmodeState = window.localStorage.getItem('dark-mode');

	if (DarkmodeState === 'true') {
		body.classList.add('dark-mode');
		if (heroText) {
	        heroText.style.color = '#fff'; // Default text color
        }
		darkModeToggle.checked = true;
	} else {
		body.classList.remove('dark-mode');
		if (heroText) {
	        heroText.style.color = '#fff'; // Default text color
        }
		darkModeToggle.checked = false;
	}
}

darkModeToggle.addEventListener('change', () => {
	if (darkModeToggle.checked) {
		window.localStorage.setItem('dark-mode', 'true');
		body.classList.add('dark-mode');
		if (heroText) {
	        heroText.style.color = '#fff'; // Default text color
        }
	} else {
		window.localStorage.setItem('dark-mode', 'false');
		body.classList.remove('dark-mode');
		if (heroText) {
	        heroText.style.color = '#fff'; // Default text color
        }
	}
});
