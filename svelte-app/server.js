import express from 'express';
import { handler } from './build/handler.js';

const app = express();
const port = 8080;

// Health check endpoint
app.get('/health-check', (req, res) => {
    res.send({
        message: 'Server is up and running',
        status: 200
    });
});

// Use the SvelteKit handler
app.use(handler);

// Serve static files from the build directory
app.use(express.static('build'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
