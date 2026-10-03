function heroSlider() {
                    return {
                        currentSlide: 0,
                        autoplay: true,
                        interval: null,
                        slides: [
                            {
                                title: "Atracciones Soga",
                                description: "La Soga de Tarzán es una gran atracción para los chicos, en la cual ellos sienten la misma sensación de volar como Tarzán, en altura y entre los árboles.",
                                buttonText: "Atracciones Soga",
                                buttonUrl: "#",
                                image: "/images/fotos/xfoto6.jpg"
                            },
                            {
                                title: "Atracciones Soga",
                                description: "La Soga de Tarzán es una gran atracción para los chicos, en la cual ellos sienten la misma sensación de volar como Tarzán, en altura y entre los árboles.",
                                buttonText: "Atracciones Soga",
                                buttonUrl: "#",
                                image: "/images/fotos/xfoto4c.jpg"
                            },
                            {
                                title: "Atracciones Soga",
                                description: "La Soga de Tarzán es una gran atracción para los chicos, en la cual ellos sienten la misma sensación de volar como Tarzán, en altura y entre los árboles.",
                                buttonText: "Atracciones Soga",
                                buttonUrl: "#",
                                image: "/images/fotos/xfoto2.jpg"
                            },
                            {
                                title: "Atracciones Soga",
                                description: "La Soga de Tarzán es una gran atracción para los chicos, en la cual ellos sienten la misma sensación de volar como Tarzán, en altura y entre los árboles.",
                                buttonText: "Atracciones Soga",
                                buttonUrl: "#",
                                image: "/images/fotos/DSC06754.JPG"
                            },
                            {
                                title: "Atracciones Soga",
                                description: "La Soga de Tarzán es una gran atracción para los chicos, en la cual ellos sienten la misma sensación de volar como Tarzán, en altura y entre los árboles.",
                                buttonText: "Atracciones Soga",
                                buttonUrl: "#",
                                image: "/images/fotos/DSC06407.JPG"
                            },
                            {
                                title: "Atracciones Soga",
                                description: "La Soga de Tarzán es una gran atracción para los chicos, en la cual ellos sienten la misma sensación de volar como Tarzán, en altura y entre los árboles.",
                                buttonText: "Atracciones Soga",
                                buttonUrl: "#",
                                image: "/images/fotos/xFoto3.jpg"
                            },
                            {
                                title: "Atracciones Soga",
                                description: "La Soga de Tarzán es una gran atracción para los chicos, en la cual ellos sienten la misma sensación de volar como Tarzán, en altura y entre los árboles.",
                                buttonText: "Atracciones Soga",
                                buttonUrl: "#",
                                image: "/images/fotos/DSC00816.JPG"
                            }
                            , {
                                title: "Atracciones Plaza",
                                description: "Plaza para niños con juegos y diversión asegurada",
                                buttonText: "Contactar ahora",
                                buttonUrl: "#",
                                image: "/images/fotos/DSC06110.JPG"
                            },
                            {
                                title: "Pueblo Indígena",
                                description: "Nuevo sector temático recreado y ambientado en nuestros pueblos originarios con estructuras de cañas y maderas revestidas en telas.",
                                buttonText: "Pueblo Indígena",
                                buttonUrl: "#",
                                image: "/images/fotos/Photo21_17A.jpg"
                            },
                            {
                                title: "Atracciones Soga",
                                description: "La Soga de Tarzán es una gran atracción para los chicos, en la cual ellos sienten la misma sensación de volar como Tarzán, en altura y entre los árboles.",
                                buttonText: "Atracciones Soga",
                                buttonUrl: "#",
                                image: "/images/fotos/20131215_195037.jpg"
                            },
                            {
                                title: "Atracciones Soga",
                                description: "La Soga de Tarzán es una gran atracción para los chicos, en la cual ellos sienten la misma sensación de volar como Tarzán, en altura y entre los árboles.",
                                buttonText: "Atracciones Soga",
                                buttonUrl: "#",
                                image: "/images/fotos/Photo23_19A.jpg"
                            }
                        ],
                        init() {
                            this.startAutoplay();
                        },
                        next() {
                            this.currentSlide = (this.currentSlide + 1) % this.slides.length;
                        },
                        prev() {
                            this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
                        },
                        goTo(index) {
                            this.currentSlide = index;
                        },
                        startAutoplay() {
                            this.interval = setInterval(() => {
                                if (this.autoplay) {
                                    this.next();
                                }
                            }, 5000);
                        },
                        replaceBrokenImage(event) {
                            // Fallback obrázky z iného zdroja
                            const fallbacks = [
                                'https://picsum.photos/id/1018/1920/1080',
                                'https://picsum.photos/id/1015/1920/1080',
                                'https://picsum.photos/id/1019/1920/1080'
                            ];
                            event.target.src = fallbacks[this.currentSlide % fallbacks.length];
                        }
                    }
                }