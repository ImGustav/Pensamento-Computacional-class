const form = document.getElementById('form');
const resultDisplay = document.getElementById('result')

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const c1 = parseFloat(document.getElementById('c1').value)
    const c2 = parseFloat(document.getElementById('c2').value)
    const c3 = parseFloat(document.getElementById('c3').value)


    let media = (c1+c2+c3) / 3
    
    let resultMessage;
    if (isNaN(media)) {
        resultMessage = "Por favor, insira os dados corretamente";
    } else if (media >= 60) {
        resultMessage = `Sua média é: ${media.toFixed(2)}. Parabéns, você passou de ano`;
    } else {    
        resultMessage = `Sua média é: ${media.toFixed(2)}. Infelizmente você não passou, tente a recuperação.`;
    }

    resultDisplay.innerHTML = `<h2>Resultado: </h2><p>${resultMessage}</p>`;

    return false;
});