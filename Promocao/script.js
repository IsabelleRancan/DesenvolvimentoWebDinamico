let dados = [] //não pode ser const pq a gente vai mudar o que tem dentro

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
        nome: nome.value,
        promocao: promocao.value
    }

    nome.value = ""
    promocao.value = ""
    
    dados = getDados() //dados vai receber o que a função vale

    dados.push(infos) //pegando dados e enfiando o que eu tenho de info dentro dele

    setDados(dados) //enfiando dados na função set  
    
    console.log(dados)
    
}

function getDados(){
    return ( //a função vale o valor de dados ou array vazio
        JSON.parse(localStorage.getItem("dados")) || []
    )
}

function setDados(dados){
        localStorage.setItem("dados", JSON.stringify(dados))
}