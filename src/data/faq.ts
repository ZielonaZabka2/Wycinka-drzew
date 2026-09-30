import type { Faq } from './types';

export const faqGroups: { title: string; items: Faq[] }[] = [
  {
    title: 'Wycinka i ceny',
    items: [
      { q: 'Ile kosztuje wycinka drzewa w Ostrołęce?', a: 'Koszt wycinki ustalamy indywidualnie po bezpłatnych oględzinach, bo zależy od wysokości i obwodu drzewa, metody pracy (obalenie, wycinka sekcyjna z liny, zwyżka), przeszkód w otoczeniu, stanu drewna oraz zakresu sprzątania i wywozu. Dwa drzewa tej samej wielkości mogą wymagać zupełnie innego nakładu pracy, dlatego nie publikujemy cennika „za sztukę”. Zadzwoń, a umówimy wycenę.' },
      { q: 'Czy wycena wycinki jest płatna?', a: 'Nie, wycena jest bezpłatna i do niczego nie zobowiązuje. Przyjeżdżamy na miejsce, oceniamy drzewo i otoczenie, a następnie podajemy koszt, metodę pracy i proponowany termin. Przy prostych zleceniach wstępną orientację możemy dać już na podstawie zdjęć wysłanych SMS-em.' },
      { q: 'Co dzieje się z drewnem po wycince?', a: 'Drewno zostaje u właściciela, chyba że ustalimy inaczej. Pień i grube konary możemy pociąć na kłody lub kawałki nadające się na opał i ułożyć we wskazanym miejscu. Gałęzie zbieramy, a ich rozdrobnienie lub wywóz ustalamy przy wycenie jako dodatkowy zakres prac.' },
      { q: 'Czy opłaca się wyciąć kilka drzew za jednym razem?', a: 'Zwykle tak, bo jeden dojazd i jedno rozstawienie sprzętu obsługują kilka drzew, a prace można zaplanować w logicznej kolejności. Jeśli planujesz wycinkę kilku drzew w ciągu roku, warto złożyć jedno zgłoszenie obejmujące wszystkie i zlecić prace w jednym terminie.' },
      { q: 'Jak długo trwa wycinka drzewa?', a: 'Pojedyncze drzewo na otwartym terenie usuwamy często w kilka godzin, natomiast duże drzewo przy budynku, wycinane sekcyjnie na linach, może zająć cały dzień roboczy. Na czas wpływają też pogoda, dostęp do działki i zakres porządkowania. Orientacyjny czas podajemy przy wycenie.' },
      { q: 'Czy wycinacie drzewa po wichurze lub burzy?', a: 'Tak, usuwamy drzewa złamane, wywrócone i nadłamane po wichurach, także te oparte o budynki lub ogrodzenia. Takie zlecenia traktujemy priorytetowo, bo naprężone pnie i wiszące konary są szczególnie niebezpieczne. Nie próbuj ich ciąć samodzielnie – zadzwoń i opisz sytuację.' },
    ],
  },
  {
    title: 'Pozwolenia i przepisy',
    items: [
      { q: 'Czy potrzebuję pozwolenia na wycinkę drzewa na swojej działce?', a: 'Osoba prywatna, która wycina drzewo na cele niezwiązane z działalnością gospodarczą, nie potrzebuje zezwolenia, ale musi złożyć zgłoszenie, gdy obwód pnia na wysokości 5 cm przekracza 80 cm (topola, wierzba, klon jesionolistny, klon srebrzysty), 65 cm (kasztanowiec zwyczajny, robinia akacjowa, platan klonolistny) lub 50 cm (pozostałe gatunki). Szczegóły opisujemy w <a href="/poradnik/pozwolenie-na-wycinke-drzew/">poradniku o pozwoleniach</a>.' },
      { q: 'Gdzie zgłosić wycinkę drzewa w Ostrołęce?', a: 'Na terenie miasta zgłoszenie składa się w Urzędzie Miasta Ostrołęka. Jeżeli działka leży poza granicami miasta, właściwy jest urząd gminy, na której terenie rośnie drzewo – np. Rzekuń, Olszewo-Borki czy Lelis. Zgłoszenie powinno zawierać dane wnioskodawcy, oznaczenie nieruchomości i rysunek z lokalizacją drzewa.' },
      { q: 'Ile czeka się na odpowiedź urzędu po zgłoszeniu wycinki?', a: 'Urząd ma 21 dni od doręczenia zgłoszenia na oględziny drzewa, a potem 14 dni od oględzin na ewentualny sprzeciw. Jeśli w tym czasie sprzeciw nie zostanie wniesiony, można przystąpić do wycinki. Urząd może też wydać zaświadczenie o braku sprzeciwu wcześniej.' },
      { q: 'Czy można wycinać drzewa w okresie lęgowym ptaków?', a: 'Tak, wycinka w okresie lęgowym (orientacyjnie od 1 marca do 15 października) nie jest zakazana, ale przed jej rozpoczęciem trzeba sprawdzić, czy w drzewie nie ma zasiedlonych gniazd lub innych chronionych gatunków. Jeżeli są, prace należy przesunąć albo uzyskać odstępstwo od zakazów. Bezpieczniejszym terminem jest okres jesienno-zimowy.' },
      { q: 'Czy muszę sadzić nowe drzewo po wycince?', a: 'Przy zgłoszeniu wycinki przez osobę prywatną urząd nie nakłada obowiązku nasadzeń zastępczych. Obowiązek taki może natomiast wynikać z zezwolenia wydanego np. firmie lub wspólnocie. Niezależnie od przepisów warto posadzić nowe drzewo w miejscu, gdzie nie będzie kolidować z budynkami i przewodami.' },
      { q: 'Co grozi za wycinkę drzewa bez zgłoszenia?', a: 'Za usunięcie drzewa bez wymaganego zgłoszenia lub zezwolenia urząd wymierza administracyjną karę pieniężną, której wysokość zależy m.in. od gatunku i obwodu pnia i może być bardzo wysoka. Dlatego przed wycinką zawsze mierzymy obwód drzewa i informujemy, czy formalności są potrzebne.' },
    ],
  },
  {
    title: 'Zwyżka i prace wysokościowe',
    items: [
      { q: 'Czy wynajmiecie zwyżkę bez operatora?', a: 'Nie, podnośnik koszowy wynajmujemy wyłącznie z operatorem. Obsługa zwyżki wymaga uprawnień i doświadczenia, a operator odpowiada za bezpieczne ustawienie maszyny i sterowanie koszem. Szczegóły wynajmu, czas pracy i dostępne terminy ustalamy telefonicznie.' },
      { q: 'Jaką wysokość osiąga wasza zwyżka?', a: 'Zasięg podnośnika zależy od miejsca ustawienia i odległości od budynku lub drzewa, dlatego przed zleceniem najlepiej opisać zadanie i wysłać zdjęcie. Na tej podstawie potwierdzamy, czy zwyżka dosięgnie celu, a jeśli nie – proponujemy pracę z liny. Szczegóły techniczne podajemy telefonicznie.' },
      { q: 'Do czego można wykorzystać podnośnik koszowy?', a: 'Podnośnik koszowy służy do przycinki i wycinki drzew, montażu reklam, oświetlenia i kamer, przeglądów dachów i kominów, czyszczenia rynien, usuwania sopli i wieszania dekoracji świątecznych. Opis zastosowań znajdziesz na stronie <a href="/uslugi/podnosnik-koszowy-zwyzka/">zwyżka z operatorem</a>.' },
      { q: 'Czy pracujecie na wysokości przy złej pogodzie?', a: 'Nie, przy silnym wietrze, burzy, intensywnym deszczu czy oblodzeniu prace w koszu i na linach są wstrzymywane. Termin potwierdzamy dzień wcześniej na podstawie prognozy, a w razie złych warunków proponujemy najbliższy bezpieczny dzień.' },
      { q: 'Czy zwyżka może stanąć na drodze publicznej?', a: 'Może, ale zajęcie pasa drogowego zwykle wymaga uzgodnienia z zarządcą drogi, a czasem oznakowania miejsca prac. Przy wycenie ustalamy, gdzie stanie podnośnik i czy potrzebne są formalności. Najprościej, gdy maszyna może stanąć na posesji lub parkingu klienta.' },
    ],
  },
  {
    title: 'Organizacja i bezpieczeństwo',
    items: [
      { q: 'Jak przygotować posesję do wycinki lub prac zwyżką?', a: 'Wystarczy zapewnić dostęp do miejsca prac, przestawić samochody i usunąć z otoczenia drzewa rzeczy, które mogłyby ucierpieć – meble ogrodowe, donice, zabawki. Warto też wskazać miejsce na drewno i uprzedzić sąsiadów o terminie. Resztę zabezpieczeń przygotowujemy sami.' },
      { q: 'Jak zabezpieczacie teren podczas wycinki?', a: 'Wokół drzewa wyznaczamy strefę bezpieczeństwa, do której nie wchodzą osoby postronne ani zwierzęta. Przy budynkach i ogrodzeniach fragmenty drzewa opuszczamy kontrolowanie na linach. Pracownicy korzystają ze środków ochrony osobistej i asekuracji podczas pracy w koronie.' },
      { q: 'Czy drzewo sąsiada zwisające nad moją działką można przyciąć?', a: 'Gałęzie przechodzące na Twoją działkę możesz usunąć po bezskutecznym wezwaniu sąsiada do ich usunięcia w wyznaczonym terminie – tak stanowi Kodeks cywilny. Samo drzewo należy jednak do sąsiada, więc jego wycinka wymaga jego decyzji. Przycinkę wykonujemy tak, aby nie uszkodzić drzewa.' },
      { q: 'Jak umówić się na bezpłatną wycenę?', a: 'Najszybciej telefonicznie pod numerem +48 572 345 128. Opisz, czego dotyczy zlecenie i gdzie się znajduje, a jeśli możesz – wyślij zdjęcia SMS-em. Następnie ustalamy termin oględzin. Wszystkie dane kontaktowe znajdziesz na stronie <a href="/kontakt/">kontakt</a>.' },
      { q: 'Czy wykonujecie usługi dla firm i instytucji?', a: 'Tak, obsługujemy osoby prywatne, firmy, wspólnoty i spółdzielnie mieszkaniowe, zarządców nieruchomości oraz instytucje. Dla klientów z kilkoma obiektami możemy zaplanować prace w jednym cyklu, np. przegląd drzew wiosną i odśnieżanie dachów zimą.' },
    ],
  },
  {
    title: 'Obszar działania',
    items: [
      { q: 'Gdzie świadczycie usługi?', a: 'Działamy w Ostrołęce i w promieniu około 60 km od miasta, obejmując powiat ostrołęcki oraz miejscowości w sąsiednich powiatach. Listę obsługiwanych kierunków znajdziesz na stronie <a href="/obszar-dzialania/">obszar działania</a>. Jeśli Twojej miejscowości tam nie ma, zadzwoń – sprawdzimy możliwość dojazdu.' },
      { q: 'Czy dojeżdżacie do klientów spoza Ostrołęki?', a: 'Tak, regularnie realizujemy zlecenia w gminach wokół Ostrołęki, m.in. Rzekuń, Olszewo-Borki, Lelis, Kadzidło czy Czerwin. Przy dalszych miejscowościach warto ustalić termin z wyprzedzeniem, aby połączyć przyjazd z innymi pracami w okolicy.' },
      { q: 'Czy wycena poza Ostrołęką też jest bezpłatna?', a: 'Tak, oględziny i wycena na obszarze działania firmy są bezpłatne, niezależnie od tego, czy zlecenie dotyczy miasta, czy okolicznej wsi. Przy odległych lokalizacjach możemy najpierw ocenić zakres prac na podstawie zdjęć, a oględziny zaplanować przy okazji innych zleceń w pobliżu.' },
    ],
  },
];
