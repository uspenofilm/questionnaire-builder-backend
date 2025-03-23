import Joi from 'joi';

export const addQuizSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  description: Joi.string().min(3).max(150).required(),
  questionCount: Joi.number().min(0).integer().required(),
  questions: Joi.array().items(
    Joi.object({
      id: Joi.string().required(),
      label: Joi.string().required(),
      type: Joi.string().valid('text', 'single', 'multiple').required(),
      options: Joi.array().items(Joi.string()).optional(),
    }),
  ),
});

export const updateQuizSchema = Joi.object({
  name: Joi.string().min(3).max(50),
  description: Joi.string().min(3).max(150),
  questionCount: Joi.number().min(0).integer(),
  questions: Joi.array().items(
    Joi.object({
      id: Joi.string(),
      label: Joi.string(),
      type: Joi.string().valid('text', 'single', 'multiple'),
      options: Joi.array().items(Joi.string()),
    }),
  ),
});
