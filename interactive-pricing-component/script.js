const graph = document.querySelector(".graph");
const block = document.createDocumentFragment();

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    let graphData = data;
    graphData.map((val) => {
      let graphBlock = document.createElement("div");
      let hoverText = document.createElement("div");
      let amount = document.createElement("div");
      let day = document.createElement("p");

      hoverText.innerHTML = `$${val.amount}`;
      amount.innerHTML = "";
      day.innerHTML = `${val.day}`;

      graphBlock.appendChild(hoverText);
      graphBlock.appendChild(amount);
      graphBlock.appendChild(day);
      block.appendChild(graphBlock);

      graphBlock.classList.add("graph-block");
      hoverText.classList.add("hover-txt");
      amount.classList.add("graph-amount");
      day.classList.add("graph-text");

      amount.style.height = `${val.amount * 2}px`;
    });
    graph.appendChild(block);
  });
