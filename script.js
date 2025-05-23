const formulario = document.getElementById('formulario');
const mensagem = document.getElementById('mensagem-enviada');
formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    mensagem.classList.add('show');
    formulario.reset();
    setTimeout(() => {
        mensagem.classList.remove('show');
    }, 4000);
});