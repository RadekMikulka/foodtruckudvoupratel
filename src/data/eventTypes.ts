export interface EventType {
  emoji: string;
  name: string;
  nameLine1: string;
  nameLine2: string;
  tagline: string;
  accent: 'teal' | 'pink' | 'orange' | 'yellow';
}

export const eventTypes: EventType[] = [
  {
    emoji: '🎸',
    name: 'Hudební festivaly',
    nameLine1: 'Hudební',
    nameLine2: 'festivaly',
    tagline: 'Kde hrají kapely, kručí břicha a ke štěstí chybí už jen něco pořádného do ruky. Přijedeme, nakrmíme, zmizíme. Skoro jako dobrý refrén.',
    accent: 'pink',
  },
  {
    emoji: '🍺',
    name: 'Pivní & vinné slavnosti',
    nameLine1: 'Pivní & vinné',
    nameLine2: 'slavnosti',
    tagline: 'K dobrému pivu patří dobré jídlo. K dobrému vínu taky. A k nám patří fronta lidí, kteří si šli původně „jen něco malého".',
    accent: 'orange',
  },
  {
    emoji: '🏙️',
    name: 'Městské slavnosti',
    nameLine1: 'Městské',
    nameLine2: 'slavnosti',
    tagline: 'Každé město si zaslouží trochu mexického chaosu, vůně z grilu a lidi, kteří u jídla zapomenou kontrolovat program.',
    accent: 'teal',
  },
  {
    emoji: '💒',
    name: 'Svatby',
    nameLine1: 'Svatební',
    nameLine2: 'akce',
    tagline: 'Raut je fajn, ale hosté si budou stejně nejvíc pamatovat, co jedli ve dvě ráno. My dodáme romantiku zabalenou v tortille.',
    accent: 'pink',
  },
  {
    emoji: '🎉',
    name: 'Narozeninové párty',
    nameLine1: 'Narozeninové',
    nameLine2: 'párty',
    tagline: 'Dort sfouknete jednou. Burrito si budete pamatovat déle. Přivezeme jídlo, náladu a důvod, proč se oslava protáhne do rána.',
    accent: 'yellow',
  },
  {
    emoji: '🤝',
    name: 'Firemní večírky',
    nameLine1: 'Firemní',
    nameLine2: 'večírky',
    tagline: 'Pro kolegy, kteří si zaslouží víc než chlebíček a vlažné prosecco. Teambuilding neřešíme. Teambuilding krmíme. To je náš přístup.',
    accent: 'teal',
  },
  {
    emoji: '🌿',
    name: 'Zahradní párty',
    nameLine1: 'Zahradní',
    nameLine2: 'párty',
    tagline: 'Slunce, tráva, kamarádi a mexická gastrojízda pod širým nebem. Vy řešíte hosty, my řešíme hlad. Férová dělba práce.',
    accent: 'teal',
  },
  {
    emoji: '🏆',
    name: 'Sportovní akce',
    nameLine1: 'Sportovní',
    nameLine2: 'akce',
    tagline: 'Po výkonu přichází hlad. A po hladu přicházíme my. Burrito jako medaile, jen teplejší, šťavnatější a bez nutnosti stát na bedně.',
    accent: 'orange',
  },
  {
    emoji: '🎪',
    name: 'Komunitní trhy',
    nameLine1: 'Komunitní',
    nameLine2: 'trhy',
    tagline: 'Tam, kde se potká soused se sousedem a děti s limonádou, chceme být taky. Ideálně uprostřed dění a blízko hladových lidí.',
    accent: 'pink',
  },
  {
    emoji: '🎭',
    name: 'Kulturní festivaly',
    nameLine1: 'Kulturní',
    nameLine2: 'festivaly',
    tagline: 'Umění živí duši. My se postaráme o zbytek těla. Protože i člověk po hlubokém divadelním zážitku potřebuje něco do žaludku.',
    accent: 'teal',
  },
  {
    emoji: '⛺',
    name: 'Trampské akce',
    nameLine1: 'Trampské',
    nameLine2: 'akce',
    tagline: 'Pro dobrodruhy a lidi, kteří tvrdí, že v přírodě chutná všechno líp. My jen dokazujeme, že to může chutnat ještě o trochu líp.',
    accent: 'orange',
  },
  {
    emoji: '🎓',
    name: 'Studentské akce',
    nameLine1: 'Studentské',
    nameLine2: 'akce',
    tagline: 'Studenti vědí, co je dobré jídlo, dobrá cena a dobrá záminka nejít hned domů. My přijedeme vstříc žaludku i rozpočtu.',
    accent: 'yellow',
  },
];
