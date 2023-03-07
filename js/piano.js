const sounds = [
  {
    id: 1,
    name: "C4",
    keyCode: 65,
  },
  {
    id: 2,
    name: "D4",
    keyCode: 83,
  },
  {
    id: 3,
    keyCode: 68,
    name: "E4",
  },
  {
    id: 4,
    keyCode: 70,
    name: "F4",
  },
  {
    id: 5,
    keyCode: 74,
    name: "G4",
  },
  {
    id: 6,
    keyCode: 75,
    name: "A4",
  },
  {
    id: 7,
    keyCode: 76,
    name: "B4",
  },
  {
    id: 8,
    keyCode: 186,
    name: "C5",
  },
];

const row = document.querySelector(".row");
// const keys = document.querySelectorAll(".key");

const createKey = ({ name }) => {
  const div = document.createElement("div");
  div.classList.add(
    "col",
    "key",
    "border",
    "border-dark",
    "py-5",
    "d-flex",
    "justify-content-center",
    "align-item-center"
  );
  div.setAttribute("sound", name);
  div.innerText = name;
  return div;
};

const play = (name) => {
  const a = new Audio("./sound/" + name + ".mp3");
  const el = document.querySelector("[sound=" + name + "]");
  el.classList.add("active");
  console.log(el);
  setTimeout(() => el.classList.remove("active"), 500);
  a.play();
};

sounds.forEach((sound) => {
  row.append(createKey(sound));
});

row.addEventListener("click", (event) => {
  if (event.target.classList.contains("key")) {
    const currentSound = event.target.getAttribute("sound");
    console.log(currentSound);
    // const a = new Audio("./sound/" + currentSound + ".mp3");
    // a.play();
    play(currentSound);
  }
});

// document.addEventListener("keyup", (event) =>
//   console.log(event.keyCode, event.key)
// );

document.addEventListener("keyup", (event) => {
  const current = sounds.find(({ keyCode }) => keyCode === event.keyCode);
  if (current) {
    console.log(current);
    // const a = new Audio()("./sound/" + current.name + ".mp3");
    // a.play();
    play(current.name);
  }
});
