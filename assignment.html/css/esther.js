
const endTime = new Date("March 9,2024 11:30:00").getTime();
//endTime.setDate(endTime.getDate() + 10); // Set end time 10 days from now
function updateTimer() {
  var now = new Date().getTime();
  var timeDiff = endTime - now;



  var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
  if (timeDiff < 10 ){
    document.getElementById("days").textContent = "0" +days;
    document.getElementById("hours").textContent = "0" +hours;
    document.getElementById("minutes").textContent = "0" +minutes;
    document.getElementById("seconds").textContent = "0" +seconds;
    
  }

  var endDateString = endTime.toLocaleDateString();
  document.getElementById("DATE").textContent =
    "OFFER EXPIRES BY: " + endDateString;
}

setInterval(updateTimer, 1000);

