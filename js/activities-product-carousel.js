function productCarousel() {
    return {
        swiper: null,
        products: [],

        init() {
            this.products = this.makeProducts();

            this.swiper = new Swiper(this.$refs.swiperEl, {
                loop: true,
                speed: 450,
                spaceBetween: 20,
                autoplay: {
                    delay: 4200,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                },
            });
        },

        prev() { this.swiper?.slidePrev(); },
        next() { this.swiper?.slideNext(); },

        makeProducts() {
            const items = [
                { id: 1, title: "Actividades Temáticas", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut", link: "/products/smart-notes" },
                { id: 2, title: "Maquillaje Artístico", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut", link: "/products/desk-organizer" },
                { id: 3, title: "Competencias", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut", link: "/products/travel-pack" },
                { id: 4, title: "Kermesse", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut", link: "/products/focus-timer" },
                { id: 5, title: "Zancos", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut", link: "/products/cloud-backup" },
                { id: 6, title: "Disfraces", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut", link: "/products/cloud-backup" },
            ];

            const colors = [
                ["#0ea5e9", "#1d4ed8"],
                ["#8b5cf6", "#1d4ed8"],
                ["#22c55e", "#0ea5e9"],
                ["#f97316", "#ef4444"],
                ["#14b8a6", "#0ea5e9"],
                ["#e11d48", "#8b5cf6"],
            ];

            return items.map((it, idx) => ({
                ...it,
                image: this.svgDataUrl(it.title, colors[idx][0], colors[idx][1]),
            }));
        },

        svgDataUrl(title, c1, c2) {
            const safeTitle = (title || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
            const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/>
      <stop offset="1" stop-color="${c2}"/>
    </linearGradient>
    <filter id="s" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="10" stdDeviation="16" flood-color="#000" flood-opacity="0.25"/>
    </filter>
  </defs>
  <rect width="800" height="400" fill="url(#g)"/>
  <circle cx="640" cy="120" r="80" fill="rgba(255,255,255,0.18)"/>
  <circle cx="140" cy="300" r="120" fill="rgba(255,255,255,0.14)"/>
  <rect x="90" y="90" width="620" height="220" rx="28" fill="rgba(255,255,255,0.16)" filter="url(#s)"/>
  <text x="140" y="200" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto"
        font-size="44" font-weight="800" fill="white">${safeTitle}</text>
  <text x="140" y="248" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto"
        font-size="22" font-weight="600" fill="rgba(255,255,255,0.85)"></text>
</svg>
`.trim();

            return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
        },
    };
}
