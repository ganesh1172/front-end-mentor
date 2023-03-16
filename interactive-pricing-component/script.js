// let pageViews = document.getElementById("pg-view");
// let price = document.getElementById("price");
// let period = document.getElementById("period");
// let toggle = document.getElementById("toggle");
// let slider = document.getElementById("slider");

let slider = document.getElementById("slider");
let price = document.getElementById("price");
let pageViews = document.getElementById("count");

let toggle = document.getElementById("toggle");
let period = document.getElementById("period");

const DISCOUNT = 0.25;

var prices = [4, 8, 16, 24, 32];

pageViews.innerHTML = "100K";

function discount() {
  period.innerHTML = "";

  if (toggle.checked) {
    period.innerHTML = "year";
    for (let i = 0; i < prices.length; i++) {
      prices[i] = prices[i] - prices[i] * DISCOUNT;
    }
    listener();
  } else {
    period.innerHTML = "month";
    prices = [8, 12, 16, 24, 36];
    listener();
  }
}

var listener = function () {
  window.requestAnimationFrame(function () {
    switch (slider.value) {
      case "1":
        price.innerHTML = Number(prices[0]).toFixed(2);
        pageViews.innerHTML = "10K";
        break;
      case "2":
        price.innerHTML = Number(prices[1]).toFixed(2);
        pageViews.innerHTML = "50K";
        break;
      case "3":
        price.innerHTML = Number(prices[2]).toFixed(2);
        pageViews.innerHTML = "100K";
        break;
      case "4":
        price.innerHTML = Number(prices[3]).toFixed(2);
        pageViews.innerHTML = "500K";
        break;
      case "5":
        price.innerHTML = Number(prices[4]).toFixed(2);
        pageViews.innerHTML = "1M";
    }
  });
};

slider.addEventListener("mousedown", function () {
  listener();
  slider.addEventListener("mousemove", listener);
});
slider.addEventListener("mouseup", function () {
  slider.removeEventListener("mousemove", listener);
});

slider.addEventListener("keydown", listener);

slider.oninput = function () {
  var value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background = "linear-gradient(to right, #10d5c2 0%, #10d5c2 " + value + "%, #eaeefb " + value + "%, #eaeefb 100%)";
};
