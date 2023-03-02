// variables
const fonts = [
  "Agency FB",
  "Bodoni MT",
  "Banhaus 93 Regular",
  "Broadway Regular",
  "Brush Script MT Italic",
  "Lucida Handwriting Italic",
  "Kunstler Script Regular",
];
// selectors

const output = document.querySelector("#output");
const text = document.querySelector("#text");
const count = document.querySelector("#count");
const color = document.querySelector("#color");
const fontSize = document.querySelector("#fontSize");
const fontFamily = document.querySelector("#fontFamily");

//looping

fonts.forEach((font) => {
  // console.log(font);
  fontFamily.append(new Option(font, font));
});

//actions

text.addEventListener("keyup", (event) => {
  //   console.log(text.value);
  output.innerText = text.value;
  count.innerText = text.value.length;
});

color.addEventListener("change", (event) => {
  output.style.color = event.target.value;
});

fontSize.addEventListener("change", (event) => {
  output.style.fontSize = event.target.value + "px";
});

fontFamily.addEventListener("change", (event) => {
  output.style.fontFamily = event.target.value;
  // output.style.fontFamily = fontFamily.value;
});
