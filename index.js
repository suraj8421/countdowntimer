(function () {
  var hour = document.querySelector(".hour");
  var min = document.querySelector(".minutes");
  var sec = document.querySelector(".seconds");

  var startBtn = document.querySelector(".start");
  var stopBtn = document.querySelector(".stop");
  var resetBtn = document.querySelector(".reset");

  var countDownTimer = null;

  startBtn.addEventListener("click", function () {
    if (hour.value == 0 && min.value == 0 && sec.value == 0) return;

    startBtn.style.display = "none";
    stopBtn.style.display = "initial";

    countDownTimer = setInterval(timer, 1000);
  });

  stopBtn.addEventListener("click", function () {
    clearInterval(countDownTimer);
    startBtn.style.display = "initial";
    stopBtn.style.display = "none";
  });

  resetBtn.addEventListener("click", function () {
    clearInterval(countDownTimer);
    hour.value = "";
    min.value = "";
    sec.value = "";
    startBtn.style.display = "initial";
    stopBtn.style.display = "none";
  });

  function timer() {
    if (hour.value == 0 && min.value == 0 && sec.value == 0) {
      clearInterval(countDownTimer);
      hour.value = "";
      min.value = "";
      sec.value = "";
      startBtn.style.display = "initial";
      stopBtn.style.display = "none";
      return;
    }

    if (sec.value > 0) {
      sec.value = (sec.value - 1).toString().padStart(2, '0');
    } else {
      if (min.value > 0) {
        min.value = (min.value - 1).toString().padStart(2, '0');
        sec.value = 59;
      } else {
        if (hour.value > 0) {
          hour.value = (hour.value - 1).toString().padStart(2, '0');
          min.value = 59;
          sec.value = 59;
        }
      }
    }
  }
})();
