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
				tela.value = tela.value === ''?'' : eval(tela.value); // Aqui eu verifico se tem algo pra ser calculado, pra depois tentar calcular com o eval
			} catch (error) {
				tela.value = 'Erro!';
				setTimeout(() => {
					tela.value = '';
				  }, 2000); // Tá em ms, cerca de 2 segundos
			}
		} else if (bValor === 'C') {
			tela.value = ''; //Limpando a tela
		} else if (bValor === 'del') {
			tela.value = tela.value.slice(0, -1); // Usando o backspace para deletar último dígito começa no indice 0, -1 para tirar o último
		}
        else {
			tela.value += bValor; // Executando a concatenação dos valores da string na tela
		}
	});
});




