import {connect,  ConnectOptions } from "mongoose";
import dotenv from 'dotenv';

dotenv.config()

export default mongoConnect = async () => {

    try{
        console.log("Conectando ao MongoDB...")
        await connect(process.env.MONGO_URL)
        console.log("MongoDB conectado com sucesso")
    }catch(error){
        console.log("Erro conexão MongoDB", error)
    }

}