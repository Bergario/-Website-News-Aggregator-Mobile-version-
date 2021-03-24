export const TimesCounter = (newsDate) => {
  const minutes = 1000 * 60;
  const hours = minutes * 60;
  const days = hours * 24;
  const time = new Date().getTime() - new Date(newsDate).getTime();
  let y = 0;

  if (time < 3600000) {
    y = `${Math.floor(time / minutes)} minutes ago`;
  } else if (time < 86400000) {
    y = `${Math.floor(time / hours)} hours ago`;
  } else if (time < 691200000) {
    y = `${Math.floor(time / days)} days ago`;
  } else {
    y = GetFullDate(newsDate);
  }

  return y;
};

export const GetFullDate = (newsDate) => {
  const getDays = new Date(newsDate).getDate();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const getMonths = months[new Date(newsDate).getMonth()];
  const getYears = new Date(newsDate).getFullYear();

  return `${getDays} ${getMonths} ${getYears}`;
};

export const openNewTabHandler = (link) => {
  window.open(link, "_blank");
};
