import * as restify from 'restify';
import {enviroment} from '../cummon/enviroment';

export class Server {

    application : restify.Server

    initRoutes(): Promise<any>{
        return new Promise( (resolve, reject) => {
            try{
                
                this.application = restify.createServer({
                    name : "meat-api",
                    version : "1.0.0"
                });
                
                this.application.use(restify.plugins.queryParser());
                this.application.use(restify.plugins.bodyParser());

                //routes
                this.application.get('/hello', (req, res, next) => {
                    res.json({msg: 'hello'});
                    return next();
                })

                this.application.listen(enviroment.server.port, () => {
                    resolve(this.application);
                });

            }catch(error){
                reject(error);
            }
        });   
    }
    
    bootstrap(): Promise<Server>{
        return this.initRoutes().then(() => this);
    }
}