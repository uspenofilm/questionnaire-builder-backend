import { Router } from 'express';
import {
  getQuizController,
  getQuizByIdController,
  createQuizController,
  deleteQuizController,
  updateQuizController,
} from '../controllers/quiz.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { isValidId } from '../middlewares/isValidId.js';
import * as quizSchemas from '../validation/quizSchema.js';

const router = Router();

router.get('/quiz', ctrlWrapper(getQuizController));
router.get('/quiz/:quizId', isValidId, ctrlWrapper(getQuizByIdController));
router.post(
  '/quiz',
  validateBody(quizSchemas.addQuizSchema),
  ctrlWrapper(createQuizController),
);
router.delete('/quiz/:quizId', isValidId, ctrlWrapper(deleteQuizController));
router.put(
  '/quiz/:quizId',
  isValidId,
  validateBody(quizSchemas.updateQuizSchema),
  ctrlWrapper(updateQuizController),
);

export default router;
