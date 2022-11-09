function sunToMoon() {
	document.querySelector(".theme-icon").setAttribute("data-feather", "moon");
	feather.replace()
}

function moonToSun() {
	document.querySelector(".theme-icon").setAttribute("data-feather", "sun");
	feather.replace()
}

var currentTheme;

function checkTheme() {
	currentTheme = localStorage.getItem("theme");
	console.log(currentTheme);

	if (currentTheme === null) {
		localStorage.setItem("theme", "light-theme");
		document.body.classList.add("light-theme");
		sunToMoon();

		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.body.classList.add("dark-theme");
			moonToSun();
			localStorage.setItem("theme", "dark-theme");
		}

		else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
			document.body.classList.add("light-theme");
			sunToMoon();
			localStorage.setItem("theme", "light-theme");
		}
	}

	else if (currentTheme === "light-theme") {
		document.body.classList.add("light-theme");
		sunToMoon();
	}

	else if (currentTheme === "dark-theme") {
		document.body.classList.add("dark-theme");
		moonToSun();
	}

	else {
		localStorage.clear();
	}
}

function changeTheme() {
	currentTheme = localStorage.getItem("theme");
	console.log(currentTheme);

	if (currentTheme === "light-theme") {
		document.body.classList.remove("light-theme");
		document.body.classList.add("dark-theme");
		localStorage.setItem("theme", "dark-theme");
		moonToSun();
	}

	else if (currentTheme === "dark-theme") {
		document.body.classList.remove("dark-theme");
		document.body.classList.add("light-theme");
		localStorage.setItem("theme", "light-theme");
		sunToMoon();
	}

	currentTheme = localStorage.getItem("theme");
	console.log(currentTheme);
}

checkTheme();
