
function handleTicket(ticketClass, isIncrease) {

    const ticketCount = getInputValue(ticketClass);
    let ticketNewCount = ticketCount
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    document.getElementById(ticketClass + '-ticket').value = ticketNewCount;
    totalCalculate();
}

function totalCalculate() {
    const firstClassCount = getInputValue('first');
    const economyClassCount = getInputValue('economy');
    const totalPrice = firstClassCount * 150 + economyClassCount * 100;
    document.getElementById('subtotal').innerText = '$' + totalPrice;
    const vat = totalPrice * (10 / 100);
    document.getElementById('vat').innerText = '$' + vat;
    const grandTotal = totalPrice + vat;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
}

function getInputValue(ticketClass) {
    const inputTicket = document.getElementById(ticketClass + '-ticket')
    const ticketCount = parseInt(inputTicket.value);
    return ticketCount;
}