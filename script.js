document.addEventListener('DOMContentLoaded', () => {
  // -----------------------------------------------------------
  // 1. DICCIONARI DE TRADUCCIONS INTERNACIONAL (Cosmic Era)
  // -----------------------------------------------------------
  const diccionari = {
    ca: { wishwell: "Wishwell", think: "Pensa el teu desig profundament...", btnCripto: "CRIPTOVALIDAR", btnPrimera: "Primera vegada" },
    es: { wishwell: "Wishwell", think: "Piensa tu deseo profundamente...", btnCripto: "CRIPTOVALIDAR", btnPrimera: "Primera vez" },
    en: { wishwell: "Wishwell", think: "Think your wish deeply...", btnCripto: "CRYPTOVALIDATE", btnPrimera: "First time" },
    fr: { wishwell: "Wishwell", think: "Pensez profondément à votre vœu...", btnCripto: "CRYPTOVALIDER", btnPrimera: "Première fois" },
    de: { wishwell: "Wishwell", think: "Denke tief über deinen Wunsch nach...", btnCripto: "KRYPTOVALIDIEREN", btnPrimera: "Erstes Mal" },
    it: { wishwell: "Wishwell", think: "Pensa intensamente al tuo desiderio...", btnCripto: "CRIPTOVALIDA", btnPrimera: "Prima volta" },
    pt: { wishwell: "Wishwell", think: "Pense no seu desejo profundamente...", btnCripto: "CRIPTOVALIDAR", btnPrimera: "Primeira vez" },
    nl: { wishwell: "Wishwell", think: "Denk diep na over je wens...", btnCripto: "CRYPTOVALIDEREN", btnPrimera: "Eerste keer" },
    
    // Nòrdics
    da: { wishwell: "Wishwell", think: "Tænk dybt over dit ønske...", btnCripto: "KRYPTOVALIDER", btnPrimera: "Første gang" },
    sv: { wishwell: "Wishwell", think: "Tänk djupt på din önskan...", btnCripto: "KRYPTOVALIDERA", btnPrimera: "Första gången" },
    no: { wishwell: "Wishwell", think: "Tenk dypt på ønsket ditt...", btnCripto: "KRYPTOVALIDER", btnPrimera: "Første gang" },
    
    // Bàltics
    lt: { wishwell: "Wishwell", think: "Giliai apmąstykite savo norą...", btnCripto: "KRIPTO PATVIRTINIMAS", btnPrimera: "Pirmą kartą" },
    lv: { wishwell: "Wishwell", think: "Dziļi pārdomājiet savu vēlēšanos...", btnCripto: "KRIPTO APSTIPRINĀT", btnPrimera: "Pirmā reize" },
    et: { wishwell: "Wishwell", think: "Mõelge sügavalt oma soovile...", btnCripto: "KRÜPTOVALIDEERI", btnPrimera: "Esimest korda" },
    
    // Europa Central i Oriental
    cs: { wishwell: "Wishwell", think: "Hluboce přemýšlejte o svém přání...", btnCripto: "KRYPTOVALIDOVAT", btnPrimera: "Poprvé" },
    hr: { wishwell: "Wishwell", think: "Duboko razmislite o svojoj želji...", btnCripto: "KRIPTOVALIDIRAJ", btnPrimera: "Prvi put" },
    sr: { wishwell: "Wishwell", think: "Дубоко размислите о својој жељи...", btnCripto: "КРИПТОВАЛИДИРАЈ", btnPrimera: "Први пут" },
    ro: { wishwell: "Wishwell", think: "Gândește-te profund la dorința ta...", btnCripto: "CRIPTOVALIDARE", btnPrimera: "Prima dată" },
    bg: { wishwell: "Wishwell", think: "Помислете дълбоко за вашето желание...", btnCripto: "КРИПТОВАЛИДИРАЙ", btnPrimera: "За първи път" },
    uk: { wishwell: "Wishwell", think: "Глибоко подумайте про своє бажання...", btnCripto: "КРИПТОВАЛІДАЦІЯ", btnPrimera: "Уперше" },
    pl: { wishwell: "Wishwell", think: "Pomyśl głęboko o swoim życzeniu...", btnCripto: "KRYPTOWALIDACJA", btnPrimera: "Pierwszy raz" },
    el: { wishwell: "Wishwell", think: "Σκεφτείτε τη ευχή σας βαθιά...", btnCripto: "ΚΡΥΠΤΟΕΠΑΛΗΘΕΥΣΗ", btnPrimera: "Πρώτη φορά" },
    ru: { wishwell: "Wishwell", think: "Загадайте свое желание глубоко...", btnCripto: "КРИПТОВАЛИДАЦИЯ", btnPrimera: "Первый раз" },
    
    // Regionals i Àsia-Pacífic
    oc: { wishwell: "Wishwell", think: "Pensatz prigondament al vostre desig...", btnCripto: "CRIPTOVALIDAR", btnPrimera: "Primièra vegada" },
    zh: { wishwell: "Wishwell", think: "深刻思考你的願望...", btnCripto: "加密驗證", btnPrimera: "第一次" },
    ja: { wishwell: "Wishwell", think: "願いを深く心に描いてください...", btnCripto: "暗号検証", btnPrimera: "初めて" },
    ko: { wishwell: "Wishwell", think: "당신의 소원을 깊이 생각해보세요...", btnCripto: "크립토 검증", btnPrimera: "첫 번째" },
    tr: { wishwell: "Wishwell", think: "Dileğini derinlemesine düşün...", btnCripto: "KRİPTO DOĞRULA", btnPrimera: "İlk kez" }
  };

  // Detecció automàtica de la llengua del navegador
  const userLang = (navigator.language || navigator.userLanguage || 'en').substring(0, 2);
  const t = diccionari[userLang] || diccionari['en'];

  // -----------------------------------------------------------
  // 2. SELECCIÓ D'ELEMENTS DOM
  // -----------------------------------------------------------
  const wishwellTitle = document.getElementById('wishwell-title');
  const thinkTitle = document.getElementById('think-title');
  const timerWrapper = document.getElementById('timer-wrapper');
  const barraTimer = document.getElementById('barra-timer');
  const btnRefresh = document.getElementById('btn-refresh');
  const moneda = document.getElementById('moneda');
  
  const btnCriptovalidar = document.getElementById('btn-criptovalidar');
  const btnPrimeraVegada = document.getElementById('btn-primera-vegada');
  const paymentButtons = document.getElementById('payment-buttons');

  const refreshIconSVG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-left: 4px;"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>`;

  // -----------------------------------------------------------
  // 3. APLICAR TRADUCCIONS AUTOMÀTIQUES
  // -----------------------------------------------------------
  if (wishwellTitle) wishwellTitle.textContent = t.wishwell;
  if (thinkTitle) thinkTitle.textContent = t.think;
  if (btnCriptovalidar) btnCriptovalidar.textContent = t.btnCripto;
  if (btnPrimeraVegada) btnPrimeraVegada.textContent = t.btnPrimera;

  // -----------------------------------------------------------
  // 4. INICI DEL RITUAL I TIMERS
  // -----------------------------------------------------------
  setTimeout(() => {
    if (wishwellTitle) wishwellTitle.classList.remove('hidden');
    if (thinkTitle) thinkTitle.classList.remove('hidden');
    if (timerWrapper) timerWrapper.classList.remove('hidden');

    iniciarBarra15Segons();
  }, 400);

  function iniciarBarra15Segons() {
    let tempsRestant = 15;
    if (barraTimer) barraTimer.style.width = '0%';

    const interval = setInterval(() => {
      tempsRestant -= 0.1;
      const percentatge = ((15 - tempsRestant) / 15) * 100;

      if (barraTimer) {
        barraTimer.style.width = `${Math.min(percentatge, 100)}%`;
      }

      if (tempsRestant <= 0) {
        clearInterval(interval);
        completarTemps();
      }
    }, 100);
  }

  function completarTemps() {
    // 0s: Apareix el botó +15s immediatament en acabar el temps
    if (btnRefresh) {
      btnRefresh.innerHTML = `+ 15s ${refreshIconSVG}`;
      btnRefresh.classList.remove('hidden');
    }

    if (paymentButtons) {
      paymentButtons.classList.remove('hidden');
    }

    // PAS 1: Espera 2s -> Apareix el primer botó (CRIPTOVALIDAR)
    setTimeout(() => {
      if (btnCriptovalidar) {
        btnCriptovalidar.classList.remove('hidden');
      }

      // PAS 2: Espera 3s per poder llegir bé -> Apareix el segon botó (Primera vegada)
      setTimeout(() => {
        if (btnPrimeraVegada) {
          btnPrimeraVegada.classList.remove('hidden');
        }

        // PAS 3: Espera 3s més -> La moneda glissa des del lateral
        setTimeout(() => {
          if (moneda) {
            moneda.classList.remove('coin-hidden');
            moneda.classList.add('coin-visible');
          }
        }, 3000);

      }, 3000); // <-- Augmentat a 3 segons d'espera!

    }, 2000);
  }

  // Reinici amb el botó +15s
  if (btnRefresh) {
    btnRefresh.addEventListener('click', () => {
      btnRefresh.classList.add('hidden');
      
      if (btnCriptovalidar) btnCriptovalidar.classList.add('hidden');
      if (btnPrimeraVegada) btnPrimeraVegada.classList.add('hidden');
      if (paymentButtons) paymentButtons.classList.add('hidden');
      
      if (moneda) {
        moneda.classList.remove('coin-visible');
        moneda.classList.add('coin-hidden');
      }

      iniciarBarra15Segons();
    });
  }
});
// =========================================================
// LÒGICA DEL TUTORIAL I PAGAMENT METAMASK (A PARTIR DE LA LÍNIA 156)
// =========================================================

// 1. Canviar de pas al tutorial
window.canviarPas = function(numPas) {
  document.querySelectorAll('.tutorial-step').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.step-dot').forEach(el => el.classList.remove('active'));

  const pasActual = document.getElementById(`step-${numPas}`);
  if (pasActual) pasActual.classList.remove('hidden');

  for (let i = 1; i <= numPas; i++) {
    const dot = document.getElementById(`dot-${i}`);
    if (dot) dot.classList.add('active');
  }
};

// 2. Esdeveniments dels botons
const tutorialModal = document.getElementById('tutorial-modal');
const closeTutorial = document.getElementById('close-tutorial');
const checkSeed = document.getElementById('check-seed');
const btnToStep3 = document.getElementById('btn-to-step3');
const btnGoto2 = document.getElementById('btn-goto-2');
const btnGoto4 = document.getElementById('btn-goto-4');
const btnConnectPay = document.getElementById('btn-connect-pay');

// Obrir tutorial amb el teu botó
if (btnPrimeraVegada) {
  btnPrimeraVegada.addEventListener('click', () => {
    if (tutorialModal) tutorialModal.classList.remove('hidden');
    canviarPas(1);
  });
}

if (closeTutorial) {
  closeTutorial.addEventListener('click', () => {
    if (tutorialModal) tutorialModal.classList.add('hidden');
  });
}

if (btnGoto2) btnGoto2.addEventListener('click', () => canviarPas(2));
if (btnGoto4) btnGoto4.addEventListener('click', () => canviarPas(4));

if (checkSeed && btnToStep3) {
  checkSeed.addEventListener('change', (e) => {
    if (e.target.checked) {
      btnToStep3.disabled = false;
      btnToStep3.classList.remove('disabled');
    } else {
      btnToStep3.disabled = true;
      btnToStep3.classList.add('disabled');
    }
  });

  btnToStep3.addEventListener('click', () => canviarPas(3));
}

// 3. Connexió i enviament de transacció a la teva wallet
if (btnConnectPay) {
  btnConnectPay.addEventListener('click', async () => {
    
    // ⬇️ POSA AQUÍ LA TEVA ADREÇA SENCERA DE METAMASK (0x2A2Da...)
    const WALLET_DESTINATARI = "0x2A2Da22d9e5f7C6E0E58B455A96bd228e7188ad2"; 

    if (typeof window.ethereum !== 'undefined') {
      try {
        const comptes = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const compteUsuari = comptes[0];

        const parametresTransaccio = {
          from: compteUsuari,
          to: WALLET_DESTINATARI,
          value: '0x38D7EA4C68000',
        };

        const txHash = await window.ethereum.request({
          method: 'eth_sendTransaction',
          params: [parametresTransaccio],
        });

        alert("✨ Desig enviat i registrat a la blockchain! Hash: " + txHash);
        if (tutorialModal) tutorialModal.classList.add('hidden');

      } catch (error) {
        console.error("Error durant la transacció:", error);
        alert("S'ha cancel·lat o ha fallat la connexió.");
      }
    } else {
      alert("No s'ha detectat l'extensió de MetaMask al navegador.");
    }
  });
}
