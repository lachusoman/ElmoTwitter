import express from "express";
import { Request, Response } from "express";
const fs = require("fs");
const router = express.Router();

interface userList {
  id: number;
  name: string;
  location: string;
  image: string;
  twitterHandle: string;
  followerCount: number;
  lastFivetweets: string;
}
router.get("/", (req: Request, res: Response) => {
  const userId = req.query.param;
  let userData: any = JSON.parse(fs.readFileSync("./src/userProfile.json"));
  const selectedUser = userData[userId as string];

  const tweetDates: string[] = Object.keys(selectedUser.tweets)
    .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())
    .slice(0, 5);
  const tweets = tweetDates.map((element) => {
    return selectedUser.tweets[element];
  });
  const result = Object.assign({}, { ...selectedUser, tweets });
  res.send(result);
});

export default router;
