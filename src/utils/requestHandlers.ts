import { Response } from "express";

export function sendSucess(res: Response, data: any) {
  res.status(200).json({
    sucess: true,
    data: data,
    error: null,
  });
}

export function sendError(
  res: Response,
  message: string = "Internal server error",
  statusCode: number = 500,
) {
  res.status(statusCode).json({
    sucess: false,
    data: null,
    error: {
      message: message,
    },
  });
}
