import express from 'express';
import { readData, saveData } from '../../db/DBComprobantePago.js';

export const comprobantespago = express.Router();

/**
* route GET /v1/api/comprobantespago
**/
comprobantespago.get("/", (req, res) => {
    res.json(readData());
});

comprobantespago.post("/", (req, res) => {
    const data = readData();
    data.push(req.body);
    saveData(data);
    res.status(201).json(data);
});

comprobantespago.put("/:id", (req, res) => {
    const data = readData();
    const index = data.findIndex(item => item.id == req.params.id);
    if (index !== -1) {
        data[index] = req.body;
        res.status(200).json(data);
        return saveData(data);
    }else{

        res.status(500).json()
    }
});

comprobantespago.delete("/:id", (req, res) => {
    const data = readData();
    const index = data.findIndex(item => item.id == req.params.id);
     if (index == -1) {
        return res.status(404).json({
            mensaje: "Comprobante no encontrado"
        });
    }
    data.splice(index, 1);
    saveData(data);
    return res.status(200).json({
        mensaje: "Comprobante eliminado exitosamente"
    });
});