import { BIRTHDAYS, FAMILY, PERSONAL, REMINDERS, TASKS } from '../constants/constants';

const types = {
  personal: { value: PERSONAL, color: '#039BE5' },
  birthdays: { value: BIRTHDAYS, color: '#33B679' },
  reminders: { value: REMINDERS, color: '#3F51B5' },
  tasks: { value: TASKS, color: '#4285F4' },
  family: { value: FAMILY, color: '#9E69AF' },
};

export const defaultCalendarType = types[PERSONAL];

export default types;
