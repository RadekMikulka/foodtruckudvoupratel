export interface MenuItem {
  name: string;
  nameLine1: string;
  nameLine2: string;
  description: string;
  tagline: string;
  spicy: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  icon: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'burritos',
    name: 'BURRITOS',
    icon: 'burrito',
    items: [
      {
        name: 'Kuřecí burrito',
        nameLine1: 'Kuřecí',
        nameLine2: 'burrito',
        description: 'Tortilla plněná šťavnatým kuřecím masem, rajčaty, paprikou, salátem, fazolemi, cibulkou, cheddarem, eidamem, jalapeños a enchilada omáčkou.',
        tagline: 'Pořádná porce do ruky, která zasytí.',
        spicy: true,
      },
      {
        name: 'Vepřové burrito',
        nameLine1: 'Vepřové',
        nameLine2: 'burrito',
        description: 'Tortilla plněná jemnou vepřovou panenkou, fazolemi, zeleninou, červenou i bílou cibulkou, sýrem, cheddarem, jalapeños a enchilada omáčkou.',
        tagline: 'Mexická klasika s poctivou masovou náloží.',
        spicy: true,
      },
      {
        name: 'Zeleninové burrito',
        nameLine1: 'Zeleninové',
        nameLine2: 'burrito',
        description: 'Celozrnná tortilla s rajčaty, paprikou, salátem, fazolemi, cibulkou, sýrem, cheddarem, jalapeños a enchilada omáčkou.',
        tagline: 'Lehčí varianta bez masa, ale pořád plná chuti.',
        spicy: true,
      },
    ],
  },
  {
    id: 'quesadillas',
    name: 'QUESADILLAS',
    icon: 'quesadilla',
    items: [
      {
        name: 'Kuřecí quesadilla',
        nameLine1: 'Kuřecí',
        nameLine2: 'quesadilla',
        description: 'Zapečená tortilla s kuřecím masem, sýrem, cheddarem, rajčaty, cibulkou, jalapeños a salsou.',
        tagline: 'Rozteklý sýr, šťavnaté kuře, mexická pohoda.',
        spicy: true,
      },
      {
        name: 'Vepřová quesadilla',
        nameLine1: 'Vepřová',
        nameLine2: 'quesadilla',
        description: 'Zapečená tortilla s vepřovou panenkou, cheddarem, eidamem, rajčaty, cibulkou, jalapeños a salsou.',
        tagline: 'Sýrová, masová, křupavá. Přesně tak, jak má být.',
        spicy: true,
      },
    ],
  },
  {
    id: 'nachos',
    name: 'NACHOS',
    icon: 'nachos',
    items: [
      {
        name: 'Nachos se salsou',
        nameLine1: 'Nachos',
        nameLine2: 'se salsou',
        description: 'Kukuřičné nachos chipsy se svěží rajčatovou salsou.',
        tagline: 'Ideální na zobání nebo jako lehčí snack.',
        spicy: false,
      },
      {
        name: 'Nachos se sýrem',
        nameLine1: 'Nachos',
        nameLine2: 'se sýrem',
        description: 'Kukuřičné nachos chipsy zapečené se sýrem a rajčatovou salsou.',
        tagline: 'Jednoduchá mexická klasika, která mizí rychle.',
        spicy: false,
      },
      {
        name: 'Nachos all inclusive',
        nameLine1: 'Nachos',
        nameLine2: 'all inclusive',
        description: 'Kukuřičné nachos chipsy zapečené se sýrem, čerstvou zeleninou a rajčatovou salsou.',
        tagline: 'Pořádně naložené nachos pro ty, kteří chtějí všechno.',
        spicy: true,
      },
    ],
  },
];
