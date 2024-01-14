import {GroupsType} from '_shared/vertical-nav';

export const LABELS = {
  NAV_LABEL: 'Разделы',
  NAV_PRODUCTS: 'Товары',
  NAV_ORDERS: 'Заказы',
  NAV_CONTENT: 'Управление контентом',
  NAV_USERS: 'Пользователи',
  NAV_PERMISSIONS: 'Доступы',
  NAV_CI: 'Релизы',
  NAV_TICKETBOARD: 'Доска задач',
  NAV_CREATETICKET: 'Создать задачу'
};

export const GROUPS: GroupsType = [
  {
    name: 'Бизнесс',
    links: [
      {
        to: '/admin/products',
        label: LABELS.NAV_PRODUCTS,
        icon: 'Clothes'
      },
      {
        to: '/admin/orders',
        label: LABELS.NAV_ORDERS,
        icon: 'Orders'
      },
      {
        to: '/admin/content-management',
        label: LABELS.NAV_CONTENT,
        icon: 'Content'
      }
    ]
  },
  {
    name: 'Планирование',
    links: [
      {
        to: '/admin/ticket-board',
        label: LABELS.NAV_TICKETBOARD,
        icon: 'TaskBoard'
      }
    ]
  },
  {
    name: 'Инфраструктура',
    links: [
      {
        to: '/admin/users',
        label: LABELS.NAV_USERS,
        icon: 'Users'
      },
      {
        to: '/admin/permissions',
        label: LABELS.NAV_PERMISSIONS,
        icon: 'Permissions'
      },
      {
        to: '/admin/ci',
        label: LABELS.NAV_CI,
        icon: 'Release'
      }
    ]
  }
];
