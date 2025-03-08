import { Router } from "express";
import { getLeaderboard, getStatus } from "../controller/infoController";
import authMiddleware from "../middleware/authMiddleware";

const infoRouter = Router();

infoRouter.get("/leaderboard", (req, res) => {
  /**
   * @todo Fix this mess
   */
  getLeaderboard(req, res);
});
infoRouter.get("/status", (req, res) => {
  /**
   * @todo Fix this mess
   */
  authMiddleware(req, res); // Hack: Not supposed to be used like this ?? WTF
  getStatus(req, res);
});

export default infoRouter;
