// Esperem que la pàgina estigui carregada
document.addEventListener('DOMContentLoaded', () => {
  const thinkTitle = document.getElementById('think-title');
  const barraTimerContainer = document.getElementById('barra-timer-container');
  const barraTimer = document.getElementById('barra-timer');
  const btnRefresh = document.getElementById('btn-refresh');
  const moneda = document.getElementById('moneda');
  const paymentButtons = document.getElementById('payment-buttons');

  // SVG de la icona de recàrrega (de la imatge)
  const refreshIconSVG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-left: 6px;"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>`;

  // 1. Inici del ritual: Mostrem "PENSA UN DESIG" i la barra de temps
  setTimeout(() => {
    if (thinkTitle) thinkTitle.classList.remove('hidden');
    if (barraTimerContainer) barraTimerContainer.classList.remove('hidden');
    if (barraTimer) barraTimer.classList.remove('hidden');

    // Assegurem que moneda i botó estiguin amagats al principi
    if (moneda) moneda.classList.add('hidden');
    if (btnRefresh) btnRefresh.classList.add('hidden');

    // Iniciem l'animació de 15 segons per a la barra
    iniciarBarra15Segons();
  }, 1000);

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
    // Afegeix el text "+ " i la icona al botó de refresh
    if (btnRefresh) {
      btnRefresh.innerHTML = `+ 15s ${refreshIconSVG}`;
      btnRefresh.classList.remove('hidden');
    }

    // APAREIX LA MONEDA quan s'acaben els 15 segons!
    if (moneda) {
      moneda.classList.remove('hidden');
    }

    // Mostrem els botons inferiors de pagament
    if (paymentButtons) {
      paymentButtons.classList.remove('hidden');
    }
  }

  // Si fan clic a Refresh, afegim 15 segons més i tornem a amagar la moneda
  if (btnRefresh) {
    btnRefresh.addEventListener('click', () => {
      btnRefresh.classList.add('hidden');
      if (moneda) moneda.classList.add('hidden');
      iniciarBarra15Segons();
    });
  }
});
