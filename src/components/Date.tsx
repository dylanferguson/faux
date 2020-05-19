type timeProps = {
  dateString: string;
};

export const Date = ({ dateString }: timeProps) => (
  <time dateTime={dateString}>{dateString}</time>
);
