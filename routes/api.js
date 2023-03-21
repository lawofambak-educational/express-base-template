import express from "express";
import { apiHome, apiNew, apiId } from "../controllers/api.js";

const router = express.Router();

router.get("/", apiHome);
router.get("/new", apiNew);
router.get("/:id", apiId);

export default router;
