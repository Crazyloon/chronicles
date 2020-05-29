import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import { cookingMiddlewares } from './middlewares/cooking';

const __dirname = path.resolve();

// Create the Express Server
const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Setup CORS:
app.use(cors());

// Use body-parser for access to the request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// initialize middlewares
cookingMiddlewares(app);

// Start the Server
const port = process.env.PORT || 8080;
app.listen(port, console.log('Server is listening on port:', port));