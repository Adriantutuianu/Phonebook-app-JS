const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const phoneNumber = document.querySelector("#phone");
const newContactForm = document.querySelector(".new-contact-form");
const phoneList = document.querySelector("#phone-list");

let list = [
  { name: "Adrian", surname: "Tut", phone: "0766566398" },
  { name: "John", surname: "Doe", phone: "07645557766" },
  { name: "Mickey", surname: "Smith", phone: "0763554358" },
  { name: "George", surname: "Smith", phone: "0763554358" },
];

function app(contactList) {
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

    const newContact = {
      name: firstName.value,
      surname: lastName.value,
      phone: phoneNumber.value,
    };

    clearDisplayedList();

    // generate a new list
    const newList = [...list, newContact];

    // hide the form
    newContactForm.classList.remove("is-visible");

    // clear input values
    firstName.value = "";
    lastName.value = "";
    phoneNumber.value = "";

    app(newList); // rerender app
  };

  newContactForm.addEventListener("submit", addNewContact);

  // Loop through array list
  contactList.map((item) => {
    displayListElement(item);
  });

  const newContactBtn = document.querySelector(".btn-new-contact");

  const enableNewContactForm = () => {
    newContactForm.classList.add("is-visible");
  };

  newContactBtn.addEventListener("click", enableNewContactForm);
}

app(list);
