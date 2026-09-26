import fs from 'node:fs'

export const readData = () =>{
    try{
        const datos = fs.readFileSync('./dbjson/DBComprobantePago.json');
        console.log(`Datos {datos}`)
        return JSON.parse(datos);
    }catch (error){
        console.log(error);
    }
}
export const saveData = (data) => {
    fs.writeFileSync(
    './dbjson/DBComprobantePago.json',
    JSON.stringify(data, null, 2)
    );
};
