import { Customer } from './Customer';

export type CustomerFormData = Omit<
  Customer,
  'id' | 'lastSeen' | 'types'
>;
