const schedule = document.querySelector(".container");
let hour = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
let elIds = ["#9AM", "#10AM", "#11AM", "#12PM", "#1PM", "#2PM", "#3PM", "#4PM", "#5PM"]
let timeSlot = [moment('9am', 'ha'), moment('10am', 'ha'), moment('11am', 'ha'), moment('12pm', 'ha'), moment('1pm', 'ha'), moment('2pm', 'ha'),
moment('3pm', 'ha'), moment('4pm', 'ha'), moment('5pm', 'ha')];
let placeHolderText = "Add task";
console.log(schedule);

console.log(moment().format("ha"));

function saveInfo(event) {
    event.preventDefault();
    let ifBtn = event.target.dataset.id;
    if (!ifBtn) return;
    let btnInfo = document.getElementById(ifBtn);
    let theInfo = btnInfo.value;
    console.log("Bob");
    
    localStorage.setItem(ifBtn, theInfo);
}

function setInfo(x) {
    let textArea = document.getElementById(hour[x]);
    if (localStorage.getItem(hour[x])) {
        textArea.innerHTML = localStorage.getItem(hour[x]);
    }
}

function rowMaker() {
    for (let i = 0; i < hour.length; i++) {
        let row = document.createElement("form");
        let time = document.createElement("label");
        let input = document.createElement("textarea");
        let info = document.createElement("th");
        let saveBtn = document.createElement("input");

        row.classList.add("row", "col-12");
        time.classList.add("hour", "col-1");

        time.innerHTML = hour[i];
        row.appendChild(time);

        info.innerHTML = placeHolderText;
        input.innerHTML = placeHolderText;

        if (moment(timeSlot[i]).isAfter()) {
            input.classList.add("description", "col-10", "future");
            input.setAttribute("id", hour[i]);
            row.appendChild(input);
        } else if (moment(timeSlot[i]).isSame(moment().startOf('hour'))) {
            info.classList.add("description", "col-10", "present");
            info.setAttribute("id", hour[i]);
            row.appendChild(info);
        } else {
            info.classList.add("description", "col-10", "past");
            info.setAttribute("id", hour[i]);
            row.appendChild(info);
        }

        saveBtn.setAttribute("type", "submit");
        saveBtn.setAttribute("value", "submit");
        saveBtn.setAttribute("data-id", hour[i]);
        saveBtn.classList.add("saveBtn", "col-1");

        row.appendChild(saveBtn);

        schedule.appendChild(row);
        setInfo(i);
    }
}


rowMaker();

schedule.addEventListener("click", saveInfo);