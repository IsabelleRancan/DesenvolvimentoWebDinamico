function dadosPessoais(){
    const nome = document.getElementById('nome').value
    const telefone = document.getElementById('fone').value
    console.log(nome)
    
    if (nome == "" || telefone == ""){
        alert('Insira seus dados completos!');
    } else {
        alert('Dados salvos com sucesso!')
    }
}


function dadosPessoaisII(){
    const nacionalidade = document.querySelector('.nacionalidade').value
    const cpf = document.querySelector('.cpf').value
    
    if (nacionalidade == "" || cpf == ""){
        alert('Insira seus dados completos!');
    } else {
        alert('Dados salvos com sucesso!')
    }
}

function endereco(){
    const rua = document.getElementsByName ("rua")
    const casa = document.getElementsByName("casa")
    console.log(rua)
    
    if (rua == "" || casa == ""){
        alert('Insira seus dados completos!');
    } else {
        alert('Dados salvos com sucesso!')
    }
}

function enderecoII(){
    const bairro = document.getElementsByClassName('bairro').value
    const cep = document.getElementsByClassName('cep').value
    console.log(bairro)
    
    if (bairro == "" || cep == ""){
        alert('Insira seus dados completos!');
    } else {
        alert('Dados salvos com sucesso!')
    }
}