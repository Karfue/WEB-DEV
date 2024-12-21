import express from 'express';
import urlRoutes from './routes/urlRoutes.js';
import connectToMongoDB from './connection.js';

const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON data
app.use(express.json());  // This is required to parse JSON in the request body

// Connect to MongoDB
connectToMongoDB('mongodb://localhost:27017/short-url')
.then(() => {
    console.log('!! --DB-- CONNECTED-- !!');
})
.catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

app.use(express.json())
// Mount URL routes
app.use('/api', urlRoutes);  // Prefix routes with '/api'

// Start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));

