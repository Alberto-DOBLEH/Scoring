/*----------Instalaciones----------
    Dependencias:
    npm i express    -Con esto se crea la api rest 
    npm i dotenv     -Para las configuraciones de variables de entorno
    npm i cors       -No me quedo claro para que sirve pero instalalo
    npm i sequelize mysql2  -Esto para la base de datos
    npm i -g nodemon -Ejecuta el javascript y si hay algun cambio lo vuelve a ejecutar
    
    
    -Typescript

    ///////////
    IMPORTANTE
    ///////////
    PARA PODER EJECUTAR TODO DEBES ESTAR EN LA CONSOLA EN LA CARPETA BACK
    ES DECIR, cd Back
    SI NO SE HACE ECHARÁS A PERDER TODO EL PROYECTO Y DEBERÁS VOLVER A CLONARLO
    ///////////

    -cuando hayas instalado eso escribe en consola tsc --init
        ESTO CREARÁ UN ARCHO TSCONFIG.JSON, EN CASO DE QUE NO FUNCIONE VERIFICA SI ESTÁ DESCOMENTADA LA LÍNEA "outDir": "./dist"
    -Luego escribe tsc en la consola
   
    -Antes de empezar a probar y eso ten abiertas dos consolas y escribe
    en una nodemon.js y en la otra tsc --watch y ya cualquier cambio que hagas
    hazlo en los typescript
    
    -para que se corra usa el comando nodemon dist/index.js
 */

//Este es el archivo que se ejecuta (bueno el .js, pero en este se programa) para poner a correr el server
import Server from "./models/Server"
import dotenv from 'dotenv'
import express from 'express'

const app = express();
app.use(express.json());

//configuramos las variables de entorno

dotenv.config()


const server = new Server();