import { Router } from 'express';
import { addTask ,getallTask,putPending,completedTask} from './controller.js';
const router=Router();

router.route("/addTask").post(addTask);
router.route('/getTask').get(getallTask);
router.route("/putPending").post(putPending);
router.route("/completeTask").post(completedTask);

export default router;