import express from 'express'
import cookieParser from 'cookie-parser';
import session from 'express-session';

const app = express();
const PORT = 3000;

// lot of packages installing in express are a middlewares
// cookie parser is also a middleware
// cookies is data send by a server to a web browser

app.use(cookieParser());
app.use(session(
    {
     secret: "hello-world",
     saveUninitialized: false,
     resave: false,
     cookie: {
        maxAge: '60000 * 60'
     }
    }
));

app.get('/', (req, res) => {
    // sending cookies to browser
    res.cookie('hello', 'world', {maxAge: 60000})  // hello is name & world is value & maxAge is time(in millisceconds) for cookie
    res.send({msg: "hello world!"})
})

app.get('/get', (req, res) => {
    console.log(req.headers.cookie);
    console.log(req.cookies);
    if(req.cookies.hello && req.cookies.hello === 'world') {
        return res.send({msg: "loged in!"})
    }
    return res.send({msg: "1hello world!"})
})






app.listen(PORT, () => console.log(`server is runnning on ${PORT}............`))