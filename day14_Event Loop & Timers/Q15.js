// Ask user for number of seconds (in browser this could be prompt())
let seconds = 10; // replace 10 with any user input value

let remaining = seconds;

console.log(`Countdown starts from ${remaining} seconds`);

const intervalId = setInterval(() => {
  remaining--;
  console.log(`Remaining: ${remaining}s`);

  if (remaining <= 0) {
    clearInterval(intervalId);
    console.log("Countdown Complete!");
  }
}, 1000);

// Optional: simulate stop when user presses "s" (browser example)
setTimeout(() => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "s") {
      clearInterval(intervalId);
      console.log("Countdown Stopped by User!");
    }
  });
}, 0);
