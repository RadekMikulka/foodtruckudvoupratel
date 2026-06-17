export interface Event {
  name: string;
  nameLine1: string;
  nameLine2: string;
  date: string;
  month: string;
  location: string;
  url: string | null;
}

export const events: Event[] = [
  {
    name: 'Jílovské pivní slavnosti',
    nameLine1: 'Jílovské pivní',
    nameLine2: 'slavnosti',
    date: '19.–20. června',
    month: 'červen',
    location: 'Jílové u Prahy',
    url: 'https://www.jilovskepivnislavnosti.cz',
  },
  {
    name: 'Třebsínské zvonění',
    nameLine1: 'Třebsínské',
    nameLine2: 'zvonění',
    date: '3.–4. července',
    month: 'červenec',
    location: 'Třebsín',
    url: 'https://www.trebsinskezvoneni.cz',
  },
  {
    name: 'Trampské Pikovice',
    nameLine1: 'Trampské',
    nameLine2: 'Pikovice',
    date: '12. září',
    month: 'září',
    location: 'Pikovice',
    url: 'https://www.trampskepikovice.cz',
  },
];
