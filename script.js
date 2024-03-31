document.addEventListener('DOMContentLoaded', function() {
    // Função para decodificar o texto com animação de digitação
    function decodeTextWithTypingAnimation() {
        const textElement = document.querySelector('.decoding-text');
        const realText = "Hello World";
        const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";
        let currentText = '';
        let animationTimeout;

        function animateText() {
            currentText = '';
            for (let i = 0; i < realText.length; i++) {
                currentText += symbols.charAt(Math.floor(Math.random() * symbols.length));
            }
            textElement.textContent = currentText;
            animationTimeout = setTimeout(() => {
                if (currentText !== realText) {
                    animateText();
                } else {
                    revealRealText(); // Revela o texto verdadeiro quando a animação é concluída
                }
            }, 100); // Delay para simular a digitação
        }

        animateText();

        // Função para interromper a animação após 5 segundos
        setTimeout(() => {
            clearTimeout(animationTimeout);
            revealRealText(); // Revela o texto verdadeiro após 5 segundos
        }, 5000);
    }

    // Função para revelar o texto verdadeiro
    function revealRealText() {
        const textElement = document.querySelector('.decoding-text');
        textElement.textContent = "The Best IOS Hacking!";
    }

    // Função para iniciar a animação de fade-in/out
    function fadeInOutAnimation() {
        const fadeInOutElement = document.querySelector('.fade-in-out');
        fadeInOutElement.classList.add('fade-animation');
    }

    // Iniciar as animações ao carregar a página
    decodeTextWithTypingAnimation();
    fadeInOutAnimation();
});

