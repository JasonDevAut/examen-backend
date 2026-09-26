import express from 'express';
import { tipocomprobantes } from './routes/api/tipocomprobantes.js';
import { tipodocumentoreceptor } from './routes/api/tipodocumentosreceptor.js';
import { comprobantespago } from './routes/api/comprobantespago.js';
import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use("/v1/api/tipocomprobantes", tipocomprobantes);
app.use("/v1/api/tipodocumentosreceptor", tipodocumentoreceptor);
app.use("/v1/api/comprobantespago", comprobantespago);
const options = {
    key: fs.readFileSync(path.join(__dirname, '../certs/key.pem')),
    cert: fs.readFileSync(path.join(__dirname, '../certs/cert.pem')),
  };
  
https.createServer(options, app).listen(3000, () => {
    console.log('Servidor HTTPS en https://localhost:3000');
});