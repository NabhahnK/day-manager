var schedule = $(".container");
var hour = ["9AM", "10AM", "11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var temp = "test";

function rowMaker() {
    for(var i = 0; i < hour.length; i++) {
        var row = document.createElement("tr");
        var time = document.createElement("th");
        var info = document.createElement("th");
        var saveBtn = document.createElement("th");

        time.innerHTML = hour[i];
        row.appendChild(time);

        info.innerHTML = temp;
        row.appendChild(info);

        row.appendChild(saveBtn);


    }
}

rowMaker();