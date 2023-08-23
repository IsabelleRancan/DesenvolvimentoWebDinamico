//------------------------------------------------------------------------------------------------------------
function inserirContato(){
    const contact = {
        name: document.getElementById('txtNome').value,
        fone: document.getElementById('txtFone').value
    }

    //erro 
    const bd_contacts = getLocalStorage(); /* 'bd_contacts' vetor com várias informações dentro*/
    console.log(bd_contacts)

    bd_contacts.push(contact) /*trazendo os novos valores para dentro do meu vetor*/

    //armazenar os contatos do localStorage
    setLocalStorage(bd_contacts)

    //atualizar a tabela após a inserção
    updateTeble()

}
//------------------------------------------------------------------------------------------------------------
function getLocalStorage(){
    return JSON.parse(localStorage.getItem('bd_contacts')) /*vai retornar como se fosse uma tabela de banco de dados*/
}
//------------------------------------------------------------------------------------------------------------
function setLocalStorage(bd_contacts){ /*se tem uma função get, normalmente tbm teremos uma função set*/

    localStorage.setItem('bd_contacts', JSON.stringify(bd_contacts)) //primeiro é o identificador e o segundo é o vetor
} 
//------------------------------------------------------------------------------------------------------------
function updateTeble(){
    //clean table
    const bd_contacts = getLocalStorage()

    bd_contacts.forEach(newRow)

    
}
//------------------------------------------------------------------------------------------------------------
function newRow(contact, index){

    const line = document.createElement('tr')

    line.innerHTML = ` 
            <td>${index}</td>
            <td>${contact.name}</td>
            <td>${contact.fone}</td>
            <td><button>Delete</button>Ação</td>
    `

    document.querySelector('#tbContacts>tbody').appendChild(line)

}

function cleanTable(){

}

//carregar os dados quandoa abrir a página 