import {
  SERVICE_TYPE
} from './enums';

export const orderHistoiesData = [
  {
    service_type: SERVICE_TYPE.MOBILE,
    service_name: '20GB Basic Mobile Plan',

    description: 'Sim shipped',

    order_date: '2019-02-25',
    order_id: '001634',
    order_amount: 35.00
  }
];

export const servicesData = [
  {
    service_name: '0400 123 456',
    service_plan: '20GB Basic Mobile plan',
    service_nickname: 'Service nickname',
    service_type: SERVICE_TYPE.MOBILE,
    price: 15,
    period_type: 'monthly'
  }
];
