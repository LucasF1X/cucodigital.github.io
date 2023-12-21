let audio = document.getElementById("alarm-sound");

function iniciarDespertador() {
    setTimeout(function() {
        // Ativar o som
        audio.play();
        // Você pode adicionar outras lógicas aqui, como exibir uma mensagem ou realizar outras ações

        // Parar o som após 30 minutos
        setTimeout(function() {
            pararDespertador();
        }, 30 * 60 * 1000);
    }, 1000); // Aguardar 1 segundo antes de começar para evitar atrasos no som
}

function pararDespertador() {
    audio.pause();
    audio.currentTime = 0;
}

// Inicie o despertador automaticamente ao carregar a página
window.onload = function() {
    iniciarDespertador();
};
