// Contact form submission (you can integrate with a back-end API for actual submission)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for contacting us, ' + name + '. We will get back to you soon!');
        // Here, you can add the code to actually send the form data to a server
        this.reset(); // Reset the form after submission
    } else {
        alert('Please fill out all fields.');
    }
});
