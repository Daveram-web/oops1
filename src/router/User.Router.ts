import express from "express";
import { UserController } from "../controller/User.Controller";

const UserRouter = express.Router();
const userController = new UserController();

UserRouter.post(
  "/create",
  // #swagger.tags = ['User']
  // #swagger.summary = 'Send OTP to user email'
  // #swagger.description = 'Send OTP for login or signup. Type "1" for signup, "2" for Forgot OTP'
     /* #swagger.parameters['email'] = { in: 'formData', type: 'string' } */
    /* #swagger.parameters['name'] = { in: 'formData', type: 'string' } */
    /* #swagger.parameters['password'] = { in: 'formData', type: 'string' } */
    /* #swagger.parameters['language_id'] = { in: 'formData', type: 'string' } */
    /* #swagger.parameters['date_of_birth'] = { in: 'formData', type: 'string' } */
    /* #swagger.parameters['gener_id'] = { in: 'formData', type: 'string' } */
  userController.createUser
);

UserRouter.get("/allUser",
    //#swagger.tags = ["User"]
    //#swagger.summary = "ALl the Users"
    userController.getAllUser)

export default UserRouter;
