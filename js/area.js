// select element

const result = document.getElementById("result");
const store = document.getElementById("store");
const clear = document.getElementById("clear");
const width = document.getElementById("width");
const breadth = document.getElementById("breadth");
const calculate = document.getElementById("calculate");
const records = document.getElementById("records");

//functions

//clear
const clearResult = () => (result.innerText = null);

//calculating area
const calcArea = () => {
  const area = width.valueAsNumber * breadth.valueAsNumber;
  //showing result
  result.innerText = `width : ${width.value} ft  * breadth : ${breadth.value} ft = ${area} sqft`;
  //remove value
  width.value = breadth.value = null;
};

//storing result
const storeResult = () => {
  records.innerHTML += `<li>${result.innerText}</li>`;
  clearResult();
};



//process

calculate.onclick = calcArea;

clear.onclick = clearResult;

store.onclick = storeResult;
