var rIndex,
table = document.getElementById("table");

// check the empty input
function checkEmptyInput()
{
var isEmpty = false,
    date = document.getElementById("date").value,
    day = document.getElementById("day").value,
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = document.getElementById("c").value;
    d = document.getElementById("d").value;
    e = document.getElementById("e").value;

if(date === ""){
    alert("Date Connot Be Empty");
    isEmpty = true;
}
else if(day === ""){
    alert("Day Connot Be Empty");
    isEmpty = true;
}
else if(a === ""){
    alert("A Connot Be Empty");
    isEmpty = true;
}
else if(b === ""){
  alert("B Connot Be Empty");
  isEmpty = true;
}
else if(c === ""){
  alert("C Connot Be Empty");
  isEmpty = true;
}
else if(d === ""){
  alert("D Connot Be Empty");
  isEmpty = true;
}
else if(e === ""){
  alert("E Connot Be Empty");
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
    date = document.getElementById("date").value,
    day = document.getElementById("day").value,
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = document.getElementById("c").value;
    d = document.getElementById("d").value;
    e = document.getElementById("e").value;

cell1.innerHTML = date;
cell2.innerHTML = day;
cell3.innerHTML = a
cell4.innerHTML = b
cell5.innerHTML = c
cell6.innerHTML = d
cell7.innerHTML = e
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
      document.getElementById("date").value = this.cells[0].innerHTML;
      document.getElementById("day").value = this.cells[1].innerHTML;
      document.getElementById("a").value = this.cells[2].innerHTML;
      document.getElementById("b").value = this.cells[3].innerHTML;
      document.getElementById("c").value = this.cells[4].innerHTML;
      document.getElementById("d").value = this.cells[5].innerHTML;
      document.getElementById("e").value = this.cells[6].innerHTML;
    };
}
}
selectedRowToInput();

function editHtmlTbleSelectedRow()
{
var date = document.getElementById("date").value,
    day = document.getElementById("day").value,
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = document.getElementById("c").value;
    d = document.getElementById("d").value;
    e = document.getElementById("e").value;
if(!checkEmptyInput()){
table.rows[rIndex].cells[0].innerHTML = date;
table.rows[rIndex].cells[1].innerHTML = day;
table.rows[rIndex].cells[2].innerHTML = a;
table.rows[rIndex].cells[3].innerHTML = b;
table.rows[rIndex].cells[4].innerHTML = c;
table.rows[rIndex].cells[5].innerHTML = d;
table.rows[rIndex].cells[6].innerHTML = e;
}
}

function removeSelectedRow()
{
table.deleteRow(rIndex);
// clear input text
document.getElementById("date").value = "";
document.getElementById("day").value = "";
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
 let date = document.getElementById('date').value;
 let day = document.getElementById('day').value;
 let a = document.getElementById('a').value;
 let b = document.getElementById('b').value;
 let c = document.getElementById('c').value;
 let d = document.getElementById('d').value;
 let e = document.getElementById('e').value;

 // Save form data to local storage
 localStorage.setItem('date', date);
 localStorage.setItem('day', day);
 localStorage.setItem('a', a);
 localStorage.setItem('b', b);
 localStorage.setItem('c', c);
 localStorage.setItem('d', d);
 localStorage.setItem('e', e);
});
}

