# Day Manager

![Day Manager website](./assets/images/Day-Manager.PNG "Day Manager website")

This project was an effort to use just scripting to make a day planeer along side the provided html and css.

This is currently unfinished

I have also deployed it as a [GitHub Page](https://nabhahnk.github.io/day-manager/).

# JavaScript 

I have currently made two functions, One to make the area that shows the hour,textfield, and submit button. The second, to color code the rows to tell the user if the time for those tasks are over.

```javascript
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
```

```javascript
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
```