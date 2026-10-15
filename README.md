# Tereza Creative — web (staging branch)

Tato větev přidává základní responzivní, vícestránkový statický web (HTML/CSS/JS) jako výchozí šablonu pro portfolio.

Co je v této větvi (site-enhancement):
- index.html, about.html, portfolio.html, contact.html
- css/styles.css — základní styly (mobile-first)
- js/main.js — jednoduché JS pro menu, lightbox a validaci formuláře
- assets/ — placeholder obrázek a favicon

Rychlé kroky k nasazení
1. Pro lokální kontrolu otevřete soubory v prohlížeči (stačí je otevřít přímo nebo použít jednoduchý HTTP server např. `python -m http.server`).
2. Formspree: nahradit `your-form-id` v `contact.html` svým ID nebo použít jinou službu (Netlify Forms, Zapier, atd.).
3. Nasazení: mergeujte tuto větev do výchozí větve a aktivujte GitHub Pages (Settings → Pages) nebo použijte Netlify/Vercel.

Tipy pro další vylepšení
- Přidat reálné obrázky do `assets/images/` (doporučeno WebP a optimalizace).
- Přidat metriky výkonu a SEO (structured data, sitemap.xml, robots.txt).
- Integrovat Netlify CMS nebo Eleventy pokud chcete blog.

