document.addEventListener('DOMContentLoaded', () => {
    
    const elements = {
        title1: document.getElementById('wishwell-title'),
        title2: document.getElementById('think-title'),
        timer: document.getElementById('barra-timer'),
        moneda: document.getElementById('moneda'),
        buttons: document.getElementById('payment-buttons'),
        refresh: document.getElementById('btn-refresh'),
        validar: document.getElementById('btn-validar'),
        tutorialBtn: document.getElementById('btn-tutorial'),
        tutorial: document.getElementById('tutorial-container'),
        closeTutorial: document.getElementById('btn-close-tutorial'),
        finalMessage: document.getElementById('final-message')
    };

    // Funcions auxiliars per mostrar elements suavitzadament
    const show = (element) => element.classList.add('visible');
    const hide = (element) => element.classList.remove('visible');

    // 1. Inici del Ritual seqüencial
    setTimeout(() => show(elements.title1), 500); // Aparició WISHWELL
    setTimeout(() => show(elements.title2), 1000); // Aparició PENSA UN DESIG

    // 2. Començar el Temporitzador de 15 segons
    setTimeout(() => {
        elements.timer.style.width = '100%'; // Comença la progressió
        elements.timer.style.transition = 'width 15s linear'; // S'omple durant 15 segons
    }, 1500);

    // 3. Després dels 15 segons de temps de pensar...
    setTimeout(() => {
        show(elements.refresh); // Mostra el botó de +refresh
        show(elements.moneda);  // Mostra la moneda
        show(elements.buttons); // Mostra els botons de compra
    }, 16500); // 1.5s inicials + 15s temporitzador

    // Interacció de +refresh
    elements.refresh.addEventListener('click', () => {
        elements.timer.style.transition = 'none'; // Atura l'animació anterior
        elements.timer.style.width = '0%'; // Buida la línia
        setTimeout(() => {
            elements.timer.style.transition = 'width 15s linear'; // Reinicia els 15s
            elements.timer.style.width = '100%';
        }, 50); // Petit retard tècnic per reiniciar
    });

    // Interacció per obrir tutorial modal
    elements.tutorialBtn.addEventListener('click', () => show(elements.tutorial));
    elements.closeTutorial.addEventListener('click', () => hide(elements.tutorial));

    // Interacció simulada de compra per mostrar l'splash final
    elements.validar.addEventListener('click', () => {
        // En realitat aquí iniciaries el procés Wallet to Wallet.
        // Simulem l'èxit per mostrar l'splash:
        hide(elements.moneda);
        hide(elements.buttons);
        show(elements.finalMessage);
    });

});
