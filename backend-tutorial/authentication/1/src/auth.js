// 1. Import the libraries
import express from 'express';
import session from 'express-session';

// 2. Create an Express app
const app = express();

// 3. Use session middleware
app.use(
    session({
        secret: 'my-secret-key', // A secret key for signing cookies
        resave: false,           // Don't save session again if nothing changed
        saveUninitialized: false, // Only save a session when something is added
        cookie: { maxAge: 60000 } // Cookie expires in 60 seconds (1 minute)
    })
);

// 4. Set up routes
// (A) Set data in the session
app.get('/login', (req, res) => {
    req.session.username = 'JohnDoe'; // Save username in session
    res.send('You are logged in!');
});

// (B) Get data from the session
app.get('/profile', (req, res) => {
    if (!req.session.username) {
        return res.status(401).send('You are not logged in!');
    }
    res.send(`Hello, ${req.session.username}!`);
});

// (C) Clear the session (log out)
app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send('Could not log out!');
        }
        res.send('You are logged out!');
    });
});

// 5. Start the server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
