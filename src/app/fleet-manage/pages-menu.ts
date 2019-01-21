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
    title: 'Fleet Management',
    group: true
  },
  {
    title: 'Reminders',
    icon: 'nb-keypad',
    children: [
      {
        title: 'Service Reminders',
        link: '/fleet-manage/reminders/service/list'
      },
      {
        title: 'Vehicle Renewals',
        link: '/fleet-manage/reminders/renewal/list'
      }
    ]
  },
  {
    title: 'Vehicles',
    icon: 'nb-compose',
    children: [
      {
        title: 'Vehicle List',
        link: '/fleet-manage/vehicles/list'
      }
    ]
  }
];
