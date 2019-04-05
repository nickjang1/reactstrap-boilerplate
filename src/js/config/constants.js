import {
  PERIOD_TYPE,
  SERVICE_TYPE
} from './enums';

export const PERIOD_TYPE_LIST = [
  {
    value: PERIOD_TYPE.YEARLY,
    label: 'per month'
  },
  {
    value: PERIOD_TYPE.MONTHLY,
    label: 'per year'
  }
];

export const SERVICE_TYPE_LIST = [
  {
    value: SERVICE_TYPE.MOBILE,
    label: 'Mobile',
    label2: 'Mobile',
    icon: 'mobile',
    color: 'primary'
  }
];
