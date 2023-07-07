const menu = document.querySelector(".btn-group-vertical");
menu.classList.add("btn-group-horizontal");
menu.classList.remove("btn-group-vertical");

const header = document.querySelector(".jumbotron");
header.style.textAlign = "right";
header.style.color = "white";
header.style.backgroundColor ="#6c757d";

const headerBtn = header.querySelector(".btn");

headerBtn.classList.add("btn-success");
headerBtn.classList.remove("btn-primary")

const cardsRow = document.querySelectorAll(".container .row")[2];
const cardBtn = cardsRow.querySelectorAll("a")[1];

cardBtn.classList.add("btn-success");
cardBtn.classList.remove("btn-primary")

const labels = ["Quarto item", "Quinto item"];
const list = document.querySelector(".list-group");

for (const label of labels) {
    const li = document.createElement("li")
    li.classList.add("list-group-item");
    const labelNode = document.createTextNode(label);
    li.appendChild(labelNode);
    list.append(li);
}

list.querySelectorAll("li")[0].classList.remove("active")
list.querySelectorAll("li")[3].classList.add("active")
