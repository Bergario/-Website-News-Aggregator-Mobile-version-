export const TimesCounter = (newsDate) => {
  const minutes = 1000 * 60;
  const hours = minutes * 60;
  const days = hours * 24;
  const years = days * 365;
  const time = new Date().getTime() - new Date(newsDate).getTime();

  const y = Math.floor(time / hours);

  return y;
};
