import type { Section, Faq } from './types';

// Poradnik: pozwolenie na wycinkę drzew (ustawa z 16 kwietnia 2004 r. o ochronie przyrody, art. 83–83f, 88–89).
// Treść ma charakter informacyjny – przed wycinką zawsze potwierdź aktualne przepisy we właściwym urzędzie.
export const guide: {
  title: string;
  metaDescription: string;
  h1: string;
  lead: string;
  updated: string;
  keyFacts: { label: string; value: string }[];
  sections: Section[];
  table: { caption: string; head: string[]; rows: string[][] };
  faq: Faq[];
} = {
  title: 'Pozwolenie na wycinkę drzew 2026 – Ostrołęka i okolice',
  metaDescription:
    'Kiedy wycinka drzewa wymaga zgłoszenia, a kiedy zezwolenia? Progi obwodu pnia, terminy, kary i urzędy w Ostrołęce i okolicy. Poradnik aktualny na 2026 rok.',
  h1: 'Pozwolenie na wycinkę drzew – przepisy 2026 (Ostrołęka i okolice)',
  lead:
    'Osoba prywatna, która wycina drzewo na własne potrzeby, nie potrzebuje zezwolenia – musi jedynie zgłosić wycinkę w urzędzie gminy lub miasta, jeśli obwód pnia na wysokości 5 cm przekracza 80 cm (topola, wierzba, klony jesionolistny i srebrzysty), 65 cm (kasztanowiec, robinia, platan) lub 50 cm (pozostałe gatunki). Firmy, wspólnoty i spółdzielnie potrzebują zezwolenia.',
  updated: '2026-09-30',
  keyFacts: [
    { label: 'Próg dla topoli, wierzby, klonu jesionolistnego i srebrzystego', value: '80 cm obwodu na wys. 5 cm' },
    { label: 'Próg dla kasztanowca, robinii akacjowej, platanu', value: '65 cm obwodu na wys. 5 cm' },
    { label: 'Próg dla pozostałych gatunków (sosna, brzoza, świerk, lipa, dąb)', value: '50 cm obwodu na wys. 5 cm' },
    { label: 'Krzewy bez zezwolenia', value: 'skupisko do 25 m²' },
    { label: 'Terminy po zgłoszeniu', value: 'oględziny do 21 dni, sprzeciw do 14 dni od oględzin' },
    { label: 'Czas na wycinkę po oględzinach', value: '6 miesięcy' },
  ],
  sections: [
    {
      h2: 'Kiedy nie trzeba ani zgłoszenia, ani zezwolenia na wycinkę drzewa?',
      paragraphs: [
        'Zgłoszenie ani zezwolenie nie jest potrzebne, gdy obwód pnia mierzony na wysokości 5 cm nad ziemią nie przekracza progów z art. 83f ustawy o ochronie przyrody. Progi wynoszą 80 cm dla topoli, wierzb, klonu jesionolistnego i klonu srebrzystego, 65 cm dla kasztanowca zwyczajnego, robinii akacjowej i platanu klonolistnego oraz 50 cm dla wszystkich pozostałych gatunków drzew.',
        'Bez zezwolenia można też usunąć krzewy rosnące w skupisku o powierzchni do 25 m². Zwolnienie obejmuje co do zasady również drzewa i krzewy owocowe, z wyjątkiem rosnących na nieruchomościach wpisanych do rejestru zabytków oraz na terenach zieleni.',
        'Zwolnienie z formalności nie oznacza zwolnienia z ochrony gatunkowej. Nawet małe drzewo z czynnym gniazdem ptaka jest chronione, dlatego przed każdą wycinką trzeba sprawdzić koronę i pień.',
      ],
      bullets: [
        'obwód pnia na wysokości 5 cm poniżej progu dla danego gatunku,',
        'krzewy w skupisku do 25 m²,',
        'drzewa owocowe poza terenami zieleni i nieruchomościami zabytkowymi,',
        'drzewo nie rośnie w pasie drogi, na terenie zabytkowym ani w formie ochrony przyrody wymagającej odrębnej zgody.',
      ],
    },
    {
      h2: 'Kiedy osoba prywatna musi złożyć zgłoszenie wycinki?',
      paragraphs: [
        'Właściciel nieruchomości będący osobą fizyczną składa zgłoszenie, gdy chce usunąć drzewo na cele niezwiązane z działalnością gospodarczą, a obwód pnia na wysokości 5 cm przekracza ustawowy próg. Zgłoszenie składa się w urzędzie gminy lub miasta – w Ostrołęce jest to Urząd Miasta Ostrołęki, a w gminach powiatu ostrołęckiego właściwy urząd gminy.',
        'Po otrzymaniu zgłoszenia urząd ma 21 dni na oględziny, podczas których ustala gatunek drzewa i obwód pnia. Następnie ma 14 dni od oględzin na wniesienie sprzeciwu w drodze decyzji. Jeśli w tym czasie sprzeciwu nie wniesie, drzewo można usunąć. Urząd może też wcześniej wydać zaświadczenie o braku podstaw do sprzeciwu.',
        'Drzewo należy usunąć w ciągu 6 miesięcy od dnia oględzin. Po tym terminie trzeba złożyć nowe zgłoszenie.',
      ],
    },
    {
      h2: 'Co oznacza 5-letni okres po wycince zgłoszonej przez osobę prywatną?',
      paragraphs: [
        'Wycinka na podstawie zgłoszenia jest bezpłatna, ale ma skutek na przyszłość. Jeżeli w ciągu 5 lat od oględzin właściciel wystąpi o pozwolenie na budowę lub dokona zgłoszenia budowy obiektu związanego z prowadzeniem działalności gospodarczej na części nieruchomości, na której rosło drzewo, urząd nałoży obowiązek uiszczenia opłaty za usunięcie drzewa.',
        'Budowa domu jednorodzinnego na własne potrzeby nie jest działalnością gospodarczą. Jeżeli jednak planujesz na działce np. warsztat, sklep lub halę, zapytaj w urzędzie o skutki wycinki przed złożeniem zgłoszenia.',
      ],
    },
    {
      h2: 'Kiedy potrzebne jest zezwolenie na usunięcie drzewa?',
      paragraphs: [
        'Zezwolenie z art. 83 ustawy o ochronie przyrody jest potrzebne, gdy drzewo przekraczające progi obwodu usuwa firma, osoba prowadząca działalność gospodarczą (jeśli wycinka jest z nią związana), wspólnota mieszkaniowa, spółdzielnia, instytucja lub inny podmiot niebędący osobą fizyczną działającą na własne potrzeby.',
        'Wniosek o zezwolenie składa posiadacz nieruchomości za zgodą właściciela. Zezwolenie wydaje wójt, burmistrz lub prezydent miasta, a dla nieruchomości wpisanych do rejestru zabytków – wojewódzki konserwator zabytków. W decyzji urząd może ustalić opłatę za usunięcie drzewa oraz nakazać nasadzenia zastępcze.',
        'Przepisy dotyczące zezwoleń zawierają wiele szczegółowych wyjątków, np. dla drzew w pasie drogowym, przy urządzeniach melioracyjnych czy na terenach kolejowych. W nietypowych sytuacjach zawsze warto zapytać w urzędzie przed rozpoczęciem prac.',
      ],
    },
    {
      h2: 'Co zrobić z drzewem złamanym przez wichurę lub zagrażającym bezpieczeństwu?',
      paragraphs: [
        'Drzewo powalone (wywrót) lub złamane (złom) można usunąć bez zezwolenia po oględzinach urzędu, które potwierdzą jego stan. W praktyce oznacza to, że po wichurze należy zgłosić sytuację w urzędzie gminy i sfotografować drzewo przed usunięciem.',
        'Jeżeli drzewo bezpośrednio zagraża ludziom, budynkom lub drodze, pierwszym krokiem jest wezwanie straży pożarnej pod numerem 112 – służby ratownicze mogą usunąć zagrożenie w ramach akcji. Drzewo pochylone, ale stojące, nie jest wiatrołomem i wymaga zwykłej procedury, choć urzędy zwykle rozpatrują takie sprawy priorytetowo.',
        'Po zabezpieczeniu formalności usuwamy takie drzewa jako <a href="/uslugi/wycinka-drzew/">wycinkę drzew niebezpiecznych</a> – etapami, z użyciem lin, a w razie potrzeby z <a href="/uslugi/podnosnik-koszowy-zwyzka/">podnośnika koszowego</a>.',
      ],
    },
    {
      h2: 'Okres lęgowy, gniazda i ochrona gatunkowa – co trzeba sprawdzić przed wycinką?',
      paragraphs: [
        'Ustawa o ochronie przyrody zakazuje niszczenia gniazd i siedlisk gatunków chronionych, a zakaz obowiązuje niezależnie od tego, czy wycinka wymaga zgłoszenia lub zezwolenia. Przed każdą wycinką trzeba sprawdzić, czy w drzewie nie ma gniazd ptaków, dziupli zasiedlonych przez nietoperze lub innych śladów bytowania chronionych zwierząt.',
        'Najwięcej ptaków gniazduje od 1 marca do 15 października, dlatego w tym okresie wycinka wymaga szczególnej ostrożności. W razie stwierdzenia gniazda prace trzeba wstrzymać; odstępstwo od zakazów może wydać regionalny dyrektor ochrony środowiska. Najbezpieczniej planować wycinkę jesienią i zimą.',
      ],
    },
    {
      h2: 'Drzewa na terenie zabytkowym i przy liniach energetycznych',
      paragraphs: [
        'Jeśli nieruchomość jest wpisana do rejestru zabytków, zezwolenie na usunięcie drzewa wydaje Mazowiecki Wojewódzki Konserwator Zabytków, a nie urząd gminy. Dotyczy to m.in. zabytkowych parków, cmentarzy i otoczenia obiektów wpisanych do rejestru. Status nieruchomości można sprawdzić w urzędzie gminy lub w rejestrze zabytków.',
        'Drzewa rosnące przy napowietrznych liniach energetycznych wymagają kontaktu z operatorem sieci przed rozpoczęciem prac. Cięcie gałęzi dotykających przewodów pod napięciem jest niebezpieczne i może wymagać czasowego wyłączenia zasilania. Numer do operatora znajdziesz na rachunku za prąd lub na stronie operatora.',
      ],
    },
    {
      h2: 'Jak zmierzyć obwód pnia na wysokości 5 cm?',
      paragraphs: [
        'Obwód pnia mierzy się taśmą krawiecką lub miarą zwijaną na wysokości 5 cm nad powierzchnią gruntu, czyli praktycznie przy samej ziemi. Pomiar zajmuje minutę i pozwala od razu ustalić, czy zgłoszenie jest potrzebne.',
      ],
      bullets: [
        'Krok 1: odgarnij liście, mech lub ziemię u podstawy pnia.',
        'Krok 2: odmierz 5 cm od gruntu i zaznacz to miejsce kredą.',
        'Krok 3: owiń pień taśmą poziomo na tej wysokości i odczytaj wynik w centymetrach.',
        'Krok 4: jeśli drzewo ma kilka pni już na wysokości 5 cm, zmierz każdy pień osobno i zanotuj wyniki.',
        'Krok 5: porównaj wynik z progiem dla gatunku (80, 65 lub 50 cm) – przy wątpliwościach co do gatunku zapytaj urząd lub arborystę.',
      ],
    },
    {
      h2: 'Jak wypełnić zgłoszenie zamiaru usunięcia drzewa?',
      paragraphs: [
        'Zgłoszenie zamiaru usunięcia drzewa jest krótkie i nie wymaga podawania obwodu pnia – ten ustala urząd podczas oględzin. Większość urzędów w regionie udostępnia gotowy formularz na stronie BIP lub w biurze podawczym, ale zgłoszenie może mieć też formę zwykłego pisma.',
      ],
      bullets: [
        'imię, nazwisko i adres wnioskodawcy,',
        'oznaczenie nieruchomości (adres, numer działki ewidencyjnej, obręb),',
        'rysunek lub mapka z zaznaczonym miejscem rosnącego drzewa,',
        'podpis właściciela; przy współwłasności – zwykle zgody pozostałych współwłaścicieli (zapytaj w urzędzie).',
      ],
    },
    {
      h2: 'Jak pomagamy przy wycince w Ostrołęce i okolicy?',
      paragraphs: [
        'Przyjeżdżamy na <strong>bezpłatną wycenę</strong>, oceniamy stan drzewa, mierzymy obwód pnia i mówimy, czy w danej sytuacji potrzebne jest zgłoszenie, zezwolenie czy żadna z tych formalności. Wskazujemy właściwy urząd, ale dokumenty składa właściciel nieruchomości.',
        'Po uzyskaniu zgody lub upływie terminu na sprzeciw wykonujemy <a href="/uslugi/wycinka-drzew/">wycinkę drzewa</a>, w tym <a href="/uslugi/wycinka-alpinistyczna/">metodą alpinistyczną</a>, a przy drzewach, które mogą zostać, proponujemy <a href="/uslugi/pielegnacja-drzew/">pielęgnację</a>. Umów oględziny przez stronę <a href="/kontakt/">kontakt</a> lub pod numerem <a href="tel:+48572345128">572 345 128</a>.',
        'Ten poradnik ma charakter informacyjny i opisuje przepisy według stanu wiedzy na wrzesień 2026 roku. Przepisy o ochronie przyrody bywają nowelizowane, dlatego przed wycinką potwierdź aktualne wymagania we właściwym urzędzie.',
      ],
    },
  ],
  table: {
    caption: 'Progi obwodu pnia (na wysokości 5 cm) dla osób prywatnych wycinających drzewa na własne potrzeby',
    head: ['Gatunek drzewa', 'Obwód na wysokości 5 cm', 'Co robić'],
    rows: [
      ['Topola, wierzba, klon jesionolistny, klon srebrzysty', 'do 80 cm', 'bez zgłoszenia i zezwolenia'],
      ['Topola, wierzba, klon jesionolistny, klon srebrzysty', 'powyżej 80 cm', 'zgłoszenie w urzędzie gminy lub miasta'],
      ['Kasztanowiec zwyczajny, robinia akacjowa, platan klonolistny', 'do 65 cm', 'bez zgłoszenia i zezwolenia'],
      ['Kasztanowiec zwyczajny, robinia akacjowa, platan klonolistny', 'powyżej 65 cm', 'zgłoszenie w urzędzie gminy lub miasta'],
      ['Pozostałe gatunki (m.in. sosna, świerk, brzoza, lipa, dąb, klon zwyczajny)', 'do 50 cm', 'bez zgłoszenia i zezwolenia'],
      ['Pozostałe gatunki (m.in. sosna, świerk, brzoza, lipa, dąb, klon zwyczajny)', 'powyżej 50 cm', 'zgłoszenie w urzędzie gminy lub miasta'],
      ['Każdy gatunek na nieruchomości wpisanej do rejestru zabytków', 'powyżej progu', 'zezwolenie wojewódzkiego konserwatora zabytków'],
    ],
  },
  faq: [
    {
      q: 'Czy potrzebuję pozwolenia na wycięcie drzewa na własnej działce?',
      a: 'Nie, jeśli jesteś osobą prywatną i wycinka nie jest związana z działalnością gospodarczą – wtedy wystarczy zgłoszenie, i to tylko gdy obwód pnia na wysokości 5 cm przekracza próg dla gatunku (80, 65 lub 50 cm). Poniżej progu nie trzeba żadnych formalności.',
    },
    {
      q: 'Ile czeka się na zgodę na wycinkę po zgłoszeniu?',
      a: 'Maksymalnie około 35 dni: urząd ma 21 dni na oględziny, a potem 14 dni na ewentualny sprzeciw. Jeśli sprzeciwu nie ma, drzewo można usunąć, i trzeba to zrobić w ciągu 6 miesięcy od oględzin.',
    },
    {
      q: 'Gdzie złożyć zgłoszenie wycinki w Ostrołęce?',
      a: 'W <strong>Urzędzie Miasta Ostrołęki</strong>. Mieszkańcy gmin wiejskich składają zgłoszenie we właściwym urzędzie gminy, np. w Rzekuniu, Olszewie-Borkach czy Lelisie. Listę urzędów znajdziesz na stronach <a href="/obszar-dzialania/">obszaru działania</a>.',
    },
    {
      q: 'Jaka jest kara za wycięcie drzewa bez zgłoszenia lub zezwolenia?',
      a: 'Grozi administracyjna kara pieniężna nakładana przez urząd. Jej wysokość zależy od gatunku i obwodu drzewa, a za usunięcie drzewa bez wymaganego zezwolenia wynosi dwukrotność opłaty, jaka byłaby należna – w przypadku dużych drzew mogą to być znaczne kwoty.',
    },
    {
      q: 'Czy wspólnota mieszkaniowa może wyciąć drzewo na zgłoszenie?',
      a: 'Nie – wspólnoty mieszkaniowe, spółdzielnie i firmy potrzebują zezwolenia, gdy drzewo przekracza progi obwodu. Uproszczone zgłoszenie przysługuje wyłącznie osobom fizycznym działającym na własne potrzeby.',
    },
    {
      q: 'Czy można wycinać drzewa w okresie lęgowym ptaków?',
      a: 'Przepisy nie zakazują samej wycinki w okresie lęgowym, ale zakazują niszczenia gniazd i siedlisk gatunków chronionych. Od 1 marca do 15 października trzeba szczególnie dokładnie sprawdzić drzewo, a w razie stwierdzenia gniazda wstrzymać prace.',
    },
    {
      q: 'Czy usunięcie złamanego drzewa po wichurze wymaga zezwolenia?',
      a: 'Nie, drzewo powalone lub złamane (wywrót, złom) można usunąć bez zezwolenia, ale po oględzinach urzędu potwierdzających jego stan. Przy bezpośrednim zagrożeniu dzwoń pod 112, a potem umów <a href="/uslugi/wycinka-drzew/">wycinkę drzewa niebezpiecznego</a>.',
    },
    {
      q: 'Czy pomagacie w formalnościach związanych z wycinką?',
      a: 'Tak, w zakresie doradztwa: podczas bezpłatnej wyceny mierzymy obwód, oceniamy stan drzewa i mówimy, czy potrzebne jest zgłoszenie lub zezwolenie oraz do którego urzędu się zwrócić. Samo zgłoszenie składa właściciel nieruchomości.',
    },
  ],
};
