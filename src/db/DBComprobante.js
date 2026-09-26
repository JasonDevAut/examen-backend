import fs from 'node:fs'

export const readData = () =>{
    try{
        const datos = fs.readFileSync('./dbjson/DBTipoComprobante.json');
        console.log(`Datos {datos}`)
        return JSON.parse(datos);
    }catch (error){
        console.log(error);
    }
}