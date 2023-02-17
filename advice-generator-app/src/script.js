const btn = document.getElementById("btn");
const uId = document.querySelector(".advice-uid");
const adText = document.querySelector(".advice-text");

function fetchData() {
  btn.classList.add("loading");
  setTimeout(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        let advices = data.slip;

        uId.innerHTML = `ADVICE #${advices.id}`;
        adText.innerHTML = `${advices.advice}`;
        btn.classList.remove("loading");
      });
  }, [500]);
}
