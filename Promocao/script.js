const dados = []

const botao = document.getElementById('cadastrar')
botao.addEventListener('click', cadastro)

function cadastro(){
    console.log("funcionou")

    var nome = document.getElementById('txtnome')
    var promocao = document.getElementById('txtpromo')

    if(!nome.value || !promocao.value){
        window.alert('Digite seus dados')
    }

    const infos = {
        nome = nome.value,
        promocao = promocao.value
    }
}