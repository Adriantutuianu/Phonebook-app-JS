let list = [
  { name: "Adrian", surname: "Tut", phone: "0766566398" },
  { name: "John", surname: "Doe", phone: "07645557766" },
  { name: "Mickey", surname: "Smith", phone: "0763554358" },
  { name: "George", surname: "Smith", phone: "0763554358" },
];

const phoneList = document.querySelector("#phone-list");

const displayListElement = (item) => {
  let node = document.createElement("LI"); //First create an LI node,
  let textnode = document.createTextNode(
    `${item.name} ${item.surname} - ${item.phone}`
  ); //then create a Text node,
  node.appendChild(textnode); //then append the Text node to the LI node.
  phoneList.appendChild(node); //Finally append the LI node to the list.
};

const clearDisplayedList = () => {
  // delete all displayed elements
  while (phoneList.firstChild) {
    phoneList.removeChild(phoneList.firstChild);
  }
};

const addNewContact = (e) => {
  e.preventDefault();
  let firstName = document.querySelector("#fname");
  let lastName = document.querySelector("#lname");
  let phoneNumber = document.querySelector("#phone");

  const newContact = {
    name: firstName.value,
    surname: lastName.value,
    phone: phoneNumber.value,
  };

  clearDisplayedList();

  // generate a new list
  const newList = [...list, newContact];

  // re display new list
  newList.map((item) => {
    displayListElement(item);
  });
};
const newContactForm = document.querySelector(".new-contact-form");

newContactForm.addEventListener("submit", addNewContact);

// Loop through array list
list.map((item) => {
  displayListElement(item);
});
