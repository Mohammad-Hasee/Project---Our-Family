/*function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = (num1 / num2).toFixed(3);
}*/

	function divideBy(){
		let num1 = document.getElementById("firstNumber").value;
		let num2 = document.getElementById("secondNumber").value;
		document.getElementById("result").innerHTML = (num1 / num2).toFixed(3);
	}

	document.getElementById("Meal Rate").addEventListener("click", divideBy); 