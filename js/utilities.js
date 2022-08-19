
function getTextElementById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElementValueById(elementId, newValue) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = newValue;
}


function calculateSubTotal() {
    // calculate total 
    const currentPhoneTotal = getTextElementById('phone-total');
    const currentCaseTotal = getTextElementById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;

    setTextElementValueById('sub-total', currentSubTotal)

    // calculate Tax 
    const taxAmount = currentSubTotal * 0.1;
    setTextElementValueById('tax-amount', taxAmount.toFixed(2))

    // calculate Final Total
    const finalTotal = currentSubTotal + taxAmount;
    setTextElementValueById('final-total', finalTotal.toFixed(2))

}
