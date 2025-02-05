document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos campos A e B
    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);

    // Seleciona o elemento onde a mensagem será exibida
    const mensagem = document.getElementById('mensagem');

    // Valida se o campo B é maior que o campo A
    if (campoB > campoA) {
        mensagem.textContent = 'Formulário válido! Campo B é maior que o Campo A.';
        mensagem.style.color = 'green';
    } else {
        mensagem.textContent = 'Formulário inválido! Campo B deve ser maior que o Campo A.';
        mensagem.style.color = 'red';
    }
});