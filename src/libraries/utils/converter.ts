import { format } from 'date-fns';

const dateTimeConverter = (date: string) => format(date, 'yyyy-MMM-dd hh:mm:ss a');

export { dateTimeConverter };
