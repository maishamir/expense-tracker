const expenseForm = document.forms["add-expense"];
const expenseTable = document.querySelector('tbody')
const clearAll = document.querySelector('.clear-all')

expenseForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (expenseTable.innerText === "No expenses added yet") {
        expenseTable.innerText = "";
    }
    const name = expenseForm.querySelector("#name").value;
    const date = expenseForm.querySelector("#date").value;
    const amount = expenseForm.querySelector("#amount").value;

    // create elements
    // one tr for the whole row, one td for name, date, and amount each, and one empty checkbox
    const tr = document.createElement('tr')
    const tdName = document.createElement('td')
    const tdDate = document.createElement('td')
    const tdAmount = document.createElement('td')
    const tdDelete = document.createElement('td')

    // add content to elements
    tdName.textContent = name;
    tdDate.textContent = date;
    tdAmount.textContent = amount;
    tdDelete.innerHTML = "<button>x</button>"

    // append elements to DOM
    tr.append(tdName)
    tr.append(tdDate)
    tr.append(tdAmount)
    tr.append(tdDelete)
    expenseTable.append(tr)

    // clear the inputs
    expenseForm.reset();
})

clearAll.addEventListener('click', function (e) {
    // expenseTable.innerHTML = "No expenses added yet"
    var rowCount = document.getElementById('expense-table').rows[0].cells.length
    expenseTable.innerHTML = "<td colspan='" + rowCount + "'>No expenses added yet</td>"
})

