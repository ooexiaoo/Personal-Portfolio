const lightTheme = {
    '--backdrop-filter': 'blur(50px) saturate(200%)',
    '--webkit-backdrop-filter': 'blur(50px) saturate(200%)',
    '--background-color': 'rgba(255, 255, 255, 0.2)',
    '--border-radius': '12px',
    '--border': '1px solid rgba(209, 213, 219, 0.3)',
};

const darkTheme = {
    '--backdrop-filter': 'blur(6px) saturate(200%)',
    '--webkit-backdrop-filter': 'blur(6px) saturate(200%)',
    '--background-color': 'rgba(86, 0, 110, 0.75)',
    '--border-radius': '12px',
    '--border': '1px solid rgba(241, 190, 255, 0.2)',
};

const lightBackground = {
    backgroundImage: 'url("/Personal site mood board/1.webp")'
};

const darkBackground = {
    backgroundImage: 'url("/Personal site mood board/2.webp")'
};

// Get references to the theme toggle switch and its label
const themeToggle = document.getElementById('theme-toggle');
const themeToggleLabel = document.querySelector('.switch');

// Get references to the sun and moon images
const sunImage = document.getElementById('sun-image');
const moonImage = document.getElementById('moon-image');

// Determine the initial theme based on user's preference (you can use local storage or other methods)
const userPreference = localStorage.getItem('themePreference');

// Function to apply the theme based on user preference
function applyInitialTheme() {
    if (userPreference === 'dark') {
        applyTheme(darkTheme);
        sunImage.style.display = 'inline'; // Show the sun image
        moonImage.style.display = 'none'; // Hide the moon image
        themeToggle.checked = true;
    } else {
        applyTheme(lightTheme);
        sunImage.style.display = 'none'; // Hide the sun image
        moonImage.style.display = 'inline'; // Show the moon image
        themeToggle.checked = false;
    }
    applyBackground(userPreference);
}

// Apply the initial theme
applyInitialTheme();

// Add event listener to the theme toggle switch
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        applyTheme(darkTheme);
        sunImage.style.display = 'inline'; // Show the sun image
        moonImage.style.display = 'none'; // Hide the moon image
        localStorage.setItem('themePreference', 'dark'); // Save user preference
        applyBackground('dark');
    } else {
        applyTheme(lightTheme);
        sunImage.style.display = 'none'; // Hide the sun image
        moonImage.style.display = 'inline'; // Show the moon image
        localStorage.setItem('themePreference', 'light'); // Save user preference
        applyBackground('light');
    }
});

function applyTheme(theme) {
    const root = document.documentElement;
    for (const [property, value] of Object.entries(theme)) {
        root.style.setProperty(property, value);
    }
}

function applyBackground(themePreference) {
    document.body.style.backgroundImage = themePreference === 'dark' ? darkBackground.backgroundImage : lightBackground.backgroundImage;
}