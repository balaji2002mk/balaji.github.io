function showImage() {
    var imgContainer = document.getElementById('imageContainer');
    if (imgContainer.style.display === 'none') {
        imgContainer.style.display = 'block'; // Show the image
    } else {
        imgContainer.style.display = 'none'; // Hide the image if clicked again
    }
}
function downloadResume() {
        // Create a temporary anchor element
        var link = document.createElement('a');
        
        // Set the href to the resume file path
        link.href = '/pdfs/Balaji_CV.pdf';
        
        // Set the download attribute to the desired file name
        link.download = 'Balaji_CV.pdf';
        
        // Programmatically trigger the click
        link.click();
    }

    function handleSubmit(event) {
        // Prevent default form submission
        event.preventDefault();
    
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const contact = document.getElementById('contact').value;
        const message = document.getElementById('message').value;
    
        // Show the success message
        const responseMessage = document.getElementById('responseMessage');
        responseMessage.style.display = 'block';
    
        // Log form data (for demonstration)
        console.log('Form Submitted:');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Contact:', contact);
        console.log('Message:', message);
    
        // Clear form fields (optional)
        document.querySelector('form').reset();
    
        // Automatically hide the success message after 3 seconds
        setTimeout(function() {
            responseMessage.style.display = 'none';
        }, 3000); // Hide after 3 seconds
    
        return false;
    }
    