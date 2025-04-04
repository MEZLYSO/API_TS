import { Router } from "express";
import userController from "../controllers/userController";
const userRouter = Router();

userRouter.get("/", userController.getAllUser);
userRouter.get("/:id", userController.getUserById);
userRouter.post("/", userController.postUser);
userRouter.put("/:id", userController.putUser);
userRouter.delete("/:id", userController.deleteUser);

export default userRouter;
