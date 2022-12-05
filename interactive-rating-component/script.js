const allStars = document.querySelectorAll(".rate-num");
const submitBtn = document.querySelector(".btn-submit");
const inputCard = document.querySelector(".card");
const resultCard = document.querySelector(".card-result");
const ratingOutput = document.querySelector(".rate-text");

allStars.forEach((star, i) => {
  star.onclick = function () {
    let currentStar = i + 1;
    submitBtn.disabled = false;
    allStars.forEach((star, j) => {
      currentStar >= j + 1 ? star.classList.add("selected") : star.classList.remove("selected");
    });
    ratingOutput.innerHTML = `You selected ${currentStar} out of ${allStars.length}`;
  };
});

function submitResult() {
  inputCard.style.display = "none";
  showResult();
}

function showResult() {
  resultCard.style.display = "block";
}

function editResult() {
  inputCard.style.display = "block";
  resultCard.style.display = "none";
}
