// ==UserScript==
// @name         EarnApp Dashboard Italian Translation
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Italian translation of EarnApp Dashboard
// @author       Creeperiano99
// @include      https://earnapp.com/dashboard*
// @icon         https://www.google.com/s2/favicons?domain=https://earnapp.com
// @updateURL      https://github.com/Creeperiano99/earnapp-dashboard-italian/raw/main/EarnApp%20Dashboard%20Italian%20Translation.user.js
// @downloadURL    https://github.com/Creeperiano99/earnapp-dashboard-italian/raw/main/EarnApp%20Dashboard%20Italian%20Translation.user.js
// @grant        GM_addStyle
// ==/UserScript==

setInterval((function() {
    'use strict';
    // Your code here...
var replaceArry = [
   [/^Current balance$/gi, 'Saldo corrente'],
   [/^Payment method$/gi, 'Metodo di pagamento'],
   [/^to:$/gi, 'a:'],
   [/^via:$/gi, 'tramite:'],
   [/^next auto-redeem in:$/gi, 'Prossimo pagamento automatico tra:'],
   [/Usage day/gi, 'Utilizzo giornaliero'],
   [/Personal referral link/gi, 'Link di affiliazione personale'],
   [/How does it work/gi, 'Come funziona'],
   [/Supported platforms/gi, 'Piattaforme supportate'],
   [/Download/gi, 'Scarica'],
   [/^ on different devices to maximize your earnings$/gi, ' su vari dispositivi per massimizzare le tue entrate'],
   [/Lifetime earnings/gi, 'Entrate totali'],
   [/^Transactions$/gi, 'Transazioni'],
   [/^Referrals$/gi, 'Affiliati'],
   [/^Promotions$/gi, 'Promozioni'],
   [/Refer friends and earn/gi, 'Invita amici e guadagna il'],
   [/^Invite friends$/gi, 'Invita amici'],
   [/of their earnings/gi, 'delle loro entrate'],
   [/Link device/gi, 'Collega dispositivo'],
   [/^Device$/gi, 'Dispositivo'],
   [/^Country$/gi, 'Paese'],
   [/^Usage$/gi, 'Utilizzo'],
   [/^Rate\/GB$/gi, 'Rata\/GB'],
   [/^Amount$/gi, 'Importo'],
   [/^Devices$/gi, 'Dispositivi'],
   [/^Earnings multiplier is/gi, 'Moltiplicatore entrate:'],
   [/^Stats$/gi, 'Statistiche'],
   [/^Balance:$/gi, 'Saldo:'],
   [/^Current usage:$/gi, 'Utilizzo attuale:'],
   [/^Rate:$/gi, 'Rata:'],
   [/^Total earned:$/gi, 'Guadagno totale:'],
   [/^Total usage:$/gi, 'Utilizzo totale:'],
   [/^Country:$/gi, 'Paese:'],
   [/^Device is not earning$/gi, 'Il dispositivo non sta guadagnando'],
   [/^IP detected:$/gi, 'IP individuato:'],
   [/^Try the following:$/gi, 'Prova a:'],
   [/^Why am I seeing this?/gi, 'Perché sto vedendo questo'],
   [/^Status$/gi, 'Stato'],
   [/^Paid$/gi, 'Pagato'],
   [/^Method$/gi, 'Metodo'],
   [/^My Referrals$/gi, 'I miei affiliati'],
   [/^Earned$/gi, 'Guadagno'],
   [/^Total$/gi, 'Totale'],
   [/^Contest qualified$/gi, 'Qualificato per contest'],
   [/^There are no referrals yet$/gi, 'Al momento non ci sono ancora affiliati'],
   [/^No rewards found$/gi, 'Nessuna ricompensa trovata'],
   [/^Created$/gi, 'Creato'],
   [/^Title$/gi, 'Titolo'],
   [/^Reward$/gi, 'Ricompensa'],
   [/^Device code$/gi, 'Codice dispositivo'],
   [/^Cancel$/gi, 'Annulla'],
   [/^Apply$/gi, 'Applica'],
   [/^Change your IP address/gi, 'Cambiare indirizzo IP'],
   [/^Remove other bandwidth sharing apps$/gi, 'Rimuovere le altre applicazioni di condivisione di banda'],
   [/^Use residential IP address$/gi, 'Usare IP residenziali'],
   [/^Remove VPN$/gi, 'Rimuovere le VPN'],
   [/^Do not use proxy$/gi, 'Non utilizzare proxy'],
   [/^Wrong IP type/gi, 'IP di tipo errato'],
   [/\(detected as/gi, '\(individuato come'],
   [/^Notifications$/gi, 'Notifiche'],
   [/^Show details$/gi, 'Mostra dettagli'],
   [/^Log out$/gi, 'Disconnettiti'],
   [/^Close account$/gi, 'Chiudi profilo'],
   [/^Profile$/gi, 'Profilo'],
   [/^Sign In$/gi, 'Accedi'],
   [/^Log in with Google$/gi, 'Accedi con google'],
   [/^Don\'t have an account?/gi, 'Non hai un profilo'],
   [/^Sign up$/gi, 'Registrati'],
   [/^Rename$/gi, 'Rinomina'],
   [/^Delete$/gi, 'Elimina'],
   [/^Rename device$/gi, 'Rinomina dispositivo'],
   [/^Device ID:$/gi, 'ID dispositivo:'],
   [/^Edit auto-redeem$/gi, 'Modifica ritiro automatico'],
   [/^Disable auto-redeem$/gi, 'Disattiva ritiro automatico'],
   [/^Auto-redeem settings$/gi, 'Impostazioni ritiro automatico'],
   [/^Receive via:$/gi, 'Ricevi tramite:'],
   [/^PayPal account ID:$/gi, 'ID profilo PayPal'],
   [/^One more time:$/gi, 'Ancora una volta:'],
   [/^Minimal auto-redeem amount via selected payment method is/gi, 'L\'importo minimo per il metodo di ritiro automatico selezionato è di'],
   [/^Save$/gi, 'Salva'],
   [/^Email to receive gift card:$/gi, 'Email per ricevere il buono regalo:'],
   [/^Amazon gift card$/gi, 'Buono regalo Amazon'],
   [/^Are you sure to disable auto-redeem?/gi, 'Si è sicuri di disattivare il ritiro automatico'],
   [/^Disable$/gi, 'Disattiva'],
   [/^Setup auto-redeem$/gi, 'Imposta ritiro automatico'],
   [/^Redeem my balance$/gi, 'Ritira il mio saldo'],
   [/^Select option$/gi, 'Seleziona opzione'],
   [/^e.g example@example.com$/gi, 'Es. example@example.com'],
   [/^update in$/gi, 'Aggiornamento tra'],
   [/^Pending transaction$/gi, 'Transazione in attesa'],
   [/^including/gi, 'Inclusi'],
   [/from my referrals$/gi, 'dai miei affiliati'],
   [/^Low quality IP/gi, 'IP di qualità bassa'],
   [/High Risk/gi, 'Alto Rischio'],
   [/^Details$/gi, 'Dettagli'],
   [/^Error while linking device$/gi, 'Errore durante l\'aggiunta del dispositivo'],
   [/^The device is not found$/gi, 'Dispositivo non trovato'],
   [/^Too Many Requests$/gi, 'Troppe Richieste'],
   [/^This device was already linked$/gi, 'Questo dispositivo è stato già collegato'],
   [/^Device successfully linked$/gi, 'Dispositivo collegato con successo'],
   [/^Show hidden devices$/gi, 'Mostra dispositivi nascosti'],
   [/^Hide$/gi, 'Nascondi'],
   [/^Unhide$/gi, 'Mostra'],
   [/^Valid referral$/gi, 'Affiliato valido'],
   [/^Transaction money was added back to your account balance, please verify you entered the correct payment details and try again$/gi, 'L\'importo della seguente transazione è stato riaccreditato nel saldo del tuo profilo. Per favore, verifica che i dettagli di pagamento siano corretti e riprova.'],
   // etc.
];
var numTerms = replaceArry.length;
var txtWalker = document.createTreeWalker(
   document.body,
   NodeFilter.SHOW_TEXT, {
      acceptNode: function(node) {
         //-- Skip whitespace-only nodes
         if (node.nodeValue.trim())
            return NodeFilter.FILTER_ACCEPT;

         return NodeFilter.FILTER_SKIP;
      }
   },
   false
);

var txtNode = null;
while (txtNode = txtWalker.nextNode()) {
   var oldTxt = txtNode.nodeValue;

   for (var J = 0; J < numTerms; J++) {
      oldTxt = oldTxt.replace(replaceArry[J][0], replaceArry[J][1]);
   }
   txtNode.nodeValue = oldTxt;
}
}), 2300)

setTimeout((function() {$("body").append('<h3 class="ea_text ea_text_xs">Traduzione italiana offerta da Creeperiano99</h3>'); window.scrollTo(9999, 9999);}), 2000)
GM_addStyle("body { overflow: hidden; }");