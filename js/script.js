// STEP 1 - RACCOLTA DATI
const userName = document.getElementById('txtName')
const km = document.getElementById('txtKm')
const age = document.getElementById('txtAge')
const btnGenerate = document.getElementById('btnGenerate')
const btnReset = document.getElementById('btnReset')
const costoBiglietto = document.getElementById('txtTot')

//STEP 2 - GESTIONE EVENTI
btnGenerate.addEventListener('click', function() {
    const userNameValue = userName.value;
    const kmValue = parseInt(km.value);
    const ageValue = parseInt(age.value);
    let ticketPrice = kmValue * 0.21
    let message

    //CONTROLLO INPUT UTENTE
    if (isNaN(kmValue) || isNaN(ageValue) || !userNameValue) {
        alert('Attenzione! Valori mancanti o errati!')
        location.reload()
    }
        
    if (ageValue < 18) {
        let discount = parseInt(ticketPrice) * 0.20
        let tot = ticketPrice - discount
        message = `Biglietto scontato del 20% !` 
        costoBiglietto.value = tot
       
    } else if (ageValue > 65) {
        let discount = ticketPrice * 0.40
        tot = ticketPrice - discount
        message = `Biglietto scontato del 40% !`;
        costoBiglietto.value = tot
    }  else{
            message = `Biglietto standard`
            costoBiglietto.value = ticketPrice
    } 

    // ASSEGNO I RISULTATI IN OUTPUT SULLA PAGINA
    const ticketName = document.getElementById('txtArea')
    ticketName.innerText = ticketName.value + userNameValue
    const discount = document.getElementById('txtDiscount') 
    discount.value = message
}
) 

