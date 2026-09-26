import express from 'express';
import { readData } from '../../db/DBTipoDocumentoReceptor.js';

export const tipodocumentoreceptor = express.Router();

/**
* route GET /v1/api/tipodocumentosreceptor
**/
tipodocumentoreceptor.get("/", (req, res) => {
    res.json(readData());
});
