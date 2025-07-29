// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const header = document.getElementById('header');
const contactForm = document.getElementById('contact-form');

// Mobile Navigation Toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = navToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = navToggle.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add click event listeners to footer links
document.querySelectorAll('.footer-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            scrollToSection(href.substring(1));
        }
    });
});

// Animate skill bars when they come into view
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                setTimeout(() => {
                    bar.style.width = width + '%';
                }, 200);
            });
        }
    });
}, observerOptions);

// Observe the skills section
const skillsSection = document.querySelector('.about-skills');
if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// Projects data
const projects = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'A modern e-commerce solution built with React, Node.js, and Stripe integration. Features include user authentication, product catalog, shopping cart, and payment processing.',
        image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
        id: 2,
        title: 'Task Management App',
        description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features built with Next.js and Socket.io.',
        image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
        tags: ['Next.js', 'TypeScript', 'Socket.io', 'PostgreSQL']
    },
    {
        id: 3,
        title: 'Restaurant Website',
        description: 'A beautiful, responsive restaurant website with online reservation system, menu display, and contact forms. Optimized for mobile devices and search engines.',
        image: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=800',
        tags: ['React', 'Tailwind CSS', 'Firebase', 'PWA']
    },
    {
        id: 4,
        title: 'Portfolio Dashboard',
        description: 'A comprehensive dashboard for managing investment portfolios with real-time data visualization, charts, and analytics. Built with modern React and D3.js.',
        image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800',
        tags: ['React', 'D3.js', 'REST API', 'Material-UI']
    },
    {
        id: 5,
        title: 'Learning Management System',
        description: 'An educational platform with course management, video streaming, quizzes, and progress tracking. Designed for scalability and user engagement.',
        image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
        tags: ['Vue.js', 'Express.js', 'MySQL', 'AWS']
    },
    {
        id: 6,
        title: 'Weather Analytics App',
        description: 'A weather tracking application with detailed analytics, forecasts, and historical data visualization. Features location-based weather updates and alerts.',
        image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
        tags: ['React Native', 'Redux', 'Weather API', 'Charts.js']
    }
];

// Services data
const services = [
    {
        icon: 'fas fa-globe',
        title: 'Web Development',
        description: 'Custom websites and web applications built with modern technologies like React, Next.js, and TypeScript.',
        features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning', 'Cross-browser Compatibility']
    },
    {
        icon: 'fas fa-mobile-alt',
        title: 'Mobile-First Design',
        description: 'Creating mobile-optimized experiences that work seamlessly across all devices and screen sizes.',
        features: ['Progressive Web Apps', 'Touch-friendly UI', 'Offline Functionality', 'App-like Experience']
    },
    {
        icon: 'fas fa-palette',
        title: 'UI/UX Design',
        description: 'User-centered design approach creating intuitive interfaces that enhance user experience.',
        features: ['Wireframing', 'Prototyping', 'User Research', 'Design Systems']
    },
    {
        icon: 'fas fa-bolt',
        title: 'Performance Optimization',
        description: 'Speed optimization and performance tuning to ensure your website loads fast and runs smoothly.',
        features: ['Code Splitting', 'Image Optimization', 'Caching Strategies', 'Core Web Vitals']
    },
    {
        icon: 'fas fa-headphones',
        title: 'Ongoing Support',
        description: 'Continued maintenance, updates, and support to keep your website running at its best.',
        features: ['Bug Fixes', 'Security Updates', 'Content Updates', '24/7 Monitoring']
    },
    {
        icon: 'fas fa-flag',
        title: 'Landing Page Development',
        description: 'High-converting landing pages tailored for marketing campaigns, product launches, and lead generation.',
        features: ['Conversion-Focused Design', 'Fast Load Times', 'A/B Testing Ready', 'Integrations with CRM & Analytics']
    }
];

// Populate projects
function populateProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Populate services
function populateServices() {
    const servicesGrid = document.getElementById('services-grid');
    if (!servicesGrid) return;

    servicesGrid.innerHTML = services.map(service => `
        <div class="service-card">
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
            <ul class="service-features">
                ${service.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

// Contact form handling
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);

        fetch('https://formsubmit.co/ajax/urstruly.anandm@gmail.com', {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            alert('Thank you! Your message has been sent.');
            contactForm.reset();
        })
        .catch(error => {
            alert('Oops! Something went wrong.');
            console.error(error);
        });
    });
}


// Initialize animations on scroll
const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observe elements for animation
document.querySelectorAll('.project-card, .service-card, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    animateOnScroll.observe(el);
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    populateProjects();
    populateServices();
});

// Add some interactive effects
document.addEventListener('mousemove', (e) => {
    const blobs = document.querySelectorAll('.blob');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    blobs.forEach((blob, index) => {
        const speed = (index + 1) * 0.02;
        const xOffset = (x - 0.5) * 50 * speed;
        const yOffset = (y - 0.5) * 50 * speed;
        
        blob.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
});

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Optional: Add typing effect to hero title
    // const heroTitle = document.querySelector('.hero-title');
    // if (heroTitle) {
    //     const originalText = heroTitle.textContent;
    //     typeWriter(heroTitle, originalText, 50);
    // }
});