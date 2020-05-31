type timeProps = {
  date: string;
  className?: string;
};

const DateTime = ({ date, className }: timeProps) => {
  const [year, month, day] = date.split("-").map((x) => Number(x));
  console.log(year, month, day, date);
  return (
    <time className={className} dateTime={date}>
      {new Date(Date.UTC(year, month, day)).toLocaleDateString("en-AU", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </time>
  );
};

export { DateTime as Date };
