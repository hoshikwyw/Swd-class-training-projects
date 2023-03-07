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
const textToSpeech = document.querySelector("#textToSpeech");
const speechToText = document.querySelector("#speechToText");
const synth = window.speechSynthesis;

// speech to text

const listen = () => {
  var recognition = new webkitSpeechRecognition();
  // set the language and start recognizing
  recognition.lang = "en-US";
  recognition.start();

  recognition.addEventListener("start", () => {
    speechToText.classList.add("active");
    speechToText.innerHTML = `<div class="spinner-border text-white spinner-border-sm" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>`;
  });

  recognition.addEventListener("end", () => {
    speechToText.classList.remove("active");

    speechToText.innerHTML = `<i class="bi btn-sm bi-mic"></i>`;
  });

  // when a speech result is returned
  recognition.onresult = function (event) {
    //Get the transcript of the spoken words
    var transcript = event.results[0][0].transcript;

    // console.log(transcript);

    // Display the transcript in the text box
    text.value += transcript;
    // document.getElementById("textbox").value = transcript;
  };
};

// text to speech
const speak = (text) => {
  const utterThis = new SpeechSynthesisUtterance();
  utterThis.rate = 0.5;
  utterThis.text = text;
  utterThis.voice = synth.getVoices()[1];
  utterThis.addEventListener("start", () => {
    textToSpeech.classList.add("active");
  });
  utterThis.addEventListener("end", () => {
    textToSpeech.classList.remove("active");
  });
  synth.speak(utterThis);
};

//looping

fonts.forEach((font) => {
  // console.log(font);
  fontFamily.append(new Option(font, font));
});

//actions

text.addEventListener("change", (event) => {
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

textToSpeech.addEventListener("click", () => {
  speak(text.value);
});

speechToText.addEventListener("click", () => {
  listen();
});
