import express from 'express'
import { protectroute } from '../middleware/auth.middleware'
import { getMyFriends, getRecommendedUser } from '../controllers/user.controller.js'

const router = express.Router()

//apply auth middleware to all routes
router.use(protectroute)

router.get("/", protectroute, getRecommendedUser)
router.get("/friends", protectroute, getMyFriends)

export default router