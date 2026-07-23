document.addEventListener('DOMContentLoaded', () => {
  const wishwellTitle = document.getElementById('wishwell-title');
  const thinkTitle = document.getElementById('think-title');
  const timerWrapper = document.getElementById('timer-wrapper');
  const barraTimer = document.getElementById('barra-timer');
  const btnRefresh = document.getElementById('btn-refresh');
  const moneda = document.getElementById('moneda');
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
    // 1. Apareix el botó +15s
    if (btnRefresh) {
      btnRefresh.innerHTML = `+ 15s ${refreshIconSVG}`;
      btnRefresh.classList.remove('hidden');
    }

    // 2. Apareixen els botons de compra
    if (paymentButtons) {
      paymentButtons.classList.remove('hidden');
    }

    // 3. La moneda entra glissant des del lateral dret
    setTimeout(() => {
      if (moneda) {
        moneda.classList.remove('coin-hidden');
        moneda.classList.add('coin-visible');
      }
    }, 200);
  }

  // Si premen el botó de +15s, amaguem la moneda al lateral i reiniciem
  if (btnRefresh) {
    btnRefresh.addEventListener('click', () => {
      btnRefresh.classList.add('hidden');
      if (paymentButtons) paymentButtons.classList.add('hidden');
      
      if (moneda) {
        moneda.classList.remove('coin-visible');
        moneda.classList.add('coin-hidden');
      }

      iniciarBarra15Segons();
    });
  }
});
