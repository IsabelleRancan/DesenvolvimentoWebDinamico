//------------------------------------------------------------------------------------------------------------
let bd_contacts = []

function inserirContato(){
    //criando o objeto contact
    const contact = { /*o objeto contato possui os atributos name e fone*/
        name: document.getElementById('txtNome').value,
        fone: document.getElementById('txtFone').value
    }

    //chamando o banco de dados (array) na função de baixo
    bd_contacts = getLocalStorage(); /* 'bd_contacts' vetor com várias informações dentro*/
    console.log(bd_contacts) // escrevendo na tela o bd

    bd_contacts.push(contact) /*trazendo os novos valores para dentro do meu vetor (push)*/

    //armazenar os contatos do localStorage
    setLocalStorage(bd_contacts)

    //atualizar a tabela após a inserção chamando a função update ()
    //ele chama a função e executa, mas não dá retorno
    //seeu criar um const x = updateTable ele vai executar a função e me dar o return com o resultado e não apenas executar como o de cima 
    updateTeble()

}
//------------------------------------------------------------------------------------------------------------
function getLocalStorage(){ /*get tira*/
    return JSON.parse(localStorage.getItem('bd_contacts')) || [] /*vai retornar como se fosse uma tabela de banco de dados
    ou ele retorna alguma coisa ou ele retorna vazio   */
}
//------------------------------------------------------------------------------------------------------------
function setLocalStorage(bd_contacts){ /*se tem uma função get, normalmente tbm teremos uma função set*/ /*set guarda*/

    localStorage.setItem('bd_contacts', JSON.stringify(bd_contacts)) //primeiro é o identificador e o segundo é o vetor
}
//------------------------------------------------------------------------------------------------------------
function cleanTable(){
    /*vai limpar toda a tabela antes de receber novas informações*/
    document.querySelector('#tbContacts>tbody').textContent=""
}
//------------------------------------------------------------------------------------------------------------
function updateTeble(){
    cleanTable() //chamando a função de limpar a tabela
    const bd_contacts = getLocalStorage()

    bd_contacts.forEach(newRow)

    
}
//------------------------------------------------------------------------------------------------------------
function newRow(contact, index){ //usando o foreach, a palavra contact é a palavra criada pra assumir o valor da variável, poderia ser qualquer palavra

    const line = document.createElement('tr')

    line.innerHTML = ` 
            <td>${index}</td>
            <td>${contact.name}</td>
            <td>${contact.fone}</td>
            <td><button data-index="${index}" onclick="cleanLine()">Delete</button></td>
    `

    document.querySelector('#tbContacts>tbody').appendChild(line)

}
//------------------------------------------------------------------------------------------------------------
function cleanLine(button){
    const bd_contacts = getLocalStorage()
    const index = button

    bd_contacts.splice(index, 1); 
    setLocalStorage(bd_contacts);
    updateTeble();
}