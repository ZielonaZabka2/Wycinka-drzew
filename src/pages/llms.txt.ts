import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { services } from '../data/services';
import { locations } from '../data/locations';
import { faqGroups } from '../data/faq';

const strip = (s: string) => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

export const GET: APIRoute = () => {
  const faq = faqGroups.flatMap((g) => g.items).slice(0, 12);
  const body = `# ${site.name} – wycinka drzew i prace wysokościowe, Ostrołęka

> ${site.description}

## Dane firmy (NAP)
- Nazwa: ${site.name}
- Telefon: ${site.phone}
- Adres: ${site.address.street}, ${site.address.postalCode} ${site.address.city}, woj. ${site.address.region}, Polska
- Mapy Google: ${site.mapsUrl}
- Obszar działania: Ostrołęka i okolice w promieniu ok. ${site.serviceRadiusKm} km
- Wycena: bezpłatna (oględziny lub zdjęcia przesłane SMS-em)
- Strona: ${site.url}/

## Usługi
${services.map((s) => `- [${s.name}](${site.url}/uslugi/${s.slug}/): ${strip(s.lead)}`).join('\n')}

## Obszar działania
${locations.map((l) => `- [Wycinka drzew ${l.name}](${site.url}/obszar-dzialania/${l.slug}/): ${l.admin}; ${l.distanceKm === 0 ? 'baza firmy' : `${l.distanceKm} km od bazy`}; zgłoszenia przyjmuje: ${l.office}`).join('\n')}

## Poradniki
- [Pozwolenie na wycinkę drzew – przepisy i progi obwodu](${site.url}/poradnik/pozwolenie-na-wycinke-drzew/)
- [FAQ – najczęstsze pytania](${site.url}/faq/)

## Najczęstsze pytania
${faq.map((f) => `### ${f.q}\n${strip(f.a)}`).join('\n\n')}

## Kontakt
- [Kontakt i wycena](${site.url}/kontakt/) – tel. ${site.phone}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
