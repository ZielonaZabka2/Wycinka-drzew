// Jedno źródło prawdy dla danych firmy (NAP). Zmiana tutaj aktualizuje całą stronę,
// schema.org, stopkę, llms.txt i sitemapę.
export const site = {
  url: 'https://wycinkadrzew-ostroleka.pl',
  name: 'Sch Wycinka Drzew',
  legalName: 'Sch Wycinka Drzew',
  shortName: 'SCH Wycinka Drzew',
  tagline: 'Wycinka drzew, zwyżka i prace wysokościowe — Ostrołęka',
  description:
    'Profesjonalna wycinka drzew w Ostrołęce i okolicach: metoda alpinistyczna, wycinka drzew niebezpiecznych, wynajem podnośnika koszowego (zwyżki) z operatorem, prace na wysokościach i odśnieżanie dachów. Bezpłatna wycena.',
  phone: '+48 572 345 128',
  phoneHref: 'tel:+48572345128',
  smsHref: 'sms:+48572345128',
  email: '' as string, // uzupełnij, jeśli firma ma adres e-mail
  address: {
    street: 'ppłk. Łukasza Cieplińskiego „Pługa” 9',
    postalCode: '07-410',
    city: 'Ostrołęka',
    region: 'mazowieckie',
    country: 'PL',
  },
  geo: { lat: 53.0846, lng: 21.5751 },
  mapsUrl: 'https://maps.google.com/maps?cid=10048647665547519958',
  googleReviewsUrl: 'https://search.google.com/local/writereview?placeid=' as string, // opcjonalnie
  serviceRadiusKm: 60,
  // Godziny: uzupełnij zgodnie z wizytówką Google. Pusta tablica = nie publikujemy godzin w schema.
  openingHours: [] as { days: string[]; opens: string; closes: string }[],
  sameAs: ['https://maps.google.com/maps?cid=10048647665547519958', 'https://ultimatepro.pl/uslugi/wycinka-drzew'],
  founder: '',
  foundingYear: '',
  lastUpdated: '2026-09-30',
} as const;

export const nav = [
  { href: '/uslugi/', label: 'Usługi' },
  { href: '/uslugi/wycinka-drzew/', label: 'Wycinka drzew' },
  { href: '/uslugi/podnosnik-koszowy-zwyzka/', label: 'Zwyżka' },
  { href: '/obszar-dzialania/', label: 'Obszar działania' },
  { href: '/poradnik/pozwolenie-na-wycinke-drzew/', label: 'Pozwolenia' },
  { href: '/faq/', label: 'FAQ' },
  { href: '/kontakt/', label: 'Kontakt' },
];
