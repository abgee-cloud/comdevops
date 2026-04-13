// src/data/navItems.ts
// ABG DCD — IS&CT Unit navigation

export interface NavItem {
  text: string;
  href: string;
}

export const navItems: NavItem[] = [
  { text: 'Home',         href: '/'             },
  { text: 'About DCD',   href: '/about'         },
  { text: 'Programmes',  href: '/programmes'    },
  { text: 'Publications',href: '/publications'  },
  { text: 'News',        href: '/news'          },
  { text: 'Contact',     href: '/contact'       },
];
