const list = [
  { name: "Adrian", surname: "Tut", phone: "0766566398" },
  { name: "John", surname: "Doe", phone: "07645557766" },
  { name: "Mickey", surname: "Smith", phone: "0763554358" },
  { name: "George", surname: "Smith", phone: "0763554358" },
];

const phoneList = document.querySelector("#phone-list");
console.log(phoneList);

list.map((item) => {
  let node = document.createElement("LI"); //First create an LI node,
  let textnode = document.createTextNode(item.name); //then create a Text node,
  node.appendChild(textnode); //then append the Text node to the LI node.
  phoneList.appendChild(node); //Finally append the LI node to the list.
});
