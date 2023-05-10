import express from "express";
import { create, findTweet } from "../controllers/tweet-controller.js";
import { createLike } from "../controllers/like-controller.js";
import { createComment } from "../controllers/comment-controller.js";
import { login, signup } from "../controllers/user-controller.js";
import { authenticate } from "../config/authenticate.js";

const router = express.Router();


router.post('/tweets', authenticate, create);
router.get('/tweets/:id',findTweet)

router.post('/likes/toggle', createLike)

router.post('/comments', createComment);

router.post('/signup',signup)
router.post('/login',login);

export default router