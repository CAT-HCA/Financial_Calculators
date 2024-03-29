// Description: These functions will calculate the monthly payment and total cost of a loan
//given user input of principal amount, interest rate, and loan length
//Author: Corinne Trudeau
"use strict";

/*
*This is the window.onload event handler
*/
window.onload = function () 
{
    var principalField = document.getElementById("inputPrincipal");
    var interestRateField = document.getElementById("inputInterestRate");
    var loanLengthField = document.getElementById("inputLoanLength");

    let calcBtn = document.getElementById("calcBtn");

    /*
    *This is the anonymous function serving as the click event of the calcBtn
    */
    calcBtn.onclick = function ()
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
}

/*
*This function will calculate monthly payments
* @param term (number) - the number of years of the loan term
* @param interestRate (number) - interest rate of the loan
* @param loanAmount (number) - loan principal amount
* @return monthlyPayment (number) - amount of monthly payments
*/
function calculateMonthlyPayment(term,interestRate,loanAmount)
{
	var monthlyPayment = (loanAmount*(interestRate))/(1-Math.pow((1+(interestRate)),(-term)));
	return monthlyPayment;
}

/*
*This function will calculate the total amount you pay on the loan including interest
* @param monthlyPayment (number) - amount of monthly payments
* @param term (number) - the number of years of the loan term
* @return totalLoan (number) - total amount you pay on the loan including interest
*/
function calculateTotalLoan(monthlyPayment,term)
{
    var totalLoan = monthlyPayment*term;
    return totalLoan;
}