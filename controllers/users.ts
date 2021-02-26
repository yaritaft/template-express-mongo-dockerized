import express from "express";
import {app} from "../app"

app.get("/", (req: express.Request, res: express.Response) => {
    const id = Number(req.query.id);
    res.send(
      "Hello"
    );
  });