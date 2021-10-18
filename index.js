import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT=5000;

app.use(bodyParser.json());

app.get('/',(req,res)=>res.send('Hello'))

app.listen(PORT,()=>console.log(`Server is running on http://localhost:${PORT}`));

