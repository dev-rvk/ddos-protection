import express from 'express';
import { Request, Response } from 'express';

const app = express();
const port = 8000;

// Middleware to log request headers and perform validation
app.use((req: Request, res: Response, next) => {
  // Log all request headers
  console.log('Request Headers:', req.headers);
  
  // Proceed to the next middleware or route handler
  next();
});

// Route to handle validation logic
app.get('/', (req: Request, res: Response) => {
  // Perform some validation logic (e.g., checking headers, cookies)
  const isValid = true; // Replace with actual validation logic

  if (isValid) {
    // If valid, redirect to the main application
    res.redirect('/main');
  } else {
    // If invalid, show an error or keep retrying
    res.status(403).send('Validation failed. Please try again.');
  }
});

app.listen(port, () => {
  console.log(`Validation server listening at http://localhost:${port}`);
});
