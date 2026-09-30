# wycinkadrzew-ostroleka.pl

Strona firmy **SCH Wycinka Drzew** (Ostrołęka) – statyczny serwis Astro zoptymalizowany pod SEO lokalne, GEO (AI Overviews, ChatGPT, Perplexity) i Core Web Vitals.

## Plan i architektura

| Obszar | Rozwiązanie |
|---|---|
| Framework | Astro 5 – czysty HTML, zero JavaScriptu po stronie klienta (menu i FAQ na `<details>`) |
| Design | Własny design system (`src/styles/global.css`): zieleń leśna + pomarańcz BHP, fonty self-hosted (Inter, Bricolage Grotesque), ilustracje SVG |
| Dane firmy | Jedno źródło prawdy: `src/data/site.ts` (NAP, telefon, geo, obszar) |
| Treści | `src/data/services.ts`, `locations.ts`, `faq.ts`, `guide.ts` |
| Schema.org | `@graph`: LocalBusiness + WebSite + WebPage + BreadcrumbList + Service + HowTo + FAQPage + Article (`src/data/schema.ts`) |
| GEO | Odpowiedzi BLUF (answer-first), `/llms.txt` generowany z danych, `robots.txt` otwarty dla botów AI, tabele z faktami, `speakable` |
| Lokalne SEO | 12 stron miejscowości z unikalną treścią, urzędem właściwym dla zgłoszeń i schematyczną mapą obszaru |
| Sitemap | `@astrojs/sitemap` → `/sitemap-index.xml` |

### Podstrony

- `/` – strona główna
- `/uslugi/` + 6 usług: wycinka drzew, wycinka alpinistyczna, zwyżka / podnośnik koszowy, prace wysokościowe, pielęgnacja drzew, odśnieżanie dachów
- `/obszar-dzialania/` + 12 miejscowości (Ostrołęka, Rzekuń, Olszewo-Borki, Lelis, Kadzidło, Łyse, Myszyniec, Goworowo, Czerwin, Troszyn, Baranowo, Różan)
- `/poradnik/pozwolenie-na-wycinke-drzew/` – przepisy, progi obwodu, zgłoszenie
- `/faq/`, `/kontakt/`, `/o-nas/`, `/polityka-prywatnosci/`, `/llms.txt`

## Zdjęcia (logo i realizacje)

Strona działa bez zdjęć (ilustracje SVG), ale **prawdziwe zdjęcia z realizacji mocno podnoszą konwersję i E-E-A-T**. Wrzuć pliki JPG/PNG/WebP do `src/assets/photos/` o nazwach:

| Plik | Gdzie się pojawi |
|---|---|
| `hero.jpg` | strona główna (duże zdjęcie) |
| `wycinka-drzew.jpg`, `wycinka-alpinistyczna.jpg`, `podnosnik-koszowy-zwyzka.jpg`, `prace-wysokosciowe.jpg`, `pielegnacja-drzew.jpg`, `odsniezanie-dachow.jpg` | nagłówki stron usług |
| `miejscowosc-<slug>.jpg` (np. `miejscowosc-ostroleka.jpg`) | strony miejscowości |
| `o-nas.jpg` | strona „O nas” |

Astro automatycznie wygeneruje wersje AVIF/WebP w kilku rozmiarach. Zalecane: min. 1600 px szerokości, proporcje ok. 5:4.
Logo: podmień `public/favicon.svg` i komponent `src/components/Logo.astro`, a potem uruchom `node scripts/make-images.mjs`.

## Komendy

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # wynik w dist/
npm run audit      # Lighthouse mobile + desktop dla kluczowych podstron (po build)
```

## Wdrożenie na Vercel

1. Vercel → **Add New Project** → importuj repozytorium z GitHuba (framework wykryje się jako Astro, ustawienia domyślne).
2. **Settings → Domains** → dodaj `wycinkadrzew-ostroleka.pl` oraz `www.wycinkadrzew-ostroleka.pl` (www przekierowuje na wersję bez www – `vercel.json`).
3. Po publikacji: Google Search Console (właściwość domeny) → wyślij `https://wycinkadrzew-ostroleka.pl/sitemap-index.xml`; to samo w Bing Webmaster Tools (zasila też ChatGPT Search).
4. W wizytówce Google (Profil Firmy) ustaw stronę WWW na `https://wycinkadrzew-ostroleka.pl/`.

## Do uzupełnienia przez właściciela

- `src/data/site.ts`: e-mail (opcjonalnie), godziny otwarcia (zgodnie z wizytówką Google), dokładne współrzędne siedziby.
- Zdjęcia realizacji (patrz wyżej).
- Opinie klientów – po zebraniu recenzji w Google można dodać sekcję opinii (bez fikcyjnych ocen w schema).
