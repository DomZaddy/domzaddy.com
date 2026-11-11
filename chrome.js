/* DomZaddy Games site: shared nav, footer, social links, video lightbox, scroll reveal.
   Every page: <body data-page="home|games|videos|studio|store|books"> and <script src="chrome.js"></script> at the end of body. */
(function () {
  const SOC = [
    { key: 'youtube', name: 'YouTube', handle: '@DomZaddy', url: 'https://www.youtube.com/@DomZaddy?sub_confirmation=1', color: '#ff3d3d', cta: 'Subscribe',
      d: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
    { key: 'tiktok', name: 'TikTok', handle: '@dom_zaddy', url: 'https://www.tiktok.com/@dom_zaddy', color: '#25F4EE', cta: 'Follow',
      d: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z' },
    { key: 'instagram', name: 'Instagram', handle: '@_dom_zaddy_', url: 'https://www.instagram.com/_dom_zaddy_/', color: '#E1306C', cta: 'Follow', svg:
      '<rect x="2" y="2" width="20" height="20" rx="5.5" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="12" cy="12" r="4.6" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="17.7" cy="6.3" r="1.4"/>' },
    { key: 'x', name: 'X', handle: '@dom_zaddy', url: 'https://x.com/dom_zaddy', color: '#e8e8e8', cta: 'Follow',
      d: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
    { key: 'discord', name: 'Discord', handle: 'DomZaddy Games', url: 'https://discord.gg/dBuX7yRUTY', color: '#7983ff', cta: 'Join',
      d: 'M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.74 19.74 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z' },
    { key: 'linktree', name: 'Linktree', handle: 'linktr.ee/DomZaddy', url: 'https://linktr.ee/DomZaddy', color: '#43E55E', cta: 'All links',
      d: 'M7.953 15.066c-.08.163-.08.324-.08.486.08.517.528.897 1.052.89h1.294v4.776c0 .486-.404.89-.89.89H6.577a.898.898 0 0 1-.889-.891v-4.774H.992c-.728 0-1.214-.729-.89-1.377l6.96-12.627a1.065 1.065 0 0 1 1.863 0l2.913 5.585-3.885 7.042zm15.945 0-6.96-12.627a1.065 1.065 0 0 0-1.862 0l-2.995 5.586 3.885 7.04c.081.164.081.326.081.487-.08.517-.529.897-1.052.89h-1.296v4.776c.005.49.4.887.89.89h2.914a.9.9 0 0 0 .892-.89v-4.775h4.612c.73 0 1.214-.729.89-1.377z' }
  ];
  const icon = s => `<svg viewBox="0 0 24 24" aria-hidden="true">${s.svg || `<path d="${s.d}"/>`}</svg>`;
  const PAGES = [['games', 'Games'], ['videos', 'Videos'], ['studio', 'Studio'], ['books', 'Books']];
  const page = document.body.dataset.page || 'home';
  const href = k => (k === 'home' ? 'index.html' : k + '.html');
  const disc = SOC.find(s => s.key === 'discord');

  // nav
  const nav = document.createElement('header');
  nav.className = 'nav';
  nav.innerHTML = `<a class="brand" href="index.html"><img src="media/crest.png" alt="">DOMZADDY GAMES</a>
    <nav class="links">${PAGES.map(([k, n]) => `<a href="${href(k)}"${k === page ? ' class="on"' : ''}>${n}</a>`).join('')}</nav>
    <div class="soc">${SOC.filter(s => s.key !== 'discord').map(s => `<a href="${s.url}" target="_blank" rel="noopener" aria-label="${s.name}" title="${s.name}">${icon(s)}</a>`).join('')}</div>
    <a class="btn btn-disc btn-sm" href="${disc.url}" target="_blank" rel="noopener">${icon(disc)}Discord</a>
    <button class="burger" aria-label="Menu"><span></span><span></span><span></span></button>`;
  document.body.prepend(nav);
  const drawer = document.createElement('div');
  drawer.className = 'drawer';
  drawer.innerHTML = PAGES.map(([k, n]) => `<a class="big${k === page ? ' on' : ''}" href="${href(k)}">${n}</a>`).join('') +
    `<a class="btn btn-disc" href="${disc.url}" target="_blank" rel="noopener" style="align-self:flex-start;margin-top:10px">${icon(disc)}Join the Discord</a>`;
  document.body.prepend(drawer);
  nav.querySelector('.burger').addEventListener('click', () => drawer.classList.toggle('open'));
  const solid = () => nav.classList.toggle('solid', scrollY > 40);
  addEventListener('scroll', solid, { passive: true }); solid();

  // footer
  const foot = document.createElement('footer');
  foot.className = 'foot';
  foot.innerHTML = `<div class="wrap"><div class="top">
      <div><img class="crest" src="media/crest.png" alt="DomZaddy Games"><p>An indie game studio. We make games we want to play, and we show how we make them.</p>
        <div class="soc">${SOC.map(s => `<a href="${s.url}" target="_blank" rel="noopener" aria-label="${s.name}" title="${s.name}">${icon(s)}</a>`).join('')}</div></div>
      <div><h4>Games</h4><ul><li><a href="games.html#kc">Keeps &amp; Conquerors</a></li><li><a href="games.html#utk">Under the Kingdom</a></li><li><a href="videos.html">Trailers</a></li></ul></div>
      <div><h4>More</h4><ul><li><a href="books.html">Books</a></li><li><a href="studio.html">Studio</a></li><li><a href="studio.html#contact">Contact</a></li></ul></div>
      <div><h4>Game news</h4><p>Playtests, launch dates and new trailers. No spam.</p>
        <form class="signup" action="https://formspree.io/f/xvzvpboq" method="POST">
          <input type="hidden" name="_subject" value="Game news sign-up"><input type="hidden" name="signup" value="game news"><input type="email" name="email" required placeholder="you@example.com" aria-label="Email"><button class="btn btn-gold btn-sm" type="submit">Sign up</button></form></div>
    </div><div class="bottom"><span>&copy; 2026 DomZaddy Games. All rights reserved.</span><span>Made by DomZaddy, a game developer for 15+ years.</span></div></div>`;
  document.body.append(foot);

  // video lightbox: any element with data-yt="<id>" (add data-short for vertical Shorts)
  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = '<button class="x" aria-label="Close">&times;</button><div class="box"></div>';
  document.body.append(lb);
  const close = () => { lb.classList.remove('open', 'short'); lb.querySelector('.box').innerHTML = ''; };
  lb.addEventListener('click', e => { if (e.target === lb || e.target.closest('.x')) close(); });
  addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  document.addEventListener('click', e => {
    const t = e.target.closest('[data-yt]');
    if (!t) return;
    e.preventDefault();
    lb.classList.toggle('short', t.hasAttribute('data-short'));
    lb.querySelector('.box').innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${t.dataset.yt}?autoplay=1&rel=0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    lb.classList.add('open');
  });

  // reveal on scroll: add class "rv" to anything
  const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { threshold: .12 });
  const watch = () => document.querySelectorAll('.rv:not(.in)').forEach(el => io.observe(el));
  watch();

  // Formspree forms (game-news sign-up, contact): send in the background, fall back to a normal post if refused
  async function sendForm(form, done) {
    const btn = form.querySelector('button[type=submit], button:not([type])');
    if (btn) btn.disabled = true;
    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (res.ok) { done(); return; }
    } catch (err) { /* fall through */ }
    form.submit();
  }
  document.querySelectorAll('form.signup').forEach(f => f.addEventListener('submit', e => {
    e.preventDefault();
    sendForm(f, () => { f.innerHTML = '<p>You are on the list. Thanks!</p>'; });
  }));

  window.DZ = { sendForm, SOC, icon, watch, ytThumb: id => `https://i.ytimg.com/vi/${id}/hqdefault.jpg` };
})();
