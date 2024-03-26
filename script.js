var employees = [];

function addEmployee() {
    var employeeName = document.getElementById("employee-name").value.trim();
    if (employeeName === "") {
        alert("Please enter employee name.");
        return;
    }
    employees.push(employeeName);
    document.getElementById("employee-name").value = "";
    showAlert("Employee added successfully!");
}

function generateSchedule() {
    if (employees.length === 0) {
        alert("Please add employees first.");
        return;
    }

    var schedule = document.getElementById("schedule");
    schedule.innerHTML = ""; // Clear previous schedule

    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");

    var headerRow = document.createElement("tr");
    var header1 = document.createElement("th");
    var header2 = document.createElement("th");
    header1.textContent = "Employee";
    header2.textContent = "Break Times";
    headerRow.appendChild(header1);
    headerRow.appendChild(header2);
    thead.appendChild(headerRow);

    table.appendChild(thead);

    for (var i = 0; i < employees.length; i++) {
        var employee = employees[i];
        var row = document.createElement("tr");
        var cell1 = document.createElement("td");
        var cell2 = document.createElement("td");
        cell1.textContent = employee;
        cell2.innerHTML = generateRandomBreakTime1() + "<br>" + generateRandomBreakTime2(); // Generate 2 break times
        row.appendChild(cell1);
        row.appendChild(cell2);
        tbody.appendChild(row);
    }

    table.appendChild(tbody);
    schedule.appendChild(table);
}

function generateRandomBreakTime1() {
    var hour = 1 + Math.floor(Math.random() * 3); // Random hour between 1 and 3
    var minute = Math.floor(Math.random() * 4) * 15;
    return '<span class="break1">' + hour.toString().padStart(2, "0") + ':' + minute.toString().padStart(2, "0") + '</span>';
}

function generateRandomBreakTime2() {
    var hour = 4 + Math.floor(Math.random() * 3); // Random hour between 4 and 6
    var minute = Math.floor(Math.random() * 4) * 15;
    return '<span class="break2">' + hour.toString().padStart(2, "0") + ':' + minute.toString().padStart(2, "0") + '</span>';
}


function resetSchedule() {
    employees = [];
    document.getElementById("schedule").innerHTML = "";
}

function downloadSchedule() {
    if (employees.length === 0) {
        alert("Please generate schedule first.");
        return;
    }

    var doc = new jsPDF();
    doc.autoTable({ html: '#schedule' });
    doc.save('schedule.pdf');
}

function showAlert(message) {
    alert(message);
}
