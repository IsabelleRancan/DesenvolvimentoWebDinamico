let bd_contatos = [] // criando um array para salvar as informações dentro

const enviar = document.getElementById('enviar')

enviar.addEventListener('click', enviarDados)

function enviarDados(){
    console.log("funcionou")

    const nome = document.getElementById("txtNome")
    const fone = document.getElementById("txtFone")
    
    if(!nome.value || !fone.value){
        return (window.alert("Digite seus dados"))
    } 

    const dados = {
        nome: nome.value,
        fone: fone.value
    }

    //limpando os campos de input
    nome.value = ""
    fone.value = ""

    //trazendo o que eu já tenho guardado
    bd_contatos = pegarDados()

    //empurrando uma informação nova
    bd_contatos.push(dados);

    //guardadndo o que eu já tenho
    guardarDados(bd_contatos);

    atualizarTabela()

    console.log(bd_contatos)
}

function pegarDados(){
    //entender esse uso de JSON
    return (
        JSON.parse(localStorage.getItem("bd_contatos")) || []
      );
}

function guardarDados(bd_contatos){
    localStorage.setItem("bd_contatos", JSON.stringify(bd_contatos));
}

function atualizarTabela(){
    limparTabela()
    bd_contatos = pegarDados()

    
}

function limparTabela(){
    table.innerHTML = "";
}