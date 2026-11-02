function visitsCarousel() {
    return {
        currentSlide: 0,
        visibleSlides: 1,
        slidePercentage: 100,
        slides: [
            {
                id: 1,
                image: '/images/Visitas/gonzalo_heredia.jpg',
                title: 'Gonzalo Heredia',
                description: 'Actor de cine y televisión'
            },
            {
                id: 2,
                image: '/images/Visitas/victoria_onetto.jpg',
                title: 'Victoria Onetto',
                description: 'Actriz de cine y televisión'
            },
            {
                id: 3,
                image: '/images/Visitas/martin_ciccioli.jpg',
                title: 'Martín Ciccioli',
                description: 'Periodista Argentino'
            },
            {
                id: 4,
                image: '/images/Visitas/paola_prenat_y_marcelo_iribarne.jpg',
                title: 'Paola Prenat y Marcelo Iribarne',
                description: 'Conductores de Televisión'
            },
            {
                id: 5,
                image: '/images/Visitas/cinthia_fernandez_y_matias_defederico.jpg',
                title: 'Cinthia Fernandez y Matías Defederico',
                description: 'Modelo y panelista de televisión / exfutbolista'
            },
            {
                id: 6,
                image: '/images/Visitas/alejandra_darin.jpg',
                title: 'Alejandra Darin',
                description: 'Actriz de cine y televisión'
            },
            {
                id: 7,
                image: '/images/Visitas/francisco_de_narvaez.jpg',
                title: 'Francisco de Narváez',
                description: 'Político y empresario argentino'
            },
            {
                id: 8,
                image: '/images/Visitas/mariana_antoniale.jpg',
                title: 'Mariana Antoniale',
                description: 'Modelo Vedette'
            },
            {
                id: 9,
                image: '/images/Visitas/thelma_biral_y_alberto_fernandez_de_rosa.jpg',
                title: 'Thelma Biral y Alberto F. de Rosa',
                description: 'Actriz y Actor de cine, teatro y televisión'
            },
            {
                id: 10,
                image: '/images/Visitas/jimena_campisi_y_virginia_gallardo.jpg',
                title: 'Jimena Campisi y Virginia Gallardo',
                description: 'Modelo y Actriz / Modelo, vedette, bailarina'
            },
            {
                id: 11,
                image: '/images/Visitas/jorge_suarez.jpg',
                title: 'Jorge Suárez',
                description: 'Actor y Docente Teatral'
            },
            {
                id: 12,
                image: '/images/Visitas/gisela_bernal.jpg',
                title: 'Gisela Bernal',
                description: 'Bailarina y Actriz'
            },
            {
                id: 13,
                image: '/images/Visitas/beto_alonso.jpg',
                title: 'Beto Alonso',
                description: 'ExFutbolista'
            },
            {
                id: 14,
                image: '/images/Visitas/sergio_gonal.jpg',
                title: 'Sergio Gonal',
                description: 'Actor Humorista'
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
