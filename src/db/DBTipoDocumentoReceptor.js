import fs from 'node:fs'

export const readData = () =>{
    try{
        const datos = fs.readFileSync('./dbjson/DBTipoDocumentoReceptor.json');
        console.log(`Datos {datos}`)
        return JSON.parse(datos);
    }catch (error){
        console.log(error);
    }
}