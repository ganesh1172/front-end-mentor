// const ul = document.getElementById("authors");

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    showData(data);
  });

function showData(data) {
  console.log(data);
}
