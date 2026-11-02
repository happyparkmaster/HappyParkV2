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


// Alternar menú móvil
        const menuToggle = document.getElementById('menuToggle');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');

        if (menuToggle && mobileMenu) {
            mobileMenu.classList.add('hidden');

            menuToggle.addEventListener('click', () => {
                const isHidden = mobileMenu.classList.contains('hidden');
                mobileMenu.classList.toggle('hidden');

                if (isHidden) {
                    mobileMenuItems.forEach((item, index) => {
                        item.style.animation = 'none';
                        setTimeout(() => {
                            item.style.animation = 'slideUp 0.5s ease-out forwards';
                            item.style.animationDelay = `${index * 0.1}s`;
                        }, 10);
                    });
                }
            });
        }

        // Desplazamiento suave para enlaces de navegación
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            const targetSelector = anchor.getAttribute('href');
            const target = targetSelector ? document.querySelector(targetSelector) : null;
            if (!target) return;

            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Animar barras de habilidades al hacer scroll
        function animateSkillBars() {
            const skillBars = document.querySelectorAll('.skill-bar');
            skillBars.forEach(bar => {
                if (!bar.parentElement || !bar.parentElement.previousElementSibling) return;
                const label = bar.parentElement.previousElementSibling.lastElementChild;
                if (!label) return;
                const targetWidth = label.textContent;
                bar.style.width = targetWidth;
            });
        }

        // Activar animación de barras cuando la sección de habilidades esté visible
        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    animateSkillBars();
                    observer.unobserve(skillsSection);
                }
            }, { threshold: 0.5 });

            observer.observe(skillsSection);
        }

        