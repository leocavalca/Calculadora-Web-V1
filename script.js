const tela = document.getElementById("c_tela");
const botoes = document.querySelectorAll(".n_btn");
/*
document.querySelectorAll retorna uma lista de elementos e não um elemento propriamente dito.

Logo, botoes é um array e não é possível adicionar um eventListener em um array.

Se você quer adicionar o mesmo eventListener para todos os elementos deste array, vai precisar fazer um loop nos elementos e adicioná-lo.
*/
let calculo;
let eqPress = false;
let clPress = false;
let pValor = true;

botoes.forEach((botao) =>{
    botao.addEventListener("click", (e) => {
    const valor = e.target.textContent;
        // while (eqPress == false){
        //     calculo = calculo+valor;
        //     if (valor == "="){
        //         eqPress == true;
        //     }
        // }

    if (valor == "Limpar"){
        clPress = true;
    } 
        else if (pValor == true) {
        calculo = valor;
        pValor == false;
        tela.value = valor;
        } 

    if(clPress == true){
        tela.value = "";
        clPress = false;
        pValor = true;
    }
})});



