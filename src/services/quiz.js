import { QuizCollection } from '../db/models/quiz.js';
import { Types } from 'mongoose';

export const getAllQuiz = async () => {
  const quiz = await QuizCollection.find();
  return quiz;
};

export const getQuizById = async (quizId) => {
  const isValidId = Types.ObjectId.isValid(quizId);
  if (!isValidId) {
    return undefined;
  }
  const quiz = await QuizCollection.findById(quizId);
  return quiz;
};
