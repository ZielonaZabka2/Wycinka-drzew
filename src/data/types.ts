export interface Faq {
  q: string;
  /** Odpowiedź BLUF: pierwsze zdanie odpowiada wprost; może zawierać prosty HTML (<strong>, <a>, <ul>). */
  a: string;
}

export interface Section {
  /** H2 sekcji — najlepiej w formie pytania lub z frazą kluczową */
  h2: string;
  /** Akapity (proste HTML dozwolone: <strong>, <a href>, <em>) */
  paragraphs: string[];
  /** Opcjonalna lista punktowana */
  bullets?: string[];
}

export type Illustration = 'arborist' | 'lift' | 'height' | 'garden' | 'snow' | 'stump' | 'forest';

export interface Service {
  slug: string;
  /** Krótka nazwa w menu / kartach */
  name: string;
  /** H1 strony */
  h1: string;
  /** <title> max ~60 znaków */
  title: string;
  /** meta description 140–158 znaków */
  metaDescription: string;
  /** 1–2 zdania na kartę usługi */
  excerpt: string;
  /** Akapit BLUF pod H1: 40–60 słów, odpowiada wprost co/gdzie/dla kogo/ile trwa */
  lead: string;
  illustration: Illustration;
  /** Kluczowe liczby/fakty (3–4) — do boksów „w skrócie” */
  facts: { label: string; value: string }[];
  /** Co obejmuje usługa — lista */
  includes: string[];
  /** Proces krok po kroku (HowTo) */
  steps: { name: string; text: string }[];
  sections: Section[];
  faq: Faq[];
  /** schema.org serviceType */
  serviceType: string;
  keywords: string[];
}

export interface Location {
  slug: string;
  /** Nazwa miejscowości w mianowniku, np. „Rzekuń” */
  name: string;
  /** Miejscownik, np. „w Rzekuniu” */
  inName: string;
  /** Gmina / powiat, np. „gmina Rzekuń, powiat ostrołęcki” */
  admin: string;
  distanceKm: number;
  driveMin: number;
  lat: number;
  lng: number;
  title: string;
  metaDescription: string;
  h1: string;
  /** BLUF 40–60 słów */
  lead: string;
  /** 2–4 unikalne akapity o specyfice lokalnej (zabudowa, drzewostan, osiedla, urząd gminy przyjmujący zgłoszenia) */
  paragraphs: string[];
  /** Osiedla / sołectwa / miejscowości obsługiwane w tej okolicy */
  areas: string[];
  /** Urząd przyjmujący zgłoszenia/wnioski o wycinkę */
  office: string;
  faq: Faq[];
}
