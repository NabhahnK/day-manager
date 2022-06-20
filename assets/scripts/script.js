var schedule = document.querySelector(".container");
var hour = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var elIds = ["#9AM", "#10AM", "#11AM", "#12PM", "#1PM", "#2PM", "#3PM", "#4PM", "#5PM"]
var timeSlot = ["moment('9:00am', 'h:mma')", "moment('10:00am', 'h:mma')", "moment('11:00am', 'h:mma')", "moment('12:00pm', 'h:mma')", "moment('1:00pm', 'h:mma')", "moment('2:00pm', 'h:mma')", "moment('3:00pm', 'h:mma')", "moment('4:00pm', 'h:mma')", "moment('5:00pm', 'h:mma')",];
var temp = "test";
console.log(schedule);

console.log(moment().format("ha"));