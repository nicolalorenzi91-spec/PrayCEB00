// Posta la lettura del giorno nel gruppo Telegram.
// Richiede le variabili d'ambiente TELEGRAM_BOT_TOKEN e TELEGRAM_CHAT_ID.

const READINGS = [
  // --- VANGELO SECONDO MATTEO (Capitoli 1-28) ---
  {
    book: "Mt",
    name: "Matteo",
    chapter: 1,
    verses: "18-25",
    title: "La nascita di Gesù Cristo",
    text: [
      { n: 18, t: "Così fu generato Gesù Cristo: sua madre Maria, essendo promessa sposa di Giuseppe, prima che andassero a vivere insieme si trovò incinta per opera dello Spirito Santo." },
      { n: 19, t: "Giuseppe suo sposo, poiché era uomo giusto e non voleva accusarla pubblicamente, pensò di ripudiarla in segreto." },
      { n: 20, t: "Mentre però stava considerando queste cose, ecco, gli apparve in sogno un angelo del Signore e gli disse: «Giuseppe, figlio di Davide, non temere di prendere con te Maria, tua sposa. Infatti il bambino che è generato in lei viene dallo Spirito Santo;" },
      { n: 21, t: "ella darà alla luce un figlio e tu lo chiamerai Gesù: egli infatti salverà il suo popolo dai suoi peccati»." },
      { n: 22, t: "Tutto questo è avvenuto perché si compisse ciò che era stato detto dal Signore per mezzo del profeta:" },
      { n: 23, t: "Ecco, la vergine concepirà e darà alla luce un figlio: a lui sarà dato il nome di Emmanuele, che significa Dio con noi." },
      { n: 24, t: "Quando si destò dal sonno, Giuseppe fece come gli aveva ordinato l'angelo del Signore e prese con sé la sua sposa;" },
      { n: 25, t: "senza che egli la conoscesse, ella diede alla luce un figlio, ed egli lo chiamò Gesù." }
    ]
  },
  {
    book: "Mt",
    name: "Matteo",
    chapter: 2,
    verses: "1-12",
    title: "L'adorazione dei Magi",
    text: [
      { n: 1, t: "Nato Gesù a Betlemme di Giudea, al tempo del re Erode, ecco, alcuni Magi vennero da oriente a Gerusalemme e dicevano:" },
      { n: 2, t: "«Dov'è colui che è nato, il re dei Giudei? Abbiamo visto spuntare la sua stella e siamo venuti ad adorarlo»." },
      { n: 3, t: "All'udire questo, il re Erode restò turbato e con lui tutta Gerusalemme." },
      { n: 4, t: "Riuniti tutti i capi dei sacerdoti e gli scribi del popolo, si informava da loro sul luogo in cui doveva nascere il Cristo." },
      { n: 5, t: "Gli risposero: «A Betlemme di Giudea, perché così è scritto per mezzo del profeta:" },
      { n: 6, t: "E tu, Betlemme, terra di Giuda, non sei davvero l'ultima delle città principali di Giuda: da te infatti uscirà un capo che sarà il pastore del mio popolo, Israele»." },
      { n: 7, t: "Allora Erode, chiamati in segreto i Magi, si fece dire da loro con esattezza il tempo in cui era apparsa la stella" },
      { n: 8, t: "e li inviò a Betlemme dicendo: «Andate e informatevi accuratamente sul bambino e, quando l'avrete trovato, fatemelo sapere, perché anch'io venga ad adorarlo»." },
      { n: 9, t: "Udito il re, essi partirono. Ed ecco, la stella, che avevano visto spuntare, li precedeva, finché giunse e si fermò sopra il luogo dove si trovava il bambino." },
      { n: 10, t: "Al vedere la stella, provarono una gioia grandissima." },
      { n: 11, t: "Entrati nella casa, videro il bambino con Maria sua madre, si prostrarono e lo adorarono. Poi aprirono i loro scrigni e gli offrirono in dono oro, incenso e mirra." },
      { n: 12, t: "Avvertiti in sogno di non tornare da Erode, per un'altra strada fecero ritorno al loro paese." }
    ]
  },
  {
    book: "Mt",
    name: "Matteo",
    chapter: 3,
    verses: "13-17",
    title: "Il battesimo di Gesù",
    text: [
      { n: 13, t: "In quel tempo Gesù dalla Galilea venne al Giordano da Giovanni, per farsi battezzare da lui." },
      { n: 14, t: "Giovanni però voleva impedirglielo, dicendo: «Sono io che ho bisogno di essere battezzato da te, e tu vieni da me?»." },
      { n: 15, t: "Ma Gesù gli rispose: «Lascia fare per ora, perché conviene che adempiamo ogni giustizia». Allora egli lo lasciò fare." },
      { n: 16, t: "Appena battezzato, Gesù uscì dall'acqua: ed ecco, si aprirono per lui i cieli ed egli vide lo Spirito di Dio discendere come una colomba e venire su di lui." },
      { n: 17, t: "Ed ecco una voce dal cielo che diceva: «Questi è il Figlio mio, l'amato: in lui ho posto il mio compiacimento»." }
    ]
  },
  {
    book: "Mt",
    name: "Matteo",
    chapter: 4,
    verses: "1-11",
    title: "Le tentazioni di Gesù nel deserto",
    text: [
      { n: 1, t: "Allora Gesù fu condotto dallo Spirito nel deserto, per essere tentato dal diavolo." },
      { n: 2, t: "Dopo aver digiunato quaranta giorni e quaranta notti, alla fine ebbe fame." },
      { n: 3, t: "Il tentatore gli si avvicinò e gli disse: «Se tu sei Figlio di Dio, dì che queste pietre diventino pane»." },
      { n: 4, t: "Ma egli rispose: «Sta scritto: Non di solo pane vivrà l'uomo, ma di ogni parola che esce dalla bocca di Dio»." },
      { n: 5, t: "Allora il diavolo lo portò nella città santa, lo pose sul punto più alto del tempio" },
      { n: 6, t: "e gli disse: «Se tu sei Figlio di Dio, tùttati giù; sta scritto infatti: Ai suoi angeli darà ordini a tuo riguardo ed essi ti porteranno sulle loro mani perché il tuo piede non inciampi in una pietra»." },
      { n: 7, t: "Gesù gli rispose: «Sta scritto anche: Non tenterai il Signore Dio tuo»." },
      { n: 8, t: "Di nuovo il diavolo lo portò su un monte altissimo e gli mostrò tutti i regni del mondo e la loro gloria" },
      { n: 9, t: "e gli disse: «Tutte queste cose io ti darò se, prostrandoti, mi adorerai»." },
      { n: 10, t: "Allora Gesù gli disse: «Vattene, Satana! Sta scritto infatti: Il Signore, Dio tuo, adorerai e a lui solo renderai culto»." },
      { n: 11, t: "Allora il diavolo lo lasciò, ed ecco, degli angeli gli si avvicinarono e lo servivano." }
    ]
  },
  {
    book: "Mt",
    name: "Matteo",
    chapter: 5,
    verses: "1-12",
    title: "Le Beatitudini",
    text: [
      { n: 1, t: "Vedendo le folle, Gesù salì sul monte e, postosi a sedere, gli si avvicinarono i suoi discepoli." },
      { n: 2, t: "Si mise a parlare e insegnava loro dicendo:" },
      { n: 3, t: "«Beati i poveri in spirito, perché di essi è il regno dei cieli." },
      { n: 4, t: "Beati quelli che sono nel pianto, perché saranno consolati." },
      { n: 5, t: "Beati i miti, perché erediteranno la terra." },
      { n: 6, t: "Beati quelli che hanno fame e sete della giustizia, perché saranno saziati." },
      { n: 7, t: "Beati i misericordiosi, perché troveranno misericordia." },
      { n: 8, t: "Beati i puri di cuore, perché vedranno Dio." },
      { n: 9, t: "Beati gli operatori di pace, perché saranno chiamati figli di Dio." },
      { n: 10, t: "Beati i perseguitati per la giustizia, perché di essi è il regno dei cieli." },
      { n: 11, t: "Beati voi quando vi insulteranno, vi perseguiteranno e, mentendo, diranno ogni sorta di male contro di voi per causa mia." },
      { n: 12, t: "Rallegratevi ed esultate, perché grande è la vostra ricompensa nei cieli. Così infatti perseguitarono i profeti che furono prima di voi»." }
    ]
  },
  {
    book: "Mt",
    name: "Matteo",
    chapter: 6,
    verses: "9-15",
    title: "La preghiera del Padre Nostro",
    text: [
      { n: 9, t: "Voi dunque pregate così: Padre nostro che sei nei cieli, sia santificato il tuo nome," },
      { n: 10, t: "venga il tuo regno, sia fatta la tua volontà, come in cielo così in terra." },
      { n: 11, t: "Dacci oggi il nostro pane quotidiano," },
      { n: 12, t: "e rimetti a noi i nostri debiti come anche noi li rimettiamo ai nostri debitori," },
      { n: 13, t: "e non abbandonarci alla tentazione, ma liberaci dal male." },
      { n: 14, t: "Se voi infatti perdonerete agli altri le loro colpe, il Padre vostro che è nei cieli perdonerà anche a voi;" },
      { n: 15, t: "ma se voi non perdonerete agli altri, neppure il Padre vostro perdonerà le vostre colpe." }
    ]
  },
  {
    book: "Mt",
    name: "Matteo",
    chapter: 7,
    verses: "7-12",
    title: "Chiedete, cercate, bussate e la regola d'oro",
    text: [
      { n: 7, t: "«Chiedete e vi sarà dato, cercate e troverete, bussate e vi sarà aperto." },
      { n: 8, t: "Perché chiunque chiede riceve, e chi cerca trova, e a chi bussa sarà aperto." },
      { n: 9, t: "Chi tra voi, al figlio che gli chiede un pane, darà una pietra?" },
      { n: 10, t: "O se gli chiede un pesce, gli darà una serpe?" },
      { n: 11, t: "Se voi dunque, che siete cattivi, sapete dare cose buone ai vostri figli, quanto più il Padre vostro che è nei cieli darà cose buone a quelli che gliele chiedono!" },
      { n: 12, t: "Tutto quanto volete che gli uomini facciano a voi, anche voi fatelo a loro: questa infatti è la Legge e i Profeti»." }
    ]
  },
  {
    book: "Mt",
    name: "Matteo",
    chapter: 8,
    verses: "5-13",
    title: "La fede del centurione a Cafarnao",
    text: [
      { n: 5, t: "Entrato in Cafarnao, gli si avvicinò un centurione che lo supplicava e diceva:" },
      { n: 6, t: "«Signore, il mio servo è in casa a letto, paralizzato e soffre terribilmente»." },
      { n: 7, t: "Gli disse: «Io verrò e lo guarirò»." },
      { n: 8, t: "Ma il centurione rispose: «Signore, io non sono degno che tu entri sotto il mio tetto, ma dì soltanto una parola e il mio servo sarà guarito." },
      { n: 9, t: "Anch'io infatti sono un diacono sottoposto a un'autorità, e ho sotto di me dei soldati. E dico ad uno: \"Va'!\", ed egli va; e a un altro: \"Vieni!\", ed egli viene; e al mio servo: \"Fa' questo!\", ed egli lo fa»." },
      { n: 10, t: "Ascoltandolo, Gesù fu pieno di stupore e disse a quelli che lo seguivano: «In verità io vi dico, in Israele non ho trovato nessuno con una fede così grande!" },
      { n: 11, t: "Ora io vi dico che molti verranno dall'oriente e dall'occidente e siederanno a mensa con Abramo, Isacco e Giacobbe nel regno dei cieli," },
      { n: 12, t: "mentre i figli del regno saranno cacciati fuori nelle tenebre, dove sarà pianto e stridore di denti»." },
      { n: 13, t: "E Gesù disse al centurione: «Va', avvenga per te come hai creduto». E in quell'ora il suo servo fu guarito." }
    ]
  },
  {
    book: "Mt",
    name: "Matteo",
    chapter: 9,
    verses: "9-13",
    title: "La chiamata di Matteo e il medico dei malati",
    text: [
      { n: 9, t: "Andando via di là, Gesù vide un uomo, chiamato Matteo, seduto al banco delle imposte, e gli disse: «Seguimi». Ed egli si alzò e lo seguì." },
      { n: 10, t: "Mentre sedeva a tavola nella casa, sopraggiunsero molti pubblicani e peccatori e si misero a tavola con Gesù e con i suoi discepoli." },
      { n: 11, t: "Vedendo ciò, i farisei dicevano ai suoi discepoli: «Come mai il vostro maestro mangia insieme ai pubblicani e ai peccatori?»." },
      { n: 12, t: "Udito questo, disse: «Non sono i sani che hanno bisogno del medico, ma i malati." },
      { n: 13, t: "Andate a imparare che cosa significa: Misericordia voglio e non sacrificio. Io non sono venuto infatti a chiamare i giusti, ma i peccatori»." }
    ]
  },
  {
    book: "Mt",
    name: "Matteo",
    chapter: 10,
    verses: "1-8",
    title: "L'invio dei dodici apostoli in missione",
    text: [
      { n: 1, t: "Chiamati a sé i suoi dodici discepoli, diede loro potere sugli spiriti impuri per scacciarli e guarire ogni malattia e ogni infermità." },
      { n: 2, t: "I nomi dei dodici apostoli sono: primo, Simone, chiamato Pietro, e Andrea suo fratello; Giacomo, figlio di Zebedeo, e Giovanni suo fratello;" },
      { n: 3, t: "Filippo e Bartolomeo; Tommaso e Matteo il pubblicano; Giacomo, figlio di Alfeo, e Taddeo;" },
      { n: 4, t: "Simone il Cananeo e Giuda l'Iscariota, colui che poi lo tradì." },
      { n: 5, t: "Questi sono i Dodici che Gesù inviò, ordinando loro: «Non andate fra i pagani e non entrate nelle città dei Samaritani;" },
      { n: 6, t: "rivolgetevi piuttosto alle pecore perdute della casa d'Israele." },
      { n: 7, t: "Strada facendo, predicati, dicendo: \"Il regno dei cieli è vicino\"." },
      { n: 8, t: "Guarite gli infermi, risuscitate i morti, purificate i lebbrosi, scacciate i demoni. Gratuitamente avete ricevuto, gratuitamente date»." }
    ]
  },
  {
    book: "Mt",
    name: "Matteo",
    chapter: 11,
    verses: "25-30",
    title: "Il giogo dolce e il ristoro dell'anima",
    text: [
      { n: 25, t: "In quel tempo Gesù disse: «Ti rendo lode, Padre, Signore del cielo e della terra, perché hai nascosto queste cose ai dotti e ai sapienti e le hai rivelate ai piccoli." },
      { n: 26, t: "Sì, o Padre, perché così è piaciuto a te." },
      { n: 27, t: "Tutto è stato dato a me dal Padre mio; nessuno conosce il Figlio se non il Padre, e nessuno conosce il Padre se non il Figlio e colui al quale il Figlio vorrà rivelarlo." },
      { n: 28, t: "Venite a me, voi tutti che siete affaticati e oppressi, e io vi ristorerò." },
      { n: 29, t: "Prendete su di voi il mio giogo e imparate da me, che sono mite e umile di cuore, e troverete ristoro per la vostra vita." },
      { n: 30, t: "Il mio giogo infatti è dolce e il mio peso leggero»." }
    ]
  },
  {
    book: "Mt",
    name: "Matteo",
    chapter: 12,
    verses: "9-14",
    title: "La guarigione dell'uomo dalla mano parzialmente paralizzata in giorno di sabato",
    text: [
      { n: 9, t: "Allontanatosi di là, andò nella loro sinagoga." },
      { n: 10, t: "Ed ecco, c'era un uomo che aveva una mano paralizzata; per poterlo accusare, domandarono a Gesù: «È lecito guarire in giorno di sabato?»." },
      { n: 11, t: "Ed egli disse loro: «Chi di voi, se possiede una sola pecora e questa di sabato cade in una fossa, non la prende e la tira fuori?" },
      { n: 12, t: "Ora, quanto un uomo vale più di una pecora! Perciò è lecito fare del bene in giorno di sabato»." },
      { n: 13, t: "Allora disse a quell'uomo: «Tendi la tua mano». Egli la tese e fu restituita sana come l'altra." },
      { n: 14, t: "All'uscire, i farisei tennero consiglio contro di lui per farlo morire." }
    ]
  },
  {
    book: "Mt",
    name: "Matteo",
    chapter: 13,
    verses: "44-50",
    title: "Le parabole del tesoro, della perla e della rete",
    text: [
      { n: 44, t: "«Il regno dei cieli è simile a un tesoro nascosto nel campo; un uomo lo trova e lo nasconde; poi va, pieno di gioia, vende tutti i suoi beni e compra quel campo." },
      { n: 45, t: "Il regno dei cieli è anche simile a un mercante che va in cerca di perle preziose;" },
      { n: 46, t: "trovata una perla di grande valore, va, vende tutti i suoi beni e la compra." },
      { n: 47, t: "Ancora, il regno dei cieli è simile a una rete gettata nel mare, che raccoglie ogni genere di pesci." },
      { n: 48, t: "Quando è piena, i pescatori la tirano a riva, si mettono a sedere, raccolgono i pesci buoni nei canestri e buttano via i cattivi." },
      { n: 49, t: "Così sarà alla fine del mondo. Usciranno gli angeli e separeranno i cattivi dai giusti" },
      { n: 50, t: "e li getteranno nella fornace ardente, dove sarà pianto e stridore di denti»." }
    ]
  },
  {
    book: "Mt",
    name: "Matteo",
    chapter: 14,
    verses: "22-33",
    title: "Gesù e Pietro camminano sulle acque",
    text: [
      { n: 22, t: "Subito dopo costrinse i discepoli a salire sulla barca e a precederlo sull'altra riva, finché non avesse congedato la folla." },
      { n: 23, t: "Congedata la folla, salì sul monte, in disparte, a pregare. Venuta la sera, egli si trovava là, da solo." },
      { n: 24, t: "La barca intanto distava già molte miglia dalla terra ed era agitata dalle onde: il vento infatti era contrario." },
      { n: 25, t: "Sul finire della notte egli venne verso di loro camminando sul mare." },
      { n: 26, t: "I discepoli, vedendolo camminare sul mare, furono sconvolti e dissero: «È un fantasma!» e gridarono dalla paura." },
      { n: 27, t: "Ma subito Gesù parlò loro dicendo: «Coraggio, sono io, non abbiate paura!»." },
      { n: 28, t: "Pietro gli rispose: «Signore, se sei tu, comandami di venire verso di te sulle acque»." },
      { n: 29, t: "Ed egli disse: «Vieni!». Pietro scese dalla barca, si mise a camminare sulle acque e andò verso Gesù." },
      { n: 30, t: "Ma, vedendo che il vento era forte, s'impaurì e, cominciando ad affondare, gridò: «Signore, salvami!»." },
      { n: 31, t: "E subito Gesù stese la mano, lo afferrò e gli disse: «Uomo di poca fede, perché hai dubitato?»." },
      { n: 32, t: "Appena saliti sulla barca, il vento cessò." },
      { n: 33, t: "Quelli che erano sulla barca si prostrarono davanti a lui, dicendo: «Davvero tu sei Figlio di Dio!»." }
    ]
  },
  {
    book: "Mt",
    name: "Matteo",
    chapter: 15,
    verses: "21-28",
    title: "La fede della donna Cananea",
    text: [
      { n: 21, t: "Partito di là, Gesù si ritirò verso la zona di Tiro e di Sidone." },
      { n: 22, t: "Ed ecco una donna Cananea, che veniva da quella regione, si mise a gridare: «Pietà di me, Signore, figlio di Davide! Mia figlia è molto tormentata da un demonio»." },
      { n: 23, t: "Ma egli non le rivolse neppure una parola. Allora i suoi discepoli gli si avvicinarono e lo implorarono: «Esaudiscila, perché ci viene dietro gridando!»." },
      { n: 24, t: "Egli rispose: «Non sono stato mandato se non alle pecore perdute della casa d'Israele»." },
      { n: 25, t: "Ma quella venne e si prostrò dinanzi a lui, dicendo: «Signore, aiutami!»." },
      { n: 26, t: "Ed egli rispose: «Non è bene prendere il pane dei figli e gettarlo ai cagnolini»." },
      { n: 27, t: "«È vero, Signore – disse la donna –, eppure anche i cagnolini mangiano le briciole che cadono dalla tavola dei loro padroni»." },
      { n: 28, t: "Allora Gesù le replicò: «Donna, grande è la tua fede! Avvenga per te come desideri». E da quel momento sua figlia fu guarita." }
    ]
  },
  {
    book: "Mt",
    name: "Matteo",
    chapter: 16,
    verses: "13-19",
    title: "La professione di fede di Pietro a Cesarea",
    text: [
      { n: 13, t: "Giunto Gesù nella regione di Cesarea di Filippo, domandò ai suoi discepoli: «La gente, chi dice che sia il Figlio dell'uomo?»." },
      { n: 14, t: "Risposero: «Alcuni dicono Giovanni il Battista, altri Elia, altri Geremia o qualcuno dei profeti»." },
      { n: 15, t: "Disse loro: «Ma voi, chi dite che io sia?»." },
      { n: 16, t: "Rispose Simon Pietro: «Tu sei il Cristo, il Figlio del Dio vivente»." },
      { n: 17, t: "E Gesù gli disse: «Beato sei tu, Simone, figlio di Giona, perché né carne né sangue te l'hanno rivelato, ma il Padre mio che è nei cieli." },
      { n: 18, t: "E io a te dico: tu sei Pietro e su questa pietra edificherò la mia Chiesa e le potenze degli inferi non prevarranno su di essa." },
      { n: 19, t: "A te darò le chiavi del regno dei cieli: tutto ciò che legherai sulla terra sarà legato nei cieli, e tutto ciò che scioglierai sulla terra sarà sciolto nei cieli»." }
    ]
  },
  {
    book: "Mt",
    name: "Matteo",
    chapter: 17,
    verses: "1-9",
    title: "La Trasfigurazione di Gesù sul monte",
    text: [
      { n: 1, t: "Sei giorni dopo, Gesù prese con sé Pietro, Giacomo e Giovanni suo fratello e li condusse in disparte, su un alto monte." },
      { n: 2, t: "E fu trasfigurato davanti a loro: il suo volto brillò come il sole e le sue vesti divennero candide come la luce." },
      { n: 3, t: "Ed ecco apparvero loro Mosè ed Elia, che conversavano con lui." },
      { n: 4, t: "Prendendo la parola, Pietro disse a Gesù: «Signore, è bello per noi essere qui! Se vuoi, farò qui tre capanne, una per te, una per Mosè e una per Elia»." },
      { n: 5, t: "Egli stava ancora parlando, quando una nube luminosa li coprì con la sua ombra. Ed ecco una voce dalla nube che diceva: «Questi è il Figlio mio, l'amato: in lui ho posto il mio compiacimento. Ascoltatelo!»." },
      { n: 6, t: "All'udire ciò, i discepoli caddero con la faccia a terra e furono presi da grande timore." },
      { n: 7, t: "Ma Gesù si avvicinò, li toccò e disse: «Alzatevi e non temete»." },
      { n: 8, t: "Alzando gli occhi non videro nessuno, se non Gesù solo." },
      { n: 9, t: "Mentre scendevano dal monte, Gesù ordinò loro: «Non parlate a nessuno di questa visione, prima che il Figlio dell'uomo sia risorto dai morti»." }
    ]
  },
  {
    book: "Mt",
    name: "Matteo",
    chapter: 18,
    verses: "15-20",
    title: "La correzione fraterna e la preghiera comune",
    text: [
      { n: 15, t: "«Se il tuo fratello commette una colpa contro di te, va' e ammoniscilo fra te e lui solo; se ti ascolterà, avrai guadagnato il tuo fratello;" },
      { n: 16, t: "se non ascolterà, prendi ancora con te una o due persone, perché ogni cosa sia risolta sulla parola di due o tre testimoni." },
      { n: 17, t: "Se poi non ascolterà neanche costoro, dillo alla comunità; e se non ascolterà neanche la comunità, sia per te come il pagano e il pubblicano." },
      { n: 18, t: "In verità io vi dico: tutto quello che legherete sulla terra sarà legato in cielo, e tutto quello che scioglierete sulla terra sarà sciolto in cielo." },
      { n: 19, t: "In verità io vi dico ancora: se due di voi sulla terra si metteranno d'accordo per chiedere qualunque cosa, il Padre mio che è nei cieli gliela concederà." },
      { n: 20, t: "Perché dove sono due o tre riuniti nel mio nome, lì sono io in mezzo a loro»." }
    ]
  },
  {
    book: "Mt",
    name: "Matteo",
    chapter: 19,
    verses: "13-15",
    title: "Gesù e i bambini",
    text: [
      { n: 13, t: "Allora gli furono presentati dei bambini perché imponesse loro le mani e pregasse; ma i discepoli li rimproverarono." },
      { n: 14, t: "Gesù però disse: «Lasciate che i bambini vengano a me e non glielo impedite, perché a chi è come loro appartiene il regno dei cieli»." },
      { n: 15, t: "E, dopo aver imposto loro le mani, se ne andò via di là." }
    ]
  },
  {
    book: "Mt",
    name: "Matteo",
    chapter: 20,
    verses: "1-16",
    title: "I lavoratori della vigna e la bontà del Padrone",
    text: [
      { n: 1, t: "«Il regno dei cieli è simile a un padrone di casa che uscì all'alba per prendere a giornata lavoratori per la sua vigna." },
      { n: 2, t: "Accordatosi con loro per un denaro al giorno, li inviò nella sua vigna." },
      { n: 3, t: "Uscito poi verso le nove del mattino, ne vide altri che stavano in piazza, disoccupati," },
      { n: 4, t: "e disse loro: \"Andate anche voi nella vigna; quello che è giusto ve lo darò\"." },
      { n: 5, t: "Ed essi andarono. Uscì di nuovo verso mezzogiorno e verso le tre del pomeriggio, e fece altrettanto." },
      { n: 6, t: "Uscito ancora verso le cinque del pomeriggio, ne trovò altri che stavano lì e disse loro: \"Perché ve ne state qui tutto il giorno senza far niente?\"." },
      { n: 7, t: "Gli risposero: \"Perché nessuno ci ha presi a giornata\". Ed egli disse loro: \"Andate anche voi nella vigna\"." },
      { n: 8, t: "Quando fu sera, il padrone della vigna disse al suo fattore: \"Chiama i lavoratori e dà loro la paga, cominciando dagli ultimi fino ai primi\"." },
      { n: 9, t: "Venuti quelli delle cinque del pomeriggio, ricevettero ciascuno un denaro." },
      { n: 10, t: "Quando arrivarono i primi, pensarono che avrebbero ricevuto di più. Ma anch'essi ricevettero ciascuno un denaro." },
      { n: 11, t: "Nel ritirarlo, mormoravano contro il padrone" },
      { n: 12, t: "dicendo: \"Questi ultimi hanno lavorato un'ora sola e li hai trattati come noi, che abbiamo sopportato il peso della giornata e il caldo\"." },
      { n: 13, t: "Ma il padrone, rispondendo a uno di loro, disse: \"Amico, io non ti faccio torto. Non hai forse concordato con me per un denaro?" },
      { n: 14, t: "Prendi il tuo e va'. Ma io voglio dare anche a quest'ultimo quanto a te:" },
      { n: 15, t: "non posso fare delle mie cose quello che voglio? Oppure sei invidioso perché io sono buono?\"." },
      { n: 16, t: "Così gli ultimi saranno primi e i primi, ultimi»." }
    ]
  },
  {
    book: "Mt",
    name: "Matteo",
    chapter: 21,
    verses: "1-11",
    title: "L'ingresso messianico di Gesù a Gerusalemme",
    text: [
      { n: 1, t: "Quando furono vicini a Gerusalemme e giunsero a Bètfage, presso il monte degli Ulivi, Gesù inviò due discepoli" },
      { n: 2, t: "dicendo loro: «Andate nel villaggio di fronte a voi e subito troverete un'asina legata e con essa un puledro. Slegateli e conduceteli da me." },
      { n: 3, t: "E se qualcuno vi dice qualcosa, risponderete: \"Il Signore ne ha bisogno, ma li rimanderà subito\"»." },
      { n: 4, t: "Questo avvenne perché si compisse ciò che era stato detto per mezzo del profeta:" },
      { n: 5, t: "Dite alla figlia di Sion: Ecco, a te viene il tuo re, mite, seduto su un'asina e su un puledro, figlio di una bestia da soma." },
      { n: 6, t: "I discepoli andarono e fecero quello che aveva ordinato loro Gesù:" },
      { n: 7, t: "condussero l'asina e il puledro, vi misero sopra i mantelli ed egli vi si pose a sedere." },
      { n: 8, t: "La folla, numerosissima, stese i propri mantelli sulla strada, mentre altri tagliavano rami dagli alberi e li stendevano sulla strada." },
      { n: 9, t: "Le folle che lo precedevano e quelle che seguivano, gridavano: «Osanna al figlio di Davide! Benedetto colui che viene nel nome del Signore! Osanna nel più alto dei cieli!»." },
      { n: 10, t: "Mentre egli entrava in Gerusalemme, tutta la città fu presa da agitazione e diceva: «Chi è costui?»." },
      { n: 11, t: "E le folle rispondevano: «Questi è il profeta Gesù, da Nazaret di Galilea»." }
    ]
  },
  {
    book: "Mt",
    name: "Matteo",
    chapter: 22,
    verses: "34-40",
    title: "Il più grande comandamento della Legge",
    text: [
      { n: 34, t: "Allora i farisei, avendo udito che egli aveva chiuso la bocca ai sadducei, si riunirono insieme" },
      { n: 35, t: "e uno di loro, un dottore della Legge, lo interrogò per metterlo alla prova:" },
      { n: 36, t: "«Maestro, nella Legge, qual è il grande comandamento?»." },
      { n: 37, t: "Gli rispose: «Amerai il Signore tuo Dio con tutto il tuo cuore, con tutta la tua anima e con tutta la tua mente." },
      { n: 38, t: "Questo è il grande e primo comandamento." },
      { n: 39, t: "Il secondo poi è simile a quello: Amerai il tuo prossimo come te stesso." },
      { n: 40, t: "Da questi due comandamenti dipendono tutta la Legge e i Profeti»." }
    ]
  },
  {
    book: "Mt",
    name: "Matteo",
    chapter: 23,
    verses: "8-12",
    title: "L'umiltà e il rifiuto dei titoli d'onore",
    text: [
      { n: 8, t: "«Ma voi non fatevi chiamare \"rabbì\", perché uno solo è il vostro Maestro e voi siete tutti fratelli." },
      { n: 9, t: "E non chiamate \"padre\" nessuno di voi sulla terra, perché uno solo è il Padre vostro, quello celeste." },
      { n: 10, t: "E non fatevi chiamare \"guide\", perché una sola è la vostra Guida, il Cristo." },
      { n: 11, t: "Chi tra voi è più grande, sarà vostro servitore;" },
      { n: 12, t: "chi invece si esalterà sarà umiliato, e chi si umilierà sarà esaltato»." }
    ]
  },
  {
    book: "Mt",
    name: "Matteo",
    chapter: 24,
    verses: "36-44",
    title: "Nessuno conosce l'ora e l'esortazione alla vigilanza",
    text: [
      { n: 36, t: "«Quanto a quel giorno e a quell'ora, nessuno lo sa, né gli angeli dei cieli né il Figlio, ma solo il Padre." },
      { n: 37, t: "Come furono i giorni di Noè, così sarà la venuta del Figlio dell'uomo." },
      { n: 38, t: "Infatti, come nei giorni che precedettero il diluvio mangiavano e bevevano, prendevano moglie e prendevano marito, fino al giorno in cui Noè entrò nell'arca," },
      { n: 39, t: "e non si accorsero di nulla finché venne il diluvio e travolse tutti: così sarà anche la venuta del Figlio dell'uomo." },
      { n: 40, t: "Allora due uomini saranno nel campo: uno verrà portato via e l'altro lasciato." },
      { n: 41, t: "Due donne macineranno alla mola: una verrà portata via e l'altra lasciata." },
      { n: 42, t: "Vegliate dunque, perché non sapete in quale giorno il Signore vostro verrà." },
      { n: 43, t: "Cercate di capire questo: se il padrone di casa sapesse in quale ora della notte viene il ladro, veglierebbe e non si lascerebbe scassinare la casa." },
      { n: 44, t: "Perciò anche voi tenetevi pronti perché, nell'ora che non immaginate, viene il Figlio dell'uomo»." }
    ]
  },
  {
    book: "Mt",
    name: "Matteo",
    chapter: 25,
    verses: "1-13",
    title: "La parabola delle dieci vergini",
    text: [
      { n: 1, t: "«Allora il regno dei cieli sarà simile a dieci vergini che presero le loro lampade e uscirono incontro allo sposo." },
      { n: 2, t: "Cinque di esse erano stolte e cinque sagge;" },
      { n: 3, t: "le stolte presero le loro lampade, ma non presero con sé l'olio;" },
      { n: 4, t: "le sagge invece, insieme alle loro lampade, presero anche l'olio in piccoli vasi." },
      { n: 5, t: "Poiché lo sposo tardava, si assopirono tutte e si addormentarono." },
      { n: 6, t: "A mezzanotte si alzò un grido: \"Ecco lo sposo! Uscitegli incontro!\"." },
      { n: 7, t: "Allora tutte quelle vergini si destarono e prepararono le loro lampade." },
      { n: 8, t: "Le stolte dissero alle sagge: \"Dateci del vostro olio, perché le nostre lampade si spengono\"." },
      { n: 9, t: "Le sagge risposero: \"No, perché non venga a mancare a noi e a voi; andate piuttosto dai venditori e compratevene\"." },
      { n: 10, t: "Ora, mentre quelle andavano a comprare l'olio, arrivò lo sposo e le vergini che erano pronte entrarono con lui alle nozze, e la porta fu chiusa." },
      { n: 11, t: "Più tardi arrivarono anche le altre vergini e incominciarono a dire: \"Signore, signore, aprici!\"." },
      { n: 12, t: "Ma egli rispose: \"In verità io vi dico: non vi conosco\"." },
      { n: 13, t: "Vegliate dunque, perché non sapete né il giorno né l'ora»." }
    ]
  },
  {
    book: "Mt",
    name: "Matteo",
    chapter: 26,
    verses: "26-30",
    title: "L'istituzione dell'Eucaristia nell'Ultima Cena",
    text: [
      { n: 26, t: "Ora, mentre mangiavano, Gesù prese il pane, recitò la benedizione, lo spezzò e, mentre lo dava ai discepoli, disse: «Prendete, mangiate: questo è il mio corpo»." },
      { n: 27, t: "Poi prese il calice, rese grazie e lo diede loro, dicendo: «Bevetene tutti," },
      { n: 28, t: "perché questo è il mio sangue dell'alleanza, che è versato per molti per il perdono dei peccati." },
      { n: 29, t: "Io vi dico che d'ora in poi non berrò più di questo frutto della vite fino al giorno in cui lo berrò nuovo con voi, nel regno del Padre mio»." },
      { n: 30, t: "Dopo aver cantato l'inno, uscirono verso il monte degli Ulivi." }
    ]
  },
  {
    book: "Mt",
    name: "Matteo",
    chapter: 27,
    verses: "45-54",
    title: "La morte di Gesù sulla croce",
    text: [
      { n: 45, t: "A partire da mezzogiorno, si fece buio su tutta la terra fino alle tre del pomeriggio." },
      { n: 46, t: "Verso le tre, Gesù gridò a gran voce: «Elì, Elì, lemà sabactàni?», cioè: «Dio mio, Dio mio, perché mi hai abbandonato?»." },
      { n: 47, t: "Udito questo, alcuni dei presenti dicevano: «Costui chiama Elia»." },
      { n: 48, t: "E subito uno di loro corse a prendere una spugna, la inzuppò di aceto, la fissò su una canna e gli dava da bere." },
      { n: 49, t: "Gli altri dicevano: «Lascia! Vediamo se viene Elia a salvarlo!»." },
      { n: 50, t: "Ma Gesù di nuovo gridò a gran voce ed emise lo spirito." },
      { n: 51, t: "Ed ecco, il velo del tempio si squarciò in due, da cima a fondo, la terra tremò, le rocce si spezzarono," },
      { n: 52, t: "i sepolcri si aprirono e molti corpi di santi, che erano morti, risuscitarono." },
      { n: 53, t: "Usciti dai sepolcri, dopo la sua risurrezione, entrarono nella città santa e apparvero a molti." },
      { n: 54, t: "Il centurione, e quelli che con lui facevano la guardia a Gesù, visto il terremoto e quello che succedeva, ebbero grande timore e dicevano: «Davvero costui era Figlio di Dio!»." }
    ]
  },
  {
    book: "Mt",
    name: "Matteo",
    chapter: 28,
    verses: "16-20",
    title: "Il mandato missionario universale",
    text: [
      { n: 16, t: "Gli undici discepoli, intanto, andarono in Galilea, sul monte che Gesù aveva loro indicato." },
      { n: 17, t: "Quando lo videro, si prostrarono. Essi però dubitarono." },
      { n: 18, t: "Gesù si avvicinò e disse loro: «A me è stato dato ogni potere in cielo e sulla terra." },
      { n: 19, t: "Andate dunque e fate discepoli tutti i popoli, battezzandoli nel nome del Padre e del Figlio e dello Spirito Santo," },
      { n: 20, t: "insegnando loro a osservare tutto ciò che vi ho comandato. Ed ecco, io sono con voi tutti i giorni, fino alla fine del mondo»." }
    ]
  },
[
  // --- VANGELO SECONDO LUCA (Capitoli 1-24) ---
  {
    book: "Lc",
    name: "Luca",
    chapter: 1,
    verses: "26-38",
    title: "L'annunciazione a Maria",
    text: [
      { n: 26, t: "Al sesto mese, l'angelo Gabriele fu mandato da Dio in una città della Galilea, chiamata Nazaret," },
      { n: 27, t: "a una vergine, promessa sposa di un uomo della casa di Davide, di nome Giuseppe. La vergine si chiamava Maria." },
      { n: 28, t: "Entrando da lei, disse: «Rallegrati, piena di grazia: il Signore è con te»." },
      { n: 29, t: "A queste parole ella fu molto turbata e si domandava che senso avesse un saluto come questo." },
      { n: 30, t: "L'angelo le disse: «Non temere, Maria, perché hai trovato grazia presso Dio." },
      { n: 31, t: "Ed ecco, concepirai un figlio, lo darai alla luce e lo chiamerai Gesù." },
      { n: 32, t: "Egli sarà grande e verrà chiamato Figlio dell'Altissimo; il Signore Dio gli darà il trono di Davide suo padre" },
      { n: 33, t: "e regnerà per sempre sulla casa di Giacobbe e il suo regno non avrà fine»." },
      { n: 34, t: "Allora Maria disse all'angelo: «Come avverrà questo, poiché non conosco uomo?»." },
      { n: 35, t: "Le rispose l'angelo: «Lo Spirito Santo scenderà su di te e la potenza dell'Altissimo ti coprirà con la sua ombra. Per questo colui che nascerà sarà santo e sarà chiamato Figlio di Dio." },
      { n: 36, t: "Ed ecco, Elisabetta, tua parente, nella sua vecchiaia ha concepito anch'ella un figlio e questo è il sesto mese per lei, che era detta sterile:" },
      { n: 37, t: "nulla è impossibile a Dio»." },
      { n: 38, t: "Allora Maria disse: «Ecco la serva del Signore: avvenga per me secondo la tua parola». E l'angelo si allontanò da lei." }
    ]
  },
  {
    book: "Lc",
    name: "Luca",
    chapter: 2,
    verses: "8-14",
    title: "L'apparizione agli angeli e ai pastori",
    text: [
      { n: 8, t: "C'erano in quella regione alcuni pastori che, pernottando all'aperto, facevano la guardia al loro gregge durante la notte." },
      { n: 9, t: "Un angelo del Signore si presentò a loro e la gloria del Signore li avvolse di luce. Essi furono presi da grande timore," },
      { n: 10, t: "ma l'angelo disse loro: «Non temete: ecco, vi annuncio una grande gioia, che sarà di tutto il popolo:" },
      { n: 11, t: "oggi, nella città di Davide, è nato per voi un Salvatore, che è Cristo Signore." },
      { n: 12, t: "Questo per voi il segno: troverete un bambino avvolto in fasce, adagiato in una mangiatoia»." },
      { n: 13, t: "E subito apparve con l'angelo una moltitudine dell'esercito celeste, che lodava Dio e diceva:" },
      { n: 14, t: "«Gloria a Dio nel più alto dei cieli e sulla terra pace agli uomini, che egli ama»." }
    ]
  },
  {
    book: "Lc",
    name: "Luca",
    chapter: 3,
    verses: "10-16",
    title: "La predicazione di Giovanni il Battista",
    text: [
      { n: 10, t: "Le folle lo interrogavano: «Che cosa dobbiamo fare?»." },
      { n: 11, t: "Rispondeva loro: «Chi ha due tuniche, ne dia a chi non ne ha, e chi ha da mangiare, faccia altrettanto»." },
      { n: 12, t: "Vennero anche dei pubblicani a farsi battezzare e gli chiesero: «Maestro, che cosa dobbiamo fare?»." },
      { n: 13, t: "Ed egli disse loro: «Non esigete nulla di più di quanto vi è stato fissato»." },
      { n: 14, t: "Lo interrogavano anche alcuni soldati: «E noi, che cosa dobbiamo fare?». Rispose loro: «Non maltrattate e non estorcete niente a nessuno; accontentatevi delle vostre paghe»." },
      { n: 15, t: "Poiché il popolo era in attesa e tutti, riguardo a Giovanni, si domandavano in cuor loro se non fosse lui il Cristo," },
      { n: 16, t: "Giovanni rispose a tutti dicendo: «Io vi battezzo con acqua; ma viene colui che è più forte di me, a cui non sono degno di slegare i lacci dei sandali. Egli vi battezzerà in Spirito Santo e fuoco»." }
    ]
  },
  {
    book: "Lc",
    name: "Luca",
    chapter: 4,
    verses: "16-22",
    title: "Gesù nella sinagoga di Nazaret",
    text: [
      { n: 16, t: "Venne a Nazaret, dove era cresciuto, e secondo il suo solito, di sabato, entrò nella sinagoga e si alzò a leggere." },
      { n: 17, t: "Gli fu dato il libro del profeta Isaia; aprì il libro e trovò il passo dove era scritto:" },
      { n: 18, t: "Lo Spirito del Signore è sopra di me; per questo mi ha consacrato con l'unzione e mi ha mandato a portare ai poveri il lieto annuncio, a proclamare ai prigionieri la liberazione e ai ciechi la vista; a rimettere in libertà gli oppressi," },
      { n: 19, t: "a proclamare l'anno di grazia del Signore." },
      { n: 20, t: "Riavvolse il libro, lo riconsegnò all'inserviente e sedette. Nella sinagoga, gli occhi di tutti erano fissi su di lui." },
      { n: 21, t: "Allora cominciò a dire loro: «Oggi si è compiuta questa Scrittura che voi avete ascoltato»." },
      { n: 22, t: "Tutti gli davano testimonianza ed erano meravigliati delle parole di grazia che uscivano dalla sua bocca." }
    ]
  },
  {
    book: "Lc",
    name: "Luca",
    chapter: 5,
    verses: "1-11",
    title: "La pesca miracolosa e la chiamata dei primi discepoli",
    text: [
      { n: 1, t: "Mentre la folla gli si accalcava attorno per ascoltare la parola di Dio, Gesù, stante presso il lago di Genèsaret," },
      { n: 2, t: "vide due barche ormeggiate alla sponda. I pescatori erano scesi e lavavano le reti." },
      { n: 3, t: "Salì su una barca, che era di Simone, e lo pregò di scostarsi un poco da terra. Sedette e insegnava alle folle dalla barca." },
      { n: 4, t: "Quando ebbe finito di parlare, disse a Simone: «Prendi il largo e gettate le vostre reti per la pesca»." },
      { n: 5, t: "Simone rispose: «Maestro, abbiamo faticato tutta la notte e non abbiamo preso nulla; ma sulla tua parola getterò le reti»." },
      { n: 6, t: "Fecero così e presero una quantità enorme di pesci e le loro reti quasi si rompevano." },
      { n: 7, t: "Allora fecero cenni ai compagni dell'altra barca, perché venissero ad aiutarli. Essi vennero e riempirono tutte e due le barche fino a farle quasi affondare." },
      { n: 8, t: "Al vedere questo, Simon Pietro si gettò alle ginocchia di Gesù, dicendo: «Signore, allontanati da me, perché sono un peccatore»." },
      { n: 9, t: "Lo stupore infatti aveva invaso lui e tutti quelli che erano con lui, per la pesca che avevano fatto;" },
      { n: 10, t: "così pure Giacomo e Giovanni, figli di Zebedeo, che erano soci di Simone. Gesù disse a Simone: «Non temere; d'ora in poi sarai pescatore di uomini»." },
      { n: 11, t: "E, tirate le barche a terra, lasciarono tutto e lo seguirono." }
    ]
  },
  {
    book: "Lc",
    name: "Luca",
    chapter: 6,
    verses: "27-35",
    title: "L'amore per i nemici",
    text: [
      { n: 27, t: "«Ma a voi che ascoltate, io dico: amate i vostri nemici, fate del bene a quelli che vi odiano," },
      { n: 28, t: "benedite coloro che vi maledicono, pregate per coloro che vi maltrattano." },
      { n: 29, t: "A chi ti percuote sulla guancia, offri anche l'altra; a chi ti strappa il mantello, non rifiutare neanche la tunica." },
      { n: 30, t: "Dà a chiunque ti chiede, e a chi prende del tuo, non richiederlo." },
      { n: 31, t: "E come volete che gli uomini facciano a voi, così fate a loro." },
      { n: 32, t: "Se amate quelli che vi amano, quale gratitudine vi è dovuta? Anche i peccatori amano quelli che li amano." },
      { n: 33, t: "E se fate del bene a coloro che vi fanno del bene, quale gratitudine vi è dovuta? Anche i peccatori fanno lo stesso." },
      { n: 34, t: "E se prestate a coloro da cui sperate di ricevere, quale gratitudine vi è dovuta? Anche i peccatori prestano ai peccatori per riceverne altrettanto." },
      { n: 35, t: "Amate invece i vostri nemici, fate del bene e prestate senza sperarne nulla, e il vostro premio sarà grande e sarete figli dell'Altissimo, perché egli è benevolo verso gli ingrati e i malvagi»." }
    ]
  },
  {
    book: "Lc",
    name: "Luca",
    chapter: 7,
    verses: "11-16",
    title: "La risurrezione del figlio della vedova di Nain",
    text: [
      { n: 11, t: "In seguito Gesù si recò in una città chiamata Nain, e con lui camminavano i suoi discepoli e una grande folla." },
      { n: 12, t: "Quando fu vicino alla porta della città, ecco, veniva portato alla sepoltura un morto, unico figlio di una madre rimasta vedova; e molta gente della città era con lei." },
      { n: 13, t: "Vedendola, il Signore fu preso da grande compassione per lei e le disse: «Non piangere!»." },
      { n: 14, t: "Si avvicinò e toccò la bara, mentre i portatori si fermarono. Poi disse: «Ragazzo, dico a te, àlzati!»." },
      { n: 15, t: "Il morto si sedette e cominciò a parlare. Ed egli lo restituì a sua madre." },
      { n: 16, t: "Tutti furono presi da timore e glorificavano Dio, dicendo: «Un grande profeta è sorto tra noi», e: «Dio ha visitato il suo popolo»." }
    ]
  },
  {
    book: "Lc",
    name: "Luca",
    chapter: 8,
    verses: "22-25",
    title: "Gesù placa la tempesta sul lago",
    text: [
      { n: 22, t: "Un giorno salì su una barca con i suoi discepoli e disse loro: «Passiamo all'altra riva del lago». E presero il largo." },
      { n: 23, t: "Mentre navigavano, egli si addormentò. Una bufera di vento si abbatté sul lago, la barca si riempiva d'acqua ed essi erano in pericolo." },
      { n: 24, t: "Si avvicinarono a lui e lo svegliarono dicendo: «Maestro, Maestro, siamo perduti!». Ed egli, destatosi, minacciò il vento e le acque in tempesta; essi cessarono e si fece bonaccia." },
      { n: 25, t: "Allora disse loro: «Dov'è la vostra fede?». Essi, intimoriti e meravigliati, si dicevano l'un l'altro: «Chi è mai costui, che comanda anche ai venti e all'acqua e gli obbediscono?»." }
    ]
  },
  {
    book: "Lc",
    name: "Luca",
    chapter: 9,
    verses: "28-35",
    title: "La Trasfigurazione sul monte",
    text: [
      { n: 28, t: "Circa otto giorni dopo questi discorsi, Gesù prese con sé Pietro, Giovanni e Giacomo e salì sul monte a pregare." },
      { n: 29, t: "Mentre pregava, il suo volto cambiò d'aspetto e la sua veste divenne candida e sfolgorante." },
      { n: 30, t: "Ed ecco, due uomini conversavano con lui: erano Mosè ed Elia," },
      { n: 31, t: "apparsi nella gloria, e parlavano del suo esodo, che stava per compiersi a Gerusalemme." },
      { n: 32, t: "Pietro e i suoi compagni erano oppressi dal sonno; ma, quando si svegliarono, videro la sua gloria e i due uomini che stavano con lui." },
      { n: 33, t: "Mentre questi si separavano da lui, Pietro disse a Gesù: «Maestro, è bello per noi essere qui. Facciamo tre capanne, una per te, una per Mosè e una per Elia». Egli non sapeva quello che diceva." },
      { n: 34, t: "Mentre parlava così, venne una nube e li coprì con la sua ombra. All'entrare nella nube, ebbero paura." },
      { n: 35, t: "E dalla nube uscì una voce, che diceva: «Questi è il Figlio mio, l'eletto; ascoltatelo!»." }
    ]
  },
  {
    book: "Lc",
    name: "Luca",
    chapter: 10,
    verses: "25-37",
    title: "La parabola del buon Samaritano",
    text: [
      { n: 25, t: "Ed ecco, un dottore della Legge si alzò per metterlo alla prova e chiese: «Maestro, che cosa devo fare per ereditare la vita eterna?»." },
      { n: 26, t: "Gesù gli disse: «Che cosa sta scritto nella Legge? Come leggi?»." },
      { n: 27, t: "Costui rispose: «Amerai il Signore tuo Dio con tutto il tuo cuore, con tutta la tua anima, con tutta la tua forza e con tutta la tua mente, e il tuo prossimo come te stesso»." },
      { n: 28, t: "Gli disse: «Hai risposto bene; fa' questo e vivrai»." },
      { n: 29, t: "Ma quello, volendo giustificarsi, disse a Gesù: «E chi è mio prossimo?»." },
      { n: 30, t: "Gesù riprese: «Un uomo scendeva da Gerusalemme a Gerico e cadde nelle mani dei briganti, che gli portarono via tutto, lo percossero a sangue e se ne andarono, lasciandolo mezzo morto." },
      { n: 31, t: "Per caso, un sacerdote scendeva per quella stessa strada e, quando lo vide, passò oltre." },
      { n: 32, t: "Anche un levita, giunto in quel luogo, vide e passò oltre." },
      { n: 33, t: "Invece un Samaritano, che era in viaggio, passandogli accanto, vide e ne ebbe compassione." },
      { n: 34, t: "Gli si fece vicino, gli fasciò le ferite, versandovi olio e vino; poi lo caricò sulla sua cavalcatura, lo condusse in un albergo e si prese cura di lui." },
      { n: 35, t: "Il giorno seguente, tirò fuori due denari e li diede all'albergatore, dicendo: \"Abbi cura di lui; ciò che spenderai in più, te lo pagherò al mio ritorno\"." },
      { n: 36, t: "Chi di questi tre ti sembra sia stato prossimo di colui che è caduto nelle mani dei briganti?»." },
      { n: 37, t: "Quello rispose: «Chi ha avuto compassione di lui». Gesù gli disse: «Va' e anche tu fa' lo stesso»." }
    ]
  },
  {
    book: "Lc",
    name: "Luca",
    chapter: 11,
    verses: "1-4",
    title: "L'insegnamento della preghiera del Padre nostro",
    text: [
      { n: 1, t: "Gesù si trovava in un luogo a pregare; quando ebbe finito, uno dei suoi discepoli gli disse: «Signore, insegnaci a pregare, come anche Giovanni ha insegnato ai suoi discepoli»." },
      { n: 2, t: "Ed egli disse loro: «Quando pregate, dite: Padre, sia santificato il tuo nome, venga il tuo regno;" },
      { n: 3, t: "dacci ogni giorno il nostro pane quotidiano," },
      { n: 4, t: "e perdona a noi i nostri peccati, anche noi infatti perdoniamo a ogni nostro debitore, e non abbandonarci alla tentazione»." }
    ]
  },
  {
    book: "Lc",
    name: "Luca",
    chapter: 12,
    verses: "22-31",
    title: "L'abbandono alla Provvidenza del Padre",
    text: [
      { n: 22, t: "Poi disse ai suoi discepoli: «Per questo io vi dico: non affannatevi per la vita, di quello che mangerete, né per il corpo, di quello che indosserete." },
      { n: 23, t: "La vita vale più del cibo e il corpo più del vestito." },
      { n: 24, t: "Guardate i corvi: non seminano e non mietono, non hanno dispensa né granaio, eppure Dio li nutre. Ebbene, voi valete molto più degli uccelli!" },
      { n: 25, t: "Chi di voi, per quanto si affanni, può aggiungere un'ora sola alla sua vita?" },
      { n: 26, t: "Se dunque non potete fare neppure una piccola cosa, perché vi affannate per il resto?" },
      { n: 27, t: "Guardate come crescono i gigli: non filano, non tessono; eppure io vi dico che neanche Salomone, con tutta la sua gloria, vestiva come uno di loro." },
      { n: 28, t: "Se dunque Dio veste così l'erba nel campo, che oggi c'è e domani si getta nel forno, quanto più farà per voi, gente di poca fede!" },
      { n: 29, t: "E voi, non state a cercare che cosa mangerete e che cosa berrete, e non state in ansia:" },
      { n: 30, t: "di tutte queste cose vanno in cerca i pagani di questo mondo; ma il Padre vostro sa che ne avete bisogno." },
      { n: 31, t: "Cercate piuttosto il suo regno, e queste cose vi saranno date in aggiunta»." }
    ]
  },
  {
    book: "Lc",
    name: "Luca",
    chapter: 13,
    verses: "10-17",
    title: "Guarigione di sabato della donna curva",
    text: [
      { n: 10, t: "Stava insegnando in una sinagoga in giorno di sabato." },
      { n: 11, t: "C'era là una donna che uno spirito teneva inferma da diciotto anni; era curva e non riusciva in alcun modo a stare diritta." },
      { n: 12, t: "Gesù la vide, la chiamò a sé e le disse: «Donna, sei libera dalla tua infermità»." },
      { n: 13, t: "Impose le mani su di lei e subito quella si riadrizzò e glorificava Dio." },
      { n: 14, t: "Ma il capo della sinagoga, sdegnato perché Gesù aveva operato quella guarigione di sabato, prese la parola e disse alla folla: «Ci sono sei giorni in cui si deve lavorare; in quelli dunque venite a farvi guarire e non in giorno di sabato»." },
      { n: 15, t: "Il Signore gli rispose: «Ipocriti! Ciascuno di voi, di sabato, non scioglie dall'mangiatoia il suo bue o l'asino, per condurlo a bere?" },
      { n: 16, t: "E questa figlia di Abramo, che Satana teneva legata da ben diciotto anni, non doveva essere liberata da questo legame in giorno di sabato?»." },
      { n: 17, t: "Mentre egli diceva queste cose, tutti i suoi awersari si vergognavano, mentre tutta la folla gioiva per tutte le meraviglie da lui compiute." }
    ]
  },
  {
    book: "Lc",
    name: "Luca",
    chapter: 14,
    verses: "11-14",
    title: "L'umiltà e l'invito ai poveri",
    text: [
      { n: 11, t: "«Perché chiunque si esalta sarà umiliato, e chi si umilia sarà esaltato»." },
      { n: 12, t: "Disse poi a colui che l'aveva invitato: «Quando offri un pranzo o una cena, non invitare i tuoi amici né i tuoi fratelli né i tuoi parenti né i ricchi vicini, perché a loro volta non ti invitino anch'essi e tu abbia il contraccambio." },
      { n: 13, t: "Al contrario, quando offri un banchetto, invita poveri, storpi, zoppi, ciechi;" },
      { n: 14, t: "e sarai beato perché non hanno da ricambiarti. Riceverai infatti la tua ricompensa alla risurrezione dei giusti»." }
    ]
  },
  {
    book: "Lc",
    name: "Luca",
    chapter: 15,
    verses: "11-24",
    title: "La parabola del padre misericordioso",
    text: [
      { n: 11, t: "Disse ancora: «Un uomo aveva due figli." },
      { n: 12, t: "Il più giovane dei due disse al padre: \"Padre, dammi la parte di patrimonio che mi spetta\". Ed egli divise tra loro le sostanze." },
      { n: 13, t: "Dopo pochi giorni, il figlio più giovane, raccolte tutte le sue cose, partì per un paese lontano e là sperperò il suo patrimonio vivendo in modo dissoluto." },
      { n: 14, t: "Quando ebbe speso tutto, sopraggiunse in quel paese una grande carestia ed egli cominciò a trovarsi nel bisogno." },
      { n: 15, t: "Allora andò a mettersi al servizio di uno dei cittadini di quel paese, che lo mandò nei suoi campi a pascolare i porci." },
      { n: 16, t: "Avrebbe voluto saziarsi con le carrube di cui si nutrivano i porci; ma nessuno gli dava nulla." },
      { n: 17, t: "Allora rientrò in se stesso e disse: \"Quanti salariati di mio padre hanno pane in abbondanza e io qui muoio di fame!" },
      { n: 18, t: "Mi alzerò, andrò da mio padre e gli dirò: Padre, ho peccato verso il Cielo e davanti a te;" },
      { n: 19, t: "non sono più degno di essere chiamato tuo figlio. Trattami come uno dei tuoi salariati\"." },
      { n: 20, t: "Si alzò e tornò da suo padre. Quando era ancora lontano, suo padre lo vide, ebbe compassione, gli corse incontro, gli si gettò al collo e lo baciò." },
      { n: 21, t: "Il figlio gli disse: \"Padre, ho peccato verso il Cielo e davanti a te; non sono più degno di essere chiamato tuo figlio\"." },
      { n: 22, t: "Ma il padre disse ai servi: \"Presto, portate qui il vestito più bello e fateglielo indossare, mettetegli l'anello al dito e i sandali ai piedi." },
      { n: 23, t: "Prendete il vitello grasso, ammazzatelo, mangiamo e facciamo festa," },
      { n: 24, t: "perché questo mio figlio era morto ed è tornato in vita, era perduto ed è stato ritrovato\". E cominciarono a far festa." }
    ]
  },
  {
    book: "Lc",
    name: "Luca",
    chapter: 16,
    verses: "19-25",
    title: "La parabola del ricco epulone e del povero Lazzaro",
    text: [
      { n: 19, t: "C'era un uomo ricco, che indossava vestiti di porpora e di lino finissimo, e ogni giorno si dava a lauti banchetti." },
      { n: 20, t: "Un povero, di nome Lazzaro, stava alla sua porta, coperto di piaghe," },
      { n: 21, t: "bramoso di saziarsi con quello che cadeva dalla tavola del ricco; ma erano i cani che venivano a leccare le sue piaghe." },
      { n: 22, t: "Un giorno il povero morì e fu portato dagli angeli accanto ad Abramo. Morì anche il ricco e fu sepolto." },
      { n: 23, t: "Stando negli inferi fra i tormenti, alzò gli occhi e vide da lontano Abramo, e Lazzaro accanto a lui." },
      { n: 24, t: "Allora gridando disse: \"Padre Abramo, abbi pietà di me e manda Lazzaro a intingere nell'acqua la punta del dito e a bagnarmi la lingua, perché soffro terribilmente in questa fiamma\"." },
      { n: 25, t: "Ma Abramo rispose: \"Figlio, ricordati che, nella vita, tu hai ricevuto i tuoi beni, e Lazzaro i suoi mali; ma ora qui egli è consolato, tu invece sei in mezzo ai tormenti\"." }
    ]
  },
  {
    book: "Lc",
    name: "Luca",
    chapter: 17,
    verses: "11-19",
    title: "La guarigione dei dieci lebbrosi e la gratitudine",
    text: [
      { n: 11, t: "Lungo il cammino verso Gerusalemme, Gesù attraversava la Samaria e la Galilea." },
      { n: 12, t: "Entrando in un villaggio, gli vennero incontro dieci lebbrosi, che si fermarono a distanza" },
      { n: 13, t: "e dissero ad alta voce: «Gesù, maestro, abbi pietà di noi!»." },
      { n: 14, t: "Appena li vide, Gesù disse loro: «Andate a presentarvi ai sacerdoti». E mentre essi andavano, furono purificati." },
      { n: 15, t: "Uno di loro, vedendosi guarito, tornò indietro lodando Dio a gran voce," },
      { n: 16, t: "e si prostrò davanti a Gesù, con la faccia a terra, per ringraziarlo. Era un Samaritano." },
      { n: 17, t: "Allora Gesù osservò: «Non ne sono stati purificati dieci? E gli altri nove dove sono?" },
      { n: 18, t: "Non si è trovato nessuno che tornasse indietro a rendere gloria a Dio, all'fuori di questo straniero?»." },
      { n: 19, t: "E gli disse: «Àlzati e va'; la tua fede ti ha salvato!»." }
    ]
  },
  {
    book: "Lc",
    name: "Luca",
    chapter: 18,
    verses: "9-14",
    title: "La parabola del fariseo e del pubblicano",
    text: [
      { n: 9, t: "Disse ancora questa parabola per alcuni che avevano l'intima presunzione di essere giusti e disprezzavano gli altri:" },
      { n: 10, t: "«Due uomini salirono al tempio a pregare: uno era fariseo e l'altro pubblicano." },
      { n: 11, t: "Il fariseo, stando in piedi, pregava così tra sé: \"O Dio, ti ringrazio perché non sono come gli altri uomini, ladri, ingiusti, adultèri, e neppure come questo pubblicano." },
      { n: 12, t: "Digiuno due volte alla settimana e pago le decime di tutto quello che possiedo\"." },
      { n: 13, t: "Il pubblicano invece, fermatosi a distanza, non osava nemmeno alzare gli occhi al cielo: ma si batteva il petto dicendo: \"O Dio, abbi pietà di me peccatore\"." },
      { n: 14, t: "Io vi dico: questi, a differenza dell'altro, tornò a casa sua giustificato, perché chiunque si esalta sarà umiliato, chi invece si umilia sarà esaltato»." }
    ]
  },
  {
    book: "Lc",
    name: "Luca",
    chapter: 19,
    verses: "1-10",
    title: "L'incontro con Zaccheo a Gerico",
    text: [
      { n: 1, t: "Entrato in Gerico, attraversava la città." },
      { n: 2, t: "Ed ecco, vi era un uomo di nome Zaccheo, capo dei pubblicani e ricco." },
      { n: 3, t: "Egli cercava di vedere chi era Gesù, ma non vi riusciva a causa della folla, perché era piccolo di statura." },
      { n: 4, t: "Allora corse avanti e, per riuscire a vederlo, salì su un sicomoro, perché doveva passare di là." },
      { n: 5, t: "Quando giunse sul luogo, Gesù alzò lo sguardo e gli disse: «Zaccheo, scendi subito, perché oggi devo fermarmi a casa tua»." },
      { n: 6, t: "Scese in fretta e lo accolse pieno di gioia." },
      { n: 7, t: "Vedendo ciò, tutti mormoravano: «È entrato in casa di un peccatore!»." },
      { n: 8, t: "Ma Zaccheo, alzatosi, disse al Signore: «Ecco, Signore, io do la metà dei miei beni ai poveri e, se ho rubato qualcosa a qualcuno, gli restituisco quattro volte tanto»." },
      { n: 9, t: "Gesù gli rispose: «Oggi per questa casa è venuta la salvezza, perché anch'egli è figlio di Abramo." },
      { n: 10, t: "Il Figlio dell'uomo infatti è venuto a cercare e a salvare ciò che era perduto»." }
    ]
  },
  {
    book: "Lc",
    name: "Luca",
    chapter: 20,
    verses: "20-26",
    title: "Il tributo a Cesare",
    text: [
      { n: 20, t: "Mettetosi in osservazione, mandarono spie che si fingessero uomini giusti, per coglierlo in fallo in qualche parola e poi consegnarlo all'autorità e al potere del governatore." },
      { n: 21, t: "Costoro lo interrogarono: «Maestro, sappiamo che parli e insegni con rettitudine e non guardi in faccia a nessuno, ma insegni la via di Dio secondo verità." },
      { n: 22, t: "È lecito o no che noi paghiamo il tributo a Cesare?»." },
      { n: 23, t: "Ma egli, conoscendo la loro astuzia, disse:" },
      { n: 24, t: "«Mostratemi un denaro: di chi porta l'immagine e l'iscrizione?». Risposero: «Di Cesare»." },
      { n: 25, t: "Ed egli disse loro: «Rendete dunque a Cesare quello che è di Cesare e a Dio quello che è di Dio»." },
      { n: 26, t: "Così non poterono coglierlo in fallo davanti al popolo e, meravigliati della sua risposta, tacquero." }
    ]
  },
  {
    book: "Lc",
    name: "Luca",
    chapter: 21,
    verses: "1-4",
    title: "L'offerta della vedova al tempio",
    text: [
      { n: 1, t: "Alzando gli occhi, vide i ricchi che gettavano le loro offerte nel tesoro del tempio." },
      { n: 2, t: "Vide anche una vedova povera, che vi gettava due spiccioli," },
      { n: 3, t: "e disse: «In verità vi dico: questa vedova, così povera, ha gettato più di tutti." },
      { n: 4, t: "Tutti costoro infatti hanno gettato come offerta parte del loro superfluo; ella invece, nella sua miseria, ha gettato tutto quello che aveva per vivere»." }
    ]
  },
  {
    book: "Lc",
    name: "Luca",
    chapter: 22,
    verses: "19-23",
    title: "L'istituzione dell'Eucaristia nell'Ultima Cena",
    text: [
      { n: 19, t: "Poi prese il pane, rese grazie, lo spezzò e lo diede loro dicendo: «Questo è il mio corpo, che è dato per voi; fate questo in memoria di me»." },
      { n: 20, t: "E, dopo aver cenato, fece lo stesso con il calice dicendo: «Questo calice è la nuova alleanza nel mio sangue, che è versato per voi»." },
      { n: 21, t: "«Ma ecco, la mano di colui che mi tradisce è con me sulla tavola." },
      { n: 22, t: "Il Figlio dell'uomo va, secondo quanto è stabilito, ma guai a quell'uomo dal quale egli è tradito!»." },
      { n: 23, t: "Allora essi cominciarono a domandarsi l'un l'altro chi di loro starebbe per fare questo." }
    ]
  },
  {
    book: "Lc",
    name: "Luca",
    chapter: 23,
    verses: "39-43",
    title: "Gesù e il buon ladrone sulla croce",
    text: [
      { n: 39, t: "Uno dei malfattori appesi alla croce lo insultava: «Non sei tu il Cristo? Salva te stesso e noi!»." },
      { n: 40, t: "L'altro invece lo rimproverava dicendo: «Non hai alcun timore di Dio, tu che sei condannato alla stessa pena?" },
      { n: 41, t: "Noi, giustamente, perché riceviamo quello che abbiamo meritato per le nostre azioni; egli invece non ha fatto nulla di male»." },
      { n: 42, t: "E disse: «Gesù, ricordati di me quando entrerai nel tuo regno»." },
      { n: 43, t: "Gli risposi: «In verità io ti dico: oggi con me sarai nel paradiso»." }
    ]
  },
  {
    book: "Lc",
    name: "Luca",
    chapter: 24,
    verses: "28-35",
    title: "I discepoli di Emmaus nello spezzare il pane",
    text: [
      { n: 28, t: "Quando furono vicini al villaggio dove erano diretti, egli fece come se dovesse andare più lontano." },
      { n: 29, t: "Ma essi insisterono: «Resta con noi, perché si fa sera e il giorno è ormai al tramonto». Egli entrò per rimanere con loro." },
      { n: 30, t: "Quando fu a tavola con loro, prese il pane, recitò la benedizione, lo spezzò e lo diede loro." },
      { n: 31, t: "Allora si aprirono loro gli occhi e lo riconobbero. Ma egli sparì dalla loro vista." },
      { n: 32, t: "Ed essi dissero l'un l'altro: «Non ardeva forse in noi il nostro cuore mentre egli conversava con noi lungo la via, quando ci spiegava le Scritture?»." },
      { n: 33, t: "Partirono senza indugio e fecero ritorno a Gerusalemme, dove trovarono riuniti gli Undici e gli altri che erano con loro," },
      { n: 34, t: "i quali dicevano: «Davvero il Signore è risorto ed è apparso a Simone!»." },
      { n: 35, t: "Essi poi riferirono ciò che era accaduto lungo la via e come l'avevano riconosciuto nello spezzare il pane." }
    ]
  },
  [
  // --- VANGELO SECONDO GIOVANNI (Capitoli 1-21) ---
  {
    book: "Gv",
    name: "Giovanni",
    chapter: 1,
    verses: "1-14",
    title: "Il Prologo: Il Verbo si è fatto carne",
    text: [
      { n: 1, t: "In principio era il Verbo, e il Verbo era presso Dio e il Verbo era Dio." },
      { n: 2, t: "Egli era, in principio, presso Dio:" },
      { n: 3, t: "tutto è stato fatto per mezzo di lui e senza di lui nulla è stato fatto di ciò che esiste." },
      { n: 4, t: "In lui era la vita e la vita era la luce degli uomini;" },
      { n: 5, t: "la luce splende nelle tenebre e le tenebre non l'hanno vinta." },
      { n: 6, t: "Venne un uomo mandato da Dio: il suo nome era Giovanni." },
      { n: 7, t: "Egli venne come testimone per dare testimonianza alla luce, perché tutti credessero per mezzo di lui." },
      { n: 8, t: "Non era lui la luce, ma doveva dare testimonianza alla luce." },
      { n: 9, t: "Veniva nel mondo la luce vera, quella che illumina ogni uomo." },
      { n: 10, t: "Era nel mondo e il mondo è stato fatto per mezzo di lui; eppure il mondo non lo ha riconosciuto." },
      { n: 11, t: "Venne fra i suoi, e i suoi non l'hanno accolto." },
      { n: 12, t: "A quanti però l'hanno accolto ha dato potere di diventare figli di Dio: a quelli che credono nel suo nome," },
      { n: 13, t: "i quali, non da sangue né da volere di carne né da volere di uomo, ma da Dio sono stati generati." },
      { n: 14, t: "E il Verbo si fece carne e venne ad abitare in mezzo a noi; e noi abbiamo contemplato la sua gloria, gloria come del Figlio unigenito che viene dal Padre, pieno di grazia e di verità." }
    ]
  },
  {
    book: "Gv",
    name: "Giovanni",
    chapter: 2,
    verses: "1-11",
    title: "Le nozze di Cana",
    text: [
      { n: 1, t: "Il terzo giorno vi fu una festa di nozze a Cana di Galilea e c'era la madre di Gesù." },
      { n: 2, t: "Fu invitato alle nozze anche Gesù con i suoi discepoli." },
      { n: 3, t: "Venuto a mancare il vino, la madre di Gesù gli disse: «Non hanno vino»." },
      { n: 4, t: "E Gesù le rispose: «Donna, che vuoi da me? Non è ancora giunta la mia ora»." },
      { n: 5, t: "Sua madre disse ai servitori: «Qualsiasi cosa vi dica, fatela»." },
      { n: 6, t: "Vi erano là sei anfore di pietra per la purificazione rituale dei Giudei, contenenti ciascuna da ottanta a centocinquanta litri." },
      { n: 7, t: "E Gesù disse loro: «Riempite d'acqua le anfore»; e le riempirono fino all'orlo." },
      { n: 8, t: "Disse loro di nuovo: «Ora prendetene e portatene a colui che dirige il banchetto». Ed essi gliene portarono." },
      { n: 9, t: "Come ebbe assaggiato l'acqua diventata vino, colui che dirigeva il banchetto – il quale non sapeva da dove venisse, ma lo sapevano i servitori che avevano preso l'acqua – chiamò lo sposo" },
      { n: 10, t: "e gli disse: «Tutti servono prima il vino buono e, quando si è già bevuto molto, quello meno buono. Tu invece hai tenuto il vino buono fino ad ora»." },
      { n: 11, t: "Questo, a Cana di Galilea, fu l'inizio dei segni compiuti da Gesù; egli manifestò la sua gloria e i suoi discepoli credettero in lui." }
    ]
  },
  {
    book: "Gv",
    name: "Giovanni",
    chapter: 3,
    verses: "1-8",
    title: "L'incontro notturno con Nicodemo",
    text: [
      { n: 1, t: "Vi era tra i farisei un uomo di nome Nicodemo, uno dei capi dei Giudei." },
      { n: 2, t: "Egli andò da Gesù di notte e gli disse: «Rabbì, sappiamo che sei venuto da Dio come maestro; nessuno infatti può compiere questi segni che tu compi, se Dio non è con lui»." },
      { n: 3, t: "Gli rispose Gesù: «In verità, in verità io ti dico, se uno non nasce dall'alto, non può vedere il regno di Dio»." },
      { n: 4, t: "Gli disse Nicodemo: «Come può nascere un uomo quando è vecchio? Può forse entrare una seconda volta nel grembo di sua madre e nascere?»." },
      { n: 5, t: "Rispose Gesù: «In verità, in verità io ti dico, se uno non nasce da acqua e Spirito, non può entrare nel regno di Dio." },
      { n: 6, t: "Quello che è nato dalla carne è carne, e quello che è nato dallo Spirito è spirito." },
      { n: 7, t: "Non meravigliarti se ti ho detto: dovete nascere dall'alto." },
      { n: 8, t: "Il vento soffia dove vuole e ne senti la voce, ma non sai da dove viene né dove va: così è chiunque è nato dallo Spirito»." }
    ]
  },
  {
    book: "Gv",
    name: "Giovanni",
    chapter: 4,
    verses: "7-15",
    title: "La Samaritana al pozzo e l'acqua viva",
    text: [
      { n: 7, t: "Giunse una donna Samaritana ad attingere acqua. Le disse Gesù: «Dammi da bere»." },
      { n: 8, t: "I suoi discepoli erano andati in città a comprare da mangiare." },
      { n: 9, t: "La donna Samaritana gli disse: «Come mai tu, che sei Giudeo, chiedi da bere a me, che sono una donna Samaritana?». I Giudei infatti non hanno rapporti con i Samaritani." },
      { n: 10, t: "Gesù le rispose: «Se tu conoscessi il dono di Dio e chi è colui che ti dice: \"Dammi da bere!\", tu stessa gliene avresti chiesto ed egli ti avrebbe dato acqua viva»." },
      { n: 11, t: "«Signore – gli disse la donna –, non hai un secchio e il pozzo è profondo; da dove prendi dunque quest'acqua viva?" },
      { n: 12, t: "Sei tu forse più grande del nostro padre Giacobbe, che ci diede il pozzo e ne bevve lui stesso con i suoi figli e il suo bestiame?»." },
      { n: 13, t: "Gesù le rispose: «Chiunque beve di quest'acqua avrà di nuovo sete;" },
      { n: 14, t: "ma chi berrà dell'acqua che io gli darò, non avrà più sete in eterno; anzi, l'acqua che io gli darò diventerà in lui una sorgente d'acqua che zampilla per la vita eterna»." },
      { n: 15, t: "«Signore – gli disse la donna –, dammi quest'acqua, perché io non abbia più sete e non venga qui ad attingere acqua»." }
    ]
  },
  {
    book: "Gv",
    name: "Giovanni",
    chapter: 5,
    verses: "1-9",
    title: "Guarigione del paralitico alla piscina di Betzaidà",
    text: [
      { n: 1, t: "Dopo questi fatti, ricorreva una festa dei Giudei e Gesù salì a Gerusalemme." },
      { n: 2, t: "A Gerusalemme, presso la porta delle Pecore, vi è una piscina, chiamata in ebraico Betzaidà, con cinque portici," },
      { n: 3, t: "sotto i quali giaceva un grande numero di infermi, ciechi, zoppi e paralitici." },
      { n: 5, t: "Si trovava lì un uomo che da trentotto anni era malato." },
      { n: 6, t: "Gesù, vedendolo giacere e sapendo che da molto tempo era in quella condizione, gli disse: «Vuoi guarire?»." },
      { n: 7, t: "Gli rispose il malato: «Signore, non ho nessuno che mi immerga nella piscina quando l'acqua si agita. Mentre infatti sto per andarci, un altro scende prima di me»." },
      { n: 8, t: "Gesù gli disse: «Àlzati, prendi la tua barella e cammina»." },
      { n: 9, t: "E all'istante quell'uomo guarì: prese la sua barella e cominciò a camminare. Quel giorno però era un sabato." }
    ]
  },
  {
    book: "Gv",
    name: "Giovanni",
    chapter: 6,
    verses: "35-40",
    title: "Gesù pane della vita",
    text: [
      { n: 35, t: "Gesù rispose loro: «Io sono il pane della vita; chi viene a me non avrà fame e chi crede in me non avrà sete, mai!" },
      { n: 36, t: "Vi ho detto però che voi mi avete visto, eppure non credete." },
      { n: 37, t: "Tutti quelli che il Padre mi dà, verranno a me: colui che viene a me, io non lo respingerò," },
      { n: 38, t: "perché sono disceso dal cielo non per fare la mia volontà, ma la volontà di colui che mi ha mandato." },
      { n: 39, t: "E questa è la volontà di colui che mi ha mandato: che io non perda nulla di quanto egli mi ha dato, ma che lo risusciti nell'ultimo giorno." },
      { n: 40, t: "Questa infatti è la volontà del Padre mio: che chiunque vede il Figlio e crede in lui abbia la vita eterna; e io lo risusciterò nell'ultimo giorno»." }
    ]
  },
  {
    book: "Gv",
    name: "Giovanni",
    chapter: 7,
    verses: "37-39",
    title: "Fiumi di acqua viva nello Spirito",
    text: [
      { n: 37, t: "Nell'ultimo giorno, il grande giorno della festa, Gesù, stante in piedi, gridò a gran voce: «Se qualcuno ha sete, venga a me e beva" },
      { n: 38, t: "chi crede in me. Come dice la Scrittura: Dal suo intimo sgorgheranno fiumi di acqua viva»." },
      { n: 39, t: "Disse questo dello Spirito che avrebbero ricevuto i credenti in lui; infatti non c'era ancora lo Spirito, perché Gesù non era ancora stato glorificato." }
    ]
  },
  {
    book: "Gv",
    name: "Giovanni",
    chapter: 8,
    verses: "1-11",
    title: "L'adultera perdonata",
    text: [
      { n: 1, t: "Gesù si avviò verso il monte degli Ulivi." },
      { n: 2, t: "Ma al mattino si recò di nuovo nel tempio e tutto il popolo andava da lui. Ed egli sedette e insegnava loro." },
      { n: 3, t: "Allora gli scribi e i farisei gli condussero una donna sorpresa in adulterio, la posero in mezzo" },
      { n: 4, t: "e gli dissero: «Maestro, questa donna è stata sorpresa in flagrante adulterio." },
      { n: 5, t: "Ora Mosè, nella Legge, ci ha comandato di lapidare donne come questa. Tu che ne dici?»." },
      { n: 6, t: "Dicevano questo per metterlo alla prova e per avere motivo di accusarlo. Ma Gesù si chinò e si mise a scrivere col dito per terra." },
      { n: 7, t: "Tuttavia, poiché insistevano nell'interrogarlo, si alzò e disse loro: «Chi di voi è senza peccato, getti per primo la pietra contro di lei»." },
      { n: 8, t: "E, chinatosi di nuovo, scriveva per terra." },
      { n: 9, t: "Quelli, udito ciò, se ne andarono uno per uno, cominciando dai più anziani. Lo lasciarono solo, e la donna era là in mezzo." },
      { n: 10, t: "Allora Gesù si alzò e le disse: «Donna, dove sono? Nessuno ti ha condannata?»." },
      { n: 11, t: "Ed ella rispose: «Nessuno, Signore». E Gesù disse: «Neanch'io ti condanno; va' e d'ora in poi non peccare più»." }
    ]
  },
  {
    book: "Gv",
    name: "Giovanni",
    chapter: 9,
    verses: "1-7",
    title: "Guarigione del cieco dalla nascita",
    text: [
      { n: 1, t: "Passando, vide un uomo cieco dalla nascita" },
      { n: 2, t: "e i suoi discepoli lo interrogarono: «Rabbì, chi ha peccato, lui o i suoi genitori, perché sia nato cieco?»." },
      { n: 3, t: "Rispose Gesù: «Né lui ha peccato né i suoi genitori, ma è perché in lui siano manifestate le opere di Dio." },
      { n: 4, t: "Bisogna che noi compiamo le opere di colui che mi ha mandato finché è giorno; poi viene la notte, quando nessuno può più operare." },
      { n: 5, t: "Finché io sono nel mondo, sono la luce del mondo»." },
      { n: 6, t: "Detto questo, sputò per terra, fece del fango con la saliva, spalmò il fango sugli occhi del cieco" },
      { n: 7, t: "e gli disse: «Va' a lavarti nella piscina di Siloe» – che significa Inviato. Quegli andò, si lavò e tornò che ci vedeva." }
    ]
  },
  {
    book: "Gv",
    name: "Giovanni",
    chapter: 10,
    verses: "11-16",
    title: "Il buon Pastore che dà la vita per le pecore",
    text: [
      { n: 11, t: "Io sono il buon pastore. Il buon pastore dà la propria vita per le pecore." },
      { n: 12, t: "Il mercenario – che non è pastore e al quale le pecore non appartengono – vede venire il lupo, abbandona le pecore e fugge, e il lupo le rapisce e le disperde;" },
      { n: 13, t: "perché è un mercenario e non gli importa delle pecore." },
      { n: 14, t: "Io sono il buon pastore, conosco le mie pecore e le mie pecore conoscono me," },
      { n: 15, t: "così come il Padre conosce me e io conosco il Padre, e do la mia vita per le pecore." },
      { n: 16, t: "E ho altre pecore che non provengono da questo recinto: anche quelle io devo guidare. Ascolteranno la mia voce e diventeranno un solo gregge, un solo pastore." }
    ]
  },
  {
    book: "Gv",
    name: "Giovanni",
    chapter: 11,
    verses: "20-27",
    title: "Gesù risurrezione e vita a Betania",
    text: [
      { n: 20, t: "Marta dunque, come udì che veniva Gesù, gli andò incontro; Maria invece stava seduta in casa." },
      { n: 21, t: "Marta disse a Gesù: «Signore, se tu fossi stato qui, mio fratello non sarebbe morto!" },
      { n: 22, t: "Ma anche ora so che qualunque cosa tu chiederai a Dio, Dio te la concederà»." },
      { n: 23, t: "Gesù le disse: «Tuo fratello risorgerà»." },
      { n: 24, t: "Gli rispose Marta: «So che risorgerà nella risurrezione dell'ultimo giorno»." },
      { n: 25, t: "Gesù le disse: «Io sono la risurrezione e la vita; chi crede in me, anche se muore, vivrà;" },
      { n: 26, t: "chiunque vive e crede in me, non morirà in eterno. Credi questo?»." },
      { n: 27, t: "Gli rispose: «Sì, o Signore, io credo che tu sei il Cristo, il Figlio di Dio, colui che viene nel mondo»." }
    ]
  },
  {
    book: "Gv",
    name: "Giovanni",
    chapter: 12,
    verses: "23-26",
    title: "Il chicco di grano che porta molto frutto",
    text: [
      { n: 23, t: "Gesù rispose loro: «È venuta l'ora che il Figlio dell'uomo sia glorificato." },
      { n: 24, t: "In verità, in verità io vi dico: se il chicco di grano, caduto in terra, non muore, rimane solo; se invece muore, produce molto frutto." },
      { n: 25, t: "Chi ama la propria vita, la perde e chi odia la propria vita in questo mondo, la custodirà per la vita eterna." },
      { n: 26, t: "Se uno mi vuole servire, mi segua, e dove sono io, là sarà anche il mio servitore. Se uno serve me, il Padre lo onorerà»." }
    ]
  },
  {
    book: "Gv",
    name: "Giovanni",
    chapter: 13,
    verses: "12-15",
    title: "La lavanda dei piedi come esempio di servizio",
    text: [
      { n: 12, t: "Quando ebbe lavato loro i piedi, riprese le sue vesti, sedette di nuovo e disse loro: «Capite quello che ho fatto per voi?" },
      { n: 13, t: "Voi mi chiamate Maestro e Signore, e dite bene, perché lo sono." },
      { n: 14, t: "Se dunque io, il Signore e il Maestro, ho lavato i piedi a voi, anche voi dovete lavare i piedi gli uni agli altri." },
      { n: 15, t: "Vi ho dato infatti un esempio, perché anche voi facciate come io ho fatto a voi»." }
    ]
  },
  {
    book: "Gv",
    name: "Giovanni",
    chapter: 14,
    verses: "1-6",
    title: "«Io sono la via, la verità e la vita»",
    text: [
      { n: 1, t: "«Non sia turbato il vostro cuore. Abbiate fede in Dio e abbiate fede anche in me." },
      { n: 2, t: "Nella casa del Padre mio vi sono molte dimore. Se no, vi avrei detto: \"Vado a prepararvi un posto\"?" },
      { n: 3, t: "Quando sarò andato e vi avrò preparato un posto, verrò di nuovo e vi prenderò con me, perché dove sono io siate anche voi." },
      { n: 4, t: "E del luogo dove io vado, conoscete la via»." },
      { n: 5, t: "Gli disse Tommaso: «Signore, non sappiamo dove vai; come possiamo conoscere la via?»." },
      { n: 6, t: "Gli disse Gesù: «Io sono la via, la verità e la vita. Nessuno viene al Padre se non per mezzo di me»." }
    ]
  },
  {
    book: "Gv",
    name: "Giovanni",
    chapter: 15,
    verses: "1-5",
    title: "La vera vite e i tralci",
    text: [
      { n: 1, t: "«Io sono la vite vera e il Padre mio è l'agricoltore." },
      { n: 2, t: "Ogni tralcio che in me non porta frutto, lo taglia, e ogni tralcio che porta frutto, lo pota perché porti più frutto." },
      { n: 3, t: "Voi siete già puri, a causa della parola che vi ho annunciato." },
      { n: 4, t: "Rimanete in me e io in voi. Come il tralcio non può portare frutto da se stesso se non rimane nella vite, così neanche voi se non rimanete in me." },
      { n: 5, t: "Io sono la vite, voi i tralci. Chi rimane in me, e io in lui, porta molto frutto, perché senza di me non potete far nulla»." }
    ]
  },
  {
    book: "Gv",
    name: "Giovanni",
    chapter: 16,
    verses: "20-24",
    title: "La tristezza che si cambierà in gioia",
    text: [
      { n: 20, t: "«In verità, in verità io vi dico: voi piangerete e farete lamento, ma il mondo si rallegrerà. Voi sarete nella tristezza, ma la vostra tristezza si cambierà in gioia." },
      { n: 21, t: "La donna, quando partorisce, è nel dolore, perché è venuta la sua ora; ma, quando ha dato alla luce il bambino, non si ricorda più della tribolazione, per la gioia che è venuto al mondo un uomo." },
      { n: 22, t: "Così anche voi: ora siete nel dolore; ma vi vedrò di nuovo e il vostro cuore si rallegrerà e nessuno potrà togliervi la vostra gioia." },
      { n: 23, t: "In quel giorno non mi domanderete più nulla. In verità, in verità io vi dico: se chiederete qualche cosa al Padre nel mio nome, egli ve la darà." },
      { n: 24, t: "Finora non avete chiesto nulla nel mio nome. Chiedete e otterrete, perché la vostra gioia sia piena»." }
    ]
  },
  {
    book: "Gv",
    name: "Giovanni",
    chapter: 17,
    verses: "20-23",
    title: "La preghiera sacerdotale per l'unità dei discepoli",
    text: [
      { n: 20, t: "«Non prego solo per questi, ma anche per quelli che crederanno in me mediante la loro parola:" },
      { n: 21, t: "perché tutti siano una sola cosa; come tu, Padre, sei in me e io in te, siano anch'essi in noi, perché il mondo creda che tu mi hai mandato." },
      { n: 22, t: "E la gloria che tu hai dato a me, io l'ho data a loro, perché siano una sola cosa come noi siamo una sola cosa." },
      { n: 23, t: "Io in loro e tu in me, perché siano perfetti nell'unità e il mondo conosca che tu mi hai mandato e che li hai amati come hai amato me»." }
    ]
  },
  {
    book: "Gv",
    name: "Giovanni",
    chapter: 18,
    verses: "33-37",
    title: "Gesù davanti a Pilato: «Il mio regno non è di questo mondo»",
    text: [
      { n: 33, t: "Pilato allora rientrò nel pretorio, chiamò Gesù e gli disse: «Sei tu il re dei Giudei?»." },
      { n: 34, t: "Gesù rispose: «Dici questo da te, oppure altri te l'hanno detto di me?»." },
      { n: 35, t: "Pilato rispose: «Sono forse io Giudeo? La tua gente e i capi dei sacerdoti ti hanno consegnato a me. Che cosa hai fatto?»." },
      { n: 36, t: "Rispose Gesù: «Il mio regno non è di questo mondo; se il mio regno fosse di questo mondo, i miei servitori avrebbero combattuto perché non fossi consegnato ai Giudei; ma il mio regno non è di quaggiù»." },
      { n: 37, t: "Allora Pilato gli disse: «Dunque tu sei re?». Rispose Gesù: «Tu lo dici: io sono re. Per questo io sono nato e per questo sono venuto nel mondo: per dare testimonianza alla verità. Chiunque è dalla verità, ascolta la mia voce»." }
    ]
  },
  {
    book: "Gv",
    name: "Giovanni",
    chapter: 19,
    verses: "25-30",
    title: "Gesù sulla croce, la Madre e il discepolo amato",
    text: [
      { n: 25, t: "Stavano presso la croce di Gesù sua madre, la sorella di sua madre, Maria madre di Clèopa e Maria di Màgdala." },
      { n: 26, t: "Gesù allora, vedendo la madre e accanto a lei il discepolo che egli amava, disse alla madre: «Donna, ecco tuo figlio!»." },
      { n: 27, t: "Poi disse al discepolo: «Ecco tua madre!». E da quell'ora il discepolo la accolse con sé." },
      { n: 28, t: "Dopo questo, Gesù, sapendo che oramai tutto era compiuto, perché si compisse la Scrittura, disse: «Ho sete»." },
      { n: 29, t: "Vi era lì un vaso pieno di aceto; posero perciò una spugna, imbevuta di aceto, in cima a una canna e gliela accostarono alla bocca." },
      { n: 30, t: "Dopo aver preso l'aceto, Gesù disse: «È compiuto!». E, chinato il capo, consegnò lo spirito." }
    ]
  },
  {
    book: "Gv",
    name: "Giovanni",
    chapter: 20,
    verses: "11-18",
    title: "L'apparizione a Maria di Màgdala",
    text: [
      { n: 11, t: "Maria invece stava all'esterno, vicino al sepolcro, e piangeva. Mentre piangeva, si chinò verso il sepolcro" },
      { n: 12, t: "e vide due angeli in bianche vesti, seduti l'uno dalla parte del capo e l'altro dei piedi, dove era stato posto il corpo di Gesù." },
      { n: 13, t: "Ed essi le dissero: «Donna, perché piangi?». Rispose loro: «Hanno portato via il mio Signore e non so dove l'hanno posto»." },
      { n: 14, t: "Detto questo, si voltò indietro e vide Gesù, in piedi; ma non sapeva che fosse Gesù." },
      { n: 15, t: "Le disse Gesù: «Donna, perché piangi? Chi cerchi?». Ella, pensando che fosse il custode del giardino, gli disse: «Signore, se l'hai portato via tu, dimmi dove l'hai posto e io andrò a prenderlo»." },
      { n: 16, t: "Gesù le disse: «Maria!». Ella si voltò e gli disse in ebraico: «Rabbunì!» – che significa: «Maestro!»." },
      { n: 17, t: "Gesù le disse: «Non trattenermi, perché non sono ancora salito al Padre; ma va' dai miei fratelli e dì loro: \"Salgo al Padre mio e Padre vostro, Dio mio e Dio vostro\"»." },
      { n: 18, t: "Maria di Màgdala andò subito ad annunciare ai discepoli: «Ho visto il Signore!» e ciò che le aveva detto." }
    ]
  },
  {
    book: "Gv",
    name: "Giovanni",
    chapter: 21,
    verses: "15-19",
    title: "Gesù affida il pascolo delle sue pecore a Pietro",
    text: [
      { n: 15, t: "Quand'ebbero mangiato, Gesù disse a Simon Pietro: «Simone, figlio di Giovanni, mi ami più di costoro?». Gli rispose: «Certo, Signore, tu sai che ti voglio bene». Gli disse: «Pasci i miei agnelli»." },
      { n: 16, t: "Gli disse di nuovo, per la seconda volta: «Simone, figlio di Giovanni, mi ami?». Gli rispose: «Certo, Signore, tu sai che ti voglio bene». Gli disse: «Pascola le mie pecore»." },
      { n: 17, t: "Gli disse per la terza volta: «Simone, figlio di Giovanni, mi vuoi bene?». Pietro rimase addolorato che per la terza volta gli domandasse: «Mi vuoi bene?», e gli disse: «Signore, tu conosci tutto; tu sai che ti voglio bene». Gli disse Gesù: «Pasci le mie pecore." },
      { n: 18, t: "In verità, in verità io ti dico: quando eri più giovane ti cingevi la veste da solo e andavi dove volevi; ma quando sarai vecchio tenderai le tue mani, e un altro ti cingerà e ti porterà dove tu non vuoi»." },
      { n: 19, t: "Questo disse per indicare con quale morte egli avrebbe glorificato Dio. E, detto questo, aggiunse: «Seguimi»." }
    ]
  },
    [
  // --- VANGELO SECONDO MARCO (Capitoli 1-16) ---
  {
    book: "Mc",
    name: "Marco",
    chapter: 1,
    verses: "14-20",
    title: "Inizio del ministero e chiamata dei primi discepoli",
    text: [
      { n: 14, t: "Dopo che Giovanni fu arrestato, Gesù andò nella Galilea, proclamando il vangelo di Dio" },
      { n: 15, t: "e diceva: «Il tempo è compiuto e il regno di Dio è vicino; convertitevi e credete nel Vangelo»." },
      { n: 16, t: "Passando lungo il mare di Galilea, vide Simone e Andrea, fratello di Simone, mentre gettavano le reti in mare; erano infatti pescatori." },
      { n: 17, t: "Gesù disse loro: «Venite dietro a me, vi farò diventare pescatori di uomini»." },
      { n: 18, t: "E subito lasciarono le reti e lo seguirono." },
      { n: 19, t: "Andando un poco oltre, vide Giacomo, figlio di Zebedeo, e Giovanni suo fratello, mentre anch'essi nella barca riparavano le reti." },
      { n: 20, t: "E subito li chiamò. Ed essi lasciarono il loro padre Zebedeo nella barca con i garzoni e andarono dietro a lui." }
    ]
  },
  {
    book: "Mc",
    name: "Marco",
    chapter: 2,
    verses: "1-12",
    title: "Guarigione del paralitico a Cafarnao",
    text: [
      { n: 1, t: "Entrò di nuovo a Cafarnao, dopo alcuni giorni. Si seppe che era in casa" },
      { n: 2, t: "e si radunarono tante persone che non c'era più posto neanche davanti alla porta; ed egli annunziava loro la Parola." },
      { n: 3, t: "Si recarono da lui portando un paralitico, sorretto da quattro persone." },
      { n: 4, t: "Non potendo però portaglielo innanzi, a causa della folla, scoperchiarono il tetto nel punto dove egli si trovava e, fatta un'apertura, calarono la barella su cui era adagiato il paralitico." },
      { n: 5, t: "Gesù, vista la loro fede, disse al paralitico: «Figlio, ti sono perdonati i peccati»." },
      { n: 6, t: "Erano seduti là alcuni scribi e pensavano in cuor loro:" },
      { n: 7, t: "«Perché costui parla così? Bestemmia! Chi può perdonare i peccati, se non Dio solo?»." },
      { n: 8, t: "E subito Gesù, conoscendo nel suo spirito che così pensavano tra sé, disse loro: «Perché pensate queste cose nei vostri cuori?" },
      { n: 9, t: "Che cos'è più facile: dire al paralitico \"Ti sono perdonati i peccati\", oppure dire \"Àlzati, prendi la tua barella e cammina\"?" },
      { n: 10, t: "Ora, perché sappiate che il Figlio dell'uomo ha il potere di perdonare i peccati sulla terra –" },
      { n: 11, t: "dico a te – disse al paralitico –: àlzati, prendi la tua barella e va' a casa tua»." },
      { n: 12, t: "Egli si alzò e subito presa la sua barella, sotto gli occhi di tutti se ne andò, tanto che tutti furono presi da stupore e lodavano Dio, dicendo: «Non abbiamo mai visto nulla di simile!»." }
    ]
  },
  {
    book: "Mc",
    name: "Marco",
    chapter: 3,
    verses: "13-19",
    title: "L'istituzione dei Dodici apostoli",
    text: [
      { n: 13, t: "Salì poi sul monte, chiamò a sé quelli che egli volle ed essi andarono da lui." },
      { n: 14, t: "Ne costituì Dodici – che chiamò apostoli – perché stessero con lui e per mandarli a predicare" },
      { n: 15, t: "e perché avessero il potere di scacciare i demoni." },
      { n: 16, t: "Costituì dunque i Dodici: Simone, al quale impose il nome di Pietro," },
      { n: 17, t: "poi Giacomo, figlio di Zebedeo, e Giovanni fratello di Giacomo, ai quali impose il nome di Boanèrges, cioè figli del tuono;" },
      { n: 18, t: "e Andrea, Filippo, Bartolomeo, Matteo, Tommaso, Giacomo figlio di Alfeo, Taddeo, Simone il Cananeo" },
      { n: 19, t: "e Giuda Iscariota, quello che poi lo tradì." }
    ]
  },
  {
    book: "Mc",
    name: "Marco",
    chapter: 4,
    verses: "35-41",
    title: "La tempesta sedata",
    text: [
      { n: 35, t: "In quel medesimo giorno, venuta la sera, Gesù disse loro: «Passiamo all'altra riva»." },
      { n: 36, t: "E, congedata la folla, lo presero con sé, così com'era, nella barca. C'erano anche altre barche con lui." },
      { n: 37, t: "Nel frattempo si sollevò una grande tempesta di vento e le onde si rovesciavano nella barca, tanto che oramai era piena." },
      { n: 38, t: "Egli se ne stava a poppa, sul cuscino, e dormiva. Allora lo svegliarono e gli dissero: «Maestro, non t'importa che siamo perduti?»." },
      { n: 39, t: "Si destò, minacciò il vento e disse al mare: «Taci, kàlmati!». Il vento cessò e ci fu grande bonaccia." },
      { n: 40, t: "Poi disse loro: «Perché avete paura? Non avete ancora fede?»." },
      { n: 41, t: "E furono presi da grande timore e si dicevano l'un l'altro: «Chi è dunque costui, che anche il vento e il mare gli obbediscono?»." }
    ]
  },
  {
    book: "Mc",
    name: "Marco",
    chapter: 5,
    verses: "25-34",
    title: "Guarigione dell'emorroissa",
    text: [
      { n: 25, t: "Ora una donna, che aveva perdite di sangue da dodici anni" },
      { n: 26, t: "e aveva molto sofferto per opera di molti medici, spendendo tutti i suoi beni senza alcun giovamento, anzi piuttosto peggiorando," },
      { n: 27, t: "udito parlare di Gesù, venne tra la folla alle sue spalle e toccò il suo mantello." },
      { n: 28, t: "Diceva infatti: «Se riuscirò anche solo a toccare le sue vesti, sarò salvata»." },
      { n: 29, t: "E subito le si prosciugò la sorgente del sangue e sentì nel suo corpo che era guarita dal male." },
      { n: 30, t: "E subito Gesù, essendosi reso conto della forza che era uscita da lui, si voltò alla folla dicendo: «Chi ha toccato le mie vesti?»." },
      { n: 31, t: "I suoi discepoli gli dissero: «Tu vedi la folla che si stringe attorno a te e dici: \"Chi mi ha toccato?\"»." },
      { n: 32, t: "Egli guardava attorno, per vedere colei che aveva fatto questo." },
      { n: 33, t: "E la donna, impaurita e tremante, sapendo ciò che le era accaduto, venne, gli si gettò davanti e gli disse tutta la verità." },
      { n: 34, t: "Ed egli le disse: «Figlia, la tua fede ti ha salvata. Va' in pace e sii guarita dal tuo male»." }
    ]
  },
  {
    book: "Mc",
    name: "Marco",
    chapter: 6,
    verses: "30-34",
    title: "Gesù e i discepoli in un luogo deserto",
    text: [
      { n: 30, t: "Gli apostoli si riunirono attorno a Gesù e gli riferirono tutto quello che avevano fatto e quello che avevano insegnato." },
      { n: 31, t: "Ed egli disse loro: «Venite in disparte, voi soli, in un luogo deserto, e riposatevi un po'». Erano infatti molti quelli che andavano e venivano e non avevano neanche il tempo di mangiare." },
      { n: 32, t: "Allora partirono nella barca verso un luogo deserto, in disparte." },
      { n: 33, t: "Molti però li videro partire e capirono, e da tutte le città accorsero là a piedi e li precorsero." },
      { n: 34, t: "Sceso dalla barca, egli vide una grande folla, ebbe compassione di loro, perché erano come pecore che non hanno pastore, e si mise a insegnare loro molte cose." }
    ]
  },
  {
    book: "Mc",
    name: "Marco",
    chapter: 7,
    verses: "31-37",
    title: "Guarigione di un sordo-muto",
    text: [
      { n: 31, t: "Di ritorno dalla regione di Tiro, passò per Sidone, venendo verso il mare di Galilea in pieno territorio della Decàpoli." },
      { n: 32, t: "Gli portarono un sordo-muto e lo pregarono di imporgli la mano." },
      { n: 33, t: "Lo prese in disparte, lontano dalla folla, gli pose le dita negli orecchi e con la saliva gli toccò la lingua;" },
      { n: 34, t: "guardando quindi verso il cielo, emise un sospiro e gli disse: «Effatà», cioè: «Apriti!»." },
      { n: 35, t: "E subito gli si aprirono gli orecchi, si sciolse il nodo della sua lingua e parlava correttamente." },
      { n: 36, t: "E comandò loro di non dirlo a nessuno. Ma più egli lo proibiva, più essi lo proclamavano" },
      { n: 37, t: "e, pieni di stupore, dicevano: «Ha fatto bene ogni cosa: fa udire i sordi e fa parlare i muti!»." }
    ]
  },
  {
    book: "Mc",
    name: "Marco",
    chapter: 8,
    verses: "27-30",
    title: "La professione di fede di Pietro a Cesarea",
    text: [
      { n: 27, t: "Poi Gesù partì con i suoi discepoli verso i villaggi intorno a Cesarea di Filippo, e per strada interrogava i suoi discepoli dicendo loro: «La gente, chi dice che io sia?»." },
      { n: 28, t: "Ed essi gli risposero: «Giovanni il Battista; altri dicono Elia e altri uno dei profeti»." },
      { n: 29, t: "Ed egli domandava loro: «Ma voi, chi dite che io sia?». Pietro gli rispose: «Tu sei il Cristo»." },
      { n: 30, t: "E ordinò loro severamente di non parlare di lui a nessuno." }
    ]
  },
  {
    book: "Mc",
    name: "Marco",
    chapter: 9,
    verses: "2-9",
    title: "La Trasfigurazione",
    text: [
      { n: 2, t: "Sei giorni dopo, Gesù prese con sé Pietro, Giacomo e Giovanni e li condusse su un alto monte, in disparte, loro soli. Fu trasfigurato davanti a loro" },
      { n: 3, t: "e le sue vesti divennero splendenti, bianchissime: nessun lavandaio sulla terra potrebbe renderle così bianche." },
      { n: 4, t: "E apparve loro Elia con Mosè e conversavano con Gesù." },
      { n: 5, t: "Prendendo la parola, Pietro disse a Gesù: «Rabbì, è bello per noi essere qui; facciamo tre capanne, una per te, una per Mosè e una per Elia»." },
      { n: 6, t: "Non sapeva infatti che cosa dire, perché erano spaventati." },
      { n: 7, t: "Venne una nube che li coprì con la sua ombra e dalla nube uscì una voce: «Questi è il Figlio mio, l'amato: ascoltatelo!»." },
      { n: 8, t: "E all'improvviso, guardandosi attorno, non videro più nessuno, se non Gesù solo, con loro." },
      { n: 9, t: "Mentre scendevano dal monte, ordinò loro di non raccontare ad alcuno ciò che avevano visto, se non dopo che il Figlio dell'uomo fosse risorto dai morti." }
    ]
  },
  {
    book: "Mc",
    name: "Marco",
    chapter: 10,
    verses: "46-52",
    title: "Guarigione del cieco Bartimeo",
    text: [
      { n: 46, t: "Giunsero a Gerico. Mentre partiva da Gerico insieme ai suoi discepoli e a molta folla, il figlio di Timeo, Bartimeo, che era cieco, sedeva lungo la strada a chiedere l'elemosina." },
      { n: 47, t: "Sentendo che era Gesù Nazareno, cominciò a gridare e a dire: «Figlio di Davide, Gesù, abbi pietà di me!»." },
      { n: 48, t: "Molti lo rimproveravano perché tacesse, ma egli gridava ancora più forte: «Figlio di Davide, abbi pietà di me!»." },
      { n: 49, t: "Gesù si fermò e disse: «Chiamatelo!». Chiamarono il cieco, dicendogli: «Coraggio! Àlzati, ti chiama!»." },
      { n: 50, t: "Egli, gettato via il suo mantello, balzò in piedi e venne da Gesù." },
      { n: 51, t: "Allora Gesù gli disse: «Che cosa vuoi che io faccia per te?». E il cieco gli rispose: «Rabbunì, che io riacquisti la vista!»." },
      { n: 52, t: "E Gesù gli disse: «Va', la tua fede ti ha salvato». E subito riacquistò la vista e lo seguiva lungo la strada." }
    ]
  },
  {
    book: "Mc",
    name: "Marco",
    chapter: 11,
    verses: "15-18",
    title: "La cacciata dei venditori dal tempio",
    text: [
      { n: 15, t: "Giunsero a Gerusalemme. Entrato nel tempio, si mise a scacciare quelli che vendevano e compravano nel tempio; rovesciò i tavoli dei cambiamonete e le sedie dei venditori di colombe" },
      { n: 16, t: "e non permetteva che si trasportassero cose attraverso il tempio." },
      { n: 17, t: "E insegnava loro dicendo: «Non sta forse scritto: La mia casa sarà chiamata casa di preghiera per tutte le nazioni? Voi invece ne avete fatto una spelonca di ladri!»." },
      { n: 18, t: "Lo udirono i capi dei sacerdoti e gli scribi e cercavano il modo di farlo morire. Avevano infatti paura di lui, perché tutta la folla era stupita del suo insegnamento." }
    ]
  },
  {
    book: "Mc",
    name: "Marco",
    chapter: 12,
    verses: "28-34",
    title: "Il primo e più grande comandamento",
    text: [
      { n: 28, t: "Allora si avvicinò a lui uno degli scribi che li aveva uditi discutere e, visto come aveva ben risposto loro, gli domandò: «Qual è il primo di tutti i comandamenti?»." },
      { n: 29, t: "Gesù rispose: «Il primo è: Ascolta, Israele! Il Signore nostro Dio è l'unico Signore;" },
      { n: 30, t: "amerai il Signore tuo Dio con tutto il tuo cuore e con tutta la tua anima, con tutta la tua mente e con tutta la tua forza." },
      { n: 31, t: "Il secondo è questo: Amerai il tuo prossimo come te stesso. Non c'è altro comandamento più grande di questi»." },
      { n: 32, t: "Lo scriba gli disse: «In verità, Maestro, hai detto bene: Egli è uno solo e non ve n'è altri all'fuori di lui;" },
      { n: 33, t: "amarlo con tutto il cuore, con tutta l'intelligenza e con tutta la forza e amare il prossimo come se stesso vale più di tutti gli olocausti e i sacrifici»." },
      { n: 34, t: "Gesù, vedendo che aveva risposto saggiamente, gli disse: «Non sei lontano dal regno di Dio». E nessuno aveva più il coraggio di interrogarlo." }
    ]
  },
  {
    book: "Mc",
    name: "Marco",
    chapter: 13,
    verses: "32-37",
    title: "Esortazione alla vigilanza",
    text: [
      { n: 32, t: "Quanto a quel giorno o a quell'ora, nessuno li conosce, né gli angeli nel cielo né il Figlio, ma solo il Padre." },
      { n: 33, t: "Fate attenzione, vegliate, perché non sapete quando è il momento." },
      { n: 34, t: "È come un uomo, che è partito dopo aver lasciato la propria casa e dato il potere ai suoi servi, a ciascuno il suo compito, e ha ordinato al portinaio di vegliare." },
      { n: 35, t: "Vegliate dunque: voi non sapete quando il padrone di casa ritornerà, se alla sera o a mezzanotte o al canto del gallo o al mattino;" },
      { n: 36, t: "fa' che, giungendo all'improvviso, non vi trovi addormentati." },
      { n: 37, t: "Quello che dico a voi, lo dico a tutti: vegliate!»." }
    ]
  },
  {
    book: "Mc",
    name: "Marco",
    chapter: 14,
    verses: "22-26",
    title: "L'istituzione dell'Eucaristia",
    text: [
      { n: 22, t: "E, mentre mangiavano, prese il pane e recitò la benedizione, lo spezzò e lo diede loro, dicendo: «Prendete, questo è il mio corpo»." },
      { n: 23, t: "Poi prese un calice e rese grazie, lo diede loro e ne bevvero tutti." },
      { n: 24, t: "E disse loro: «Questo è il mio sangue dell'alleanza, che è versato per molti." },
      { n: 25, t: "In verità io vi dico che non berrò mai più del frutto della vite fino al giorno in cui lo berrò nuovo, nel regno di Dio»." },
      { n: 26, t: "Dopo aver cantato l'inno, uscirono verso il monte degli Ulivi." }
    ]
  },
  {
    book: "Mc",
    name: "Marco",
    chapter: 15,
    verses: "33-39",
    title: "La morte di Gesù in croce",
    text: [
      { n: 33, t: "Quando fu mezzogiorno, si fece buio su tutta la terra fino alle tre del pomeriggio." },
      { n: 34, t: "Alle tre, Gesù gridò a gran voce: «Eloì, Eloì, lemà sabactàni?», che significa: «Dio mio, Dio mio, perché mi hai abbandonato?»." },
      { n: 35, t: "Alcuni dei presenti, udito ciò, dicevano: «Ecco, chiama Elia!»." },
      { n: 36, t: "Uno corse a inzuppare di aceto una spugna, la fissò su una canna e gli dava da bere, dicendo: «Aspettiamo, vediamo se viene Elia a tirarlo giù»." },
      { n: 37, t: "Ma Gesù, dando un forte grido, spirò." },
      { n: 38, t: "Il velo del tempio si squarciò in due, da cima a fondo." },
      { n: 39, t: "Il centurione, che si trovava di fronte a lui, avendolo visto spirare in quel modo, disse: «Davvero quest'uomo era Figlio di Dio!»." }
    ]
  },
  {
    book: "Mc",
    name: "Marco",
    chapter: 16,
    verses: "1-8",
    title: "L'annuncio della risurrezione alle donne",
    text: [
      { n: 1, t: "Passato il sabato, Maria di Màgdala, Maria madre di Giacomo e Salome comprarono oli aromatici per andare ad ungerlo." },
      { n: 2, t: "Di risposta, il primo giorno della settimana, vennero al sepolcro al levare del sole." },
      { n: 3, t: "Dicevano tra loro: «Chi ci farà rotolare via la pietra dall'ingresso del sepolcro?»." },
      { n: 4, t: "Guardando, videro che la pietra era già stata rotolata via, per quanto fosse molto grande." },
      { n: 5, t: "Entrate nel sepolcro, videro un giovane seduto sulla destra, vestito d'una veste bianca, e ebbero paura." },
      { n: 6, t: "Ma egli disse loro: «Non abbiate paura! Voi cercate Gesù Nazareno, il crocifisso. È risorto, non è qui. Ecco il luogo dove l'avevano posto." },
      { n: 7, t: "Ma andate, dite ai suoi discepoli e a Pietro: \"Egli vi precede in Galilea. Là lo vedrete, come vi ha detto\"»." },
      { n: 8, t: "Esse uscirono e fuggirono via dal sepolcro, perché erano piene di spavento e di stupore." }
    ]
  },
      [
  // --- LETTERA AI ROMANI (Capitoli 1-16) ---
  {
    book: "Rm",
    name: "Romani",
    chapter: 1,
    verses: "16-20",
    title: "La potenza del Vangelo e la rivelazione di Dio",
    text: [
      { n: 16, t: "Io infatti non mi vergogno del Vangelo, perché è potenza di Dio per la salvezza di chiunque crede, del Giudeo, prima, come del Greco." },
      { n: 17, t: "In esso infatti si rivela la giustizia di Dio, da fede a fede, come sta scritto: Il giusto per fede vivrà." },
      { n: 18, t: "Infatti l'ira di Dio si rivela dal cielo contro ogni empietà e ogni ingiustizia di uomini che soffocano la verità nell'ingiustizia," },
      { n: 19, t: "poiché ciò che di Dio si può conoscere è loro manifesto; Dio stesso lo ha loro manifestato." },
      { n: 20, t: "Infatti le sue virtù invisibili, ossia la sua eterna potenza e divinità, vengono contemplate e comprese dalla creazione del mondo attraverso le opere da lui compiute." }
    ]
  },
  {
    book: "Rm",
    name: "Romani",
    chapter: 2,
    verses: "1-6",
    title: "Il giusto giudizio di Dio senza parzialità",
    text: [
      { n: 1, t: "Perciò sei inescusabile, chiunque tu sia, o uomo che giudichi; perché nel giudicare gli altri condanni te stesso; infatti tu che giudichi fai le medesime cose." },
      { n: 2, t: "Eppure noi sappiamo che il giudizio di Dio contro quelli che fanno tali cose è secondo verità." },
      { n: 3, t: "Pensi forse, o uomo che giudichi quelli che fanno tali cose e poi le fai tu stesso, di sfuggire al giudizio di Dio?" },
      { n: 4, t: "O disprezzi la ricchezza della sua bontà, della sua tolleranza e della sua magnanimità, senza riconoscere che la bontà di Dio ti spinge alla conversione?" },
      { n: 5, t: "Tu però, con la tua durezza e il tuo cuore impenitente, accumuli ira su di te per il giorno dell'ira e della rivelazione del giusto giudizio di Dio," },
      { n: 6, t: "il quale renderà a ciascuno secondo le sue opere." }
    ]
  },
  {
    book: "Rm",
    name: "Romani",
    chapter: 3,
    verses: "21-26",
    title: "La giustificazione per mezzo della fede in Gesù Cristo",
    text: [
      { n: 21, t: "Ora invece, indipendentemente dalla Legge, si è manifestata la giustizia di Dio, testimoniata dalla Legge e dai Profeti:" },
      { n: 22, t: "giustizia di Dio per mezzo della fede in Gesù Cristo, per tutti quelli che credono. Poiché non c'è distinzione," },
      { n: 23, t: "tutti infatti hanno peccato e sono privi della gloria di Dio," },
      { n: 24, t: "ma sono giustificati gratuitamente per la sua grazia, per mezzo della redenzione che è in Cristo Gesù." },
      { n: 25, t: "È lui che Dio ha stabilito apertamente come strumento di espiazione, per mezzo della fede, nel suo sangue," },
      { n: 26, t: "per dimostrare la sua giustizia, al fine di essere giusto e di giustificare chi si basa sulla fede in Gesù." }
    ]
  },
  {
    book: "Rm",
    name: "Romani",
    chapter: 4,
    verses: "18-22",
    title: "La fede di Abramo modello dei credenti",
    text: [
      { n: 18, t: "Egli credette, saldo nella speranza contro ogni speranza, e così divenne padre di molti popoli, come gli era stato detto: Così sarà la tua discendenza." },
      { n: 19, t: "Egli non vacillò nella fede, pur vedendo già come morto il proprio corpo - aveva quasi cent'anni - e morto il grembo di Sara." },
      { n: 20, t: "Di fronte alla promessa di Dio non esitò per incredulità, ma si rafforzò nella fede e diede gloria a Dio," },
      { n: 21, t: "pienamente convinto che quanto egli aveva promesso era anche capace di portarlo a compimento." },
      { n: 22, t: "Ecco perché ciò gli fu accreditato come giustizia." }
    ]
  },
  {
    book: "Rm",
    name: "Romani",
    chapter: 5,
    verses: "1-5",
    title: "Pace con Dio e la speranza che non delude",
    text: [
      { n: 1, t: "Giustificati dunque per fede, noi siamo in pace con Dio per mezzo del Signore nostro Gesù Cristo." },
      { n: 2, t: "Per mezzo di lui abbiamo anche ottenuto, mediante la fede, l'accesso a questa grazia nella quale ci troviamo e ci vantiamo, saldi nella speranza della gloria di Dio." },
      { n: 3, t: "E non solo: ci vantiamo anche nelle tribolazioni, sapendo che la tribolazione produce pazienza," },
      { n: 4, t: "la pazienza una virtù provata e la virtù provata la speranza." },
      { n: 5, t: "La speranza poi non delude, perché l'amore di Dio è stato riversato nei nostri cuori per mezzo dello Spirito Santo che ci è stato dato." }
    ]
  },
  {
    book: "Rm",
    name: "Romani",
    chapter: 6,
    verses: "8-11",
    title: "Morti al peccato e vivi per Dio in Cristo Gesù",
    text: [
      { n: 8, t: "Ma se siamo morti con Cristo, crediamo che anche vivremo con lui," },
      { n: 9, t: "sapendo che Cristo, risorto dai morti, non muore più; la morte non ha più potere su di lui." },
      { n: 10, t: "Infatti egli morì, e morì per il peccato una volta per tutte; ora invece vive, e vive per Dio." },
      { n: 11, t: "Così anche voi consideratevi morti al peccato, ma vivi per Dio, in Cristo Gesù." }
    ]
  },
  {
    book: "Rm",
    name: "Romani",
    chapter: 7,
    verses: "18-25",
    title: "La lotta interiore dell'uomo e la liberazione in Cristo",
    text: [
      { n: 18, t: "Io so infatti che in me, cioè nella mia carne, non abita il bene: in me c'è il desiderio del bene, ma non la capacità di attuarlo;" },
      { n: 19, t: "infatti io non compio il bene che voglio, ma il male che non voglio." },
      { n: 20, t: "Ora, se faccio quello che non voglio, non sono più io a farlo, ma il peccato che abita in me." },
      { n: 21, t: "Dunque io trovo in me questa legge: quando voglio fare il bene, il male è accanto a me." },
      { n: 22, t: "Infatti acconsento nell'intimo del mio cuore alla legge di Dio," },
      { n: 23, t: "ma nelle mie membra vedo un'altra legge, che combatte contro la legge della mia ragione e mi rende schiavo della legge del peccato." },
      { n: 24, t: "Me infelice! Chi mi libererà da questo corpo di morte?" },
      { n: 25, t: "Grazie a Dio per mezzo di Gesù Cristo nostro Signore!" }
    ]
  },
  {
    book: "Rm",
    name: "Romani",
    chapter: 8,
    verses: "31-39",
    title: "Nulla potrà mai separarci dall'amore di Dio",
    text: [
      { n: 31, t: "Che diremo dunque da queste cose? Se Dio è per noi, chi sarà contro di noi?" },
      { n: 32, t: "Egli, che non ha risparmiato il proprio Figlio, ma lo ha consegnato per tutti noi, non ci donerà forse ogni cosa insieme a lui?" },
      { n: 33, t: "Chi muoverà accuse contro gli eletti di Dio? Dio è colui che giustifica!" },
      { n: 34, t: "Chi condannerà? Cristo Gesù è morto, anzi è risorto, sta alla destra di Dio e intercede per noi!" },
      { n: 35, t: "Chi ci separerà dall'amore di Cristo? Sarà forse la tribolazione, l'angoscia, la persecuzione, la fame, la nudità, il pericolo, la spada?" },
      { n: 36, t: "Come sta scritto: Per causa tua siamo messi a morte tutto il giorno, siamo considerati come pecore da macello." },
      { n: 37, t: "Ma in tutte queste cose noi siamo più che vincitori grazie a colui che ci ha amati." },
      { n: 38, t: "Io sono infatti persuaso che né morte né vita, né angeli né principati, né presente né futuro, né potenze," },
      { n: 39, t: "né altezza né profondità, né alcun'altra creatura potrà mai separarci dall'amore di Dio, che è in Cristo Gesù, nostro Signore." }
    ]
  },
  {
    book: "Rm",
    name: "Romani",
    chapter: 9,
    verses: "14-18",
    title: "La sovranità della misericordia di Dio",
    text: [
      { n: 14, t: "Che diremo dunque? C'è forse ingiustizia in Dio? No certo!" },
      { n: 15, t: "Egli infatti dice a Mosè: Avrò misericordia per chi vorrò avere misericordia, e avrò pietà di chi vorrò avere pietà." },
      { n: 16, t: "Quindi non dipende dalla volontà né dagli sforzi dell'uomo, ma da Dio che ha misericordia." },
      { n: 17, t: "Dice infatti la Scrittura al Faraone: Ti ho suscitato proprio per manifestare in te la mia potenza e perché il mio nome sia proclamato in tutta la terra." },
      { n: 18, t: "Dio quindi ha misericordia verso chi vuole e rende duro il cuore di chi vuole." }
    ]
  },
  {
    book: "Rm",
    name: "Romani",
    chapter: 10,
    verses: "9-15",
    title: "La professione di fede e l'annuncio della salvezza",
    text: [
      { n: 9, t: "Perché se con la tua bocca proclamerai: «Gesù è il Signore!», e con il tuo cuore crederai che Dio lo ha risuscitato dai morti, sarai salvo." },
      { n: 10, t: "Con il cuore infatti si crede per ottenere la giustizia, e con la bocca si fa la professione di fede per avere la salvezza." },
      { n: 11, t: "Dice infatti la Scrittura: Chiunque crede in lui non sarà deluso." },
      { n: 12, t: "Poiché non c'è distinzione fra Giudeo e Greco, dato che lui stesso è il Signore di tutti, ricco verso tutti quelli che lo invocano." },
      { n: 13, t: "Infatti chiunque invocherà il nome del Signore sarà salvato." },
      { n: 14, t: "Ora, come invocheranno colui nel quale non hanno creduto? Come crederanno in colui del quale non hanno sentito parlare? Come ne sentiranno parlare senza qualcuno che lo annunci?" },
      { n: 15, t: "E come lo annunceranno, se non sono stati inviati? Come sta scritto: Quanto sono belli i piedi di coloro che recano un lieto annuncio di bene!" }
    ]
  },
  {
    book: "Rm",
    name: "Romani",
    chapter: 11,
    verses: "33-36",
    title: "Inno alla sapienza incommensurabile di Dio",
    text: [
      { n: 33, t: "O profondità della ricchezza, della sapienza e della conoscenza di Dio! Quanto sono insondabili i suoi giudizi e inaccessibili le sue vie!" },
      { n: 34, t: "Chi mai infatti ha conosciuto il pensiero del Signore? O chi mai è stato suo consigliere?" },
      { n: 35, t: "O chi gli ha dato qualcosa per primo, da riceverne il contraccambio?" },
      { n: 36, t: "Poiché da lui, grazie a lui e per lui sono tutte le cose. A lui la gloria nei secoli. Amen!" }
    ]
  },
  {
    book: "Rm",
    name: "Romani",
    chapter: 12,
    verses: "1-2, 9-13",
    title: "Il culto spirituale e la vita nella carità",
    text: [
      { n: 1, t: "Vi esorto dunque, fratelli, per la misericordia di Dio, a offrire i vostri corpi come sacrificio vivente, santo e gradito a Dio; è questo il vostro culto spirituale." },
      { n: 2, t: "Non conformatevi a questo mondo, ma lasciatevi trasformare rinnovando il vostro modo di pensare, per poter discernere la volontà di Dio, ciò che è buono, a lui gradito e perfetto." },
      { n: 9, t: "La carità non sia ipocrita: detestate il male, attaccatevi al bene;" },
      { n: 10, t: "amatevi gli uni gli altri con affetto fraterno, gareggiate nello stimarvi a vicenda." },
      { n: 11, t: "Non siate pigri nel fare il bene, siate invece ferventi nello spirito; servite il Signore." },
      { n: 12, t: "Siate lieti nella speranza, forti nella tribolazione, perseveranti nella preghiera." },
      { n: 13, t: "Condividete le necessità dei santi; siate premurosi nell'ospitalità." }
    ]
  },
  {
    book: "Rm",
    name: "Romani",
    chapter: 13,
    verses: "8-12",
    title: "L'amore pieno compimento della Legge",
    text: [
      { n: 8, t: "Non siate debitori di nulla a nessuno, se non dell'amore vicendevole; perché chi ama l'altro ha adempiuto la Legge." },
      { n: 9, t: "Infatti: Non commetterai adulterio, non ucciderai, non ruberai, non desidererai, e qualsiasi altro comandamento, si riassume in queste parole: Amarai il tuo prossimo come te stesso." },
      { n: 10, t: "La carità non fa alcun male al prossimo: pienezza della Legge è infatti la carità." },
      { n: 11, t: "E questo voi farete, consapevoli del momento: è ora ormai che vi svegliate dal sonno, perché adesso la nostra salvezza è più vicina di quando diventammo credenti." },
      { n: 12, t: "La notte è avanzata, il giorno è vicino. Perciò gettiamo via le opere delle tenebre e indossiamo le armi della luce." }
    ]
  },
  {
    book: "Rm",
    name: "Romani",
    chapter: 14,
    verses: "7-12",
    title: "Nessuno di noi vive per se stesso",
    text: [
      { n: 7, t: "Nessuno di noi infatti vive per se stesso, e nessuno muore per se stesso;" },
      { n: 8, t: "se noi viviamo, viviamo per il Signore, se noi moriamo, moriamo per il Signore. Sia che viviamo, sia che moriamo, siamo del Signore." },
      { n: 9, t: "Per questo infatti Cristo è morto ed è ritornato alla vita: per essere il Signore dei morti e dei vivi." },
      { n: 10, t: "Ma tu, perché giudichi il tuo fratello? E tu, perché disprezzi il tuo fratello? Tutti infatti compariremo davanti al tribunale di Dio," },
      { n: 11, t: "perché sta scritto: Per la mia vita, dice il Signore, ogni ginocchio si piegherà davanti a me e ogni lingua renderà gloria a Dio." },
      { n: 12, t: "Quindi ciascuno di noi renderà conto di se stesso a Dio." }
    ]
  },
  {
    book: "Rm",
    name: "Romani",
    chapter: 15,
    verses: "5-7, 13",
    title: "Accogliersi gli uni gli altri come Cristo ha accolto noi",
    text: [
      { n: 5, t: "E il Dio della perseveranza e della consolazione vi conceda di avere gli uni verso gli altri gli stessi sentimenti, sull'esempio di Cristo Gesù," },
      { n: 6, t: "perché con un solo animo e una sola voce rendiate gloria a Dio, Padre del Signore nostro Gesù Cristo." },
      { n: 7, t: "Accoglietevi perciò gli uni gli altri come anche Cristo accolse voi, per la gloria di Dio." },
      { n: 13, t: "Il Dio della speranza vi riempia di ogni gioia e pace nella fede, perché abbondiate nella speranza per la virtù dello Spirito Santo." }
    ]
  },
  {
    book: "Rm",
    name: "Romani",
    chapter: 16,
    verses: "25-27",
    title: "Dossologia finale e gloria a Dio",
    text: [
      { n: 25, t: "A colui che ha il potere di confermarvi nel mio Vangelo e nell'annuncio di Gesù Cristo, secondo la rivelazione del mistero avvolto nel silenzio per secoli eterni," },
      { n: 26, t: "ma ora manifestato e annunciato mediante le Scritture profetiche, per ordine dell'eterno Dio, a tutte le genti perché obbediscano alla fede," },
      { n: 27, t: "a Dio, che solo è sapiente, per mezzo di Gesù Cristo, la gloria nei secoli. Amen." }
    ]
  },
        [
  // --- 1 CORINZI (Capitoli 1-16) ---
  {
    book: "1Cor",
    name: "1 Corinzi",
    chapter: 1,
    verses: "18-25",
    title: "Cristo sapienza e potenza di Dio",
    text: [
      { n: 18, t: "La parola della croce infatti è stoltezza per quelli che si perdono, ma per quelli che si salvano, ossia per noi, è potenza di Dio." },
      { n: 19, t: "Sta scritto infatti: Distruggerò la sapienza dei sapienti e annullerò l'intelligenza degli intelligenti." },
      { n: 20, t: "Dov'è il sapiente? Dov'è il dotto? Dov'è il sottile disputatore di questo mondo? Non ha forse Dio dimostrato stolta la sapienza del mondo?" },
      { n: 21, t: "Poiché infatti, nel disegno sapiente di Dio, il mondo con la sua sapienza non ha conosciuto Dio, è piaciuto a Dio salvare i credenti con la stoltezza della predicazione." },
      { n: 22, t: "Mentre i Giudei chiedono segni e i Greci cercano sapienza," },
      { n: 23, t: "noi invece annunciamo Cristo crocifisso: scandalo per i Giudei e stoltezza per i pagani;" },
      { n: 24, t: "ma per coloro che sono chiamati, sia Giudei sia Greci, Cristo è potenza di Dio e sapienza di Dio." },
      { n: 25, t: "Infatti ciò che è stoltezza di Dio è più sapiente degli uomini, e ciò che è debolezza di Dio è più forte degli uomini." }
    ]
  },
  {
    book: "1Cor",
    name: "1 Corinzi",
    chapter: 2,
    verses: "1-5",
    title: "La predicazione fondata sulla potenza di Dio",
    text: [
      { n: 1, t: "Anch'io, o fratelli, quando sono venuto tra voi, non mi sono presentato ad annunciarvi il mistero di Dio con l'eccellenza della parola o della sapienza." },
      { n: 2, t: "Ritenni infatti di non sapere altro mezzo a voi se non Gesù Cristo, e Cristo crocifisso." },
      { n: 3, t: "Io mi sono presentato a voi nella debolezza e con molto timore e trepidazione." },
      { n: 4, t: "La mia parola e la mia predicazione non si basarono su discorsi persuasivi di sapienza, ma sulla manifestazione dello Spirito e della sua potenza," },
      { n: 5, t: "perché la vostra fede non fosse fondata sulla sapienza umana, ma sulla potenza di Dio." }
    ]
  },
  {
    book: "1Cor",
    name: "1 Corinzi",
    chapter: 3,
    verses: "10-15",
    title: "L'unico fondamento che è Gesù Cristo",
    text: [
      { n: 10, t: "Secondo la grazia di Dio che mi è stata data, come un sapiente architetto io ho posto il fondamento; un altro poi vi costruisce sopra. Ma ciascuno stia attento a come costruisce." },
      { n: 11, t: "Infatti nessuno può porre un fondamento diverso da quello che già vi si trova, che è Gesù Cristo." },
      { n: 12, t: "Se poi uno costruisce sul fondamento con oro, argento, pietre preziose, legno, fieno, paglia," },
      { n: 13, t: "l'opera di ciascuno sarà ben visibile: la farà conoscere quel giorno che si manifesterà col fuoco, e il fuoco proverà la qualità dell'opera di ciascuno." },
      { n: 14, t: "Se l'opera che uno ha costruito sul fondamento resisterà, egli ne riceverà una ricompensa." },
      { n: 15, t: "Ma se l'opera di qualcuno finirà bruciata, egli ne subirà la perdita; tuttavia egli si salverà, però come attraverso il fuoco." }
    ]
  },
  {
    book: "1Cor",
    name: "1 Corinzi",
    chapter: 4,
    verses: "1-5",
    title: "I ministri di Cristo",
    text: [
      { n: 1, t: "Ognuno ci consideri come servi di Cristo e amministratori dei misteri di Dio." },
      { n: 2, t: "Ora, ciò che si richiede agli amministratori è che ciascuno risulti fedele." },
      { n: 3, t: "A me però importa pochissimo di essere giudicato da voi o da un tribunale umano; anzi, io non giudico neppure me stesso." },
      { n: 4, t: "Anche se non ho nulla da rimproverarmi, non per questo sono giustificato. Il mio giudice è il Signore!" },
      { n: 5, t: "Non vogliate perciò giudicare nulla prima del tempo, finché non venga il Signore. Egli metterà in luce ciò che è nascosto nelle tenebre e manifesterà le intenzioni dei cuori; allora ciascuno riceverà da Dio la lode." }
    ]
  },
  {
    book: "1Cor",
    name: "1 Corinzi",
    chapter: 5,
    verses: "6-8",
    title: "Togliere il lievito vecchio",
    text: [
      { n: 6, t: "Non è bello che voi vi vantiate! Non sapete che un po' di lievito fa fermentare tutta la pasta?" },
      { n: 7, t: "Togliete via il lievito vecchio, per essere una pasta nuova, poiché siete azzimi. E infatti Cristo, nostra Pasqua, è stato immolato!" },
      { n: 8, t: "Celebriamo dunque la festa non con il lievito vecchio, né con lievito di malizia e di perversità, ma con azzimi di sincerità e di verità." }
    ]
  },
  {
    book: "1Cor",
    name: "1 Corinzi",
    chapter: 6,
    verses: "18-20",
    title: "Il corpo tempio dello Spirito Santo",
    text: [
      { n: 18, t: "Fuggite l'impurità! Qualsiasi peccato l'uomo compia, è fuori del suo corpo; ma chi si dà all'impurità, pecca contro il proprio corpo." },
      { n: 19, t: "O non sapete che il vostro corpo è tempio dello Spirito Santo, che è in voi? Lo avete ricevuto da Dio e non appartenete a voi stessi." },
      { n: 20, t: "Infatti siete stati comprati a caro prezzo! Glorificate dunque Dio nel vostro corpo!" }
    ]
  },
  {
    book: "1Cor",
    name: "1 Corinzi",
    chapter: 7,
    verses: "29-31",
    title: "Il tempo si è fatto breve",
    text: [
      { n: 29, t: "Questo vi dico, fratelli: il tempo si è fatto breve; d'ora in poi, quelli che hanno moglie, vivano come se non l'avessero;" },
      { n: 30, t: "quelli che piangono, come se non piangessero; quelli che gioiscono, come se non gioissero; quelli che comprano, come se non possedessero;" },
      { n: 31, t: "quelli che usano del mondo, come se non ne usassero appieno: passa infatti la figura di questo mondo!" }
    ]
  },
  {
    book: "1Cor",
    name: "1 Corinzi",
    chapter: 8,
    verses: "1-6",
    title: "La conoscenza gonfia, la carità edifica",
    text: [
      { n: 1, t: "Quanto poi alle carni offerte agli idoli, sappiamo che tutti abbiamo conoscenza. La conoscenza gonfia, mentre la carità edifica." },
      { n: 2, t: "Se qualcuno crede di sapere qualcosa, non ha ancora imparato come bisogna sapere." },
      { n: 3, t: "Chi invece ama Dio, è da lui conosciuto." },
      { n: 4, t: "Quanto dunque al mangiare le carni immolate agli idoli, noi sappiamo che non esiste alcun idolo nel mondo e che non c'è altro Dio se non uno solo." },
      { n: 5, t: "E anche se vi sono cosiddetti dèi sia in cielo sia sulla terra, per noi c'è un solo Dio, il Padre, dal quale tutto proviene e noi siamo per lui;" },
      { n: 6, t: "e un solo Signore, Gesù Cristo, in virtù del quale sono tutte le cose e noi esistiamo per mezzo di lui." }
    ]
  },
  {
    book: "1Cor",
    name: "1 Corinzi",
    chapter: 9,
    verses: "22-27",
    title: "Farsi tutto a tutti e la corsa nello stadio",
    text: [
      { n: 22, t: "Mi sono fatto debole per i deboli, per guadagnare i deboli; mi sono fatto tutto a tutti, per salvare ad ogni costo qualcuno." },
      { n: 23, t: "Tutto io faccio per il Vangelo, per diventarne partecipe anch'io." },
      { n: 24, t: "Non sapete che, nelle corse allo stadio, tutti corrono, ma uno solo conquista il premio? Correte anche voi in modo da conquistarlo!" },
      { n: 25, t: "Ogni atleta è temperante in tutto; essi lo fanno per ottenere una corona corruttibile, noi invece una incorruttibile." },
      { n: 26, t: "Io dunque corro, ma non come chi è senza meta; faccio il pugilato, ma non come chi batte l'aria;" },
      { n: 27, t: "anzi trattengo duro il mio corpo e lo riduco in schiavitù, perché non succeda che, dopo aver predicato agli altri, io stesso venga squalificato." }
    ]
  },
  {
    book: "1Cor",
    name: "1 Corinzi",
    chapter: 10,
    verses: "12-13",
    title: "Fedeltà di Dio nelle tentazioni",
    text: [
      { n: 12, t: "Chi crede di stare in piedi, guardi di non cadere." },
      { n: 13, t: "Nessuna tentazione, superiore alle forze umane, vi ha sorpresi; Dio infatti è fedele e non permetterà che siate tentati oltre le vostre forze, ma con la tentazione vi darà anche la via d'uscita e la forza per poterla sostenere." }
    ]
  },
  {
    book: "1Cor",
    name: "1 Corinzi",
    chapter: 11,
    verses: "23-26",
    title: "L'istituzione dell'Eucaristia",
    text: [
      { n: 23, t: "Io, infatti, ho ricevuto dal Signore quello che a mia volta vi ho trasmesso: il Signore Gesù, nella notte in cui veniva tradito, prese del pane" },
      { n: 24, t: "e, dopo aver reso grazie, lo spezzò e disse: «Questo è il mio corpo, che è per voi; fate questo in memoria di me»." },
      { n: 25, t: "Allo stesso modo, dopo aver cenato, prese anche il calice, dicendo: «Questo calice è la nuova alleanza nel mio sangue; fate questo, ogni volta che ne bevete, in memoria di me»." },
      { n: 26, t: "Ogni volta infatti che mangiate questo pane e bevete al calice, voi annunciate la morte del Signore, finché egli venga." }
    ]
  },
  {
    book: "1Cor",
    name: "1 Corinzi",
    chapter: 12,
    verses: "12-18",
    title: "Un solo corpo e molte membra",
    text: [
      { n: 12, t: "Come infatti il corpo è uno solo e ha molte membra, e tutte le membra del corpo, pur essendo molte, sono un corpo solo, così anche il Cristo." },
      { n: 13, t: "Infatti noi tutti siamo stati battezzati in un solo Spirito per essere un solo corpo, Giudei o Greci, schiavi o liberi." },
      { n: 14, t: "Infatti il corpo non è formato da un membro solo, ma da molte membra." },
      { n: 15, t: "Se il piede dicesse: «Poiché non sono mano, non appartengo al corpo», non per questo non farebbe parte del corpo." },
      { n: 16, t: "E se l'orecchio dicesse: «Poiché non sono occhio, non appartengo al corpo», non per questo non farebbe parte del corpo." },
      { n: 17, t: "Se tutto il corpo fosse occhio, dove sarebbe l'udito? Se tutto fosse udito, dove sarebbe l'olfatto?" },
      { n: 18, t: "Ora invece Dio ha disposto le membra nel corpo, ciascuna di esse, come ha voluto." }
    ]
  },
  {
    book: "1Cor",
    name: "1 Corinzi",
    chapter: 13,
    verses: "1-8",
    title: "L'inno alla carità",
    text: [
      { n: 1, t: "Se parlassi le lingue degli uomini e degli angeli, ma non avessi la carità, sarei come bronzo che rimbomba o come cimbalo che strepita." },
      { n: 2, t: "E se avessi il dono della profezia, se conoscessi tutti i misteri e avessi tutta la conoscenza, se possedessi tanta fede da trasportare le montagne, ma non avessi la carità, non sarei nulla." },
      { n: 3, t: "E se anche dessi in cibo tutti i miei beni e consegnassi il mio corpo per averne gloria, ma non avessi la carità, a nulla mi servirebbe." },
      { n: 4, t: "La carità è magnanima, benevola è la carità; non è invidiosa, non si vanta, non si gonfia d'orgoglio," },
      { n: 5, t: "non manca di rispetto, non cerca il proprio interesse, non si adira, non tiene conto del male ricevuto," },
      { n: 6, t: "non gode dell'ingiustizia ma si rallegra della verità." },
      { n: 7, t: "Tutto copre, tutto crede, tutto spera, tutto sopporta." },
      { n: 8, t: "La carità non avrà mai fine." }
    ]
  },
  {
    book: "1Cor",
    name: "1 Corinzi",
    chapter: 14,
    verses: "1-5",
    title: "Ricercare la carità e aspirare ai doni dello Spirito",
    text: [
      { n: 1, t: "Ricercate la carità, aspirate pure ai doni dello Spirito, soprattutto alla profezia." },
      { n: 2, t: "Chi infatti parla con il dono delle lingue non parla agli uomini, ma a Dio; giacché nessuno lo comprende, mentre egli dice in spirito cose misteriose." },
      { n: 3, t: "Chi profetizza, invece, parla agli uomini per la loro edificazione, esortazione e consolazione." },
      { n: 4, t: "Chi parla con il dono delle lingue edifica se stesso, chi profetizza edifica l'assemblea." },
      { n: 5, t: "Vorrei che tutti parlaste con il dono delle lingue, ma molto più che profetizzaste." }
    ]
  },
  {
    book: "1Cor",
    name: "1 Corinzi",
    chapter: 15,
    verses: "54-58",
    title: "La vittoria sulla morte e fermezza nella fede",
    text: [
      { n: 54, t: "Quando poi questo corpo corruttibile si sarà vestito d'incorruttibilità e questo corpo mortale d'immortalità, si compirà la parola della Scrittura: La morte è stata inghiottita nella vittoria." },
      { n: 55, t: "Dov'è, o morte, la tua vittoria? Dov'è, o morte, il tuo pungiglione?" },
      { n: 56, t: "Il pungiglione della morte è il peccato e la forza del peccato è la Legge." },
      { n: 57, t: "Siano rese grazie a Dio, che ci dà la vittoria per mezzo del Signore nostro Gesù Cristo!" },
      { n: 58, t: "Perciò, fratelli miei carissimi, rimanete saldi, irremovibili, sovrabbondando sempre nell'opera del Signore, sapendo che la vostra fatica non è vana nel Signore." }
    ]
  },
  {
    book: "1Cor",
    name: "1 Corinzi",
    chapter: 16,
    verses: "13-14",
    title: "Esortazioni finali",
    text: [
      { n: 13, t: "Vigilate, state saldi nella fede, comportatevi da uomini, siate forti." },
      { n: 14, t: "Tutte le vostre cose siano fatte nella carità." }
    ]
  },

  // --- 2 CORINZI (Capitoli 1-13) ---
  {
    book: "2Cor",
    name: "2 Corinzi",
    chapter: 1,
    verses: "3-5",
    title: "Il Dio di ogni consolazione",
    text: [
      { n: 3, t: "Sia benedetto Dio, Padre del Signore nostro Gesù Cristo, Padre misericordioso e Dio di ogni consolazione!" },
      { n: 4, t: "Egli ci consola in ogni nostra tribolazione, perché possiamo anche noi consolare quelli che si trovano in qualsiasi afflizione con la consolazione con cui noi stessi siamo consolati da Dio." },
      { n: 5, t: "Come infatti abbondano le sofferenze di Cristo in noi, così per mezzo di Cristo abbonda anche la nostra consolazione." }
    ]
  },
  {
    book: "2Cor",
    name: "2 Corinzi",
    chapter: 2,
    verses: "14-16",
    title: "Il buon profumo di Cristo",
    text: [
      { n: 14, t: "Grazie siano rese a Dio, che ci fa sempre trionfare in Cristo e diffonde per mezzo nostro in ogni luogo il profumo della sua conoscenza!" },
      { n: 15, t: "Noi siamo infatti dinanzi a Dio il buon profumo di Cristo fra quelli che si salvano e fra quelli che si perdono:" },
      { n: 16, t: "per gli uni odore di morte per la morte, per gli altri odore di vita per la vita." }
    ]
  },
  {
    book: "2Cor",
    name: "2 Corinzi",
    chapter: 3,
    verses: "17-18",
    title: "Dov'è lo Spirito del Signore c'è libertà",
    text: [
      { n: 17, t: "Il Signore è lo Spirito e, dove c'è lo Spirito del Signore, c'è libertà." },
      { n: 18, t: "E noi tutti, a viso scoperto, riflettendo come in uno specchio la gloria del Signore, veniamo trasformati in quella medesima immagine, di gloria in gloria, secondo l'azione dello Spirito del Signore." }
    ]
  },
  {
    book: "2Cor",
    name: "2 Corinzi",
    chapter: 4,
    verses: "7-10",
    title: "Tesoro in vasi di terracotta",
    text: [
      { n: 7, t: "Noi abbiamo questo tesoro in vasi di terracotta, affinché appaia che questa straordinaria potenza appartiene a Dio e non viene da noi." },
      { n: 8, t: "Siamo infatti tribolati da ogni parte, ma non schiacciati; siamo sconvolti, ma non disperati;" },
      { n: 9, t: "perseguitati, ma non abbandonati; colpiti, ma non uccisi," },
      { n: 10, t: "portando sempre e dovunque nel nostro corpo la morte di Gesù, perché anche la vita di Gesù si manifesti nel nostro corpo." }
    ]
  },
  {
    book: "2Cor",
    name: "2 Corinzi",
    chapter: 5,
    verses: "17-20",
    title: "Nuova creazione in Cristo",
    text: [
      { n: 17, t: "Se uno è in Cristo, è una nuova creatura; le cose vecchie sono passate; ecco, ne sono nate di nuove." },
      { n: 18, t: "Tutto questo però viene da Dio, che ci ha riconciliati con sé mediante Cristo e ha affidato a noi il ministero della riconciliazione." },
      { n: 19, t: "Era Dio infatti che riconciliava a sé il mondo in Cristo, non imputando agli uomini le loro colpe." },
      { n: 20, t: "In nome di Cristo dunque siamo ambasciatori: per mezzo nostro è Dio stesso che esorta." }
    ]
  },
  {
    book: "2Cor",
    name: "2 Corinzi",
    chapter: 6,
    verses: "1-2",
    title: "Il momento favorevole e il giorno della salvezza",
    text: [
      { n: 1, t: "Poiché siamo suoi collaboratori, vi esortiamo a non accogliere invano la grazia di Dio." },
      { n: 2, t: "Egli dice infatti: Al momento favorevole ti ho esaudito e nel giorno della salvezza ti ho soccorso. Ecco ora il momento favorevole, ecco ora il giorno della salvezza!" }
    ]
  },
  {
    book: "2Cor",
    name: "2 Corinzi",
    chapter: 7,
    verses: "10-11",
    title: "La tristezza secondo Dio produce pentimento",
    text: [
      { n: 10, t: "La tristezza secondo Dio produce infatti un pentimento irrevocabile che porta alla salvezza, mentre la tristezza del mondo produce la morte." },
      { n: 11, t: "Vedi infatti quanta sollecitudine ha prodotto in voi proprio questo essere tristi secondo Dio." }
    ]
  },
  {
    book: "2Cor",
    name: "2 Corinzi",
    chapter: 8,
    verses: "9",
    title: "La povertà di Cristo che ci arricchisce",
    text: [
      { n: 9, t: "Conoscete infatti la grazia del Signore nostro Gesù Cristo: da ricco che era, si è fatto povero per voi, perché voi diventaste ricchi per mezzo della sua povertà." }
    ]
  },
  {
    book: "2Cor",
    name: "2 Corinzi",
    chapter: 9,
    verses: "6-8",
    title: "Dio ama chi dona con gioia",
    text: [
      { n: 6, t: "Tenete presente questo: chi semina scarsamente, scarsamente mieterà e chi semina con larghezza, con larghezza mieterà." },
      { n: 7, t: "Ciascuno dia secondo quanto ha deciso nel suo cuore, non con tristezza né per forza, perché Dio ama chi dona con gioia." },
      { n: 8, t: "Del resto, Dio ha potere di far abbondare in voi ogni grazia perché, avendo sempre il necessario in tutto, possiate compiere generosamente tutte le opere buone." }
    ]
  },
  {
    book: "2Cor",
    name: "2 Corinzi",
    chapter: 10,
    verses: "17-18",
    title: "Chi si vanta, si vanti nel Signore",
    text: [
      { n: 17, t: "Chi si vanta, si vanti nel Signore;" },
      { n: 18, t: "perché non colui che si raccomanda da sé è approvato, ma colui che il Signore raccomanda." }
    ]
  },
  {
    book: "2Cor",
    name: "2 Corinzi",
    chapter: 11,
    verses: "28-30",
    title: "La sollecitudine per tutte le Chiese",
    text: [
      { n: 28, t: "Oltre a tutto il resto, il mio affanno quotidiano, la sollecitudine per tutte le Chiese!" },
      { n: 29, t: "Chi è debole, che anch'io non sia debole? Chi riceve scandalo, che io non ne frema?" },
      { n: 30, t: "Se bisogna vantarsi, mi vanterò di ciò che mostra la mia debolezza." }
    ]
  },
  {
    book: "2Cor",
    name: "2 Corinzi",
    chapter: 12,
    verses: "8-10",
    title: "La mia grazia ti basta",
    text: [
      { n: 8, t: "A causa di questo tre volte ho pregato il Signore che lo allontanasse da me." },
      { n: 9, t: "Ed egli mi ha detto: «Ti basta la mia grazia; la forza infatti si manifesta appieno nella debolezza». Mi vanterò quindi ben volentieri delle mie debolezze, perché dimori in me la potenza di Cristo." },
      { n: 10, t: "Perciò mi compiaccio nelle mie debolezze, negli oltraggi, nelle difficoltà, nelle persecuzioni, nelle angosce sofferte per Cristo: quando sono debole, è allora che sono forte." }
    ]
  },
  {
    book: "2Cor",
    name: "2 Corinzi",
    chapter: 13,
    verses: "11-13",
    title: "Augurio finale e benedizione trinitaria",
    text: [
      { n: 11, t: "Per il resto, fratelli, siate lieti, tendete alla perfezione, fregatevi a vicenda, abbiate gli stessi sentimenti, vivete in pace e il Dio dell'amore e della pace sarà con voi." },
      { n: 12, t: "Salutatevi a vicenda con il bacio santo. Tutti i santi vi salutano." },
      { n: 13, t: "La grazia del Signore Gesù Cristo, l'amore di Dio e la comunione dello Spirito Santo siano con tutti voi." }
    ]
  },

  // --- GALATI (Capitoli 1-6) ---
  {
    book: "Gal",
    name: "Galati",
    chapter: 1,
    verses: "10-12",
    title: "L'origine divina del Vangelo di Paolo",
    text: [
      { n: 10, t: "Infatti, è il consenso degli uomini che cerco, oppure quello di Dio? O cerco di piacere agli uomini? Se cercassi ancora di piacere agli uomini, non sarei servitore di Cristo!" },
      { n: 11, t: "Vi dichiaro, fratelli, che il Vangelo da me annunciato non segue un modello umano;" },
      { n: 12, t: "infatti io non l'ho ricevuto né imparato da uomini, ma per rivelazione di Gesù Cristo." }
    ]
  },
  {
    book: "Gal",
    name: "Galati",
    chapter: 2,
    verses: "19-20",
    title: "Non sono più io che vivo, ma Cristo vive in me",
    text: [
      { n: 19, t: "In realtà mediante la Legge io sono morto alla Legge, affinché io viva per Dio. Sono stato crocifisso con Cristo," },
      { n: 20, t: "e non vivo più io, ma Cristo vive in me. E questa vita, che io vivo ora nella carne, la vivo nella fede del Figlio di Dio, che mi ha amato e ha consegnato se stesso per me." }
    ]
  },
  {
    book: "Gal",
    name: "Galati",
    chapter: 3,
    verses: "26-28",
    title: "Tutti uno in Cristo Gesù",
    text: [
      { n: 26, t: "Tutti voi infatti siete figli di Dio mediante la fede in Cristo Gesù," },
      { n: 27, t: "poiché quanti siete stati battezzati in Cristo vi siete rivestiti di Cristo." },
      { n: 28, t: "Non c'è Giudeo né Greco; non c'è schiavo né libero; non c'è maschio né femmina, perché tutti voi siete uno in Cristo Gesù." }
    ]
  },
  {
    book: "Gal",
    name: "Galati",
    chapter: 4,
    verses: "4-7",
    title: "Dio ha mandato lo Spirito del Figlio suo nei nostri cuori",
    text: [
      { n: 4, t: "Ma quando venne la pienezza del tempo, Dio mandò il suo Figlio, nato da donna, nato sotto la Legge," },
      { n: 5, t: "per riscattare quelli che erano sotto la Legge, perché ricevessimo l'adozione a figli." },
      { n: 6, t: "E che voi siate figli lo prova il fatto che Dio mandò nei nostri cuori lo Spirito del suo Figlio, il quale grida: «Abbà! Padre!»." },
      { n: 7, t: "Quindi non sei più schiavo, ma figlio; e se figlio, sei anche erede per grazia di Dio." }
    ]
  },
  {
    book: "Gal",
    name: "Galati",
    chapter: 5,
    verses: "22-25",
    title: "Il frutto dello Spirito",
    text: [
      { n: 22, t: "Il frutto dello Spirito invece è amore, gioia, pace, magnanimità, benevolenza, bontà, fedeltà, mitezza, dominio di sé;" },
      { n: 23, t: "contro queste cose non c'è Legge." },
      { n: 24, t: "Quelli che sono di Cristo Gesù hanno crocifisso la carne con le sue passioni e i suoi desideri." },
      { n: 25, t: "Se viviamo dello Spirito, camminiamo anche secondo lo Spirito." }
    ]
  },
  {
    book: "Gal",
    name: "Galati",
    chapter: 6,
    verses: "7-10",
    title: "Ciò che l'uomo semina, quello mieterà",
    text: [
      { n: 7, t: "Non vi ingannate: Dio non si lascia beffare. Quello che l'uomo avrà seminato, quello mieterà." },
      { n: 8, t: "Chi semina nella sua carne, dalla carne mieterà corruzione; chi semina nello Spirito, dallo Spirito mieterà vita eterna." },
      { n: 9, t: "E non stanchiamoci di fare il bene; se infatti non desistiamo, a suo tempo mieteremo." },
      { n: 10, t: "Dunque, poiché ne abbiamo l'opportunità, facciamo del bene a tutti, soprattutto ai fratelli nella fede." }
    ]
  },

  // --- EFESINI (Capitoli 1-6) ---
  {
    book: "Ef",
    name: "Efesini",
    chapter: 1,
    verses: "3-6",
    title: "Benedizione per l'elezione in Cristo",
    text: [
      { n: 3, t: "Benedetto Dio, Padre del Signore nostro Gesù Cristo, che ci ha benedetti con ogni benedizione spirituale nei cieli in Cristo." },
      { n: 4, t: "In lui ci ha scelti prima della creazione del mondo per essere santi e immacolati di fronte a lui nella carità," },
      { n: 5, t: "predestinandoci a essere per lui figli adottivi per mezzo di Gesù Cristo, secondo il disegno d'amore della sua volontà," },
      { n: 6, t: "a lode della gloria della sua grazia, con la quale ci ha arricchiti nel Figlio amato." }
    ]
  },
  {
    book: "Ef",
    name: "Efesini",
    chapter: 2,
    verses: "4-10",
    title: "Salvati per grazia mediante la fede",
    text: [
      { n: 4, t: "Ma Dio, ricco di misericordia, per il grande amore con il quale ci ha amato," },
      { n: 5, t: "da morti che eravamo per le colpe, ci ha fatti rivivere con Cristo: per grazia siete salvati." },
      { n: 6, t: "Con lui ci ha anche risuscitati e ci ha fatti sedere nei cieli, in Cristo Gesù," },
      { n: 7, t: "per mostrare nei secoli futuri la straordinaria ricchezza della sua grazia." },
      { n: 8, t: "Per grazia infatti siete salvati mediante la fede; e ciò non viene da voi, ma è dono di Dio;" },
      { n: 9, t: "né viene dalle opere, perché nessuno possa vantarsene." },
      { n: 10, t: "Siamo infatti opera sua, creati in Cristo Gesù per le opere buone." }
    ]
  },
  {
    book: "Ef",
    name: "Efesini",
    chapter: 3,
    verses: "16-19",
    title: "Conoscere l'amore di Cristo che supera ogni conoscenza",
    text: [
      { n: 16, t: "Che Dio vi conceda, secondo la ricchezza della sua gloria, di essere potentemente rafforzati nell'uomo interiore mediante il suo Spirito." },
      { n: 17, t: "E che il Cristo abiti per mezzo della fede nei vostri cuori, e così, radicati e fondati nella carità," },
      { n: 18, t: "siate resi capaci di comprendere con tutti i santi quale sia l'ampiezza, la lunghezza, l'altezza e la profondità," },
      { n: 19, t: "e di conoscere l'amore di Cristo che supera ogni conoscenza, perché siate ricolmi di tutta la pienezza di Dio." }
    ]
  },
  {
    book: "Ef",
    name: "Efesini",
    chapter: 4,
    verses: "1-6",
    title: "Un solo Signore, una sola fede, un solo battesimo",
    text: [
      { n: 1, t: "Vi esorto dunque io, il prigioniero nel Signore: comportatevi in modo degno della chiamata che avete ricevuto," },
      { n: 2, t: "con ogni umiltà, dolcezza e magnanimità, sopportandovi a vicenda nell'amore," },
      { n: 3, t: "avendo cura di conservare l'unità dello spirito per mezzo del vincolo della pace." },
      { n: 4, t: "Un solo corpo e un solo spirito, come una sola è la speranza alla quale siete stati chiamati, quella della vostra vocazione;" },
      { n: 5, t: "un solo Signore, una sola fede, un solo battesimo." },
      { n: 6, t: "Un solo Dio e Padre di tutti, che è al di sopra di tutti, opera per mezzo di tutti ed è presente in tutti." }
    ]
  },
  {
    book: "Ef",
    name: "Efesini",
    chapter: 5,
    verses: "1-2",
    title: "Camminare nella carità sull'esempio di Cristo",
    text: [
      { n: 1, t: "Fatevi dunque imitatori di Dio, quali figli amatissimi," },
      { n: 2, t: "e camminate nella carità, nel modo in cui anche Cristo ci ha amato e ha consegnato se stesso per noi, offrendosi a Dio in sacrificio di soave odore." }
    ]
  },
  {
    book: "Ef",
    name: "Efesini",
    chapter: 6,
    verses: "10-13",
    title: "L'armatura di Dio",
    text: [
      { n: 10, t: "Per il resto, rafforzatevi nel Signore e nell'efficacia della sua potenza." },
      { n: 11, t: "Rivestitevi dell'armatura di Dio per poter resistere alle insidie del diavolo." },
      { n: 12, t: "La nostra battaglia infatti non è contro la carne e il sangue, ma contro i Principati e le Potenze, contro i dominatori di questo mondo tenebroso." },
      { n: 13, t: "Prendete dunque l'armatura di Dio, perché possiate resistere nel giorno malvagio e restare saldi dopo aver superato tutte le prove." }
    ]
  },

  // --- FILIPPESI (Capitoli 1-4) ---
  {
    book: "Fil",
    name: "Filippesi",
    chapter: 1,
    verses: "21-23",
    title: "Per me il vivere è Cristo e il morire un guadagno",
    text: [
      { n: 21, t: "Per me infatti il vivere è Cristo e il morire un guadagno." },
      { n: 22, t: "Ma se il vivere nella carne comporta frutto per la mia opera, non so davvero che cosa scegliere." },
      { n: 23, t: "Sono stretto infatti fra queste due cose: ho il desiderio di lasciare questo corpo per essere con Cristo, il che sarebbe assai meglio." }
    ]
  },
  {
    book: "Fil",
    name: "Filippesi",
    chapter: 2,
    verses: "5-11",
    title: "Inno all'incarnazione e all'esaltazione di Cristo",
    text: [
      { n: 5, t: "Abbiate in voi gli stessi sentimenti di Cristo Gesù:" },
      { n: 6, t: "egli, pur essendo nella condizione di Dio, non ritenne un privilegio l'essere uguale a Dio," },
      { n: 7, t: "ma svuotò se stesso prendendo una condizione di servo, diventando simile agli uomini." },
      { n: 8, t: "Divenuto simile agli uomini, umiliò se stesso facendosi obbediente fino alla morte e a una morte di croce." },
      { n: 9, t: "Per questo Dio lo esaltò e gli donò il nome che è al di sopra di ogni nome," },
      { n: 10, t: "perché nel nome di Gesù ogni ginocchio si pieghi nei cieli, sulla terra e sotto terra," },
      { n: 11, t: "e ogni lingua proclami: «Gesù Cristo è il Signore!», a gloria di Dio Padre." }
    ]
  },
  {
    book: "Fil",
    name: "Filippesi",
    chapter: 3,
    verses: "13-14",
    title: "Dimenticare il passato e correre verso la meta",
    text: [
      { n: 13, t: "Fratelli, io non ritengo ancora di averla conquistata. Uno cosa faccio: dimenticando ciò che sta dietro e proteso verso ciò che sta davanti," },
      { n: 14, t: "corro verso la meta, al premio che Dio ci chiama a ricevere lassù, in Cristo Gesù." }
    ]
  },
  {
    book: "Fil",
    name: "Filippesi",
    chapter: 4,
    verses: "4-7",
    title: "Siate sempre lieti nel Signore",
    text: [
      { n: 4, t: "Siate sempre lieti nel Signore, ve lo ripeto: siate lieti." },
      { n: 5, t: "La vostra affabilità sia nota a tutti gli uomini. Il Signore è vicino!" },
      { n: 6, t: "Non angustiatevi per nulla, ma in ogni circostanza fate presenti a Dio le vostre richieste con preghiere, suppliche e rendimenti di grazie." },
      { n: 7, t: "E la pace di Dio, che supera ogni intelligenza, custodirà i vostri cuori e le vostre menti in Cristo Gesù." }
    ]
  },

  // --- COLOSSESI (Capitoli 1-4) ---
  {
    book: "Col",
    name: "Colossesi",
    chapter: 1,
    verses: "15-18",
    title: "Inno al primato di Cristo",
    text: [
      { n: 15, t: "Egli è immagine del Dio invisibile, primogenito di tutta la creazione," },
      { n: 16, t: "perché in lui sono state create tutte le cose nei cieli e sulla terra, quelle visibili e quelle invisibili." },
      { n: 17, t: "Egli è prima di tutte le cose e tutte in lui sussistono." },
      { n: 18, t: "Egli è anche il capo del corpo, della Chiesa. Egli è principio, primogenito di quelli che risorgono dai morti." }
    ]
  },
  {
    book: "Col",
    name: "Colossesi",
    chapter: 2,
    verses: "6-7",
    title: "Camminare radicati e fondati in Cristo",
    text: [
      { n: 6, t: "Come dunque avete accolto Cristo Gesù, il Signore, camminate in lui," },
      { n: 7, t: "radicati e costruiti su di lui, saldi nella fede come vi è stato insegnato, sovrabbondando nell'azione di grazie." }
    ]
  },
  {
    book: "Col",
    name: "Colossesi",
    chapter: 3,
    verses: "12-15",
    title: "Rivestirsi di misericordia e di carità",
    text: [
      { n: 12, t: "Scelti da Dio, santi e amati, rivestitevi dunque di sentimenti di tenerezza, di bontà, di umiltà, di mansuetudine, di magnanimità," },
      { n: 13, t: "sopportandovi a vicenda e perdonandovi gli uni gli altri. Come il Signore vi ha perdonato, così fate anche voi." },
      { n: 14, t: "Mettete poi al di sopra di tutte queste cose la carità, che conserva la perfezione." },
      { n: 15, t: "E la pace di Cristo regni nei vostri cuori, perché ad essa siete stati chiamati in un solo corpo." }
    ]
  },
  {
    book: "Col",
    name: "Colossesi",
    chapter: 4,
    verses: "2-6",
    title: "Perseverare nella preghiera e agire con sapienza",
    text: [
      { n: 2, t: "Perseverate nella preghiera, vegliando in essa con rendimento di grazie." },
      { n: 3, t: "Pregate anche per noi, perché Dio ci apra la porta della Parola per annunciare il mistero di Cristo." },
      { n: 4, t: "Pregate perché io possa farlo conoscere, parlandone come devo." },
      { n: 5, t: "Comportatevi con sapienza verso quelli di fuori, sfruttando ogni occasione." },
      { n: 6, t: "Il vostro parlare sia sempre con grazia, condito di sale, per sapere come rispondere a ciascuno." }
    ]
  },

  // --- 1 TESSALONICESI (Capitoli 1-5) ---
  {
    book: "1Ts",
    name: "1 Tessalonicesi",
    chapter: 1,
    verses: "2-3",
    title: "Rendimento di grazie per la fede dei Tessalonicesi",
    text: [
      { n: 2, t: "Rendiamo sempre grazie a Dio per tutti voi, ricordandovi nelle nostre preghiere," },
      { n: 3, t: "tenendo continuamente presenti l'operosità della vostra fede, la fatica della vostra carità e la fermezza della vostra speranza nel Signore nostro Gesù Cristo, davanti a Dio e Padre nostro." }
    ]
  },
  {
    book: "1Ts",
    name: "1 Tessalonicesi",
    chapter: 2,
    verses: "7-8",
    title: "L'affetto materno dell'Apostolo",
    text: [
      { n: 7, t: "Siamo stati amorevoli in mezzo a voi, come una madre che ha cura dei propri figli." },
      { n: 8, t: "Così, affezionati a voi, avremmo desiderato trasmettervi non solo il Vangelo di Dio, ma la nostra stessa vita, perché ci eravate diventati cari." }
    ]
  },
  {
    book: "1Ts",
    name: "1 Tessalonicesi",
    chapter: 3,
    verses: "12-13",
    title: "Crescere nell'amore reciproco",
    text: [
      { n: 12, t: "Il Signore vi faccia crescere e sovrabbondare nell'amore fra voi e verso tutti, come è il nostro amore verso di voi," },
      { n: 13, t: "per rendere saldi i vostri cuori e irreprensibili nella santità, davanti a Dio e Padre nostro, alla venuta del Signore nostro Gesù con tutti i suoi santi." }
    ]
  },
  {
    book: "1Ts",
    name: "1 Tessalonicesi",
    chapter: 4,
    verses: "13-14",
    title: "La speranza cristiana nella risurrezione dei morti",
    text: [
      { n: 13, t: "Non vogliamo, fratelli, lasciarvi nell'ignoranza a proposito di quelli che sono morti, perché non siate tristi come gli altri che non hanno speranza." },
      { n: 14, t: "Se infatti crediamo che Gesù è morto e risorto, così anche Dio, per mezzo di Gesù, radunerà con lui coloro che sono morti." }
    ]
  },
  {
    book: "1Ts",
    name: "1 Tessalonicesi",
    chapter: 5,
    verses: "16-22",
    title: "Esortazioni alla gioia e alla preghiera continua",
    text: [
      { n: 16, t: "Siate sempre lieti," },
      { n: 17, t: "pregate continuamente," },
      { n: 18, t: "in ogni cosa rendete grazie: questa infatti è volontà di Dio in Cristo Gesù verso di voi." },
      { n: 19, t: "Non spegnete lo Spirito," },
      { n: 20, t: "non disprezzate le profezie." },
      { n: 21, t: "Vagliate ogni cosa e tenete ciò che è buono." },
      { n: 22, t: "Astenetevi da ogni specie di male." }
    ]
  },

  // --- 2 TESSALONICESI (Capitoli 1-3) ---
  {
    book: "2Ts",
    name: "2 Tessalonicesi",
    chapter: 1,
    verses: "3-4",
    title: "Crescita della fede e fermezza nelle persecuzioni",
    text: [
      { n: 3, t: "Dobbiamo sempre rendere grazie a Dio per voi, fratelli, com'è giusto, perché la vostra fede cresce rigogliosa e l'amore di ciascuno di voi verso gli altri aumenta sempre più," },
      { n: 4, t: "sicché noi stessi ci vantiamo di voi nelle Chiese di Dio, per la vostra costanza e la vostra fede in tutte le persecuzioni e tribolazioni che sopportate." }
    ]
  },
  {
    book: "2Ts",
    name: "2 Tessalonicesi",
    chapter: 2,
    verses: "15-17",
    title: "Rimanere saldi nelle tradizioni ricevute",
    text: [
      { n: 15, t: "Perciò, fratelli, state saldi e mantenete le tradizioni che avete imparato sia dalla nostra parola sia dalla nostra lettera." },
      { n: 16, t: "E lo stesso Signore nostro Gesù Cristo e Dio, Padre nostro, che ci ha amati e ci ha dato, nella sua grazia, una consolazione eterna e una buona speranza," },
      { n: 17, t: "consolo i vostri cuori e li confermi in ogni opera e parola di bene." }
    ]
  },
  {
    book: "2Ts",
    name: "2 Tessalonicesi",
    chapter: 3,
    verses: "10-13",
    title: "Chi non vuole lavorare, neppure mangi",
    text: [
      { n: 10, t: "E infatti quando eravamo presso di voi, vi davamo questa regola: chi non vuole lavorare, neppure mangi." },
      { n: 11, t: "Sentiamo infatti che alcuni fra voi vivono una vita disordinata, senza fare nulla e facendo i curiosi." },
      { n: 12, t: "A questi tali ordiniamo e raccomandiamo nel Signore Gesù Cristo di mangiare il proprio pane lavorando in pace." },
      { n: 13, t: "Voi, fratelli, non stancatevi di fare il bene." }
    ]
  },

  // --- 1 TIMOTEO (Capitoli 1-6) ---
  {
    book: "1Tm",
    name: "1 Timoteo",
    chapter: 1,
    verses: "15-17",
    title: "Gesù Cristo è venuto nel mondo per salvare i peccatori",
    text: [
      { n: 15, t: "Questa parola è sicura e degna di essere pienamente accolta: Cristo Gesù è venuto nel mondo per salvare i peccatori, dei quali io sono il primo." },
      { n: 16, t: "Ma appunto per questo ho ottenuto misericordia, perché Gesù Cristo volesse dimostrare in me per primo tutta la sua magnanimità." },
      { n: 17, t: "Al Re dei secoli, incorruttibile, invisibile, unico Dio, onore e gloria nei secoli dei secoli. Amen!" }
    ]
  },
  {
    book: "1Tm",
    name: "1 Timoteo",
    chapter: 2,
    verses: "1-4",
    title: "Preghiera per tutti gli uomini",
    text: [
      { n: 1, t: "Raccomando dunque, prima di tutto, che si facciano domande, preghiere, intercessioni e ringraziamenti per tutti gli uomini," },
      { n: 2, t: "per i re e per tutti quelli che stanno al potere, perché possiamo trascorrere una vita calma e tranquilla, dignitosa e dedicata a Dio." },
      { n: 3, t: "Questa è una cosa bella e gradita al cospetto di Dio, nostro salvatore," },
      { n: 4, t: "il quale vuole che tutti gli uomini siano salvati e giungano alla conoscenza della verità." }
    ]
  },
  {
    book: "1Tm",
    name: "1 Timoteo",
    chapter: 3,
    verses: "14-16",
    title: "La casa di Dio e il mistero della pietà",
    text: [
      { n: 14, t: "Ti scrivo queste cose, sperando di venire presto da te;" },
      { n: 15, t: "se dovessi tardare, voglio che tu sappia come comportarti nella casa di Dio, che è la Chiesa del Dio vivente, colonna e sostegno della verità." },
      { n: 16, t: "E senza dubbio grande è il mistero della pietà: Egli si è manifestato nella carne, è stato giustificato nello Spirito, è apparso agli angeli, è stato annunciato alle nazioni, è stato creduto nel mondo, è stato assunto nella gloria." }
    ]
  },
  {
    book: "1Tm",
    name: "1 Timoteo",
    chapter: 4,
    verses: "12-16",
    title: "Nessuno disprezzi la tua giovane età",
    text: [
      { n: 12, t: "Nessuno disprezzi la tua giovane età, ma sii di esempio ai credenti nelle parole, nel comportamento, nella carità, nella fede, nella purità." },
      { n: 13, t: "Finché non arrivo, dedicati alla lettura, all'esortazione, all'insegnamento." },
      { n: 14, t: "Non trascurare il dono spirituale che è in te e che ti è stato dato mediante una profezia con l'imposizione delle mani da parte dei presbiteri." },
      { n: 15, t: "Abbi cura di queste cose, dedicati ad esse interamente, perché il tuo progresso sia manifesto a tutti." },
      { n: 16, t: "Vagla su te stesso e sul tuo insegnamento; sii perseverante in queste cose: facendo così, salverai te stesso e coloro che ti ascoltano." }
    ]
  },
  {
    book: "1Tm",
    name: "1 Timoteo",
    chapter: 5,
    verses: "1-2",
    title: "Come trattare le varie categorie di credenti",
    text: [
      { n: 1, t: "Non rimproverare duramente un anziano, ma esortalo come un padre; i giovani come fratelli;" },
      { n: 2, t: "le donne anziane come madri, le più giovani come sorelle, in tutta purezza." }
    ]
  },
  {
    book: "1Tm",
    name: "1 Timoteo",
    chapter: 6,
    verses: "11-12",
    title: "Combatti il buon combattimento della fede",
    text: [
      { n: 11, t: "Tu, uomo di Dio, evita queste cose; tendi invece alla giustizia, alla pietà, alla fede, alla carità, alla pazienza, alla mitezza." },
      { n: 12, t: "Combatti il buon combattimento della fede, afferra la vita eterna alla quale sei stato chiamato e per la quale hai fatto la tua bella professione di fede." }
    ]
  },

  // --- 2 TIMOTEO (Capitoli 1-4) ---
  {
    book: "2Tm",
    name: "2 Timoteo",
    chapter: 1,
    verses: "6-8",
    title: "Riavvivare il dono di Dio",
    text: [
      { n: 6, t: "Per questo motivo ti richiamo alla memoria di riavvivare il dono di Dio, che è in te mediante l'imposizione delle mie mani." },
      { n: 7, t: "Dio infatti non ci ha dato uno spirito di timidezza, ma di forza, di carità e di prudenza." },
      { n: 8, t: "Non vergognarti dunque della testimonianza da rendere al Signore nostro, né di me, che sono in carcere per lui; ma, con la forza di Dio, soffri con me per il Vangelo." }
    ]
  },
  {
    book: "2Tm",
    name: "2 Timoteo",
    chapter: 2,
    verses: "11-13",
    title: "Se moriamo con lui, con lui anche vivremo",
    text: [
      { n: 11, t: "Questa parola è sicura: Se moriamo con lui, con lui anche vivremo;" },
      { n: 12, t: "se perseveriamo, con lui anche regneremo; se lo rinneghiamo, lui pure ci rinnegherà;" },
      { n: 13, t: "se siamo infedeli, lui rimane fedele, perché non può rinnegare se stesso." }
    ]
  },
  {
    book: "2Tm",
    name: "2 Timoteo",
    chapter: 3,
    verses: "16-17",
    title: "L'utilità di ogni Scrittura ispirata da Dio",
    text: [
      { n: 16, t: "Tutta la Scrittura, ispirata da Dio, è anche utile per insegnare, per convincere, per correggere e per educare alla giustizia," },
      { n: 17, t: "perché l'uomo di Dio sia completo, ben preparato per ogni opera buona." }
    ]
  },
  {
    book: "2Tm",
    name: "2 Timoteo",
    chapter: 4,
    verses: "6-8",
    title: "Ho combattuto la buona battaglia",
    text: [
      { n: 6, t: "Quanto a me, il mio sangue sta già per essere versato in libagione ed è giunto il momento che io sciolga le vele." },
      { n: 7, t: "Ho combattuto la buona battaglia, ho terminato la corsa, ho conservato la fede." },
      { n: 8, t: "Ora mi resta soltanto la corona di giustizia che il Signore, il giudice giusto, mi consegnerà in quel giorno." }
    ]
  },

  // --- TITO (Capitoli 1-3) ---
  {
    book: "Tit",
    name: "Tito",
    chapter: 1,
    verses: "15-16",
    title: "Tutto è puro per i puri",
    text: [
      { n: 15, t: "Tutto è puro per i puri; ma per i contaminati e gli infedeli nulla è puro: perfino la loro mente e la loro coscienza sono contaminate." },
      { n: 16, t: "Dichiarano di conoscere Dio, ma lo rinnegano con le opere, essendo abominevoli, disobbedienti e incapaci di qualsiasi opera buona." }
    ]
  },
  {
    book: "Tit",
    name: "Tito",
    chapter: 2,
    verses: "11-14",
    title: "La grazia di Dio che porta salvezza",
    text: [
      { n: 11, t: "È apparsa infatti la grazia di Dio, che porta salvezza a tutti gli uomini" },
      { n: 12, t: "e ci insegna a rinnegare l'impietà e i desideri mondani e a vivere in questo mondo con sobrietà, con giustizia e con pietà," },
      { n: 13, t: "nell'attesa della beata speranza e della manifestazione della gloria del nostro grande Dio e salvatore Gesù Cristo." },
      { n: 14, t: "Egli ha dato se stesso per noi, per riscattarci da ogni iniquità e purificare per sé un popolo che gli appartenga." }
    ]
  },
  {
    book: "Tit",
    name: "Tito",
    chapter: 3,
    verses: "4-7",
    title: "La bontà di Dio e il lavacro della rigenerazione",
    text: [
      { n: 4, t: "Quando però si sono manifestati la bontà di Dio, salvatore nostro, e il suo amore per gli uomini," },
      { n: 5, t: "egli ci ha salvati, non per opere giuste da noi compiute, ma per la sua misericordia, con un lavacro di rigenerazione e di rinnovamento nello Spirito Santo," },
      { n: 6, t: "che ha effuso su di noi abbondantemente per mezzo di Gesù Cristo, salvatore nostro," },
      { n: 7, t: "affinché, giustificati per la sua grazia, diventassimo, nella speranza, eredi della vita eterna." }
    ]
  },

  // --- FILEMONE (Capitolo unico) ---
  {
    book: "Flm",
    name: "Filemone",
    chapter: 1,
    verses: "15-17",
    title: "Accogli Onesimo come fratello carissimo",
    text: [
      { n: 15, t: "Forse per questo è stato separato da te per un momento: perché tu lo riavessi per sempre;" },
      { n: 16, t: "non più come schiavo, ma molto più che schiavo, come fratello carissimo, specialmente a me, ma quanto più a te, sia come uomo sia come fratello nel Signore!" },
      { n: 17, t: "Se dunque tu mi consideri amico, accoglilo come me stesso." }
    ]
  },

  // --- EBREI (Capitoli 1-13) ---
  {
    book: "Eb",
    name: "Ebrei",
    chapter: 1,
    verses: "1-3",
    title: "Dio ha parlato a noi per mezzo del Figlio",
    text: [
      { n: 1, t: "Dio, che molte volte e in diversi modi nei tempi antichi aveva parlato ai padri per mezzo dei profeti," },
      { n: 2, t: "in questi giorni, che sono gli ultimi, ha parlato a noi per mezzo del Figlio, che ha costituito erede di tutte le cose e per mezzo del quale ha fatto anche il mondo." },
      { n: 3, t: "Egli è irradiazione della sua gloria e impronta della sua sostanza, e tutto sostiene con la sua parola potente." }
    ]
  },
  {
    book: "Eb",
    name: "Ebrei",
    chapter: 2,
    verses: "14-18",
    title: "Gesù reso simile ai suoi fratelli",
    text: [
      { n: 14, t: "Poiché dunque i figli hanno in comune il sangue e la carne, anch'egli allo stesso modo ne è divenuto partecipe, per ridurre all'impotenza mediante la morte colui che della morte ha il potere, cioè il diavolo," },
      { n: 15, t: "e liberare quelli che, per timore della morte, erano soggetti a schiavitù per tutta la vita." },
      { n: 16, t: "Egli infatti non si prende cura degli angeli, ma della stirpe di Abramo si prende cura." },
      { n: 17, t: "Perciò doveva rendersi in tutto simile ai fratelli, per diventare un sommo sacerdote misericordioso e degno di fede nelle cose che riguardano Dio." },
      { n: 18, t: "Infatti, per essere stato egli stesso provato ed aver sofferto, è in grado di venire in aiuto a quelli che subiscono la prova." }
    ]
  },
  {
    book: "Eb",
    name: "Ebrei",
    chapter: 3,
    verses: "12-14",
    title: "Esortarsi a vicenda ogni giorno",
    text: [
      { n: 12, t: "Guardate, fratelli, che non si trovi in nessuno di voi un cuore cattivo e incredulo che si allontani dal Dio vivente." },
      { n: 13, t: "Esortatevi piuttosto a vicenda ogni giorno, finché dura questo «oggi», perché nessuno di voi si indurisca, sedotto dal peccato." },
      { n: 14, t: "Siamo diventati infatti partecipi di Cristo, a condizione di mantenere salda fino alla fine la fiducia iniziale." }
    ]
  },
  {
    book: "Eb",
    name: "Ebrei",
    chapter: 4,
    verses: "12-16",
    title: "La Parola di Dio è viva ed efficace",
    text: [
      { n: 12, t: "Infatti la parola di Dio è viva, efficace e più tagliente di ogni spada a doppio taglio; essa penetra fino al punto di divisione dell'anima e dello spirito." },
      { n: 13, t: "Non v'è creatura alcuna che possa nascondersi davanti a lui, ma tutto è nudo e scoperto agli occhi di colui al quale noi dobbiamo rendere conto." },
      { n: 14, t: "Poiché dunque abbiamo un grande sommo sacerdote che ha attraversato i cieli, Gesù il Figlio di Dio, manteniamo salda la professione della fede." },
      { n: 15, t: "Infatti non abbiamo un sommo sacerdote che non sappia prendere parte alle nostre debolezze: egli stesso è stato messo alla prova in ogni cosa come noi, escluso il peccato." },
      { n: 16, t: "Accostiamoci dunque con piena fiducia al trono della grazia per ricevere misericordia e trovare grazia, ed essere aiutati al momento opportuno." }
    ]
  },
  {
    book: "Eb",
    name: "Ebrei",
    chapter: 5,
    verses: "7-10",
    title: "Gesù, autore di salvezza eterna",
    text: [
      { n: 7, t: "Nei giorni della sua vita terrena egli offrì preghiere e suppliche, con forti grida e lacrime, a Dio che poteva salvarlo da morte e, per la sua piena sottomissione, fu esaudito." },
      { n: 8, t: "Pur essendo Figlio, imparò l'obbedienza da ciò che patì" },
      { n: 9, t: "e, reso perfetto, divenne causa di salvezza eterna per tutti coloro che gli obbediscono," },
      { n: 10, t: "essendo stato proclamato da Dio sommo sacerdote secondo l'ordine di Melchìsedek." }
    ]
  },
  {
    book: "Eb",
    name: "Ebrei",
    chapter: 6,
    verses: "18-20",
    title: "L'ancora della speranza",
    text: [
      { n: 18, t: "Affinché ci servissero di forte incoraggiamento noi che abbiamo cercato rifugio nell'afferrare saldamente la speranza che ci è posta davanti." },
      { n: 19, t: "In essa infatti abbiamo come un'ancora della nostra vita, sicura e salda, la quale penetra fino nell'interno del velo," },
      { n: 20, t: "dove Gesù è entrato per noi come precursore, diventato sommo sacerdote per sempre secondo l'ordine di Melchìsedek." }
    ]
  },
  {
    book: "Eb",
    name: "Ebrei",
    chapter: 7,
    verses: "24-27",
    title: "Gesù, sacerdote per sempre",
    text: [
      { n: 24, t: "Egli invece, poiché resta per sempre, possiede un sacerdozio che non tramonta." },
      { n: 25, t: "Perciò può salvare perfettamente quelli che per mezzo di lui si avvicinano a Dio: egli infatti è sempre vivo per intercedere a loro favore." },
      { n: 26, t: "Tale era infatti il sommo sacerdote che ci occorreva: santo, innocente, senza macchia, separato dai peccatori ed elevato sopra i cieli." },
      { n: 27, t: "Egli non ha bisogno, come i sommi sacerdoti, di offrire ogni giorno sacrifici, prima per i propri peccati e poi per quelli del popolo: egli ha fatto questo una volta per tutte, offrendo se stesso." }
    ]
  },
  {
    book: "Eb",
    name: "Ebrei",
    chapter: 8,
    verses: "10-12",
    title: "La nuova alleanza",
    text: [
      { n: 10, t: "«Questa è l'alleanza che stringerò con la casa d'Israele dopo quei giorni, dice il Signore: porrò le mie leggi nella loro mente e le imprimerò nei loro cuori; sarò il loro Dio ed essi saranno il mio popolo»." },
      { n: 11, t: "«Nessuno istruirà più il suo concittadino, né alcuno il proprio fratello, dicendo: 'Conosci il Signore!'. Perché tutti mi conosceranno, dal più piccolo al più grande di loro»." },
      { n: 12, t: "«Perché sarò clemente verso le loro iniquità e non mi ricorderò più dei loro peccati»." }
    ]
  },
  {
    book: "Eb",
    name: "Ebrei",
    chapter: 9,
    verses: "11-14",
    title: "Il sangue di Cristo purifica le coscienze",
    text: [
      { n: 11, t: "Cristo invece, venuto come sommo sacerdote dei beni futuri, attraverso una tenda più grande e più perfetta, non costruita da mano d'uomo," },
      { n: 12, t: "entrò una volta per sempre nel santuario, non mediante il sangue di capri e di vitelli, ma in virtù del proprio sangue, ottenendo così una redenzione eterna." },
      { n: 13, t: "Infatti, se il sangue dei capri e dei tori e la cenere di una giovenca purificano quelli che sono contaminati, santificandoli nella purezza della carne," },
      { n: 14, t: "quanto più il sangue di Cristo, che con uno Spirito eterno offrì se stesso senza macchia a Dio, purificherà la nostra coscienza dalle opere morte, per servire il Dio vivente!" }
    ]
  },
  {
    book: "Eb",
    name: "Ebrei",
    chapter: 10,
    verses: "22-25",
    title: "Mantenere salda la professione della speranza",
    text: [
      { n: 22, t: "Accostiamoci con cuore sincero, nella pienezza della fede, con i cuori purificati da ogni cattiva coscienza e il corpo lavato con acqua pura." },
      { n: 23, t: "Manteniamo senza vacillare la professione della nostra speranza, perché è fedele colui che ha fatto la promessa." },
      { n: 24, t: "Prestiamo attenzione gli uni agli altri, per stimolarci a vicenda nella carità e nelle opere buone," },
      { n: 25, t: "senza disertare le nostre riunioni, come alcuni hanno l'abitudine di fare, ma esortandoci a vicenda; tanto più che vedete avvicinarsi il giorno." }
    ]
  },
  {
    book: "Eb",
    name: "Ebrei",
    chapter: 11,
    verses: "1-6",
    title: "La natura e il valore della Fede",
    text: [
      { n: 1, t: "La fede è fondamento delle cose che si sperano e prova di quelle che non si vedono." },
      { n: 2, t: "Per mezzo di questa fede gli antichi hanno ricevuto buona testimonianza." },
      { n: 3, t: "Per fede noi comprendiamo che i mondi furono formati dalla parola di Dio, sicché l'visibile ha preso origine da cose non visibili." },
      { n: 4, t: "Per fede Abele offrì a Dio un sacrificio migliore di quello di Caino e in base ad essa fu dichiarato giusto." },
      { n: 5, t: "Per fede Enoc fu rapito, in modo da non vedere la morte." },
      { n: 6, t: "Senza la fede è impossibile essergli graditi; chi infatti si avvicina a Dio, deve credere che egli esiste e che ricompensa coloro che lo cercano." }
    ]
  },
  {
    book: "Eb",
    name: "Ebrei",
    chapter: 12,
    verses: "1-3",
    title: "Tenere lo sguardo fisso su Gesù",
    text: [
      { n: 1, t: "Anche noi dunque, circondati da tale moltitudine di testimoni, deposto tutto ciò che è di peso e il peccato che ci assedia, corriamo con perseveranza nella gara che ci sta davanti," },
      { n: 2, t: "tenendo fisso lo sguardo su Gesù, colui che dà origine alla fede e la porta a compimento." },
      { n: 3, t: "Pensate attentamente a colui che ha sopportato contro di sé una così grande ostilità dei peccatori, perché non vi stanchiate perdendovi d'animo." }
    ]
  },
  {
    book: "Eb",
    name: "Ebrei",
    chapter: 13,
    verses: "1-3, 8",
    title: "L'amore fraterno e l'immutabilità di Gesù Cristo",
    text: [
      { n: 1, t: "Perseveri l'amore fraterno." },
      { n: 2, t: "Non dimenticate l'ospitalità; alcuni, praticandola, senza saperlo hanno ospitato angeli." },
      { n: 3, t: "Ricordatevi dei carcerati, come se foste loro compagni di carcere, e di quelli che subiscono maltrattamenti, poiché anche voi avete un corpo." },
      { n: 8, t: "Gesù Cristo è lo stesso ieri e oggi e per sempre!" }
    ]
  },
          [
  // --- LETTERA DI GIACOMO (Capitoli 1-5) ---
  {
    book: "Giac",
    name: "Giacomo",
    chapter: 1,
    verses: "2-8",
    title: "La Fede nelle prove e la Sapienza",
    text: [
      { n: 2, t: "Considerate perfetta letizia, miei fratelli, quando subite ogni sorta di prove," },
      { n: 3, t: "sapendo che la prova della vostra fede produce la pazienza." },
      { n: 4, t: "E la pazienza completi l'opera sua, perché siate perfetti e integri, senza mancare di nulla." },
      { n: 5, t: "Se qualcuno di voi è privo di sapienza, la chieda a Dio, che dà a tutti liberamente e senza rinfacciare, e gli sarà data." },
      { n: 6, t: "La chieda però con fede, senza esitare, perché chi esita somiglia all'onda del mare mosso dal vento e spinto qua e là." },
      { n: 7, t: "Un uomo simile non pensi di ricevere qualcosa dal Signore:" },
      { n: 8, t: "è un uomo dall'animo doppio, instabile in tutte le sue vie." }
    ]
  },
  {
    book: "Giac",
    name: "Giacomo",
    chapter: 2,
    verses: "14-20",
    title: "La fede senza le opere è morta",
    text: [
      { n: 14, t: "A che serve, fratelli miei, se uno dice di avere fede, ma non ha le opere? Può forse quella fede salvarlo?" },
      { n: 15, t: "Se un fratello o una sorella sono senza vestiti e sprovvisti del cibo quotidiano" },
      { n: 16, t: "e uno di voi dice loro: «Andatevene in pace, riscaldatevi e saziatevi», ma non dà loro il necessario per il corpo, a che serve?" },
      { n: 17, t: "Così anche la fede: se non ha le opere, è morta in se stessa." },
      { n: 18, t: "Al contrario uno potrebbe dire: «Tu hai la fede e io ho le opere; mostrami la tua fede senza le opere, e io con le mie opere ti mostrerò la mia fede»." },
      { n: 19, t: "Tu credi che c'è un solo Dio? Fai bene; anche i demoni lo credono e tremano!" },
      { n: 20, t: "Vuoi capire, o uomo insensato, che la fede senza le opere è senza valore?" }
    ]
  },
  {
    book: "Giac",
    name: "Giacomo",
    chapter: 3,
    verses: "13-18",
    title: "La sapienza che viene dall'alto",
    text: [
      { n: 13, t: "Chi è saggio e intelligente tra voi? Mostri con la buona condotta le sue opere ispirate a mansuetudine e sapienza." },
      { n: 14, t: "Ma se avete nel vostro cuore gelosia amara e spirito di contesa, non vantatevi e non dite menzogna contro la verità." },
      { n: 15, t: "Questa non è la sapienza che viene dall'alto, ma è terrena, materiale, diabolica;" },
      { n: 16, t: "perché dove c'è gelosia e spirito di contesa, c'è disordine e ogni sorta di cattive azioni." },
      { n: 17, t: "La sapienza invece che viene dall'alto anzitutto è pura, poi pacifica, mite, arrendevole, piena di misericordia e di buoni frutti, imparziale e senza ipocrisia." },
      { n: 18, t: "Un frutto di giustizia viene seminato nella pace per coloro che fanno opera di pace." }
    ]
  },
  {
    book: "Giac",
    name: "Giacomo",
    chapter: 4,
    verses: "7-12",
    title: "Sottomissione a Dio e umiltà",
    text: [
      { n: 7, t: "Sottomettetevi dunque a Dio; resistete al diavolo, ed egli fuggirà da voi." },
      { n: 8, t: "Avvicinatevi a Dio ed egli si avvicinerà a voi. Purificate le vostre mani, o peccatori, e santificate i vostri cuori, o animi doppi." },
      { n: 9, t: "Riconoscete la vostra miseria, fate lutto e piangete; le vostre risa si cambino in lutto e la vostra gioia in tristezza." },
      { n: 10, t: "Umiliatevi davanti al Signore ed egli vi esalterà." },
      { n: 11, t: "Non dite male gli uni degli altri, fratelli. Chi dice male di un fratello o giudica il suo fratello, dice male della Legge e giudica la Legge." },
      { n: 12, t: "Uno solo è legislatore e giudice, Colui che può salvare e mandare in rovina; ma tu chi sei, che giudichi il tuo prossimo?" }
    ]
  },
  {
    book: "Giac",
    name: "Giacomo",
    chapter: 5,
    verses: "13-18",
    title: "La preghiera della fede",
    text: [
      { n: 13, t: "Chi tra voi è nel dolore, preghi; chi è nella gioia, canti inni di lode." },
      { n: 14, t: "Chi è malato, chiami presso di sé i presbiteri della Chiesa e pregino su di lui, ungendolo con olio nel nome del Signore." },
      { n: 15, t: "E la preghiera fatta con fede salverà il malato: il Signore lo solleverà e, se ha commesso peccati, gli saranno perdonati." },
      { n: 16, t: "Confessate quindi i vostri peccati gli uni agli altri e pregate gli uni per gli altri per essere guariti. Molto potente è la preghiera retta del giusto fatta con insistenza." },
      { n: 17, t: "Elia era un uomo della nostra stessa natura: pregò intensamente che non piovesse, e non piovve sulla terra per tre anni e sei mesi." },
      { n: 18, t: "Poi pregò di nuovo e il cielo diede la pioggia e la terra produsse il suo frutto." }
    ]
  },

  // --- PRIMA LETTERA DI PIETRO (Capitoli 1-5) ---
  {
    book: "1Pt",
    name: "1 Pietro",
    chapter: 1,
    verses: "3-9",
    title: "Una speranza viva",
    text: [
      { n: 3, t: "Sia benedetto Dio e Padre del Signore nostro Gesù Cristo, che nella sua grande misericordia ci ha rigenerati a una speranza viva," },
      { n: 4, t: "per un'eredità che non si corrompe, non si macchia e non marcisce, conservata nei cieli per voi," },
      { n: 5, t: "che dalla potenza di Dio siete custoditi mediante la fede, per la salvezza che sta per essere rivelata nell'ultimo tempo." },
      { n: 6, t: "Perciò siete ricolmi di gioia, anche se ora dovete essere, per un po' di tempo, afflitti da varie prove," },
      { n: 7, t: "affinché il valore provato della vostra fede sia motivo di lode, di gloria e di onore al momento della manifestazione di Gesù Cristo." },
      { n: 8, t: "Voi lo amate, pur senza averlo visto; e ora, senza vederlo, credete in lui e esultate di una gioia indicibile e gloriosa," },
      { n: 9, t: "mentre raggiungete la meta della vostra fede: la salvezza delle anime." }
    ]
  },
  {
    book: "1Pt",
    name: "1 Pietro",
    chapter: 2,
    verses: "4-10",
    title: "Pietre vive e popolo sacerdotale",
    text: [
      { n: 4, t: "Avvicinandovi a lui, pietra viva, rifiutata dagli uomini ma scelta e preziosa davanti a Dio," },
      { n: 5, t: "quali pietre vive siete costruiti anche voi come edificio spirituale, per un sacerdozio santo." },
      { n: 6, t: "Si legge infatti nella Scrittura: Ecco, io pongo in Sion una pietra d'angolo, scelta, preziosa, e chi crede in essa non resterà deluso." },
      { n: 7, t: "Onore dunque a voi che credete; ma per quelli che non credono: La pietra che i costruttori hanno scartato è diventata la pietra d'angolo" },
      { n: 8, t: "e sasso d'inciampo e pietra di scandalo. Essi vi inciampano perché non obbediscono alla Parola." },
      { n: 9, t: "Voi invece siete una stirpe eletta, un sacerdozio regale, una nazione santa, un popolo che Dio si è acquistato." },
      { n: 10, t: "Voi che un tempo non eravate un popolo, ora siete il popolo di Dio; voi che eravate senza misericordia, ora avete ottenuto misericordia." }
    ]
  },
  {
    book: "1Pt",
    name: "1 Pietro",
    chapter: 3,
    verses: "8-13",
    title: "Amore fraterno e benedizione",
    text: [
      { n: 8, t: "Infine, siate tutti concordi, partecipi delle gioie e dei dolori degli altri, animati da affetto fraterno, misericordiosi, umili." },
      { n: 9, t: "Non ripagate il male con il male né l'insulto con l'insulto; al contrario, rispondete augurando il bene." },
      { n: 10, t: "Perché chi vuole amare la vita e vedere giorni felici, trattienga la lingua dal male e le labbra da parole d'inganno;" },
      { n: 11, t: "eviti il male e faccia il bene, cerchi la pace e la persegua," },
      { n: 12, t: "perché gli occhi del Signore sono sopra i giusti e i suoi orecchi sono attenti alle loro preghiere." },
      { n: 13, t: "E chi vi potrà fare del male, se sarete ferventi nel bene?" }
    ]
  },
  {
    book: "1Pt",
    name: "1 Pietro",
    chapter: 4,
    verses: "7-11",
    title: "Buoni amministratori della grazia di Dio",
    text: [
      { n: 7, t: "La fine di tutte le cose è vicina. Siate dunque moderati e sobri, per dedicarvi alla preghiera." },
      { n: 8, t: "Soprattutto conservate tra voi una carità fervente, perché la carità copre una moltitudine di peccati." },
      { n: 9, t: "Praticate l'ospitalità gli uni verso gli altri senza mormorare." },
      { n: 10, t: "Ciascuno, secondo il dono ricevuto, lo metta a servizio degli altri, come buoni amministratori della multiforme grazia di Dio." },
      { n: 11, t: "Chi parla, parli come con parole di Dio; chi presta servizio, lo faccia con la forza fornita da Dio, perché in ogni cosa sia glorificato Dio per mezzo di Gesù Cristo." }
    ]
  },
  {
    book: "1Pt",
    name: "1 Pietro",
    chapter: 5,
    verses: "6-11",
    title: "Sobrietà e vigilanza",
    text: [
      { n: 6, t: "Umiliatevi dunque sotto la potente mano di Dio, affinché vi esalti al tempo opportuno," },
      { n: 7, t: "riversando su di lui ogni vostra preoccupazione, perché egli ha cura di voi." },
      { n: 8, t: "Siate sobri, vegliate. Il vostro nemico, il diavolo, come leone ruggente va in giro cercando chi divorare." },
      { n: 9, t: "Resistetegli saldi nella fede, sapendo che le medesime sofferenze colpiscono i vostri fratelli sparsi per il mondo." },
      { n: 10, t: "E il Dio di ogni grazia, che vi ha chiamati alla sua gloria eterna in Cristo, egli stesso vi ristabilirà e vi confermerà." },
      { n: 11, t: "A lui la potenza nei secoli. Amen!" }
    ]
  },

  // --- SECONDA LETTERA DI PIETRO (Capitoli 1-3) ---
  {
    book: "2Pt",
    name: "2 Pietro",
    chapter: 1,
    verses: "5-11",
    title: "I frutti della vocazione cristiana",
    text: [
      { n: 5, t: "Mettete ogni impegno per aggiungere alla vostra fede la virtù, alla virtù la conoscenza," },
      { n: 6, t: "alla conoscenza la temperanza, alla temperanza la pazienza, alla pazienza la pietà," },
      { n: 7, t: "alla pietà l'affetto fraterno, all'affetto fraterno l'amore." },
      { n: 8, t: "Se queste cose sono in voi e abbondano, non vi renderanno pigri né infruttuosi per la conoscenza del Signore nostro Gesù Cristo." },
      { n: 9, t: "Chi invece non possiede queste cose è cieco, miope, dimentico di essere stato purificato dai suoi vecchi peccati." },
      { n: 10, t: "Quindi, fratelli, cercate di rendere sempre più salda la vostra vocazione e la vostra elezione." },
      { n: 11, t: "In questo modo vi sarà ampiamente aperto l'ingresso nel regno eterno del Signore nostro e Salvatore Gesù Cristo." }
    ]
  },
  {
    book: "2Pt",
    name: "2 Pietro",
    chapter: 2,
    verses: "1-5",
    title: "Monito contro i falsi maestri",
    text: [
      { n: 1, t: "Ci sono stati anche falsi profeti tra il popolo, come ci saranno anche tra voi falsi maestri." },
      { n: 2, t: "Molti seguiranno le loro dissolutezze e per causa loro la via della verità sarà diffamata." },
      { n: 3, t: "Nella loro avidità vi sfrutteranno con parole fittizie; ma la loro condanna già da tempo è all'opera." },
      { n: 4, t: "Dio infatti non risparmiò gli angeli che avevano peccato, ma li precipitò negli abissi delle tenebre." },
      { n: 5, t: "Non risparmiò il mondo antico, ma con altre sette persone salvò Noè, banditore di giustizia." }
    ]
  },
  {
    book: "2Pt",
    name: "2 Pietro",
    chapter: 3,
    verses: "8-13",
    title: "Attesa dei nuovi cieli e nuova terra",
    text: [
      { n: 8, t: "Una cosa sola non vi sia nascosta, carissimi: per il Signore un solo giorno è come mille anni e mille anni come un solo giorno." },
      { n: 9, t: "Il Signore non ritarda nel compiere la sua promessa, ma usa pazienza verso di voi, non volendo che alcuno perisca." },
      { n: 10, t: "Il giorno del Signore verrà come un ladro; allora i cieli spariranno con grande fragore." },
      { n: 11, t: "Dato che tutte queste cose dovranno dissolversi, quali non dovete essere voi nella santità della condotta!" },
      { n: 12, t: "attendendo e affrettando la venuta del giorno di Dio." },
      { n: 13, t: "Noi infatti, secondo la sua promessa, aspettiamo nuovi cieli e una nuova terra, nei quali abita la giustizia." }
    ]
  },

  // --- PRIMA LETTERA DI GIOVANNI (Capitoli 1-5) ---
  {
    book: "1Gv",
    name: "1 Giovanni",
    chapter: 1,
    verses: "5-9",
    title: "Camminare nella luce",
    text: [
      { n: 5, t: "Dio è luce e in lui non ci sono tenebre." },
      { n: 6, t: "Se diciamo di essere in comunione con lui e camminiamo nelle tenebre, siamo bugiardi." },
      { n: 7, t: "Ma se camminiamo nella luce, siamo in comunione gli uni con gli altri, e il sangue di Gesù ci purifica da ogni peccato." },
      { n: 8, t: "Se diciamo di essere senza peccato, inganniamo noi stessi e la verità non è in noi." },
      { n: 9, t: "Se confessiamo i nostri peccati, egli è fedele e giusto da perdonarci i peccati e purificarci da ogni iniquità." }
    ]
  },
  {
    book: "1Gv",
    name: "1 Giovanni",
    chapter: 2,
    verses: "15-17",
    title: "Non amare il mondo",
    text: [
      { n: 15, t: "Non amate il mondo, né le cose che sono nel mondo! Se uno ama il mondo, l'amore del Padre non è in lui;" },
      { n: 16, t: "perché tutto ciò che è nel mondo non viene dal Padre, ma viene dal mondo." },
      { n: 17, t: "E il mondo passa con la sua concupiscenza; ma chi fa la volontà di Dio rimane in eterno!" }
    ]
  },
  {
    book: "1Gv",
    name: "1 Giovanni",
    chapter: 3,
    verses: "1-5",
    title: "Figli di Dio",
    text: [
      { n: 1, t: "Vedete quale grande amore ci ha dato il Padre per essere chiamati figli di Dio, e lo siamo realmente!" },
      { n: 2, t: "Carissimi, noi fin d'ora siamo figli di Dio, ma ciò che saremo non è stato ancora rivelato." },
      { n: 3, t: "Chiunque ha questa speranza in lui, purifica se stesso, come egli è puro." },
      { n: 4, t: "Chiunque commette il peccato, commette anche iniquità, perché il peccato è iniquità." },
      { n: 5, t: "Voi sapete che egli è apparso per togliere i peccati e che in lui non v'è peccato." }
    ]
  },
  {
    book: "1Gv",
    name: "1 Giovanni",
    chapter: 4,
    verses: "7-12",
    title: "Dio è Amore",
    text: [
      { n: 7, t: "Carissimi, amiamoci gli uni gli altri, perché l'amore è da Dio: chiunque ama è nato da Dio e conosce Dio." },
      { n: 8, t: "Chi non ama non ha conosciuto Dio, perché Dio è amore." },
      { n: 9, t: "In questo si è manifestato l'amore di Dio in noi: Dio ha mandato il suo Figlio unigenito nel mondo." },
      { n: 10, t: "In questo sta l'amore: non siamo stati noi ad amare Dio, ma è lui che ha amato noi." },
      { n: 11, t: "Carissimi, se Dio ci ha amati così, anche noi dobbiamo amarci gli uni gli altri." },
      { n: 12, t: "Nessuno mai ha visto Dio; se ci amiamo gli uni gli altri, Dio rimane in noi e l'amore di lui è perfetto in noi." }
    ]
  },
  {
    book: "1Gv",
    name: "1 Giovanni",
    chapter: 5,
    verses: "1-5",
    title: "La fede che vince il mondo",
    text: [
      { n: 1, t: "Chiunque crede che Gesù è il Cristo, è nato da Dio." },
      { n: 2, t: "In questo conosciamo di amare i figli di Dio: quando amiamo Dio e osserviamo i suoi comandamenti." },
      { n: 3, t: "In questo infatti consiste l'amore di Dio: nell'osservare i suoi comandamenti; e i suoi comandamenti non sono gravosi." },
      { n: 4, t: "Poiché tutto ciò che è nato da Dio vince il mondo; e questa è la vittoria che ha vinto il mondo: la nostra fede." },
      { n: 5, t: "Chi è che vince il mondo se non chi crede che Gesù è il Figlio di Dio?" }
    ]
  },

  // --- SECONDA E TERZA LETTERA DI GIOVANNI, GIUDA ---
  {
    book: "2Gv",
    name: "2 Giovanni",
    chapter: 1,
    verses: "4-8",
    title: "Camminare nell'amore e nella verità",
    text: [
      { n: 4, t: "Mi sono molto rallegrato di aver trovato alcuni tra i tuoi figli che camminano nella verità." },
      { n: 5, t: "E ora ti prego: amiamoci gli uni gli altri." },
      { n: 6, t: "E in questo sta l'amore: nel camminare secondo i suoi comandamenti." },
      { n: 7, t: "Sono apparsi infatti nel mondo molti seduttori, i quali non riconoscono Gesù Cristo venuto nella carne." },
      { n: 8, t: "Fate attenzione a voi stessi per non perdere quello che avete conseguito!" }
    ]
  },
  {
    book: "3Gv",
    name: "3 Giovanni",
    chapter: 1,
    verses: "2-6",
    title: "L'ospitalità fraterna",
    text: [
      { n: 2, t: "Carissimo, auguro che in tutto tu stia bene e goda buona salute, come sta bene la tua anima." },
      { n: 3, t: "Mi sono rallegrato molto quando sono giunti alcuni fratelli e hanno reso testimonianza alla tua verità." },
      { n: 4, t: "Non ho gioia più grande di questa: sapere che i miei figli camminano nella verità." },
      { n: 5, t: "Carissimo, tu ti comporti fedelmente in tutto ciò che fai per i fratelli, sebbene forestieri." },
      { n: 6, t: "Essi hanno reso testimonianza della tua carità davanti alla Chiesa." }
    ]
  },
  {
    book: "Giuda",
    name: "Giuda",
    chapter: 1,
    verses: "20-25",
    title: "Custodirsi nell'amore",
    text: [
      { n: 20, t: "Ma voi, carissimi, edificate voi stessi sopra la vostra santissima fede, pregate nello Spirito Santo," },
      { n: 21, t: "custoditevi nell'amore di Dio, attendendo la misericordia del Signore nostro Gesù Cristo per la vita eterna." },
      { n: 22, t: "Siate misericordiosi verso quelli che sono indecisi;" },
      { n: 23, t: "altri salvateli strappandoli dal fuoco; di altri abbiate compassione con timore." },
      { n: 24, t: "A colui che può custodirvi da ogni caduta e farvi comparire davanti alla sua gloria irreprensibili," },
      { n: 25, t: "all'unico Dio, nostro Salvatore, per mezzo di Gesù Cristo nostro Signore, gloria, maestà, forza e potere nei secoli. Amen!" }
    ]
  },

  // --- APOCALISSE DI GIOVANNI (Capitoli 1-22 completi) ---
  {
    book: "Ap",
    name: "Apocalisse",
    chapter: 1,
    verses: "4-8",
    title: "L'Alfa e l'Omega",
    text: [
      { n: 4, t: "Giovanni, alle sette Chiese che sono in Asia: grazia a voi e pace da Colui che è, che era e che viene." },
      { n: 5, t: "E da Gesù Cristo, il testimone fedele, il primogenito dei morti e il sovrano dei re della terra." },
      { n: 6, t: "Che ha fatto di noi un regno, sacerdoti per il suo Dio e Padre, a lui la gloria e la potenza nei secoli." },
      { n: 7, t: "Ecco, viene con le nubi e ogni occhio lo vedrà, anche quelli che lo trafissero." },
      { n: 8, t: "Sono io l'Alfa e l'Omega, dice il Signore Dio, Colui che è, che era e che viene, l'Onnipotente!" }
    ]
  },
  {
    book: "Ap",
    name: "Apocalisse",
    chapter: 2,
    verses: "1-5",
    title: "Lettera alla Chiesa di Efeso",
    text: [
      { n: 1, t: "All'angelo della Chiesa che è a Efeso scrivi: Così parla Colui che tiene le sette stelle nella sua destra." },
      { n: 2, t: "Conosco le tue opere, la tua fatica e la tua costanza." },
      { n: 3, t: "Sei costante e hai sopportato molto per il mio nome, senza stancarti." },
      { n: 4, t: "Ho però da rimproverarti che hai abbandonato il tuo primo amore." },
      { n: 5, t: "Ricorda dunque da dove sei caduto, convertiti e compi le opere di prima." }
    ]
  },
  {
    book: "Ap",
    name: "Apocalisse",
    chapter: 3,
    verses: "19-22",
    title: "«Sto alla porta e busso»",
    text: [
      { n: 19, t: "Io, tutti quelli che amo, li riprendo e li castigo. Sii dunque zelante e convertiti." },
      { n: 20, t: "Ecco: sto alla porta e busso. Se qualcuno ascolta la mia voce e mi apre la porta, io entrerò da lui, cenerò con lui ed egli con me." },
      { n: 21, t: "Chi vince, lo farò sedere con me sul mio trono, come anch'io ho vinto e siedo con il Padre mio sul suo trono." },
      { n: 22, t: "Chi ha orecchi, ascolti ciò che lo Spirito dice alle Chiese»." }
    ]
  },
  {
    book: "Ap",
    name: "Apocalisse",
    chapter: 4,
    verses: "8-11",
    title: "La liturgia celeste",
    text: [
      { n: 8, t: "I quattro esseri viventi non cessano giorno e notte di dire: «Santo, Santo, Santo è il Signore Dio, l'Onnipotente!»." },
      { n: 9, t: "E ogni volta che questi esseri viventi rendono gloria a Colui che siede sul trono," },
      { n: 10, t: "i ventiquattro anziani si prostrano davanti a Colui che siede sul trono e adorano Colui che vive nei secoli," },
      { n: 11, t: "«Tu sei degno, o Signore e Dio nostro, di ricevere la gloria, l'onore e la potenza, perché tu hai creato tutte le cose»." }
    ]
  },
  {
    book: "Ap",
    name: "Apocalisse",
    chapter: 5,
    verses: "6-10",
    title: "L'Agnello immolato",
    text: [
      { n: 6, t: "E vidi, in mezzo al trono, un Agnello in piedi, come immolato." },
      { n: 7, t: "Giunse e prese il libro dalla destra di Colui che siede sul trono." },
      { n: 8, t: "E quando ebbe preso il libro, i quattro esseri viventi e i ventiquattro anziani si prostrarono davanti all'Agnello." },
      { n: 9, t: "E cantavano un canto nuovo: «Tu sei degno di prendere il libro e di aprirne i sigilli, perché sei stato immolato»." },
      { n: 10, t: "«E hai fatto di loro, per il nostro Dio, un regno e sacerdoti, e regneranno sulla terra»." }
    ]
  },
  {
    book: "Ap",
    name: "Apocalisse",
    chapter: 6,
    verses: "1-5",
    title: "I primi quattro sigilli",
    text: [
      { n: 1, t: "E vidi quando l'Agnello aprì uno dei sette sigilli, e udii uno dei quattro esseri viventi che diceva: «Vieni»." },
      { n: 2, t: "Ed ecco, mi apparve un cavallo bianco; colui che lo cavalcava aveva un arco e gli fu data una corona." },
      { n: 3, t: "Quando l'Agnello aprì il secondo sigillo, udii il secondo essere vivente che diceva: «Vieni»." },
      { n: 4, t: "Allora uscì un altro cavallo, rosso fuoco. A colui che lo cavalcava fu dato di togliere la pace dalla terra." },
      { n: 5, t: "Quando aprì il terzo sigillo, udii il terzo essere vivente che diceva: «Vieni». Ed ecco un cavallo nero." }
    ]
  },
  {
    book: "Ap",
    name: "Apocalisse",
    chapter: 7,
    verses: "9-14",
    title: "La moltitudine immensa dei salvati",
    text: [
      { n: 9, t: "Dopo queste cose vidi: ecco, una moltitudine immensa, di ogni nazione, tribù, popolo e lingua." },
      { n: 10, t: "E gridavano a gran voce: «La salvezza appartiene al nostro Dio seduto sul trono e all'Agnello!»." },
      { n: 11, t: "E tutti gli angeli stavano attorno al trono e si prostrarono a terra." },
      { n: 12, t: "Dicendo: «Amen! Lode, gloria, sapienza, azione di grazie, onore, potenza e forza al nostro Dio nei secoli dei secoli»." },
      { n: 13, t: "Uno degli anziani mi disse: «Questi, che sono vestiti di bianco, chi sono e da dove vengono?»." },
      { n: 14, t: "Gli risposi: «Signore mio, tu lo sai». Ed egli mi disse: «Sono quelli che vengono dalla grande tribolazione»." }
    ]
  },
  {
    book: "Ap",
    name: "Apocalisse",
    chapter: 8,
    verses: "1-5",
    title: "Il settimo sigillo e le preghiere dei santi",
    text: [
      { n: 1, t: "Quando l'Agnello aprì il settimo sigillo, si fece silenzio in cielo per circa mezz'ora." },
      { n: 2, t: "E vidi i sette angeli che stanno davanti a Dio, e furono date loro sette trombe." },
      { n: 3, t: "Poi venne un altro angelo e si fermò presso l'altare, tenendo un incensiere d'oro." },
      { n: 4, t: "E dalla mano dell'angelo il fumo degli aromi salì davanti a Dio, insieme alle preghiere dei santi." },
      { n: 5, t: "Poi l'angelo prese l'incensiere, lo riempì del fuoco dell'altare e lo gettò sulla terra: vi furono tuoni, voci, fulmini e un terremoto." }
    ]
  },
  {
    book: "Ap",
    name: "Apocalisse",
    chapter: 9,
    verses: "1-5",
    title: "La quinta tromba",
    text: [
      { n: 1, t: "Il quinto angelo suonò la tromba e vidi un astro caduto dal cielo sulla terra. Gli fu data la chiave del pozzo dell'Abisso;" },
      { n: 2, t: "egli aprì il pozzo dell'Abisso e dal pozzo salì un fumo come il fumo di una grande fornace." },
      { n: 3, t: "Dal fumo uscirono cavallette sulla terra e fu dato loro un potere pari a quello degli scorpioni della terra." },
      { n: 4, t: "E fu detto loro di non danneggiare l'erba della terra, ma soltanto gli uomini che non avessero il sigillo di Dio sulla fronte." },
      { n: 5, t: "E fu concesso loro non di ucciderli, ma di tormentarli per cinque mesi." }
    ]
  },
  {
    book: "Ap",
    name: "Apocalisse",
    chapter: 10,
    verses: "8-11",
    title: "Il libretto dolce e amaro",
    text: [
      { n: 8, t: "La voce che avevo udito dal cielo mi parlò di nuovo: «Va', prendi il libro aperto dalla mano dell'angelo»." },
      { n: 9, t: "Mi avvicinai all'angelo e lo pregai di darmi il piccolo libro. Ed egli mi disse: «Prendilo e divoralo; ti riempirà di amarezza le viscere, ma in bocca ti sarà dolce come il miele»." },
      { n: 10, t: "Presi quel piccolo libro dalla mano dell'angelo e lo divorai; in bocca mi fu dolce come il miele, ma come l'ebbi inghiottito, le mie viscere si riempirono di amarezza." },
      { n: 11, t: "Allora mi fu detto: «Devi profetizzare ancora su molti popoli, nazioni, lingue e re»." }
    ]
  },
  {
    book: "Ap",
    name: "Apocalisse",
    chapter: 11,
    verses: "15-18",
    title: "La settima tromba e il Regno del Signore",
    text: [
      { n: 15, t: "Il settimo angelo suonò la tromba e risuonarono nel cielo voci potenti che dicevano: «Il regno del mondo appartiene al Signore nostro e al suo Cristo ed egli regnerà nei secoli dei secoli»." },
      { n: 16, t: "Allora i ventiquattro anziani seduti sui loro troni al cospetto di Dio si prostrarono con la faccia a terra e adorarono Dio" },
      { n: 17, t: "dicendo: «Ti rendiamo grazie, Signore Dio Onnipotente, che sei e che eri, perché hai preso in mano il tuo grande potere e hai stabilito il tuo regno»." },
      { n: 18, t: "«Le nazioni si erano adirate, ma è giunta l'ora della tua ira e il tempo di giudicare i morti»." }
    ]
  },
  {
    book: "Ap",
    name: "Apocalisse",
    chapter: 12,
    verses: "1-6",
    title: "La Donna e il Drago",
    text: [
      { n: 1, t: "Un segno grandioso apparve nel cielo: una donna vestita di sole, con la luna sotto i suoi piedi e una corona di dodici stelle." },
      { n: 2, t: "Era incinta, e gridava per le doglie e il travaglio del parto." },
      { n: 3, t: "Allora apparve un altro segno nel cielo: un enorme drago rosso, con sette teste e dieci corna." },
      { n: 4, t: "Il drago si pose davanti alla donna che stava per partorire, per divorare il bambino appena nato." },
      { n: 5, t: "Essa diede alla luce un figlio maschio, destinato a governare tutte le nazioni con scettro di ferro." },
      { n: 6, t: "La donna invece fuggì nel deserto, dove Dio le aveva preparato un rifugio." }
    ]
  },
  {
    book: "Ap",
    name: "Apocalisse",
    chapter: 13,
    verses: "1-5",
    title: "La Bestia dal mare",
    text: [
      { n: 1, t: "E vidi salire dal mare una bestia che aveva dieci corna e sette teste, sulle corna dieci diademi." },
      { n: 2, t: "La bestia che io vidi era simile a una pantera, con le zampe come quelle di un orso e la bocca come quella di un leone." },
      { n: 3, t: "Una delle sue teste sembrò colpita a morte, ma la sua piaga mortale fu guarita." },
      { n: 4, t: "E gli uomini adorarono il drago perché aveva dato il potere alla bestia, e adorarono la bestia dicendo: «Chi è simile alla bestia?»." },
      { n: 5, t: "Alla bestia fu data una bocca che proferiva parole superbe e bestemmie, e le fu dato potere per quarantadue mesi." }
    ]
  },
  {
    book: "Ap",
    name: "Apocalisse",
    chapter: 14,
    verses: "1-5",
    title: "L'Agnello e i centoquARANTAQUATTROMILA",
    text: [
      { n: 1, t: "Poi vidi: ed ecco l'Agnello incamminato sul monte Sion, e insieme a lui centoquarantaquattromila persone che avevano il suo nome e il nome del Padre suo scritto sulle loro fronti." },
      { n: 2, t: "E udii una voce dal cielo simile al ruggito di grandi acque e come il rimbombo di un forte tuono." },
      { n: 3, t: "Essi cantavano un canto nuovo davanti al trono, davanti ai quattro esseri viventi e agli anziani." },
      { n: 4, t: "Questi sono coloro che non si sono contaminati con donne: sono infatti vergini e seguono l'Agnello dovunque vada." },
      { n: 5, t: "Sulla loro bocca non fu trovata menzogna: sono irreprensibili." }
    ]
  },
  {
    book: "Ap",
    name: "Apocalisse",
    chapter: 15,
    verses: "1-4",
    title: "Il canto di Mosè e dell'Agnello",
    text: [
      { n: 1, t: "Vidi nel cielo un altro segno, grande e meraviglioso: sette angeli che aveano sette flagelli, gli ultimi." },
      { n: 2, t: "Vidi anche come un mare di cristallo misto a fuoco e coloro che avevano vinto la bestia." },
      { n: 3, t: "Essi cantavano il canto di Mosè, servo di Dio, e il canto dell'Agnello: «Grandi e mirabili sono le tue opere, o Signore Dio Onnipotente»." },
      { n: 4, t: "«Chi non temerà, o Signore, e non glorificherà il tuo nome? Poiché tu solo sei santo!»." }
    ]
  },
  {
    book: "Ap",
    name: "Apocalisse",
    chapter: 16,
    verses: "1-5",
    title: "Le coppe dell'ira di Dio",
    text: [
      { n: 1, t: "Udii poi una voce potente dal tempio che diceva ai sette angeli: «Andate e versate sulla terra le sette coppe dell'ira di Dio»." },
      { n: 2, t: "Il primo andò e versò la sua coppa sulla terra; e una piaga maligna e dolorosa colpì gli uomini che avevano il marchio della bestia." },
      { n: 3, t: "Il secondo versò la sua coppa nel mare, che diventò sangue come quello di un morto." },
      { n: 4, t: "Il terzo versò la sua coppa nei fiumi e nelle sorgenti delle acque, e queste diventarono sangue." },
      { n: 5, t: "Allora udii l'angelo delle acque che diceva: «Sei giusto, tu che sei e che eri, tu, il Santo, perché hai giudicato queste cose»." }
    ]
  },
  {
    book: "Ap",
    name: "Apocalisse",
    chapter: 17,
    verses: "1-5",
    title: "La condanna di Babilonia",
    text: [
      { n: 1, t: "Poi uno dei sette angeli che avevano le sette coppe venne a parlarmene: «Vieni, ti mostrerò la condanna della grande prostituta»." },
      { n: 2, t: "«Con lei si sono prostituiti i re della terra e gli abitanti della terra si sono ubriacati del vino della sua prostituzione»." },
      { n: 3, t: "L'angelo mi trasportò in spirito nel deserto. E vidi una donna seduta sopra una bestia scarlatta." },
      { n: 4, t: "La donna era vestita di porpora e di scarlatto, adorna d'oro, di pietre preziose e di perle." },
      { n: 5, t: "Sulla sua fronte stava scritto un nome misterioso: «Babilonia la grande, la madre delle prostitute e degli abomini della terra»." }
    ]
  },
  {
    book: "Ap",
    name: "Apocalisse",
    chapter: 18,
    verses: "1-5",
    title: "La caduta di Babilonia",
    text: [
      { n: 1, t: "Dopo queste cose vidi scendere dal cielo un altro angello con grande potere, e la terra fu illuminata dal suo splendore." },
      { n: 2, t: "E gridò a gran voce: «È caduta, è caduta Babilonia la grande ed è diventata dimora di demoni»." },
      { n: 3, t: "«Perché tutte le nazioni hanno bevuto del vino della sua ira e della sua prostituzione»." },
      { n: 4, t: "E udii un'altra voce dal cielo che diceva: «Uscite, o popolo mio, da essa, per non associarvi ai suoi peccati»." },
      { n: 5, t: "«Perché i suoi peccati si sono accumulati fino al cielo e Dio si è ricordato delle sue iniquità»." }
    ]
  },
  {
    book: "Ap",
    name: "Apocalisse",
    chapter: 19,
    verses: "6-9",
    title: "Le nozze dell'Agnello",
    text: [
      { n: 6, t: "Udii poi come una voce di una folla immensa che diceva: «Alleluia! Ha preso possesso del suo regno il Signore, il nostro Dio, l'Onnipotente." },
      { n: 7, t: "Rallegriamoci ed esultiamo, rendiamo a lui gloria, perché sono giunte le nozze dell'Agnello; la sua sposa si è preparata:" },
      { n: 8, t: "le è stato dato di vestirsi di lino splendente e puro». La veste di lino sono le opere giuste dei santi." },
      { n: 9, t: "Allora l'angelo mi disse: «Scrivi: Beati gli invitati al banchetto delle nozze dell'Agnello!»." }
    ]
  },
  {
    book: "Ap",
    name: "Apocalisse",
    chapter: 20,
    verses: "11-15",
    title: "Il giudizio finale",
    text: [
      { n: 11, t: "E vidi un grande trono bianco e Colui che vi sedeva sopra. La terra e il cielo fuggirono dalla sua presenza." },
      { n: 12, t: "E vidi i morti, grandi e piccoli, in piedi davanti al trono. E i libri furono aperti." },
      { n: 13, t: "Il mare restituì i morti che si trovavano in esso, e la morte e gli inferi restituirono i loro morti." },
      { n: 14, t: "Poi la Morte e gli Inferi furono gettati nel stagno di fuoco. Questa è la seconda morte, lo stagno di fuoco." },
      { n: 15, t: "E chi non fu trovato scritto nel libro della vita fu gettato nello stagno di fuoco." }
    ]
  },
  {
    book: "Ap",
    name: "Apocalisse",
    chapter: 21,
    verses: "1-5",
    title: "Cielo nuovo e terra nuova",
    text: [
      { n: 1, t: "E vidi un cielo nuovo e una terra nuova: il cielo e la terra di prima infatti erano scomparsi e il mare non c'era più." },
      { n: 2, t: "E vidi anche la città santa, la Gerusalemme nuova, scendere dal cielo, da Dio, pronta come una sposa adorna per il suo sposo." },
      { n: 3, t: "Udii allora una voce potente che diceva: «Ecco la dimora di Dio con gli uomini! Egli dimorerà con loro ed essi saranno suoi popoli»." },
      { n: 4, t: "«E asciugherà ogni lacrima dai loro occhi e non vi sarà più la morte, né lutto né lamento né affanno»." },
      { n: 5, t: "E Colui che sedeva sul trono disse: «Ecco, io faccio nuove tutte le cose»." }
    ]
  },
  {
    book: "Ap",
    name: "Apocalisse",
    chapter: 22,
    verses: "16-21",
    title: "Vieni, Signore Gesù!",
    text: [
      { n: 16, t: "«Io, Gesù, ho mandato il mio angelo per testimoniarvi queste cose riguardo alle Chiese. Io sono la radice e la stirpe di Davide, la stella radiosa del mattino»." },
      { n: 17, t: "Lo Spirito e la sposa dicono: «Vieni!». E chi ascolta, diga: «Vieni!». Chi ha sete, venga; chi vuole, prenda gratuitamente l'acqua della vita." },
      { n: 18, t: "Dichiaro a chiunque ascolta le parole della profezia di questo libro: se qualcuno vi aggiunge qualcosa, Dio gli aggiungerà i flagelli scritti in questo libro." },
      { n: 19, t: "E se qualcuno toglie qualcosa dalle parole di questo libro profetico, Dio gli toglierà la sua parte dell'albero della vita e della città santa." },
      { n: 20, t: "Colui che attesta queste cose dice: «Sì, vengo presto!». Amen. Vieni, Signore Gesù!" },
      { n: 21, t: "La grazia del Signore Gesù sia con tutti voi. Amen!" }
  ]}
];

function mulberry32(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffledOrder(length, seed) {
  const order = [];
  for (let i = 0; i < length; i++) order.push(i);
  const rand = mulberry32(seed);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    const tmp = order[i]; order[i] = order[j]; order[j] = tmp;
  }
  return order;
}

const SHUFFLED_ORDER = shuffledOrder(READINGS.length, 20260913);
const EPOCH = Date.UTC(2020, 0, 1);

function todayInRome() {
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Rome", year: "numeric", month: "2-digit", day: "2-digit"
  }).formatToParts(now);
  const y = Number(parts.find(p => p.type === "year").value);
  const m = Number(parts.find(p => p.type === "month").value);
  const d = Number(parts.find(p => p.type === "day").value);
  return Date.UTC(y, m - 1, d);
}

function readingForToday() {
  const dayNumber = Math.round((todayInRome() - EPOCH) / 86400000);
  const pos = ((dayNumber % SHUFFLED_ORDER.length) + SHUFFLED_ORDER.length) % SHUFFLED_ORDER.length;
  return READINGS[SHUFFLED_ORDER[pos]];
}

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function buildLink(r) {
  return `https://www.bibbiaedu.it/CEI2008/nt/${r.book}/${r.chapter}/?sel=${r.chapter},${r.verses}`;
}

function buildMessage(r) {
  const verseText = r.text.map(v => `<b>${v.n}</b> ${escapeHtml(v.t)}`).join(" ");
  return [
    "🌿 <b>La lettura di oggi</b>",
    "",
    `<b>${escapeHtml(r.name)} ${r.chapter},${r.verses}</b>`,
    `<i>${escapeHtml(r.title)}</i>`,
    "",
    verseText,
    "",
    "<i>Traduzione: Riveduta 1927 (testo di pubblico dominio)</i>",
    `<a href="${buildLink(r)}">📎 Confronta con il testo CEI su BibbiaEDU</a>`,
    "",
    "Condividete qui sotto cosa vi dice questo brano 🙏"
  ].join("\n");
}

async function main() {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    throw new Error("Mancano TELEGRAM_BOT_TOKEN o TELEGRAM_CHAT_ID nei secrets del repository.");
  }
  const reading = readingForToday();
  const message = buildMessage(reading);

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: "HTML",
      disable_web_page_preview: true
    })
  });

  const data = await res.json();
  if (!data.ok) {
    throw new Error("Errore risposta Telegram: " + JSON.stringify(data));
  }
  console.log("Inviato:", reading.name, reading.chapter + "," + reading.verses);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
