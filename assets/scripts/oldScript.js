var schedule = document.querySelector(".container");
var hour = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var elIds = ["#9AM", "#10AM", "#11AM", "#12PM", "#1PM", "#2PM", "#3PM", "#4PM", "#5PM"]
var timeSlot = ["moment('9:00am', 'h:mma')", "moment('10:00am', 'h:mma')", "moment('11:00am', 'h:mma')", "moment('12:00pm', 'h:mma')", "moment('1:00pm', 'h:mma')", "moment('2:00pm', 'h:mma')", "moment('3:00pm', 'h:mma')", "moment('4:00pm', 'h:mma')", "moment('5:00pm', 'h:mma')",];
var temp = "test";
console.log(schedule);

console.log(moment().format("ha"));
// Makes the row elwments and adds it onto the html doc
function rowMaker() {
    for (var i = 0; i < hour.length; i++) {
        var row = document.createElement("tr");
        var time = document.createElement("th");
        var info = document.createElement("th");
        var saveBtn = document.createElement("th");

        row.classList.add("row", "col-12");
        time.classList.add("hour", "col-1");
        info.classList.add("description", "col-10", "future");
        info.setAttribute("id", hour[i]);
        saveBtn.classList.add("saveBtn", "col-1");

        time.innerHTML = hour[i];
        row.appendChild(time);

        info.innerHTML = temp;
        row.appendChild(info);

        row.appendChild(saveBtn);

        schedule.appendChild(row);
    }
}

// colors the hours  based off time 
// does not work yet//
function momentChecker() {
    for (var i = 0; i < hour.length; i++) {
        var rowId = $(elIds[i]);
        var currentTime = moment().format("h:mma");
        var currentTimeHour = moment().format("ha");
        if (currentTime < timeSlot[i] ) {
            console.log("hi");
            rowId.removeClass("future");
            rowId.addClass("past");
        }

        if (currentTimeHour === moment().format("ha")) {
            rowId.removeClass("future");
            rowId.removeClass("past");
            rowId.addClass("present");
        }
    }
}

rowMaker();
momentChecker()