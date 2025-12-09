function timer(duration, onComplete) {
  setTimeout(() => {
    const message = "Timer of " + duration + " ms finished";
    onComplete(message);
  }, duration);
}

// example use:
timer(2000, (msg) => {
  console.log(msg);
});
