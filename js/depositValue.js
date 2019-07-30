// Description: These functions will calculate the future value of a one-time deposit
//assuming compound interest (compounding annually)
//Author: Corinne Trudeau
"use strict";

/*
*This is the window.onload event handler
*/
window.onload = function () 
{
    var depositField;
    var interestRateField;
    var yearField;

    depositField = document.getElementById("inputDeposit");
    interestRateField = document.getElementById("inputInterestRate");
    yearField = document.getElementById("inputYears")

    let calcBtn = document.getElementById("calcBtn");

    /*
    *This is the anonymous function serving as the click event of the calcBtn
    */
    calcBtn.onclick = function()
    {
        var deposit, interestRate, years, earnedInterest, futureValue;

        //Get Data from UI
        deposit = Number(depositField.value);
        interestRate = Number(interestRateField.value)/100;
        years = Number(yearField.value);

        //Process Data
        futureValue = calculateFutureValue(deposit,interestRate,years);
        earnedInterest = calculateEarnedInterest(deposit,futureValue);


        //Display results
        earnedInterest = "$" + earnedInterest.toFixed(2);
        document.getElementById("earnedInterestOutput").value = earnedInterest;

        futureValue = "$" + futureValue.toFixed(2);
        document.getElementById("futureValueOutput").value = futureValue;
    }
}

/*
*This function will calculate future value of the one-time deposit
* @param deposit (number) - amount of initial deposit
* @param interestRate (number) - interest rate
* @param years (number) - years
* @return futureValue (number) - future value of the payment including interest
*/
function calculateFutureValue(deposit,interestRate,years)
{
    var futureValue = deposit * Math.pow((1+(interestRate)),years);
    return futureValue;
};
/*
*This function will calculate future value of the one-time deposit
* @param deposit (number) - amount of initial deposit
* @param futureValue (number) - future value of the payment including interest
* @return earnedInterest (number) - the amount of interest earned during timeframe
*/
function calculateEarnedInterest(deposit,futureValue)
{
    var earnedInterest = futureValue-deposit;
    return earnedInterest;
};