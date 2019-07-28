"use strict";


var payoutField;
var interestRateField;
var yearField;
var presentValueOutputField;

window.onload = function () 
{
    payoutField = document.getElementById("inputPayout");
    interestRateField = document.getElementById("inputInterestRate");
    yearField = document.getElementById("inputYears")
    presentValueOutputField = document.getElementById("presentValueOutput");

    let calcBtn = document.getElementById("calcBtn");
    calcBtn.onclick = doValueCalc;
}

function doValueCalc()
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

function calculatePresentValue(annualPayout,interestRate,years)
{
    var presentValue = (annualPayout * [(1-(1/(Math.pow((1+interestRate),years))))/interestRate]);
    return presentValue;
};

