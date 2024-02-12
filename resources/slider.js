class Slider {
    constructor(sliderId, dotsId) {
        this.slider = document.getElementById(sliderId);
        this.images = Array.from(this.slider.querySelectorAll('img'));
        this.currentImageIndex = 0;

        this.createControls();
        this.createDots(dotsId);
        this.showImage(this.currentImageIndex);

        setInterval(() => this.nextImage(), 5000);
    }

    createControls() {
        const controls = document.createElement('div');
        controls.className = 'slider-controls';

        const prevButton = document.createElement('button');
        prevButton.textContent = 'Prev';
        prevButton.addEventListener('click', () => this.prevImage());

        const nextButton = document.createElement('button');
        nextButton.textContent = 'Next';
        nextButton.addEventListener('click', () => this.nextImage());

        controls.appendChild(prevButton);
        controls.appendChild(nextButton);

        this.slider.appendChild(controls);
    }

    createDots(dotsId) {
        const dotsContainer = document.getElementById(dotsId);

        this.images.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.className = 'slider-dot';
            dot.addEventListener('click', () => this.showImage(index));
            dotsContainer.appendChild(dot);

            if (index === 0) {
                dot.classList.add('active');
            }
        });
    }

    showImage(index) {
        this.images.forEach(img => img.classList.remove('active'));
        this.images[index].classList.add('active');

        const dots = document.querySelectorAll('.slider-dot');
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');

        this.currentImageIndex = index;
    }

    nextImage() {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
        this.showImage(this.currentImageIndex);
    }

    prevImage() {
        this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
        this.showImage(this.currentImageIndex);
    }
}

const slider = new Slider('slider', 'slider-dots');
