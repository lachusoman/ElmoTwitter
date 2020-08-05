const express = require("express");
import { Request, Response } from "express";
const router = express.Router();
const startTime = new Date();

router.get("/health", (request: Request, response: Response) => {
  response.send({
    status: "OK",
    start_up_time: startTime,
    VERSION: process.env.VERSION,
  });
});

export default router;
