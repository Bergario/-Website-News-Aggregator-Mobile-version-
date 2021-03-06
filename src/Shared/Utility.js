export const TimesCounter = (newsDate) => {
  const minutes = 1000 * 60;
  const hours = minutes * 60;
  const days = hours * 24;
  const weeks = days * 7;
  const time = new Date().getTime() - new Date(newsDate).getTime();
  let y = 0;

  if (time < 3600000) {
    y = `${Math.floor(time / minutes)} minutes ago`;
  } else if (time < 86400000) {
    y = `${Math.floor(time / hours)} hours ago`;
  } else if (time < 1209600000) {
    y = `${Math.floor(time / days)} days ago`;
  } else if (time < 2419200000) {
    y = `${Math.floor(time / weeks)} weeks ago`;
  }

  return y;
};

export const openNewTabHandler = (link) => {
  window.open(link, "_blank");
};
