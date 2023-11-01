const dark = document.querySelector('.dark')
const light = document.querySelector('.light')
const qrContainer = document.querySelector('#qr-code')
const qrText = document.querySelector('.qr-text')
const sizer = document.querySelector('sizes')
const shareBtn = document.querySelector('.share-btn')
const dowload = document.querySelector('.dowload-btn')

let colorLight = '#fff',
    colorDark = '#000',
    text = 'www.IFMS.edu.br',
    size = 300;

//adicionando evento 
dark.addEventListener('input', handleDarkColor);
light.addEventListener('input', handleLightColor);
qrText.addEventListener('input', handleQRText);
sizes.addEventListener('change', handleSize);

//criando função
function handleDarkColor(e){
    colorDark = e.target.value;
    generateQrCode()
}

function handleLightColor(e){
    colorLight = e.target.value;
    generateQrCode()
}

function handleQRText(e){ //esse 'e' indica uma variavél para receber o evento
    //aqui pode acontecer um erro quando for vazio (undefined) - implemetar algo para evitar o erro
    text = e.target.value;
    generateQrCode()
}

function handleSize(e){
    size = e.target.value;
    generateQrCode()
}

async function generateQrCode(){ //declaração de função assincrona 
    qrContainer.innerHTML = ''
    new QRCode('qr-code', {
        text, 
        height: size, 
        width: size, 
        colorLight, 
        colorDark,
    })
}