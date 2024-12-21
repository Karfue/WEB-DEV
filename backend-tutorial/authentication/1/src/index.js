import express from 'express'
import cookieParser from 'cookie-parser';
import session from 'express-session';

const app = express();
const PORT = 3000;


app.use(cookieParser());
app.use(session(
    {
     secret: "hello-world",
     saveUninitialized: false,
     resave: false,
     cookie: {
        maxAge: 60000 * 60
     }
    }
));

app.get('/', (req, res) => {
    console.log(req.session)
    console.log(req.session.id)
    res.send({msg: "hello!"})
})




app.listen(PORT, () => console.log(`server is runnning on ${PORT}............`))