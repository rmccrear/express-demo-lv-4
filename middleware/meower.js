
// this middleware, logs "meow to the console"
const meower = (req, res, next) => {
  console.log("meow");
  next();
}

export { meower };
