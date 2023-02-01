var numeroSecreto = parseInt(Math.random() * (1001 - 1) + 1);
var numeroDeTentativas = 0;
var tentativas = 9

var login = prompt('Olá, Bem vindo(a) ao NÚMERICOS , seu jogo de números favorito 😁.\n\ Para começar o jogo digite seu Nome ')

while(chute != numeroSecreto) {
    var chute = prompt('Prazer ' + login + ',  Escolha um número entre 1 e 1000:\n\ Digite F para sair do jogo:');
    if (chute === 'f' || chute === 'F') {
        alert('Saindo... Quando quiser jogar , é so chamar 😉')

        break;
    }
  
    chute = parseInt(chute, 10);
  
    if (chute < 1 || chute > 1000) {
        alert('Eiii! Você esqueceu de escolher um número 😠 \n\ Digite um número entre 1 e 1000:')
      }else {
      
    numeroDeTentativas += 1;
    if (chute == numeroSecreto) {
        alert('Parabéns ' + login + ', você acertou!!🥳 O número secreto era ' + numeroSecreto + "\n" + 'Você tentou '  + numeroDeTentativas +  ' vezes antes de acertar!! 😊')
      
    } 
    else if (chute> numeroSecreto) {
    alert("Que pena, você errou 😟...... o número secreto é MENOR que " + chute + "\n\ Você já tentou " + numeroDeTentativas + " vezes. \n\ Você ainda tem " + tentativas + " tentativas .")

    tentativas -= 1;
    } 
    else if (chute < numeroSecreto) {
    alert('Que pena, você errou 😟...... o número secreto é MAIOR que ' + chute + "\n\  Você já tentou " + numeroDeTentativas +  " vezes. \n \
Você ainda tem " + tentativas + " tentativas. ");
      
    tentativas -= 1;
    }
    if (tentativas == 0) {
    alert('Você usou todas as suas tentativas.😭 O número secreto era ' + numeroSecreto + '.');
      
      break;
    } 
  }
}