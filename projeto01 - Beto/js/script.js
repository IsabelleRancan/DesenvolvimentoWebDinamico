//----------------------------------------------------------------

function addContact() {
  console.log("add contact..."); //verificando se entrou na função

  const contact = { //criando o objeto com dois atributos
    name: document.getElementById("txtNome").value, //value vai pegar o valor do campo de texto
    fone: document.getElementById("txtFone").value,
  };

  // tratar erro aqui
  let bd_contacts = getLocalStorage();

  if (!bd_contacts) bd_contacts = []; //verificando se n está vazio
  bd_contacts.push(contact);

  // armazenar os contatos no localstorage
  setLocalStorage(bd_contacts);

  // atualizar a tabela apos a insercao
  updateTable();
}
//-----------------------------STORAGE----------------------------
function getLocalStorage() { //pegar
  return JSON.parse(localStorage.getItem("bd_contacts"));
}
//----------------------------------------------------------------
function setLocalStorage(bd_contacts) { //guardar
  localStorage.setItem("bd_contacts", JSON.stringify(bd_contacts));
}

//-----------------------------TABLE-------------------------------
function updateTable() {
  // clean table
  cleanTable();

  const bd_contacts = getLocalStorage();

  bd_contacts.forEach(newRow);
}
//----------------------------------------------------------------
function newRow(contact, index) {
  const line = document.createElement("tr");

  line.innerHTML = `  
          <td>${index + 1}</td>
          <td>${contact.name}</td>
          <td>${contact.fone}</td>
          <td><button onclick='removeContact(${index})'>Delete</button></td>        
  `;
  document.querySelector("#tbContacts>tbody").appendChild(line);
}

//----------------------------------------------------------------
function cleanTable() {
  const table = document.querySelector("#tbContacts>tbody");
  table.innerHTML = "";
}

//----------------------------------------------------------------
function removeContact(id) {
  const bd = getLocalStorage();
  bd.splice(id, 1); //vai recortar uma parte do array
  setLocalStorage(bd);
  updateTable();
}

//----------------------------------------------------------------
updateTable();
