# Input SRL

Questo repo contiene il codice sorgente per il sito vetrina di Input SRL.

È stato svilupatto mediante l'utilizzo del framework [Svelte](https://svelte.dev).


***È necessario avere [Node.js](https://nodejs.org) installato in locale per poter eseguire il codice in locale, e per poter creare la build.***

## Get started

Per poter testare il codice in locale è necessario innanzitutto installare tutte le dependencies tramite il comando `npm install` all'interno della cartella del progetto. Una volta installate, potrete utilizzare il comando `npm run dev` per lanciare il server di development locale. L'app sarà accessibile all'indirizzo http://localhost:5000.

Il server di sviluppo locale utilizza l'hot reloading, perciò se volete fare una modifica, non è necessario riavviare il server ogni volta, ma le modifiche verrano automaticamente applicate.

## Compila e lancia in modalità production

Per creare un build ottimizzato dell'app, utilizza il comando

```bash
npm run build
```

Questo creerà una build all'interno della cartella `public/build` (questa cartella non e' tracciata da git), che potrà essere testata in locale tramite il comando `npm run start`.

## Modificare copy, links ed aggiungere immagini
Per semplificare lo sviluppo ho creato una cartella `src/utils` contenente una serie di file, con all'interno degli array contenenti il copy di tutti gli elementi iterabili. Questo è stato fatoo per poter mantenere il codice il piu' pulito possibile, di modo che i dati e la loro rappresentazione grafica risiedano in posti diversi. Percio' per qualsiasi elemento che deve essere modificato, ad esempio il copy dei talenti nella pagina talenti, basterà modifcare il contenuto dell'elemnto specifico nel file `src/utils/talenti.ts`.
