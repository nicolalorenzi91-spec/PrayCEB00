// Posta la lettura del giorno nel gruppo Telegram.
// Richiede le variabili d'ambiente TELEGRAM_BOT_TOKEN e TELEGRAM_CHAT_ID.

const READINGS = [
  {book:"Mt",name:"Matteo",chapter:5,verses:"1-12",title:"Le beatitudini",text:[
    {n:1,t:"E Gesù, vedendo le folle, salì sul monte; e postosi a sedere, i suoi discepoli si accostarono a lui."},
    {n:2,t:"Ed egli, aperta la bocca, li ammaestrava dicendo:"},
    {n:3,t:"Beati i poveri in ispirito, perché di loro è il regno de' cieli."},
    {n:4,t:"Beati quelli che fanno cordoglio, perché essi saranno consolati."},
    {n:5,t:"Beati i mansueti, perché essi erederanno la terra."},
    {n:6,t:"Beati quelli che sono affamati ed assetati della giustizia, perché essi saranno saziati."},
    {n:7,t:"Beati i misericordiosi, perché a loro misericordia sarà fatta."},
    {n:8,t:"Beati i puri di cuore, perché essi vedranno Iddio."},
    {n:9,t:"Beati quelli che s'adoperano alla pace, perché essi saran chiamati figliuoli di Dio."},
    {n:10,t:"Beati i perseguitati per cagion di giustizia, perché di loro è il regno dei cieli."},
    {n:11,t:"Beati voi, quando v'oltraggeranno e vi perseguiteranno e, mentendo, diranno contro a voi ogni sorta di male per cagion mia."},
    {n:12,t:"Rallegratevi e giubilate, perché il vostro premio è grande ne' cieli; poiché così hanno perseguitato i profeti che sono stati prima di voi."}
  ]},
  {book:"Mt",name:"Matteo",chapter:6,verses:"9-13",title:"Il Padre nostro",text:[
    {n:9,t:"Voi dunque pregate così: Padre nostro che sei nei cieli, sia santificato il tuo nome;"},
    {n:10,t:"venga il tuo regno; sia fatta la tua volontà anche in terra com'è fatta nel cielo."},
    {n:11,t:"Dacci oggi il nostro pane cotidiano;"},
    {n:12,t:"e rimettici i nostri debiti come anche noi li abbiamo rimessi ai nostri debitori;"},
    {n:13,t:"e non ci esporre alla tentazione, ma liberaci dal maligno."}
  ]},
  {book:"Mt",name:"Matteo",chapter:6,verses:"25-34",title:"Non affannatevi per la vita",text:[
    {n:25,t:"Perciò vi dico: Non siate con ansietà solleciti per la vita vostra di quel che mangerete o di quel che berrete; né per il vostro corpo di che vi vestirete. Non è la vita più del nutrimento, e il corpo più del vestito?"},
    {n:26,t:"Guardate gli uccelli del cielo: non seminano, non mietono, non raccolgono in granai, e il Padre vostro celeste li nutrisce. Non siete voi assai più di loro?"},
    {n:27,t:"E chi di voi può con la sua sollecitudine aggiungere alla sua statura pure un cubito?"},
    {n:28,t:"E intorno al vestire, perché siete con ansietà solleciti? Considerate come crescono i gigli della campagna; essi non faticano e non filano;"},
    {n:29,t:"eppure io vi dico che nemmeno Salomone, con tutta la sua gloria, fu vestito come uno di loro."},
    {n:30,t:"Or se Iddio riveste in questa maniera l'erba de' campi che oggi è e domani è gettata nel forno, non vestirà Egli molto più voi, o gente di poca fede?"},
    {n:31,t:"Non siate dunque con ansietà solleciti, dicendo: Che mangeremo? che berremo? o di che ci vestiremo?"},
    {n:32,t:"Poiché sono i pagani che ricercano tutte queste cose; e il Padre vostro celeste sa che avete bisogno di tutte queste cose."},
    {n:33,t:"Ma cercate prima il regno e la giustizia di Dio, e tutte queste cose vi saranno sopraggiunte."},
    {n:34,t:"Non siate dunque con ansietà solleciti del domani; perché il domani sarà sollecito di se stesso. Basta a ciascun giorno il suo affanno."}
  ]},
  {book:"Mt",name:"Matteo",chapter:7,verses:"24-27",title:"La casa sulla roccia",text:[
    {n:24,t:"Perciò chiunque ode queste mie parole e le mette in pratica sarà paragonato ad un uomo avveduto che ha edificata la sua casa sopra la roccia."},
    {n:25,t:"E la pioggia è caduta, e son venuti i torrenti, e i venti hanno soffiato e hanno investito quella casa; ma ella non è caduta, perché era fondata sulla roccia."},
    {n:26,t:"E chiunque ode queste mie parole e non le mette in pratica sarà paragonato ad un uomo stolto che ha edificata la sua casa sulla rena."},
    {n:27,t:"E la pioggia è caduta, e son venuti i torrenti, e i venti hanno soffiato ed hanno fatto impeto contro quella casa; ed ella è caduta, e la sua ruina è stata grande."}
  ]},
  {book:"Mt",name:"Matteo",chapter:9,verses:"9-13",title:"La chiamata di Matteo",text:[
    {n:9,t:"Poi Gesù, partitosi di là, passando, vide un uomo, chiamato Matteo, che sedeva al banco della gabella; e gli disse: Seguimi. Ed egli, levatosi, lo seguì."},
    {n:10,t:"Ed avvenne che, essendo Gesù a tavola in casa di Matteo, ecco, molti pubblicani e peccatori vennero e si misero a tavola con Gesù e co' suoi discepoli."},
    {n:11,t:"E i Farisei, veduto ciò, dicevano ai suoi discepoli: Perché il vostro maestro mangia coi pubblicani e coi peccatori?"},
    {n:12,t:"Ma Gesù, avendoli uditi, disse: Non sono i sani che hanno bisogno del medico, ma i malati."},
    {n:13,t:"Or andate e imparate che cosa significhi: Voglio misericordia, e non sacrifizio; poiché io non son venuto a chiamar de' giusti, ma dei peccatori."}
  ]},
  {book:"Mt",name:"Matteo",chapter:11,verses:"25-30",title:"Il mio giogo è dolce",text:[
    {n:25,t:"In quel tempo Gesù prese a dire: Io ti rendo lode, o Padre, Signore del cielo e della terra, perché hai nascosto queste cose ai sapienti e agli intelligenti, e le hai rivelate ai piccoli."},
    {n:26,t:"Sì, Padre, perché così ti è piaciuto."},
    {n:27,t:"Ogni cosa mi è stata data in mano dal Padre mio; e nessuno conosce il Figlio, se non il Padre; e nessuno conosce il Padre, se non il Figlio, e colui al quale il Figlio voglia rivelarlo."},
    {n:28,t:"Venite a me, voi tutti che siete affaticati e oppressi, e io vi darò riposo."},
    {n:29,t:"Prendete su di voi il mio giogo e imparate da me, perché io sono mansueto e umile di cuore; e voi troverete riposo alle anime vostre;"},
    {n:30,t:"poiché il mio giogo è dolce e il mio carico è leggero."}
  ]},
  {book:"Mt",name:"Matteo",chapter:13,verses:"1-9",title:"La parabola del seminatore",text:[
    {n:1,t:"In quel giorno Gesù, uscito di casa, si pose a sedere presso al mare;"},
    {n:2,t:"e molte turbe si raunarono attorno a lui; talché egli, montato in una barca, vi sedette; e tutta la moltitudine stava sulla riva."},
    {n:3,t:"Ed egli insegnò loro molte cose in parabole, dicendo:"},
    {n:4,t:"Ecco, il seminatore uscì a seminare. E mentre seminava, una parte del seme cadde lungo la strada; gli uccelli vennero e la mangiarono."},
    {n:5,t:"E un'altra cadde ne' luoghi rocciosi ove non avea molta terra; e subito spuntò, perché non avea terreno profondo;"},
    {n:6,t:"ma, levatosi il sole, fu riarsa; e perché non avea radice, si seccò."},
    {n:7,t:"E un'altra cadde sulle spine; e le spine crebbero e l'affogarono."},
    {n:8,t:"E un'altra cadde nella buona terra e portò frutto, dando qual cento, qual sessanta, qual trenta per uno."},
    {n:9,t:"Chi ha orecchi da udire oda."}
  ]},
  {book:"Mt",name:"Matteo",chapter:14,verses:"22-33",title:"Gesù cammina sulle acque",text:[
    {n:22,t:"Subito dopo, Gesù obbligò i suoi discepoli a montar nella barca ed a precederlo sull'altra riva, mentr'egli licenzierebbe le turbe."},
    {n:23,t:"E licenziatele si ritirò in disparte sul monte per pregare. E fattosi sera, era quivi tutto solo."},
    {n:24,t:"Frattanto la barca, già di molti stadi lontana da terra, era sbattuta dalle onde perché il vento era contrario."},
    {n:25,t:"Ma alla quarta vigilia della notte Gesù andò verso loro, camminando sul mare."},
    {n:26,t:"E i discepoli, vedendolo camminar sul mare, si turbarono e dissero: È un fantasma! E dalla paura gridarono."},
    {n:27,t:"Ma subito Gesù parlò loro e disse: State di buon animo, son io; non temete!"},
    {n:28,t:"E Pietro gli rispose: Signore, se sei tu, comandami di venir a te sulle acque."},
    {n:29,t:"Ed egli disse: Vieni! E Pietro, smontato dalla barca, camminò sulle acque e andò verso Gesù."},
    {n:30,t:"Ma vedendo il vento, ebbe paura; e cominciando a sommergersi, gridò: Signore, salvami!"},
    {n:31,t:"E Gesù, stesa subito la mano, lo afferrò e gli disse: O uomo di poca fede, perché hai dubitato?"},
    {n:32,t:"E quando furono montati nella barca, il vento s'acquetò."},
    {n:33,t:"Allora quelli che erano nella barca si prostrarono dinanzi a lui, dicendo: Veramente tu sei Figliuol di Dio!"}
  ]},
  {book:"Mc",name:"Marco",chapter:4,verses:"35-41",title:"La tempesta sedata",text:[
    {n:35,t:"In quel medesimo giorno, fattosi sera, Gesù disse loro: Passiamo all'altra riva."},
    {n:36,t:"E i discepoli, licenziata la moltitudine, lo presero, così com'era, nella barca. E vi erano delle altre barche con lui."},
    {n:37,t:"Ed ecco levarsi un gran turbine di vento che cacciava le onde nella barca, talché ella già si riempiva."},
    {n:38,t:"Or egli stava a poppa, dormendo sul guanciale. I discepoli lo destano e gli dicono: Maestro, non ti curi tu che noi periamo?"},
    {n:39,t:"Ed egli, destatosi, sgridò il vento e disse al mare: Taci, calmati! E il vento cessò, e si fece gran bonaccia."},
    {n:40,t:"Ed egli disse loro: Perché siete così paurosi? Come mai non avete voi fede?"},
    {n:41,t:"Ed essi furon presi da gran timore e si dicevano gli uni agli altri: Chi è dunque costui, che anche il vento ed il mare gli obbediscono?"}
  ]},
  {book:"Mc",name:"Marco",chapter:10,verses:"46-52",title:"La guarigione del cieco Bartimeo",text:[
    {n:46,t:"Poi vennero in Gerico. E come egli usciva di Gerico coi suoi discepoli e con gran moltitudine, il figliuol di Timeo, Bartimeo, cieco mendicante, sedeva presso la strada."},
    {n:47,t:"E udito che chi passava era Gesù il Nazareno, prese a gridare e a dire: Gesù, figliuol di Davide, abbi pietà di me!"},
    {n:48,t:"E molti lo sgridavano perché tacesse; ma quello gridava più forte: Figliuol di Davide, abbi pietà di me!"},
    {n:49,t:"E Gesù, fermatosi, disse: Chiamatelo! E chiamarono il cieco, dicendogli: Sta' di buon cuore! Alzati! Egli ti chiama."},
    {n:50,t:"E il cieco, gettato via il mantello, balzò in piedi e venne a Gesù."},
    {n:51,t:"E Gesù, rivoltosi a lui, gli disse: Che vuoi ch'io ti faccia? E il cieco gli rispose: Rabbuni, ch'io recuperi la vista."},
    {n:52,t:"E Gesù gli disse: Va', la tua fede ti ha salvato. E in quell'istante egli ricuperò la vista e seguiva Gesù per la via."}
  ]},
  {book:"Mc",name:"Marco",chapter:12,verses:"28-34",title:"Il primo di tutti i comandamenti",text:[
    {n:28,t:"Or uno degli scribi che li aveva uditi discutere, visto ch'egli aveva loro ben risposto, si accostò e gli domandò: Qual è il comandamento primo fra tutti?"},
    {n:29,t:"Gesù rispose: Il primo è: Ascolta, Israele: Il Signore Iddio nostro è l'unico Signore:"},
    {n:30,t:"ama dunque il Signore Iddio tuo con tutto il tuo cuore e con tutta l'anima tua e con tutta la mente tua e con tutta la forza tua."},
    {n:31,t:"Il secondo è questo: Ama il tuo prossimo come te stesso. Non v'è alcun altro comandamento maggiore di questi."},
    {n:32,t:"E lo scriba gli disse: Maestro, ben hai detto secondo verità che v'è un Dio solo e che fuor di lui non ve n'è alcun altro;"},
    {n:33,t:"e che amarlo con tutto il cuore, con tutto l'intelletto e con tutta la forza e amare il prossimo come te stesso, è assai più che tutti gli olocausti e i sacrifici."},
    {n:34,t:"E Gesù, vedendo ch'egli avea risposto avvedutamente, gli disse: Tu non sei lontano dal regno di Dio."}
  ]},
  {book:"Mc",name:"Marco",chapter:1,verses:"14-20",title:"La chiamata dei primi discepoli",text:[
    {n:14,t:"Dopo che Giovanni fu messo in prigione, Gesù si recò in Galilea, predicando l'evangelo di Dio e dicendo:"},
    {n:15,t:"Il tempo è compiuto e il regno di Dio è vicino; ravvedetevi e credete all'evangelo."},
    {n:16,t:"Or passando lungo il mar della Galilea, egli vide Simone e Andrea, il fratello di Simone, che gettavano la rete in mare, perché erano pescatori. E Gesù disse loro:"},
    {n:17,t:"Seguitemi, ed io farò di voi dei pescatori d'uomini."},
    {n:18,t:"Ed essi, lasciate subito le reti, lo seguirono."},
    {n:19,t:"Poi, spintosi un po' più oltre, vide Giacomo di Zebedeo e Giovanni suo fratello, che anch'essi in barca rassettavano le reti;"},
    {n:20,t:"e subito li chiamò; ed essi, lasciato Zebedeo loro padre nella barca con gli operai, se n'andarono dietro a lui."}
  ]},
  {book:"Mc",name:"Marco",chapter:2,verses:"1-12",title:"La guarigione del paralitico",text:[
    {n:1,t:"E dopo alcuni giorni, egli entrò di nuovo in Capernaum, e si seppe che era in casa;"},
    {n:2,t:"e si raunò tanta gente che neppure lo spazio dinanzi alla porta la potea contenere. Ed egli annunziava loro la Parola."},
    {n:3,t:"E vennero a lui alcuni che menavano un paralitico portato da quattro."},
    {n:4,t:"E non potendolo far giungere fino a lui a motivo della calca, scoprirono il tetto dalla parte dov'era Gesù; e fattavi un'apertura, calarono il lettuccio sul quale il paralitico giaceva."},
    {n:5,t:"E Gesù, veduta la loro fede, disse al paralitico: Figliuolo, i tuoi peccati ti sono rimessi."},
    {n:6,t:"Or alcuni degli scribi eran quivi seduti e così ragionavano in cuor loro:"},
    {n:7,t:"Perché parla costui in questa maniera? Egli bestemmia! Chi può rimettere i peccati, se non un solo, cioè Dio?"},
    {n:8,t:"E Gesù, avendo subito conosciuto nel suo spirito che ragionavano così dentro di sé, disse loro: Perché fate voi cotesti ragionamenti ne' vostri cuori?"},
    {n:9,t:"Che è più agevole, dire al paralitico: I tuoi peccati ti sono rimessi, oppur dirgli: Lèvati, togli il tuo lettuccio e cammina?"},
    {n:10,t:"Ora, affinché sappiate che il Figliuol dell'uomo ha potestà in terra di rimettere i peccati:"},
    {n:11,t:"Io tel dico (disse al paralitico), lèvati, togli il tuo lettuccio, e vattene a casa tua."},
    {n:12,t:"E colui s'alzò, e subito, preso il suo lettuccio, se ne andò via in presenza di tutti; talché tutti stupivano e glorificavano Iddio dicendo: Una cosa così non la vedemmo mai."}
  ]},
  {book:"Lc",name:"Luca",chapter:10,verses:"25-37",title:"Il buon samaritano",text:[
    {n:25,t:"Ed ecco, un certo dottor della legge si levò per metterlo alla prova, e gli disse: Maestro, che dovrò fare per eredar la vita eterna?"},
    {n:26,t:"Ed egli gli disse: Nella legge che sta scritto? Come leggi?"},
    {n:27,t:"E colui, rispondendo, disse: Ama il Signore Iddio tuo con tutto il tuo cuore, e con tutta l'anima tua, e con tutta la forza tua, e con tutta la mente tua, e il tuo prossimo come te stesso."},
    {n:28,t:"E Gesù gli disse: Tu hai risposto rettamente; fa, questo, e vivrai."},
    {n:29,t:"Ma colui, volendo giustificarsi, disse a Gesù: E chi è il mio prossimo?"},
    {n:30,t:"Gesù, replicando, disse: Un uomo scendeva da Gerusalemme a Gerico, e s'imbatté in ladroni i quali, spogliatolo e feritolo, se ne andarono, lasciandolo mezzo morto."},
    {n:31,t:"Or, per caso, un sacerdote scendeva per quella stessa via; e veduto colui, passò oltre dal lato opposto."},
    {n:32,t:"Così pure un levita, giunto a quel luogo e vedutolo, passò oltre dal lato opposto."},
    {n:33,t:"Ma un Samaritano che era in viaggio giunse presso a lui; e vedutolo, n'ebbe pietà;"},
    {n:34,t:"e accostatosi, fasciò le sue piaghe, versandovi sopra dell'olio e del vino; poi lo mise sulla propria cavalcatura, lo menò ad un albergo e si prese cura di lui."},
    {n:35,t:"E il giorno dopo, tratti fuori due denari, li diede all'oste e gli disse: Prenditi cura di lui; e tutto ciò che spenderai di più, quando tornerò in su, te lo renderò."},
    {n:36,t:"Quale di questi tre ti pare essere stato il prossimo di colui che s'imbatté ne' ladroni?"},
    {n:37,t:"E quello rispose: Colui che gli usò misericordia. E Gesù gli disse: Va', e fa' tu il simigliante."}
  ]},
  {book:"Lc",name:"Luca",chapter:10,verses:"38-42",title:"Marta e Maria",text:[
    {n:38,t:"Or mentre essi erano in cammino, egli entrò in un villaggio; e una certa donna, per nome Marta, lo ricevette in casa sua."},
    {n:39,t:"Ell'avea una sorella chiamata Maria la quale, postasi a sedere a' piedi di Gesù, ascoltava la sua parola."},
    {n:40,t:"Ma Marta era affaccendata intorno a molti servigi; e venne e disse: Signore, non t'importa che mia sorella m'abbia lasciata sola a servire? Dille dunque che m'aiuti."},
    {n:41,t:"Ma il Signore, rispondendo, le disse: Marta, Marta, tu ti affanni e t'inquieti di molte cose, ma di una cosa sola fa bisogno."},
    {n:42,t:"E Maria ha scelto la buona parte che non le sarà tolta."}
  ]},
  {book:"Lc",name:"Luca",chapter:15,verses:"1-7",title:"La pecora smarrita",text:[
    {n:1,t:"Or tutti i pubblicani e i peccatori s'accostavano a lui per udirlo."},
    {n:2,t:"E così i Farisei come gli scribi mormoravano, dicendo: Costui accoglie i peccatori e mangia con loro."},
    {n:3,t:"Ed egli disse loro questa parabola:"},
    {n:4,t:"Chi è l'uomo fra voi, che, avendo cento pecore, se ne perde una, non lasci le novantanove nel deserto e non vada dietro alla perduta finché non l'abbia ritrovata?"},
    {n:5,t:"E trovatala, tutto allegro se la mette sulle spalle;"},
    {n:6,t:"e giunto a casa, chiama assieme gli amici e i vicini, e dice loro: Rallegratevi meco, perché ho ritrovato la mia pecora ch'era perduta."},
    {n:7,t:"Io vi dico che così vi sarà in cielo più allegrezza per un solo peccatore che si ravvede, che per novantanove giusti i quali non han bisogno di ravvedimento."}
  ]},
  {book:"Lc",name:"Luca",chapter:15,verses:"11-32",title:"Il figlio prodigo",text:[
    {n:11,t:"Disse ancora: Un uomo avea due figliuoli;"},
    {n:12,t:"e il più giovane di loro disse al padre: Padre, dammi la parte de' beni che mi tocca. Ed egli spartì fra loro i beni."},
    {n:13,t:"E di lì a poco, il figliuolo più giovane, messa insieme ogni cosa, se ne partì per un paese lontano, e quivi dissipò la sostanza, vivendo dissolutamente."},
    {n:14,t:"E quand'ebbe speso ogni cosa, una gran carestia sopravvenne in quel paese, sicché egli cominciò ad esser nel bisogno."},
    {n:15,t:"E andò, e si mise con uno degli abitanti di quel paese, il quale lo mandò nei suoi campi, a pasturare i porci."},
    {n:16,t:"Ed egli avrebbe bramato empirsi il corpo de' baccelli che i porci mangiavano, ma nessuno gliene dava."},
    {n:17,t:"Ma rientrato in sé, disse: Quanti servi di mio padre hanno pane in abbondanza, ed io qui mi muoio di fame!"},
    {n:18,t:"Io mi leverò e me n'andrò a mio padre, e gli dirò: Padre, ho peccato contro il cielo e contro te:"},
    {n:19,t:"non son più degno d'esser chiamato tuo figliuolo; trattami come uno de' tuoi servi."},
    {n:20,t:"Egli dunque si levò e venne a suo padre; ma mentr'egli era ancora lontano, suo padre lo vide e fu mosso a compassione, e corse, e gli si gettò al collo, e lo baciò e ribaciò."},
    {n:21,t:"E il figliuolo gli disse: Padre, ho peccato contro il cielo e contro te; non son più degno d'esser chiamato tuo figliuolo."},
    {n:22,t:"Ma il padre disse ai suoi servitori: Presto, portate qua la veste più bella e rivestitelo, e mettetegli un anello al dito e de' calzari a' piedi;"},
    {n:23,t:"e menate fuori il vitello ingrassato, ammazzatelo, e mangiamo e rallegriamoci,"},
    {n:24,t:"perché questo mio figliuolo era morto, ed è tornato a vita; era perduto, ed è stato ritrovato. E si misero a far gran festa."},
    {n:25,t:"Or il figliuolo maggiore era a' campi; e come tornando fu vicino alla casa, udì la musica e le danze."},
    {n:26,t:"E chiamato a sé uno de' servitori, gli domandò che cosa ciò volesse dire."},
    {n:27,t:"Quello gli disse: È giunto tuo fratello, e tuo padre ha ammazzato il vitello ingrassato, perché l'ha riavuto sano e salvo."},
    {n:28,t:"Ma egli si adirò e non volle entrare; onde suo padre uscì fuori e lo pregava d'entrare."},
    {n:29,t:"Ma egli, rispondendo, disse al padre: Ecco, da tanti anni ti servo, e non ho mai trasgredito un tuo comando; a me però non hai mai dato neppure un capretto da far festa con i miei amici;"},
    {n:30,t:"ma quando è venuto questo tuo figliuolo che ha divorato i tuoi beni con le meretrici, tu hai ammazzato per lui il vitello ingrassato."},
    {n:31,t:"E il padre gli disse: Figliuolo, tu sei sempre meco, ed ogni cosa mia è tua;"},
    {n:32,t:"ma bisognava far festa e rallegrarsi, perché questo tuo fratello era morto, ed è tornato a vita; era perduto, ed è stato ritrovato."}
  ]},
  {book:"Lc",name:"Luca",chapter:19,verses:"1-10",title:"Zaccheo",text:[
    {n:1,t:"E Gesù, essendo entrato in Gerico, attraversava la città."},
    {n:2,t:"Ed ecco, un uomo, chiamato per nome Zaccheo, il quale era capo dei pubblicani ed era ricco,"},
    {n:3,t:"cercava di veder chi era Gesù, ma non poteva a motivo della folla, perché era piccolo di statura."},
    {n:4,t:"Allora corse innanzi, e montò sopra un sicomoro, per vederlo, perch'egli avea da passar per quella via."},
    {n:5,t:"E come Gesù fu giunto in quel luogo, alzati gli occhi, gli disse: Zaccheo, scendi presto, perché oggi debbo albergare in casa tua."},
    {n:6,t:"Ed egli s'affrettò a scendere e l'accolse con allegrezza."},
    {n:7,t:"E veduto ciò, tutti mormoravano, dicendo: È andato ad albergare da un peccatore!"},
    {n:8,t:"Ma Zaccheo, presentatosi al Signore, gli disse: Ecco, Signore, la metà de' miei beni la do ai poveri; e se ho frodato qualcuno di qualcosa gli rendo il quadruplo."},
    {n:9,t:"E Gesù gli disse: Oggi la salvezza è entrata in questa casa, poiché anche questo è figliuolo d'Abramo:"},
    {n:10,t:"poiché il Figliuol dell'uomo è venuto per cercare e salvare ciò che era perito."}
  ]},
  {book:"Fil",name:"Filippesi",chapter:4,verses:"4-9",title:"Siate lieti nel Signore",text:[
    {n:4,t:"Rallegratevi del continuo nel Signore. Da capo dico: Rallegratevi."},
    {n:5,t:"La vostra mansuetudine sia nota a tutti gli uomini. Il Signore è vicino."},
    {n:6,t:"Non siate con ansietà solleciti di cosa alcuna; ma in ogni cosa siano le vostre richieste rese note a Dio in preghiera e supplicazione con azioni di grazie."},
    {n:7,t:"E la pace di Dio che sopravanza ogni intelligenza, guarderà i vostri cuori e i vostri pensieri in Cristo Gesù."},
    {n:8,t:"Del rimanente, fratelli, tutte le cose vere, tutte le cose onorevoli, tutte le cose giuste, tutte le cose pure, tutte le cose amabili, tutte le cose di buona fama, quelle in cui è qualche virtù e qualche lode, siano oggetto dei vostri pensieri."},
    {n:9,t:"Le cose che avete imparate, ricevute, udite da me e vedute in me, fatele; e l'Iddio della pace sarà con voi."}
  ]},
  {book:"At",name:"Atti degli Apostoli",chapter:2,verses:"42-47",title:"La vita della prima comunità",text:[
    {n:42,t:"Ed erano perseveranti nell'attendere all'insegnamento degli apostoli, nella comunione fraterna, nel rompere il pane e nelle preghiere."},
    {n:43,t:"E ogni anima era presa da timore; e molti prodigi e segni eran fatti dagli apostoli."},
    {n:44,t:"E tutti quelli che credevano erano insieme, ed aveano ogni cosa in comune;"},
    {n:45,t:"e vendevano le possessioni ed i beni, e li distribuivano a tutti, secondo il bisogno di ciascuno."},
    {n:46,t:"E tutti i giorni, essendo di pari consentimento assidui al tempio, e rompendo il pane nelle case, prendevano il loro cibo assieme con letizia e semplicità di cuore,"},
    {n:47,t:"lodando Iddio, e avendo il favore di tutto il popolo. E il Signore aggiungeva ogni giorno alla loro comunità quelli che erano sulla via della salvazione."}
  ]},
  {book:"Rm",name:"Romani",chapter:8,verses:"28-39",title:"Nulla potrà separarci dall'amore di Dio",text:[
    {n:28,t:"Or noi sappiamo che tutte le cose cooperano al bene di quelli che amano Dio, i quali son chiamati secondo il suo proponimento."},
    {n:29,t:"Perché quelli che Egli ha preconosciuti, li ha pure predestinati ad esser conformi all'immagine del suo Figliuolo, ond'egli sia il primogenito fra molti fratelli;"},
    {n:30,t:"e quelli che ha predestinati, li ha pure chiamati; e quelli che ha chiamati, li ha pure giustificati; e quelli che ha giustificati, li ha pure glorificati."},
    {n:31,t:"Che diremo dunque a queste cose? Se Dio è per noi, chi sarà contro di noi?"},
    {n:32,t:"Colui che non ha risparmiato il suo proprio Figliuolo, ma l'ha dato per tutti noi, come non ci donerà egli anche tutte le cose con lui?"},
    {n:33,t:"Chi accuserà gli eletti di Dio? Iddio è quel che li giustifica."},
    {n:34,t:"Chi sarà quel che li condanni? Cristo Gesù è quel che è morto; e, più che questo, è risuscitato; ed è alla destra di Dio; ed anche intercede per noi."},
    {n:35,t:"Chi ci separerà dall'amore di Cristo? Sarà forse la tribolazione, o la distretta, o la persecuzione, o la fame, o la nudità, o il pericolo, o la spada?"},
    {n:36,t:"Come è scritto: Per amor di te noi siamo tutto il giorno messi a morte; siamo stati considerati come pecore da macello."},
    {n:37,t:"Anzi, in tutte queste cose, noi siam più che vincitori, in virtù di colui che ci ha amati."},
    {n:38,t:"Poiché io son persuaso che né morte, né vita, né angeli, né principati, né cose presenti, né cose future,"},
    {n:39,t:"né potestà, né altezza, né profondità, né alcun'altra creatura potranno separarci dall'amore di Dio, che è in Cristo Gesù, nostro Signore."}
  ]},
  {book:"1Cor",name:"1 Corinzi",chapter:13,verses:"1-13",title:"Inno alla carità",text:[
    {n:1,t:"Quand'anche io parlassi le lingue degli uomini e degli angeli, se non ho carità, divento un rame risonante o uno squillante cembalo."},
    {n:2,t:"E quand'anche avessi il dono di profezia e intendessi tutti i misteri e tutta la conoscenza, e avessi tutta la fede in modo da trasportare i monti, se non ho carità, non sono nulla."},
    {n:3,t:"E quand'anche distribuissi tutti i miei beni per nutrire i poveri, e quand'anche dessi il mio corpo a essere arso, se non ho carità, ciò non mi giova a niente."},
    {n:4,t:"La carità è paziente, è benigna; la carità non invidia; la carità non si vanta, non si gonfia,"},
    {n:5,t:"non si comporta in modo sconveniente, non cerca il proprio interesse, non si irrita, non sospetta il male,"},
    {n:6,t:"non gode dell'iniquità, ma gioisce della verità;"},
    {n:7,t:"soffre ogni cosa, crede ogni cosa, spera ogni cosa, sopporta ogni cosa."},
    {n:8,t:"La carità non verrà mai meno. Quanto alle profezie, esse verranno abolite; quanto alle lingue, esse cesseranno; quanto alla conoscenza, essa verrà abolita;"},
    {n:9,t:"poiché noi conosciamo in parte, e in parte profetizziamo;"},
    {n:10,t:"ma quando la perfezione sarà venuta, quello che è solo in parte sarà abolito."},
    {n:11,t:"Quando ero fanciullo, parlavo da fanciullo, pensavo da fanciullo, ragionavo da fanciullo; ma quando sono diventato uomo, ho eliminato le cose da fanciullo."},
    {n:12,t:"Poiché ora vediamo come in uno specchio, in modo oscuro, ma allora vedremo faccia a faccia; ora conosco in parte, ma allora conoscerò appieno, come anche sono stato appieno conosciuto."},
    {n:13,t:"Or dunque queste tre cose durano: fede, speranza, carità; ma la più grande di esse è la carità."}
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
