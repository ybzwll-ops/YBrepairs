class SiteHeader extends HTMLElement {
    connectedCallback() {
        const isPcPage = window.location.pathname.toLowerCase().includes("pc-op-maat.html");

        const homeHref = "index.html";
        const pcHref = isPcPage ? "#top" : "pc-op-maat.html";
        const websiteHref = isPcPage ? "index.html#website-op-maat" : "#website-op-maat";
        const overHref = isPcPage ? "index.html#over" : "#over";
        const contactHref = isPcPage ? "index.html#contact" : "#contact";

        this.innerHTML = `
            <header class="site-header">
                <a class="site-logo" href="${homeHref}">
                    <img src="../fotos/fav-icon.png" alt="YB Repairs logo">
                </a>

                <nav class="site-nav" aria-label="Hoofdnavigatie">
                    <a href="${homeHref}">Home</a>
                    <a href="${pcHref}">PC op maat</a>
                    <a href="${websiteHref}">Website op maat</a>
                    <a href="${overHref}">Over ons</a>
                    <a href="${contactHref}">Contact</a>
                </nav>
            </header>
        `;
    }
}

class SiteFooter extends HTMLElement {
    connectedCallback() {
        const isPcPage = window.location.pathname.toLowerCase().includes("pc-op-maat.html");

        const homeHref = "index.html";
        const dienstenHref = isPcPage ? "index.html#diensten" : "#diensten";
        const pcHref = isPcPage ? "index.html#pc-op-maat" : "#pc-op-maat";
        const websiteHref = isPcPage ? "index.html#website-op-maat" : "#website-op-maat";
        const overHref = isPcPage ? "index.html#over" : "#over";
        const contactHref = isPcPage ? "index.html#contact" : "#contact";

        this.innerHTML = `
            <footer class="site-footer">
                <div class="footer-brand">
                    <a class="footer-logo" href="${homeHref}">
                        <img src="../fotos/fav-icon.png" alt="YB Repairs logo">
                    </a>
                </div>

                <div class="footer-links">
                    <a href="${homeHref}">Home</a>
                    <a href="${dienstenHref}">Diensten</a>
                    <a href="${pcHref}">PC op maat</a>
                    <a href="${websiteHref}">Website op maat</a>
                    <a href="${overHref}">Over ons</a>
                    <a href="${contactHref}">Contact</a>
                </div>

                <div class="footer-contact">
                    <span>info@ybrepairs.nl</span>
                    <span>PC service op afspraak</span>
                </div>
            </footer>
        `;
    }
}

customElements.define("site-header", SiteHeader);
customElements.define("site-footer", SiteFooter);
