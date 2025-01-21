function showCategory(categoryId) {
    const categories = document.querySelectorAll('.portfolio-category');
    categories.forEach(category => {
        if (category.id === categoryId) {
            category.classList.add('active');
        } else {
            category.classList.remove('active');
        }
    });
}




// Initialize EmailJS with your User ID
emailjs.init("YOUR_EMAILJS_USER_ID");

// Form submission handler
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Collect form data
    const formData = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    // Send email using EmailJS
    emailjs
        .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
        .then(() => {
            alert("Message sent successfully!");
            document.getElementById("contactForm").reset();
        })
        .catch(error => {
            console.error("Error sending message:", error);
            alert("Failed to send message. Please try again later.");
        });
});

