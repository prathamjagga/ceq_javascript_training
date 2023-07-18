list = ["L", "LO", "LOA", "LOAD", "LOADI", "LOADIN", "LOADING"];
index = 0;
setInterval(() => {
  document.getElementById("loading").innerHTML = list[index++];
  if (index == 7) index = 0;
}, 500);

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

setInterval(() => {
  document.getElementById("notif").innerHTML = "Polling for notifications";
  var a = randomNumber(1, 5);
  if (a > 3) document.getElementById("notif").innerHTML = "New notification";
}, 700);

setTimeout(() => {
  alert("loading completed");
  document.getElementById("timeoutLoader").style.display = "none";
}, 5000);

// Debouncing

let timeoutId;

function debounce(func, delay) {
  return function () {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(func, delay);
  };
}

function handleScroll() {
  console.log("loading new content");
}

const debouncedScrollHandler = debounce(handleScroll, 2000);

window.addEventListener("scroll", debouncedScrollHandler);
