/* ==========================================================================
   NUTRITRACK - APP.JS
   ========================================================================== */

// ---------- COSTANTI ----------
const CHIAVE_TEMA = "nutritrack_tema";

const TIPI_PASTO = ["Colazione", "Pranzo", "Spuntino", "Cena"];
const MESI_BREVI = ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"];
const MESI_LUNGHI = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];
const MESI_NOMI = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
const GIORNI_BREVI = ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"];

const KCAL_MIN = 800;
const KCAL_MAX = 6000;
const FATTORE_BASE = 1.2;

// Database alimenti predefinito
const dbAlimenti = [
    { id: "db1", nome: "Mela", kcal100: 52, prot100: 0.3, carb100: 14, gras100: 0.2, unita: "g" },
    { id: "db2", nome: "Banana", kcal100: 89, prot100: 1.1, carb100: 23, gras100: 0.3, unita: "g" },
    { id: "db3", nome: "Petto di pollo", kcal100: 165, prot100: 31, carb100: 0, gras100: 3.6, unita: "g" },
    { id: "db4", nome: "Riso basmati (crudo)", kcal100: 350, prot100: 7, carb100: 78, gras100: 0.9, unita: "g" },
    { id: "db5", nome: "Pasta (cruda)", kcal100: 355, prot100: 12, carb100: 72, gras100: 1.5, unita: "g" },
    { id: "db6", nome: "Uovo (1 intero)", kcal100: 155, prot100: 13, carb100: 1.1, gras100: 11, unita: "g" },
    { id: "db7", nome: "Olio extravergine d'oliva", kcal100: 884, prot100: 0, carb100: 0, gras100: 100, unita: "g" },
    { id: "db8", nome: "Pane comune", kcal100: 265, prot100: 9, carb100: 49, gras100: 3.2, unita: "g" },
    { id: "db9", nome: "Latte parzialmente scremato", kcal100: 46, prot100: 3.4, carb100: 4.8, gras100: 1.5, unita: "ml" },
    { id: "db10", nome: "Yogurt greco 0%", kcal100: 59, prot100: 10, carb100: 3.6, gras100: 0.4, unita: "g" },
    { id: "db11", nome: "Tonno al naturale", kcal100: 100, prot100: 23, carb100: 0, gras100: 0.8, unita: "g" },
    { id: "db12", nome: "Mandorle", kcal100: 579, prot100: 21, carb100: 22, gras100: 50, unita: "g" },
    { id: "db13", nome: "Salmone fresco", kcal100: 208, prot100: 20, carb100: 0, gras100: 13, unita: "g" },
    { id: "db14", nome: "Fiocchi d'avena", kcal100: 389, prot100: 17, carb100: 66, gras100: 7, unita: "g" },
    { id: "db15", nome: "Avocado", kcal100: 160, prot100: 2, carb100: 9, gras100: 15, unita: "g" }
];

// Missioni giornaliere
const MISSIONI = [
    { id: "accesso", icona: "🔑", titolo: "Accedi all'app", breve: "Accesso", punti: 10 },
    { id: "peso", icona: "⚖️", titolo: "Registra il tuo peso", breve: "Peso registrato", punti: 15 },
    { id: "pasti", icona: "🍽️", titolo: "Registra almeno 3 pasti", breve: "Pasti registrati", punti: 15 },
    { id: "allenamento", icona: "🏃", titolo: "Fai un allenamento", breve: "Allenamento fatto", punti: 20 },
    { id: "sonno", icona: "😴", titolo: "Dormi almeno 7 ore", breve: "Sonno di 7 ore o più", punti: 15 },
    { id: "kcal", icona: "🎯", titolo: "Kcal tra il 90% e il 105% dell'obiettivo", breve: "Kcal in obiettivo", punti: 20 }
];
const BONUS_GIORNATA_PERFETTA = 25;
const BONUS_STREAK = [[3, 20], [7, 50], [14, 100], [30, 250], [60, 500], [100, 1000]];
const NOMI_LIVELLO = ["Novizio", "Costante", "Atleta", "Campione", "Leggenda"];

// Temi colore
const TEMI = [
    { id: "foresta", nome: "Foresta", colori: ["#1f8f5f", "#e6f5ed"], barra: "#f3f5f7" },
    { id: "oceano", nome: "Oceano", colori: ["#1e78d4", "#e3effc"], barra: "#f0f5fa" },
    { id: "tramonto", nome: "Tramonto", colori: ["#dd5a2c", "#fdebe3"], barra: "#faf5f1" },
    { id: "lavanda", nome: "Lavanda", colori: ["#7b52d6", "#efe9fb"], barra: "#f6f3fb" },
    { id: "notte", nome: "Notte", colori: ["#34c38a", "#12161c"], barra: "#12161c" }
];

// ---------- VARIABILI ----------
let utenteCorrente = null;   // id dell'account su Firebase (uid) di chi ha fatto il login
let usernameCorrente = "";   // nome utente scelto in registrazione
let profilo = null;          // dati personali: nome, sesso, eta, peso, altezza, kcal
let nomeUtente = "";
let OBIETTIVO_KCAL = 0;           // obiettivo di oggi (kcal scelte + allenamenti di oggi)
let OBIETTIVO_BASE = 0;           // kcal scelte dall'utente
let KCAL_ALLENAMENTO_OGGI = 0;    // kcal bruciate oggi con gli allenamenti

let alimenti = [];
let pasti = [];
let allenamenti = [];
let pesi = [];     // [{ data: "AAAA-MM-GG", kg: 70 }]
let sonno = [];    // [{ data: "AAAA-MM-GG", ore: 7.5 }]

let annoPeso = new Date().getFullYear();
let dataSelezionata = oggiISO();
let offsetSettimana = 0;
let calAnno;
let calMese;

let alimentoSelezionato = null;
let idPastoInModifica = null;
let idAlimentoInModifica = null;
let primoAccessoDati = false;
let passoDati = 1;   // in registrazione: 1 = dati personali, 2 = kcal
let sezioneProgressi = "peso";

let gioco = nuovoGioco();
let giornoCorrente = null;
let animaFiamma = false;

let sveglia = nuovaSveglia();
let timerSveglia = null;
let overlayAperto = false;
let ctxAudio = null;
let timerSuono = null;
let wakeLock = null;


// ---------- FUNZIONI DI SUPPORTO ----------
function getEl(id) {
    return document.getElementById(id);
}

function dueCifre(n) {
    if (n < 10) {
        return "0" + n;
    }
    return "" + n;
}

function isoDaData(d) {
    return d.getFullYear() + "-" + dueCifre(d.getMonth() + 1) + "-" + dueCifre(d.getDate());
}

function oggiISO() {
    return isoDaData(new Date());
}

function fDataIta(iso) {
    if (!iso) {
        return "";
    }
    let p = iso.split("-");
    return p[2] + "/" + p[1] + "/" + p[0];
}

function fDataLunga(iso) {
    let p = iso.split("-");
    return Number(p[2]) + " " + MESI_LUNGHI[Number(p[1]) - 1] + " " + Number(p[0]);
}

function aggiungiGiorni(iso, delta) {
    let p = iso.split("-");
    let d = new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]) + delta);
    return isoDaData(d);
}

function giornoDellAnno(iso) {
    let p = iso.split("-");
    let giorno = Date.UTC(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
    let capodanno = Date.UTC(Number(p[0]), 0, 1);
    return Math.round((giorno - capodanno) / 86400000);
}

function giorniNellAnno(anno) {
    if ((anno % 4 === 0 && anno % 100 !== 0) || anno % 400 === 0) {
        return 366;
    }
    return 365;
}

function etichettaGiorno(iso) {
    if (iso === oggiISO()) {
        return "oggi";
    }
    if (iso === aggiungiGiorni(oggiISO(), -1)) {
        return "ieri";
    }
    return fDataIta(iso).slice(0, 5);
}

// numero con al massimo "decimali" cifre decimali (senza zeri inutili)
function fmtNum(n, decimali) {
    if (decimali === undefined) {
        decimali = 1;
    }
    return String(Number(n.toFixed(decimali)));
}

// ore decimali -> "7h 30m"
function fmtOre(ore) {
    let tot = Math.round(ore * 60);
    let h = Math.floor(tot / 60);
    let m = tot % 60;
    if (m) {
        return h + "h " + dueCifre(m) + "m";
    }
    return h + "h";
}

function minimo(lista) {
    let risultato = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] < risultato) {
            risultato = lista[i];
        }
    }
    return risultato;
}

function massimo(lista) {
    let risultato = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > risultato) {
            risultato = lista[i];
        }
    }
    return risultato;
}

function dataDecrescente(a, b) {
    return b.data.localeCompare(a.data);
}

function dataCrescente(a, b) {
    return a.data.localeCompare(b.data);
}

function copiaCampi(destinazione, origine) {
    for (let chiave in origine) {
        destinazione[chiave] = origine[chiave];
    }
    return destinazione;
}

function mostraToast(msg, errore) {
    let t = document.createElement("div");
    t.className = "toast";
    if (errore) {
        t.className = "toast toast-err";
    }
    t.textContent = msg;
    let aperti = document.querySelectorAll(".toast").length;
    if (aperti > 0) {
        t.style.bottom = (105 + aperti * 58) + "px";
    }
    document.body.appendChild(t);
    setTimeout(function () {
        t.remove();
    }, 2500);
}


// ---------- SALVATAGGIO DATI (nel cloud, su Firebase) ----------
// Al login i dati dell'utente vengono scaricati e tenuti in memoria (cacheDati, come testo JSON).
// leggiDati e salvaDati restano semplici; il salvataggio nel cloud avviene in background.
let cacheDati = {};
let scrittureInAttesa = {};       // nome -> { uid, json, timer }
let scrittureInVolo = [];         // promesse di salvataggi inviati e non ancora confermati
let erroreCloudMostrato = false;

function leggiDati(nome, predefinito) {
    try {
        let valore = JSON.parse(cacheDati[nome]);
        if (valore === null || valore === undefined) {
            return predefinito;
        }
        return valore;
    } catch (e) {
        return predefinito;
    }
}

function salvaDati(nome, valore) {
    let json = JSON.stringify(valore);
    if (json === undefined) {
        json = "null";
    }
    cacheDati[nome] = json;
    accodaScrittura(nome, json);
    if (nome === "allenamenti") {
        aggiornaObiettivo();
    }
    if (nome === "pasti" || nome === "allenamenti" || nome === "pesi" || nome === "sonno") {
        controllaMissioni();
    }
}

// Aspetta mezzo secondo (così più modifiche ravvicinate diventano un solo salvataggio)
function accodaScrittura(nome, json) {
    if (!utenteCorrente) {
        return;
    }
    if (scrittureInAttesa[nome]) {
        clearTimeout(scrittureInAttesa[nome].timer);
    }
    scrittureInAttesa[nome] = {
        uid: utenteCorrente,
        json: json,
        timer: setTimeout(function () { inviaScrittura(nome); }, 500)
    };
}

function nomiInAttesa() {
    return Object.keys(scrittureInAttesa);
}

function inviaScrittura(nome) {
    let voce = scrittureInAttesa[nome];
    if (!voce) {
        return Promise.resolve();
    }
    clearTimeout(voce.timer);
    delete scrittureInAttesa[nome];
    let promessa = NT.salva(voce.uid, nome, voce.json)
        .catch(function (err) {
            console.error("Salvataggio nel cloud non riuscito:", err);
            if (!erroreCloudMostrato) {
                erroreCloudMostrato = true;
                mostraToast("Salvataggio nel cloud non riuscito. Controlla la connessione.", true);
                setTimeout(function () { erroreCloudMostrato = false; }, 15000);
            }
        })
        .then(function () {
            let posizione = scrittureInVolo.indexOf(promessa);
            if (posizione >= 0) {
                scrittureInVolo.splice(posizione, 1);
            }
        });
    scrittureInVolo.push(promessa);
    return promessa;
}

// Invia subito le modifiche in coda e aspetta la conferma (al massimo qualche secondo)
function svuotaCodaScritture() {
    let nomi = nomiInAttesa();
    for (let i = 0; i < nomi.length; i++) {
        inviaScrittura(nomi[i]);
    }
    return Promise.race([
        Promise.all(scrittureInVolo.slice()),
        new Promise(function (ok) { setTimeout(ok, 4000); })
    ]);
}

function nessunaScritturaPendente() {
    return nomiInAttesa().length === 0 && scrittureInVolo.length === 0;
}

function kcalDelGiorno(iso) {
    let totale = 0;
    for (let i = 0; i < pasti.length; i++) {
        if (pasti[i].data === iso) {
            totale = totale + Number(pasti[i].kcal);
        }
    }
    return totale;
}


// ---------- NAVIGAZIONE TRA LE PAGINE ----------
function mostraPagina(id, voceMenu) {
    let pagine = document.querySelectorAll(".pagina");
    for (let i = 0; i < pagine.length; i++) {
        pagine[i].classList.remove("attiva");
    }
    let voci = document.querySelectorAll(".menu-item");
    for (let i = 0; i < voci.length; i++) {
        voci[i].classList.remove("attivo");
    }

    let pagina = getEl(id);
    if (pagina) {
        pagina.classList.add("attiva");
    }

    // Peso/Sonno e dettaglio kcal non hanno una voce nel menu: resta evidenziata la Home
    let idMenu = id;
    if (id === "progressi" || id === "dettaglio-kcal") {
        idMenu = "home";
    }
    let voce = voceMenu;
    if (!voce) {
        voce = document.querySelector('.menu-item[onclick*="\'' + idMenu + '\'"]');
    }
    if (voce) {
        voce.classList.add("attivo");
    }

    if (id === "home") mostraHome();
    if (id === "cronologia") mostraCronologia();
    if (id === "calendario") mostraCalendario();
    if (id === "alimenti") mostraAlimenti();
    if (id === "allenamenti") mostraAllenamenti();
    if (id === "dettaglio-kcal") mostraDettaglioKcal();
    if (id === "progressi") mostraProgressi();
}

// ridisegna la pagina che si sta guardando
function aggiornaPaginaCorrente() {
    let attiva = document.querySelector(".pagina.attiva");
    if (!attiva) {
        return;
    }
    if (attiva.id === "home") mostraHome();
    if (attiva.id === "cronologia") mostraCronologia();
    if (attiva.id === "calendario") mostraCalendario();
    if (attiva.id === "alimenti") mostraAlimenti();
    if (attiva.id === "allenamenti") mostraAllenamenti();
    if (attiva.id === "dettaglio-kcal") mostraDettaglioKcal();
    if (attiva.id === "progressi") mostraProgressi();
}


// ---------- HOME ----------
function cambiaSettimana(delta) {
    if (delta > 0 && offsetSettimana >= 0) {
        return;
    }
    offsetSettimana = offsetSettimana + delta;
    mostraHome();
}

function ggMm(d) {
    return dueCifre(d.getDate()) + "/" + dueCifre(d.getMonth() + 1);
}

function mostraHome() {
    if (nomeUtente) {
        getEl("saluto").textContent = "Ciao " + nomeUtente + "! 👋";
    } else {
        getEl("saluto").textContent = "Ciao! 👋";
    }
    aggiornaObiettivo();

    // card delle kcal di oggi
    let kcal = kcalDelGiorno(oggiISO());
    let percentuale = 0;
    if (OBIETTIVO_KCAL) {
        percentuale = Math.round((kcal / OBIETTIVO_KCAL) * 100);
    }
    getEl("kcalOggi").textContent = kcal + " kcal";
    if (KCAL_ALLENAMENTO_OGGI > 0) {
        getEl("obiettivoTesto").textContent = "su " + OBIETTIVO_KCAL + " kcal (🏃 +" + KCAL_ALLENAMENTO_OGGI + ") · tocca per dettagli";
    } else {
        getEl("obiettivoTesto").textContent = "su " + OBIETTIVO_KCAL + " kcal · tocca per dettagli";
    }
    document.querySelector(".cerchio span").textContent = percentuale + "%";

    // la freccia "avanti" della settimana non va oltre la settimana corrente
    let btnAvanti = getEl("btnSettimanaAvanti");
    if (offsetSettimana >= 0) {
        btnAvanti.style.opacity = "0.3";
        btnAvanti.style.cursor = "default";
        btnAvanti.disabled = true;
    } else {
        btnAvanti.style.opacity = "1";
        btnAvanti.style.cursor = "pointer";
        btnAvanti.disabled = false;
    }

    // lunedì e domenica della settimana mostrata
    let oggi = new Date();
    let giornoSettimana = oggi.getDay();
    let diffALunedi = 1 - giornoSettimana;
    if (giornoSettimana === 0) {
        diffALunedi = -6;
    }
    let lunedi = new Date(oggi.getFullYear(), oggi.getMonth(), oggi.getDate() + diffALunedi + offsetSettimana * 7);
    let domenica = new Date(lunedi.getFullYear(), lunedi.getMonth(), lunedi.getDate() + 6);

    if (offsetSettimana === 0) {
        getEl("titoloSettimana").textContent = "Settimana corrente";
    } else {
        getEl("titoloSettimana").textContent = ggMm(lunedi) + " - " + ggMm(domenica);
    }

    // grafico a barre della settimana
    let nomiGiorni = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];
    let dati = [];
    let massimoKcal = Math.max(OBIETTIVO_KCAL, 1);
    for (let i = 0; i < 7; i++) {
        let d = new Date(lunedi.getFullYear(), lunedi.getMonth(), lunedi.getDate() + i);
        let iso = isoDaData(d);
        let k = kcalDelGiorno(iso);
        dati.push({ iso: iso, etichetta: nomiGiorni[i], kcal: k });
        if (k > massimoKcal) {
            massimoKcal = k;
        }
    }

    let html = "";
    for (let i = 0; i < dati.length; i++) {
        let x = dati[i];
        let valore = "-";
        if (x.kcal > 0) {
            valore = x.kcal;
        }
        html += `
            <div class="colonna-grafico" style="cursor:pointer" onclick="apriCalendario('${x.iso}')">
                <em class="val">${valore}</em>
                <div class="barra" style="height:${(x.kcal / massimoKcal) * 100}px"></div>
                <span>${x.etichetta}</span>
            </div>
        `;
    }
    getEl("graficoKcal").innerHTML = html;

    // ultimi 3 allenamenti
    if (allenamenti.length === 0) {
        getEl("allenamentiHome").innerHTML = '<p class="vuoto">Nessun allenamento registrato.</p>';
    } else {
        let recenti = allenamenti.slice().sort(dataDecrescente).slice(0, 3);
        let htmlAll = "";
        for (let i = 0; i < recenti.length; i++) {
            htmlAll += htmlAllenamento(recenti[i], false);
        }
        getEl("allenamentiHome").innerHTML = htmlAll;
    }

    aggiornaMiniCard();
    aggiornaSchedaPunti();
}


// ---------- DETTAGLIO KCAL E MACRONUTRIENTI ----------
function cercaAlimentoPerNome(nome) {
    let tutti = dbAlimenti.concat(alimenti);
    for (let i = 0; i < tutti.length; i++) {
        if (tutti[i].nome.toLowerCase() === nome.toLowerCase()) {
            return tutti[i];
        }
    }
    return null;
}

// proteine, carboidrati e grassi di un pasto (se non sono salvati si calcolano dal database)
function calcolaMacroPasto(p) {
    let prot = p.prot || 0;
    let carb = p.carb || 0;
    let gras = p.gras || 0;

    if (!prot && !carb && !gras) {
        let trovato = cercaAlimentoPerNome(p.alimento);
        if (trovato) {
            prot = Math.round(((trovato.prot100 || 0) * p.quantita) / 100 * 10) / 10;
            carb = Math.round(((trovato.carb100 || 0) * p.quantita) / 100 * 10) / 10;
            gras = Math.round(((trovato.gras100 || 0) * p.quantita) / 100 * 10) / 10;
        }
    }
    return { prot: prot, carb: carb, gras: gras };
}

function mostraDettaglioKcal() {
    aggiornaObiettivo();
    getEl("obiettivoKcalValore").textContent = OBIETTIVO_KCAL + " kcal";
    if (KCAL_ALLENAMENTO_OGGI > 0) {
        getEl("obiettivoDettaglio").textContent = "Base " + OBIETTIVO_BASE + " kcal + " + KCAL_ALLENAMENTO_OGGI + " kcal bruciate oggi con l'allenamento";
    } else {
        getEl("obiettivoDettaglio").textContent = "Base " + OBIETTIVO_BASE + " kcal · gli allenamenti di oggi si sommano all'obiettivo";
    }

    // pasti di oggi
    let oggi = oggiISO();
    let pastiOggi = [];
    for (let i = 0; i < pasti.length; i++) {
        if (pasti[i].data === oggi) {
            pastiOggi.push(pasti[i]);
        }
    }

    // totali: macronutrienti della giornata e kcal di ogni pasto
    let totProt = 0;
    let totCarb = 0;
    let totGras = 0;
    let kcalPasto = { Colazione: 0, Pranzo: 0, Spuntino: 0, Cena: 0 };
    for (let i = 0; i < pastiOggi.length; i++) {
        let m = calcolaMacroPasto(pastiOggi[i]);
        totProt = totProt + m.prot;
        totCarb = totCarb + m.carb;
        totGras = totGras + m.gras;
        if (kcalPasto[pastiOggi[i].pasto] !== undefined) {
            kcalPasto[pastiOggi[i].pasto] = kcalPasto[pastiOggi[i].pasto] + (Number(pastiOggi[i].kcal) || 0);
        }
    }

    // barre dei macronutrienti: la percentuale conta le kcal (carbo e proteine 4 kcal/g, grassi 9 kcal/g)
    let macro = [
        { etichetta: "Carboidrati", grammi: totCarb, kcalPerGrammo: 4, classe: "carb" },
        { etichetta: "Proteine", grammi: totProt, kcalPerGrammo: 4, classe: "prot" },
        { etichetta: "Grassi", grammi: totGras, kcalPerGrammo: 9, classe: "gras" }
    ];
    let kcalMacroTot = 0;
    for (let i = 0; i < macro.length; i++) {
        kcalMacroTot = kcalMacroTot + macro[i].grammi * macro[i].kcalPerGrammo;
    }

    let htmlMacro = "";
    for (let i = 0; i < macro.length; i++) {
        let perc = 0;
        if (kcalMacroTot > 0) {
            perc = Math.round((macro[i].grammi * macro[i].kcalPerGrammo / kcalMacroTot) * 100);
        }
        htmlMacro += `
            <div class="macro-riga">
                <div class="macro-testa">
                    <span>${macro[i].etichetta}</span>
                    <span class="macro-valore">${fmtNum(macro[i].grammi)} g</span>
                    <span class="macro-perc">${perc}%</span>
                </div>
                <div class="macro-barra">
                    <div class="macro-riempimento ${macro[i].classe}" style="width:${perc}%"></div>
                </div>
            </div>
        `;
    }
    getEl("barreMacro").innerHTML = htmlMacro;

    let htmlKcalPasti = "";
    for (let i = 0; i < TIPI_PASTO.length; i++) {
        htmlKcalPasti += `
            <div class="kcal-pasto">
                <span>${TIPI_PASTO[i]}</span>
                <span>${kcalPasto[TIPI_PASTO[i]]} kcal</span>
            </div>
        `;
    }
    getEl("listaKcalPasti").innerHTML = htmlKcalPasti;

    // elenco dei singoli alimenti di oggi
    if (pastiOggi.length === 0) {
        getEl("riepilogoPastiOggi").innerHTML = '<p class="vuoto">Nessun pasto registrato per oggi.</p>';
        return;
    }
    let htmlPasti = "";
    for (let i = 0; i < pastiOggi.length; i++) {
        let p = pastiOggi[i];
        let m = calcolaMacroPasto(p);
        htmlPasti += `
            <div class="elemento">
                <h4>${p.alimento}</h4>
                <p><strong>${p.pasto}</strong> · ${p.quantita}g · ${p.kcal} kcal</p>
                <p style="font-size:12px;color:var(--testo-2);margin-top:6px">
                    Proteine: ${m.prot}g | Carboidrati: ${m.carb}g | Grassi: ${m.gras}g
                </p>
            </div>
        `;
    }
    getEl("riepilogoPastiOggi").innerHTML = htmlPasti;
}

function mostraTabDettaglio(tab) {
    if (tab === "macro") {
        getEl("pannelloMacro").style.display = "";
        getEl("pannelloPasti").style.display = "none";
        getEl("tabMacro").classList.add("attivo");
        getEl("tabPasti").classList.remove("attivo");
    } else {
        getEl("pannelloMacro").style.display = "none";
        getEl("pannelloPasti").style.display = "";
        getEl("tabMacro").classList.remove("attivo");
        getEl("tabPasti").classList.add("attivo");
    }
}


// ---------- DIARIO E PASTI ----------
function mostraCronologia() {
    if (dataSelezionata === oggiISO()) {
        getEl("dataDiarioTesto").textContent = "Oggi (" + fDataIta(dataSelezionata) + ")";
    } else {
        getEl("dataDiarioTesto").textContent = fDataIta(dataSelezionata);
    }

    let filtrati = [];
    for (let i = 0; i < pasti.length; i++) {
        if (pasti[i].data === dataSelezionata) {
            filtrati.push(pasti[i]);
        }
    }

    if (filtrati.length === 0) {
        getEl("listaPasti").innerHTML = '<p class="vuoto">Nessun pasto registrato per questo giorno.</p>';
        return;
    }

    let html = "";
    for (let i = 0; i < filtrati.length; i++) {
        let p = filtrati[i];
        html += `
            <div class="elemento">
                <h4>${p.alimento}</h4>
                <p><strong>${p.pasto}</strong> · ${p.quantita}g · ${p.kcal} kcal</p>
                <button class="modifica" onclick="apriModificaPasto(${p.id})">✏️</button>
                <button class="elimina" onclick="eliminaPasto(${p.id})">✕</button>
            </div>
        `;
    }
    getEl("listaPasti").innerHTML = html;
}

function cercaAlimentiDB() {
    let testo = getEl("cercaAlimento").value.toLowerCase().trim();
    let box = getEl("risultatiRicerca");

    if (!testo) {
        box.style.display = "none";
        return;
    }

    let tutti = dbAlimenti.concat(alimenti);
    let html = "";
    for (let i = 0; i < tutti.length; i++) {
        let a = tutti[i];
        if (a.nome.toLowerCase().includes(testo)) {
            html += `
                <div style="padding:10px;border-bottom:1px solid var(--bordo-soft);cursor:pointer" onclick="selezionaAlimentoRicerca('${a.id}')">
                    <strong>${a.nome}</strong> <small style="color:var(--muted)">(${a.kcal100} kcal / 100g)</small>
                </div>
            `;
        }
    }
    if (html === "") {
        html = '<div style="padding:10px;font-size:13px;color:var(--muted)">Nessun alimento trovato</div>';
    }
    box.innerHTML = html;
    box.style.display = "block";
}

function selezionaAlimentoRicerca(id) {
    let tutti = dbAlimenti.concat(alimenti);
    for (let i = 0; i < tutti.length; i++) {
        if (tutti[i].id === id) {
            alimentoSelezionato = tutti[i];
        }
    }
    getEl("cercaAlimento").value = alimentoSelezionato.nome;
    getEl("risultatiRicerca").style.display = "none";
    calcolaKcalPasto();
}

function calcolaKcalPasto() {
    let quantita = parseFloat(getEl("quantitaPasto").value) || 0;
    if (alimentoSelezionato && quantita > 0) {
        let stima = Math.round((alimentoSelezionato.kcal100 * quantita) / 100);
        getEl("kcalCalcolate").textContent = "Calorie stimate: " + stima + " kcal";
    } else {
        getEl("kcalCalcolate").textContent = "Calorie stimate: 0 kcal";
    }
}

function aggiungiPasto(e) {
    e.preventDefault();
    let nome = getEl("cercaAlimento").value.trim();
    let quantita = parseFloat(getEl("quantitaPasto").value);
    let tipo = getEl("tipoPasto").value;

    if (!nome || !quantita) {
        return;
    }

    let kcal = 0;
    let prot = 0;
    let carb = 0;
    let gras = 0;

    if (alimentoSelezionato && alimentoSelezionato.nome.toLowerCase() === nome.toLowerCase()) {
        kcal = Math.round((alimentoSelezionato.kcal100 * quantita) / 100);
        prot = Math.round((alimentoSelezionato.prot100 * quantita) / 100 * 10) / 10;
        carb = Math.round((alimentoSelezionato.carb100 * quantita) / 100 * 10) / 10;
        gras = Math.round((alimentoSelezionato.gras100 * quantita) / 100 * 10) / 10;
    } else {
        // alimento scritto a mano: stima di 1,5 kcal per grammo
        kcal = Math.round(quantita * 1.5);
    }

    let nuovo = {
        id: Date.now(),
        data: dataSelezionata,
        pasto: tipo,
        alimento: nome,
        quantita: quantita,
        kcal: kcal,
        prot: prot,
        carb: carb,
        gras: gras
    };
    pasti.push(nuovo);
    salvaDati("pasti", pasti);

    getEl("formPasto").reset();
    getEl("kcalCalcolate").textContent = "Calorie stimate: 0 kcal";
    alimentoSelezionato = null;

    mostraToast("Pasto aggiunto!");
    mostraCronologia();
    mostraHome();
}

function trovaPasto(id) {
    for (let i = 0; i < pasti.length; i++) {
        if (pasti[i].id === id) {
            return pasti[i];
        }
    }
    return null;
}

function eliminaPasto(id) {
    let rimasti = [];
    for (let i = 0; i < pasti.length; i++) {
        if (pasti[i].id !== id) {
            rimasti.push(pasti[i]);
        }
    }
    pasti = rimasti;
    salvaDati("pasti", pasti);
    mostraToast("Pasto eliminato");
    mostraCronologia();
    mostraHome();
}

// --- modifica di un pasto ---
function apriModificaPasto(id) {
    let p = trovaPasto(id);
    if (!p) {
        return;
    }
    idPastoInModifica = id;
    getEl("modTipoPasto").value = p.pasto;
    getEl("modQuantitaPasto").value = p.quantita;
    calcolaModKcal();
    getEl("modaleModificaPasto").style.display = "flex";
}

// kcal per grammo del pasto (se non si può calcolare si usa 1,5)
function kcalPerGrammo(p) {
    if (p.quantita > 0) {
        return p.kcal / p.quantita;
    }
    return 1.5;
}

function calcolaModKcal() {
    let p = trovaPasto(idPastoInModifica);
    if (!p) {
        return;
    }
    let quantita = parseFloat(getEl("modQuantitaPasto").value) || 0;
    let stima = Math.round(quantita * kcalPerGrammo(p));
    getEl("modKcalTesto").textContent = "Nuove calorie stimate: " + stima + " kcal";
}

function chiudiModalePasto() {
    getEl("modaleModificaPasto").style.display = "none";
    idPastoInModifica = null;
}

function confermaModificaPasto() {
    let p = trovaPasto(idPastoInModifica);
    if (!p) {
        return;
    }
    let quantita = parseFloat(getEl("modQuantitaPasto").value);
    if (!quantita) {
        return;
    }

    let rapporto = kcalPerGrammo(p);
    let fattore = 1;
    if (p.quantita > 0) {
        fattore = quantita / p.quantita;
    }
    p.pasto = getEl("modTipoPasto").value;
    p.prot = Math.round((p.prot || 0) * fattore * 10) / 10;
    p.carb = Math.round((p.carb || 0) * fattore * 10) / 10;
    p.gras = Math.round((p.gras || 0) * fattore * 10) / 10;
    p.quantita = quantita;
    p.kcal = Math.round(quantita * rapporto);

    salvaDati("pasti", pasti);
    chiudiModalePasto();
    mostraToast("Pasto aggiornato!");
    mostraCronologia();
    mostraHome();
}


// ---------- ALIMENTI PERSONALIZZATI ----------
function salvaAlimento(e) {
    e.preventDefault();
    let nome = getEl("nomeAlimento").value.trim();
    let kcal100 = parseFloat(getEl("kcal100").value);
    let prot100 = parseFloat(getEl("prot100").value) || 0;
    let carb100 = parseFloat(getEl("carb100").value) || 0;
    let gras100 = parseFloat(getEl("gras100").value) || 0;

    if (!nome || isNaN(kcal100)) {
        return;
    }

    let nuovo = {
        id: "cust_" + Date.now(),
        nome: nome,
        kcal100: kcal100,
        prot100: prot100,
        carb100: carb100,
        gras100: gras100,
        unita: "g"
    };
    alimenti.push(nuovo);
    salvaDati("alimenti", alimenti);

    getEl("formAlimento").reset();
    mostraToast("Alimento salvato!");
    mostraAlimenti();
}

function mostraAlimenti() {
    // 1. alimenti personalizzati
    if (alimenti.length === 0) {
        getEl("listaAlimentiPersonalizzati").innerHTML = '<p class="vuoto">Nessun alimento personalizzato salvato.</p>';
    } else {
        let html = "";
        for (let i = 0; i < alimenti.length; i++) {
            let a = alimenti[i];
            html += `
                <div class="elemento">
                    <h4>${a.nome}</h4>
                    <p>${a.kcal100} kcal / 100${a.unita || "g"}</p>
                    <p style="font-size:12px;color:var(--testo-2);margin-top:4px">
                        P: ${a.prot100 || 0}g | C: ${a.carb100 || 0}g | G: ${a.gras100 || 0}g
                    </p>
                    <button class="modifica" onclick="apriModificaAlimento('${a.id}')">✏️</button>
                    <button class="elimina" onclick="eliminaAlimento('${a.id}')">✕</button>
                </div>
            `;
        }
        getEl("listaAlimentiPersonalizzati").innerHTML = html;
    }

    // 2. ultimi 5 pasti inseriti
    if (pasti.length === 0) {
        getEl("listaElementiRecenti").innerHTML = '<p class="vuoto">Nessun elemento recente.</p>';
        return;
    }
    let ultimi = pasti.slice().sort(function (a, b) {
        return b.id - a.id;
    }).slice(0, 5);

    let htmlRecenti = "";
    for (let i = 0; i < ultimi.length; i++) {
        let p = ultimi[i];
        htmlRecenti += `
            <div class="elemento">
                <h4>${p.alimento}</h4>
                <p><strong>${p.pasto}</strong> · ${p.quantita}g · ${p.kcal} kcal</p>
                <p style="font-size:12px;color:var(--muted);margin-top:4px">Data: ${fDataIta(p.data)}</p>
            </div>
        `;
    }
    getEl("listaElementiRecenti").innerHTML = htmlRecenti;
}

function trovaAlimentoPersonale(id) {
    for (let i = 0; i < alimenti.length; i++) {
        if (alimenti[i].id === id) {
            return alimenti[i];
        }
    }
    return null;
}

function eliminaAlimento(id) {
    let rimasti = [];
    for (let i = 0; i < alimenti.length; i++) {
        if (alimenti[i].id !== id) {
            rimasti.push(alimenti[i]);
        }
    }
    alimenti = rimasti;
    salvaDati("alimenti", alimenti);
    mostraToast("Alimento eliminato");
    mostraAlimenti();
}

function apriModificaAlimento(id) {
    let a = trovaAlimentoPersonale(id);
    if (!a) {
        return;
    }
    idAlimentoInModifica = id;
    getEl("modNomeAlimento").value = a.nome;
    getEl("modKcal100").value = a.kcal100;
    getEl("modProt100").value = a.prot100 || 0;
    getEl("modCarb100").value = a.carb100 || 0;
    getEl("modGras100").value = a.gras100 || 0;
    getEl("modaleModificaAlimento").style.display = "flex";
}

function chiudiModaleAlimento() {
    getEl("modaleModificaAlimento").style.display = "none";
    idAlimentoInModifica = null;
}

function confermaModificaAlimento() {
    let a = trovaAlimentoPersonale(idAlimentoInModifica);
    if (!a) {
        return;
    }

    let nome = getEl("modNomeAlimento").value.trim();
    let kcal100 = parseFloat(getEl("modKcal100").value);
    let prot100 = parseFloat(getEl("modProt100").value) || 0;
    let carb100 = parseFloat(getEl("modCarb100").value) || 0;
    let gras100 = parseFloat(getEl("modGras100").value) || 0;

    if (!nome || isNaN(kcal100)) {
        mostraToast("Inserisci nome e kcal validi", true);
        return;
    }

    a.nome = nome;
    a.kcal100 = kcal100;
    a.prot100 = prot100;
    a.carb100 = carb100;
    a.gras100 = gras100;

    salvaDati("alimenti", alimenti);
    chiudiModaleAlimento();
    mostraToast("Alimento aggiornato!");
    mostraAlimenti();
}


// ---------- ALLENAMENTI ----------
function salvaAllenamento(e) {
    e.preventDefault();
    let tipo = getEl("tipoAllenamento").value.trim();
    let durata = parseFloat(getEl("durataAllenamento").value);
    let kcal = parseFloat(getEl("kcalBruciate").value) || 0;
    let note = getEl("noteAllenamento").value.trim();

    if (!tipo || !durata) {
        return;
    }

    let nuovo = {
        id: Date.now(),
        data: dataSelezionata,
        tipo: tipo,
        durata: durata,
        kcal: kcal,
        note: note
    };
    allenamenti.push(nuovo);
    salvaDati("allenamenti", allenamenti);

    getEl("formAllenamento").reset();
    mostraToast("Allenamento salvato!");
    mostraAllenamenti();
    mostraHome();
}

function htmlAllenamento(a, mostraElimina) {
    let kcalTesto = "";
    if (a.kcal > 0) {
        kcalTesto = "· 🔥 " + a.kcal + " kcal";
    }
    let noteHtml = "";
    if (a.note) {
        noteHtml = `<p style="font-size:13px;color:var(--testo-2);margin-top:4px">${a.note}</p>`;
    }
    let btnElimina = "";
    if (mostraElimina) {
        btnElimina = `<button class="elimina" onclick="eliminaAllenamento(${a.id})">✕</button>`;
    }
    return `
        <div class="elemento">
            <h4>${a.tipo}</h4>
            <p>⏱️ ${a.durata} min ${kcalTesto}</p>
            ${noteHtml}
            <p style="font-size:12px;color:var(--muted);margin-top:4px">Data: ${fDataIta(a.data)}</p>
            ${btnElimina}
        </div>
    `;
}

function mostraAllenamenti() {
    if (allenamenti.length === 0) {
        getEl("listaAllenamenti").innerHTML = '<p class="vuoto">Nessun allenamento registrato.</p>';
        return;
    }
    let ordinati = allenamenti.slice().sort(dataDecrescente);
    let html = "";
    for (let i = 0; i < ordinati.length; i++) {
        html += htmlAllenamento(ordinati[i], true);
    }
    getEl("listaAllenamenti").innerHTML = html;
}

function eliminaAllenamento(id) {
    let rimasti = [];
    for (let i = 0; i < allenamenti.length; i++) {
        if (allenamenti[i].id !== id) {
            rimasti.push(allenamenti[i]);
        }
    }
    allenamenti = rimasti;
    salvaDati("allenamenti", allenamenti);
    mostraToast("Allenamento eliminato");
    mostraAllenamenti();
    mostraHome();
}


// ---------- CALENDARIO ----------
function haStreak(iso) {
    return gioco.accessi.indexOf(iso) !== -1;
}

function mostraCalendario() {
    let ora = new Date();
    if (calAnno === undefined) {
        calAnno = ora.getFullYear();
    }
    if (calMese === undefined) {
        calMese = ora.getMonth();
    }

    getEl("meseAnnoCal").textContent = MESI_NOMI[calMese] + " " + calAnno;

    let primoGiorno = new Date(calAnno, calMese, 1);
    let ultimoGiorno = new Date(calAnno, calMese + 1, 0);
    let giorniDelMese = ultimoGiorno.getDate();

    // il calendario parte dal lunedì: quante caselle vuote prima del giorno 1
    let caselleVuote = primoGiorno.getDay() - 1;
    if (caselleVuote === -1) {
        caselleVuote = 6;
    }

    let html = "";
    for (let i = 0; i < caselleVuote; i++) {
        html += '<div class="cal-giorno vuoto"></div>';
    }

    for (let g = 1; g <= giorniDelMese; g++) {
        let iso = calAnno + "-" + dueCifre(calMese + 1) + "-" + dueCifre(g);
        let kcalG = kcalDelGiorno(iso);

        let haAllenamento = false;
        for (let i = 0; i < allenamenti.length; i++) {
            if (allenamenti[i].data === iso) {
                haAllenamento = true;
            }
        }

        let classe = "cal-giorno";
        if (kcalG > 0) classe += " dati";
        if (iso === oggiISO()) classe += " oggi";
        if (iso === dataSelezionata) classe += " sel";

        // giorni con la streak: i giorni di fila formano una fascia continua
        // (la fascia si spezza a inizio e fine riga, cioè lunedì e domenica)
        let fiammella = "";
        if (haStreak(iso)) {
            let colonna = (caselleVuote + g - 1) % 7;   // 0 = lunedì, 6 = domenica
            let ieri = aggiungiGiorni(iso, -1);
            let domani = aggiungiGiorni(iso, 1);
            classe += " streak";
            if (g === 1 || !haStreak(ieri) || colonna === 0) {
                classe += " st-inizio";
            }
            if (g === giorniDelMese || !haStreak(domani) || colonna === 6) {
                classe += " st-fine";
            } else {
                classe += " st-continua";
            }
            // la fiammella segna il primo giorno di ogni streak
            if (!haStreak(ieri)) {
                fiammella = '<i class="fiamma-mini">🔥</i>';
            }
        }

        let kcalHtml = "";
        if (kcalG > 0) {
            kcalHtml = "<small>" + kcalG + "</small>";
        }
        let pallino = "";
        if (haAllenamento) {
            pallino = '<div class="pallino"></div>';
        }

        html += `
            <div class="${classe}" onclick="selezionaDataCal('${iso}')">
                ${fiammella}
                <span>${g}</span>
                ${kcalHtml}
                ${pallino}
            </div>
        `;
    }

    getEl("grigliaCalendario").innerHTML = html;
    aggiornaRiepilogoStreakCal();
    aggiornaDettaglioCal();
}

function giorniTesto(n) {
    if (n === 1) {
        return n + " giorno";
    }
    return n + " giorni";
}

// riquadro sopra il calendario: da quando dura la streak attuale e il record
function aggiornaRiepilogoStreakCal() {
    let streak = streakAttiva();
    if (streak > 0) {
        let inizio = aggiungiGiorni(gioco.ultimoAccesso, -(streak - 1));
        let record = Math.max(gioco.record, streak);
        getEl("calStreakInfo").innerHTML = `
            <span class="cs-fiamma">🔥</span>
            <div>
                <strong>Streak attuale: ${giorniTesto(streak)}</strong>
                <small>Dal ${fDataLunga(inizio)} · record: ${giorniTesto(record)}</small>
            </div>`;
    } else {
        let testoRecord = "";
        if (gioco.record > 0) {
            testoRecord = " · record: " + giorniTesto(gioco.record);
        }
        getEl("calStreakInfo").innerHTML = `
            <span class="cs-fiamma spenta">🔥</span>
            <div>
                <strong>Nessuna streak attiva</strong>
                <small>Accedi ogni giorno per accenderla${testoRecord}</small>
            </div>`;
    }
}

function cambiaMese(delta) {
    calMese = calMese + delta;
    if (calMese < 0) {
        calMese = 11;
        calAnno = calAnno - 1;
    } else if (calMese > 11) {
        calMese = 0;
        calAnno = calAnno + 1;
    }
    mostraCalendario();
}

function selezionaDataCal(iso) {
    dataSelezionata = iso;
    mostraCalendario();
}

function apriCalendario(iso) {
    dataSelezionata = iso;
    let p = iso.split("-");
    calAnno = parseInt(p[0]);
    calMese = parseInt(p[1]) - 1;
    mostraPagina("calendario", document.querySelectorAll(".menu-item")[2]);
}

function aggiornaDettaglioCal() {
    let pastiG = [];
    for (let i = 0; i < pasti.length; i++) {
        if (pasti[i].data === dataSelezionata) {
            pastiG.push(pasti[i]);
        }
    }
    let allG = [];
    for (let i = 0; i < allenamenti.length; i++) {
        if (allenamenti[i].data === dataSelezionata) {
            allG.push(allenamenti[i]);
        }
    }

    if (pastiG.length === 0 && allG.length === 0) {
        getEl("dettaglioGiornoCal").innerHTML = `
            <div class="card" style="text-align:center">
                <h3>${fDataIta(dataSelezionata)}</h3>
                <p style="color:var(--muted);margin:10px 0">Nessuna attività registrata per questo giorno.</p>
                <button class="btn-piccolo" onclick="vaiAlDiarioPerData('${dataSelezionata}')">Aggiungi pasti nel Diario</button>
            </div>
        `;
        return;
    }

    let htmlPasti = "";
    if (pastiG.length > 0) {
        htmlPasti = '<h4 style="margin-top:10px;margin-bottom:6px">Pasti:</h4>';
        for (let i = 0; i < pastiG.length; i++) {
            htmlPasti += `<p style="font-size:14px;color:var(--testo-2)">• ${pastiG[i].pasto}:${pastiG[i].alimento} (${pastiG[i].quantita}g,${pastiG[i].kcal} kcal)</p>`;
        }
    }
    let htmlAll = "";
    if (allG.length > 0) {
        htmlAll = '<h4 style="margin-top:10px;margin-bottom:6px">Allenamenti:</h4>';
        for (let i = 0; i < allG.length; i++) {
            htmlAll += `<p style="font-size:14px;color:var(--testo-2)">• ${allG[i].tipo} (${allG[i].durata} min,${allG[i].kcal} kcal)</p>`;
        }
    }

    getEl("dettaglioGiornoCal").innerHTML = `
        <div class="card">
            <h3>${fDataIta(dataSelezionata)} · Totale: ${kcalDelGiorno(dataSelezionata)} kcal</h3>
            ${htmlPasti}
            ${htmlAll}
            <button class="btn-piccolo" onclick="vaiAlDiarioPerData('${dataSelezionata}')">Gestisci nel Diario</button>
        </div>
    `;
}

function vaiAlDiarioPerData(iso) {
    dataSelezionata = iso;
    mostraPagina("cronologia", document.querySelectorAll(".menu-item")[1]);
}


// ---------- ACCOUNT: REGISTRAZIONE E LOGIN (Firebase Authentication) ----------
// Account e dati sono nel cloud: lo stesso account funziona sul sito e nell'app Android.
// La password non viene salvata da questo codice: la gestisce Firebase.
function trovaUtente(chiave) {
    if (chiave && chiave === utenteCorrente) {
        return { chiave: chiave, username: usernameCorrente };
    }
    return null;
}

// Requisiti della password: almeno 8 caratteri, una maiuscola, un numero
function validaPassword(pw) {
    return {
        len: pw.length >= 8,
        upper: pw !== pw.toLowerCase(),
        num: /[0-9]/.test(pw)
    };
}

function passwordValida(pw) {
    let r = validaPassword(pw);
    return r.len && r.upper && r.num;
}

function aggiornaRequisitiPassword() {
    let r = validaPassword(getEl("regPassword").value);
    let voci = document.querySelectorAll("#requisitiPassword li");
    for (let i = 0; i < voci.length; i++) {
        voci[i].classList.toggle("ok", r[voci[i].getAttribute("data-req")]);
    }
}

function mostraTabAuth(tab) {
    if (tab === "login") {
        getEl("formLogin").style.display = "";
        getEl("formRegistrazione").style.display = "none";
        getEl("tabLogin").classList.add("attivo");
        getEl("tabRegistrati").classList.remove("attivo");
    } else {
        getEl("formLogin").style.display = "none";
        getEl("formRegistrazione").style.display = "";
        getEl("tabLogin").classList.remove("attivo");
        getEl("tabRegistrati").classList.add("attivo");
    }
    getEl("erroreLogin").textContent = "";
    getEl("erroreRegistrazione").textContent = "";
}

function mostraSchermataAuth() {
    document.querySelector(".app").style.display = "none";
    getEl("modaleDatiPersonali").style.display = "none";
    chiudiModalePasto();
    chiudiModaleAlimento();
    getEl("schermataAuth").style.display = "flex";
    mostraTabAuth("login");
}

// Trasforma l'errore di Firebase in un messaggio comprensibile
function messaggioErroreAuth(ex, contesto) {
    let codice = "";
    if (ex && ex.code) {
        codice = ex.code;
    }
    if (codice === "auth/email-already-in-use") {
        return "Questo nome utente è già in uso.";
    }
    if (codice === "auth/invalid-credential" || codice === "auth/user-not-found" ||
        codice === "auth/wrong-password" || codice === "auth/invalid-email") {
        return "Nome utente o password errati.";
    }
    if (codice === "auth/network-request-failed" || codice === "nt/offline") {
        return "Nessuna connessione. Per accedere serve internet.";
    }
    if (codice === "auth/too-many-requests") {
        return "Troppi tentativi. Riprova tra qualche minuto.";
    }
    if (codice === "auth/operation-not-allowed") {
        return "Il login con e-mail e password non è attivo su Firebase (Authentication → Metodo di accesso).";
    }
    if (codice === "permission-denied") {
        return "Il database rifiuta l'accesso: controlla le regole di Firestore.";
    }
    console.error(ex);
    if (contesto === "registrazione") {
        return "Registrazione non riuscita. Riprova.";
    }
    return "Accesso non riuscito. Riprova.";
}

// 3-20 caratteri; il punto non può stare all'inizio, alla fine o doppio (serve a Firebase)
function usernameValido(username) {
    if (!/^[A-Za-z0-9_.-]{3,20}$/.test(username)) {
        return false;
    }
    return !/^\.|\.$|\.\./.test(username);
}

// Scarica i dati dell'account dal cloud e apre la sessione
async function entraConAccount(info) {
    let risultato = await NT.carica(info.uid);
    cacheDati = risultato.dati;
    usernameCorrente = info.username;
    avviaSessione(info.uid);
}

async function eseguiRegistrazione(e) {
    e.preventDefault();
    let errore = getEl("erroreRegistrazione");
    let username = getEl("regUsername").value.trim();
    let pw = getEl("regPassword").value;
    let pw2 = getEl("regPassword2").value;
    errore.textContent = "";

    if (!usernameValido(username)) {
        errore.textContent = "Il nome utente deve avere 3-20 caratteri: lettere, numeri, _ . - (il punto non può stare all'inizio, alla fine o doppio).";
        return;
    }
    if (!passwordValida(pw)) {
        errore.textContent = "La password deve avere almeno 8 caratteri, una maiuscola e un numero.";
        return;
    }
    if (pw !== pw2) {
        errore.textContent = "Le due password non coincidono.";
        return;
    }

    let bottone = e.target.querySelector('button[type="submit"]');
    if (bottone) {
        bottone.disabled = true;
    }
    try {
        let info = await NT.registra(username, pw);
        getEl("formRegistrazione").reset();
        aggiornaRequisitiPassword();
        await entraConAccount(info);
    } catch (ex) {
        errore.textContent = messaggioErroreAuth(ex, "registrazione");
    }
    if (bottone) {
        bottone.disabled = false;
    }
}

async function eseguiLogin(e) {
    e.preventDefault();
    let errore = getEl("erroreLogin");
    let username = getEl("loginUsername").value.trim();
    let pw = getEl("loginPassword").value;
    errore.textContent = "";

    let bottone = e.target.querySelector('button[type="submit"]');
    if (bottone) {
        bottone.disabled = true;
    }
    try {
        let info = await NT.accedi(username, pw);
        getEl("formLogin").reset();
        await entraConAccount(info);
    } catch (ex) {
        errore.textContent = messaggioErroreAuth(ex, "login");
    }
    if (bottone) {
        bottone.disabled = false;
    }
}

// Se un altro dispositivo ha modificato i dati, al ritorno nell'app li ricarica
let ultimoAggiornamentoCloud = 0;

function modaleAperta() {
    let modali = document.querySelectorAll(".modale");
    for (let i = 0; i < modali.length; i++) {
        if (modali[i].style.display && modali[i].style.display !== "none") {
            return true;
        }
    }
    return false;
}

async function aggiornaDaCloud() {
    if (!utenteCorrente || !nessunaScritturaPendente()) {
        return;
    }
    if (Date.now() - ultimoAggiornamentoCloud < 30000) {
        return;
    }
    ultimoAggiornamentoCloud = Date.now();
    let uid = utenteCorrente;
    try {
        let r = await NT.carica(uid);
        // nel frattempo l'utente potrebbe aver cambiato account o modificato qualcosa
        if (r.daCache || utenteCorrente !== uid || !nessunaScritturaPendente()) {
            return;
        }
        let cambiato = false;
        let nomi = Object.keys(r.dati).concat(Object.keys(cacheDati));
        for (let i = 0; i < nomi.length; i++) {
            if (r.dati[nomi[i]] !== cacheDati[nomi[i]]) {
                cambiato = true;
            }
        }
        if (!cambiato || modaleAperta()) {
            return;
        }
        cacheDati = r.dati;
        caricaDatiUtente();
        aggiornaMenuUtente();
        aggiornaPaginaCorrente();
        mostraToast("Dati aggiornati da un altro dispositivo");
    } catch (ex) {
        // senza rete si continua con i dati già in memoria
    }
}

function caricaDatiUtente() {
    profilo = leggiDati("profilo", null);
    alimenti = leggiDati("alimenti", []);
    pasti = leggiDati("pasti", []);
    allenamenti = leggiDati("allenamenti", []);
    pesi = leggiDati("pesi", []);
    sonno = leggiDati("sonno", []);
    gioco = copiaCampi(nuovoGioco(), leggiDati("gioco", {}));
    sveglia = copiaCampi(nuovaSveglia(), leggiDati("sveglia", {}));
    if (profilo) {
        nomeUtente = profilo.nome;
    } else {
        nomeUtente = "";
    }

    // Account creati prima: l'obiettivo che avevano resta quello (ora salvato nel profilo)
    if (profilo && !profilo.kcal) {
        profilo.kcal = calcolaObiettivoBase(profilo);
        salvaDati("profilo", profilo);
    }
    ricostruisciGiorniStreak();
    aggiornaObiettivo();
}

function avviaSessione(chiave) {
    utenteCorrente = chiave;
    caricaDatiUtente();

    dataSelezionata = oggiISO();
    offsetSettimana = 0;
    calAnno = undefined;
    calMese = undefined;
    annoPeso = new Date().getFullYear();
    applicaTema(leggiDati("tema", localStorage.getItem(CHIAVE_TEMA) || "foresta"), false);

    aggiornaMenuUtente();
    getEl("schermataAuth").style.display = "none";
    document.querySelector(".app").style.display = "";
    mostraPagina("home", document.querySelectorAll(".menu-item")[0]);

    giornoCorrente = oggiISO();
    if (profilo) {
        // accesso di oggi: punti e streak
        let messaggio = registraAccesso();
        aggiornaSchedaPunti();
        if (messaggio) {
            mostraToast(messaggio);
        }
        controllaMissioni();
    } else {
        // primo accesso: servono i dati personali
        apriDatiPersonali(true);
    }

    avviaTimerSveglia();
    ripristinaWakeLock();
    controllaSveglia();
}

async function logout() {
    chiudiMenuUtente();
    await svuotaCodaScritture();
    try {
        await NT.esci();
    } catch (e) {
        // ignora
    }
    cacheDati = {};
    usernameCorrente = "";
    utenteCorrente = null;
    profilo = null;
    nomeUtente = "";
    OBIETTIVO_KCAL = 0;
    OBIETTIVO_BASE = 0;
    KCAL_ALLENAMENTO_OGGI = 0;
    alimenti = [];
    pasti = [];
    allenamenti = [];
    pesi = [];
    sonno = [];
    gioco = nuovoGioco();
    sveglia = nuovaSveglia();
    giornoCorrente = null;
    clearInterval(timerSveglia);
    fermaSuonoSveglia();
    overlayAperto = false;
    rilasciaWakeLock();
    getEl("overlaySveglia").style.display = "none";
    getEl("modaleMissioni").style.display = "none";
    getEl("modaleStreak").style.display = "none";
    getEl("modaleObiettivo").style.display = "none";
    mostraSchermataAuth();
}


// ---------- MENU A TENDINA UTENTE ----------
function aggiornaMenuUtente() {
    let utente = trovaUtente(utenteCorrente);
    if (!utente) {
        return;
    }
    let nome = utente.username;
    if (profilo && profilo.nome) {
        nome = profilo.nome;
    }
    getEl("avatarUtente").textContent = nome.charAt(0).toUpperCase();
    getEl("nomeUtenteMenu").textContent = utente.username;
    getEl("menuNome").textContent = nome;
    getEl("menuUsername").textContent = "@" + utente.username;
}

function toggleMenuUtente(e) {
    e.stopPropagation();
    let menu = getEl("menuUtente");
    if (menu.style.display === "none") {
        menu.style.display = "block";
        getEl("btnUtente").setAttribute("aria-expanded", "true");
    } else {
        chiudiMenuUtente();
    }
}

function chiudiMenuUtente() {
    getEl("menuUtente").style.display = "none";
    getEl("btnUtente").setAttribute("aria-expanded", "false");
}

// un click fuori dal menu lo chiude
document.addEventListener("click", function (e) {
    if (!e.target.closest("#dropdownUtente")) {
        chiudiMenuUtente();
    }
});

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        chiudiMenuUtente();
    }
});


// ---------- DATI PERSONALI E OBIETTIVO KCAL ----------
// Le kcal giornaliere le sceglie l'utente (profilo.kcal) e le può cambiare quando vuole.
// Gli allenamenti registrati oggi si sommano all'obiettivo di oggi.
// La formula di Mifflin-St Jeor serve solo agli account creati prima di questa modifica,
// così il loro obiettivo non cambia.
function calcolaObiettivoBase(p) {
    let bmr = 10 * p.peso + 6.25 * p.altezza - 5 * p.eta;
    if (p.sesso === "M") {
        bmr = bmr + 5;
    } else {
        bmr = bmr - 161;
    }
    let minimoKcal = 1200;
    if (p.sesso === "M") {
        minimoKcal = 1500;
    }
    return Math.max(minimoKcal, Math.round((bmr * FATTORE_BASE) / 10) * 10);
}

function kcalAllenamenti(iso) {
    let totale = 0;
    for (let i = 0; i < allenamenti.length; i++) {
        if (allenamenti[i].data === iso) {
            totale = totale + (Number(allenamenti[i].kcal) || 0);
        }
    }
    return Math.round(totale);
}

function aggiornaObiettivo() {
    if (profilo) {
        OBIETTIVO_BASE = profilo.kcal || calcolaObiettivoBase(profilo);
        KCAL_ALLENAMENTO_OGGI = kcalAllenamenti(oggiISO());
    } else {
        OBIETTIVO_BASE = 0;
        KCAL_ALLENAMENTO_OGGI = 0;
    }
    if (OBIETTIVO_BASE) {
        OBIETTIVO_KCAL = OBIETTIVO_BASE + KCAL_ALLENAMENTO_OGGI;
    } else {
        OBIETTIVO_KCAL = 0;
    }
}

function leggiFormProfilo() {
    return {
        nome: getEl("dpNome").value.trim(),
        sesso: getEl("dpSesso").value,
        eta: parseInt(getEl("dpEta").value),
        peso: parseFloat(getEl("dpPeso").value),
        altezza: parseFloat(getEl("dpAltezza").value)
    };
}

function profiloValido(p) {
    return p.nome.length > 0
        && p.eta >= 14 && p.eta <= 100
        && p.peso >= 30 && p.peso <= 300
        && p.altezza >= 120 && p.altezza <= 230;
}

function kcalValide(k) {
    return Number.isInteger(k) && k >= KCAL_MIN && k <= KCAL_MAX;
}

function mostraPassoDati(passo) {
    passoDati = passo;
    let passoKcal = passo === 2;
    getEl("dpPasso1").hidden = passoKcal;
    getEl("dpPasso2").hidden = !passoKcal;
    getEl("dpKcal").required = passoKcal;
    getEl("dpErrore").textContent = "";

    if (primoAccessoDati) {
        if (passoKcal) {
            getEl("dpTitolo").textContent = "Il tuo obiettivo";
            getEl("dpIntro").textContent = "Quante kcal vuoi mangiare al giorno? Potrai cambiarle quando vuoi dalla sezione Obiettivo Calorico (tocca \"Kcal di oggi\" nella Home).";
            getEl("btnAnnullaDati").textContent = "Indietro";
            getEl("btnSalvaDati").textContent = "Inizia";
        } else {
            getEl("dpTitolo").textContent = "Benvenuto! Iniziamo dai tuoi dati";
            getEl("dpIntro").textContent = "Raccontaci qualcosa di te. Potrai modificare questi dati quando vuoi dal menu in alto a destra.";
            getEl("btnAnnullaDati").textContent = "Esci";
            getEl("btnSalvaDati").textContent = "Avanti";
        }
    } else {
        getEl("dpTitolo").textContent = "Dati personali";
        getEl("dpIntro").textContent = "Aggiorna i tuoi dati. Le kcal giornaliere si cambiano dalla sezione Obiettivo Calorico.";
        getEl("btnAnnullaDati").textContent = "Annulla";
        getEl("btnSalvaDati").textContent = "Salva";
    }
}

function apriDatiPersonali(primoAccesso) {
    chiudiMenuUtente();
    primoAccessoDati = !!primoAccesso;

    let utente = trovaUtente(utenteCorrente);
    let p = profilo || {};

    getEl("dpNome").value = p.nome || leggiDati("nome_suggerito", "") || utente.username;
    getEl("dpSesso").value = p.sesso || "M";
    getEl("dpEta").value = p.eta || "";
    getEl("dpPeso").value = p.peso || "";
    getEl("dpAltezza").value = p.altezza || "";
    getEl("dpKcal").value = "";
    getEl("dpLogo").hidden = !primoAccesso;

    mostraPassoDati(1);
    getEl("modaleDatiPersonali").style.display = "flex";
}

function chiudiModaleDatiPersonali() {
    getEl("modaleDatiPersonali").style.display = "none";
}

function annullaDatiPersonali() {
    if (primoAccessoDati && passoDati === 2) {
        mostraPassoDati(1);   // "Indietro" dal passo delle kcal
    } else if (primoAccessoDati) {
        logout();
    } else {
        chiudiModaleDatiPersonali();
    }
}

function salvaDatiPersonali(e) {
    e.preventDefault();
    let p = leggiFormProfilo();

    if (!profiloValido(p)) {
        getEl("dpErrore").textContent = "Controlla i dati: età 14-100 anni, peso 30-300 kg, altezza 120-230 cm.";
        return;
    }

    // Registrazione: dopo i dati personali si chiede quante kcal vuole mangiare al giorno
    if (primoAccessoDati && passoDati === 1) {
        mostraPassoDati(2);
        getEl("dpKcal").focus();
        return;
    }

    let kcal = null;
    if (profilo) {
        kcal = profilo.kcal;
    }
    if (primoAccessoDati) {
        kcal = parseInt(getEl("dpKcal").value);
        if (!kcalValide(kcal)) {
            getEl("dpErrore").textContent = "Inserisci un valore tra " + KCAL_MIN + " e " + KCAL_MAX + " kcal al giorno.";
            return;
        }
    }

    let primo = primoAccessoDati;
    let pesoPrecedente = null;
    if (profilo) {
        pesoPrecedente = profilo.peso;
    }
    profilo = copiaCampi(copiaCampi({}, profilo || {}), p);
    profilo.kcal = kcal;
    salvaDati("profilo", profilo);
    aggiornaObiettivo();

    // il peso dei dati personali compare anche nel grafico del peso
    if (pesoPrecedente !== p.peso || pesi.length === 0) {
        impostaPeso(oggiISO(), p.peso);
    }
    nomeUtente = p.nome;

    chiudiModaleDatiPersonali();
    aggiornaMenuUtente();
    aggiornaPaginaCorrente();
    if (primo) {
        mostraToast("Tutto pronto! Obiettivo: " + OBIETTIVO_KCAL + " kcal al giorno");
    } else {
        mostraToast("Dati aggiornati!");
    }

    // primo accesso: l'accesso di oggi dà i primi punti e accende la streak
    if (primo) {
        let messaggio = registraAccesso();
        aggiornaSchedaPunti();
        if (messaggio) {
            mostraToast(messaggio);
        }
    }
}

// --- obiettivo kcal: si cambia dalla sezione "Obiettivo Calorico" ---
function apriObiettivo() {
    if (!profilo) {
        return;
    }
    getEl("obKcal").value = OBIETTIVO_BASE;
    getEl("obErrore").textContent = "";
    getEl("modaleObiettivo").style.display = "flex";
    getEl("obKcal").focus();
}

function chiudiObiettivo() {
    getEl("modaleObiettivo").style.display = "none";
}

function salvaObiettivoKcal(e) {
    e.preventDefault();
    let kcal = parseInt(getEl("obKcal").value);
    if (!kcalValide(kcal)) {
        getEl("obErrore").textContent = "Inserisci un valore tra " + KCAL_MIN + " e " + KCAL_MAX + " kcal al giorno.";
        return;
    }

    profilo.kcal = kcal;
    salvaDati("profilo", profilo);
    aggiornaObiettivo();
    chiudiObiettivo();
    aggiornaPaginaCorrente();
    controllaMissioni();
    mostraToast("Obiettivo aggiornato: " + kcal + " kcal al giorno");
}


// ---------- TEMI ----------
function costruisciSelettoreTemi() {
    let html = "";
    for (let i = 0; i < TEMI.length; i++) {
        let t = TEMI[i];
        html += `
            <button type="button" class="tema-opzione" data-id="${t.id}" title="${t.nome}" aria-label="Tema ${t.nome}"
                style="background:linear-gradient(135deg, ${t.colori[0]} 50%, ${t.colori[1]} 50%)"
                onclick="applicaTema('${t.id}', true)"></button>
        `;
    }
    getEl("selettoreTemi").innerHTML = html;
}

// Il logo ha il colore del tema: img/logo-<icona|completo>-<tema>.png
function aggiornaLogo(idTema) {
    let loghi = document.querySelectorAll(".logo-img[data-logo]");
    for (let i = 0; i < loghi.length; i++) {
        loghi[i].src = "img/logo-" + loghi[i].getAttribute("data-logo") + "-" + idTema + ".png";
    }
    let icona = document.querySelector('link[rel="icon"]');
    if (icona) {
        icona.href = "img/logo-icona-" + idTema + ".png";
    }
}

function applicaTema(id, salva) {
    let tema = TEMI[0];
    for (let i = 0; i < TEMI.length; i++) {
        if (TEMI[i].id === id) {
            tema = TEMI[i];
        }
    }
    document.documentElement.setAttribute("data-tema", tema.id);

    let bottoni = document.querySelectorAll("#selettoreTemi .tema-opzione");
    for (let i = 0; i < bottoni.length; i++) {
        bottoni[i].classList.toggle("attivo", bottoni[i].getAttribute("data-id") === tema.id);
    }
    getEl("nomeTema").textContent = tema.nome;

    let meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
        meta.setAttribute("content", tema.barra);
    }
    aggiornaLogo(tema.id);

    localStorage.setItem(CHIAVE_TEMA, tema.id);   // ultimo tema usato su questo dispositivo
    if (salva && utenteCorrente) {
        salvaDati("tema", tema.id);               // tema scelto dall'utente
    }
}


// ---------- PROGRESSI: PESO E SONNO ----------
// Asse con valori "tondi" (passi 0.5, 1, 2, 5, 10...) che racchiude i dati
function scalaAsse(minimoDati, massimoDati) {
    let basso = minimoDati;
    let alto = massimoDati;
    if (alto - basso < 2) {
        let centro = (alto + basso) / 2;
        basso = centro - 1;
        alto = centro + 1;
    }

    let grezzo = (alto - basso) / 4;
    let passi = [0.5, 1, 2, 5, 10, 20, 50];
    let passo = 50;
    for (let i = 0; i < passi.length; i++) {
        if (passi[i] >= grezzo) {
            passo = passi[i];
            break;
        }
    }

    let min = Math.floor((basso - passo * 0.25) / passo) * passo;
    let max = Math.ceil((alto + passo * 0.25) / passo) * passo;
    let tacche = [];
    for (let v = min; v <= max + 1e-9; v = v + passo) {
        tacche.push(Math.round(v * 100) / 100);
    }
    return { min: min, max: max, passo: passo, tacche: tacche };
}

// Linea morbida che passa dai punti del grafico (interpolazione monotona):
// per ogni tratto calcola due punti di controllo di una curva di Bezier.
function percorsoMorbido(pt) {
    let n = pt.length;
    if (n === 1) {
        return "M" + pt[0].x + "," + pt[0].y;
    }
    if (n === 2) {
        return "M" + pt[0].x + "," + pt[0].y + "L" + pt[1].x + "," + pt[1].y;
    }

    // dx = distanza orizzontale tra i punti, m = pendenza di ogni tratto, t = pendenza nel punto
    let dx = [];
    let m = [];
    let t = [];
    for (let i = 0; i < n - 1; i++) {
        dx[i] = pt[i + 1].x - pt[i].x;
        m[i] = (pt[i + 1].y - pt[i].y) / dx[i];
    }
    t[0] = m[0];
    t[n - 1] = m[n - 2];
    for (let i = 1; i < n - 1; i++) {
        if (m[i - 1] * m[i] <= 0) {
            t[i] = 0;
        } else {
            t[i] = (m[i - 1] + m[i]) / 2;
        }
    }
    for (let i = 0; i < n - 1; i++) {
        if (m[i] === 0) {
            t[i] = 0;
            t[i + 1] = 0;
        } else {
            let a = t[i] / m[i];
            let b = t[i + 1] / m[i];
            let somma = a * a + b * b;
            if (somma > 9) {
                let k = 3 / Math.sqrt(somma);
                t[i] = k * a * m[i];
                t[i + 1] = k * b * m[i];
            }
        }
    }

    let d = "M" + pt[0].x + "," + pt[0].y;
    for (let i = 0; i < n - 1; i++) {
        let c1x = pt[i].x + dx[i] / 3;
        let c1y = pt[i].y + t[i] * dx[i] / 3;
        let c2x = pt[i + 1].x - dx[i] / 3;
        let c2y = pt[i + 1].y - t[i + 1] * dx[i] / 3;
        d += "C" + c1x.toFixed(1) + "," + c1y.toFixed(1) + " " + c2x.toFixed(1) + "," + c2y.toFixed(1) + " " + pt[i + 1].x.toFixed(1) + "," + pt[i + 1].y.toFixed(1);
    }
    return d;
}

// Dalla Home: tocchi Peso o Sonno e vedi solo quella sezione
function apriProgressi(sezione) {
    if (sezione === "sonno") {
        sezioneProgressi = "sonno";
    } else {
        sezioneProgressi = "peso";
    }
    mostraPagina("progressi");
    window.scrollTo(0, 0);
}

function mostraProgressi() {
    let oggi = oggiISO();
    let campi = ["pesoData", "sonnoData"];
    for (let i = 0; i < campi.length; i++) {
        let campo = getEl(campi[i]);
        campo.max = oggi;
        if (!campo.value) {
            campo.value = oggi;
        }
    }

    if (sezioneProgressi === "peso") {
        getEl("sezPeso").style.display = "";
        getEl("sezSonno").style.display = "none";
        getEl("titoloProgressi").textContent = "Peso";
        getEl("sottotitoloProgressi").textContent = "Il tuo andamento nell'anno";
        mostraPeso();
    } else {
        getEl("sezPeso").style.display = "none";
        getEl("sezSonno").style.display = "";
        getEl("titoloProgressi").textContent = "Sonno";
        getEl("sottotitoloProgressi").textContent = "Riposo e sveglia";
        mostraSveglia();
        mostraSonnoPagina();
    }
}

// ----- PESO -----
function pesiDellAnno() {
    let risultato = [];
    for (let i = 0; i < pesi.length; i++) {
        if (pesi[i].data.startsWith(annoPeso + "-")) {
            risultato.push(pesi[i]);
        }
    }
    return risultato;
}

function cambiaAnnoPeso(delta) {
    let nuovo = annoPeso + delta;
    if (nuovo > new Date().getFullYear()) {
        return;
    }
    annoPeso = nuovo;
    mostraPeso();
}

// aggiunge (o corregge) il peso di un giorno
function impostaPeso(data, kg) {
    let trovato = false;
    for (let i = 0; i < pesi.length; i++) {
        if (pesi[i].data === data) {
            pesi[i].kg = kg;
            trovato = true;
        }
    }
    if (!trovato) {
        pesi.push({ data: data, kg: kg });
    }
    pesi.sort(dataCrescente);
    salvaDati("pesi", pesi);
    sincronizzaPesoProfilo();
}

// L'ultimo peso registrato è il peso attuale: aggiorna i dati personali
function sincronizzaPesoProfilo() {
    if (!profilo || pesi.length === 0) {
        return;
    }
    let ultimo = pesi[pesi.length - 1].kg;
    if (profilo.peso === ultimo) {
        return;
    }
    profilo.peso = ultimo;
    salvaDati("profilo", profilo);
    aggiornaObiettivo();
}

function salvaPeso(e) {
    e.preventDefault();
    let data = getEl("pesoData").value;
    let kg = parseFloat(getEl("pesoKg").value);

    if (!data || data > oggiISO()) {
        mostraToast("Scegli una data valida (non nel futuro)", true);
        return;
    }
    if (!(kg >= 30 && kg <= 300)) {
        mostraToast("Inserisci un peso tra 30 e 300 kg", true);
        return;
    }

    impostaPeso(data, Math.round(kg * 10) / 10);
    getEl("pesoKg").value = "";
    annoPeso = Number(data.slice(0, 4));
    mostraPeso();
    mostraToast("Peso salvato ⚖️");
}

function eliminaPeso(data) {
    let rimasti = [];
    for (let i = 0; i < pesi.length; i++) {
        if (pesi[i].data !== data) {
            rimasti.push(pesi[i]);
        }
    }
    pesi = rimasti;
    salvaDati("pesi", pesi);
    sincronizzaPesoProfilo();
    mostraPeso();
    mostraToast("Misurazione eliminata");
}

function mostraDettaglioPeso(iso) {
    for (let i = 0; i < pesi.length; i++) {
        if (pesi[i].data === iso) {
            getEl("dettaglioPunto").innerHTML = "<strong>" + fDataLunga(iso) + "</strong> · " + fmtNum(pesi[i].kg) + " kg";
        }
    }
}

function mostraPeso() {
    let voci = pesiDellAnno();

    getEl("annoPeso").textContent = annoPeso;
    getEl("btnAnnoAvanti").disabled = annoPeso >= new Date().getFullYear();
    if (voci.length > 0) {
        getEl("dettaglioPunto").textContent = "Tocca un punto per vedere i dettagli";
    } else {
        getEl("dettaglioPunto").textContent = "Nessuna misurazione in questo anno";
    }

    // riepilogo: peso attuale, variazione dall'inizio dell'anno, media
    let attuale = "—";
    let variazione = "—";
    let media = "—";
    if (voci.length > 0) {
        let primo = voci[0].kg;
        let ultimo = voci[voci.length - 1].kg;
        let somma = 0;
        for (let i = 0; i < voci.length; i++) {
            somma = somma + voci[i].kg;
        }
        attuale = fmtNum(ultimo) + " kg";
        media = fmtNum(somma / voci.length) + " kg";
        if (voci.length > 1) {
            let delta = ultimo - primo;
            let segno = "";
            if (delta > 0.04) {
                segno = "+";
            } else if (delta < -0.04) {
                segno = "−";
            }
            variazione = segno + fmtNum(Math.abs(delta)) + " kg";
        }
    }
    getEl("statPeso").innerHTML = `
        <div class="stat"><small>Attuale</small><strong>${attuale}</strong></div>
        <div class="stat"><small>Variazione</small><strong class="">${variazione}</strong></div>
        <div class="stat"><small>Media</small><strong>${media}</strong></div>
    `;

    getEl("graficoPeso").innerHTML = svgGraficoPeso(annoPeso, voci);

    // ultime 5 misurazioni, dalla più recente
    if (voci.length === 0) {
        getEl("listaPesi").innerHTML = "";
        return;
    }
    let html = '<h4 class="titolo-lista">Ultime misurazioni</h4>';
    let contatore = 0;
    for (let i = voci.length - 1; i >= 0 && contatore < 5; i--) {
        let v = voci[i];
        let testoDiff = "";
        if (i > 0) {
            let diff = v.kg - voci[i - 1].kg;
            if (Math.abs(diff) < 0.05) {
                testoDiff = "=";
            } else if (diff > 0) {
                testoDiff = "+" + fmtNum(Math.abs(diff));
            } else {
                testoDiff = "−" + fmtNum(Math.abs(diff));
            }
        }
        html += `
            <div class="riga-lista">
                <div><strong>${fmtNum(v.kg)} kg</strong><small>${fDataLunga(v.data)}</small></div>
                <div class="riga-dx">
                    <span>${testoDiff}</span>
                    <button type="button" class="btn-elimina-mini" onclick="eliminaPeso('${v.data}')" aria-label="Elimina">✕</button>
                </div>
            </div>
        `;
        contatore++;
    }
    getEl("listaPesi").innerHTML = html;
}

// grafico del peso (disegnato come immagine SVG)
function svgGraficoPeso(anno, voci) {
    let W = 300, H = 210, L = 34, R = 10, T = 18, B = 26;
    let pw = W - L - R;
    let ph = H - T - B;
    let nGiorni = giorniNellAnno(anno);

    // valore minimo e massimo da mostrare sull'asse y
    let basso, alto;
    if (voci.length > 0) {
        let kgLista = [];
        for (let i = 0; i < voci.length; i++) {
            kgLista.push(voci[i].kg);
        }
        basso = minimo(kgLista);
        alto = massimo(kgLista);
    } else {
        let base = 70;
        if (profilo) {
            base = profilo.peso;
        }
        basso = base - 5;
        alto = base + 5;
    }
    let sc = scalaAsse(basso, alto);

    // da peso a posizione y, da giorno dell'anno a posizione x
    function yDi(v) {
        return T + ph - ((v - sc.min) / (sc.max - sc.min)) * ph;
    }
    function xDiGiorno(g) {
        return L + (Math.min(g, nGiorni - 1) / (nGiorni - 1)) * pw;
    }

    let svg = `<svg viewBox="0 0 ${W} ${H}" class="svg-grafico" role="img" aria-label="Grafico del peso nel ${anno}">`;
    svg += `<defs><linearGradient id="gradPeso" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" style="stop-color:var(--primario);stop-opacity:0.3"/>
        <stop offset="100%" style="stop-color:var(--primario);stop-opacity:0"/>
    </linearGradient></defs>`;

    // asse y: linee guida e valori
    for (let i = 0; i < sc.tacche.length; i++) {
        let y = yDi(sc.tacche[i]);
        let decimali = 0;
        if (sc.passo < 1) {
            decimali = 1;
        }
        svg += `<line class="griglia" x1="${L}" y1="${y.toFixed(1)}" x2="${L + pw}" y2="${y.toFixed(1)}"/>`;
        svg += `<text class="etichetta" x="${L - 6}" y="${(y + 3).toFixed(1)}" text-anchor="end">${fmtNum(sc.tacche[i], decimali)}</text>`;
    }
    svg += `<text class="etichetta" x="${L - 6}" y="8" text-anchor="end">kg</text>`;

    // asse x: i 12 mesi
    for (let m = 0; m < 12; m++) {
        let g0 = Math.round((Date.UTC(anno, m, 1) - Date.UTC(anno, 0, 1)) / 86400000);
        let g1 = Math.round((Date.UTC(anno, m + 1, 1) - Date.UTC(anno, 0, 1)) / 86400000);
        let x0 = xDiGiorno(g0);
        let x1 = xDiGiorno(g1);
        if (m > 0) {
            svg += `<line class="griglia-v" x1="${x0.toFixed(1)}" y1="${T}" x2="${x0.toFixed(1)}" y2="${T + ph}"/>`;
        }
        svg += `<text class="etichetta" x="${((x0 + x1) / 2).toFixed(1)}" y="${H - 8}" text-anchor="middle">${MESI_BREVI[m]}</text>`;
    }

    svg += `<line class="asse" x1="${L}" y1="${T}" x2="${L}" y2="${T + ph}"/>`;
    svg += `<line class="asse" x1="${L}" y1="${T + ph}" x2="${L + pw}" y2="${T + ph}"/>`;

    if (voci.length === 0) {
        svg += `<text class="vuoto-svg" x="${W / 2}" y="${T + ph / 2}" text-anchor="middle">Nessun peso registrato nel ${anno}</text>`;
        return svg + "</svg>";
    }

    // punti del grafico
    let pt = [];
    for (let i = 0; i < voci.length; i++) {
        pt.push({ x: xDiGiorno(giornoDellAnno(voci[i].data)), y: yDi(voci[i].kg), data: voci[i].data });
    }
    let linea = percorsoMorbido(pt);
    let base = T + ph;
    let ultimo = pt[pt.length - 1];

    if (pt.length > 1) {
        svg += `<path d="${linea}L${ultimo.x.toFixed(1)},${base}L${pt[0].x.toFixed(1)},${base}Z" fill="url(#gradPeso)"/>`;
    }
    svg += `<path class="linea-peso" d="${linea}"/>`;

    if (pt.length <= 60) {
        for (let i = 0; i < pt.length; i++) {
            svg += `<circle class="punto" cx="${pt[i].x.toFixed(1)}" cy="${pt[i].y.toFixed(1)}" r="3.5"/>`;
        }
    }
    svg += `<circle class="punto-ultimo" cx="${ultimo.x.toFixed(1)}" cy="${ultimo.y.toFixed(1)}" r="5.5"/>`;
    if (pt.length <= 120) {
        for (let i = 0; i < pt.length; i++) {
            svg += `<circle class="hit" cx="${pt[i].x.toFixed(1)}" cy="${pt[i].y.toFixed(1)}" r="11" onclick="mostraDettaglioPeso('${pt[i].data}')"/>`;
        }
    }
    return svg + "</svg>";
}

// ----- SONNO -----
function ultimi7Giorni() {
    let oggi = oggiISO();
    let giorni = [];
    for (let i = 6; i >= 0; i--) {
        giorni.push(aggiungiGiorni(oggi, -i));
    }
    return giorni;
}

function oreSonno(iso) {
    for (let i = 0; i < sonno.length; i++) {
        if (sonno[i].data === iso) {
            return sonno[i].ore;
        }
    }
    return null;
}

// aggiunge (o corregge) le ore di sonno di una notte
function impostaSonno(data, ore) {
    let trovato = false;
    for (let i = 0; i < sonno.length; i++) {
        if (sonno[i].data === data) {
            sonno[i].ore = ore;
            trovato = true;
        }
    }
    if (!trovato) {
        sonno.push({ data: data, ore: ore });
    }
    sonno.sort(dataCrescente);
    salvaDati("sonno", sonno);
}

function salvaSonno(e) {
    e.preventDefault();
    let data = getEl("sonnoData").value;
    let ore = parseFloat(getEl("sonnoOre").value);

    if (!data || data > oggiISO()) {
        mostraToast("Scegli una data valida (non nel futuro)", true);
        return;
    }
    if (!(ore > 0 && ore <= 24)) {
        mostraToast("Inserisci un valore tra 0 e 24 ore", true);
        return;
    }

    impostaSonno(data, Math.round(ore * 4) / 4);
    getEl("sonnoOre").value = "";
    mostraSonnoPagina();
    mostraToast("Sonno salvato 😴");
}

function eliminaSonno(data) {
    let rimasti = [];
    for (let i = 0; i < sonno.length; i++) {
        if (sonno[i].data !== data) {
            rimasti.push(sonno[i]);
        }
    }
    sonno = rimasti;
    salvaDati("sonno", sonno);
    mostraSonnoPagina();
    mostraToast("Notte eliminata");
}

// tocco su una barra del grafico: prepara il modulo per modificare quella notte
function preparaSonno(iso) {
    getEl("sonnoData").value = iso;
    let ore = oreSonno(iso);
    if (ore !== null) {
        getEl("sonnoOre").value = ore;
    } else {
        getEl("sonnoOre").value = "";
    }
    getEl("sonnoOre").focus();
}

function mostraSonnoPagina() {
    let giorni = ultimi7Giorni();

    // ore dormite negli ultimi 7 giorni (solo le notti registrate)
    let valori = [];
    for (let i = 0; i < giorni.length; i++) {
        let ore = oreSonno(giorni[i]);
        if (ore !== null) {
            valori.push(ore);
        }
    }

    let somma = 0;
    let buone = 0;
    for (let i = 0; i < valori.length; i++) {
        somma = somma + valori[i];
        if (valori[i] >= 7) {
            buone++;
        }
    }
    let media = "—";
    if (valori.length > 0) {
        media = fmtOre(somma / valori.length);
    }
    let ultimaNotte = "—";
    if (sonno.length > 0) {
        ultimaNotte = fmtOre(sonno[sonno.length - 1].ore);
    }
    let classeBuone = "";
    if (buone >= 5) {
        classeBuone = "buono";
    }

    getEl("statSonno").innerHTML = `
        <div class="stat"><small>Media</small><strong>${media}</strong></div>
        <div class="stat"><small>Ultima notte</small><strong>${ultimaNotte}</strong></div>
        <div class="stat"><small>Notti ≥ 7h</small><strong class="${classeBuone}">${buone}/7</strong></div>
    `;

    getEl("graficoSonno").innerHTML = svgGraficoSonno(giorni);

    // ultime 5 notti, dalla più recente
    if (sonno.length === 0) {
        getEl("listaSonno").innerHTML = "";
        return;
    }
    let html = '<h4 class="titolo-lista">Ultime notti</h4>';
    let contatore = 0;
    for (let i = sonno.length - 1; i >= 0 && contatore < 5; i--) {
        let v = sonno[i];
        html += `
            <div class="riga-lista">
                <div><strong>${fmtOre(v.ore)}</strong><small>${fDataLunga(v.data)}</small></div>
                <div class="riga-dx">
                    <button type="button" class="btn-elimina-mini" onclick="eliminaSonno('${v.data}')" aria-label="Elimina">✕</button>
                </div>
            </div>
        `;
        contatore++;
    }
    getEl("listaSonno").innerHTML = html;
}

// grafico a barre del sonno degli ultimi 7 giorni
function svgGraficoSonno(giorni) {
    let W = 300, H = 190, L = 28, R = 8, T = 16, B = 26;
    let pw = W - L - R;
    let ph = H - T - B;
    let oggi = oggiISO();

    let valori = [];
    let maxOre = 10;
    for (let i = 0; i < giorni.length; i++) {
        let ore = oreSonno(giorni[i]);
        valori.push(ore);
        if (ore !== null && ore > maxOre) {
            maxOre = ore;
        }
    }
    let max = Math.ceil(maxOre / 2) * 2;
    let passo = 4;
    if (max <= 12) {
        passo = 2;
    }

    function yDi(v) {
        return T + ph - (v / max) * ph;
    }

    let svg = `<svg viewBox="0 0 ${W} ${H}" class="svg-grafico" role="img" aria-label="Ore di sonno degli ultimi 7 giorni">`;

    // fascia ideale 7-9 ore
    svg += `<rect class="banda-ideale" x="${L}" y="${yDi(9).toFixed(1)}" width="${pw}" height="${(yDi(7) - yDi(9)).toFixed(1)}" rx="4"/>`;
    svg += `<text class="etichetta-banda" x="${L + 5}" y="${(yDi(9) + 10).toFixed(1)}">ideale 7–9h</text>`;

    // asse y
    for (let v = 0; v <= max; v = v + passo) {
        let y = yDi(v);
        if (v > 0) {
            svg += `<line class="griglia" x1="${L}" y1="${y.toFixed(1)}" x2="${L + pw}" y2="${y.toFixed(1)}"/>`;
        }
        svg += `<text class="etichetta" x="${L - 6}" y="${(y + 3).toFixed(1)}" text-anchor="end">${v}</text>`;
    }
    svg += `<text class="etichetta" x="${L - 6}" y="8" text-anchor="end">ore</text>`;
    svg += `<line class="asse" x1="${L}" y1="${T}" x2="${L}" y2="${T + ph}"/>`;
    svg += `<line class="asse" x1="${L}" y1="${T + ph}" x2="${L + pw}" y2="${T + ph}"/>`;

    // una barra per ogni giorno
    let slot = pw / 7;
    let larghezza = Math.min(24, slot * 0.62);
    for (let i = 0; i < giorni.length; i++) {
        let g = giorni[i];
        let cx = L + slot * i + slot / 2;
        let p = g.split("-");
        let nome = GIORNI_BREVI[new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2])).getDay()];
        if (g === oggi) {
            nome = "Oggi";
        }
        let v = valori[i];

        if (v !== null) {
            let y = yDi(v);
            let classeBarra = "barra-sonno ";
            if (v < 7) {
                classeBarra = "barra-sonno poco";
            }
            svg += `<rect class="${classeBarra}" x="${(cx - larghezza / 2).toFixed(1)}" y="${y.toFixed(1)}" width="${larghezza.toFixed(1)}" height="${Math.max(T + ph - y, 2).toFixed(1)}" rx="5"/>`;
            svg += `<text class="valore-barra" x="${cx.toFixed(1)}" y="${(y - 4).toFixed(1)}" text-anchor="middle">${fmtNum(v, 2)}</text>`;
        } else {
            svg += `<rect class="barra-vuota" x="${(cx - larghezza / 2).toFixed(1)}" y="${T + ph - 3}" width="${larghezza.toFixed(1)}" height="3" rx="1.5"/>`;
        }
        svg += `<text class="etichetta" x="${cx.toFixed(1)}" y="${H - 8}" text-anchor="middle">${nome}</text>`;
        svg += `<rect class="hit" x="${(L + slot * i).toFixed(1)}" y="${T}" width="${slot.toFixed(1)}" height="${ph}" onclick="preparaSonno('${g}')"/>`;
    }
    return svg + "</svg>";
}

// ----- HOME: riquadri Peso e Sonno -----
function aggiornaMiniCard() {
    let sottoPeso = "Aggiungi il tuo peso";
    if (pesi.length > 0) {
        let ultimo = pesi[pesi.length - 1];
        if (pesi.length > 1) {
            let diff = ultimo.kg - pesi[pesi.length - 2].kg;
            if (Math.abs(diff) < 0.05) {
                sottoPeso = "invariato";
            } else if (diff > 0) {
                sottoPeso = "▲ " + fmtNum(Math.abs(diff)) + " kg";
            } else {
                sottoPeso = "▼ " + fmtNum(Math.abs(diff)) + " kg";
            }
        } else {
            sottoPeso = etichettaGiorno(ultimo.data);
        }
        getEl("homePeso").textContent = fmtNum(ultimo.kg) + " kg";
    } else {
        getEl("homePeso").textContent = "—";
    }
    getEl("homePesoSub").textContent = sottoPeso;

    let sottoSonno = "Registra la prima notte";
    if (sonno.length > 0) {
        let ultima = sonno[sonno.length - 1];
        getEl("homeSonno").textContent = fmtOre(ultima.ore);
        if (!sveglia.sessione) {
            sottoSonno = etichettaGiorno(ultima.data);
            if (sveglia.attiva) {
                sottoSonno = sottoSonno + " · ⏰ " + sveglia.ora;
            }
        }
    } else {
        getEl("homeSonno").textContent = "—";
    }
    if (sveglia.sessione) {
        sottoSonno = "🌙 a letto";
    }
    getEl("homeSonnoSub").textContent = sottoSonno;
}


// ---------- PUNTI, MISSIONI E STREAK ----------
function nuovoGioco() {
    return { punti: 0, streak: 0, record: 0, ultimoAccesso: null, giorni: {}, accessi: [] };
}

// punti necessari per arrivare al livello l (livello 2 a 150 punti, 3 a 450, 4 a 900...)
function sogliaLivello(l) {
    return 75 * l * (l - 1);
}

function infoLivello(punti) {
    let l = 1;
    while (punti >= sogliaLivello(l + 1)) {
        l++;
    }
    let da = sogliaLivello(l);
    let a = sogliaLivello(l + 1);
    let indiceNome = Math.min(Math.floor((l - 1) / 2), NOMI_LIVELLO.length - 1);
    return {
        livello: l,
        nome: NOMI_LIVELLO[indiceNome],
        a: a,
        perc: Math.round(((punti - da) / (a - da)) * 100)
    };
}

// Elenco di tutti i giorni con accesso (non si cancella mai): serve a segnare la streak nel calendario.
// Per gli account esistenti lo ricostruisce da quello che c'è già (ultimi 60 giorni + streak attuale).
function ricostruisciGiorniStreak() {
    let lista = [];
    if (Array.isArray(gioco.accessi)) {
        lista = gioco.accessi.slice();
    }
    let prima = lista.length;

    for (let iso in gioco.giorni) {
        if (gioco.giorni[iso].fatte && gioco.giorni[iso].fatte.includes("accesso") && !lista.includes(iso)) {
            lista.push(iso);
        }
    }
    if (gioco.ultimoAccesso && gioco.streak > 0) {
        for (let i = 0; i < gioco.streak; i++) {
            let iso = aggiungiGiorni(gioco.ultimoAccesso, -i);
            if (!lista.includes(iso)) {
                lista.push(iso);
            }
        }
    }

    lista.sort();
    gioco.accessi = lista;
    if (lista.length !== prima) {
        salvaDati("gioco", gioco);
    }
}

function giornoGioco(iso) {
    if (!gioco.giorni[iso]) {
        gioco.giorni[iso] = { fatte: [], punti: 0 };
        // si tengono solo gli ultimi 60 giorni delle missioni
        let limite = aggiungiGiorni(oggiISO(), -60);
        for (let k in gioco.giorni) {
            if (k < limite) {
                delete gioco.giorni[k];
            }
        }
    }
    return gioco.giorni[iso];
}

// aggiunge punti; restituisce il livello appena raggiunto (0 = nessun nuovo livello)
function aggiungiPunti(n, giorno) {
    let prima = infoLivello(gioco.punti).livello;
    gioco.punti = gioco.punti + n;
    giorno.punti = giorno.punti + n;
    let dopo = infoLivello(gioco.punti).livello;
    if (dopo > prima) {
        return dopo;
    }
    return 0;
}

// Accesso del giorno: +10 punti e la streak sale se ieri eri entrato anche tu
function registraAccesso() {
    if (!utenteCorrente) {
        return null;
    }
    let oggi = oggiISO();
    let g = giornoGioco(oggi);
    if (g.fatte.includes("accesso")) {
        return null;
    }

    if (gioco.ultimoAccesso === aggiungiGiorni(oggi, -1)) {
        gioco.streak = gioco.streak + 1;
    } else {
        gioco.streak = 1;
    }
    gioco.ultimoAccesso = oggi;
    gioco.record = Math.max(gioco.record, gioco.streak);
    g.fatte.push("accesso");
    if (!gioco.accessi.includes(oggi)) {
        gioco.accessi.push(oggi);
    }

    let punti = MISSIONI[0].punti;
    let bonus = null;
    for (let i = 0; i < BONUS_STREAK.length; i++) {
        if (BONUS_STREAK[i][0] === gioco.streak) {
            bonus = BONUS_STREAK[i];
        }
    }
    if (bonus) {
        punti = punti + bonus[1];
    }
    let livello = aggiungiPunti(punti, g);
    salvaDati("gioco", gioco);
    animaFiamma = true;

    let messaggio;
    if (bonus) {
        messaggio = "🎉 Streak di " + gioco.streak + " giorni! Bonus +" + bonus[1] + " · +" + punti + " punti";
    } else {
        messaggio = "🔥 Streak di " + giorniTesto(gioco.streak) + " · +" + punti + " punti";
    }
    if (livello) {
        messaggio = messaggio + " · Livello " + livello + "!";
    }
    return messaggio;
}

// quali missioni sono completate in questo momento
function condizioniMissioni(iso) {
    let tipiPasto = [];
    for (let i = 0; i < pasti.length; i++) {
        if (pasti[i].data === iso && !tipiPasto.includes(pasti[i].pasto)) {
            tipiPasto.push(pasti[i].pasto);
        }
    }
    let haPeso = false;
    for (let i = 0; i < pesi.length; i++) {
        if (pesi[i].data === iso) {
            haPeso = true;
        }
    }
    let haAllenamento = false;
    for (let i = 0; i < allenamenti.length; i++) {
        if (allenamenti[i].data === iso) {
            haAllenamento = true;
        }
    }
    let ore = oreSonno(iso);
    let kcal = kcalDelGiorno(iso);

    return {
        peso: haPeso,
        pasti: tipiPasto.length >= 3,
        allenamento: haAllenamento,
        sonno: ore !== null && ore >= 7,
        kcal: OBIETTIVO_KCAL > 0 && kcal >= OBIETTIVO_KCAL * 0.9 && kcal <= OBIETTIVO_KCAL * 1.05
    };
}

// Controlla le missioni di oggi dopo ogni dato salvato: ogni missione dà punti una sola volta al giorno
function controllaMissioni() {
    if (!utenteCorrente || !profilo) {
        return;
    }
    let oggi = oggiISO();
    let g = giornoGioco(oggi);
    let cond = condizioniMissioni(oggi);

    let nuove = [];
    for (let i = 0; i < MISSIONI.length; i++) {
        let m = MISSIONI[i];
        if (m.id !== "accesso" && cond[m.id] && !g.fatte.includes(m.id)) {
            nuove.push(m);
        }
    }
    if (nuove.length === 0) {
        return;
    }

    let totale = 0;
    for (let i = 0; i < nuove.length; i++) {
        g.fatte.push(nuove[i].id);
        totale = totale + nuove[i].punti;
    }

    // giornata perfetta: tutte le missioni fatte
    let tutteFatte = true;
    for (let i = 0; i < MISSIONI.length; i++) {
        if (!g.fatte.includes(MISSIONI[i].id)) {
            tutteFatte = false;
        }
    }
    let perfetta = false;
    if (tutteFatte && !g.fatte.includes("perfetta")) {
        g.fatte.push("perfetta");
        totale = totale + BONUS_GIORNATA_PERFETTA;
        perfetta = true;
    }

    let livello = aggiungiPunti(totale, g);
    salvaDati("gioco", gioco);

    let messaggio;
    if (nuove.length === 1) {
        messaggio = nuove[0].icona + " " + nuove[0].breve + " · +" + totale + " punti";
    } else {
        messaggio = "🎯 " + nuove.length + " missioni completate · +" + totale + " punti";
    }
    if (perfetta) {
        messaggio = "🏆 Giornata perfetta! Bonus +" + BONUS_GIORNATA_PERFETTA + " · +" + totale + " punti";
    }
    if (livello) {
        messaggio = messaggio + " · Livello " + livello + "!";
    }
    mostraToast(messaggio);
    aggiornaSchedaPunti();
}

// streak attuale: vale se hai fatto l'accesso oggi o ieri
function streakAttiva() {
    let oggi = oggiISO();
    if (gioco.ultimoAccesso === oggi || gioco.ultimoAccesso === aggiungiGiorni(oggi, -1)) {
        return gioco.streak;
    }
    return 0;
}

function animaFiammaOra() {
    let fiamma = getEl("fiammaIcona");
    fiamma.classList.remove("anima");
    void fiamma.offsetWidth;   // serve a far ripartire l'animazione
    fiamma.classList.add("anima");
}

function aggiornaSchedaPunti() {
    let oggi = oggiISO();
    let streak = streakAttiva();
    let l = infoLivello(gioco.punti);

    getEl("streakNum").textContent = streak;
    getEl("streakFiamma").classList.toggle("spenta", streak === 0);
    getEl("puntiTot").textContent = gioco.punti;
    getEl("livelloNome").textContent = "Livello " + l.livello + " · " + l.nome;
    getEl("livelloPunti").textContent = gioco.punti + " / " + l.a;
    getEl("livelloBarra").style.width = l.perc + "%";

    // ultimi 7 giorni con l'accesso fatto
    let html = "";
    for (let i = 6; i >= 0; i--) {
        let iso = aggiungiGiorni(oggi, -i);
        let p = iso.split("-");
        let nomeGiorno = GIORNI_BREVI[new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2])).getDay()];
        let fatto = false;
        if (gioco.giorni[iso] && gioco.giorni[iso].fatte.includes("accesso")) {
            fatto = true;
        }
        let classe = "streak-giorno";
        let segno = "";
        if (fatto) {
            classe += " fatto";
            segno = "✓";
        }
        if (i === 0) {
            classe += " oggi";
        }
        html += `<div class="${classe}"><span>${segno}</span>${nomeGiorno}</div>`;
    }
    getEl("streakGiorni").innerHTML = html;

    // contatore missioni di oggi
    let fatte = 0;
    if (gioco.giorni[oggi]) {
        for (let i = 0; i < MISSIONI.length; i++) {
            if (gioco.giorni[oggi].fatte.includes(MISSIONI[i].id)) {
                fatte++;
            }
        }
    }
    getEl("missioniContatore").textContent = fatte + "/" + MISSIONI.length;

    if (animaFiamma) {
        animaFiamma = false;
        animaFiammaOra();
    }
}

// testo che spiega a che punto è una missione
function dettaglioMissione(id, iso, cond) {
    if (id === "accesso") {
        return "Fatto: sei dentro!";
    }
    if (id === "peso") {
        if (cond.peso) {
            return "Peso di oggi registrato";
        }
        return "Aggiungi il peso di oggi dalla card Peso";
    }
    if (id === "pasti") {
        let tipi = [];
        for (let i = 0; i < pasti.length; i++) {
            if (pasti[i].data === iso && !tipi.includes(pasti[i].pasto)) {
                tipi.push(pasti[i].pasto);
            }
        }
        return Math.min(tipi.length, 3) + "/3 pasti (colazione, pranzo, cena, spuntino)";
    }
    if (id === "allenamento") {
        if (cond.allenamento) {
            return "Allenamento di oggi registrato";
        }
        return "Registra un allenamento nella sezione Sport";
    }
    if (id === "sonno") {
        let ore = oreSonno(iso);
        if (ore === null) {
            return "Salva le ore di sonno o usa la sveglia";
        }
        let testo = fmtOre(ore) + " registrate";
        if (ore < 7) {
            testo = testo + " (ne servono 7)";
        }
        return testo;
    }
    if (id === "kcal") {
        if (OBIETTIVO_KCAL) {
            return Math.round((kcalDelGiorno(iso) / OBIETTIVO_KCAL) * 100) + "% di " + OBIETTIVO_KCAL + " kcal";
        }
        return "—";
    }
    return "";
}

// Tocco sulla streak (in alto): mostra cosa manca per completare le missioni di oggi
function apriStreak() {
    animaFiammaOra();
    controllaMissioni();

    let oggi = oggiISO();
    let g = giornoGioco(oggi);
    let cond = condizioniMissioni(oggi);
    let streak = streakAttiva();

    getEl("stNum").textContent = streak;
    if (streak === 1) {
        getEl("stTesto").textContent = "giorno di fila";
    } else {
        getEl("stTesto").textContent = "giorni di fila";
    }

    // frase sotto il numero: record e prossimo bonus
    let frase;
    if (streak === 0) {
        frase = "Accedi ogni giorno per accendere la tua streak.";
    } else {
        let record = Math.max(gioco.record, streak);
        let prossimo = null;
        for (let i = 0; i < BONUS_STREAK.length; i++) {
            if (BONUS_STREAK[i][0] > streak) {
                prossimo = BONUS_STREAK[i];
                break;
            }
        }
        if (prossimo) {
            let manca = prossimo[0] - streak;
            frase = "Record: " + record + " · ancora " + giorniTesto(manca) + " al bonus di +" + prossimo[1] + " punti 🎁";
        } else {
            frase = "Sei una leggenda! Record: " + record + " giorni 🏆";
        }
    }
    getEl("stSub").textContent = frase;

    // missioni non ancora fatte
    let mancanti = [];
    for (let i = 0; i < MISSIONI.length; i++) {
        if (!g.fatte.includes(MISSIONI[i].id)) {
            mancanti.push(MISSIONI[i]);
        }
    }

    if (mancanti.length === 0) {
        getEl("stTitolo").textContent = "";
        getEl("listaStreakMancanti").innerHTML = `
            <div class="st-completo">
                <span>🏆</span>
                <strong>Missioni di oggi completate!</strong>
                <small>Hai fatto tutto: torna domani per tenere viva la streak.</small>
            </div>`;
    } else {
        if (mancanti.length === 1) {
            getEl("stTitolo").textContent = "Ti manca ancora 1 missione per completare la giornata";
        } else {
            getEl("stTitolo").textContent = "Ti mancano ancora " + mancanti.length + " missioni per completare la giornata";
        }
        let html = "";
        for (let i = 0; i < mancanti.length; i++) {
            let m = mancanti[i];
            html += `
                <div class="missione">
                    <div class="missione-icona">${m.icona}</div>
                    <div class="missione-testo">
                        <strong>${m.titolo}</strong>
                        <small>${dettaglioMissione(m.id, oggi, cond)}</small>
                    </div>
                    <span class="missione-punti">+${m.punti}</span>
                </div>`;
        }
        html += `
            <div class="missione">
                <div class="missione-icona">🏆</div>
                <div class="missione-testo">
                    <strong>Giornata perfetta</strong>
                    <small>Completale tutte per il bonus</small>
                </div>
                <span class="missione-punti">+${BONUS_GIORNATA_PERFETTA}</span>
            </div>`;
        getEl("listaStreakMancanti").innerHTML = html;
    }

    getEl("modaleStreak").style.display = "flex";
}

function chiudiStreak() {
    getEl("modaleStreak").style.display = "none";
}

// finestra con tutte le missioni di oggi
function apriMissioni() {
    controllaMissioni();
    let oggi = oggiISO();
    let g = giornoGioco(oggi);
    let cond = condizioniMissioni(oggi);

    let html = "";
    for (let i = 0; i < MISSIONI.length; i++) {
        let m = MISSIONI[i];
        let fatta = g.fatte.includes(m.id);
        let classe = "missione";
        let segno = "+";
        if (fatta) {
            classe = "missione fatta";
            segno = "✓ ";
        }
        html += `
            <div class="${classe}">
                <div class="missione-icona">${m.icona}</div>
                <div class="missione-testo">
                    <strong>${m.titolo}</strong>
                    <small>${dettaglioMissione(m.id, oggi, cond)}</small>
                </div>
                <span class="missione-punti">${segno}${m.punti}</span>
            </div>`;
    }

    let perfetta = g.fatte.includes("perfetta");
    let classePerfetta = "missione";
    let segnoPerfetta = "+";
    if (perfetta) {
        classePerfetta = "missione fatta";
        segnoPerfetta = "✓ ";
    }
    html += `
        <div class="${classePerfetta}">
            <div class="missione-icona">🏆</div>
            <div class="missione-testo">
                <strong>Giornata perfetta</strong>
                <small>Completa tutte le missioni</small>
            </div>
            <span class="missione-punti">${segnoPerfetta}${BONUS_GIORNATA_PERFETTA}</span>
        </div>`;

    getEl("listaMissioni").innerHTML = html;
    getEl("puntiOggi").textContent = g.punti;
    getEl("modaleMissioni").style.display = "flex";
}

function chiudiMissioni() {
    getEl("modaleMissioni").style.display = "none";
}

// chiamata quando a mezzanotte cambia il giorno con l'app aperta
function nuovoGiorno() {
    giornoCorrente = oggiISO();
    aggiornaObiettivo();
    if (profilo) {
        let messaggio = registraAccesso();
        if (messaggio) {
            mostraToast(messaggio);
        }
    }
    aggiornaPaginaCorrente();
}


// ---------- SVEGLIA (collegata al sonno) ----------
// Una pagina web può far suonare la sveglia solo finché è aperta (con lo schermo acceso).
// Per questo, mentre dormi, l'app chiede di tenere lo schermo acceso e prova a mandare una notifica.
function nuovaSveglia() {
    return { attiva: false, letto: "23:00", ora: "07:00", sessione: null };
}

function hhmm(d) {
    return dueCifre(d.getHours()) + ":" + dueCifre(d.getMinutes());
}

// "07:30" -> 450 (minuti dalla mezzanotte)
function oraInMinuti(testo) {
    let p = testo.split(":");
    return Number(p[0]) * 60 + Number(p[1]);
}

// 450 -> "07:30"
function minutiInOra(minuti) {
    let m = ((minuti % 1440) + 1440) % 1440;
    return dueCifre(Math.floor(m / 60)) + ":" + dueCifre(m % 60);
}

function fmtMinuti(minuti) {
    return fmtOre(minuti / 60);
}

// durata tra l'ora di andare a letto e quella della sveglia (anche oltre la mezzanotte)
function durataPrevista(letto, ora) {
    let d = oraInMinuti(ora) - oraInMinuti(letto);
    if (d <= 0) {
        d = d + 1440;
    }
    return d;
}

// prima volta in cui suonerà la sveglia dopo il momento di riferimento
function prossimaSveglia(ora, riferimento) {
    let p = ora.split(":");
    let d = new Date(riferimento);
    d.setHours(Number(p[0]), Number(p[1]), 0, 0);
    if (d.getTime() <= riferimento) {
        d.setDate(d.getDate() + 1);
    }
    return d.getTime();
}

function mostraSveglia() {
    getEl("svAttiva").checked = sveglia.attiva;
    getEl("svLetto").value = sveglia.letto;
    getEl("svOra").value = sveglia.ora;

    let durata = durataPrevista(sveglia.letto, sveglia.ora);
    let ore = durata / 60;
    let consigliata = minutiInOra(oraInMinuti(sveglia.ora) - 8 * 60);

    let classe = "ok";
    let testo = "Dormirai circa <strong>" + fmtMinuti(durata) + "</strong>";
    if (ore >= 7 && ore <= 9) {
        testo += " · nella fascia ideale ✓";
    } else {
        classe = "attenzione";
        if (ore < 7) {
            testo += " · pochino.";
        } else {
            testo += " · parecchio.";
        }
        testo += " Per dormire 8 ore vai a letto alle <strong>" + consigliata + "</strong>.";
    }
    getEl("svRiepilogo").className = "sv-riepilogo " + classe;
    getEl("svRiepilogo").innerHTML = testo;

    mostraSessioneSveglia();
}

function mostraSessioneSveglia() {
    let s = sveglia.sessione;

    // nessuna sessione: bottone "Vado a dormire"
    if (!s) {
        let nota = "Attiva la sveglia per svegliarti all'ora scelta. Le ore di sonno si registrano quando tocchi “Mi sono svegliato”.";
        if (sveglia.attiva) {
            nota = "La sveglia suona all'ora scelta e registra da sola le ore di sonno.";
        }
        getEl("svSessione").innerHTML = `
            <button type="button" class="btn-primario" onclick="vadoADormire()">🌙 Vado a dormire</button>
            <p class="grafico-nota">${nota}</p>`;
        return;
    }

    // sessione in corso
    let riga = "A letto dalle " + hhmm(new Date(s.inizio));
    if (s.sveglia) {
        let restano = Math.max(0, Math.round((s.sveglia - Date.now()) / 60000));
        let tra = "tra " + fmtMinuti(restano);
        if (restano < 1) {
            tra = "tra meno di un minuto";
        }
        riga += " · sveglia alle " + hhmm(new Date(s.sveglia)) + " (" + tra + ")";
    }
    getEl("svSessione").innerHTML = `
        <div class="sv-stato">
            <div class="luna">🌙</div>
            <strong>Buonanotte!</strong>
            <small>${riga}</small>
        </div>
        <button type="button" class="btn-primario" onclick="terminaSessione()">☀️ Mi sono svegliato</button>
        <button type="button" class="btn-secondario" onclick="annullaSessione()">Annulla</button>`;
}

function salvaSveglia() {
    sveglia.letto = getEl("svLetto").value || sveglia.letto;
    sveglia.ora = getEl("svOra").value || sveglia.ora;
    sveglia.attiva = getEl("svAttiva").checked;

    if (sveglia.attiva) {
        preparaAudio();
        richiediPermessoNotifiche();
    }
    if (sveglia.sessione) {
        if (sveglia.attiva) {
            sveglia.sessione.sveglia = prossimaSveglia(sveglia.ora, sveglia.sessione.inizio);
        } else {
            sveglia.sessione.sveglia = null;
        }
    }
    salvaDati("sveglia", sveglia);
    mostraSveglia();
    aggiornaMiniCard();
}

function vadoADormire() {
    preparaAudio();
    richiediPermessoNotifiche();
    let adesso = Date.now();
    let oraSveglia = null;
    if (sveglia.attiva) {
        oraSveglia = prossimaSveglia(sveglia.ora, adesso);
    }
    sveglia.sessione = { inizio: adesso, sveglia: oraSveglia };
    salvaDati("sveglia", sveglia);
    richiediWakeLock();
    mostraSveglia();
    aggiornaMiniCard();
    if (sveglia.attiva) {
        mostraToast("Buonanotte! Sveglia alle " + sveglia.ora + " 🌙");
    } else {
        mostraToast("Buonanotte! 🌙");
    }
}

// Fine del sonno (dalla sveglia o con "Mi sono svegliato"): le ore si salvano da sole
function terminaSessione() {
    let s = sveglia.sessione;
    if (!s) {
        return;
    }

    // se la sveglia è già suonata si contano al massimo 30 minuti oltre l'orario
    let fine = Date.now();
    if (s.sveglia) {
        fine = Math.min(fine, s.sveglia + 30 * 60000);
    }
    let minuti = Math.round((fine - s.inizio) / 60000);

    sveglia.sessione = null;
    salvaDati("sveglia", sveglia);
    rilasciaWakeLock();

    if (minuti < 30) {
        mostraToast("Sessione troppo breve: sonno non registrato", true);
    } else {
        let ore = Math.round((minuti / 60) * 4) / 4;
        impostaSonno(isoDaData(new Date(fine)), ore);
        mostraToast("Buongiorno! Hai dormito " + fmtOre(ore) + " 😴");
    }
    aggiornaPaginaCorrente();
}

function annullaSessione() {
    sveglia.sessione = null;
    salvaDati("sveglia", sveglia);
    rilasciaWakeLock();
    if (overlayAperto) {
        chiudiOverlaySveglia();
    }
    mostraToast("Sessione annullata");
    aggiornaPaginaCorrente();
}

// controllo che parte ogni 5 secondi: cambio giorno e sveglia che deve suonare
function controllaSveglia() {
    if (!utenteCorrente) {
        return;
    }
    if (giornoCorrente && giornoCorrente !== oggiISO()) {
        nuovoGiorno();
    }

    let s = sveglia.sessione;
    if (!s) {
        return;
    }

    let paginaSonno = getEl("progressi").classList.contains("attiva") && sezioneProgressi === "sonno";
    if (paginaSonno) {
        mostraSessioneSveglia();
    }

    if (sveglia.attiva && s.sveglia && Date.now() >= s.sveglia && !overlayAperto) {
        apriOverlaySveglia();
    }
}

function avviaTimerSveglia() {
    clearInterval(timerSveglia);
    timerSveglia = setInterval(controllaSveglia, 5000);
}

function apriOverlaySveglia() {
    let s = sveglia.sessione;
    let fine = Math.min(Date.now(), s.sveglia + 30 * 60000);
    let minutiDormiti = Math.max(0, Math.round((fine - s.inizio) / 60000));

    overlayAperto = true;
    getEl("osOra").textContent = hhmm(new Date());
    let saluto = "Buongiorno";
    if (nomeUtente) {
        saluto = "Buongiorno " + nomeUtente;
    }
    getEl("osTesto").textContent = saluto + "! Finora hai dormito " + fmtMinuti(minutiDormiti) + ".";
    getEl("overlaySveglia").style.display = "flex";
    avviaSuonoSveglia();
    notifica("⏰ Sveglia", "Sono le " + hhmm(new Date()) + ". Apri NutriTrack per spegnerla.");
}

function chiudiOverlaySveglia() {
    overlayAperto = false;
    fermaSuonoSveglia();
    getEl("overlaySveglia").style.display = "none";
}

function spegniSveglia() {
    chiudiOverlaySveglia();
    terminaSessione();
}

function posticipaSveglia() {
    chiudiOverlaySveglia();
    if (sveglia.sessione) {
        sveglia.sessione.sveglia = Date.now() + 5 * 60000;
        salvaDati("sveglia", sveglia);
    }
    mostraToast("Sveglia posticipata di 5 minuti ⏰");
    aggiornaPaginaCorrente();
}

// ----- suono della sveglia (generato dal browser, nessun file audio) -----
function preparaAudio() {
    try {
        let TipoAudio = window.AudioContext || window.webkitAudioContext;
        if (TipoAudio && !ctxAudio) {
            ctxAudio = new TipoAudio();
        }
        if (ctxAudio && ctxAudio.state === "suspended") {
            ctxAudio.resume();
        }
    } catch (e) {
        // audio non disponibile
    }
}

// un "bip" con una certa frequenza e durata
function bip(frequenza, durata) {
    if (!ctxAudio) {
        return;
    }
    let t = ctxAudio.currentTime;
    let oscillatore = ctxAudio.createOscillator();
    let volume = ctxAudio.createGain();
    oscillatore.type = "sine";
    oscillatore.frequency.value = frequenza;
    volume.gain.setValueAtTime(0.0001, t);
    volume.gain.exponentialRampToValueAtTime(0.35, t + 0.02);
    volume.gain.exponentialRampToValueAtTime(0.0001, t + durata);
    oscillatore.connect(volume);
    volume.connect(ctxAudio.destination);
    oscillatore.start(t);
    oscillatore.stop(t + durata + 0.05);
}

// tre bip e una vibrazione, ripetuti ogni 1,6 secondi
function suonaCiclo() {
    let frequenze = [880, 880, 1175];
    for (let i = 0; i < frequenze.length; i++) {
        setTimeout(function () {
            try {
                bip(frequenze[i], 0.2);
            } catch (e) {
                // niente audio
            }
        }, i * 260);
    }
    try {
        if (navigator.vibrate) {
            navigator.vibrate([250, 120, 250]);
        }
    } catch (e) {
        // niente vibrazione
    }
}

function avviaSuonoSveglia() {
    fermaSuonoSveglia();
    suonaCiclo();
    timerSuono = setInterval(suonaCiclo, 1600);
}

function fermaSuonoSveglia() {
    if (timerSuono) {
        clearInterval(timerSuono);
    }
    timerSuono = null;
    try {
        if (navigator.vibrate) {
            navigator.vibrate(0);
        }
    } catch (e) {
        // niente vibrazione
    }
}

// ----- notifiche -----
function richiediPermessoNotifiche() {
    try {
        if ("Notification" in window && Notification.permission === "default") {
            Notification.requestPermission();
        }
    } catch (e) {
        // notifiche non disponibili
    }
}

function notifica(titolo, corpo) {
    try {
        if ("Notification" in window && Notification.permission === "granted") {
            let tema = document.documentElement.getAttribute("data-tema") || "foresta";
            new Notification(titolo, { body: corpo, icon: "img/logo-icona-" + tema + ".png" });
        }
    } catch (e) {
        // notifiche non disponibili
    }
}

// ----- schermo acceso durante il sonno, così la sveglia può suonare -----
async function richiediWakeLock() {
    try {
        if ("wakeLock" in navigator && !wakeLock) {
            wakeLock = await navigator.wakeLock.request("screen");
            wakeLock.addEventListener("release", function () {
                wakeLock = null;
            });
        }
    } catch (e) {
        // non disponibile
    }
}

function rilasciaWakeLock() {
    try {
        if (wakeLock) {
            wakeLock.release();
        }
    } catch (e) {
        // non disponibile
    }
    wakeLock = null;
}

function ripristinaWakeLock() {
    if (sveglia.sessione) {
        richiediWakeLock();
    }
}

// quando si torna sull'app dopo averla lasciata in background
document.addEventListener("visibilitychange", function () {
    if (document.visibilityState !== "visible" || !utenteCorrente) {
        return;
    }
    controllaSveglia();
    ripristinaWakeLock();
    aggiornaDaCloud();
});

// quando l'app va in secondo piano o viene chiusa, invia subito le modifiche in coda
function inviaModificheInCoda() {
    let nomi = nomiInAttesa();
    for (let i = 0; i < nomi.length; i++) {
        inviaScrittura(nomi[i]);
    }
}
document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") {
        inviaModificheInCoda();
    }
});
window.addEventListener("pagehide", inviaModificheInCoda);


// ---------- AVVIO DELL'APP ----------
function nascondiCaricamento() {
    let c = getEl("caricamentoIniziale");
    if (c) {
        c.remove();
    }
}

window.addEventListener("DOMContentLoaded", async function () {
    costruisciSelettoreTemi();
    applicaTema(localStorage.getItem(CHIAVE_TEMA) || "foresta", false);

    if (!window.NT) {
        mostraSchermataAuth();
        if (window.NT_ERRORE_CONFIG) {
            getEl("erroreLogin").textContent = "Configurazione Firebase mancante: apri il file firebase-config.js e inserisci i dati del tuo progetto.";
        } else {
            getEl("erroreLogin").textContent = "Impossibile caricare il modulo di accesso. Ricarica la pagina.";
        }
        nascondiCaricamento();
        return;
    }

    try {
        let info = await NT.attendiUtente();
        if (info) {
            await entraConAccount(info);
        } else {
            mostraSchermataAuth();
        }
    } catch (ex) {
        mostraSchermataAuth();
        getEl("erroreLogin").textContent = messaggioErroreAuth(ex, "login");
    }
    nascondiCaricamento();
});
