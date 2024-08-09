import express from "express";
import {
  createNewPost,
  deleteBlogPost,
  getAllBlog,
  updateBlogPost,
} from "../controller/blogController.js";
const blogRouter = express.Router();

blogRouter.get("/getallpost", getAllBlog);
blogRouter.post("/createnewpost", createNewPost);
blogRouter.put("/updatepost", updateBlogPost);
blogRouter.delete("/deletepost", deleteBlogPost);

export default blogRouter;



