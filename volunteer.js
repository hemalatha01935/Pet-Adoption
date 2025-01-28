// Function to open the volunteer form in a new tab
function redirectToForm() {
    // Path to the volunteer form file
    const formUrl = "volunteer_form.html"; // Make sure the file name matches your form's file
    window.open(formUrl, "_blank"); // Open in a new tab
  }
  
document.querySelectorAll('.icons .fa').forEach((icon) => {
    icon.addEventListener('mouseenter', () => {
        icon.style.color = '#ffa726';
    });
    icon.addEventListener('mouseleave', () => {
        icon.style.color = '#f44336';
    });
});
