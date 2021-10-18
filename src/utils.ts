export const howLong = (date1: Date, date2: Date) => {
  const timestamp1 = date1.getTime();
  const timestamp2 = date2.getTime();
  let cha = timestamp1 > timestamp2 ? timestamp1 - timestamp2 : timestamp2 - timestamp1;
  let day = Math.floor(cha / (24 * 3600 * 1000));
  let hours = Math.floor((cha % (24 * 3600 * 1000)) / (3600 * 1000));
  let minutes = Math.floor(((cha % (24 * 3600 * 1000)) % (3600 * 1000)) / (60 * 1000));
  let seconds = Math.floor((((cha % (24 * 3600 * 1000)) % (3600 * 1000)) % (60 * 1000)) / 1000);
  return {
    day: day,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
};

export const renderTimeText = () => {
  const date = new Date();
  date.setHours(18, 0, 0);
  const timeData = howLong(date, new Date());
  return `${timeData.hours}小时 ${timeData.minutes}分钟 ${timeData.seconds}秒`;
};
