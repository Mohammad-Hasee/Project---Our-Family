
document.getElementById("button").addEventListener("click", gasBillBy);
document.getElementById("buttona").addEventListener("click", electricityBillBy);
document.getElementById("buttonb").addEventListener("click", internetBillBy);
document.getElementById("buttonc").addEventListener("click", utilitiesBillBy);


function gasBillBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = (num1 / num2).toFixed(3);
}

function electricityBillBy() 
{ 
        num3 = document.getElementById("thirdNumber").value;
        num4 = document.getElementById("fourthNumber").value;
        document.getElementById("reesult").innerHTML = (num3 / num4).toFixed(3);
}
function internetBillBy(){
        num5 = document.getElementById("fifthNumber").value;
        num6 = document.getElementById("sixthNumber").value;
        document.getElementById("resuult").innerHTML = (num5 / num6).toFixed(3);
}
function utilitiesBillBy(){
        num7 = document.getElementById("seventhNumber").value;
        num8 = document.getElementById("eightNumber").value;
        document.getElementById("resultt").innerHTML = (num7 / num8).toFixed(3);
}