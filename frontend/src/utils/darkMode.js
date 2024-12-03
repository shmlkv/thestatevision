// Function to toggle dark mode
function toggleDarkMode() {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('darkMode', 'light');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('darkMode', 'dark');
  }
}

}
}

// Call setInitialDarkMode when the page loads
document.addEventListener('DOMContentLoaded', setInitialDarkMode);

export { setInitialDarkMode, toggleDarkMode };

