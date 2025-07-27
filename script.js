// Terminal Intro Animation
document.addEventListener('DOMContentLoaded', () => {
    const terminal = document.getElementById('terminal-intro');
    const mainContent = document.getElementById('main-content');
    const typingText = document.querySelector('.typing-text');
    const tagline = document.querySelector('.tagline');

    // Typing animation function with realistic typing speed variation
    function typeText(element, text, speed = 50) {
        let i = 0;
        return new Promise(resolve => {
            function type() {
                if (i < text.length) {
                    // Add random variation to typing speed
                    const randomDelay = Math.random() * 50 + speed;
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, randomDelay);
                } else {
                    resolve();
                }
            }
            type();
        });
    }

    // Terminal intro sequence
    async function startIntro() {
        // Initial delay
        await new Promise(resolve => setTimeout(resolve, 500));

        // Type the access message
        await typeText(typingText, "> Accessing Shubham Pawar's Portfolio...");
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Fade out terminal and show main content
        terminal.classList.add('fade-out');
        setTimeout(() => {
            terminal.style.display = 'none';
            mainContent.classList.remove('hidden');
            mainContent.style.opacity = '0';
            mainContent.style.transition = 'opacity 1s ease';
            setTimeout(() => {
                mainContent.style.opacity = '1';
            }, 100);
        }, 1000);
    }

    startIntro();
});

// Matrix Rain Effect
class MatrixRain {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.classList.add('matrix-bg');
        document.body.appendChild(this.canvas);
        
        this.resize();
        this.init();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    init() {
        this.characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
        this.fontSize = 14;
        this.columns = this.canvas.width / this.fontSize;
        this.drops = [];
        
        for (let i = 0; i < this.columns; i++) {
            this.drops[i] = 1;
        }
    }

    animate() {
        this.ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.fillStyle = '#2563EB';
        this.ctx.font = this.fontSize + 'px monospace';
        
        for (let i = 0; i < this.drops.length; i++) {
            const text = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
            this.ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);
            
            if (this.drops[i] * this.fontSize > this.canvas.height && Math.random() > 0.975) {
                this.drops[i] = 0;
            }
            this.drops[i]++;
        }
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize Matrix Rain
new MatrixRain();

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const socialLinks = document.querySelector('.social-links');

// Create mobile menu
const mobileMenu = document.createElement('div');
mobileMenu.className = 'mobile-menu';
mobileMenu.innerHTML = `
    <div class="nav-links">
        <a href="#about">About</a>
        <a href="#recognition">Recognition</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
    </div>
    <div class="social-links">
        <a href="https://github.com/shubhampawar7438" target="_blank" class="social-icon"><i class="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/shubhammarutipawar/" target="_blank" class="social-icon"><i class="fab fa-linkedin"></i></a>
    </div>
`;
document.body.appendChild(mobileMenu);

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // Animate hamburger to X
    const spans = hamburger.querySelectorAll('span');
    if (hamburger.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking a link
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        hamburger.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll Animation
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Recognition Cards Animation
const recognitionCards = document.querySelectorAll('.recognition-card');

recognitionCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.boxShadow = '0 10px 30px rgba(37, 99, 235, 0.1)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = 'none';
    });
});

// Form Input Animation
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', () => {
        if (!input.value) {
            input.parentElement.classList.remove('focused');
        }
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Add your form submission logic here
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    setTimeout(() => {
        submitButton.textContent = 'Message Sent!';
        contactForm.reset();
        
        setTimeout(() => {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 2000);
    }, 1500);
});

// Modal Functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal(e.target.id);
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) {
            closeModal(activeModal.id);
        }
    }
});

// Image Modal Functions
function openImageModal(imageId) {
    const imageModal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    
    // Set the image source based on the imageId
    modalImage.src = document.querySelector(`[onclick="openImageModal('${imageId}')"] img`).src;
    
    imageModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    const imageModal = document.getElementById('image-modal');
    imageModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close image modal when clicking outside
document.getElementById('image-modal').addEventListener('click', (e) => {
    if (e.target.id === 'image-modal') {
        closeImageModal();
    }
});

// Close image modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const activeImageModal = document.getElementById('image-modal');
        if (activeImageModal.classList.contains('active')) {
            closeImageModal();
        }
    }
}); 
