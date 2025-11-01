// ============================================
// PORTFOLIO INTERACTIVE FEATURES
// ============================================

// Smooth scroll behavior for navigation links
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

// Add fade-in animation to project cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all project cards
document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
});

// Observe skill boxes
document.querySelectorAll('.skill-box').forEach(box => {
    observer.observe(box);
});

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add click handlers to "Learn More" buttons
document.querySelectorAll('.card-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const card = this.closest('.project-card');
        const title = card.querySelector('.card-title').textContent;
        
        // Show alert or navigate to project details
        console.log('Clicked on: ' + title);
        
        // You can replace this with actual navigation or modal
        // For now, just provide visual feedback
        this.textContent = 'Coming Soon →';
        setTimeout(() => {
            this.textContent = 'Learn More →';
        }, 2000);
    });
});

// Add contact button functionality
document.querySelectorAll('.contact-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Handle email links
        if (href.startsWith('mailto:')) {
            // Browser will handle this naturally
            return;
        }
        
        // External links open in new tab
        if (href.startsWith('http')) {
            e.preventDefault();
            window.open(href, '_blank');
        }
    });
});

// Add hover effects to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Detect dark mode preference
function initializeDarkMode() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (prefersDark) {
        document.documentElement.style.colorScheme = 'dark';
    } else {
        document.documentElement.style.colorScheme = 'light';
    }
}

// Listen for dark mode changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    document.documentElement.style.colorScheme = e.matches ? 'dark' : 'light';
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeDarkMode();
    
    // Add animation to hero section
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.classList.add('fade-in');
    }
    
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        setTimeout(() => {
            heroSubtitle.classList.add('fade-in');
        }, 100);
    }
    
    const heroButtons = document.querySelector('.hero-buttons');
    if (heroButtons) {
        setTimeout(() => {
            heroButtons.classList.add('fade-in');
        }, 200);
    }
});

// Performance optimization: Lazy load images if needed
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img.lazy').forEach(img => imageObserver.observe(img));
}

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Skip to main content with keyboard shortcut (Alt + M)
    if (e.altKey && e.key === 'm') {
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
    }
});

// Log page load time
window.addEventListener('load', () => {
    if (window.performance) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page load time: ' + pageLoadTime + 'ms');
    }
});

// Add console message
console.log('%c🎯 Welcome to AI Project Portfolio!', 'font-size: 16px; color: #2563eb; font-weight: bold;');
console.log('%cExplore the amazing ML projects and learn about algorithms!', 'font-size: 12px; color: #7c3aed;');

