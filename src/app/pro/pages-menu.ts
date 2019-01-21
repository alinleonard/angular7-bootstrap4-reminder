import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Core',
    group: true
  },
  {
    title: 'Platform',
    icon: 'ion-cloud',
    link: '/pages/dashboard',
    home: true
  },
  {
    title: 'Pro',
    group: true
  },
  {
    title: 'Components',
    icon: 'nb-keypad',
    children: [
      {
        title: 'Breadcrumb',
        link: '/pro/components/breadcrumb'
      }
    ]
  },

];
