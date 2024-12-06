import { say } from 'cowsay';


const today = new Date();

const catchPhrase = (req, res, next) => {
    const today = new Date();
    const dayOfWeek = today.getDay(); 
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[dayOfWeek]; 
    console.log(`Oh Yeah! Today is ${dayName}.` );
    next()
}

const cowSay = (req, res, next) => {
    console.log(say({
        text : "I'm a moooodule",
        e : "oO",
        T : "U "
    }));
    next();
}

const authUser = (req, res, next) => {
    console.log("You are now logged in..");
    req.user = {
      name: "Santa",
      age: 205
    }
    next()
}
export {cowSay, catchPhrase, authUser};

