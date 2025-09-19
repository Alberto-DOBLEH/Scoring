//configuracion del server

import express, {Application, Request, Response} from 'express'
import db from '../db/connection'
import cors from 'cors'
import router from '../routes/rutaas';

class Server{
    private app: Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3001';

        this.midlewares();
        this.listen();
        this.routes();
        this.dbconnect();
        
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Aplicacion corriendo en el puerto ${this.port}`);

        })
    }

    routes(){
        this.app.get('/', (req: Request, res: Response)=>{
            res.json({
                msg:'Api Workingaaaaa'
            })
        })
        this.app.use('/api/', router)
    }

     midlewares(){
        this.app.use(express.json())
        this.app.use(cors())
    }

    async dbconnect(){
        try{
            await db.authenticate().then();
        console.log ('Base de datos conectada')
        }
        catch{
            console.log("Error al conectarse a la base de datos")
        }
        
    }
}

export default Server