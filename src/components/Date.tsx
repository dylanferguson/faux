import moment from 'moment';

type timeProps = {
  date: string;
};

export const Date = ({ date }: timeProps) => (
  <time dateTime={date}>{moment(date).format('MMMM D, YYYY')}</time>
);
