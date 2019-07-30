// Description: These functions will calculate the present value of an ordinary annuity
//Author: Corinne Trudeau
"use strict";



/*
*This is the window.onload event handler
*/
window.onload = function () 
{
    var payoutField;
    var interestRateField;
    var yearField;
    payoutField = document.getElementById("inputPayout");
    interestRateField = document.getElementById("inputInterestRate");
    yearField = document.getElementById("inputYears")

    let calcBtn = document.getElementById("calcBtn");
    /*
    *This is the anonymous function serving as the click event of the calcBtn
    */
    calcBtn.onclick = function ()
    {
        var annualPayout, interestRate, years, presentValue;

        //Get Data from UI
        annualPayout = Number(payoutField.value);
        interestRate = Number(interestRateField.value)/100;
        years = Number(yearField.value);

        //Process Data
        presentValue = calculatePresentValue(annualPayout,interestRate,years);


        //Display results
        presentValue = "$" + presentValue.toFixed(2);
        document.getElementById("presentValueOutput").value = presentValue;
    }
}
/*
*This function will calculate the present value of an ordinary annuity
* @param annualPayout (number) - amount paid out each year
* @param interestRate (number) - interest rate
* @param years (number) - years
* @return presentValue (number) - amount that would be needed to fund the desired returned payments
*/
function calculatePresentValue(annualPayout,interestRate,years)
{
    var presentValue = (annualPayout * [(1-(1/(Math.pow((1+interestRate),years))))/interestRate]);
    return presentValue;
};

