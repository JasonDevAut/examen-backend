import express from 'express';
import { tipodocumentos } from './routes/api/tipodocumentos.js';
import { provincias } from './routes/api/provincias.js';
import { tipocomprobantes } from './routes/api/tipocomprobantes.js';
import { tipodocumentosreceptor } from './routes/api/tipodocumentosreceptor.js';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use("/v1/api/tipodocumentos", tipodocumentos);
app.use("/v1/api/provincias", provincias);
app.use("/v1/api/tipocomprobantes", tipocomprobantes);
app.use("/v1/api/tipodocumentosreceptor", tipodocumentosreceptor);
app.listen(3000, () => console.log("Servidor Disponible en el puerto 3000 para las peticiones"));