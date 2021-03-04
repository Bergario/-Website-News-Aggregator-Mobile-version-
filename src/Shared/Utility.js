export const TimesCounter = (newsDate) => {
  const minutes = 1000 * 60;
  const hours = minutes * 60;
  const days = hours * 24;
  const years = days * 365;
  const time = new Date().getTime() - new Date(newsDate).getTime();
  let y = 0;

  if (time < 3600000) {
    y = Math.floor(time / minutes) + "minutes ago";
  } else if (time < 864000000) {
    y = Math.floor(time / hours) + " " + "hours ago";
  } else if (time < 31536000000) {
    y = Math.floor(time / days) + " " + "days ago";
  }

  return y;
};
