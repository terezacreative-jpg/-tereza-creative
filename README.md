# Tereza Creative — Deployment & Netlify

Tato větev obsahuje finální web připravený k nasazení.

Netlify deployment (doporučeno)
1. Přejděte na https://app.netlify.com/ a vytvořte nový site → "New site from Git".
2. Připojte GitHub účet a vyberte repo `terezacreative-jpg/-tereza-creative` a větev `site-enhancement`.
3. V nastavení buildu nechte publish directory jako `.` (root). Pro statický HTML web není potřeba build command.
4. Po deployi otevřete Sites → Forms — Netlify automaticky detekuje formulář `contact` díky atributům `data-netlify`.
5. Přidejte vlastní doménu `tereza.creative` v Site settings → Domain management → Add custom domain. Upravte DNS podle pokynů Netlify (CNAME/ALIAS).

GitHub Pages (alternativa)
- Pokud místo Netlify chcete GitHub Pages, mergeujte větev `site-enhancement` do výchozí větve a v nastavení repo zapněte Pages (branch: main or default). Pro Netlify Forms je třeba použít Netlify; GitHub Pages sám o sobě formuláře neobslouží.

CNAME
- Do repozitáře jsem přidal soubor `CNAME` s hodnotou `tereza.creative`. Pokud budete používat Netlify, Netlify vytvoří vlastní DNS záznamy; při přímém nasazení přes GitHub Pages uložení CNAME v repu pomůže s vlastní doménou.

Další kroky, které mohu udělat za vás
- Vytvořit PR: připravil jsem popis níže.
- Po schválení mohu provést merge a pomoci nastavit DNS (budete potřebovat přístup k registru domény).

