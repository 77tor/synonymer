let gjeldendeOppgaver = [];

// Sjekker antall genererte oppgaver og skjuler bunnbildet dersom det overstiger grensen
function oppdaterBildeSynlighet() {
    const img3 = document.getElementById('ark-bilde-3');
    if (!img3) return;

    const modusEl = document.getElementById('select-modus');
    if (!modusEl) return;

    const modus = modusEl.value;
    const antall = gjeldendeOppgaver.length;

    let skalSkjules = false;

    if (modus === 'setninger' && antall > 10) {
        skalSkjules = true; // Skjuler bilde 3 ved 11 eller 12 setninger
    } else if (modus === 'ord' && antall > 20) {
        skalSkjules = true; // Skjuler bilde 3 ved 21 eller 22 ord
    } else if (modus === 'miks' && antall > 15) {
        skalSkjules = true; // Skjuler bilde 3 ved 16 eller 17 oppgaver
    }

    if (skalSkjules) {
        img3.style.display = 'none';
    } else {
        img3.style.display = 'block';
    }
}

// Justerer maksverdi i tallfeltet automatisk basert på valgt modus
function justerMaksAntall() {
    const modusEl = document.getElementById('select-modus');
    const inputAntall = document.getElementById('antall-oppgaver');
    if (!modusEl || !inputAntall) return;

    const modus = modusEl.value;

    if (modus === 'ord') {
        inputAntall.max = 22;
        if (parseInt(inputAntall.value) > 22) inputAntall.value = 22;
    } else if (modus === 'setninger') {
        inputAntall.max = 12;
        if (parseInt(inputAntall.value) > 12) inputAntall.value = 12;
    } else { // miks / blandet
        inputAntall.max = 17;
        if (parseInt(inputAntall.value) > 17) inputAntall.value = 17;
    }
}

// Endre tema og oppdater tema-bildene i hjørnene
function changeTheme(themeName) {
    document.body.className = document.body.className.replace(/\btheme-\S+/g, '');
    document.body.classList.add('theme-' + themeName);

    const img1 = document.getElementById('ark-bilde-1');
    const img2 = document.getElementById('ark-bilde-2');
    const img3 = document.getElementById('ark-bilde-3');

    if (img1 && img2 && img3) {
        // Hvis "Standard" er valgt, eller tema mangler bilder: Skjul bildene helt
        if (!themeName || themeName === 'standard') {
            img1.style.display = 'none';
            img2.style.display = 'none';
            img3.style.display = 'none';
            img1.src = '';
            img2.src = '';
            img3.src = '';
        } else {
            img1.style.display = 'block';
            img2.style.display = 'block';
            img3.style.display = 'block';

            img1.src = `Bilder/${themeName}_01.png`;
            img2.src = `Bilder/${themeName}_02.png`;
            img3.src = `Bilder/${themeName}_03.png`;
        }
    }

    oppdaterBildeSynlighet();
}

// Åpne/lukke burgermenyen
function toggleMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Lukker dropdown-menyen dersom brukeren klikker utenfor
window.onclick = function(event) {
    if (!event.target.matches('.hamburger') && !event.target.matches('.hamburger span')) {
        const dropdowns = document.getElementsByClassName("dropdown-menu");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

// Generer nye oppgaver basert på valgt modus og grenser
function genererOppgaver() {
    // Vis selve oppgavearket og skjul startskjermen
    const placeholder = document.getElementById('placeholder-image');
    const ark = document.getElementById('oppgave-ark');
    if (placeholder) placeholder.style.display = 'none';
    if (ark) ark.style.display = 'flex';

    justerMaksAntall();

    const modus = document.getElementById('select-modus').value;
    const antall = parseInt(document.getElementById('antall-oppgaver').value) || 10;
    
    gjeldendeOppgaver = [];

    if (typeof synonymData !== 'undefined') {
        if (modus === 'ord') {
            const ordKilde = [...(synonymData.ord || [])].sort(() => 0.5 - Math.random());
            gjeldendeOppgaver = ordKilde.slice(0, Math.min(antall, 22));
        } 
        else if (modus === 'setninger') {
            const setningKilde = [...(synonymData.setninger || [])].sort(() => 0.5 - Math.random());
            gjeldendeOppgaver = setningKilde.slice(0, Math.min(antall, 12));
        } 
        else {
            // BLANDET MODUS: Bygger strukturert med 2 ord (1 linje) og 1 setning (1 linje)
            const ordKilde = [...(synonymData.ord || [])].sort(() => 0.5 - Math.random());
            const setningKilde = [...(synonymData.setninger || [])].sort(() => 0.5 - Math.random());
            
            let ordIndex = 0;
            let setningIndex = 0;

            while (gjeldendeOppgaver.length < antall && (ordIndex < ordKilde.length || setningIndex < setningKilde.length)) {
                if (ordIndex < ordKilde.length && gjeldendeOppgaver.length < antall) {
                    gjeldendeOppgaver.push(ordKilde[ordIndex++]);
                }
                if (ordIndex < ordKilde.length && gjeldendeOppgaver.length < antall) {
                    gjeldendeOppgaver.push(ordKilde[ordIndex++]);
                }
                if (setningIndex < setningKilde.length && gjeldendeOppgaver.length < antall) {
                    gjeldendeOppgaver.push(setningKilde[setningIndex++]);
                }
            }
        }
    }

    tegnOppgaver();
    oppdaterBildeSynlighet();
}

function toggleFasitVisning() {
    const visFasit = document.getElementById('toggle-fasit').checked;
    
    if (visFasit) {
        sjekkSvar(); // Viser fasit
    } else {
        // Skjuler fasit-fargene igjen
        const knapper = document.querySelectorAll('.synonym-knapp');
        knapper.forEach(btn => {
            btn.classList.remove('korrekt', 'feil');
        });
    }
}

// Tegn oppgavene ut på arbeidsarket
function tegnOppgaver() {
    const container = document.getElementById('oppgaver-container');
    const isUpper = document.getElementById('toggle-upper').checked;

    // Aktiverer to-kolonners gitter som standard layout i containeren
    container.classList.add('to-kolonner');
    container.innerHTML = '';

    gjeldendeOppgaver.forEach((oppg, idx) => {
        const kort = document.createElement('div');
        kort.className = 'oppgave-kort';

        // Sjekker om oppgaven er en setning (har maallord eller er lengre enn 2 ord)
        const erSetning = oppg.maallord || (oppg.tekst && oppg.tekst.trim().split(/\s+/).length > 2);
        if (erSetning) {
            kort.classList.add('full-bredde');
        }

        let tekst = oppg.tekst || oppg.ord;
        
        if (isUpper) {
            tekst = tekst.toUpperCase();
        }

        // Framhev målord dersom det er oppgitt
        if (oppg.maallord) {
            const ordSomSkalUtheves = isUpper ? oppg.maallord.toUpperCase() : oppg.maallord;
            const regex = new RegExp(ordSomSkalUtheves, 'gi');
            tekst = tekst.replace(regex, `<span class="maallord">${ordSomSkalUtheves}</span>`);
        }

        // Stokker svaralternativene
        const alternativer = [...oppg.alternativer].sort(() => 0.5 - Math.random());

        let html = `<div class="oppgave-ord">${idx + 1}. ${tekst}</div><div class="synonym-valg">`;
        
        alternativer.forEach(alt => {
            let visAlt = isUpper ? alt.toUpperCase() : alt;
            let erKorrekt = (alt.toLowerCase() === oppg.fasit.toLowerCase());
            html += `<button class="synonym-knapp" data-fasit="${erKorrekt}" onclick="velgKnapp(this)">${visAlt}</button>`;
        });
        
        html += `</div>`;

        kort.innerHTML = html;
        container.appendChild(kort);
    });

    oppdaterVisning();

    // Sjekk om fasit-bryteren står på når nye oppgaver tegnes
    const visFasit = document.getElementById('toggle-fasit') ? document.getElementById('toggle-fasit').checked : false;
    if (visFasit) {
        sjekkSvar();
    }
}

// Håndter valg av svar-knapp
function velgKnapp(btn) {
    const rod = btn.parentElement;
    rod.querySelectorAll('.synonym-knapp').forEach(b => b.classList.remove('valgt'));
    btn.classList.add('valgt');
}

// Sjekk og vis om valgt svar er riktig
function sjekkSvar() {
    const knapper = document.querySelectorAll('.synonym-knapp');
    knapper.forEach(btn => {
        const erRiktig = btn.getAttribute('data-fasit') === 'true';
        if (erRiktig) {
            btn.classList.add('korrekt');
        }
    });
}

// Oppdaterer tittel og skrifttype dynamisk
function oppdaterVisning() {
    const overskriftElement = document.getElementById('custom-title');
    const fontElement = document.getElementById('font-family');

    if (overskriftElement && document.getElementById('ark-overskrift')) {
        document.getElementById('ark-overskrift').innerText = overskriftElement.value;
    }
    if (fontElement && document.getElementById('oppgave-ark')) {
        document.getElementById('oppgave-ark').style.fontFamily = fontElement.value;
    }
}

// Nullstill til startskjerm
function nullstillValg() {
    // Skjul oppgavearket og vis velkomstbildet
    const placeholder = document.getElementById('placeholder-image');
    const ark = document.getElementById('oppgave-ark');
    if (placeholder) placeholder.style.display = 'flex';
    if (ark) ark.style.display = 'none';

    // Tilbakestill fasit-bryteren
    const toggleFasit = document.getElementById('toggle-fasit');
    if (toggleFasit) {
        toggleFasit.checked = false;
    }
}

// Initialisering når siden laster (NÅ UTEN AUTOMATISK GENEREROPPGAVER)
window.onload = function() {
    const themeSelect = document.getElementById('themeSelect');
    if (themeSelect) {
        changeTheme(themeSelect.value);
    }
    justerMaksAntall();
};