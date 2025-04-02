import { Request, Response } from "express";
import userService from "../services/userService";
import { sendError, sendSucess } from "../utils/requestHandlers";

class UserController {
  async getAllUser(req: Request, res: Response) {
    try {
      const user = await userService.getAllUser();
      sendSucess(res, user);
    } catch (error: any) {
      sendError(res, error.message, 500);
    }
  }

  async getUserById(req: Request, res: Response) {
    try {
      const id = Number(req.params["id"]);
      const user = await userService.getUserById(id);
      if (user) {
        sendSucess(res, user);
      } else {
        sendError(res, "User not found", 404);
      }
    } catch (error: any) {
      sendError(res, error.message);
    }
  }

  async postUser(req: Request, res: Response) {
    try {
      const data = req.body;

      const user = await userService.insertUser(data);
      if (user) {
        sendSucess(res, user);
      } else {
        sendError(res, "User not create", 500);
      }
    } catch (error: any) {
      sendError(res, error.message);
    }
  }

  async putUser(req: Request, res: Response) {
    try {
      const data = req.body;
      const id = Number(req.params["id"]);
      const user = await userService.editUser(data, id);
      if (user) {
        sendSucess(res, user);
      } else {
        sendError(res, "User not edit", 500);
      }
    } catch (error: any) {
      sendError(res, error.message);
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const id = Number(req.params["id"]);
      const deleted = await userService.deleteUser(id);
      if (deleted) {
        sendSucess(res, {});
      } else {
        sendError(res, "User not found");
      }
    } catch (error: any) {
      sendError(res, error.message);
    }
  }
}

export default new UserController();
