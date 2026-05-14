const pcPageMain = document.querySelector("#pc-page-main");

if (pcPageMain) {
    const steps = [
        {
            number: "01",
            title: "Intake en doelen",
            text: "We starten met wat je met de pc wilt doen, hoeveel je wilt uitgeven en waar je prioriteit ligt."
        },
        {
            number: "02",
            title: "Slimme onderdelenkeuze",
            text: "Daarna stellen we een combinatie samen die past bij snelheid, stilte, upgrade-mogelijkheden en prijs."
        },
        {
            number: "03",
            title: "Bouwen, testen en opleveren",
            text: "We bouwen alles netjes op, testen de onderdelen en leveren de pc gebruiksklaar en netjes af."
        }
    ];

    pcPageMain.innerHTML = `
        <section class="pc-hero" id="werkwijze">
            <div class="pc-hero__copy">
                <p class="pc-hero__eyebrow">PC op maat</p>
                <h1>Jouw pc, stap voor stap gebouwd rond wat jij nodig hebt.</h1>
                <p class="pc-hero__lead">
                    Geen standaardpakket, maar een systeem dat we samen afstemmen op jouw werk, budget en stijl.
                    Hieronder zie je hoe we van idee naar een complete pc gaan.
                </p>

                <div class="pc-hero__actions">
                    <a class="pc-hero__button pc-hero__button--primary" href="#werkwijze">Bekijk de werkwijze</a>
                    <a class="pc-hero__button pc-hero__button--secondary" href="index.html#contact">Neem contact op</a>
                </div>
            </div>

            <div class="pc-hero__panel" aria-label="Werkwijze in drie stappen">
                <div class="pc-hero__panel-head">
                    <span>Onze aanpak</span>
                    <strong>3 heldere stappen</strong>
                </div>

                <div class="pc-hero__steps">
                    ${steps.map((step) => `
                        <article class="pc-hero__step">
                            <span class="pc-hero__step-number">${step.number}</span>
                            <div>
                                <h2>${step.title}</h2>
                                <p>${step.text}</p>
                            </div>
                        </article>
                    `).join("")}
                </div>

                <div class="pc-hero__stats">
                    <div>
                        <strong>Persoonlijk</strong>
                        <span>Altijd een vast aanspreekpunt</span>
                    </div>
                    <div>
                        <strong>Transparant</strong>
                        <span>Duidelijke keuzes en budget</span>
                    </div>
                </div>
            </div>
        </section>
    `;
}
