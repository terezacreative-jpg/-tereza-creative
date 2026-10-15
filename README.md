# Tereza Creative — plně připravený web

Tato větev obsahuje finální verzi statického webu s rozšířenými sekcemi a vylepšeným designem:

Co bylo provedeno
- Kompletní multi-page web: index, about, portfolio, contact
- Vylepšený design: nový CSS soubor s lepším layoutem a typografií, Google font Inter
- Rozšířené sekce: services, testimonials/references, blog preview, CTA
- Vylepšené portfolio: tři ukázkové projekty s lightboxem
- Vylepšené JS: podporuje ESC pro zavření lightboxu, smooth scroll, lepší nav toggle
- Formulář: zlepšený contact form s GDPR zaškrtávátkem, připravený pro Formspree
- Assets: tři SVG ilustrace projektů + favicon

Další kroky / jak nasadit
1. Pokud chcete nasadit na GitHub Pages, mergeujte větev `site-enhancement` do výchozí větve a v nastavení repo povolte Pages z hlavní větve (root).
2. Nahraďte placeholder URL v JSON-LD (v `index.html`) skutečnou doménou.
3. V `contact.html` nahraďte `your-form-id` vaším Formspree ID nebo nastavte Netlify Forms / serverless endpoint.
4. Přidejte reálné obrázky projektů do `assets/images/` (doporučeno WebP pro výkon).

Ráda upravím:
- přidání vlastního obsahu (texty, ceny, popisy projektů)
- nastavení CNAME a vlastní domény
- integraci Netlify CMS nebo Eleventy pro blog

