import express from 'express';
import { readData } from '../../db/DBTipoDocumentoReceptor.js';

export const tipo_documento_receptor = express.Router();

/**
* route GET /v1/api/tipodocumentosreceptor
**/
tipo_documento_receptor.get("/", (req, res) => {
    res.json(readData());
});