// Ponte tra NutriTrack e Firebase (login + database nel cloud).
// Viene compilato in ../www/firebase-bundle.js e usato da app.js tramite window.NT
import { initializeApp } from "firebase/app";
import {
  getAuth, onAuthStateChanged, createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signOut, updateProfile
} from "firebase/auth";
import {
  initializeFirestore, getFirestore, persistentLocalCache, persistentMultipleTabManager,
  collection, doc, getDocs, getDocsFromCache, setDoc
} from "firebase/firestore";

// La configurazione del progetto Firebase sta in www/firebase-config.js (window.NT_CONFIG):
// si cambia a mano, senza ricompilare questo file.
const firebaseConfig = window.NT_CONFIG;
const configValida = !!(firebaseConfig && firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId &&
  !String(firebaseConfig.apiKey).startsWith("INCOLLA") && !String(firebaseConfig.projectId).startsWith("INCOLLA"));

if (!configValida) {
  // app.js mostra un messaggio chiaro: non si crea window.NT
  window.NT_ERRORE_CONFIG = true;
} else {
  avvia();
}

function avvia() {
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Cache locale persistente: l'app funziona anche senza rete e sincronizza appena torna la connessione
let db;
try {
  db = initializeFirestore(app, {
    localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() })
  });
} catch (e) {
  db = getFirestore(app);
}

// L'app usa nome utente + password: internamente il nome utente diventa un indirizzo e-mail fittizio
const DOMINIO = "nutritrack.app";
const emailDa = u => `${String(u).trim().toLowerCase()}@${DOMINIO}`;
const infoUtente = (user, usernameScelto) => ({
  uid: user.uid,
  username: usernameScelto || user.displayName || (user.email || "").split("@")[0]
});
const chiaveSync = uid => `nt_sync_${uid}`;

function conTimeout(promessa, ms) {
  return new Promise((ok, ko) => {
    const t = setTimeout(() => ko(new Error("timeout")), ms);
    promessa.then(v => { clearTimeout(t); ok(v); }, e => { clearTimeout(t); ko(e); });
  });
}

function leggiSnapshot(snap) {
  const dati = {};
  snap.forEach(d => {
    const v = d.data().v;
    if (typeof v === "string") dati[d.id] = v;
  });
  return dati;
}

window.NT = {
  // Aspetta che Firebase dica se c'è già una sessione aperta
  attendiUtente() {
    return new Promise(ok => {
      const stop = onAuthStateChanged(auth, u => { stop(); ok(u ? infoUtente(u) : null); });
    });
  },

  async registra(username, password) {
    const cred = await createUserWithEmailAndPassword(auth, emailDa(username), password);
    try { await updateProfile(cred.user, { displayName: username }); } catch (e) { /* non bloccante */ }
    try { localStorage.setItem(chiaveSync(cred.user.uid), "1"); } catch (e) { /* ignora */ }
    return infoUtente(cred.user, username);
  },

  async accedi(username, password) {
    const cred = await signInWithEmailAndPassword(auth, emailDa(username), password);
    return infoUtente(cred.user);
  },

  async esci() {
    await signOut(auth);
  },

  // Restituisce { dati: {nome: "json"}, daCache: bool }.
  // Se non c'è rete e questo dispositivo non ha mai scaricato i dati, lancia un errore:
  // così non si scambia un account già pieno per un account vuoto.
  async carica(uid) {
    const col = collection(db, "users", uid, "dati");
    let snap = null;
    try {
      snap = await conTimeout(getDocs(col), 10000);
    } catch (e) {
      snap = null;
    }
    let sincronizzato = false;
    try { sincronizzato = localStorage.getItem(chiaveSync(uid)) === "1"; } catch (e) { /* ignora */ }

    if (snap && !snap.metadata.fromCache) {
      try { localStorage.setItem(chiaveSync(uid), "1"); } catch (e) { /* ignora */ }
      return { dati: leggiSnapshot(snap), daCache: false };
    }
    if (!sincronizzato) {
      const err = new Error("offline");
      err.code = "nt/offline";
      throw err;
    }
    if (!snap) snap = await getDocsFromCache(col);
    return { dati: leggiSnapshot(snap), daCache: true };
  },

  // Un documento per ogni "chiave" dell'app; il valore è un testo JSON (evita i limiti sugli array annidati)
  salva(uid, nome, json) {
    return setDoc(doc(db, "users", uid, "dati", nome), { v: json, agg: Date.now() });
  }
};
}
