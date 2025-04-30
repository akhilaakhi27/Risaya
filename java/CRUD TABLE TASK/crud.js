let selectedRow = null;

function addOrUpdateRow() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = document.getElementById("age").value.trim();

  if (!name || !email  || !age)  {
    alert("Please fill out all the fields.");
    return;
  }

  if (selectedRow) {
    // Update existing row
    selectedRow.cells[0].innerHTML = name;
    selectedRow.cells[1].innerHTML = email;
    selectedRow.cells[2].innerHTML = age;
    selectedRow = null;
  } else {
    // Create new row
    const table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    newRow.insertCell(0).innerHTML = name;
    newRow.insertCell(1).innerHTML = email;
    newRow.insertCell(2).innerHTML = age;

    newRow.insertCell(3).innerHTML = `
      <button onclick="editRow(this)">Edit</button>
      <button onclick="deleteRow(this)">Delete</button>
    `;
  }

  clearForm();
}

function editRow(button) {
  selectedRow = button.parentElement.parentElement;
  document.getElementById("name").value = selectedRow.cells[0].innerHTML;
  document.getElementById("email").value = selectedRow.cells[1].innerHTML;
  document.getElementById("age").value = selectedRow.cells[2].innerHTML;
}

function deleteRow(button) {
  const row = button.parentElement.parentElement;
  row.parentNode.removeChild(row);
  if (selectedRow === row) {
    selectedRow = null;
  }
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("age").value = "";
}

