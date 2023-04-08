var rIndex,
table = document.getElementById("table");

// check the empty input
function checkEmptyInput()
{
var isEmpty = false,
    name = document.getElementById("name").value,
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = document.getElementById("c").value;
    d = document.getElementById("d").value;
    e = document.getElementById("e").value;

if(name === ""){
    alert("Insert Name, Please");
    isEmpty = true;
}
else if(a === ""){
    alert("Insert Total Meal, Please");
    isEmpty = true;
}
else if(b === ""){
  alert("Insert Meal Rate, Please");
  isEmpty = true;
}
else if(c === ""){
  alert("Insert Deposited Amount, Please");
  isEmpty = true;
}
else if(d === ""){
  alert("Insert Need To Pay, Please");
  isEmpty = true;
}
else if(e === ""){
  alert("Insert Excess or Less, Please");
  isEmpty = true;
}
return isEmpty;
}

// add Row
function addHtmlTableRow()
{
// get the table by id
// create a new row and cells
// get value from input text
// set the values into row cell's
if(!checkEmptyInput()){
var newRow = table.insertRow(table.length),
    cell1 = newRow.insertCell(0),
    cell2 = newRow.insertCell(1),
    cell3 = newRow.insertCell(2),
    cell4 = newRow.insertCell(3),
    cell5 = newRow.insertCell(4),
    cell6 = newRow.insertCell(5),
    name = document.getElementById("name").value,
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = document.getElementById("c").value;
    d = document.getElementById("d").value;
    e = document.getElementById("e").value;

cell1.innerHTML = name;
cell2.innerHTML = a
cell3.innerHTML = b
cell4.innerHTML = c
cell5.innerHTML = d
cell6.innerHTML = e
// call the function to set the event to the new row
selectedRowToInput();
}
}

// display selected row data into input text
function selectedRowToInput()
{

for(var i = 1; i < table.rows.length; i++)
{
    table.rows[i].onclick = function()
    {
      // get the seected row index
      rIndex = this.rowIndex;
      document.getElementById("name").value = this.cells[0].innerHTML;
      document.getElementById("a").value = this.cells[1].innerHTML;
      document.getElementById("b").value = this.cells[2].innerHTML;
      document.getElementById("c").value = this.cells[3].innerHTML;
      document.getElementById("d").value = this.cells[4].innerHTML;
      document.getElementById("e").value = this.cells[5].innerHTML;
    };
}
}
selectedRowToInput();

function editHtmlTbleSelectedRow()
{
var name = document.getElementById("name").value,
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = document.getElementById("c").value;
    d = document.getElementById("d").value;
    e = document.getElementById("e").value;
if(!checkEmptyInput()){
table.rows[rIndex].cells[0].innerHTML = name;
table.rows[rIndex].cells[1].innerHTML = a;
table.rows[rIndex].cells[2].innerHTML = b;
table.rows[rIndex].cells[3].innerHTML = c;
table.rows[rIndex].cells[4].innerHTML = d;
table.rows[rIndex].cells[5].innerHTML = e;
}
}

function removeSelectedRow()
{
table.deleteRow(rIndex);
// clear input text
document.getElementById("name").value = "";
document.getElementById("a").value = "";
document.getElementById("b").value = "";
document.getElementById("c").value = "";
document.getElementById("d").value = "";
document.getElementById("e").value = "";
}

function saveSelectForm(){
  // Get form data
let formData = document.getElementById('form');

// Create an event listener for submitting the form
formData.addEventListener('submit', function(event){
 // Prevent the form from submitting
 event.preventDefault();

 // Get form field values
 let name = document.getElementById('name').value;
 let a = document.getElementById('a').value;
 let b = document.getElementById('b').value;
 let c = document.getElementById('c').value;
 let d = document.getElementById('d').value;
 let e = document.getElementById('e').value;

 // Save form data to local storage
 localStorage.setItem('name', name);
 localStorage.setItem('a', a);
 localStorage.setItem('b', b);
 localStorage.setItem('c', c);
 localStorage.setItem('d', d);
 localStorage.setItem('e', e);
});
}

