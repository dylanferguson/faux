import moment from "moment";

type timeProps = {
  date: string;
  className?: string;
};

export const Date = ({ date, className }: timeProps) => (
  <time className={className} dateTime={date}>
    {moment(date).format("MMMM D, YYYY")}
  </time>
);
