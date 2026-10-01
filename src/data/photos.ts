// Zdjęcia z Pexels (licencja Pexels: darmowe użycie komercyjne, bez wymogu atrybucji).
// Pobierane i optymalizowane (AVIF/WebP) podczas builda na Vercel; jeśli pobranie się nie uda,
// strona pokazuje ilustrację SVG. Plik lokalny w src/assets/photos/<nazwa>.jpg ma pierwszeństwo.
export const stockPhotos: Record<string, { id: number; alt: string }> = {
  hero: { id: 35606516, alt: 'Arborysta w kasku i kamizelce ostrzegawczej pracuje w koronie drzewa' },
  'wycinka-drzew': { id: 11932165, alt: 'Pilarz ścina drzewo pilarką spalinową' },
  'wycinka-alpinistyczna': { id: 2902892, alt: 'Wspinacz w uprzęży asekuracyjnej wchodzi na drzewo' },
  'pielegnacja-drzew': { id: 5231044, alt: 'Ogrodnicy przycinają gałęzie drzew' },
  'odsniezanie-dachow': { id: 8875446, alt: 'Sople lodu zwisające z rynny dachu' },
  'o-nas': { id: 4206121, alt: 'Cięcie drewna pilarką spalinową po wycince drzewa' },
};

export const pexelsUrl = (id: number, w = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
