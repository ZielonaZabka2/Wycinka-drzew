import type { Service } from './types';

export const services: Service[] = [
  // 1. WYCINKA DRZEW — główna strona usługowa
  {
    slug: 'wycinka-drzew',
    name: 'Wycinka drzew',
    h1: 'Wycinka drzew Ostrołęka i okolice',
    title: 'Wycinka drzew Ostrołęka – bezpłatna wycena | Sch',
    metaDescription:
      'Wycinka drzew w Ostrołęce i do 60 km: metoda alpinistyczna, zwyżka, drzewa niebezpieczne i trudne miejsca. Bezpłatna wycena – zadzwoń i umów oględziny.',
    excerpt:
      'Wycinka drzew przy domach, na działkach i posesjach firmowych – sekcyjnie, z liną lub ze zwyżki. Bezpłatna wycena w Ostrołęce i okolicach.',
    lead:
      'Wycinamy drzewa w Ostrołęce i w promieniu około 60 km – na prywatnych działkach, przy domach, na terenach firm i wspólnot. Pracujemy metodą alpinistyczną lub z podnośnika koszowego, także przy drzewach niebezpiecznych i w ciasnej zabudowie. Wycena jest bezpłatna: po telefonie umawiamy oględziny i podajemy koszt oraz termin.',
    illustration: 'forest',
    facts: [
      { label: 'Wycena', value: 'Bezpłatna' },
      { label: 'Zasięg', value: 'do 60 km od Ostrołęki' },
      { label: 'Metody', value: 'Alpinistyczna + zwyżka' },
      { label: 'Klienci', value: 'Osoby prywatne i firmy' },
    ],
    includes: [
      'Oględziny drzewa i bezpłatna wycena na miejscu',
      'Wycinka całkowita drzew liściastych i iglastych',
      'Wycinka sekcyjna – kawałkami, z opuszczaniem na linach',
      'Wycinka drzew niebezpiecznych, pochylonych i uszkodzonych przez wichurę',
      'Praca z podnośnika koszowego tam, gdzie jest dojazd',
      'Zabezpieczenie i oznaczenie strefy prac',
      'Pocięcie pnia i konarów na kłody – na życzenie',
      'Uprzątnięcie gałęzi, rozdrobnienie lub wywóz – do ustalenia',
      'Informacja o wymaganym zgłoszeniu lub zezwoleniu',
    ],
    steps: [
      { name: 'Telefon i krótki opis', text: 'Dzwonisz pod numer +48 572 345 128, opisujesz drzewo, lokalizację i otoczenie. Zdjęcie wysłane SMS-em przyspiesza wstępną ocenę.' },
      { name: 'Oględziny i wycena', text: 'Przyjeżdżamy na miejsce, oceniamy stan drzewa, dojazd i przeszkody, a następnie podajemy bezpłatną wycenę oraz proponowaną metodę pracy.' },
      { name: 'Formalności', text: 'Sprawdzamy razem, czy drzewo wymaga zgłoszenia w urzędzie gminy lub miasta. Termin prac ustalamy po upływie terminów urzędowych.' },
      { name: 'Wycinka', text: 'Zabezpieczamy teren, a drzewo usuwamy w całości lub sekcyjnie – z liny albo ze zwyżki – kontrolując kierunek opadania każdego fragmentu.' },
      { name: 'Porządkowanie', text: 'Tniemy drewno, zbieramy gałęzie i zostawiamy teren uporządkowany. Zakres sprzątania, rozdrobnienia i wywozu ustalamy przy wycenie.' },
    ],
    sections: [
      {
        h2: 'Jak wygląda wycinka drzewa w Ostrołęce krok po kroku?',
        paragraphs: [
          'Każde zlecenie zaczynamy od oględzin, bo o metodzie decyduje otoczenie drzewa, a nie tylko jego wysokość. Drzewo stojące na otwartej działce można często obalić w całości w wyznaczonym kierunku. Gdy obok stoi dom, garaż, ogrodzenie albo przebiegają przewody, drzewo usuwamy <strong>sekcyjnie</strong>: najpierw gałęzie, potem kolejne odcinki pnia opuszczane na linach.',
          'Przed rozpoczęciem pracy wyznaczamy strefę bezpieczeństwa i prosimy domowników o usunięcie z niej samochodów, mebli ogrodowych oraz zwierząt. Na koniec pień tniemy na kłody, a gałęzie zbieramy w jedno miejsce lub – po wcześniejszym ustaleniu – rozdrabniamy albo wywozimy.',
        ],
      },
      {
        h2: 'Od czego zależy cena wycinki drzewa?',
        paragraphs: [
          'Nie podajemy cennika „za sztukę”, bo dwa drzewa tej samej wysokości potrafią wymagać zupełnie innego nakładu pracy. Na koszt wpływa przede wszystkim <strong>metoda</strong> (obalenie w całości, wycinka sekcyjna z liny, praca ze zwyżki), dostęp do drzewa i liczba przeszkód w strefie opadania.',
          'Znaczenie mają też gatunek i stan drewna – spróchniałe lub pęknięte drzewo wymaga ostrożniejszego, wolniejszego demontażu. Do ceny doliczamy ewentualne rozdrobnienie gałęzi, wywóz urobku czy pocięcie drewna na opał. Dlatego wycenę przygotowujemy po oględzinach i jest ona <strong>bezpłatna</strong> – wystarczy <a href="/kontakt/">umówić termin</a>.',
        ],
        bullets: [
          'wysokość, obwód pnia i rozłożystość korony',
          'otoczenie: budynki, linie, ogrodzenia, nagrobki, nasadzenia',
          'dojazd dla podnośnika lub konieczność pracy z liny',
          'stan zdrowotny drzewa i ryzyko nieprzewidywalnego pękania',
          'zakres sprzątania, rozdrobnienia i wywozu',
        ],
      },
      {
        h2: 'Zwyżka czy alpinista – którą metodę wybrać?',
        paragraphs: [
          '<a href="/uslugi/podnosnik-koszowy-zwyzka/">Podnośnik koszowy</a> jest szybki i wygodny, gdy da się nim podjechać pod drzewo po utwardzonym lub suchym gruncie. Sprawdza się przy drzewach rosnących przy drodze, w szpalerach i na dużych działkach.',
          'Gdy drzewo stoi za domem, na skarpie, w wąskim przejściu lub na miękkim trawniku, wybieramy <a href="/uslugi/wycinka-alpinistyczna/">wycinkę metodą alpinistyczną</a>. Arborysta wspina się po linach i demontuje koronę bez wjazdu ciężkim sprzętem, co chroni podjazdy, trawniki i instalacje w gruncie. Często łączymy obie metody na jednym zleceniu.',
        ],
      },
      {
        h2: 'Czy na wycinkę drzewa potrzebne jest pozwolenie?',
        paragraphs: [
          'Osoba prywatna, która usuwa drzewo na cele niezwiązane z działalnością gospodarczą, zgłasza wycinkę w urzędzie, gdy obwód pnia mierzony na wysokości 5 cm przekracza 80 cm (topola, wierzby, klon jesionolistny, klon srebrzysty), 65 cm (kasztanowiec zwyczajny, robinia akacjowa, platan klonolistny) lub 50 cm (pozostałe gatunki). Na terenie miasta zgłoszenie przyjmuje Urząd Miasta Ostrołęka, poza miastem – właściwy urząd gminy.',
          'Firmy, wspólnoty i spółdzielnie przy drzewach przekraczających te same progi obwodu potrzebują zezwolenia, a nie tylko zgłoszenia. Szczegóły, terminy i wzór postępowania opisaliśmy w poradniku <a href="/poradnik/pozwolenie-na-wycinke-drzew/">pozwolenie na wycinkę drzew</a>. Przy oględzinach mierzymy obwód pnia i mówimy, czy formalności są potrzebne.',
        ],
      },
      {
        h2: 'Wycinka drzew w okolicach Ostrołęki – gdzie dojeżdżamy?',
        paragraphs: [
          'Obsługujemy Ostrołękę oraz miejscowości w promieniu około 60 km, w tym gminy powiatu ostrołęckiego i sąsiednich. Pełną listę kierunków znajdziesz na stronie <a href="/obszar-dzialania/">obszar działania</a>.',
          'Przy dalszych dojazdach warto zebrać kilka zleceń w jednym terminie – na przykład wycinkę z <a href="/uslugi/pielegnacja-drzew/">przycinką pozostałych drzew</a> – co porządkuje harmonogram i ułatwia planowanie prac.',
        ],
      },
      {
        h2: 'Co przygotować przed przyjazdem ekipy?',
        paragraphs: [
          'Zapewnij dostęp do posesji i zdecyduj, co ma się stać z drewnem – czy zostaje na opał, czy ma zostać wywiezione. Jeśli wymagane było zgłoszenie, miej pod ręką informację o braku sprzeciwu urzędu.',
          'Warto uprzedzić sąsiadów, szczególnie gdy korona sięga nad ich działkę lub trzeba chwilowo zająć wspólny dojazd. W okresie od marca do połowy października sprawdzamy też, czy w koronie nie ma zasiedlonych gniazd ptaków.',
        ],
      },
    ],
    faq: [
      { q: 'Jak szybko możecie przyjechać na wycenę wycinki?', a: 'Termin oględzin ustalamy telefonicznie, zwykle w ciągu kilku dni roboczych, a przy drzewach zagrażających budynkom lub drodze staramy się przyjechać priorytetowo. Wycena jest bezpłatna i do niczego nie zobowiązuje. Zdjęcia wysłane SMS-em pozwalają wstępnie ocenić pracę jeszcze przed przyjazdem.' },
      { q: 'Czy wycinacie pojedyncze drzewa, czy tylko większe zlecenia?', a: 'Wycinamy zarówno jedno drzewo przy domu, jak i kilka lub kilkanaście drzew na działce czy terenie firmy. Przy pojedynczym drzewie w dalszej miejscowości warto zapytać o termin, w którym jesteśmy w okolicy – wtedy łatwiej dopasować przyjazd do harmonogramu.' },
      { q: 'Czy usuwacie pnie po wycince?', a: 'Standardowo pień ścinamy jak najniżej przy gruncie. Usunięcie karpy lub frezowanie pniaka nie jest częścią każdej wyceny – możliwość i sposób wykonania ustalamy indywidualnie przy oględzinach, w zależności od miejsca i dostępu.' },
      { q: 'Czy wycinka jest możliwa zimą?', a: 'Tak, zima to dobry czas na wycinkę: drzewa liściaste nie mają liści, korona jest lżejsza i lepiej widać jej budowę, a poza okresem lęgowym ptaków odpada też sprawdzanie gniazd. Zmarznięty grunt ułatwia wjazd zwyżki na działkę. Przeszkodą bywa jedynie silny wiatr lub oblodzenie.' },
      { q: 'Kto odpowiada za szkody podczas wycinki?', a: 'Wykonawca odpowiada za prowadzenie prac w sposób bezpieczny, dlatego przy trudnym otoczeniu wybieramy wycinkę sekcyjną i opuszczanie fragmentów na linach. Wszystkie ryzyka – bliskość dachu, przewodów czy ogrodzenia – omawiamy przed rozpoczęciem pracy, a szczegóły warunków zlecenia potwierdzamy przy wycenie.' },
      { q: 'Czy muszę być obecny podczas wycinki?', a: 'Nie zawsze, ale dobrze być na miejscu na początku prac, aby potwierdzić, które drzewa usuwamy i gdzie składamy drewno. Jeśli nie możesz być obecny, wystarczy zapewnić dostęp do posesji i ustalić szczegóły telefonicznie.' },
    ],
    serviceType: 'Wycinka drzew',
    keywords: [
      'wycinka drzew Ostrołęka',
      'wycinka drzew cena Ostrołęka',
      'usuwanie drzew Ostrołęka',
      'wycinka sekcyjna drzew',
      'wycinka drzew przy domu',
      'firma wycinka drzew powiat ostrołęcki',
      'ścinka drzew Ostrołęka',
      'wycinka drzew bezpłatna wycena',
    ],
  },

  // 2. WYCINKA ALPINISTYCZNA
  {
    slug: 'wycinka-alpinistyczna',
    name: 'Wycinka alpinistyczna',
    h1: 'Wycinka drzew metodą alpinistyczną – Ostrołęka',
    title: 'Wycinka alpinistyczna drzew Ostrołęka | trudne miejsca',
    metaDescription:
      'Wycinka metodą alpinistyczną w Ostrołęce: drzewa niebezpieczne, przy domach, liniach, ogrodzeniach i na cmentarzach. Sekcyjnie, na linach. Bezpłatna wycena.',
    excerpt:
      'Sekcyjne usuwanie drzew z lin tam, gdzie nie wjedzie zwyżka – przy budynkach, liniach, ogrodzeniach i na cmentarzach.',
    lead:
      'Wycinka alpinistyczna to usuwanie drzewa kawałek po kawałku przez arborystę pracującego na linach, bez wjazdu ciężkim sprzętem. Stosujemy ją w Ostrołęce i okolicach przy drzewach niebezpiecznych, rosnących tuż przy domach, liniach, ogrodzeniach i nagrobkach. Wycena jest bezpłatna – po oględzinach wiesz, jak i kiedy drzewo zostanie usunięte.',
    illustration: 'arborist',
    facts: [
      { label: 'Metoda', value: 'Sekcyjnie, na linach' },
      { label: 'Dojazd sprzętu', value: 'Niewymagany' },
      { label: 'Drzewa', value: 'Niebezpieczne i trudne' },
      { label: 'Wycena', value: 'Bezpłatna' },
    ],
    includes: [
      'Ocena stanu drzewa i planu demontażu korony',
      'Wycinka sekcyjna z opuszczaniem fragmentów na linach',
      'Usuwanie drzew pochylonych nad dachem lub ogrodzeniem',
      'Wycinka drzew złamanych, wypróchniałych i po wichurze',
      'Prace przy liniach i instalacjach – w uzgodnieniu z ich zarządcą',
      'Wycinka drzew na cmentarzach, przy nagrobkach',
      'Praca w ogrodach bez dojazdu i na skarpach',
      'Uprzątnięcie urobku lub pocięcie drewna – do ustalenia',
    ],
    steps: [
      { name: 'Ocena ryzyka', text: 'Na miejscu sprawdzamy stabilność drzewa, pęknięcia, próchnicę i to, co znajduje się pod koroną. Na tej podstawie planujemy kolejność cięć.' },
      { name: 'Wybór punktów kotwiczenia', text: 'Arborysta wybiera zdrowe miejsca do zaczepienia lin roboczych i asekuracyjnych – w tym samym drzewie lub w sąsiednim, jeśli to bezpieczniejsze.' },
      { name: 'Demontaż korony', text: 'Gałęzie i konary odcinamy kolejno, a cięższe fragmenty opuszczamy kontrolowanie na linach, tak aby nie uderzyły w dach, ogrodzenie ani nagrobki.' },
      { name: 'Usunięcie pnia sekcjami', text: 'Pień skracamy odcinkami od góry, dopasowując długość kłód do miejsca, w którym mogą bezpiecznie wylądować.' },
      { name: 'Sprzątanie', text: 'Porządkujemy teren i układamy drewno we wskazanym miejscu. Wywóz lub rozdrobnienie gałęzi ustalamy przy wycenie.' },
    ],
    sections: [
      {
        h2: 'Na czym polega wycinka alpinistyczna?',
        paragraphs: [
          'Arborysta wchodzi na drzewo w uprzęży, asekurowany dwiema niezależnymi linami, i od góry demontuje koronę. Każdy odcinany konar jest wcześniej przywiązany, a jego opuszczanie kontroluje osoba na ziemi – dzięki temu fragment ląduje dokładnie tam, gdzie jest miejsce, a nie tam, gdzie „poleci”.',
          'Metoda nie wymaga wjazdu podnośnikiem ani dźwigiem, więc sprawdza się w ogrodach otoczonych zabudową, na skarpach i przy wąskich przejściach. Trwa zwykle dłużej niż obalenie drzewa w całości, ale pozwala usunąć drzewo w miejscu, gdzie inna metoda byłaby zbyt ryzykowna.',
        ],
      },
      {
        h2: 'Drzewa niebezpieczne – kiedy nie warto czekać?',
        paragraphs: [
          'Sygnałem alarmowym są: pochylenie drzewa, które pogłębia się z sezonu na sezon, podniesiona ziemia przy korzeniach, pęknięcia i rozwidlenia z wrośniętą korą, owocniki grzybów na pniu oraz suche, wiszące konary. Takie drzewo może złamać się przy pierwszej mocnej wichurze.',
          'Drzewa zagrażające bezpieczeństwu ludzi lub mienia, a także złomy i wywroty po burzy, wymagają szybkiej reakcji. Przepisy przewidują dla nich odrębne zasady usuwania – zanim zaczniesz działać, zajrzyj do poradnika <a href="/poradnik/pozwolenie-na-wycinke-drzew/">o pozwoleniach na wycinkę</a> albo po prostu zadzwoń – podpowiemy, od czego zacząć.',
        ],
      },
      {
        h2: 'Wycinka przy domu, linii i ogrodzeniu – jak chronimy otoczenie?',
        paragraphs: [
          'Przy budynkach najważniejsze jest przejęcie ciężaru każdego cięcia przez linę, zanim fragment oderwie się od drzewa. Konary nad dachem opuszczamy z dala od rynien i pokrycia, a przy ogrodzeniach tniemy krótsze sekcje, które da się bezpiecznie odebrać na ziemi.',
          'Drzewa rosnące w pobliżu napowietrznych linii energetycznych wymagają wcześniejszego kontaktu z zarządcą sieci – często konieczne jest jej wyłączenie lub nadzór. Taki warunek omawiamy przy oględzinach, zanim ustalimy termin.',
        ],
        bullets: [
          'kontrolowane opuszczanie fragmentów na linach',
          'krótkie sekcje przy delikatnych elementach otoczenia',
          'wyłączona i oznaczona strefa pod drzewem',
          'uzgodnienia z zarządcą linii, gdy są wymagane',
        ],
      },
      {
        h2: 'Wycinka drzew na cmentarzu',
        paragraphs: [
          'Na cmentarzach drzewa rosną zwykle między nagrobkami, a ciasne alejki wykluczają wjazd podnośnikiem. Wycinka alpinistyczna pozwala usunąć drzewo bez ryzyka uszkodzenia pomników, które są dla rodzin szczególnie cenne.',
          'Zgodę na prace na terenie cmentarza wydaje jego zarządca – parafia lub gmina. Zanim umówimy termin, warto ustalić, kto jest właścicielem drzewa i kto składa ewentualne zgłoszenie lub wniosek.',
        ],
      },
      {
        h2: 'Co przygotować przed wycinką alpinistyczną?',
        paragraphs: [
          'Ekipa potrzebuje wolnego miejsca pod drzewem na odbiór opuszczanych fragmentów oraz przejścia, którym wyniesie drewno i gałęzie. Delikatne elementy, których nie da się przestawić – donice, lampy ogrodowe, altany – warto wskazać przed startem, żeby zaplanować kolejność cięć.',
          'Jeśli drzewo rośnie przy granicy działki, uprzedź sąsiada, bo czasem trzeba chwilowo wejść na jego teren. Przy drzewie przekraczającym progi obwodu przygotuj potwierdzenie, że urząd nie wniósł sprzeciwu wobec zgłoszenia.',
        ],
      },
      {
        h2: 'Kiedy wystarczy zwyżka zamiast alpinisty?',
        paragraphs: [
          'Jeśli pod drzewo prowadzi utwardzony dojazd, a grunt jest nośny, <a href="/uslugi/podnosnik-koszowy-zwyzka/">podnośnik koszowy</a> przyspiesza pracę, zwłaszcza przy kilku drzewach w jednym rzędzie. Gdy dojazdu nie ma lub korona jest spleciona z sąsiednimi drzewami i budynkiem, lepszym wyborem jest lina.',
          'O metodzie decydujemy po oględzinach. Więcej o standardowych wycinkach na otwartym terenie przeczytasz na stronie <a href="/uslugi/wycinka-drzew/">wycinka drzew w Ostrołęce</a>, a terminy uzgodnisz przez <a href="/kontakt/">kontakt</a>.',
        ],
      },
    ],
    faq: [
      { q: 'Czy wycinka alpinistyczna jest droższa od zwykłej?', a: 'Zwykle tak, ponieważ demontaż drzewa na linach trwa dłużej niż obalenie go w całości i wymaga pracy dwóch osób – wspinacza i asekurującego. Z drugiej strony pozwala uniknąć kosztów naprawy dachu czy ogrodzenia. Dokładny koszt podajemy po bezpłatnych oględzinach.' },
      { q: 'Czy alpinista może wejść na spróchniałe drzewo?', a: 'To zależy od stopnia rozkładu drewna. Jeżeli pień jest mocno osłabiony, lina robocza jest kotwiczona w sąsiednim zdrowym drzewie albo część prac wykonujemy z podnośnika. Ocena stabilności jest pierwszym etapem oględzin i od niej zależy wybór metody.' },
      { q: 'Czy wycinacie drzewa przy liniach energetycznych?', a: 'Wycinamy drzewa rosnące w pobliżu linii, ale przy przewodach pod napięciem niezbędne jest uzgodnienie z operatorem sieci, który decyduje o wyłączeniu lub nadzorze. Pomagamy ustalić, co trzeba zgłosić, i planujemy termin po uzyskaniu zgody.' },
      { q: 'Ile trwa wycinka dużego drzewa metodą alpinistyczną?', a: 'Pojedyncze duże drzewo przy domu usuwamy zazwyczaj w ciągu jednego dnia roboczego, choć czas zależy od rozmiaru korony, liczby przeszkód i sposobu uprzątnięcia drewna. Przy kilku drzewach lub trudnym dostępie prace mogą trwać dłużej – orientacyjny czas podajemy przy wycenie.' },
      { q: 'Czy trzeba przycinać korony sąsiednich drzew?', a: 'Nie zawsze, ale czasem gałęzie sąsiednich drzew utrudniają opuszczanie sekcji. Wtedy proponujemy niewielkie cięcia korygujące, zawsze po uzgodnieniu z właścicielem. Jeżeli drzewo należy do sąsiada, potrzebna jest jego zgoda, a przy drzewach wspólnych – zgoda wszystkich współwłaścicieli.' },
    ],
    serviceType: 'Wycinka drzew metodą alpinistyczną',
    keywords: [
      'wycinka alpinistyczna Ostrołęka',
      'wycinka drzew metodą alpinistyczną',
      'wycinka drzew niebezpiecznych Ostrołęka',
      'wycinka drzewa przy domu',
      'wycinka drzew na cmentarzu Ostrołęka',
      'arborysta Ostrołęka',
      'wycinka drzew w trudnych miejscach',
      'usuwanie drzewa pochylonego nad dachem',
    ],
  },

  // 3. PODNOŚNIK KOSZOWY / ZWYŻKA
  {
    slug: 'podnosnik-koszowy-zwyzka',
    name: 'Zwyżka / podnośnik koszowy',
    h1: 'Zwyżka Ostrołęka – podnośnik koszowy z operatorem',
    title: 'Zwyżka Ostrołęka – podnośnik koszowy z operatorem',
    metaDescription:
      'Wynajem zwyżki z operatorem w Ostrołęce i okolicach: montaże, konserwacja, inspekcje, cięcie gałęzi, prace na wysokości. Zadzwoń po termin i bezpłatną wycenę.',
    excerpt:
      'Podnośnik koszowy z doświadczonym operatorem do montaży, konserwacji, inspekcji i prac przy drzewach – Ostrołęka i okolice.',
    lead:
      'Wynajmujemy podnośnik koszowy (zwyżkę) wyłącznie z operatorem – w Ostrołęce i w promieniu około 60 km. Zwyżka służy do wycinki i przycinki drzew, montaży, konserwacji, inspekcji dachów i elewacji oraz prac porządkowych na wysokości. Dla firm, instytucji i osób prywatnych. Termin i koszt ustalamy telefonicznie, wycena jest bezpłatna.',
    illustration: 'lift',
    facts: [
      { label: 'Wynajem', value: 'Z operatorem' },
      { label: 'Zasięg', value: 'do 60 km' },
      { label: 'Zastosowania', value: 'Drzewa, montaże, inspekcje' },
      { label: 'Wycena', value: 'Bezpłatna' },
    ],
    includes: [
      'Podnośnik koszowy z operatorem na godziny lub cały dzień – do ustalenia',
      'Cięcie gałęzi i wycinka drzew z kosza',
      'Montaż i demontaż reklam, szyldów, oświetlenia i kamer',
      'Konserwacja i naprawy elementów na wysokości',
      'Inspekcje dachów, kominów i elewacji',
      'Czyszczenie rynien i obróbek blacharskich',
      'Wieszanie dekoracji świątecznych',
      'Obsługa zleceń dla firm, wspólnot i instytucji',
    ],
    steps: [
      { name: 'Opis zadania', text: 'Mówisz, co trzeba zrobić, na jakiej wysokości i w jakim miejscu. Zdjęcie miejsca pracy pomaga ocenić, czy zwyżka dosięgnie celu.' },
      { name: 'Sprawdzenie dojazdu', text: 'Ustalamy, gdzie podnośnik stanie, czy grunt jest nośny i czy trzeba zająć fragment drogi lub chodnika.' },
      { name: 'Termin i wycena', text: 'Podajemy bezpłatną wycenę i proponujemy termin, uwzględniając prognozę pogody – przy silnym wietrze praca w koszu jest wstrzymywana.' },
      { name: 'Realizacja', text: 'Operator ustawia maszynę, wypoziomowuje ją na podporach, zabezpiecza strefę pod koszem i wykonuje zadanie lub obsługuje Twoją ekipę.' },
    ],
    sections: [
      {
        h2: 'Wynajem zwyżki z operatorem – dlaczego nie „na sucho”?',
        paragraphs: [
          'Podnośnik koszowy udostępniamy tylko razem z operatorem. Obsługa podestu ruchomego wymaga uprawnień, znajomości maszyny i umiejętności oceny podłoża, a błąd przy ustawieniu podpór może skończyć się przewróceniem. Operator bierze na siebie ustawienie, poziomowanie i sterowanie koszem.',
          'Dla klienta oznacza to mniej formalności i szybszy start: nie trzeba szukać osoby z uprawnieniami ani martwić się transportem maszyny. Szczegóły wynajmu, w tym możliwy czas pracy, ustalamy telefonicznie pod numerem z zakładki <a href="/kontakt/">kontakt</a>.',
        ],
      },
      {
        h2: 'Do jakich prac przyda się podnośnik koszowy?',
        paragraphs: [
          'Najczęściej zwyżka pracuje przy drzewach – przy <a href="/uslugi/wycinka-drzew/">wycince</a> i <a href="/uslugi/pielegnacja-drzew/">przycinaniu koron</a> rosnących przy drodze lub na dostępnej działce. Równie często obsługujemy zlecenia techniczne: montaż reklam, oświetlenia, kamer, anten i siatek, a także naprawy obróbek i przeglądy dachów.',
          'Więcej o pracach niezwiązanych z drzewami, takich jak czyszczenie rynien czy dekoracje świąteczne, piszemy na stronie <a href="/uslugi/prace-wysokosciowe/">prace wysokościowe</a>.',
        ],
        bullets: [
          'cięcie gałęzi nad drogą, parkingiem i posesją',
          'montaż i serwis reklam, szyldów, lamp',
          'przeglądy dachów, kominów i elewacji',
          'wymiana żarówek i opraw w halach i na placach',
        ],
      },
      {
        h2: 'Co wpływa na koszt wynajmu zwyżki?',
        paragraphs: [
          'Główne czynniki to czas pracy maszyny z operatorem, odległość dojazdu od Ostrołęki i charakter zadania. Krótkie zlecenie w mieście wycenia się inaczej niż całodniowa praca w odległej miejscowości.',
          'Znaczenie ma też przygotowanie miejsca: jeśli podnośnik musi stanąć na drodze publicznej, może być potrzebne uzgodnienie z zarządcą drogi. Dokładną kwotę podajemy po rozmowie, a wycena nic nie kosztuje.',
        ],
      },
      {
        h2: 'Jak przygotować miejsce pod zwyżkę?',
        paragraphs: [
          'Podnośnik potrzebuje równego, twardego miejsca na rozstawienie podpór oraz wolnej przestrzeni wokół. Przed przyjazdem warto przestawić samochody, usunąć przeszkody i sprawdzić, czy pod planowanym stanowiskiem nie ma szamba, studzienki lub świeżo wylanej kostki.',
          'Miękki trawnik po deszczu bywa zbyt słaby na podpory. Gdy dojazdu nie ma, zamiast zwyżki proponujemy <a href="/uslugi/wycinka-alpinistyczna/">pracę metodą alpinistyczną</a>.',
        ],
      },
      {
        h2: 'Zwyżka dla firm, wspólnot i instytucji',
        paragraphs: [
          'Zarządcy nieruchomości, sklepy, zakłady i urzędy często potrzebują podnośnika cyklicznie: do przeglądu dachu po zimie, wymiany opraw na parkingu, czyszczenia rynien jesienią czy montażu iluminacji przed świętami. Zebranie takich zadań w stały harmonogram skraca czas oczekiwania i porządkuje koszty.',
          'Przy obiektach czynnych dla klientów planujemy pracę tak, aby jak najmniej utrudniać ruch – wcześnie rano, po godzinach otwarcia lub etapami, z wydzieleniem fragmentu parkingu czy chodnika.',
        ],
      },
      {
        h2: 'Pogoda i bezpieczeństwo pracy w koszu',
        paragraphs: [
          'Praca w koszu jest wstrzymywana przy silnym wietrze, burzy i oblodzeniu, bo wtedy kosz i wysięgnik stają się niestabilne. Dlatego termin zawsze potwierdzamy dzień wcześniej, biorąc pod uwagę prognozę.',
          'Pod koszem wyznaczamy strefę, do której nie wchodzą przechodnie ani domownicy. Osoby pracujące w koszu używają szelek bezpieczeństwa przypiętych do punktu kotwiczenia platformy.',
        ],
      },
    ],
    faq: [
      { q: 'Czy zwyżka może wjechać na moją działkę?', a: 'Zwykle tak, jeśli brama jest wystarczająco szeroka, a grunt twardy i suchy. Problemem bywają wąskie wjazdy, strome skarpy i miękkie trawniki po deszczach. Przy wycenie sprawdzamy dojazd i miejsce na podpory, a gdy wjazd jest niemożliwy, proponujemy pracę z liny.' },
      { q: 'Na jak długo można wynająć podnośnik koszowy?', a: 'Wynajem dopasowujemy do zadania – od krótkiego zlecenia po pracę przez cały dzień. Czas i sposób rozliczenia ustalamy telefonicznie, po opisie prac. Przy kilku drobnych zadaniach w jednym miejscu warto zaplanować je w jednym terminie.' },
      { q: 'Czy operator pomoże przy montażu, czy tylko obsługuje kosz?', a: 'Operator zawsze odpowiada za bezpieczne ustawienie i sterowanie podnośnikiem. Wiele prostych zadań – cięcie gałęzi, montaż szyldu czy czyszczenie rynien – możemy wykonać sami. Przy specjalistycznych instalacjach w koszu pracuje Twój fachowiec, a my zapewniamy podnośnik i operatora.' },
      { q: 'Czy zwyżka dojedzie do Kadzidła, Myszyńca lub Różana?', a: 'Tak, dojeżdżamy w promieniu około 60 km od Ostrołęki, więc obejmujemy także te miejscowości. Przy dalszych kursach termin najlepiej ustalić z kilkudniowym wyprzedzeniem. Listę obsługiwanych kierunków znajdziesz na stronie <a href="/obszar-dzialania/">obszar działania</a>.' },
      { q: 'Czy zwyżka nadaje się do prac przy liniach energetycznych?', a: 'Pracy w pobliżu przewodów pod napięciem nie wykonujemy bez uzgodnienia z operatorem sieci. Jeżeli drzewo lub element montażowy znajduje się blisko linii, najpierw ustalamy warunki wyłączenia lub nadzoru, a dopiero potem termin prac.' },
    ],
    serviceType: 'Wynajem podnośnika koszowego z operatorem',
    keywords: [
      'zwyżka Ostrołęka',
      'wynajem zwyżki Ostrołęka',
      'podnośnik koszowy z operatorem Ostrołęka',
      'wynajem podnośnika koszowego',
      'usługi zwyżką Ostrołęka',
      'zwyżka z operatorem cena',
      'podnośnik koszowy powiat ostrołęcki',
    ],
  },

  // 4. PRACE WYSOKOŚCIOWE
  {
    slug: 'prace-wysokosciowe',
    name: 'Prace wysokościowe',
    h1: 'Prace na wysokościach – Ostrołęka i okolice',
    title: 'Prace wysokościowe Ostrołęka – rynny, montaże, elewacje',
    metaDescription:
      'Prace na wysokościach w Ostrołęce: czyszczenie rynien, montaż reklam i oświetlenia, elewacje, inspekcje dachów i dekoracje świąteczne. Zwyżka lub liny.',
    excerpt:
      'Montaże, czyszczenie rynien, drobne prace przy elewacjach, inspekcje i dekoracje świąteczne – ze zwyżki lub z dostępu linowego.',
    lead:
      'Wykonujemy prace na wysokościach w Ostrołęce i okolicach do 60 km: czyszczenie rynien, montaż reklam, oświetlenia i kamer, drobne prace przy elewacjach, inspekcje dachów oraz wieszanie dekoracji świątecznych. Pracujemy z podnośnika koszowego lub na linach, dla domów, firm, wspólnot i instytucji. Wycena jest bezpłatna i ustalana po krótkiej rozmowie.',
    illustration: 'height',
    facts: [
      { label: 'Dostęp', value: 'Zwyżka lub liny' },
      { label: 'Dla kogo', value: 'Domy, firmy, wspólnoty' },
      { label: 'Zasięg', value: 'do 60 km' },
      { label: 'Wycena', value: 'Bezpłatna' },
    ],
    includes: [
      'Czyszczenie rynien i rur spustowych z liści i igliwia',
      'Montaż i demontaż reklam, banerów i szyldów',
      'Montaż oświetlenia, kamer i czujników na elewacjach',
      'Drobne prace przy elewacjach i obróbkach blacharskich',
      'Inspekcje i dokumentacja zdjęciowa dachów oraz kominów',
      'Montaż siatek ochronnych i zabezpieczeń przed ptakami',
      'Wieszanie i zdejmowanie dekoracji świątecznych',
      'Wymiana opraw i żarówek na wysokości',
    ],
    steps: [
      { name: 'Opis i zdjęcia', text: 'Opisujesz zadanie i wysyłasz zdjęcie miejsca. Na tej podstawie wstępnie dobieramy sposób dostępu – zwyżkę lub liny.' },
      { name: 'Ustalenia i wycena', text: 'Potwierdzamy zakres, materiały dostarczane przez klienta, miejsce postoju sprzętu i bezpłatnie wyceniamy prace.' },
      { name: 'Zabezpieczenie strefy', text: 'W dniu prac wygradzamy teren pod stanowiskiem, aby nikt nie znalazł się w strefie spadających przedmiotów.' },
      { name: 'Wykonanie i odbiór', text: 'Realizujemy zadanie, sprzątamy po sobie i pokazujemy efekt – przy inspekcjach przekazujemy zdjęcia z wysokości.' },
    ],
    sections: [
      {
        h2: 'Jakie prace na wysokościach wykonujemy w Ostrołęce?',
        paragraphs: [
          'Zajmujemy się zadaniami, które wymagają bezpiecznego dostępu do dachu, elewacji lub wysoko zawieszonych elementów, a na które nie opłaca się stawiać rusztowania. To m.in. czyszczenie rynien, montaż i demontaż reklam, instalacja oświetlenia i kamer, przeglądy dachów, a przed świętami – wieszanie iluminacji na drzewach i budynkach.',
          'Przy zadaniach instalacyjnych możemy wykonać prosty montaż sami albo zapewnić dostęp dla Twojego elektryka czy dekarza. Zakres dzielimy tak, żeby każdy robił to, na czym się zna.',
        ],
      },
      {
        h2: 'Zwyżka czy dostęp linowy przy pracach wysokościowych?',
        paragraphs: [
          '<a href="/uslugi/podnosnik-koszowy-zwyzka/">Zwyżka</a> jest najszybsza, gdy da się podjechać pod budynek, a praca obejmuje kilka punktów na ścianie lub dachu. Kosz pozwala swobodnie przenosić materiały i narzędzia oraz przesuwać się wzdłuż elewacji.',
          'Liny wybieramy tam, gdzie podnośnik nie dojedzie – na podwórkach otoczonych zabudową, nad skarpami czy od strony ogrodu bez wjazdu. Dostęp linowy wymaga solidnych punktów kotwiczenia na dachu lub konstrukcji, dlatego sprawdzamy je przy wycenie.',
        ],
      },
      {
        h2: 'Czyszczenie rynien – kiedy i dlaczego?',
        paragraphs: [
          'Rynny najlepiej czyścić jesienią, po opadnięciu liści, oraz wiosną. Zapchana rynna przelewa wodę po elewacji, zawilgaca fundamenty, a zimą zamienia się w bryłę lodu, która obciąża haki i sprzyja powstawaniu sopli.',
          'Przy domach otoczonych drzewami warto połączyć czyszczenie z <a href="/uslugi/pielegnacja-drzew/">przycięciem gałęzi</a> zwisających nad dachem – dzięki temu liści i igliwia w rynnach będzie mniej.',
        ],
      },
      {
        h2: 'Inspekcje dachów i elewacji z kosza',
        paragraphs: [
          'Przegląd z podnośnika pozwala obejrzeć pokrycie, kominy, obróbki i mocowania bez wchodzenia na śliski dach. Wykonujemy zdjęcia, które możesz przekazać dekarzowi, zarządcy budynku lub ubezpieczycielowi po szkodzie.',
          'Inspekcja przydaje się szczególnie po wichurach, gdy trzeba szybko sprawdzić, czy nie przesunęły się dachówki lub blacha. Nie wystawiamy ekspertyz budowlanych – dokumentujemy stan, a ocenę techniczną pozostawiamy uprawnionej osobie.',
        ],
      },
      {
        h2: 'Co klient przygotowuje przed pracami na wysokości?',
        paragraphs: [
          'Przed przyjazdem przygotuj materiały, które mamy zamontować – reklamę, oprawy, kamery, kołki i elementy mocujące zalecane przez producenta – oraz informację o przebiegu instalacji w ścianie. Dzięki temu nie trafimy wiertłem w przewód ani rurę.',
          'Zadbaj też o wolne miejsce pod stanowiskiem pracy i dostęp do zasilania, jeśli potrzebne są elektronarzędzia. Przy obiektach publicznych warto wcześniej poinformować użytkowników o czasowym wyłączeniu fragmentu wejścia lub chodnika.',
        ],
      },
      {
        h2: 'Dekoracje świąteczne dla firm, gmin i wspólnot',
        paragraphs: [
          'Iluminacje na wysokich drzewach, latarniach i fasadach wieszamy z kosza, a po sezonie je zdejmujemy. Termin montażu warto zarezerwować już jesienią, bo w listopadzie i grudniu zapotrzebowanie jest duże.',
          'Klient zapewnia dekoracje i dostęp do zasilania, my – bezpieczny montaż i demontaż. Jeśli planujesz kilka lokalizacji, podaj je od razu, a ułożymy trasę w jednym dniu. Zapytania kieruj przez <a href="/kontakt/">kontakt</a>.',
        ],
      },
    ],
    faq: [
      { q: 'Czy opłaca się wynająć zwyżkę do czyszczenia rynien?', a: 'Tak, przy domach piętrowych i budynkach z wysokim okapem zwyżka jest szybsza i bezpieczniejsza niż drabina, a jednocześnie tańsza niż rusztowanie. Przy okazji można obejrzeć pokrycie dachu i obróbki. Opłacalność rośnie, gdy łączysz kilka drobnych zadań w jednym terminie.' },
      { q: 'Czy montujecie reklamy dostarczone przez klienta?', a: 'Tak, montujemy banery, szyldy i kasetony dostarczone przez klienta, o ile mocowanie jest przewidziane przez producenta i konstrukcja budynku je utrzyma. Podłączenie zasilania podświetlanych reklam powinien wykonać elektryk z uprawnieniami – możemy zapewnić mu dostęp z kosza.' },
      { q: 'Czy wykonujecie prace na wysokości dla wspólnot mieszkaniowych?', a: 'Tak, obsługujemy wspólnoty i zarządców nieruchomości: czyszczenie rynien, przeglądy, montaż zabezpieczeń przed ptakami czy drobne naprawy obróbek. Przy budynkach wielorodzinnych ustalamy wcześniej, kiedy wyłączyć z użytku fragment chodnika lub parkingu.' },
      { q: 'Czy prace wysokościowe są możliwe zimą?', a: 'Tak, ale tylko przy bezpiecznej pogodzie, gdy krótki dzień pozwala zakończyć pracę przed zmrokiem – bez oblodzenia, silnego wiatru i intensywnych opadów. Zimą często łączymy prace wysokościowe z <a href="/uslugi/odsniezanie-dachow/">odśnieżaniem dachów</a> i usuwaniem sopli, które zagrażają przechodniom.' },
      { q: 'Jak wcześnie zamówić montaż dekoracji świątecznych?', a: 'Najlepiej zarezerwować termin w październiku lub na początku listopada. Bliżej świąt zapotrzebowanie na podnośnik rośnie, a dostępne terminy szybko się kończą. Warto od razu ustalić także datę demontażu po sezonie oraz miejsca podłączenia zasilania.' },
    ],
    serviceType: 'Prace wysokościowe',
    keywords: [
      'prace wysokościowe Ostrołęka',
      'prace na wysokości Ostrołęka',
      'czyszczenie rynien Ostrołęka',
      'montaż reklam na wysokości Ostrołęka',
      'inspekcja dachu zwyżką',
      'montaż dekoracji świątecznych zwyżka',
      'usługi alpinistyczne Ostrołęka',
    ],
  },

  // 5. PIELĘGNACJA DRZEW
  {
    slug: 'pielegnacja-drzew',
    name: 'Pielęgnacja drzew',
    h1: 'Pielęgnacja i przycinanie drzew – Ostrołęka',
    title: 'Przycinanie i pielęgnacja drzew Ostrołęka – ogrodnik',
    metaDescription:
      'Przycinanie drzew w Ostrołęce: formowanie i redukcja koron, usuwanie posuszu, cięcia przy dachu i drodze. Pielęgnacja drzew i ogrodów. Bezpłatna wycena.',
    excerpt:
      'Przycinanie koron, usuwanie suchych gałęzi, cięcia przy budynkach i drogach oraz prace ogrodnicze – z liny lub ze zwyżki.',
    lead:
      'Pielęgnujemy drzewa w Ostrołęce i okolicach: przycinamy i formujemy korony, usuwamy suche i niebezpieczne gałęzie, odsuwamy konary od dachów, linii i dróg. Wykonujemy też prace ogrodnicze. Tniemy tak, aby drzewo zostało zdrowe i stabilne, z liny lub ze zwyżki. Zakres i koszt ustalamy przy bezpłatnych oględzinach.',
    illustration: 'garden',
    facts: [
      { label: 'Zakres', value: 'Korony, posusz, formowanie' },
      { label: 'Dostęp', value: 'Lina lub zwyżka' },
      { label: 'Pora cięć', value: 'Dobierana do gatunku' },
      { label: 'Wycena', value: 'Bezpłatna' },
    ],
    includes: [
      'Usuwanie posuszu i gałęzi zagrażających bezpieczeństwu',
      'Redukcja i prześwietlanie koron',
      'Cięcia formujące młodych drzew',
      'Odsuwanie gałęzi od dachów, elewacji i linii',
      'Podnoszenie koron nad drogą, chodnikiem i podjazdem',
      'Przycinanie drzew owocowych – do ustalenia',
      'Prace ogrodnicze: porządkowanie zadrzewień i krzewów',
      'Uprzątnięcie gałęzi lub rozdrobnienie – do ustalenia',
    ],
    steps: [
      { name: 'Oględziny', text: 'Oceniamy kondycję drzewa, budowę korony i cel cięcia – bezpieczeństwo, doświetlenie, odsunięcie od budynku czy estetyka.' },
      { name: 'Plan cięć', text: 'Proponujemy zakres przycinki i termin dopasowany do gatunku, tak aby nie osłabić drzewa nadmiernym cięciem.' },
      { name: 'Przycinanie', text: 'Tniemy z liny lub ze zwyżki, wykonując cięcia przy obrączce gałęzi, bez pozostawiania kikutów.' },
      { name: 'Porządki', text: 'Zbieramy gałęzie i porządkujemy teren. Rozdrobnienie lub wywóz ustalamy wcześniej.' },
    ],
    sections: [
      {
        h2: 'Po co przycinać drzewa?',
        paragraphs: [
          'Dobrze wykonana przycinka zmniejsza ryzyko, że suchy konar spadnie na samochód lub przechodnia, poprawia doświetlenie ogrodu i domu oraz odsuwa gałęzie od dachu i rynien. U młodych drzew cięcia formujące kształtują stabilną koronę, która w przyszłości nie będzie wymagała drastycznych interwencji.',
          'Pielęgnacja jest też alternatywą dla wycinki – drzewo, które przeszkadza tylko fragmentem korony, często da się zachować po redukcji. O tym, czy to wystarczy, rozmawiamy przy oględzinach, zanim zdecydujesz o <a href="/uslugi/wycinka-drzew/">usunięciu drzewa</a>.',
        ],
      },
      {
        h2: 'Kiedy najlepiej przycinać drzewa?',
        paragraphs: [
          'Większość drzew liściastych przycina się w okresie spoczynku, od późnej jesieni do przedwiośnia, gdy dobrze widać budowę korony. Usuwanie suchych i złamanych gałęzi można wykonać o każdej porze roku, bo nie osłabia drzewa.',
          'Niektóre gatunki, np. klony i brzozy, silnie „płaczą” sokiem przy cięciach wczesną wiosną, dlatego u nich lepszy bywa inny termin. W sezonie lęgowym przed pracami w koronie sprawdzamy obecność gniazd.',
        ],
      },
      {
        h2: 'Czego unikamy przy przycinaniu drzew?',
        paragraphs: [
          'Nie ogławiamy drzew, czyli nie ścinamy całej korony do grubych konarów. Taki zabieg osłabia drzewo, sprzyja próchnicy i wybijaniu słabo przyrośniętych pędów, które po kilku latach stają się niebezpieczne. Usunięcie zbyt dużej części korony może też zostać uznane za jej uszkodzenie w rozumieniu przepisów o ochronie przyrody.',
          'Tniemy przy obrączce gałęzi, nie zostawiamy kikutów i nie zdzieramy kory. Zakres jednorazowej przycinki dobieramy tak, aby drzewo mogło się zregenerować.',
        ],
        bullets: [
          'bez ogławiania i „tabletowania” koron',
          'cięcia przy obrączce, bez kikutów',
          'umiarkowany zakres jednorazowej redukcji',
          'termin dopasowany do gatunku',
        ],
      },
      {
        h2: 'Przycinanie gałęzi nad dachem, drogą i ogrodzeniem',
        paragraphs: [
          'Gałęzie opierające się o dach niszczą pokrycie i zapychają rynny, a konary nad drogą mogą ograniczać widoczność lub przejazd wysokich pojazdów. Przy takich cięciach duże fragmenty opuszczamy na linach, żeby nie uszkodzić dachu ani ogrodzenia.',
          'Gdy dojazd jest dobry, pracujemy ze <a href="/uslugi/podnosnik-koszowy-zwyzka/">zwyżki</a>; w ogrodach bez wjazdu – z liny. Przy okazji cięć przy dachu możemy też <a href="/uslugi/prace-wysokosciowe/">wyczyścić rynny</a>.',
        ],
      },
      {
        h2: 'Jak rozpoznać, że drzewo potrzebuje pielęgnacji?',
        paragraphs: [
          'Najczęstsze sygnały to suche gałęzie w koronie, konary ocierające się o siebie lub o dach, jednostronnie rozrośnięta korona, ograniczona widoczność przy wjeździe oraz pędy odrastające masowo po dawnym ogłowieniu. Warto też obserwować rany po złamaniach i owocniki grzybów na pniu lub konarach.',
          'Część tych objawów wymaga tylko korekty korony, inne mogą oznaczać, że drzewo jest niestabilne. Przy oględzinach mówimy wprost, czy wystarczy przycinka, czy bezpieczniej będzie rozważyć <a href="/uslugi/wycinka-alpinistyczna/">usunięcie drzewa niebezpiecznego</a>.',
        ],
      },
      {
        h2: 'Ogrodnik w Ostrołęce – prace przy zadrzewieniach',
        paragraphs: [
          'Oprócz pracy w koronach porządkujemy zaniedbane zadrzewienia: usuwamy samosiewy, przerzedzamy zarośnięte fragmenty działek i przycinamy wyrośnięte krzewy. Zakres prac ogrodniczych ustalamy indywidualnie, na miejscu.',
          'Działamy w Ostrołęce i okolicznych gminach – sprawdź <a href="/obszar-dzialania/">obszar działania</a> i zadzwoń, aby umówić bezpłatne oględziny.',
        ],
      },
    ],
    faq: [
      { q: 'Czy na przycięcie drzewa potrzebne jest pozwolenie?', a: 'Zwykle nie – prawidłowe cięcia pielęgnacyjne, usuwanie posuszu i gałęzi nie wymagają zgłoszenia. Uważać trzeba jednak z zakresem: usunięcie zbyt dużej części korony może zostać potraktowane jako uszkodzenie drzewa. Dlatego nie wykonujemy ogławiania i planujemy cięcia z umiarem.' },
      { q: 'Jak często przycinać drzewa w ogrodzie?', a: 'Dojrzałe drzewa zwykle wymagają przeglądu i ewentualnych cięć co kilka lat, młode – częstszych cięć formujących w pierwszych latach po posadzeniu. Suche i złamane gałęzie usuwa się na bieżąco, gdy tylko się pojawią, bo mogą spaść bez ostrzeżenia.' },
      { q: 'Czy przycinacie drzewa owocowe?', a: 'Możemy przyciąć starsze, wysokie drzewa owocowe, do których trudno dotrzeć z drabiny, a także usunąć z nich posusz. Zakres cięć i termin – zwykle w okresie bezlistnym – ustalamy przy oględzinach, w zależności od gatunku i kondycji drzewa.' },
      { q: 'Czy przycinka może zastąpić wycinkę?', a: 'Często tak. Jeśli drzewo jest zdrowe, a przeszkadza tylko część korony – np. gałęzie nad dachem lub zacieniające okna – redukcja korony rozwiązuje problem bez usuwania drzewa i bez formalności związanych z wycinką.' },
      { q: 'Co robicie z gałęziami po przycince?', a: 'Gałęzie zbieramy i układamy we wskazanym miejscu albo – po wcześniejszym ustaleniu – rozdrabniamy lub wywozimy. Grubsze konary możemy pociąć na kawałki nadające się na opał. Sposób zagospodarowania urobku ustalamy przy wycenie.' },
    ],
    serviceType: 'Pielęgnacja drzew',
    keywords: [
      'przycinanie drzew Ostrołęka',
      'pielęgnacja drzew Ostrołęka',
      'ogrodnik Ostrołęka',
      'przycinka gałęzi nad dachem',
      'usuwanie suchych gałęzi Ostrołęka',
      'redukcja korony drzewa',
      'formowanie koron drzew',
    ],
  },

  // 6. ODŚNIEŻANIE DACHÓW
  {
    slug: 'odsniezanie-dachow',
    name: 'Odśnieżanie dachów',
    h1: 'Odśnieżanie dachów Ostrołęka – hale i domy',
    title: 'Odśnieżanie dachów Ostrołęka – hale, domy, sople',
    metaDescription:
      'Odśnieżanie dachów w Ostrołęce i okolicach: płaskie dachy hal, magazynów i domów, usuwanie sopli i nawisów śnieżnych. Sezon zimowy – zadzwoń po termin.',
    excerpt:
      'Zimowe odśnieżanie dachów hal, magazynów i domów oraz usuwanie sopli i nawisów – z liny lub ze zwyżki.',
    lead:
      'Odśnieżamy dachy w Ostrołęce i okolicach w sezonie zimowym: płaskie dachy hal, magazynów i budynków usługowych oraz dachy domów. Usuwamy też sople i nawisy śnieżne zagrażające przechodniom. Pracujemy z asekuracją linową lub z podnośnika koszowego. Zgłoszenia przyjmujemy telefonicznie, a termin ustalamy według kolejności i pilności.',
    illustration: 'snow',
    facts: [
      { label: 'Sezon', value: 'Zima' },
      { label: 'Obiekty', value: 'Hale, magazyny, domy' },
      { label: 'Zakres', value: 'Śnieg, sople, nawisy' },
      { label: 'Asekuracja', value: 'Liny lub zwyżka' },
    ],
    includes: [
      'Odśnieżanie płaskich dachów hal i magazynów',
      'Odśnieżanie dachów spadzistych domów',
      'Usuwanie sopli z okapów i rynien',
      'Strącanie nawisów śnieżnych nad wejściami i chodnikami',
      'Zabezpieczenie strefy pod dachem na czas prac',
      'Praca z asekuracją linową lub ze zwyżki',
      'Prace dla firm, wspólnot i instytucji',
    ],
    steps: [
      { name: 'Zgłoszenie', text: 'Podajesz rodzaj i przybliżoną powierzchnię dachu, lokalizację oraz grubość pokrywy śnieżnej. Zdjęcie ułatwia ocenę pilności.' },
      { name: 'Ocena i termin', text: 'Ustalamy sposób dostępu do dachu, punkty asekuracji i termin. Obiekty z dużym obciążeniem śniegiem traktujemy priorytetowo.' },
      { name: 'Zabezpieczenie terenu', text: 'Wygradzamy strefę pod krawędzią dachu, aby spadający śnieg i lód nikogo nie zranił.' },
      { name: 'Odśnieżanie', text: 'Usuwamy śnieg warstwami, nie naruszając pokrycia, świetlików ani instalacji dachowych, a na koniec strącamy sople i nawisy.' },
    ],
    sections: [
      {
        h2: 'Kiedy odśnieżyć dach hali lub domu?',
        paragraphs: [
          'Śnieg warto usunąć, zanim jego ciężar zbliży się do dopuszczalnego obciążenia konstrukcji. Szczególnie niebezpieczny jest mokry, zbity śnieg i lód powstały po odwilży i ponownym mrozie – przy tej samej grubości waży on wielokrotnie więcej niż świeży puch.',
          'Właściciel lub zarządca obiektu budowlanego ma obowiązek usuwać śnieg i lód z dachu, gdy zachodzi taka potrzeba, a przy dużych obiektach – kontrolować obciążenie. Niepokojące sygnały to ugięcia dźwigarów, pękanie tynków, zacinanie się drzwi i bram.',
        ],
      },
      {
        h2: 'Jak bezpiecznie odśnieżamy dachy?',
        paragraphs: [
          'Na dachu pracujemy z asekuracją linową przypiętą do stałych punktów konstrukcji albo z kosza podnośnika, gdy da się podjechać pod budynek. Na płaskich dachach szczególnie uważamy na świetliki, które pod śniegiem bywają niewidoczne.',
          'Śnieg usuwamy narzędziami, które nie uszkadzają pokrycia – zostawiamy cienką warstwę na membranie lub papie, zamiast skrobać do samego podłoża. Zrzucany śnieg trafia do wygrodzonej strefy, w której nikt nie przebywa.',
        ],
        bullets: [
          'asekuracja linowa lub praca z kosza',
          'ochrona świetlików, wywietrzników i instalacji',
          'równomierne odciążanie połaci',
          'wygrodzona strefa zrzutu śniegu',
        ],
      },
      {
        h2: 'Sople i nawisy śnieżne nad chodnikiem',
        paragraphs: [
          'Sople na okapach i nawisy na krawędziach dachów to realne zagrożenie dla przechodniów, szczególnie przy budynkach stojących tuż przy chodniku. Usuwamy je z podnośnika albo z liny, zanim samoistnie oderwą się podczas odwilży.',
          'Częstą przyczyną sopli są zapchane rynny – topniejąca woda nie ma ujścia i zamarza na krawędzi. Jesienią warto więc zlecić <a href="/uslugi/prace-wysokosciowe/">czyszczenie rynien</a>, co ograniczy problem zimą.',
        ],
      },
      {
        h2: 'Co wpływa na koszt odśnieżania dachu?',
        paragraphs: [
          'Na wycenę wpływają powierzchnia i kształt dachu, grubość i rodzaj pokrywy (puch, mokry śnieg, lód), sposób dostępu oraz liczba przeszkód, takich jak świetliki czy instalacje. Znaczenie ma też odległość obiektu od Ostrołęki i pilność zlecenia.',
          'Przy obiektach, które co zimę wymagają odśnieżania, warto ustalić zasady współpracy przed sezonem, aby przy intensywnych opadach nie czekać w kolejce. Kontakt znajdziesz w zakładce <a href="/kontakt/">kontakt</a>.',
        ],
      },
      {
        h2: 'Co zrobić przed przyjazdem ekipy odśnieżającej?',
        paragraphs: [
          'Zapewnij dostęp do dachu – klucze do wyłazu, drabiny stałej lub drzwi technicznych – oraz odśnieżony dojazd, jeśli ma podjechać zwyżka. Wskaż miejsca, gdzie pod śniegiem mogą znajdować się świetliki, wywietrzniki, kable grzewcze lub instalacja fotowoltaiczna.',
          'Wyprowadź samochody i ludzi ze strefy pod krawędzią dachu i zastanów się, gdzie zrzucony śnieg nie zablokuje wjazdu ani wyjść ewakuacyjnych. Przy halach czynnych w trakcie prac ustalamy z użytkownikiem kolejność odciążania połaci.',
        ],
      },
      {
        h2: 'Odśnieżanie dachów w okolicach Ostrołęki',
        paragraphs: [
          'Poza miastem obsługujemy hale produkcyjne, magazyny, gospodarstwa i domy w promieniu około 60 km. W czasie dużych opadów zgłoszeń jest wiele, dlatego priorytet mają obiekty z dużym obciążeniem śniegiem i dachy nad miejscami, w których przebywają ludzie.',
          'Zakres dojazdów opisujemy na stronie <a href="/obszar-dzialania/">obszar działania</a>. Poza sezonem zimowym ten sam sprzęt i zespół wykonuje <a href="/uslugi/podnosnik-koszowy-zwyzka/">usługi zwyżką</a>.',
        ],
      },
    ],
    faq: [
      { q: 'Kiedy dach płaski wymaga odśnieżenia?', a: 'Dach płaski wymaga odśnieżenia, gdy pokrywa śnieżna zbliża się do obciążenia przewidzianego w projekcie, zwłaszcza po odwilży i ponownym mrozie. Przy większych obiektach grubość i ciężar śniegu powinien kontrolować zarządca. Jeśli widzisz ugięcia konstrukcji lub pęknięcia, zadzwoń od razu.' },
      { q: 'Czy odśnieżacie dachy domów jednorodzinnych?', a: 'Tak, odśnieżamy także dachy domów, zwłaszcza o małym spadku lub z miejscami, gdzie śnieg zalega – kosze dachowe, lukarny, przestrzeń za kominem. Najczęściej zlecane jest jednak usunięcie sopli i nawisów nad wejściem, tarasem i podjazdem.' },
      { q: 'Czy odśnieżanie może uszkodzić pokrycie dachu?', a: 'Przy właściwej technice nie. Nie skrobiemy do samej membrany czy papy, tylko zostawiamy cienką warstwę śniegu, a przy świetlikach i instalacjach pracujemy ręcznie. Ryzyko uszkodzeń rośnie przy samodzielnym odśnieżaniu metalowymi łopatami lub skuwaniu lodu.' },
      { q: 'Czy trzeba zamawiać odśnieżanie z wyprzedzeniem?', a: 'Przy pojedynczym zleceniu wystarczy telefon, ale w czasie intensywnych opadów zgłoszeń jest dużo i terminy się wydłużają. Właściciele hal i magazynów, które co roku wymagają odśnieżania, powinni ustalić współpracę jeszcze przed zimą.' },
      { q: 'Czy usuwacie sople z budynków przy chodnikach?', a: 'Tak, usuwamy sople i nawisy z budynków stojących przy chodnikach i wejściach, najczęściej z podnośnika koszowego. Na czas prac wygradzamy fragment chodnika, a jeśli sprzęt musi stanąć na drodze, pomagamy ustalić, czy potrzebna jest zgoda zarządcy.' },
    ],
    serviceType: 'Odśnieżanie dachów',
    keywords: [
      'odśnieżanie dachów Ostrołęka',
      'odśnieżanie dachu hali',
      'odśnieżanie dachów płaskich Ostrołęka',
      'usuwanie sopli Ostrołęka',
      'usuwanie nawisów śnieżnych',
      'odśnieżanie dachu domu',
      'odśnieżanie dachów magazynów',
    ],
  },
];
