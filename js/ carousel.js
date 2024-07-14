class Carousel {
    constructor(element) {
      this.carousel = element;
      this.items = Array.from(this.carousel.querySelectorAll('.carousel-item'));
      this.totalItems = this.items.length;
      this.currentIndex = 0;
  
      this.prevArea = this.carousel.parentElement.querySelector('.prev-area');
      this.nextArea = this.carousel.parentElement.querySelector('.next-area');
  
      this.setupEventListeners();
      this.setupTouchEvents();
    }
  
    setupEventListeners() {
      if (window.matchMedia("(hover: hover)").matches) {
        this.prevArea.addEventListener('mouseenter', () => this.prev());
        this.nextArea.addEventListener('mouseenter', () => this.next());
      } else {
        this.prevArea.addEventListener('click', () => this.prev());
        this.nextArea.addEventListener('click', () => this.next());
      }
    }
  
    setupTouchEvents() {
      let startX, moveX;
      this.carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX;
      });
  
      this.carousel.addEventListener('touchmove', (e) => {
        moveX = e.touches[0].pageX;
      });
  
      this.carousel.addEventListener('touchend', () => {
        if (startX - moveX > 50) {
          this.next();
        } else if (moveX - startX > 50) {
          this.prev();
        }
      });
    }
  
    updateCarousel() {
      this.items.forEach((item, index) => {
        item.classList.toggle('active', index === this.currentIndex);
      });
  
      const offset = -this.currentIndex * 100;
      this.carousel.style.transform = `translateX(${offset}%)`;
    }
  
    prev() {
      this.currentIndex = (this.currentIndex - 1 + this.totalItems) % this.totalItems;
      this.updateCarousel();
    }
  
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.totalItems;
      this.updateCarousel();
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const carouselElement = document.querySelector('.carousel');
    new Carousel(carouselElement);
  });