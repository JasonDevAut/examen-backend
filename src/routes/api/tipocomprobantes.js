import express from 'express';
import { readData } from '../../db/DBComprobante.js';

export const tipo_comprobantes = express.Router();

/**
* route GET /v1/api/tipocomprobantes
**/
tipo_comprobantes.get("/", (req, res) => {
    res.json(readData());
});