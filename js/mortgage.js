var hoursWorkedField, payRateField, withHoldingsField, grossPayField, socialSecurityField, medicareField, federalField, takeHomePay;
window.onload = function () {
    hoursWorkedField = document.getElementById("inputHoursWorked");
    payRateField = document.getElementById("inputPayRate");
    withHoldingsField = document.getElementById("inputWithHoldings")
    let calcBtn = document.getElementById("calcBtn");
    calcBtn.onclick = doPayRollCalc;
}