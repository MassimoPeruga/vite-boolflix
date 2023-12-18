# Boolflix

Questo progetto implementa una web app per la ricerca di film e serie TV utilizzando l'API di The Movie Database (TMDb). La web app consente agli utenti di cercare film e serie TV in base al titolo, visualizzando informazioni come titolo, titolo originale, lingua, voto e copertina. Ecco una guida su come utilizzare e comprendere la web app:



## [Assegnazione](https://docs.google.com/document/d/1JBwSbzVo88GBKKUwNTx6fQe7RetT_uw_PTxtGgoQPWI/edit?usp=sharing "Clicca sul link per leggere l'assegnazione dell'esercizio.")



## Requisiti Preliminari

1. Registrati su [The Movie Database (TMDb)](https://www.themoviedb.org) e ottieni la tua API_KEY seguendo le istruzioni nella sezione API delle impostazioni del tuo account.
2. Inserisci la tua API_KEY nel file del progetto.



## Progettazione (Milestone 0)

![Schema Progetto](./src/assets/img/Schema%20Boolfix.png "Schema Progetto")



## Milestone 1: Layout Base con Searchbar

Creato un layout base che includa una searchbar con un campo di input e un pulsante. Gli utenti possono inserire il nome di un film, cliccare sul pulsante e visualizzare i risultati corrispondenti dalla chiamata all'API di TMDb.
Per ogni risultato vengono visualizzate le seguenti informazioni:
1. Titolo
2. Titolo Originale
3. Lingua
4. Voto



## Milestone 2: Gestione Lingua e Ricerca Serie TV

Se la lingua originale è inglese o italiano viene trasformata la stringa statica della lingua nella bandiera corrispondente, negli altri casi si continua a visualizzare il codice linguistico. Viene estesa la ricerca anche alle serie TV.



## Milestone 3: Aggiunta delle Copertine e Voto

Aggiunta la visualizzazione delle copertine dei film o delle serie TV agli elenchi. Trasforma il voto fornito dall'API (decimale da 1 a 10) viene trafromato in numero intero da 1 a 5, rappresentato visivamente da delle stelle.



## Milestone 4: Web App con Layout 

Il layout come da assegnazione include:
- Un header con logo e searchbar.
- Risultati della ricerca visualizzati come "card" con immagine di copertina.
- Informazioni visibili in hover sulla card.



## Esecuzione del Progetto
1. Assicurati di avere una connessione Internet.
2. Scarica il progetto da Git-Hub cliccando su Code => Download ZIP.
3. Estrai il contenuto dal file ZIP.
4. Apri la cartella del progetto.
5. Scarica le dipendenze dalla console da terminale digitando npm install (assicurati di essere nella cartella corretta e di avere installato npm).
6. Utilizza la searchbar per cercare film o serie TV.
7. Esplora i risultati e visualizza dettagli aggiuntivi al passaggio del mouse.



## Future features

- Milestone 5 (Opzionale):
Per ciascun film e serie aggiungere i principali 5 attori del cast e i generi attribuiti al contenuto.
- Milestone 6 (Opzionale):
Aggiungere due select: una per scegliere tra film e serie tv e un'altra che sarà disponibile solo se si avrà selezionato la prima nella quale poter scegliere il genere per cui filtrare la ricerca.
- Fare in modo che entrando nella pagina la sezione di input e il logo siano al centro della pagina e spostarli nella parte superiore solo dopo aver effettuato una ricerca, stampare evntualmente un messaggio nel caso non si ottengano risultati.
- Dopo aver effettuato la ricerca visualizzare la chiave di ricerca a schermo e svuotare i campi di input.