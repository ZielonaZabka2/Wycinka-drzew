import type { Location } from './types';

// Lokalizacje obsługiwane przez Sch Wycinka Drzew (promień ok. 60 km od Ostrołęki).
// Każda strona ma unikalną treść opartą na realnej specyfice gminy — bez szablonowych zdań.
// Odległości i czasy dojazdu są orientacyjne (drogowo, od centrum Ostrołęki).
export const locations: Location[] = [
  {
    slug: 'ostroleka',
    name: 'Ostrołęka',
    inName: 'w Ostrołęce',
    admin: 'miasto na prawach powiatu, województwo mazowieckie',
    distanceKm: 0,
    driveMin: 10,
    lat: 53.0833,
    lng: 21.5667,
    title: 'Wycinka drzew w Ostrołęce – osiedla, urząd, dojazd | SCH',
    metaDescription:
      'Wycinka drzew w Ostrołęce: metoda alpinistyczna, drzewa niebezpieczne, zwyżka z operatorem i pielęgnacja koron. Dojazd na każde osiedle. Bezpłatna wycena.',
    h1: 'Wycinka drzew w Ostrołęce',
    lead:
      'Wycinamy i pielęgnujemy drzewa w Ostrołęce – na posesjach, przy blokach, garażach i liniach energetycznych. Pracujemy metodą alpinistyczną i z podnośnika koszowego, także przy drzewach niebezpiecznych. Mamy bazę w mieście, więc na większość osiedli dojeżdżamy w około 10 minut. Wycena jest bezpłatna – zadzwoń pod numer <a href="tel:+48572345128">572 345 128</a>.',
    paragraphs: [
      'Ostrołęka to miasto, w którym stare drzewa rosną bardzo blisko ludzi: przy kamienicach w Śródmieściu i na Starym Mieście, między blokami na osiedlach Centrum czy Traugutta, a także na wąskich działkach domów jednorodzinnych. W takich miejscach drzewa nie da się po prostu „położyć” w całości, dlatego rozbieramy je kawałek po kawałku. Przy dostępnym dojeździe używamy <a href="/uslugi/podnosnik-koszowy-zwyzka/">zwyżki z operatorem</a>, a tam, gdzie podnośnik nie wjedzie – na podwórka, za garaże i ogrodzenia – pracujemy <a href="/uslugi/wycinka-alpinistyczna/">metodą alpinistyczną</a>, opuszczając gałęzie i fragmenty pnia na linach.',
      'Na osiedlach domów jednorodzinnych, takich jak Łazek, Pomian, Bursztynowe, Leśne czy Łęczysk, najczęściej wycinamy sosny i świerki posadzone kilkadziesiąt lat temu przy samych domach. Dziś ich korzenie podnoszą kostkę brukową, a korony zasłaniają dachy i rynny. W świerkach coraz częściej widać ślady kornika – brązowiejące igły i odpadającą korę – a takie drzewo zamiera zwykle w ciągu jednego sezonu i szybko staje się kruche.',
      'Położenie nad Narwią oznacza, że w Ostrołęce rośnie dużo topoli i wierzb, zwłaszcza w pobliżu rzeki i starych rowów. To gatunki szybko rosnące, o miękkim drewnie, które po wichurach łamią się częściej niż dęby czy lipy. Jeśli po burzy konar zawisł nad dachem, samochodem albo chodnikiem, zajmujemy się <a href="/uslugi/wycinka-drzew/">wycinką drzew niebezpiecznych</a> i usuwamy wiatrołomy tak, aby nie powodować dodatkowych szkód.',
      'Drzewa rosnące przy przewodach napowietrznych wymagają uzgodnienia z operatorem sieci – przed pracami w pobliżu linii pomagamy ustalić, czy konieczne jest wyłączenie napięcia. Poza wycinką oferujemy <a href="/uslugi/pielegnacja-drzew/">pielęgnację drzew</a> (cięcia sanitarne, prześwietlanie i podnoszenie koron) oraz <a href="/uslugi/prace-wysokosciowe/">prace na wysokościach</a>, a zimą <a href="/uslugi/odsniezanie-dachow/">odśnieżanie dachów</a> hal i budynków.',
      'Zgłoszenia i wnioski dotyczące usunięcia drzew z terenu miasta rozpatruje Urząd Miasta Ostrołęki. Osoba prywatna, która wycina drzewo na własne potrzeby, zwykle składa jedynie zgłoszenie, gdy obwód pnia przekracza ustawowe progi. Wspólnoty mieszkaniowe, spółdzielnie i firmy potrzebują zezwolenia. Szczegóły opisujemy w poradniku <a href="/poradnik/pozwolenie-na-wycinke-drzew/">pozwolenie na wycinkę drzew</a>, a podczas bezpłatnych oględzin podpowiadamy, którą ścieżkę wybrać.',
    ],
    areas: [
      'Centrum',
      'Śródmieście',
      'Stare Miasto',
      'Wojciechowice',
      'Stacja',
      'Pomian',
      'Łazek',
      'Bursztynowe',
      'Parkowe',
      'Leśne',
    ],
    office: 'Urząd Miasta Ostrołęki (dla nieruchomości wpisanych do rejestru zabytków – Mazowiecki Wojewódzki Konserwator Zabytków)',
    faq: [
      {
        q: 'Gdzie w Ostrołęce złożyć zgłoszenie wycinki drzewa?',
        a: 'Zgłoszenie lub wniosek o zezwolenie na usunięcie drzewa składa się w <strong>Urzędzie Miasta Ostrołęki</strong>. Jeśli nieruchomość jest wpisana do rejestru zabytków, zezwolenie wydaje Mazowiecki Wojewódzki Konserwator Zabytków. Więcej w poradniku <a href="/poradnik/pozwolenie-na-wycinke-drzew/">pozwolenie na wycinkę drzew</a>.',
      },
      {
        q: 'Jak szybko możecie przyjechać na oględziny w Ostrołęce?',
        a: 'Na większość osiedli w Ostrołęce dojeżdżamy w około 10 minut, bo nasza baza znajduje się w mieście. Termin bezpłatnej wyceny ustalamy telefonicznie – przy drzewie, które grozi przewróceniem, staramy się przyjechać możliwie szybko.',
      },
      {
        q: 'Czy wycinacie drzewa między blokami i na wąskich podwórkach?',
        a: 'Tak – w ciasnej zabudowie Śródmieścia i osiedli blokowych stosujemy <a href="/uslugi/wycinka-alpinistyczna/">wycinkę alpinistyczną</a> lub <a href="/uslugi/podnosnik-koszowy-zwyzka/">zwyżkę</a>, rozbierając drzewo etapami. Gałęzie i fragmenty pnia opuszczamy na linach, aby nie uszkodzić budynków, samochodów i ogrodzeń.',
      },
    ],
  },
  {
    slug: 'rzekun',
    name: 'Rzekuń',
    inName: 'w Rzekuniu',
    admin: 'gmina Rzekuń, powiat ostrołęcki',
    distanceKm: 7,
    driveMin: 10,
    lat: 53.05,
    lng: 21.6333,
    title: 'Wycinka drzew Rzekuń – alpinistycznie i zwyżką | SCH',
    metaDescription:
      'Wycinka drzew w Rzekuniu i gminie Rzekuń: przy domach, liniach energetycznych i drogach. Metoda alpinistyczna, zwyżka z operatorem. Bezpłatna wycena.',
    h1: 'Wycinka drzew w Rzekuniu i gminie Rzekuń',
    lead:
      'W gminie Rzekuń wycinamy drzewa przy nowych domach, starych zagrodach i liniach energetycznych, pracując z liny lub z podnośnika koszowego. Z Ostrołęki do Rzekunia jedziemy około 10 minut, więc oględziny zwykle da się umówić szybko. Wycena na miejscu jest bezpłatna, a przy okazji podpowiadamy, czy potrzebne jest zgłoszenie w urzędzie gminy.',
    paragraphs: [
      'Rzekuń i sąsiednie Laskowiec czy Nowa Wieś Wschodnia rozrastają się jako zaplecze mieszkaniowe Ostrołęki. Na działkach budowlanych często zostają pojedyncze sosny i brzozy z dawnych zadrzewień, które przy nowym domu okazują się za wysokie albo rosną w miejscu podjazdu. Takie drzewa usuwamy etapami, bez ryzyka dla świeżej elewacji i ogrodzenia – wystarczy <a href="/uslugi/wycinka-drzew/">wycinka drzew</a> z kontrolowanym opuszczaniem gałęzi.',
      'W starszych wsiach gminy, takich jak Dzbenin, Susk Stary czy Kamianka, zadaniem są raczej stare lipy, jesiony i topole przy zabudowaniach gospodarczych. Wiele z nich ma suche konary lub pęknięcia w rozwidleniach, a pod koronami stoją budynki i maszyny. Tutaj sprawdza się <a href="/uslugi/podnosnik-koszowy-zwyzka/">zwyżka z operatorem</a>, bo pozwala ciąć z góry bez wchodzenia na osłabione drzewo.',
      'Ponieważ przez teren gminy biegnie sporo napowietrznych linii niskiego i średniego napięcia, część zleceń dotyczy gałęzi zbliżających się do przewodów. Takie prace wymagają kontaktu z operatorem sieci – nie tniemy drzew dotykających linii pod napięciem bez uzgodnienia. Jeśli drzewo trzeba tylko przyciąć, a nie usuwać, proponujemy <a href="/uslugi/pielegnacja-drzew/">pielęgnację korony</a>.',
      'Zgłoszenie zamiaru usunięcia drzewa z posesji w gminie Rzekuń składa się w Urzędzie Gminy Rzekuń. Zasady, progi obwodu pnia i terminy wyjaśniamy w poradniku <a href="/poradnik/pozwolenie-na-wycinke-drzew/">o pozwoleniu na wycinkę</a>.',
    ],
    areas: ['Laskowiec', 'Nowa Wieś Wschodnia', 'Kamianka', 'Dzbenin', 'Susk Stary', 'Susk Nowy', 'Ławy', 'Borawe', 'Teodorowo', 'Drwęcz'],
    office: 'Urząd Gminy Rzekuń',
    faq: [
      {
        q: 'Gdzie złożyć zgłoszenie wycinki drzewa w gminie Rzekuń?',
        a: 'Zgłoszenie zamiaru usunięcia drzewa składa się w <strong>Urzędzie Gminy Rzekuń</strong>. Urząd ma 21 dni na oględziny i 14 dni od oględzin na ewentualny sprzeciw. Szczegóły znajdziesz w naszym <a href="/poradnik/pozwolenie-na-wycinke-drzew/">poradniku</a>.',
      },
      {
        q: 'Ile trwa dojazd z Ostrołęki do Rzekunia?',
        a: 'Dojazd z naszej bazy w Ostrołęce do Rzekunia zajmuje około 10 minut, a do Laskowca czy Nowej Wsi Wschodniej jeszcze mniej. Dzięki temu zwyżkę i ekipę możemy przerzucić na miejsce w ciągu jednego dnia roboczego.',
      },
      {
        q: 'Czy obsługujecie wieś Dzbenin i Susk?',
        a: 'Tak, obsługujemy wszystkie miejscowości gminy Rzekuń, w tym Dzbenin, Susk Stary i Susk Nowy. Wycena na miejscu jest bezpłatna – zadzwoń pod <a href="tel:+48572345128">572 345 128</a>.',
      },
    ],
  },
  {
    slug: 'olszewo-borki',
    name: 'Olszewo-Borki',
    inName: 'w Olszewie-Borkach',
    admin: 'gmina Olszewo-Borki, powiat ostrołęcki',
    distanceKm: 6,
    driveMin: 10,
    lat: 53.0667,
    lng: 21.5167,
    title: 'Wycinka drzew Olszewo-Borki – zwyżka i alpinista | SCH',
    metaDescription:
      'Wycinka drzew w Olszewie-Borkach: sosny przy domach, drzewa niebezpieczne, zwyżka z operatorem i metoda alpinistyczna. Dojazd ok. 10 min. Bezpłatna wycena.',
    h1: 'Wycinka drzew w Olszewie-Borkach',
    lead:
      'W gminie Olszewo-Borki usuwamy sosny, brzozy i świerki rosnące przy domach, na nowych osiedlach i na skraju lasu – z liny albo z podnośnika koszowego. Z Ostrołęki za Narew dojeżdżamy w około 10 minut. Wycena jest bezpłatna, a podczas oględzin mówimy, czy dane drzewo wymaga zgłoszenia w urzędzie gminy.',
    paragraphs: [
      'Olszewo-Borki, Nowa Wieś czy Grabowo to miejscowości, w których w ostatnich latach powstało wiele domów jednorodzinnych budowanych na dawnych działkach leśnych i śródpolnych. Właściciele często zostawiali sosny „dla klimatu”, a po kilku latach okazuje się, że wysokie, smukłe drzewa kołyszą się nad dachem przy każdym silniejszym wietrze. Rozbieramy je od góry, sekcjami, co jest bezpieczniejsze niż ścinanie całego pnia na ciasnej działce.',
      'Duża część gminy leży w otoczeniu lasów sosnowych, a przy budynkach rosną też świerki i brzozy. Brzoza po zamarciu bardzo szybko traci wytrzymałość – sucha brzoza potrafi złamać się bez wiatru. Świerki są z kolei narażone na kornika. Jeśli zauważysz sypiące się igły lub pęknięty pień, zamów <a href="/uslugi/wycinka-drzew/">wycinkę drzewa niebezpiecznego</a>, zanim drzewo samo się przewróci.',
      'Na posesjach, gdzie zwyżka nie wjedzie przez bramę albo trawnik jest świeżo założony, wybieramy <a href="/uslugi/wycinka-alpinistyczna/">wycinkę alpinistyczną</a> – sprzęt przenosimy ręcznie i nie rozjeżdżamy ogrodu. Przy łatwym dojeździe <a href="/uslugi/podnosnik-koszowy-zwyzka/">podnośnik koszowy</a> przyspiesza pracę. Zajmujemy się też <a href="/uslugi/pielegnacja-drzew/">przycinaniem koron</a> drzew, które mają zostać.',
      'Zgłoszenia i wnioski o wycinkę na terenie gminy przyjmuje Urząd Gminy Olszewo-Borki. Warto złożyć je z wyprzedzeniem, bo urząd może przeprowadzić oględziny w ciągu 21 dni, a wiosną wycinkę ogranicza dodatkowo okres lęgowy ptaków – więcej w <a href="/poradnik/pozwolenie-na-wycinke-drzew/">poradniku</a>.',
    ],
    areas: ['Olszewo-Borki', 'Nowa Wieś', 'Grabowo', 'Przystań', 'Antonie', 'Białobrzeg Bliższy', 'Białobrzeg Dalszy', 'Stepna-Michałki', 'Żerań Duży', 'Zabrodzie'],
    office: 'Urząd Gminy Olszewo-Borki',
    faq: [
      {
        q: 'Gdzie złożyć zgłoszenie usunięcia drzewa w gminie Olszewo-Borki?',
        a: 'Zgłoszenie składa się w <strong>Urzędzie Gminy Olszewo-Borki</strong>. Osoba prywatna wycinająca drzewo na własne potrzeby składa zgłoszenie tylko wtedy, gdy obwód pnia na wysokości 5 cm przekracza ustawowe progi (np. 50 cm dla sosny i brzozy).',
      },
      {
        q: 'Ile trwa dojazd do Olszewa-Borek?',
        a: 'Z bazy w Ostrołęce do Olszewa-Borek jedziemy około 10 minut. Do dalszych wsi gminy, jak Żerań Duży czy Białobrzeg Dalszy, dojazd zajmuje zwykle kilkanaście minut.',
      },
      {
        q: 'Czy obsługujecie Przystań i Grabowo?',
        a: 'Tak, pracujemy w całej gminie Olszewo-Borki, w tym w Przystani, Grabowie, Nowej Wsi i Antoniach. Bezpłatną wycenę umówisz pod numerem <a href="tel:+48572345128">572 345 128</a>.',
      },
    ],
  },
  {
    slug: 'lelis',
    name: 'Lelis',
    inName: 'w Lelisie',
    admin: 'gmina Lelis, powiat ostrołęcki',
    distanceKm: 13,
    driveMin: 17,
    lat: 53.1811,
    lng: 21.5572,
    title: 'Wycinka drzew Lelis – metoda alpinistyczna, zwyżka | SCH',
    metaDescription:
      'Wycinka drzew w gminie Lelis: sosny i świerki przy kurpiowskich zagrodach, wiatrołomy, drzewa przy liniach. Zwyżka i alpinista. Bezpłatna wycena na miejscu.',
    h1: 'Wycinka drzew w Lelisie i gminie Lelis',
    lead:
      'W gminie Lelis wycinamy drzewa przy domach i zagrodach, usuwamy połamane sosny po wichurach i przycinamy gałęzie nad drogami dojazdowymi. Pracujemy metodą alpinistyczną lub z podnośnika koszowego. Z Ostrołęki do Lelisa jedziemy około 17 minut. Wycena jest bezpłatna i obejmuje ocenę, czy potrzebne jest zgłoszenie.',
    paragraphs: [
      'Lelis leży na północ od Ostrołęki, na skraju Puszczy Zielonej, w krajobrazie typowym dla Kurpiów: rozciągnięte wsie, zabudowa wzdłuż drogi i las sosnowy tuż za stodołami. Wiele zagród ma przy sobie wysokie sosny i świerki posadzone jako osłona od wiatru. Z czasem drzewa przerastają budynki, a ich korony – przy piaszczystej glebie i płytkim korzeniu – zaczynają stanowić ryzyko przy silnych podmuchach.',
      'Po każdej większej wichurze w gminie zostają wiatrołomy: złamane wierzchołki, wywrócone drzewa oparte o dachy albo zawieszone na sąsiednich koronach. Takie drzewo jest pod dużym naprężeniem i cięcie go bez doświadczenia kończy się często wypadkiem. Oferujemy <a href="/uslugi/wycinka-drzew/">wycinkę drzew niebezpiecznych</a> z użyciem lin i bloków, a gdy dojazd pozwala – z <a href="/uslugi/podnosnik-koszowy-zwyzka/">zwyżki</a>.',
      'W dolinach mniejszych cieków i przy rowach melioracyjnych rosną też wierzby i olsze, które szybko odrastają i zarastają przepusty oraz ogrodzenia. W takich miejscach często wystarczy <a href="/uslugi/pielegnacja-drzew/">pielęgnacja drzew</a> – cięcie ogławiające wierzb lub usunięcie odrostów – zamiast wycinki.',
      'Zgłoszenia i wnioski dotyczące usunięcia drzew w gminie przyjmuje Urząd Gminy Lelis. Jeżeli chcesz wiedzieć, czy Twoje drzewo przekracza progi obwodu, zajrzyj do <a href="/poradnik/pozwolenie-na-wycinke-drzew/">poradnika o pozwoleniach</a> albo zapytaj nas przy wycenie.',
    ],
    areas: ['Lelis', 'Łęg Przedmiejski', 'Obierwia', 'Szafarczyska', 'Łodziska', 'Olszewka', 'Durlasy', 'Białobiel', 'Szkwa', 'Gnaty'],
    office: 'Urząd Gminy Lelis',
    faq: [
      {
        q: 'Gdzie w gminie Lelis zgłosić wycinkę drzewa?',
        a: 'Zgłoszenie zamiaru usunięcia drzewa składa się w <strong>Urzędzie Gminy Lelis</strong>. Nie jest ono potrzebne, gdy obwód pnia na wysokości 5 cm nie przekracza progów ustawowych, np. 50 cm dla sosny i świerka.',
      },
      {
        q: 'Ile trwa dojazd z Ostrołęki do Lelisa?',
        a: 'Do Lelisa dojeżdżamy z Ostrołęki w około 17 minut. Po wichurach, gdy zgłoszeń jest dużo, ustalamy kolejność według zagrożenia – najpierw drzewa oparte o budynki i drogi.',
      },
      {
        q: 'Czy obsługujecie wieś Obierwia i Szkwa?',
        a: 'Tak, dojeżdżamy do wszystkich wsi gminy Lelis, w tym do Obierwi, Szkwy, Łęgu Przedmiejskiego i Durlas. Wycena na miejscu jest bezpłatna.',
      },
    ],
  },
  {
    slug: 'kadzidlo',
    name: 'Kadzidło',
    inName: 'w Kadzidle',
    admin: 'gmina Kadzidło, powiat ostrołęcki',
    distanceKm: 21,
    driveMin: 22,
    lat: 53.2331,
    lng: 21.4667,
    title: 'Wycinka drzew Kadzidło – Kurpie, zwyżka, alpinista | SCH',
    metaDescription:
      'Wycinka drzew w Kadzidle i okolicy: sosny w Puszczy Zielonej, drzewa przy domach i liniach, posusz po wichurach. Zwyżka i alpinista. Bezpłatna wycena.',
    h1: 'Wycinka drzew w Kadzidle i gminie Kadzidło',
    lead:
      'W gminie Kadzidło wycinamy i przycinamy drzewa przy domach, zagrodach i drogach, a po burzach usuwamy połamane sosny i posusz. Pracujemy z liny oraz z podnośnika koszowego. Z Ostrołęki do Kadzidła jedziemy około 22 minut. Bezpłatna wycena obejmuje ocenę stanu drzewa i informację, czy potrzebne jest zgłoszenie.',
    paragraphs: [
      'Kadzidło to jedno z najbardziej rozpoznawalnych miejsc Kurpiów Zielonych – gmina leży w sercu dawnej Puszczy Zielonej, a lasy sosnowe dochodzą tu do samych zabudowań. W Dylewie, Wachu czy Tatarach drewniane domy i budynki gospodarcze często stoją w cieniu starych sosen, których korzenie na piaszczystej glebie sięgają płytko. Przy wichurze takie drzewo może wywrócić się razem z bryłą korzeniową.',
      'Typowe zlecenie z tej okolicy to sosna lub świerk przechylony w stronę dachu albo drzewo z suchym wierzchołkiem. Posusz jest szczególnie groźny, bo martwe konary spadają bez ostrzeżenia. Przy drewnianej zabudowie nie ma miejsca na błąd, dlatego stosujemy <a href="/uslugi/wycinka-alpinistyczna/">wycinkę alpinistyczną</a> z opuszczaniem każdego kawałka na linie lub <a href="/uslugi/podnosnik-koszowy-zwyzka/">zwyżkę z operatorem</a>, jeśli pozwala na to grunt.',
      'Świerki w okolicy bywają atakowane przez kornika drukarza. Zasiedlone drzewo warto usunąć szybko, zanim chrząszcze przeniosą się na kolejne świerki w ogrodzie. Zdrowe drzewa, które mają zostać, zabezpieczamy <a href="/uslugi/pielegnacja-drzew/">cięciami pielęgnacyjnymi</a> – usuwamy suche i krzyżujące się gałęzie.',
      'Zgłoszenia wycinki drzew z nieruchomości w gminie przyjmuje Urząd Gminy Kadzidło. Przed złożeniem dokumentów przeczytaj nasz <a href="/poradnik/pozwolenie-na-wycinke-drzew/">poradnik o pozwoleniach</a> – wyjaśniamy w nim, jak zmierzyć obwód pnia.',
    ],
    areas: ['Kadzidło', 'Dylewo', 'Wach', 'Tatary', 'Jazgarka', 'Golanka', 'Kierzek', 'Brzozówka', 'Siarcza Łąka', 'Krobia'],
    office: 'Urząd Gminy Kadzidło',
    faq: [
      {
        q: 'Gdzie złożyć zgłoszenie wycinki drzewa w gminie Kadzidło?',
        a: 'Zgłoszenie zamiaru usunięcia drzewa składa się w <strong>Urzędzie Gminy Kadzidło</strong>. Jeśli drzewo rośnie na terenie wpisanym do rejestru zabytków, właściwy jest Mazowiecki Wojewódzki Konserwator Zabytków.',
      },
      {
        q: 'Ile trwa dojazd do Kadzidła?',
        a: 'Z Ostrołęki do Kadzidła jedziemy około 22 minut. Do dalszych wsi gminy, jak Kierzek czy Krobia, doliczamy zwykle kilka do kilkunastu minut.',
      },
      {
        q: 'Czy obsługujecie Dylewo i Wach?',
        a: 'Tak, pracujemy w całej gminie Kadzidło, w tym w Dylewie, Wachu, Tatarach i Jazgarce. Umów bezpłatną wycenę pod numerem <a href="tel:+48572345128">572 345 128</a>.',
      },
    ],
  },
  {
    slug: 'lyse',
    name: 'Łyse',
    inName: 'w Łysych',
    admin: 'gmina Łyse, powiat ostrołęcki',
    distanceKm: 38,
    driveMin: 40,
    lat: 53.3642,
    lng: 21.565,
    title: 'Wycinka drzew Łyse – sosny, wiatrołomy, zwyżka | SCH',
    metaDescription:
      'Wycinka drzew w Łysych i gminie Łyse: sosny przy zagrodach, wiatrołomy, świerki z kornikiem, drzewa przy liniach. Alpinista i zwyżka. Bezpłatna wycena.',
    h1: 'Wycinka drzew w Łysych i gminie Łyse',
    lead:
      'W gminie Łyse zajmujemy się wycinką sosen i świerków przy zabudowaniach, usuwaniem wiatrołomów i przycinaniem drzew przy drogach oraz liniach. Pracujemy metodą alpinistyczną lub ze zwyżki. Dojazd z Ostrołęki zajmuje około 40 minut, dlatego chętnie łączymy kilka zleceń z okolicy. Wycena jest bezpłatna.',
    paragraphs: [
      'Łyse leżą w północnej części Kurpiowszczyzny, w otoczeniu dużych kompleksów leśnych dawnej Puszczy Zielonej. Wsie takie jak Lipniki, Serafin czy Dęby mają luźną zabudowę z dużymi podwórzami, przy których rosną sosny, brzozy i świerki. Te ostatnie w wielu miejscach cierpią na suszę i kornika – zamierający świerk warto wyciąć, zanim zacznie się łamać.',
      'Rozległy teren gminy sprawia, że część drzew rośnie przy długich odcinkach napowietrznych linii energetycznych i przy drogach gminnych. Gałęzie opierające się o przewody wymagają uzgodnienia prac z operatorem sieci, a drzewa pochylone nad jezdnią – szybkiej reakcji. Wykonujemy <a href="/uslugi/prace-wysokosciowe/">prace wysokościowe</a> i cięcia z <a href="/uslugi/podnosnik-koszowy-zwyzka/">podnośnika koszowego</a>, gdy dojazd jest utwardzony.',
      'Ponieważ do Łysych jedziemy dalej niż do gmin sąsiadujących z Ostrołęką, planujemy wyjazd tak, aby w jeden dzień wykonać komplet prac: <a href="/uslugi/wycinka-drzew/">wycinkę</a>, przycięcie koron drzew, które zostają, i uporządkowanie gałęzi. Jeśli sąsiedzi również mają drzewa do usunięcia, warto zgłosić to razem – ułatwia to organizację.',
      'Zgłoszenia i wnioski dotyczące wycinki w gminie przyjmuje Urząd Gminy Łyse. Terminy i progi obwodu opisujemy w <a href="/poradnik/pozwolenie-na-wycinke-drzew/">poradniku o pozwoleniach</a>.',
    ],
    areas: ['Łyse', 'Lipniki', 'Serafin', 'Dęby', 'Zalas', 'Wejdo', 'Plewki', 'Pupkowizna', 'Szafranki', 'Tyczek'],
    office: 'Urząd Gminy Łyse',
    faq: [
      {
        q: 'Gdzie złożyć zgłoszenie wycinki drzewa w gminie Łyse?',
        a: 'Zgłoszenie składa się w <strong>Urzędzie Gminy Łyse</strong>. Urząd przeprowadza oględziny w ciągu 21 dni od złożenia zgłoszenia, a wycinka jest możliwa, jeśli w ciągu 14 dni od oględzin nie wniesie sprzeciwu.',
      },
      {
        q: 'Ile trwa dojazd z Ostrołęki do Łysych?',
        a: 'Dojazd z Ostrołęki do Łysych zajmuje około 40 minut. Dlatego staramy się łączyć zlecenia z tej okolicy w jeden wyjazd – przy kilku drzewach w sąsiedztwie łatwiej ustalić termin.',
      },
      {
        q: 'Czy obsługujecie Lipniki i Serafin?',
        a: 'Tak, dojeżdżamy do Lipnik, Serafina, Dębów, Zalasu i pozostałych wsi gminy Łyse. Wycenę wykonujemy bezpłatnie na miejscu.',
      },
    ],
  },
  {
    slug: 'myszyniec',
    name: 'Myszyniec',
    inName: 'w Myszyńcu',
    admin: 'gmina miejsko-wiejska Myszyniec, powiat ostrołęcki',
    distanceKm: 38,
    driveMin: 38,
    lat: 53.3822,
    lng: 21.3514,
    title: 'Wycinka drzew Myszyniec – alpinistycznie i zwyżką | SCH',
    metaDescription:
      'Wycinka drzew w Myszyńcu i gminie Myszyniec: drzewa w zabudowie miejskiej i przy zagrodach, wiatrołomy, zwyżka z operatorem. Bezpłatna wycena na miejscu.',
    h1: 'Wycinka drzew w Myszyńcu i okolicy',
    lead:
      'W Myszyńcu i okolicznych wsiach wycinamy drzewa w zwartej zabudowie miasteczka, przy zagrodach i na skraju lasu, pracując z liny lub z podnośnika koszowego. Z Ostrołęki jedziemy około 38 minut. Wycena jest bezpłatna, a na miejscu oceniamy stan drzewa i podpowiadamy, czy wymaga ono zgłoszenia w urzędzie.',
    paragraphs: [
      'Myszyniec, nazywany stolicą Kurpiów, łączy dwa rodzaje zleceń. W centrum miasta drzewa rosną przy ulicach, kamienicach i domach stojących blisko siebie, więc wycinka wymaga rozbierania korony po kawałku. We wsiach gminy – Wydmusach, Wolkowem czy Krysiakach – drzewa rosną przy rozległych zagrodach i na granicy pól z lasem.',
      'W zwartej zabudowie najczęściej stosujemy <a href="/uslugi/wycinka-alpinistyczna/">metodę alpinistyczną</a>: arborysta wchodzi na drzewo, a odcięte fragmenty opuszcza na linach w wyznaczone miejsce. Gdy dojazd pozwala, używamy <a href="/uslugi/podnosnik-koszowy-zwyzka/">zwyżki z operatorem</a>, co skraca czas pracy przy wysokich sosnach i świerkach.',
      'Na obrzeżach gminy, w sąsiedztwie Puszczy Zielonej, częstym problemem jest posusz i wiatrołomy po wichurach. Drzewo zawieszone na innym albo oparte o dach ma w sobie duże napięcia – usuwamy je jako <a href="/uslugi/wycinka-drzew/">wycinkę drzew niebezpiecznych</a>, stopniowo odciążając pień. Zimą w Myszyńcu wykonujemy też <a href="/uslugi/odsniezanie-dachow/">odśnieżanie dachów</a> większych budynków.',
      'Zgłoszenia i wnioski o usunięcie drzew z terenu miasta i gminy przyjmuje Urząd Miejski w Myszyńcu. Jak zmierzyć obwód pnia i kiedy zgłoszenie nie jest potrzebne, wyjaśniamy w <a href="/poradnik/pozwolenie-na-wycinke-drzew/">poradniku</a>.',
    ],
    areas: ['Myszyniec', 'Myszyniec Stary', 'Myszyniec-Koryta', 'Wydmusy', 'Wolkowe', 'Krysiaki', 'Białusny Lasek', 'Charciabałda', 'Zalesie', 'Drężek'],
    office: 'Urząd Miejski w Myszyńcu',
    faq: [
      {
        q: 'Gdzie w Myszyńcu złożyć zgłoszenie wycinki drzewa?',
        a: 'Zgłoszenie lub wniosek o zezwolenie składa się w <strong>Urzędzie Miejskim w Myszyńcu</strong>. Dla nieruchomości wpisanych do rejestru zabytków zezwolenie wydaje Mazowiecki Wojewódzki Konserwator Zabytków.',
      },
      {
        q: 'Ile trwa dojazd do Myszyńca?',
        a: 'Z Ostrołęki do Myszyńca jedziemy około 38 minut. Termin bezpłatnych oględzin ustalamy telefonicznie, często łącząc je z innymi zleceniami na Kurpiach.',
      },
      {
        q: 'Czy obsługujecie Wydmusy i Wolkowe?',
        a: 'Tak, pracujemy w Myszyńcu i we wszystkich wsiach gminy, w tym w Wydmusach, Wolkowem, Krysiakach i Myszyńcu Starym.',
      },
    ],
  },
  {
    slug: 'goworowo',
    name: 'Goworowo',
    inName: 'w Goworowie',
    admin: 'gmina Goworowo, powiat ostrołęcki',
    distanceKm: 23,
    driveMin: 25,
    lat: 52.9006,
    lng: 21.5544,
    title: 'Wycinka drzew Goworowo – zwyżka i alpinista | SCH',
    metaDescription:
      'Wycinka drzew w Goworowie i gminie Goworowo: topole, wierzby, stare lipy przy zagrodach, drzewa przy liniach. Zwyżka i alpinista. Bezpłatna wycena.',
    h1: 'Wycinka drzew w Goworowie i gminie Goworowo',
    lead:
      'W gminie Goworowo wycinamy i pielęgnujemy drzewa przy domach, gospodarstwach i drogach – szczególnie wysokie topole, wierzby i stare lipy. Pracujemy z liny oraz z podnośnika koszowego. Z Ostrołęki do Goworowa jedziemy około 25 minut. Wycena jest bezpłatna i obejmuje informację, czy potrzebne jest zgłoszenie w urzędzie gminy.',
    paragraphs: [
      'Gmina Goworowo leży na południe od Ostrołęki, w pobliżu doliny Narwi, gdzie na wilgotnych gruntach dobrze rosną topole i wierzby. Wiele z nich posadzono dawno temu jako szpalery przy drogach i granicach działek. Dziś są to drzewa o obwodach znacznie przekraczających progi ustawowe, z kruchym drewnem i koronami, które przy wichurze łamią się na całych konarach.',
      'W Kuninie, Pasiekach czy Ponikwi Dużej zabudowa zagrodowa sąsiaduje ze starymi lipami, jesionami i kasztanowcami. Część z nich ma ubytki w pniu lub posusz w koronie, a pod nimi stoją budynki i maszyny rolnicze. Tu dobrze sprawdza się <a href="/uslugi/podnosnik-koszowy-zwyzka/">zwyżka z operatorem</a> – cięcie z kosza nie obciąża osłabionego drzewa.',
      'Nie każde stare drzewo trzeba usuwać. Jeśli zależy Ci na zachowaniu lipy lub kasztanowca przy domu, proponujemy <a href="/uslugi/pielegnacja-drzew/">pielęgnację drzewa</a>: usunięcie suchych gałęzi i redukcję ciężkich konarów. Gdy drzewo jest w złym stanie, wykonujemy <a href="/uslugi/wycinka-drzew/">wycinkę</a> etapami, a w miejscach bez dojazdu – <a href="/uslugi/wycinka-alpinistyczna/">metodą alpinistyczną</a>.',
      'Zgłoszenia zamiaru usunięcia drzew na terenie gminy przyjmuje Urząd Gminy Goworowo. Dla topoli i wierzb próg obwodu wynosi 80 cm na wysokości 5 cm – szczegóły w <a href="/poradnik/pozwolenie-na-wycinke-drzew/">poradniku o pozwoleniach</a>.',
    ],
    areas: ['Goworowo', 'Kunin', 'Pasieki', 'Ponikiew Duża', 'Ponikiew Mała', 'Jawory-Podmaście', 'Brzeźno', 'Czernie', 'Kobylin', 'Pokrzywnica'],
    office: 'Urząd Gminy Goworowo',
    faq: [
      {
        q: 'Gdzie złożyć zgłoszenie wycinki drzewa w gminie Goworowo?',
        a: 'Zgłoszenie składa się w <strong>Urzędzie Gminy Goworowo</strong>. Osoba prywatna nie musi zgłaszać topoli ani wierzby, której obwód pnia na wysokości 5 cm nie przekracza 80 cm.',
      },
      {
        q: 'Ile trwa dojazd z Ostrołęki do Goworowa?',
        a: 'Do Goworowa dojeżdżamy z Ostrołęki w około 25 minut. Przy większych pracach zwyżką ustalamy termin tak, aby wykonać całe zlecenie w jeden dzień.',
      },
      {
        q: 'Czy obsługujecie Kunin i Ponikiew?',
        a: 'Tak, obsługujemy wszystkie miejscowości gminy Goworowo, w tym Kunin, Ponikiew Dużą, Ponikiew Małą i Pasieki. Wycena jest bezpłatna.',
      },
    ],
  },
  {
    slug: 'czerwin',
    name: 'Czerwin',
    inName: 'w Czerwinie',
    admin: 'gmina Czerwin, powiat ostrołęcki',
    distanceKm: 26,
    driveMin: 30,
    lat: 52.9464,
    lng: 21.7611,
    title: 'Wycinka drzew Czerwin – topole, lipy, zwyżka | SCH',
    metaDescription:
      'Wycinka drzew w Czerwinie i gminie Czerwin: topole i wierzby przy zagrodach, zadrzewienia śródpolne, drzewa przy liniach. Zwyżka, alpinista. Bezpłatna wycena.',
    h1: 'Wycinka drzew w Czerwinie i gminie Czerwin',
    lead:
      'W gminie Czerwin wycinamy drzewa przy gospodarstwach, domach i drogach, usuwamy stare topole i wierzby oraz przycinamy gałęzie przy liniach energetycznych. Pracujemy metodą alpinistyczną i z podnośnika koszowego. Z Ostrołęki do Czerwina jedziemy około 30 minut. Wycena jest bezpłatna, a na miejscu doradzamy w sprawie zgłoszenia.',
    paragraphs: [
      'Czerwin to gmina o wyraźnie rolniczym charakterze, z dużą liczbą niewielkich wsi rozrzuconych wśród pól. Drzewa rosną tu głównie przy zagrodach, wzdłuż dróg i jako zadrzewienia śródpolne. Najczęściej trafiamy na wysokie topole i wierzby posadzone przy budynkach inwentarskich, które po latach zaczęły zagrażać dachom stodół i obór.',
      'Stare topole mają miękkie, łamliwe drewno, a ich konary potrafią odpaść nawet przy umiarkowanym wietrze. Przy dużych gabarytach i braku miejsca na obalenie w całości <a href="/uslugi/wycinka-drzew/">wycinkę</a> prowadzimy etapami, z <a href="/uslugi/podnosnik-koszowy-zwyzka/">podnośnika koszowego</a> albo z liny. Każdy fragment opuszczamy tak, by nie uszkodzić pokrycia dachu i instalacji.',
      'Gałęzie wrastające w napowietrzne linie niskiego napięcia to w Piskach, Wiśniewie czy Seroczynie częsty temat – prace przy przewodach wymagają kontaktu z operatorem sieci. Jeśli drzewo ma zostać, wykonujemy <a href="/uslugi/pielegnacja-drzew/">cięcia pielęgnacyjne</a>, które odsuwają koronę od budynków i przewodów.',
      'Zgłoszenia i wnioski o wycinkę drzew na terenie gminy przyjmuje Urząd Gminy w Czerwinie. W <a href="/poradnik/pozwolenie-na-wycinke-drzew/">poradniku</a> wyjaśniamy, kiedy rolnik jako osoba prywatna składa zgłoszenie, a kiedy potrzebne jest zezwolenie.',
    ],
    areas: ['Czerwin', 'Piski', 'Wiśniewo', 'Seroczyn', 'Grodzisk Duży', 'Suchcice', 'Tomasze', 'Wojsze', 'Załuski', 'Dzwonek'],
    office: 'Urząd Gminy w Czerwinie',
    faq: [
      {
        q: 'Gdzie złożyć zgłoszenie wycinki drzewa w gminie Czerwin?',
        a: 'Zgłoszenie zamiaru usunięcia drzewa składa się w <strong>Urzędzie Gminy w Czerwinie</strong>. Jeśli wycinka wiąże się z prowadzoną działalnością gospodarczą, zamiast zgłoszenia potrzebne jest zezwolenie.',
      },
      {
        q: 'Ile trwa dojazd z Ostrołęki do Czerwina?',
        a: 'Z Ostrołęki do Czerwina jedziemy około 30 minut. Do wsi na obrzeżach gminy dojazd może wydłużyć się o kilkanaście minut.',
      },
      {
        q: 'Czy obsługujecie wieś Piski i Seroczyn?',
        a: 'Tak, dojeżdżamy do Pisk, Seroczyna, Wiśniewa i pozostałych wsi gminy Czerwin. Bezpłatną wycenę umówisz pod numerem <a href="tel:+48572345128">572 345 128</a>.',
      },
    ],
  },
  {
    slug: 'troszyn',
    name: 'Troszyn',
    inName: 'w Troszynie',
    admin: 'gmina Troszyn, powiat ostrołęcki',
    distanceKm: 16,
    driveMin: 20,
    lat: 53.0303,
    lng: 21.7358,
    title: 'Wycinka drzew Troszyn – zwyżka i alpinista | SCH',
    metaDescription:
      'Wycinka drzew w Troszynie i gminie Troszyn: stare drzewa przy zagrodach, topole, wierzby, gałęzie przy liniach. Zwyżka i alpinista. Bezpłatna wycena.',
    h1: 'Wycinka drzew w Troszynie i gminie Troszyn',
    lead:
      'W gminie Troszyn wycinamy i przycinamy drzewa przy domach, gospodarstwach i drogach dojazdowych, a po burzach usuwamy połamane konary. Pracujemy z liny lub z podnośnika koszowego. Z Ostrołęki do Troszyna jedziemy około 20 minut. Bezpłatna wycena obejmuje ocenę drzewa i podpowiedź, czy wymaga ono zgłoszenia.',
    paragraphs: [
      'Troszyn leży na wschód od Ostrołęki, w typowo rolniczej okolicy, gdzie wsie takie jak Kleczków, Rabędy czy Siemiętkowo przeplatają się z polami i niewielkimi kompleksami leśnymi. Wokół zagród rosną tu stare lipy, klony, jesiony i brzozy, a przy rowach i łąkach – wierzby i topole.',
      'Wiele zleceń z gminy dotyczy drzew posadzonych przed dziesięcioleciami tuż przy domu lub oborze. Z czasem korzenie uszkadzają fundamenty i szamba, a konary ocierają się o pokrycie dachu. Jeśli usunięcie drzewa w całości jest jedyną opcją, robimy <a href="/uslugi/wycinka-drzew/">wycinkę sekcyjną</a>. Tam, gdzie ciężki sprzęt nie wjedzie, wybieramy <a href="/uslugi/wycinka-alpinistyczna/">metodę alpinistyczną</a>.',
      'Przy drzewach, które mogą zostać, proponujemy <a href="/uslugi/pielegnacja-drzew/">pielęgnację</a> – redukcję korony, usunięcie posuszu i gałęzi zbliżających się do przewodów. Prace przy liniach energetycznych uzgadniamy z operatorem sieci. Oferujemy też wynajem <a href="/uslugi/podnosnik-koszowy-zwyzka/">zwyżki z operatorem</a> do innych prac na wysokości, np. przy elewacji czy rynnach.',
      'Zgłoszenia wycinki z terenu gminy przyjmuje Urząd Gminy Troszyn. Zanim złożysz dokumenty, sprawdź w naszym <a href="/poradnik/pozwolenie-na-wycinke-drzew/">poradniku</a>, czy Twoje drzewo w ogóle przekracza progi obwodu.',
    ],
    areas: ['Troszyn', 'Kleczków', 'Rabędy', 'Siemiętkowo', 'Budne', 'Grucele', 'Łątczyn', 'Opęchowo', 'Janochy', 'Rostki'],
    office: 'Urząd Gminy Troszyn',
    faq: [
      {
        q: 'Gdzie złożyć zgłoszenie wycinki drzewa w gminie Troszyn?',
        a: 'Zgłoszenie składa się w <strong>Urzędzie Gminy Troszyn</strong>. Wystarczą dane właściciela, oznaczenie nieruchomości oraz rysunek lub mapka z zaznaczonym drzewem.',
      },
      {
        q: 'Ile trwa dojazd z Ostrołęki do Troszyna?',
        a: 'Do Troszyna dojeżdżamy z Ostrołęki w około 20 minut, dlatego oględziny i wycenę zwykle da się umówić w krótkim terminie.',
      },
      {
        q: 'Czy obsługujecie Kleczków i Rabędy?',
        a: 'Tak, obsługujemy całą gminę Troszyn, w tym Kleczków, Rabędy, Siemiętkowo i Łątczyn. Wycena na miejscu jest bezpłatna.',
      },
    ],
  },
  {
    slug: 'baranowo',
    name: 'Baranowo',
    inName: 'w Baranowie',
    admin: 'gmina Baranowo, powiat ostrołęcki',
    distanceKm: 26,
    driveMin: 30,
    lat: 53.175,
    lng: 21.2953,
    title: 'Wycinka drzew Baranowo – Kurpie, zwyżka, alpinista | SCH',
    metaDescription:
      'Wycinka drzew w Baranowie i gminie Baranowo: sosny i świerki przy domach, drzewa po wichurach, kornik w świerkach. Alpinista i zwyżka. Bezpłatna wycena.',
    h1: 'Wycinka drzew w Baranowie i gminie Baranowo',
    lead:
      'W gminie Baranowo usuwamy sosny, świerki i brzozy zagrażające domom i budynkom gospodarczym, sprzątamy drzewa połamane przez wichury i przycinamy korony przy drogach. Pracujemy metodą alpinistyczną i z podnośnika koszowego. Z Ostrołęki do Baranowa jedziemy około 30 minut. Wycena na miejscu jest bezpłatna.',
    paragraphs: [
      'Baranowo leży w zachodniej części Kurpiów Zielonych, wśród lasów sosnowych i łąk. Wsie takie jak Zawady, Rupin czy Czarnotrzew mają zabudowę rozciągniętą wzdłuż dróg, z domami stojącymi blisko ściany lasu. To piękne położenie ma swoją cenę: każda silniejsza wichura oznacza w tej okolicy powalone i nadłamane drzewa przy budynkach.',
      'Na piaszczystych glebach sosna i świerk korzenią się płytko, więc po nawalnych deszczach i przy silnym wietrze potrafią się wywrócić z bryłą korzeniową. Przechylone drzewo oparte o sąsiednie korony to jedno z najtrudniejszych zadań – usuwamy je jako <a href="/uslugi/wycinka-drzew/">wycinkę drzew niebezpiecznych</a>, odciążając pień stopniowo i z użyciem lin.',
      'W świerkach rosnących przy domach coraz częściej pojawia się kornik. Jeżeli drzewo ma brązowiejące igły i mączkę pod korą, lepiej usunąć je szybko. Przy łatwym dojeździe pracujemy z <a href="/uslugi/podnosnik-koszowy-zwyzka/">zwyżki z operatorem</a>, a przy zabudowie trudno dostępnej – <a href="/uslugi/wycinka-alpinistyczna/">metodą alpinistyczną</a>. Zdrowe drzewa możemy zabezpieczyć <a href="/uslugi/pielegnacja-drzew/">cięciami pielęgnacyjnymi</a>.',
      'Zgłoszenia i wnioski o wycinkę drzew w gminie przyjmuje Urząd Gminy Baranowo. Progi obwodu, terminy i wyjątki opisujemy w <a href="/poradnik/pozwolenie-na-wycinke-drzew/">poradniku o pozwoleniach</a>.',
    ],
    areas: ['Baranowo', 'Zawady', 'Rupin', 'Czarnotrzew', 'Dąbrowa', 'Majdan', 'Orzoł', 'Kucieje', 'Błędowo', 'Ramiona'],
    office: 'Urząd Gminy Baranowo',
    faq: [
      {
        q: 'Gdzie złożyć zgłoszenie wycinki drzewa w gminie Baranowo?',
        a: 'Zgłoszenie zamiaru usunięcia drzewa składa się w <strong>Urzędzie Gminy Baranowo</strong>. Powalone lub złamane drzewo (wywrót, złom) można usunąć bez zezwolenia, ale dopiero po oględzinach urzędu potwierdzających jego stan – dlatego zgłoś je w urzędzie i zrób zdjęcia.',
      },
      {
        q: 'Ile trwa dojazd z Ostrołęki do Baranowa?',
        a: 'Z Ostrołęki do Baranowa jedziemy około 30 minut. Po wichurach ustalamy kolejność prac według zagrożenia dla ludzi i budynków.',
      },
      {
        q: 'Czy obsługujecie Zawady i Rupin?',
        a: 'Tak, pracujemy w całej gminie Baranowo, w tym w Zawadach, Rupinie, Czarnotrzewiu i Orzole. Wycena jest bezpłatna – zadzwoń pod <a href="tel:+48572345128">572 345 128</a>.',
      },
    ],
  },
  {
    slug: 'rozan',
    name: 'Różan',
    inName: 'w Różanie',
    admin: 'gmina miejsko-wiejska Różan, powiat makowski',
    distanceKm: 27,
    driveMin: 25,
    lat: 52.8903,
    lng: 21.3958,
    title: 'Wycinka drzew Różan – alpinistycznie i zwyżką | SCH',
    metaDescription:
      'Wycinka drzew w Różanie i gminie Różan: stare drzewa nad Narwią, topole i wierzby, drzewa przy domach i liniach. Alpinista i zwyżka. Bezpłatna wycena.',
    h1: 'Wycinka drzew w Różanie i gminie Różan',
    lead:
      'W Różanie i okolicznych wsiach wycinamy oraz pielęgnujemy drzewa przy domach, w zabudowie miejskiej i w dolinie Narwi – z liny lub z podnośnika koszowego. Z Ostrołęki do Różana jedziemy około 25 minut. Wycena jest bezpłatna, a na miejscu pomagamy ustalić, czy potrzebne jest zgłoszenie lub zezwolenie.',
    paragraphs: [
      'Różan to niewielkie miasto nad Narwią, położone już w powiecie makowskim, ale blisko Ostrołęki. Nadrzeczne tereny sprzyjają topolom, wierzbom i olszom, które rosną szybko i osiągają duże rozmiary. W centrum miasta problemem bywają stare drzewa przy ulicach i domach, których korony rozrosły się nad dachami i przewodami.',
      'W mieście są obiekty o wartości historycznej, w tym dawne forty. Jeżeli drzewo rośnie na nieruchomości wpisanej do rejestru zabytków, zezwolenie na jego usunięcie wydaje Mazowiecki Wojewódzki Konserwator Zabytków, a nie burmistrz. Przed każdą <a href="/uslugi/wycinka-drzew/">wycinką</a> w takim miejscu warto to sprawdzić – pomagamy ocenić sytuację podczas oględzin.',
      'W zwartej zabudowie Różana najczęściej pracujemy <a href="/uslugi/wycinka-alpinistyczna/">metodą alpinistyczną</a> albo z <a href="/uslugi/podnosnik-koszowy-zwyzka/">zwyżki z operatorem</a>. We wsiach gminy, takich jak Chełsty, Dzbądz czy Paulinowo, częściej usuwamy topole i wierzby przy zagrodach oraz wykonujemy <a href="/uslugi/pielegnacja-drzew/">cięcia pielęgnacyjne</a> starych drzew owocowych i lip.',
      'Zgłoszenia i wnioski dotyczące usunięcia drzew z terenu miasta i gminy przyjmuje Urząd Miejski w Różanie. Przed złożeniem dokumentów zajrzyj do naszego <a href="/poradnik/pozwolenie-na-wycinke-drzew/">poradnika o pozwoleniach na wycinkę</a>.',
    ],
    areas: ['Różan', 'Chełsty', 'Dzbądz', 'Paulinowo', 'Załuzie', 'Miłony', 'Podborze', 'Chrzczonki', 'Załęże Wielkie', 'Mroczki-Rębiszewo'],
    office: 'Urząd Miejski w Różanie (dla nieruchomości wpisanych do rejestru zabytków – Mazowiecki Wojewódzki Konserwator Zabytków)',
    faq: [
      {
        q: 'Gdzie w Różanie złożyć zgłoszenie wycinki drzewa?',
        a: 'Zgłoszenie lub wniosek składa się w <strong>Urzędzie Miejskim w Różanie</strong>. Gdy nieruchomość jest wpisana do rejestru zabytków, zezwolenie wydaje Mazowiecki Wojewódzki Konserwator Zabytków.',
      },
      {
        q: 'Ile trwa dojazd z Ostrołęki do Różana?',
        a: 'Do Różana dojeżdżamy z Ostrołęki w około 25 minut. Mimo że Różan należy do powiatu makowskiego, leży w naszym stałym obszarze działania.',
      },
      {
        q: 'Czy obsługujecie wsie Chełsty i Dzbądz?',
        a: 'Tak, obsługujemy wszystkie miejscowości gminy Różan, w tym Chełsty, Dzbądz, Paulinowo i Załuzie. Wycena na miejscu jest bezpłatna.',
      },
    ],
  },
];
