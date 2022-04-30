var svg_X = `<svg class="X-sign" style="height: 40px; float:right; padding-bottom: 10px;" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>`;

let task = document.querySelector("#task");
let button = document.querySelector("#liveToastBtn");
let list = document.querySelector("#list");
let listItems = document.querySelectorAll("#list li");
listItems.forEach((item) => {
  item.addEventListener("click", selectedItem);
});

function selectedItem() {
  if (this.classList.contains("checked")) {
    this.classList.remove("checked");
    this.innerHTML = this.innerHTML.replace(svg_X);
  } else {
    this.classList.add("checked");
    if (!this.innerHTML.includes(svg_X)) {
      this.innerHTML += svg_X;
      this.querySelector(".X-sign").addEventListener("click", removeItem);
    }
  }
}

function removeItem() {
  list.removeChild(this.parentElement);
}

function newElement() {
  if (task.value.trim()) {
    const node = document.createElement("li");
    node.addEventListener("click", selectedItem);
    const textnode = document.createTextNode(task.value);
    node.appendChild(textnode);
    list.appendChild(node);
  } else {
    alert("You can not add empty comment!")
  }
}
