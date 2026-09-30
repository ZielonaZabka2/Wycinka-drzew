import { site } from './site';
import type { Faq } from './types';

export const BUSINESS_ID = `${site.url}/#business`;
export const WEBSITE_ID = `${site.url}/#website`;

const stripHtml = (s: string) => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

export function businessSchema() {
  const b: Record<string, unknown> = {
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': BUSINESS_ID,
    name: site.name,
    alternateName: ['SCH Wycinka Drzew', 'Sch Wycinka Drzew Alpinistyka Ostrołęka', 'Wycinka Drzew Ostrołęka'],
    description: site.description,
    url: `${site.url}/`,
    telephone: site.phone,
    image: `${site.url}/og-image.png`,
    logo: `${site.url}/logo-512.png`,
    priceRange: '$$',
    currenciesAccepted: 'PLN',
    paymentAccepted: 'Gotówka, przelew',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    hasMap: site.mapsUrl,
    areaServed: [
      {
        '@type': 'GeoCircle',
        geoMidpoint: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
        geoRadius: site.serviceRadiusKm * 1000,
      },
      { '@type': 'City', name: 'Ostrołęka' },
      { '@type': 'AdministrativeArea', name: 'powiat ostrołęcki' },
      { '@type': 'AdministrativeArea', name: 'województwo mazowieckie' },
    ],
    knowsAbout: [
      'Wycinka drzew', 'Wycinka drzew metodą alpinistyczną', 'Wycinka sekcyjna', 'Usuwanie drzew niebezpiecznych',
      'Podnośnik koszowy', 'Prace na wysokościach', 'Pielęgnacja drzew', 'Przycinanie koron drzew', 'Odśnieżanie dachów',
      'Zgłoszenie zamiaru usunięcia drzewa', 'Ustawa o ochronie przyrody',
    ],
    makesOffer: [
      ['Wycinka drzew', '/uslugi/wycinka-drzew/'],
      ['Wycinka drzew metodą alpinistyczną', '/uslugi/wycinka-alpinistyczna/'],
      ['Podnośnik koszowy (zwyżka) z operatorem', '/uslugi/podnosnik-koszowy-zwyzka/'],
      ['Prace na wysokościach', '/uslugi/prace-wysokosciowe/'],
      ['Pielęgnacja i przycinanie drzew', '/uslugi/pielegnacja-drzew/'],
      ['Odśnieżanie dachów', '/uslugi/odsniezanie-dachow/'],
    ].map(([name, path]) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name, url: `${site.url}${path}`, '@id': `${site.url}${path}#service` },
      areaServed: { '@type': 'City', name: 'Ostrołęka' },
    })),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: site.phone,
      contactType: 'customer service',
      areaServed: 'PL',
      availableLanguage: ['pl'],
    },
    sameAs: site.sameAs,
  };
  if (site.email) b.email = site.email;
  if (site.openingHours.length) {
    b.openingHoursSpecification = site.openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    }));
  }
  return b;
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${site.url}/`,
    name: site.name,
    inLanguage: 'pl-PL',
    publisher: { '@id': BUSINESS_ID },
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.href}`,
    })),
  };
}

export function faqSchema(faq: Faq[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: stripHtml(f.a) },
    })),
  };
}

export function howToSchema(name: string, steps: { name: string; text: string }[]) {
  return {
    '@type': 'HowTo',
    name,
    step: steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: stripHtml(s.text) })),
  };
}
