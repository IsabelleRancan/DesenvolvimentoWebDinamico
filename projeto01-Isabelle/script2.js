let bd_contatos = []

function inserirContato(){
    const contato = {
        nome: document.getElementById('txtNome').value,
        numero: document.getElementById('txtFone').value
    }


bd_contatos = getLocalStorage();
bd_contatos.push(contato);
setLocalStorage(bd_contatos)
console.log(bd_contatos)
atualizarTabela()

}
/*-----------------------------------------------------------*/
function getLocalStorage(){
    return JSON.parse(localStorage.getItem('bd_contatos')) || []
}

function setLocalStorage(bd_contatos){
    localStorage.setItem('bd_contatos', JSON.stringify(bd_contatos))
}
/*-----------------------------------------------------------*/

function atualizarTabela(){
    //cleanTable() //chamando a função de limpar a tabela
    const bd_contatos = getLocalStorage()

    bd_contatos.forEach(novaLinha)

}

function novaLinha(contato, index){
    const linha = document.createElement('tr')

    linha.innerHTML = `
        <td>${index}</td>
        <td>${contato.nome}</td>
        <td>${contato.numero}</td>
        <td><button date-index="${index}">Apagar</button></td>
    `
    document.querySelector('#tbContacts>tbody').appendChild(linha)
}