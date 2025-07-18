import { RequestHandler } from "express";
import { UserService } from "../service/UserService";
import { response } from "../helper/Helper";

const userService = new UserService()
export class UserController{
    createUser:RequestHandler = async(req,res)=>{
        try {
           const {name,email,password,language_id,date_of_birth,gener_id} = req.body
           const data  = {name,email,password,language_id,date_of_birth,gener_id}
           const create = userService.createUser(data)
           return res.status(200).json(response(1,"The User is created",[],create))
    }
    catch(error){
        return res.status(400).json(response(0,"error",error,[]))
    }

}


getAllUser:RequestHandler = async(req,res)=>{
    try {
        const user = await userService.getAll()
        return res.status(200).json(response(1,"The users",[],user))
    } catch (error) {
        throw res.status(400).json(response(0,"error",error,[]))
    }
}
}