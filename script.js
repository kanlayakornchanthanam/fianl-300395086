// get the date from the input field
function getDate() {
    var countDownDate = document.getElementById("birthday");
}
//var countDownDate = new Date("Aug 12, 2024 15:37:25").getTime();
var countDownDate = new Date("birthday").getDate();
// start the countdown
function start() {
  var x = setInterval(function() {

     // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var dicseconds = Math.floor((distance % (1000 * 60)) / 10000);
      
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s " + dicseconds + "dis ";
      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "Date is Expired";
    }
  }, 1000);
}
    // Set the date we're counting down to

    // Update the count down every 1 second

        // Get today's date and time

        // Find the distance between now and the count down date

        // Time calculations for days, hours, minutes and seconds

        // Output the result in an element with id="demo"

        // If the count down is over, write some text 
        




// Update the count down every 1 second

