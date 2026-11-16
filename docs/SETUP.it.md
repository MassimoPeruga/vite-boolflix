# Avvio locale — Boolflix

[Presentazione del progetto](../README.md) · [English](SETUP.en.md)

## Preparazione

Servono Node.js 22 e npm; Vite 5 dichiara compatibilità con `^18.0.0 || >=20.0.0`. Non è richiesto un database.

```sh
git clone https://github.com/MassimoPeruga/vite-boolflix.git
cd vite-boolflix
```

Prima di avviare o compilare l’applicazione, apri `src/assets/js/_partials/_apiConfig.js` e sostituisci il valore storico di `api_key` con una stringa vuota:

```js
api_key: '',
```

Questa configurazione permette di esplorare l’interfaccia senza incorporare credenziali nel browser. Il progetto originale invia le richieste direttamente a TMDb: con la chiave vuota, la ricerca non restituisce risultati reali. Per consultare il catalogo usa la [demo del portfolio](https://massimoperuga.dev/demo/boolflix), che gestisce la credenziale sul server.

## Installazione e avvio

```sh
npm ci
npm run dev
```

Apri l’indirizzo indicato da Vite, normalmente [http://localhost:5173](http://localhost:5173). Per fermare il server premi `Ctrl+C`.

## Build e anteprima

```sh
npm run build
npm run preview
```

L’anteprima è normalmente disponibile su [http://localhost:4173](http://localhost:4173). Vite usa un’altra porta se quella predefinita è occupata. La cartella `dist/` contiene la build ed è esclusa da Git.

## Verifiche eseguite

Installazione, server di sviluppo, build e preview sono stati collaudati il **16 novembre 2026** con Node.js 22.22.0 e npm 10.9.4, usando il lockfile originale e una copia dei sorgenti con `api_key` vuota.

In Chrome le richieste a TMDb sono state intercettate con risposte di prova: sono stati verificati ricerca parallela di film e serie, schede, stelle, bandiere, messaggio per locandine mancanti, dettagli al passaggio del mouse e risultati vuoti. Nessuna credenziale o richiesta reale è stata inviata a TMDb durante questi controlli locali.

Lo screenshot del README è stato acquisito separatamente dalla demo pubblica con una ricerca reale, attraverso il proxy del portfolio; le richieste analytics erano bloccate.
