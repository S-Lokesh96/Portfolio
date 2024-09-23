 // Open modal with clicked image
 function openModal(imageSrc) {
    var modal = document.getElementById('imageModal');
    var modalImg = document.getElementById('modalImage');
    
    modal.style.display = 'flex'; // Use 'flex' to center the image
    modalImg.src = imageSrc; // Set the source of the image in the modal
}

// Close modal
function closeModal() {
    var modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

// Close the modal when clicking anywhere outside of the image
window.onclick = function(event) {
    var modal = document.getElementById('imageModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

document.getElementsByClassName('contactForm').addEventListener('submit', function(event) {
let isValid = true;

// Clear previous error messages
document.getElementById('nameError').textContent = '';
document.getElementById('phoneError').textContent = '';
document.getElementById('emailError').textContent = '';

// Get form values
const name = document.getElementById('name').value.trim();
const phone = document.getElementById('phone').value.trim();
const email = document.getElementById('email').value.trim();

// Name validation: must be alphabetic and between 2 and 50 characters
if (!/^[a-zA-Z\s]{2,50}$/.test(name)) {
document.getElementById('nameError').textContent = 'Please enter a valid name (2-50 alphabetic characters).';
isValid = false;
}

// Phone number validation: assuming international format, must be numeric and 10-15 digits
if (!/^\d{10,15}$/.test(phone)) {
document.getElementById('phoneError').textContent = 'Please enter a valid phone number (10-15 digits).';
isValid = false;
}

// Email validation: basic pattern check
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
document.getElementById('emailError').textContent = 'Please enter a valid email address.';
isValid = false;
}

// Prevent form submission if validation fails
if (!isValid) {
event.preventDefault();
}

console.log("hrllo");
document.querySelectorAll(".form-control").textContent="";
});



// Scroll animations for sections
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
        }
    });
});

sections.forEach(section => {
    observer.observe(section);
});
