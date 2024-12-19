import express, { query, request } from 'express';

const app = express();

const PORT = 3000;

app.use(express.json())

const mockUsers = [
    { id: 1, name: "Harsh", age: 17 },
    { id: 2, name: "Kartik", age: 14 },
    { id: 3, name: "Nemen", age: 16 },
    { id: 4, name: "Vishesh", age: 15 },
    { id: 5, name: "Ananya", age: 18 },
    { id: 6, name: "Aryan", age: 19 },
    { id: 7, name: "Meera", age: 20 },
    { id: 8, name: "Siddharth", age: 21 },
    { id: 9, name: "Ishika", age: 17 },
    { id: 10, name: "Rohan", age: 22 },
    { id: 11, name: "Avni", age: 16 },
    { id: 12, name: "Yash", age: 18 },
    { id: 13, name: "Priya", age: 19 },
    { id: 14, name: "Ritika", age: 15 },
    { id: 15, name: "Aman", age: 14 },
    { id: 16, name: "Tanya", age: 17 },
    { id: 17, name: "Raj", age: 18 },
    { id: 18, name: "Simran", age: 16 },
    { id: 19, name: "Kunal", age: 20 },
    { id: 20, name: "Sneha", age: 15 },
];

const adminUsers = [
    { id: 1, name: "AdminHarsh", age: 30, level: 1 },
    { id: 2, name: "AdminKartik", age: 28, level: 2 },
    { id: 3, name: "AdminNemen", age: 35, level: 5},
    { id: 4, name: "AdminVishesh", age: 32, level: 3 },
    { id: 5, name: "AdminAnanya", age: 29, level: 7 },
];

// -----------------------------------MIDDLEWARES------------------------------ //

// Middleware is just a mid-process between two diffrent processes or functions

// Example of a simple middleware
const loggingMiddleware = (request, response, next) => {
    console.log(`${request.method} - ${request.url}`);
    next() // calling next is important and compulsory to tell that middleware process is done now carry forward
}

// app.use(loggingMiddleware);  // Making the middleware global (for each route)


// middleware for a particular route
app.get('/yo', loggingMiddleware, (req, res) => {
    res.send({"msg": "middlewares checked!"})
})



// ---------------------------------REQUESTS ------------------------------------- //

app.get('/', (req, res) => {
    // res.send({"msg": "hello-world!"})
    return res.status(200).send({ msg: "all ok!" })
})


// use /api before creating a api's industry standard
app.get('/api/users', (req, res) => {
    return res.send(mockUsers)
})



// Route Params
app.get('/api/users/:id', (req, res) => {
    console.log(req.params);
    const parsedId = parseInt(req.params.id);
    if (isNaN(parsedId)) {
        res.status(404).send({ "msg": "invalid credentials" });
    }
    const findUser = mockUsers.find((user) => user.id === parsedId);
    if (!findUser) {
        res.status(404).send({ user: "not found!" })
    }
    return res.send(findUser);
})


// Query Params --> (/api/users?id=1&name=harsh)
app.get('/api/admin/', (req, res) => {
    // console.log(adminUsers)
    // console.log(req.query)
    const {name} = req.query;
    const findAdmin = adminUsers.find((admin) => admin.name === name)
    if (!findAdmin) {
        res.status(404).send({msg: "admin not found!"})
    }

    return res.status(202).send({findAdmin})


})


// Post Request
app.post('/api/user', (req, res) => {
    const { name, age } = req.body;
    const findUser = mockUsers.find((user) => user.name === name)
    if (!findUser) {
        mockUsers.push({name, age,})
        return res.send(mockUsers)
    }
    return res.status(400).send({msg: "user already exists!"});
})


// Patch Request (you are updating a partial data/or a field) (a portion)
app.patch('/api/users/:id', (req, res) => {
    const parsedId = parseInt(req.params.id);
    if (isNaN(parsedId)) {
        return res.status(400).send({ msg: "Invalid user ID" });
    }

    const user = mockUsers.find((user) => user.id === parsedId);
    if (!user) {
        return res.status(404).send({ msg: "User not found" });
    }

    const { name, age } = req.body;
    if (name) user.name = name;
    if (age) user.age = age;

    return res.status(200).send({ msg: "User updated successfully", user });
})

// Put Request (update everything full record)
app.put('/api/users/:id', (req, res) => {
    const parsedId = parseInt(req.params.id);
    if (isNaN(parsedId)) {
        return res.status(400).send({ msg: "Invalid user ID" });
    }

    const userIndex = mockUsers.findIndex((user) => user.id === parsedId);
    if (userIndex === -1) {
        return res.status(404).send({ msg: "User not found" });
    }

    const { name, age } = req.body;
    if (!name || !age) {
        return res.status(400).send({ msg: "Name and age are required" });
    }

    mockUsers[userIndex] = { id: parsedId, name, age };
    return res.status(200).send({ msg: "User replaced successfully", user: mockUsers[userIndex] });
})

// Delete Request (deleting something)
app.delete('/api/users/:id', (req, res) => {
    const parsedId = parseInt(req.params.id);
    if (isNaN(parsedId)) {
        return res.status(400).send({ msg: "Invalid user ID" });
    }

    const userIndex = mockUsers.findIndex((user) => user.id === parsedId);
    if (userIndex === -1) {
        return res.status(404).send({ msg: "User not found" });
    }

    mockUsers.splice(userIndex, 1);
    return res.status(200).send({ msg: "User deleted successfully", remainingUsers: mockUsers });
})






app.listen(PORT, () => {
    console.log(`server is runningg.......${PORT}..`);

})