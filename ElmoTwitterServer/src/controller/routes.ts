import express from "express";
import userSearch from "./userSearch.controller";
import userShow from "./userShow.controller";
import health from "./health";
const router = express.Router();
router.use("/userSearch", userSearch);
router.use("/userShow", userShow);
router.use("/", health);

export default router;
