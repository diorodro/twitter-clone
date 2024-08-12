// 17:11
import express from "express";

const router = express.Router();

router.get("/signup", (req, res) => {
    res.json({
        data: "You hit the sign endpoint",
    });
});

router.get("/login", (req, res) => {
    res.json({
        data: "You hit the login endpoint",
    });
});

export default router;