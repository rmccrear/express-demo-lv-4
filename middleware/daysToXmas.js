
const daysToXmas = (req, res, next) => {
  const dateToday = new Date();
  const xmas = new Date('December 25, 2024 00:00:00');
  const millisecondsToXmas = xmas - dateToday;
  console.log("Days to Xmas: " + millisecondsToXmas / 60 / 60 / 24 / 1000);
  req.daysToXmas = (millisecondsToXmas / 60 / 60 / 24 / 1000);
  next();
}

export { daysToXmas };
