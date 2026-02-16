import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
});

// Example endpoint for future form submissions
app.post('/api/subscribe', (req, res) => {
    const { email } = req.body;
    // TODO: Implement email subscription logic
    console.log(`New subscription: ${email}`);
    res.json({ success: true, message: 'Subscribed successfully' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
