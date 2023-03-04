// variables;
const services = [
  {
    id: 1,
    title: "Domain Service",
    price: 15,
  },
  {
    id: 2,
    title: "Hosting Service",
    price: 30,
  },
  {
    id: 3,
    title: "Web Design Service",
    price: 150,
  },
  {
    id: 4,
    title: "Maintenance Service",
    price: 100,
  },
];

//selector;
const app = document.querySelector("#app");
const invoiceForm = document.querySelector("#invoiceForm");
const selectService = document.querySelector("#selectService");
const quantity = document.querySelector("#quantity");
const lists = document.querySelector("#lists");
const subTotal = document.querySelector("#subTotal");
const tax = document.querySelector("#tax");
const total = document.querySelector("#total");
const listTable = document.querySelector("#listTable");

// functions

const createTr = (service, quantity) => {
  const tr = document.createElement("tr");
  tr.setAttribute("service-id", service.id);
  tr.classList.add("list");
  const total = service.price * quantity;
  tr.innerHTML = `
  
                <td class="d-flex justify-content-between">${service.title}
                <i class="bi bi-trash3 text-danger del-btn"></i>
                </td>
                <td class="text-end list-quantity">${quantity}</td>
                <td class="text-end">${service.price}</td>
                <td class="text-end list-total">${total}</td>
              
  `;
  return tr;
};

const calculateTax = (amount, percentage = 5) => {
  return amount * (percentage / 100);
};

const findTotal = () => {
  const listTotal = document.querySelectorAll(".list-total");
  let subTotalCalculated = [...listTotal].reduce(
    (pv, cv) => pv + parseFloat(cv.innerText),
    0
  );
  // listTotal.forEach((el) => (subTotal += parseFloat(el.innerText)));
  subTotal.innerText = subTotalCalculated;
  tax.innerText = calculateTax(subTotalCalculated);
  total.innerText = subTotalCalculated + calculateTax(subTotalCalculated);
  // console.log(subTotalCalculated);
};

const showTable = () => {
  if (lists.children.length) {
    listTable.classList.remove("d-none");
  } else {
    listTable.classList.add("d-none");
  }
};

// process (tasks)
//service options loop
services.forEach(({ title, id }) =>
  selectService.append(new Option(title, id))
);
//data collect from form
invoiceForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log(
  //   selectService.value,
  //   selectService.options[selectService.selectedIndex].innerText,
  //   quantity.valueAsNumber
  // );

  //  **********
  // console.log(
  //   selectService.value,
  //   quantity.valueAsNumber,
  //   services.find((service) => service.id == selectService.value)
  // );

  const selectedService = services.find(
    ({ id }) =>id == selectService.value
  );

  const isExistedService = [...lists.children].find(
    (el) => el.getAttribute("service-id") == selectedService.id
  );

  if (isExistedService) {
    // console.log("yes");
    const existedQuantity = isExistedService.querySelector(".list-quantity");

    existedQuantity.innerText =
      parseFloat(existedQuantity.innerText) + quantity.valueAsNumber;

    isExistedService.querySelector(".list-total").innerText =
      existedQuantity.innerText * selectedService.price;
  } else {
    lists.append(createTr(selectedService, quantity.valueAsNumber));
  }

  findTotal();
  invoiceForm.reset();
  showTable();
});

app.addEventListener("click", (event) => {
  const currentElement = event.target;
  if (currentElement.classList.contains("del-btn")) {
    currentElement.closest("tr").remove();
    findTotal();
    showTable();
  }
  // console.log(currentElement);
});
