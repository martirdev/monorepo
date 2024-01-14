export const LABELS = {
  PRODUCTS_TITLE: 'Оформление заказа',
  DELIVERY_TITLE: 'Доставка',
  DELIVERY_REGION: 'Регион',
  DELIVERY_DELIVERY_TYPE: 'Способ доставки',
  DELIVERY_DELIVERY_TYPE_COURIER: 'Курьерская доставка СДЭК',
  DELIVERY_DELIVERY_TYPE_PP: 'Пункт выдачи курьерских служб',
  DELIVERY_DELIVERY_STREET: 'Улица',
  DELIVERY_DELIVERY_HOUSE: 'Дом',
  DELIVERY_DELIVERY_FLAT: 'Квартира',
  DELIVERY_DELIVERY_INDEX: 'Индекс',
  PAYMENT_TITLE: 'Способ оплаты',
  PAYMENT_TYPE_ONLINE_SBP: 'СБП',
  PAYMENT_TYPE_ONLINE_CARD: 'Онлайн-оплата картой',
  PAYMENT_TYPE_CASH: 'Наличными при получении',
  CONTACT_INFO_TITLE: 'Контактная информация',
  CONTACT_INFO_POLICY_CONFIRMATION:
    'Подтверждаю пользовательское соглашение и даю разрешение на обработку персональных данных',
  CONTACT_INFO_MARKETING_CONFIRMATION: 'Даю согласие на получение рекламных сообщений',
  CONTACT_INFO_COMMENT: 'Комментарии',
  CONTACT_INFO_SURNAME: 'Фамилия',
  CONTACT_INFO_SURNAME_PLACEHOLDER: 'Пушкарев',
  CONTACT_INFO_NAME: 'Имя',
  CONTACT_INFO_NAME_PLACEHOLDER: 'Максим',
  CONTACT_INFO_PATRONYMIC: 'Отчество',
  CONTACT_INFO_PATRONYMIC_PLACEHOLDER: 'Иванович',
  CONTACT_INFO_PHONE: 'Телефон',
  CONTACT_INFO_PHONE_PLACEHOLDER: '+7(922)155-80-68',
  CONTACT_INFO_EMAIL: 'Email',
  CONTACT_INFO_EMAIL_PLACEHOLDER: 'mipushkarev@martir.ru'
};

export const DELIVERY_TYPE_COURIER = 'courier';
export const DELIVERY_TYPE_PP = 'pp';

export const DELIVERY_TYPE_OPTIONS = [
  {
    label: LABELS.DELIVERY_DELIVERY_TYPE_COURIER,
    value: DELIVERY_TYPE_COURIER
  },
  {
    label: LABELS.DELIVERY_DELIVERY_TYPE_PP,
    value: DELIVERY_TYPE_PP
  }
];

export const ONLINE_SBP = 'sbp';
export const ONLINE_CARD = 'card';
export const CASH = 'cash';

export const PAYMENT_TYPE_OPTIONS = [
  {
    label: LABELS.PAYMENT_TYPE_ONLINE_SBP,
    value: ONLINE_SBP
  },
  {
    label: LABELS.PAYMENT_TYPE_ONLINE_CARD,
    value: ONLINE_CARD
  },
  {
    label: LABELS.PAYMENT_TYPE_CASH,
    value: CASH
  }
];
