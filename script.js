document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Detecció de l'idioma del navegador
    const userLang = navigator.language || navigator.userLanguage; 
    const lang = userLang.startsWith('es') ? 'es' : 'ca'; // Per defecte 'ca', si detecta espanyol, 'es'

    // 2. Diccionari de traduccions
    const translations = {
        ca: {
            wishwell: "WISHWELL",
            pensa: "PENSA UN DESIG",
            refresh: "+refresh 15 segons més",
            validar: "CRIPTOVALIDAR EL DESIG 0'50 USDC",
            wallet: "WALLET TO WALLET",
            tutorial: "Primera vegada wallet to wallet?",
            minuts: "Fem-ho en 2 minuts",
            tancar: "Tancar",
            sort: "DESIG CRIPTOVALIDAT. MOLTA SORT"
        },
        es: {
            wishwell: "WISHWELL",
            pensa: "PIENSA UN DESEO",
            refresh: "+refresh 15 segundos más",
            validar: "CRIPTOVALIDAR EL DESEO 0'50 USDC",
            wallet: "WALLET TO WALLET",
            tutorial: "¿Primera vez wallet to wallet?",
            minuts: "Hagámoslo en 2 minutos",
            tancar: "Cerrar",
            sort: "DESEO CRIPTOVALIDADO. MUCHA SUERTE"
        }
    };

    // 3. Elements de la pàgina
    const elements = {
        title1: document.getElementById('wishwell-title'),
        title2: document.getElementById('think-title'),
        timer: document.getElementById('barra-timer'),
        moneda: document.getElementById('moneda'),
        buttons: document.getElementById('payment-buttons'),
        refresh: document.getElementById('btn-refresh'),
        validarText: document.querySelector('#btn-validar .main-text'),
        walletText: document.querySelector('#btn-validar .small-text'),
        tutorialText: document.querySelector('#btn-tutorial .main-text'),
        minutsText: document.querySelector('#btn-tutorial .small-text'),
        tutorial: document.getElementById('tutorial-container'),
        closeTutorial: document.getElementById('btn-close-tutorial'),
        finalMessage: document.getElementById('final-message')
    };

    // 4. Aplicar traduccions segons l'idioma detectat
    elements.title1.textContent = translations[lang].wishwell;
    elements.title2.textContent = translations[lang].pensa;
    elements.refresh.textContent = translations[lang].refresh;
    elements.validarText.textContent = translations[lang].validar;
    elements.walletText.textContent = translations[lang].wallet;
    elements.tutorialText.textContent = translations[lang].tutorial;
    elements.minutsText.textContent = translations[lang].minuts;
    elements.closeTutorial.textContent = translations[lang].tancar;
    elements.finalMessage.textContent = translations[lang].sort;

    // Funcions auxiliars per mostrar elements suavitzadament
    const show = (element) => element.classList.add('visible');
    const hide = (element) => element.classList.remove('visible');

    // --- RITUAL SEQÜENCIAL (S'executa per a qualsevol idioma) ---

    // 1. Inici del Ritual
    setTimeout(() => show(elements.title1), 500); 
    setTimeout(() => show(elements.title2), 1000); 

    // 2. Començar el Temporitzador de 15 segons
    setTimeout(() => {
        elements.timer.style.width = '100%'; 
        elements.timer.style.transition = 'width 15s linear'; 
    }, 1500);

    // 3. Després dels 15 segons de temps de pensar...
    setTimeout(() => {
        show(elements.refresh); 
        show(elements.moneda);  
        show(elements.buttons); 
    }, 16500); // 1.5s inicials + 15s temporitzador

    // --- INTERACCIONS ---

    // Interacció de +refresh
    elements.refresh.addEventListener('click', () => {
        elements.timer.style.transition = 'none'; 
        elements.timer.style.width = '0%'; 
        setTimeout(() => {
            elements.timer.style.transition = 'width 15s linear'; 
            elements.timer.style.width = '100%';
        }, 50); 
    });

    // Interacció per obrir tutorial modal
    const tutorialBtn = document.getElementById('btn-tutorial');
    tutorialBtn.addEventListener('click', () => show(elements.tutorial));
    elements.closeTutorial.addEventListener('click', () => hide(elements.tutorial));

    // Interacció simulada de compra per mostrar l'splash final
    const validarBtn = document.getElementById('btn-validar');
    validarBtn.addEventListener('click', () => {
        // Simulem l'èxit per mostrar l'splash final i el text de sort
        hide(elements.moneda);
        hide(elements.buttons);
        show(elements.finalMessage);
    });

});
