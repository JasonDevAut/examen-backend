import express from 'express';
import { readData } from '../../db/DBComprobante.js';

export const tipocomprobantes = express.Router();

/**
* route GET /v1/api/tipocomprobantes
**/
tipocomprobantes.get("/", (req, res) => {
    res.json(readData());
});