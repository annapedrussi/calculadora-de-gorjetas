function calculateTip(event) {
    event.preventDefault();//evento que para de recarregar a página após clicar
    let bill = document.getElementById('bill').value;//pega o valor da conta
    let serviceQuality = document.getElementById('service-quality').value;//pega o valor da qualidade
    let numOfPeople = document.getElementById('people').value;//pega a quantidade de pessoas

    if (bill == '' | serviceQuality == 0) {//se a conta  ou a qualidade do serviço estiver vazia
        alert('Por favor, preencha os valores')//avisa para preencher
        return;
    }

    if (numOfPeople == '' | numOfPeople <= 1) {//se o numero de pessoas vazio ou menor ou igual a 1
        numOfPeople = 1;//considera que o numero de pessoas é 1
        document.getElementById('each').style.display = 'none'//tira a visibilidade do cada
    } else {
        document.getElementById('each').style.display = "block"//se o numero de pessoas for maior que um, mostrar o cada
    }
    let total = (bill * serviceQuality) / numOfPeople;//conta * qualidade do servico / dividido pelo numero de pessoas
    total = total.toFixed(2);//fixar 2 casa decimais
    document.getElementById('tip').innerHTML = total;//exibir o valor
    document.getElementById('totalTip').style.display = 'block'//exibir valor da gorjeta
}

document.getElementById('totalTip').style.display = "none"; //escondeu valor da gorjeta
document.getElementById('each').style.display = "none"; //escondeu palavra cada

document.getElementById('tipsForm').addEventListener('submit', calculateTip);
//tipsForm...evento associado addEventListener vai ficar escutando e quando o submit for clicado, ele chama a funçao calculateTip