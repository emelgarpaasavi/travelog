const phpFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "PHP",
});

function getHumanReadableDate(date) {
  const options = { month: "long", day: "numeric" };
  const dateObject = new Date(Date.parse(date));
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(dateObject);
  return formattedDate;
}


export { phpFormatter, getHumanReadableDate };