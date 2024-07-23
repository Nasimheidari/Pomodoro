const length = 100;
const loading = document.getElementById("loading");
const input1 = document.getElementById("pomodoro");
const input2 = document.getElementById("rest");
let interval = null;
let currentTime = 0;
let time = 0;
let phase = "pomodoro";

const renderLoadingBar = () => {
  loading.innerText = "";
  for (let i = 0; i < length; i++) {
    if (currentTime > i) {
      loading.innerText += "█";
    } else {
      loading.innerText += "░";
    }
  }
};
const start = () => {
  if (phase === "pomodoro") {
    time = input1.value;
  } else if (phase === "break") {
    time = input2.value;
  }
  const loadingTime = (time * 60) / length;

  renderLoadingBar();

  interval = setInterval(() => {
    if (currentTime < length) {
      currentTime++;
      renderLoadingBar();
    } else {
      clearInterval(interval);
      if (phase === "pomodoro") {
        alert("Focus time finished. Time for a break!");
        phase = "break";
      } else {
        alert("Break time finished. Back to work!");
        phase = "pomodoro";
      }
      currentTime = 0;
    }
  }, loadingTime * 1000);
};
const pause = () => {
  clearInterval(interval);
};

