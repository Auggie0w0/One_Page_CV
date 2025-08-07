// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeButton = document.getElementById('theme-button');
    const themeIcon = document.getElementById('theme-icon');
    const root = document.documentElement;
    
    // Check for saved theme preference or use default
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    
    // Toggle theme when button is clicked
    themeButton.addEventListener('click', function() {
        const currentTheme = root.classList.contains('dark-theme') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
    
    function setTheme(theme) {
        if (theme === 'dark') {
            root.classList.remove('light-theme');
            root.classList.add('dark-theme');
            themeIcon.textContent = '☀️';
        } else {
            root.classList.remove('dark-theme');
            root.classList.add('light-theme');
            themeIcon.textContent = '🌙';
        }
    }
});
