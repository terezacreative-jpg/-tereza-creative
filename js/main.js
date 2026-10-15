// Basic JS: nav toggle, lightbox, form helpers
document.addEventListener('DOMContentLoaded',function(){
  // year
  const yearEls = [document.getElementById('year'),document.getElementById('year-2'),document.getElementById('year-3'),document.getElementById('year-4')];
  yearEls.forEach(el=>{ if(el) el.textContent = new Date().getFullYear(); });

  // nav toggle
  document.querySelectorAll('.nav-toggle').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const nav = btn.nextElementSibling || document.getElementById(btn.getAttribute('aria-controls'));
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      if(nav) nav.style.display = expanded ? 'none' : 'flex';
    });
  });

  // lightbox
  const lightbox = document.getElementById('lightbox') || document.getElementById('lightbox-2');
  const lbImg = document.getElementById('lightbox-img') || document.getElementById('lightbox-img-2');
  const lbCaption = document.getElementById('lightbox-caption') || document.getElementById('lightbox-caption-2');
  const lbClose = document.getElementById('lightbox-close') || document.getElementById('lightbox-close-2');

  document.querySelectorAll('.portfolio-item img, .card img').forEach(img=>{
    img.addEventListener('click',()=>{
      const src = img.getAttribute('src');
      const title = img.dataset.title || img.alt || '';
      if(lbImg) lbImg.src = src;
      if(lbCaption) lbCaption.textContent = title;
      if(lightbox) { lightbox.style.display = 'flex'; lightbox.setAttribute('aria-hidden','false'); }
    });
  });
  if(lbClose) lbClose.addEventListener('click',()=>{ if(lightbox){ lightbox.style.display = 'none'; lightbox.setAttribute('aria-hidden','true'); } });
  if(lightbox) lightbox.addEventListener('click',(e)=>{ if(e.target===lightbox){ lightbox.style.display='none'; lightbox.setAttribute('aria-hidden','true'); } });

  // simple form validation
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit',(e)=>{
      // Let browser handle required/email validation; show small UX improvement
      const email = form.querySelector('input[type="email"]');
      if(email && !email.checkValidity()){
        e.preventDefault();
        email.focus();
        alert('Zadejte platný e-mail.');
      }
    });
  }
});
