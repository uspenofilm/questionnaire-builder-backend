import { Router } from 'express';
import {
  getQuizController,
  getQuizByIdController,
  createQuizController,
  deleteQuizController,
  updateQuizController,
} from '../controllers/quiz.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/quiz', ctrlWrapper(getQuizController));
router.get('/quiz/:quizId', ctrlWrapper(getQuizByIdController));
router.post('/quiz', ctrlWrapper(createQuizController));
router.delete('/quiz/:quizId', ctrlWrapper(deleteQuizController));
router.put('/quiz/:quizId', ctrlWrapper(updateQuizController));

export default router;
