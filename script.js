const textArea = document.querySelector(".codificador-area");
const mensagem = document.querySelector(".mensagem");

// As "chaves" de criptografia que utilizaremos são:
// `A letra "e" é convertida para "enter"`
// `A letra "i" é convertida para "imes"`
// `A letra "a" é convertida para "ai"`
// `A letra "o" é convertida para "ober"`
// `A letra "u" é convertida para "ufat"`

function botaoCodificar() {
    const textCodifacado = codificar(textArea.value);
    mensagem.value = textCodifacado;
    textArea.value = "";
}

function codificar(stringCodificada) {
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"], ["a" ,"ai"] , ["o" , "ober"], ["u" , "ufat"]];
    stringCodificada = stringCodificada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringCodificada.includes(matrizCodigo[i][0])) {
            stringCodificada = stringCodificada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringCodificada;
}

function botaoDescodificar() {
    const textDescodificado = descodificar(textArea.value)
    mensagem.value = textDescodificado;
    textArea.value = "";
}

function descodificar(stringDescodificada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"], ["a" ,"ai"] , ["o" , "ober"], ["u" , "ufat"]];
    stringDescodificada = stringDescodificada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDescodificada.includes(matrizCodigo[i][1])) {
            stringDescodificada = stringDescodificada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDescodificada;
}

function copiar() {
    let textoCopiado = document.querySelector(".mensagem");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
    
}