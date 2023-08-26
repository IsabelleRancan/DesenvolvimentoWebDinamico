//------------------------------------------------------------------------------------------------------------
let bd_contacts = [];

const table = document.querySelector("#tbContacts>tbody")

function insertContact() {

    const name = document.getElementById("txtNome")
    const fone = document.getElementById("txtFone")

    if (!name.value && !fone.value){
        return
    }
  //criando o objeto contact

  const contact = {
    /*o objeto contato possui os atributos name e fone*/
    name: name.value,
    fone: fone.value,
  };

  //limpa os campos
    name.value =''
    fone.value=''

  //chamando o banco de dados (array)
  bd_contacts =
    getLocalStorage(); /* 'bd_contacts' vetor com várias informações dentro*/

  bd_contacts.push(
    contact
  ); /*trazendo os novos valores para dentro do meu vetor (push)*/

  //armazenar os contatos do localStorage
  setLocalStorage(bd_contacts);

  //atualizar a tabela após a inserção
  updateTeble();
}
//------------------------------------------------------------------------------------------------------------
function deleteContact(line){
    //obtem a lista do localSorange
    const list = getLocalStorage();
    //Remove da lista a linha recebida por parametro
    list.splice(line, 1);
    //envia a lista para o localstorange novamente
    setLocalStorage(list);
    //Atualiza a tabela
    updateTeble();
}
//------------------------------------------------------------------------------------------------------------
function getLocalStorage() {
  /*get tira*/
  return (
    JSON.parse(localStorage.getItem("bd_contacts")) || []
  ); /*vai retornar como se fosse uma tabela de banco de dados
    ou ele retorna alguma coisa ou ele retorna vazio   */
}
//------------------------------------------------------------------------------------------------------------
function setLocalStorage(bd_contacts) {
  /*se tem uma função get, normalmente tbm teremos uma função set*/ /*set guarda*/
  localStorage.setItem("bd_contacts", JSON.stringify(bd_contacts)); //primeiro é o identificador e o segundo é o vetor
}
//------------------------------------------------------------------------------------------------------------
function cleanTable() {
  /*vai limpar toda a tabela antes de receber novas informações*/
  table.innerHTML = "";
}
//------------------------------------------------------------------------------------------------------------
function updateTeble() {
  cleanTable(); //chamando a função d limpar a tabela
  const bd_contacts = getLocalStorage();

  bd_contacts.forEach(newRow);
}
//------------------------------------------------------------------------------------------------------------
function newRow(contact, index) {
//cria uma nova linha 
  const line = document.createElement("tr");
  line.innerHTML = ` 
            <td>${index}</td>
            <td>${contact.name}</td>
            <td>${contact.fone}</td>
            <td><button onClick=deleteContact(${index})>Delete</button></td>
    `;
//insere a linha na tabela
  table.appendChild(line);
}

//carregar os dados quandoa abrir a página

// invoca a atualização inicial
updateTeble();
