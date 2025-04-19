const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;
let autoSlideInterval;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 3000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Event Listeners for Buttons
nextBtn.addEventListener('click', () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
});

prevBtn.addEventListener('click', () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
});

// เริ่มต้นแสดงสไลด์แรกและเลื่อนอัตโนมัติ
showSlide(currentSlide);
startAutoSlide();

// Product Slider
const productSlider = document.querySelector('.product-slider');
const prevProductBtn = document.querySelector('.prev-product-btn');
const nextProductBtn = document.querySelector('.next-product-btn');
const productSlides = document.querySelectorAll('.product-slide');
const slideWidth = productSlides[0].offsetWidth + 20; // ความกว้างของสินค้า + gap

function scrollProductSlider(direction) {
    const scrollAmount = direction === 'next' ? slideWidth : -slideWidth;
    productSlider.scrollLeft += scrollAmount;
}

nextProductBtn.addEventListener('click', () => scrollProductSlider('next'));
prevProductBtn.addEventListener('click', () => scrollProductSlider('prev'));