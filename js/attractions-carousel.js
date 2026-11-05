function miniCarousel(images) {
    return {
        images: images || [],
        currentIndex: 0,
        prev() {
            if (this.currentIndex > 0) this.currentIndex -= 1;
        },
        next() {
            if (this.currentIndex < this.images.length - 1) this.currentIndex += 1;
        },
        goTo(index) {
            if (index >= 0 && index < this.images.length) {
                this.currentIndex = index;
            }
        }
    };
}

function attractionsCarousel() {
    return {
        currentSlide: 0,
        visibleSlides: 1,
        slidePercentage: 100,
        slides: [
            {
                id: 1,
                image: '/images/Atracciones/jungla-1.jpg',
                images: [
                    '/images/Atracciones/jungla-1.jpg',
                    '/images/Atracciones/jungla-2.jpg',
                    '/images/Atracciones/jungla-3.jpg',
                    '/images/Atracciones/jungla-5.jpg'
                ],
                title: 'Jungla Encantada',
                description: 'Es un lugar fascinante, con pura naturaleza donde los chicos disfrutan recorriendo sus curvos caminitos y puentecitos, sumergiéndose en un mundo lleno de fantasías y aventuras. Los chicos no dejan de sorprenderse al recorrer todos y cada uno de los rincones únicos e incomparables, por su encanto y singular belleza.'
            },
            {
                id: 2,
                image: '/images/Atracciones/pueblo-2.jpg',
                images: [
                    '/images/Atracciones/pueblo-1.jpg',
                    '/images/Atracciones/pueblo-2.jpg',
                    '/images/Atracciones/pueblo-3.jpg',
                    '/images/Atracciones/pueblo-4.jpg',
                    '/images/Atracciones/pueblo-5.jpg',
                    '/images/Atracciones/pueblo-6.jpg'
                ],
                title: 'Pueblo Indígena',
                description: 'Nuevo sector temático recreado y ambientado en nuestros pueblos originarios con estructuras de cañas y maderas revestidas en telas. Los chicos reviven la cultura y forma de vida de aquellos pueblos al realizar actividades como recolectar frutas y verduras, cocinar en el fogón y proteger al pueblo y sus habitantes del ataque de animales.'
            },
            {
                id: 3,
                image: '/images/Atracciones/soga-1.jpg',
                images: [
                    '/images/Atracciones/soga-1.jpg',
                    '/images/Atracciones/soga-2.jpg',
                    '/images/Atracciones/soga-3.jpg',
                    '/images/Atracciones/soga-4.jpg',
                    '/images/Atracciones/soga-5.jpg',
                    '/images/Atracciones/soga-6.jpg'
                ],
                title: 'La Soga de Tarzán',
                description: 'La Soga de Tarzán es una gran atracción para los chicos, en la cual ellos sienten la misma sensación de volar como Tarzán, en altura y entre los árboles. La soga de Tarzán es un juego apto para los fans de las emociones y la adrenalina.'
            },
            {
                id: 4,
                image: '/images/Atracciones/futbol-3.jpg',
                images: [
                    '/images/Atracciones/futbol-2.jpg',
                    '/images/Atracciones/futbol-3.jpg',
                    '/images/Atracciones/futbol-4.jpg',
                    '/images/Atracciones/futbol-5.jpg',
                    '/images/Atracciones/futbol-6.jpg',
                    '/images/Atracciones/futbol-1.jpg',
                ],
                title: 'Cancha de Fútbol',
                description: 'Tanto varones como nenas se divierten jugando al Fútbol, Handball, Quemado y divertidos juegos de competencia por premios. Happy Park es el lugar ideal, donde la destreza de los chicos se pone en acción.'
            },
            {
                id: 5,
                image: '/images/Atracciones/casita-5.jpg',
                images: [
                    '/images/Atracciones/casita-1.jpg',
                    '/images/Atracciones/casita-5.jpg',
                    '/images/Atracciones/casita-6.jpg'
                ],
                title: 'Casita Laberinto',
                description: 'En ella el tiempo no tiene fronteras y los chicos la disfrutan recorriendo sus laberintos y rincones, saludando a sus padres desde los balcones, para luego volver una y otra vez a recorrerla o bien crear en ella historias en un mundo de fantasías.'
            },
            {
                id: 6,
                image: '/images/Atracciones/casita-2.jpg',
                images: [
                    '/images/Atracciones/casita-2.jpg',
                    '/images/Atracciones/casita-3.jpg',
                    '/images/Atracciones/casita-4.jpg',
                ],
                title: 'Castillo Inflable',
                description: 'El Castillo Inflable fue realizado a medida, buscando una combinación de colores divertidos. El tobogán de acceso a la puertita de entrada es mucho más amplio y con suficientes bordes laterales, para optimizar al máximo la seguridad de los chicos.'
            },
            {
                id: 7,
                image: '/images/Atracciones/plaza-5.jpg',
                images: [
                    '/images/Atracciones/plaza-1.jpg',
                    '/images/Atracciones/plaza-2.jpg',
                    '/images/Atracciones/plaza-3.jpg',
                    '/images/Atracciones/plaza-4.jpg',
                    '/images/Atracciones/plaza-5.jpg',
                    '/images/Atracciones/plaza-6.jpg'
                ],
                title: 'Plaza Happy Park',
                description: 'Por una arcada de troncos se entra a "La Plaza Happy Park", un lugar encantador pensado para el buen esparcimiento de los chicos. En este sector los chicos descubren un atractivo espacio en el cual se encuentran instalados juegos como: Hamacas, Toboganes, Trepadora y Calesitas.'
            }
        ],
        init() {
            this.updateVisibleSlides();
            window.addEventListener('resize', () => {
                this.updateVisibleSlides();
            });
        },
        updateVisibleSlides() {
            if (window.innerWidth < 768) {
                this.visibleSlides = 1;
                this.slidePercentage = 100;
            } else {
                this.visibleSlides = 3;
                this.slidePercentage = 100 / 3;
            }
        },
        next() {
            if (this.currentSlide < this.slides.length - this.visibleSlides) {
                this.currentSlide += 1;
            }
        },
        prev() {
            if (this.currentSlide > 0) {
                this.currentSlide -= 1;
            }
        },
        goTo(index) {
            if (index <= this.slides.length - this.visibleSlides) {
                this.currentSlide = index;
            } else {
                this.currentSlide = this.slides.length - this.visibleSlides;
            }
        },
        handleImageError(slide) {
            slide.image = 'https://picsum.photos/id/20/800/600';
        }
    };
}


const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.carousel-control-prev');
    const nextButton = document.querySelector('.carousel-control-next');

    prevButton.addEventListener('click', () => {
        carousel.scrollBy({
            left: -carousel.offsetWidth,
            behavior: 'smooth'
        });
    });

    nextButton.addEventListener('click', () => {
        carousel.scrollBy({
            left: carousel.offsetWidth,
            behavior: 'smooth'
        });
    });