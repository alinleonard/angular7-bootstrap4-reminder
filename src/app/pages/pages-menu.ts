import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true
  },
  {
    title: 'IoT',
    group: true
  },
  {
    title: 'Home',
    icon: 'ion-home',
    link: '/pages/iot/'
  },
  {
    title: 'AUTO',
    group: true
  },
  {
    title: 'Home',
    icon: 'ion-home',
    link: '/pages/auto/'
  },
  {
    title: 'Vehicle',
    icon: 'ion-android-car',
    link: '/pages/auto/vehicles'
  },
  {
    title: 'Actions',
    icon: 'nb-plus',
    children: [
      {
        title: 'Actions',
        link: '/pages/auto/actions'
      }
    ]
  },
  {
    title: 'FEATURES',
    group: true
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login'
      },
      {
        title: 'Register',
        link: '/auth/register'
      },
      {
        title: 'Request Password',
        link: '/auth/request-password'
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password'
      }
    ]
  }
];
