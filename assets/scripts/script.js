var schedule = document.querySelector(".container");
var hour = ["9AM", "10AM", "11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var temp = "test";
console.log(schedule);

function rowMaker() {
    for(var i = 0; i < hour.length; i++) {
        var row = document.createElement("tr");
        var time = document.createElement("th");
        var info = document.createElement("th");
        var saveBtn = document.createElement("th");

        row.classList.add("row");
        time.classList.add("hour");
        info.classList.add("description");
        saveBtn.classList.add("saveBtn");

        time.innerHTML = hour[i];
        row.appendChild(time);

        info.innerHTML = temp;
        row.appendChild(info);

        row.appendChild(saveBtn);

        schedule.appendChild(row);
    }
}

rowMaker();