var mins=00;
var seconds = 00;
var tens = 00;
var OutputMins=document.getElementById('min');
var OutputSeconds = document.getElementById('second');
var OutputTens = document.getElementById('tens');
var buttonStart = document.getElementById('btn-start');
var buttonStop = document.getElementById('btn-stop');
var buttonReset = document.getElementById('btn-reset');
var Interval;

buttonStart.addEventListener('click', () => {
  clearInterval(Interval);
  Interval = setInterval(startTime, 10);
});
buttonStop.addEventListener('click', () => {
  clearInterval(Interval);
});
buttonReset.addEventListener('click', () => {
  clearInterval(Interval);
  mins="00";
  tens = "00";
  seconds = "00";
  OutputMins.innerHTML=mins;
  OutputSeconds.innerHTML = seconds;
  OutputTens.innerHTML = tens;
});
function startTime() {
  tens++;
  if (tens <= 9) {
    OutputTens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    OutputTens.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    OutputSeconds.innerHTML = "0" + seconds;
    tens = 0;
    OutputTens.innerHTML = "0" + tens;
  }
  if (seconds > 9) {
    OutputSeconds.innerHTML = seconds;
  }
  if (seconds > 59) {
    mins++;
    OutputMins.innerHTML = "0" + mins;
    seconds = 0;
    OutputSeconds.innerHTML = "0" + seconds;
  }
  if (mins > 9) {
    OutputMins.innerHTML = mins;
  }
}
