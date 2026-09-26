import express from 'express';
import { readData } from '../../db/DBProvincia.js';

export const provincias = express.Router();

/**
* route GET /v1/api/provincias
**/
provincias.get("/", (req, res) => {
    res.json(readData());
});