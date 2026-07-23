document.addEventListener('DOMContentLoaded', () => {
  const wishwellTitle = document.getElementById('wishwell-title');
  const thinkTitle = document.getElementById('think-title');
  const timerWrapper = document.getElementById('timer-wrapper');
  const barraTimer = document.getElementById('barra-timer');
  const btnRefresh = document.getElementById('btn-refresh');
  const moneda = document.getElementById('moneda');
  
  // Botons individuals de pagament
  const btnCriptovalidar = document.getElementById('btn-criptovalidar');
  const btnPrimeraVegada = document.getElementById('btn-primera-vegada');
  const paymentButtons = document.getElementById('payment-buttons');

  const refreshIconSVG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-left: 4px;"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>`;

  // 1. Inici del ritual (Capçalera + Barra)
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

      // PAS 2: Espera 2s més -> Apareix el segon botó (Primera vegada)
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

      }, 2000);

    }, 2000);
  }

  // Reinici amb el botó +15s
  if (btnRefresh) {
    btnRefresh.addEventListener('click', () => {
      // Amaguem el botó de refresh
      btnRefresh.classList.add('hidden');
      
      // Amaguem els botons individuals i el seu contenidor
      if (btnCriptovalidar) btnCriptovalidar.classList.add('hidden');
      if (btnPrimeraVegada) btnPrimeraVegada.classList.add('hidden');
      if (paymentButtons) paymentButtons.classList.add('hidden');
      
      // Amaguem la moneda tornant-la al lateral
      if (moneda) {
        moneda.classList.remove('coin-visible');
        moneda.classList.add('coin-hidden');
      }

      // Reiniciem la barra
      iniciarBarra15Segons();
    });
  }
});
