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
    title: 'Pro docs',
    group: true
  },
  {
    title: 'Pro',
    link: '/pro/'
  },
  {
    title: 'Fleet Management',
    group: true
  },
  {
    title: 'Fleet Manage',
    link: '/fleet-manage/'
  }
];
