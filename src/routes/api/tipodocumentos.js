import express from 'express';
import { readData } from '../../db/DBTipoDocumento.js';

export const tipodocumentos = express.Router();

/**
* route GET /v1/api/tipodocumentos
**/
tipodocumentos.get("/", (req, res) => {
    res.json(readData());
});