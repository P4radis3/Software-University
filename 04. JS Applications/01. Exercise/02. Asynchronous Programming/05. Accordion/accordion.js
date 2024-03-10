window.addEventListener("load", solution);

async function solution() {
  const url = "http://localhost:3030/jsonstore/advanced/articles/list";
  const response = await fetch(url);
  const dataOfBoxes = await response.json();
  printBoxes(dataOfBoxes);
}

async function printBoxes(boxData) {
  const main = document.getElementById("main");

  const divs = [];

  for (let key in boxData) {
    const { _id } = boxData[key];
    const urlAdditionalData = `http://localhost:3030/jsonstore/advanced/articles/details/${_id}`;
    const receivedResponse = await fetch(urlAdditionalData);
    const contentOfBox = await receivedResponse.json();
    divs.push(createBox(contentOfBox));
  }

  main.replaceChildren(...divs);
}

function createBox(contentOfBox) {
  const { title, content, _id } = contentOfBox;

  const mainDiv = createEl("div", "", { class: "accordion" });

  const divHead = createEl("div", "", { class: "head" });
  const spanName = createEl("span", title);
  const bttn = createEl("button", "More", { class: "button", id: _id });
  bttn.addEventListener("click", showMore);
  appender(divHead, spanName, bttn);

  const divExtra = createEl("div", "", { class: "extra" });
  const para = createEl("p", content);
  divExtra.appendChild(para);

  appender(mainDiv, divHead, divExtra);
  return mainDiv;
}

function showMore(e) {
  const buttonState = this;
  const hiddenContent = e.target.parentElement.parentElement.querySelector(".extra");

  if (buttonState.textContent == "More") {
    hiddenContent.style.display = "block";
    buttonState.textContent = "Less";
  } else {
    hiddenContent.style.display = "none";
    buttonState.textContent = "More";
  }
}

function createEl(type, content, attributes = {}) {
  const el = document.createElement(type);

  for (let key in attributes) {
    el.setAttribute(key, attributes[key]);
  }
  el.textContent = content;
  return el;
}

function appender(parent, ...children) {
  children.forEach((child) => parent.appendChild(child));
}
