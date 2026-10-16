(() => {
  const config = window.CLIENT_CONFIG || {};
  const client = config.brand?.name || 'Cliente';
  const rawLogo = config.brand?.logo || '/assets/dama-favicon.png';
  const logo = `/${String(rawLogo).replace(/^\/+/, '')}`;
  const badge = document.querySelector('.client-badge');
  if (!badge) return;
  badge.innerHTML = `<img src="${logo}" alt="Logo ${client}">`;
  const image = badge.querySelector('img');
  image.addEventListener('error', () => { badge.innerHTML = ''; });
})();
