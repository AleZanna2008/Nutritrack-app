# NutriTrack – progetto Android

Questa cartella contiene la tua app (cartella `www/`) già inserita in un progetto Android
(Capacitor). Serve solo compilarla per ottenere il file **.apk**.

## Metodo 1 – Senza installare nulla (consigliato): GitHub

1. Crea un account gratuito su https://github.com e un nuovo repository (anche privato).
2. Carica **tutto il contenuto di questa cartella** nel repository
   (pulsante *Add file → Upload files*; assicurati che venga caricata anche la cartella
   nascosta `.github`, altrimenti trascina l'intera cartella da un computer con Git).
3. Vai nella scheda **Actions**: parte da solo il workflow "Compila APK NutriTrack"
   (oppure avvialo con *Run workflow*). Dura circa 5–8 minuti.
4. A fine lavoro apri l'esecuzione e scarica **NutriTrack-apk** in fondo alla pagina
   (sezione *Artifacts*): dentro lo zip trovi `app-debug.apk`.

## Metodo 2 – Con Android Studio

1. Installa Node.js e Android Studio.
2. In questa cartella: `npm install` e poi `npx cap sync android`
3. `npx cap open android` → in Android Studio: *Build → Build APK(s)*.
   Il file si trova in `android/app/build/outputs/apk/debug/app-debug.apk`.

## Installazione sul telefono

1. Copia `app-debug.apk` sul telefono (cavo, Drive, Telegram, e-mail…).
2. Aprilo dal telefono. Android chiederà di consentire l'installazione da "origini
   sconosciute" per l'app che hai usato per aprire il file: accetta.
3. Se compare l'avviso di Play Protect, scegli *Installa comunque*
   (l'APK è firmato con chiave di debug, non pubblicato sul Play Store).

## Aggiornare l'app

Modifica i file in `www/` (index.html, style.css, app.js, img/), ricarica su GitHub
e scarica il nuovo APK. Per installare l'aggiornamento sopra la versione esistente
non serve disinstallare.

## Account e dati nel cloud (Firebase)

Login e dati sono su Firebase: lo stesso nome utente e la stessa password funzionano sul sito
(GitHub Pages) e nell'app Android, con gli stessi dati.
- Il progetto Firebase da usare si imposta in `www/firebase-config.js` (incolla la configurazione
  della tua app web Firebase al posto dei valori "INCOLLA_QUI_...").
- Il modulo Firebase è già compilato in `www/firebase-bundle.js`; il sorgente è in `firebase-src/`
  (per ricompilarlo: `cd firebase-src && npm install && npm run build`).
- Il nome utente diventa internamente un indirizzo fittizio (`nome@nutritrack.app`):
  per questo non esiste il recupero password via e-mail.
- Le regole di Firestore devono permettere a ogni utente di leggere/scrivere solo `users/{suo uid}`.
- Il sito si pubblica con `.github/workflows/pages.yml`, l'APK con `.github/workflows/build-apk.yml`.

## Per pubblicare sul Play Store

Serve un APK/AAB firmato con una chiave tua (release) e un account sviluppatore Google.
Posso aiutarti a preparare anche quello.
