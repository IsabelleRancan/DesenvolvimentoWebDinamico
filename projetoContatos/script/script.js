const bd_contatos = [] // criando um array para salvar as informações dentro

const enviar = document.getElementById('enviar')

enviar.addEventListener('click', enviarDados)

function enviarDados(){
    console.log("funcionou")

    const nome = document.getElementById("txtNome")
    const fone = document.getElementById("txtFone")
    
    if(!nome.value && !fone.value){
        return (window.alert("Digite seus dados"))
    } 

    const dados = {
        nome: nome.value,
        fone: fone.value
    }

    //limpando os campos de input
    nome.value = ""
    fone.value = ""

    bd_contatos = mostrandoDados()

    console.log(bd_contatos)
}

function mostrandoDados(){
    //entender esse uso de JSON
    return (
        JSON.parse(localStorage.getItem("bd_contacts")) || []
      );
}