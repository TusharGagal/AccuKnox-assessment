const boldButton = document.querySelectorAll(".bold");
const italicButton = document.querySelectorAll(".italic");
const underlineButton = document.querySelectorAll(".underline");
const fontsizeInput = document.querySelectorAll(".font-size");
const colorInput = document.querySelectorAll(".color");

function changeStyle(e, type) {
  const tar = e.target.parentNode.parentNode;
  if (type === "bold") {
    tar.nextSibling.nextSibling.children[0].style.fontWeight = "bold";
  } else if (type === "underline") {
    tar.nextSibling.nextSibling.children[0].style.textDecoration = "underline";
  } else if (type === "italic") {
    tar.nextSibling.nextSibling.children[0].style.fontStyle = "italic";
  } else if (type === "font-size") {
    tar.nextSibling.nextSibling.children[0].style.fontSize = `${e.target.value}px`;
  } else if (type === "colorInput") {
    tar.nextSibling.nextSibling.children[0].style.color = e.target.value;
  }
}

for (bold of boldButton) {
  bold.addEventListener("click", (e) => changeStyle(e, "bold"));
}
for (italic of italicButton) {
  italic.addEventListener("click", (e) => changeStyle(e, "italic"));
}
for (underline of underlineButton) {
  underline.addEventListener("click", (e) => changeStyle(e, "underline"));
}

for (input of fontsizeInput) {
  input.addEventListener("change", (e) => {
    changeStyle(e, "font-size");
  });
}
for (color of colorInput) {
  color.addEventListener("change", (e) => {
    changeStyle(e, "colorInput");
  });
}
