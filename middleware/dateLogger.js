
const dateLogger = (req, res, next) => {
  console.log("Someone accessed your site at: " + new Date());
  next();
}

export { dateLogger };
