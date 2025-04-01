import { Router } from "express";
import userController from "../controllers/userController";
const userRouter = Router();

userRouter.get("/", userController.getAllUser);
userRouter.get("/:id", userController.getUserById);
userRouter.post("/", userController.postUser);

export default userRouter;
