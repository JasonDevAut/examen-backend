import express from 'express';
import { readData, saveData } from '../../db/DBComprobantePago.js';

export const comprobantespago = express.Router();

/**
* route GET /v1/api/comprobantespago
**/
comprobantespago.get("/", (req, res) => {
    const { serie, numero } = req.query;

    const data = readData();

    if (serie && numero) {
        const resultado = data.filter(item => item.serie_comprobante == serie && item.numero_comprobante == numero);
        return res.json(resultado);
    }
    else if (serie && !numero) {
        const resultado = data.filter(item => item.serie_comprobante == serie);
        return res.json(resultado);
    }
    else if (numero && !serie) {
        const resultado = data.filter(item => item.numero_comprobante == numero);
        return res.json(resultado);
    }

    res.json(data);
});

comprobantespago.post("/", (req, res) => {
    const data = readData();
    data.push(req.body);
    saveData(data);
    res.status(201).json(data);
});

comprobantespago.put("/", (req, res) => {
    const data = readData();
    data.forEach(item => {
        if (item.id === req.params.id) {
            item = req.body;
        }
    });
    saveData(data);
    res.status(200).json(data);
});

comprobantespago.delete("/", (req, res) => {
    res.json(readData());
});