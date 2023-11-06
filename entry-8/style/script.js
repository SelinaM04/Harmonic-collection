document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('#navigation li');
    const mainContentTitle = document.querySelector('.main-content h1'); // Corrected the selector

    navItems.forEach((item, index) => {
        // Delay each item's fade-in by an additional 500ms
        setTimeout(() => {
            item.style.opacity = 1; // Fade in nav item
        }, index * 500);
    });

    // Calculate total time to wait before fading in the title
    // 500ms delay for each item, plus an additional 1 second for the fade effect
    const totalDelay = navItems.length * 500 + 1000;

    // Set timeout to fade in the title after the last nav item
    setTimeout(() => {
        mainContentTitle.style.opacity = 1; // Fade in title
    }, totalDelay);
});
