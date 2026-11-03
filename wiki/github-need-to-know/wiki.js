(() => {
  const search = document.querySelector('#search');
  const cards = [...document.querySelectorAll('.card')];
  const status = document.querySelector('#status');
  const normalize = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const synonyms = [['agente','agentes','agent','agents'],['memoria','memory'],['seguranca','security'],['banco','database'],['pesquisa','research']];
  const equivalents = word => synonyms.find(group => group.includes(word)) || [word];
  cards.forEach((card, i) => { card.dataset.order = String(i); });
  function filter() {
    const words = normalize(search.value).trim().split(/\s+/).filter(Boolean);
    let count = 0;
    for (const card of cards) {
      const haystack = normalize(card.dataset.search);
      const match = words.every(word => equivalents(word).some(term => haystack.includes(term)));
      card.hidden = !match;
      const title = normalize(card.dataset.title), topics = normalize(card.dataset.topics);
      card.dataset.score = String(words.reduce((score, word) => score + (equivalents(word).some(t => title.includes(t)) ? 5 : equivalents(word).some(t => topics.includes(t)) ? 3 : haystack.includes(word) ? 1 : 0), 0));
      if (match) count++;
    }
    for (const section of document.querySelectorAll('.subject')) {
      section.hidden = !section.querySelector('.card:not([hidden])');
      const container = section.querySelector('.cards');
      [...container.children].sort((a,b) => Number(b.dataset.score)-Number(a.dataset.score) || Number(a.dataset.order)-Number(b.dataset.order)).forEach(card => container.append(card));
    }
    document.querySelector('#empty').hidden = count > 0;
    status.textContent = `${count} referência(s) encontrada(s).`;
  }
  search.addEventListener('input', filter);
  document.querySelector('aside nav').addEventListener('click', event => {
    const anchor = event.target.closest('a');
    if (!anchor) return;
    const target = document.getElementById(anchor.hash.slice(1));
    if (target && target.hidden) { search.value = ''; filter(); }
  });
  async function copy(text) {
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw Error('clipboard indisponível');
      await navigator.clipboard.writeText(text);
      status.textContent = 'Copiado para a área de transferência.';
    } catch (_) {
      status.textContent = 'Não foi possível copiar. Baixe o TXT ou selecione o texto do relatório.';
      const fallback = document.querySelector('#manual-copy');
      fallback.value = text; fallback.hidden = false; fallback.focus(); fallback.select();
    }
  }
  document.addEventListener('click', async event => {
    const button = event.target.closest('button'); if (!button) return;
    if (button.dataset.copyUrl) copy(button.dataset.copyUrl);
    if (button.dataset.copyReport) copy(document.getElementById('texto-' + button.dataset.copyReport).value);
    if (button.id === 'copy-all') {
      try { const res = await fetch('conhecimento.txt'); if (!res.ok) throw Error(); await copy(await res.text()); }
      catch (_) { status.textContent = 'Não foi possível carregar o texto completo; use o link para baixar o TXT.'; }
    }
  });
  const fallback = document.createElement('textarea'); fallback.id = 'manual-copy'; fallback.hidden = true;
  fallback.setAttribute('aria-label', 'Texto para seleção e cópia manual'); status.after(fallback);
  filter();
  function openFragment() {
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch (_) { return; }
    const target = document.getElementById(id);
    if (target && target.tagName === 'DETAILS') {
      if (target.hidden) { search.value = ''; filter(); }
      target.open = true;
      target.scrollIntoView();
    }
  }
  window.addEventListener('hashchange', openFragment);
  openFragment();
})();
