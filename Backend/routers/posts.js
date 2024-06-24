import express from "express";
import * as controllers from "../controllers/posts.js";
import * as validators from "../validators/postValidators.js";

const router = express.Router();

router
  .route("/")
  .get(controllers.getPosts)
  .post(validators.createPostValidator, controllers.postNewPost);
router
  .route("/:id")
  .get(controllers.getSpecficPost)
  .put(validators.updatePostValidator, controllers.updatePost)
  .delete(controllers.deletePost);

export { router };
