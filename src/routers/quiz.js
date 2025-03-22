import { Router } from 'express';
import {
  getQuizController,
  getQuizByIdController,
} from '../controllers/quiz.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/quiz', ctrlWrapper(getQuizController));
router.get('/quiz/:quizId', ctrlWrapper(getQuizByIdController));

export default router;
