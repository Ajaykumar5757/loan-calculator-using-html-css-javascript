function calculate() {
    var amount = Number(document.getElementById("amount").value);
    var interest = Number(document.getElementById("interest").value);
    var months = Number(document.getElementById("months").value);

    if (isNaN(amount) || isNaN(interest) || isNaN(months) || amount <= 0 || interest < 0 || months <= 0) {
        alert("Please enter valid and positive values for amount, interest, and months.");
        return;
    }

    var monthlyInterest = (interest / 100) / 12;

    var monthlyamount = (amount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -months));
    monthlyamount = monthlyamount.toFixed(2);

    var totalCost = (monthlyamount* months).toFixed(2);

    var totalInterest = (totalCost - amount).toFixed(2);

    document.getElementById("loan-amount").innerHTML = "Monthly Amount to pay: Rs." + monthlyamount;
    document.getElementById("loan-amount").style.padding="5px";
    document.getElementById("total-interest").innerHTML = "Total Interest: Rs." + totalInterest;
    document.getElementById("total-interest").style.padding="5px";
    document.getElementById("total-cost").innerHTML = "Total Amount to pay: Rs." + totalCost;
    document.getElementById("total-cost").style.padding="5px";
}
