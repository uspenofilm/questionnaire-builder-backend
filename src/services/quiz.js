import { QuizCollection } from '../db/models/quiz.js';
import { Types } from 'mongoose';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllQuiz = async ({ page = 1, perPage = 10 }) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;
  const quizQuery = QuizCollection.find();
  const quizCount = await QuizCollection.find().countDocuments();
  const paginationData = calculatePaginationData(quizCount, perPage, page);
  const quiz = await quizQuery.skip(skip).limit(limit).exec();
  return { data: quiz, ...paginationData };
};

export const getQuizById = async (quizId) => {
  const isValidId = Types.ObjectId.isValid(quizId);
  if (!isValidId) {
    return undefined;
  }
  const quiz = await QuizCollection.findById(quizId);
  return quiz;
};

export const createQuiz = async (payload) => {
  const quiz = await QuizCollection.create(payload);
  return quiz;
};

export const deleteQuiz = async (quizId) => {
  const quiz = await QuizCollection.findOneAndDelete({
    _id: quizId,
  });
  return quiz;
};

export const updateQuiz = async (quizId, payload, options = {}) => {
  const rawResult = await QuizCollection.findOneAndUpdate(
    { _id: quizId },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );

  if (!rawResult || !rawResult.value) return null;

  return {
    quiz: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};
