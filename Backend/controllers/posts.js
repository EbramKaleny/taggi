import postsModel from "../DB/postsModel.js";
import expressAsyncHandler from "express-async-handler";
import { apiError } from "../validators/apiErrorHandler.js";

export const getPosts = expressAsyncHandler(async (req, res) => {
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 1;
  const skip = (page - 1) * limit;
  const posts = await postsModel.find({}).limit(limit).skip(skip);
  res.status(200).json({ results: posts.length, page, data: posts });
});

export const getSpecficPost = expressAsyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const Post = await postsModel.findById(id)
  if (!Post) {
    return next(new apiError(`there is no Post with id ${id}`, 404));
  }
  res.status(200).json({ data: Post });
});

export const postNewPost = expressAsyncHandler(async (req, res) => {
    const { title, content, author} =
      req.body;
    const Post = await postsModel.create({
      title,
      content,
      author
    });
    res.status(201).json({ data: Post });
});

export const updatePost = expressAsyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const Post = await postsModel.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    if (!Post) {
      return next(new apiError(`there is no Post with id ${id}`, 404));
    }
    res.status(200).json({ data: Post });
});

export const deletePost = expressAsyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const Post = await postsModel.findByIdAndDelete(id);
    if (!Post) {
      return next(new apiError(`there is no Post with id ${id}`, 404));
    }
    res.status(204).json({ msg: "Post deleted" });
});