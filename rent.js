var rIndex,
table = document.getElementById("table");

// check the empty input
function checkEmptyInput()
{
var isEmpty = false,
    name = document.getElementById("name").value,
    gas  = document.getElementById("g").value,
    electricity = document.getElementById("e").value;
    internet = document.getElementById("i").value;
    house = document.getElementById("h").value;
    utilities = document.getElementById("u").value;
    rent = document.getElementById("t").value;

if(name === ""){
    alert("Please Fill up the name field");
    isEmpty = true;
}
else if(gas === ""){
    alert("Please Fill up the Gas Bill field");
    isEmpty = true;
}
else if(electricity === ""){
    alert("Please Fill up the Electricity Bill field");
    isEmpty = true;
}
else if(internet === ""){
  alert("Please Fill up the Internet Bill field");
  isEmpty = true;
}
else if(house === ""){
  alert("Please Fill up the House Rent field");
  isEmpty = true;
}
else if(utilities === ""){
  alert("Please Fill up the Utilities bill field");
  isEmpty = true;
}
else if(rent === ""){
  alert("Please Fill up the Total House Rent field");
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
    cell7 = newRow.insertCell(6),
    name = document.getElementById("name").value,
    gas = document.getElementById("g").value,
    electricity = document.getElementById("e").value;
    internet = document.getElementById("i").value;
    house = document.getElementById("h").value;
    utilities = document.getElementById("u").value;
    rent = document.getElementById("t").value;

cell1.innerHTML = name;
cell2.innerHTML = gas;
cell3.innerHTML = electricity
cell4.innerHTML = internet
cell5.innerHTML = house
cell6.innerHTML = utilities
cell7.innerHTML = rent
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
      document.getElementById("g").value = this.cells[1].innerHTML;
      document.getElementById("e").value = this.cells[2].innerHTML;
      document.getElementById("i").value = this.cells[3].innerHTML;
      document.getElementById("h").value = this.cells[4].innerHTML;
      document.getElementById("u").value = this.cells[5].innerHTML;
      document.getElementById("t").value = this.cells[6].innerHTML;
    };
}
}
selectedRowToInput();

function editHtmlTbleSelectedRow()
{
var name = document.getElementById("name").value,
    g = document.getElementById("g").value,
    e = document.getElementById("e").value;
    i = document.getElementById("i").value;
    h = document.getElementById("h").value;
    u = document.getElementById("u").value;
    t = document.getElementById("t").value;
if(!checkEmptyInput()){
table.rows[rIndex].cells[0].innerHTML = name;
table.rows[rIndex].cells[1].innerHTML = g;
table.rows[rIndex].cells[2].innerHTML = e;
table.rows[rIndex].cells[3].innerHTML = i;
table.rows[rIndex].cells[4].innerHTML = h;
table.rows[rIndex].cells[5].innerHTML = u;
table.rows[rIndex].cells[6].innerHTML = t;
}
}

function removeSelectedRow()
{
table.deleteRow(rIndex);
// clear input text
document.getElementById("name").value = "";
document.getElementById("g").value = "";
document.getElementById("e").value = "";
document.getElementById("i").value = "";
document.getElementById("h").value = "";
document.getElementById("u").value = "";
document.getElementById("t").value = "";
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
 let g = document.getElementById('g').value;
 let e = document.getElementById('e').value;
 let i = document.getElementById('i').value;
 let h = document.getElementById('h').value;
 let u = document.getElementById('u').value;
 let t = document.getElementById('t').value;

 // Save form data to local storage
 localStorage.setItem('name', name);
 localStorage.setItem('g', g);
 localStorage.setItem('e', e);
 localStorage.setItem('i', i);
 localStorage.setItem('h', h);
 localStorage.setItem('u', u);
 localStorage.setItem('t', t);
});
}

