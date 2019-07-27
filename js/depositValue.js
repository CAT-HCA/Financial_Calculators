"use strict";

var depositField;
var interestRateField;
var yearField;
var earnedInterestOutputField;
var futureValueOutputField; 

window.onload = function () 
{
    depositField = document.getElementById("inputDeposit");
    interestRateField = document.getElementById("inputInterestRate");
    yearField = document.getElementById("inputYears")
    earnedInterestOutputField = document.getElementById("earnedInterestOutput");
    futureValueOutputField = document.getElementById("futureValueOutput");

    let calcBtn = document.getElementById("calcBtn");
    calcBtn.onclick = doValueCalc;
}

function doValueCalc()
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

function calculateFutureValue(deposit,interestRate,years)
{
    var futureValue = deposit * Math.pow((1+(interestRate)),years);
    return futureValue;
};

function calculateEarnedInterest(deposit,futureValue)
{
    var earnedInterest = futureValue-deposit;
    return earnedInterest;
};