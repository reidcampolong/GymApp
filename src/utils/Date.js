import moment from 'moment/src/moment';

/**
// expected output: Wed Jul 28 1993
 */
export const convertDateToFormat = date => moment(date).format('MM/DD');

export const getCurrentDate = () => convertDateToFormat(moment());

export const getDateRaw = () => moment();
