const DarkModeStatus = window.localStorage.getItem('dark-mode')

if (DarkModeStatus != 'null') {
    try {
    const NavLinks = document.getElementById('navigation-links')
	const LogoText = document.getElementById('logo')
    NavLinks.style.color = '#fff'
	LogoText.style.color = '#fff'
    } catch (e) {
        console.log(e)
    }

}