import { getAllQuiz, getQuizById } from '../services/quiz.js';
import createHttpError from 'http-errors';

export const getQuizController = async (req, res, next) => {
  try {
    const quiz = await getAllQuiz();

    res.json({
      status: 200,
      message: 'Successfully found quiz!',
      data: quiz,
    });
  } catch (err) {
    next(err);
  }
};

export const getQuizByIdController = async (req, res, next) => {
  const { quizId } = req.params;
  const quiz = await getQuizById(quizId);
  if (!quiz) {
    throw createHttpError(404, 'Quiz not found');
  }

  res.json({
    status: 200,
    message: `Successfully found quiz with id ${quizId}!`,
    data: quiz,
  });
};
