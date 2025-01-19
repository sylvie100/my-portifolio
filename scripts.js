// Form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    console.log('Form submitted:', formData);
    this.reset();
    alert('Message sent successfully!');
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation on scroll
function checkVisible(elm) {
    const rect = elm.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

function handleScroll() {
    document.querySelectorAll('.animated').forEach(element => {
        if (checkVisible(element)) {
            element.style.visibility = 'visible';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize scroll handling
window.addEventListener('scroll', handleScroll);
handleScroll();// JavaScript Document