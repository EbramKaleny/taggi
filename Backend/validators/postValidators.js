import { check } from "express-validator";
import { validatorMiddleware } from "../middleware/validatorMiddelware.js";

export const createPostValidator = [
  check("title").notEmpty().withMessage("title required"),
  check("content").notEmpty().withMessage("content required"),
  check("author").notEmpty().withMessage("author required"),
  validatorMiddleware,
];

export const updatePostValidator = [
  check("id").isMongoId().withMessage("Invalid ID formate"),
  validatorMiddleware,
];
