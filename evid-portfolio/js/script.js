// Image Configuration
const images = {
    profileImage: 'assets/images/profile.jpg',
    bannerImages: [
        'assets/images/banner1.jpg',
        'assets/images/banner2.jpg',
        'assets/images/banner3.jpg'
    ],
    portfolioImages: [
        'assets/images/portfolio1.jpg',
        'assets/images/portfolio2.jpg',
        'assets/images/portfolio3.jpg'
    ]
};

// Scroll-based Animations
function handleScroll() {
    const sections = document.querySelectorAll('.section');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const profileImage = document.getElementById('profileImage');

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
            section.classList.add('visible');
        }
    });

    portfolioItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
            item.classList.add(index % 2 === 0 ? 'slide-in-left' : 'slide-in-right');
        }
    });

    // Profile Image Fade In
    if (profileImage) {
        const rect = profileImage.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
            profileImage.classList.add('fade-in');
        }
    }
}

// Smooth Scrolling
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Initialize Carousel with Custom Images
function setupCarousel() {
    const carouselInner = document.querySelector('#homeBanner .carousel-inner');
    if (carouselInner) {
        carouselInner.innerHTML = images.bannerImages.map((src, index) => `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <img src="${src}" class="d-block w-100" alt="Banner ${index + 1}">
            </div>
        `).join('');
    }
}

// Event Listeners and Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Setup carousel
    setupCarousel();
    
    // Setup smooth scrolling
    setupSmoothScrolling();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial scroll check
    handleScroll();
});