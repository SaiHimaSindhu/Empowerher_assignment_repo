// start logging "Loading..." every 1 second
const loadingId = setInterval(() => {
  console.log("Loading...");
}, 1000);

// after 5 seconds, stop the interval and log completion
setTimeout(() => {
  clearInterval(loadingId);
  console.log("Loaded successfully!");
}, 5000);
