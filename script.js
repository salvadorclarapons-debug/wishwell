document.addEventListener('DOMContentLoaded', () => {
  const wishwellTitle = document.getElementById('wishwell-title');
  const thinkTitle = document.getElementById('think-title');
  const barraTimerContainer = document.getElementById('barra-timer-container');
  const barraTimer = document.getElementById('barra-timer');
  const btnRefresh = document.getElementById('btn-refresh');
  const moneda = document.getElementById('moneda');
  const paymentButtons = document.getElementById('payment-buttons');

  // SVG de la icona de recàrrega/refresh
  const refreshIconSVG = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-left: 4px;"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>`;

  // 1. Inici del ritual: Mostrem "WISHWELL", "PENSA UN DESIG" i la barra
  setTimeout(() => {
    if (wishwellTitle) wishwellTitle.classList.remove('hidden');
    if (thinkTitle) thinkTitle.classList.remove('hidden');
    if (barraTimerContainer) barraTimerContainer.classList.remove('hidden');
    if (barraTimer) barraTimer.classList.remove('hidden');

    // Ens assegurem que la moneda i botons estiguin amagats inicialment
    if (moneda) moneda.classList.add('hidden');
    if (btnRefresh) btnRefresh.classList.add('hidden');
    if (paymentButtons) paymentButtons.classList.add('hidden');

    // Activem el comptador de 15 segons
    iniciarBarra15Segons();
  }, 500);

  function iniciarBarra15Segons() {
    let tempsRestant = 15;
    if (barraTimer) barraTimer.style.width = '0%';

    const interval = setInterval(() => {
      tempsRestant -= 0.1;
      const percentatge = ((15 - tempsRestant) / 15) * 100;

      if (barraTimer) {
        barraTimer.style.width = `${Math.min(percentatge, 100)}%`;
      }

      // Quan s'acaben els 15 segons
      if (tempsRestant <= 0) {
        clearInterval(interval);
        completarTemps();
      }
    }, 100);
  }

  function completarTemps() {
    // Afegeix el text i la icona de recàrrega al botó de refresh
    if (btnRefresh) {
      btnRefresh.innerHTML = `+ 15s ${refreshIconSVG}`;
      btnRefresh.classList.remove('hidden');
    }

    // Quan acaben els 15s: Apareix la moneda i els botons!
    if (moneda) {
      moneda.classList.remove('hidden');
    }

    if (paymentButtons) {
      paymentButtons.classList.remove('hidden');
    }
  }

  // Si premen el botó de +15s, tornem a reiniciar la barra i amagar la moneda
  if (btnRefresh) {
    btnRefresh.addEventListener('click', () => {
      btnRefresh.classList.add('hidden');
      if (moneda) moneda.classList.add('hidden');
      if (paymentButtons) paymentButtons.classList.add('hidden');
      iniciarBarra15Segons();
    });
  }
});
