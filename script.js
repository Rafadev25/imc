function calcImc(){
    // Calculo do imc = 
    let nome = document.getElementById('name').value;
    let nascimento = new Date(document.getElementById('birthday').value);
    let hoje = new Date();
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    let peso = document.getElementById('weight').value;
    let altura = document.getElementById('height').value/100;

    let imc = peso / (altura * altura);
    let mensagem = `Olá ${nome}, você tem ${idade} anos e seu IMC é ${imc.toFixed(1)}`;

    alert(mensagem);
    
}