// Enhanced JS: nav toggle, lightbox, keyboard support, small UX improvements
document.addEventListener('DOMContentLoaded',function(){
  // year
  const yearEls = [document.getElementById('year'),document.getElementById('year-2'),document.getElementById('year-3'),document.getElementById('year-4')];
  yearEls.forEach(el=>{ if(el) el.textContent = new Date().getFullYear(); });

  // nav toggle
  document.querySelectorAll('.nav-toggle').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const navId = btn.getAttribute('aria-controls') || btn.nextElementSibling && btn.nextElementSibling.id;
      const nav = navId ? document.getElementById(navId) : btn.nextElementSibling;
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      if(nav) nav.style.display = expanded ? 'none' : 'flex';
    });
  });

  // lightbox
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const lbCaption = document.getElementById('lightbox-caption');
  const lbClose = document.getElementById('lightbox-close');

  function openLightbox(src, title){
    if(!lightbox) return;
    lbImg.src = src;
    lbImg.alt = title || '';
    lbCaption.textContent = title || '';
    lightbox.style.display = 'flex';
    lightbox.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
    lbClose && lbClose.focus();
  }
  function closeLightbox(){
    if(!lightbox) return;
    lightbox.style.display = 'none';
    lightbox.setAttribute('aria-hidden','true');
    lbImg.src = '';
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.portfolio-item img, .card img').forEach(img=>{
    img.addEventListener('click',()=>{
      const src = img.getAttribute('src');
      const title = img.dataset.title || img.alt || '';
      openLightbox(src, title);
    });
    img.addEventListener('keydown', (e) => { if(e.key === 'Enter') img.click(); });
  });

  lbClose && lbClose.addEventListener('click', closeLightbox);
  if(lightbox) lightbox.addEventListener('click',(e)=>{ if(e.target===lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeLightbox(); });

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href && href.startsWith('#')){
        const el = document.querySelector(href);
        if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth',block:'start'}); }
      }
    });
  });

  // simple form validation UX
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit',(e)=>{
      const email = form.querySelector('input[type="email"]');
      if(email && !email.checkValidity()){
        e.preventDefault();
        email.focus();
        alert('Zadejte platný e-mail.');
      }
    });
  }
});
