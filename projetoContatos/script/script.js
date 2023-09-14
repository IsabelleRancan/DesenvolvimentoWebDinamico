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
     
    console.log(dados)
}