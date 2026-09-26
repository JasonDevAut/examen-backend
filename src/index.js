import express from 'express';
import { tipocomprobantes } from './routes/api/tipocomprobantes.js';
import { tipodocumentoreceptor } from './routes/api/tipodocumentosreceptor.js';
import { comprobantespago } from './routes/api/comprobantespago.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use("/v1/api/tipocomprobantes", tipocomprobantes);
app.use("/v1/api/tipodocumentosreceptor", tipodocumentoreceptor);
app.use("/v1/api/comprobantespago", comprobantespago);
app.listen(3000, () => console.log("Servidor Disponible en el puerto 3000 para las peticiones"));