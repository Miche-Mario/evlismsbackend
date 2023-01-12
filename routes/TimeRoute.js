import express from 'express'
import {
    getAllTime,
    getTime,
    createTime
} from "../controllers/Times.js"

const router = express.Router();
router.get('/times', getAllTime);
router.post('/time', getTime);
router.post('/timee', createTime);




export default router;