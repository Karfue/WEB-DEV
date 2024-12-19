import express from 'express';
import { body, query, validationResult, checkSchema } from 'express-validator';
import {createUserValidation} from './utils/validationSchemas.js';


const app = express();
const PORT = 3000;
app.use(express.json());
const Users = []

// USING VALIDATION IN ROUTE ONLY 
app.post('/api/users', body('password').isString().isLength({min: 8}), (req, res) => {
    const result = validationResult(req);
    // console.log(result)
    if (!result.isEmpty()) {
        // If validation errors are present, send them as a response
        return res.status(400).json({ errors: result.array() });
    }

    const { username, password } = req.body;
    if(username && password) {
        Users.push({username, password})
        return res.json(Users);
    }
    console.log({msg: "something wrong!"})
    return res.send({msg: "something wrong!"})
})



// USING VALIDATION USING VALIDATION SCHEMA
app.post('/api/admin', checkSchema(createUserValidation), (req, res) => {
    const result = validationResult(req);
    // console.log(result)
    if (!result.isEmpty()) {
        // If validation errors are present, send them as a response
        return res.status(400).json({ errors: result.array() });
    }

    const { username, password } = req.body;
    if(username && password) {
        Users.push({username, password})
        return res.json(Users);
    }
    console.log({msg: "something wrong!"})
    return res.send({msg: "something wrong!"})
})



app.listen(PORT, () => console.log('server is runnning.......'))