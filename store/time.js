function getGreetingTime() {
  const date = new Date();
  const options = {
    timeZone: "Asia/Manila",
    hour: "2-digit",
    hour12: false,
  };

  const formattedTime = Number(new Intl.DateTimeFormat("en-US", options).format(date));

  return formattedTime;
}

export { getGreetingTime };
