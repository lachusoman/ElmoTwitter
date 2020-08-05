import express from "express";
const fs = require("fs");
import { Request, Response } from "express";
const router = express.Router();

interface userResult {
  id: number;
  name: string;
  location: string;
}

router.get("/", (req: Request, res: Response) => {
  const userSearchParam = req.query.param.toString();
  if (userSearchParam && userSearchParam.length > 2) {
    let userData: any = JSON.parse(fs.readFileSync("./src/userProfile.json"));
    let keys: string[] = Object.keys(userData);
    const result: userResult[] = keys
      .filter((key) => {
        let userName = userData[key].userName.toLowerCase();
        let location = userData[key].location.toLowerCase();
        let searchParam = userSearchParam.toLowerCase();
        if (userName.indexOf(searchParam) != -1) {
          return userName;
        }
        if (location.indexOf(searchParam) != -1) {
          return location;
        }
      })
      .map((key) => {
        return {
          id: userData[key].userId,
          name: userData[key].userName,
          location: userData[key].location,
        };
      });

    if (result.length > 0) {
      return res.status(200).json(result);
    }
  }
  res.status(404).json({
    message:
      "UserName or Location not valid (and must have atleast 3 characters)",
  });
});

export default router;
