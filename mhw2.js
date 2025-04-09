let premiumLeave = false;
let dynamicPremiumLeave = false;
let arrayContenitoreTesto = [null, null, null, null, null, null];
let arrayClickedDomande = [false, false, false, false, false, false];
let arrayContenitoreLink = [null, null, null];
let fotoCambiata = false;
let pubblicità = null;

function functionPremiumMouseEnter(event) {
    element = document.querySelector('.dynamicPremium');
    element.classList.add('dynamicPremiumYes');
}

function nascondiDynamicPremium(){
    if (premiumLeave && dynamicPremiumLeave){
        element = document.querySelector('.dynamicPremium');
        element.classList.remove('dynamicPremiumYes');
        premiumLeave = false;
        dynamicPremiumLeave = false;
    }
}

function functionPremiumMouseLeave(event) {
    premiumLeave = true;
    nascondiDynamicPremium();
}

function functionDynamicPremiumMouseLeave(event){
    dynamicPremiumLeave = true;
    nascondiDynamicPremium();
}

function domandaClickSenzaLink(text, index){
    if (arrayClickedDomande[index] === false){
        arrayContenitoreTesto[index] = document.createElement('div');
        arrayContenitoreTesto[index].textContent = text;
        event.currentTarget.appendChild(arrayContenitoreTesto[index]);
        arrayContenitoreTesto[index].classList.add('DomandaContenitoreTesto');
        event.currentTarget.classList.add('Domanda_ContenitoreDomanda');
        arrayClickedDomande[index] = true;
        return;
    }

    if (arrayContenitoreTesto[index] != null){
        event.currentTarget.removeChild(arrayContenitoreTesto[index]);
        event.currentTarget.classList.remove('Domanda_ContenitoreDomanda')
        arrayContenitoreTesto[index] = null;
    }
    
    arrayClickedDomande[index] = false;
}

function domandaClickConLink(text, indexText, index){
    arrayContenitoreLink[index] = document.createElement('div');
    const link = document.createElement('a');
    link.textContent = "Ulteriori informazioni";
    link.href = "#";
    arrayContenitoreLink[index].appendChild(link);
    arrayContenitoreLink[index].appendChild(document.createTextNode(text));
    arrayContenitoreTesto[indexText].appendChild(arrayContenitoreLink[index]);
    link.classList.add('modificaLink');
    arrayContenitoreLink[index].classList.add('DomandaContenitoreLink');
    arrayContenitoreLink[index] = null;
}

function domanda1Click(event){
    event.preventDefault();

    domandaClickSenzaLink("Se non hai mai avuto Premium prima d'ora, potresti avere diritto a un periodo di prova gratuito (o a una tariffa ridotta)."
        + "Per i periodi di prova, devi comunque inserire un metodo di pagamento valido per iscriverti. Lo utilizzeremo per confermare il tuo Paese o la tua regione ed effettuare i pagamenti qualora decidessi di tenere Premium al termine dell'offerta.\n\n"
        + "Ti invieremo un promemoria 7 giorni prima del termine del periodo di prova. Si applicano termini e condizioni e restrizioni in base al Paese.", 0);
}
    

function domanda2Click(event){
    event.preventDefault();
    domandaClickSenzaLink("Puoi annullare il piano Premium quando vuoi sulla pagina del tuo account. "
        + "Una volta annullato, l'abbonamento Premium proseguirà fino alla prossima data di fatturazione, quindi il tuo account passerà al servizio gratuito."
        + "Se annulli durante il periodo di prova gratuito, perderai immediatamente l'accesso ai vantaggi Premium e l'account passerà al servizio gratuito. I periodi di prova gratuiti non possono essere riattivati."
        + "Con il servizio gratuito, manterrai tutte le tue playlist e la musica salvata e potrai ascoltarle con gli annunci.", 1);
}

function domanda3Click(event){
    event.preventDefault();
    domandaClickSenzaLink("Premium Duo è un piano per coppie che vivono insieme. È più conveniente rispetto a due account Premium Individual a prezzo pieno. Ti chiederemo l'indirizzo per assicurarci che risiediate nello stesso luogo. Puoi invitare una persona al piano subito dopo l'acquisto. Ogni membro dispone di un account Premium separato e può ascoltare musica contemporaneamente con il proprio account. Tutta la musica e tutte le playlist salvate sono di proprietà dei singoli membri. L'altro intestatario dell'account non può vedere ciò che stai ascoltando.", 2);
    domandaClickConLink(" su Premium Duo", 2, 0);
}

function domanda4Click(event){
    event.preventDefault();
    domandaClickSenzaLink("Premium Family è un piano per un massimo di 6 persone che vivono insieme. È più conveniente rispetto a un account Premium Individual a prezzo pieno per ciascuno. Ti chiederemo l'indirizzo per avere la conferma che risiediate nello stesso luogo. Potrai invitare le persone al piano subito dopo l'acquisto. Ogni membro dispone di un account Premium separato e può ascoltare musica contemporaneamente con il proprio account. Tutta la musica e tutte le playlist salvate sono di proprietà dei singoli membri. Gli altri intestatari dell'account non possono vedere ciò che stai ascoltando.", 3);
    domandaClickConLink(" su Premium Family", 3, 1);
}

function domanda5Click(event){
    event.preventDefault();
    domandaClickSenzaLink("Il piano è pensato per gli studenti iscritti a un'università accreditata e con un'età superiore a 18 anni. Puoi ottenere Premium Student per un massimo di 4 anni.", 4);
    domandaClickConLink(" su Premium Student", 4, 2);
}

function domanda6Click(event){
    event.preventDefault();
    domandaClickSenzaLink("I prezzi di Spotify Premium in questo Paese (Italia) sono diversi a seconda del piano Premium scelto: il piano Spotify Premium Individual costa 10,99 € al mese, il piano Premium Duo costa 14,99 € al mese, il piano Premium Family costa 17,99 € al mese e il piano Premium Student costa 5,99 € al mese. Se non hai mai avuto un piano Premium prima d'ora, potresti avere diritto a un periodo di prova gratuito (o a una tariffa ridotta). Si applicano termini e condizioni e restrizioni in base al Paese.",
        5);
}

function cambiaFoto(event){
    pubblicità = document.querySelector('.Pubblicità');

    if (fotoCambiata === false){
        pubblicità.classList.add('cambiaSfondo');
        pubblicità.classList.remove('Pubblicità')
        fotoCambiata = true;
        return;
    }

    pubblicità.classList.remove('cambiaSfondo');
    pubblicità.classList.add('Pubblicità');
    fotoCambiata = false;
    //provare a mettere questa funzione anche per i figli del box
}

const premium = document.querySelector('#header-items-navbar-flex-Premium');
premium.addEventListener('mouseenter', functionPremiumMouseEnter);
premium.addEventListener('mouseleave', functionPremiumMouseLeave);
const dynamicPremium = document.querySelector('.dynamicPremium');
dynamicPremium.addEventListener('mouseleave', functionDynamicPremiumMouseLeave);



const domanda1 = document.querySelector('#Domande-flex-container-Box-Contenuto-a1');
domanda1.addEventListener('click', domanda1Click);

const domanda2 = document.querySelector('#Domande-flex-container-Box-Contenuto-a2');
domanda2.addEventListener('click', domanda2Click);

const domanda3 = document.querySelector('#Domande-flex-container-Box-Contenuto-a3');
domanda3.addEventListener('click', domanda3Click);

const domanda4 = document.querySelector('#Domande-flex-container-Box-Contenuto-a4');
domanda4.addEventListener('click', domanda4Click);

const domanda5 = document.querySelector('#Domande-flex-container-Box-Contenuto-a5');
domanda5.addEventListener('click', domanda5Click);

const domanda6 = document.querySelector('#Domande-flex-container-Box-Contenuto-a6');
domanda6.addEventListener('click', domanda6Click);

const cambiaFotoButton = document.querySelector('#boxA-button3');
cambiaFotoButton.addEventListener('click', cambiaFoto);

