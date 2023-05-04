const tela = document.getElementById("c_tela");
const botoes = document.querySelectorAll(".n_btn");
/*
document.querySelectorAll retorna uma lista de elementos e não um elemento propriamente dito.
Logo, botoes é um array e não é possível adicionar um eventListener em um array.
Se você quer adicionar o mesmo eventListener para todos os elementos deste array, vai precisar fazer um loop nos elementos e adicioná-lo.
*/

botoes.forEach(botao => {
	botao.addEventListener('click', () => {
		const bValor = botao.value;
		if (bValor === '=') {
			try {
				tela.value = eval(tela.value);
			} catch (error) {
				tela.value = 'Erro!';
			}
		} else if (bValor === 'C') {
			tela.value = '';
		} else if (bValor === "Del"){
            bValor -= bValor;
            tela.value = bValor;
        }
        
        else {
			tela.value += bValor;
		}
	});
});




