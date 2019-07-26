"use strict";

var principalField;
var interestRateField;
var loanLengthField;
var paymentOutputField;
var loanCostField; 

window.onload = function () 
{
    principalField = document.getElementById("inputPrincipal");
    interestRateField = document.getElementById("inputInterestRate");
    loanLengthField = document.getElementById("inputLoanLength")
    paymentOutputField = document.getElementById("paymentOutput");
    loanCostField = document.getElementById("loanCostOutput");

    let calcBtn = document.getElementById("calcBtn");
    calcBtn.onclick = doMortgageCalc;
}

function doMortgageCalc()
{
    var term, interestRate, loanAmount, monthlyPayment, totalLoan;

    //Get Data from UI
    term = Number(loanLengthField.value)*12;
    interestRate = Number(interestRateField.value)/1200;
    loanAmount = Number(principalField.value);

    //Process Data
    monthlyPayment = calculateMonthlyPayment(term,interestRate,loanAmount);
    loanAmount = calculateTotalLoan(monthlyPayment,term);

    //Display results
    monthlyPayment = "$" + monthlyPayment.toFixed(2);
    document.getElementById("paymentOutput").value = monthlyPayment;

    totalLoan = "$" + loanAmount.toFixed(2);
    document.getElementById("loanCostOutput").value = totalLoan;
}

function calculateMonthlyPayment(term,interestRate,loanAmount)
{
	var monthlyPayment = (loanAmount*(interestRate))/(1-Math.pow((1+(interestRate)),(-term)));
	return monthlyPayment;
}

function calculateTotalLoan(monthlyPayment,term)
{
    var totalLoan = monthlyPayment*term;
    return totalLoan;
}