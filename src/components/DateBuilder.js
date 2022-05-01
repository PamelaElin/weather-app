
export const DateBuilder = (d) => {
  const months = [
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
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const addZero = (i) => {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  };
  const day = days[d.getDay()];
  const date = addZero(d.getDate());
  const month = months[d.getMonth()];
  const year = d.getFullYear();
  const hours = addZero(d.getHours());
  const minutes = addZero(d.getMinutes());

  return (
    <div>
      <div>{`${day} ${date} ${month} ${year}`}</div>
      <div>{` ${hours}: ${minutes}hs`} </div>
    </div>
  );
};
