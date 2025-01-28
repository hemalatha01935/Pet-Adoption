// Add hover effects for social icons in the footer
document.querySelectorAll('.icons .fa').forEach((icon) => {
    icon.addEventListener('mouseenter', () => {
        icon.style.color = '#ffa726';
    });
    icon.addEventListener('mouseleave', () => {
        icon.style.color = '#f44336';
    });
});
