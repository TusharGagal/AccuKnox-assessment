const buttons = {
  bold: document.querySelectorAll(".bold"),
  italic: document.querySelectorAll(".italic"),
  underline: document.querySelectorAll(".underline"),
};

const inputs = {
  fontsize: document.querySelectorAll(".font-size"),
  color: document.querySelectorAll(".color"),
};
function changeStyle(e, type) {
  const tar = e.target.parentNode.parentNode;
  if (type === "bold") {
    tar.nextSibling.nextSibling.children[0].style.fontWeight = "bold";
  } else if (type === "underline") {
    tar.nextSibling.nextSibling.children[0].style.textDecoration = "underline";
  } else if (type === "italic") {
    tar.nextSibling.nextSibling.children[0].style.fontStyle = "italic";
  } else if (type === "fontsize") {
    tar.nextSibling.nextSibling.children[0].style.fontSize = `${e.target.value}px`;
  } else if (type === "color") {
    tar.nextSibling.nextSibling.children[0].style.color = e.target.value;
  }
}

for (const buttonType in buttons) {
  buttons[buttonType].forEach((button) => {
    button.addEventListener("click", (e) => changeStyle(e, buttonType));
  });
}

for (const inputType in inputs) {
  inputs[inputType].forEach((input) => {
    input.addEventListener("change", (e) => {
      changeStyle(e, inputType);
    });
  });
}
