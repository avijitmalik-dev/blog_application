import Post from "../models/postModel.js";

/**
 * create new blog post
 * @param {*} req
 * @param {*} res
 */
export const createNewPost = async(req, res) => {
  try {
    const resp = await req.body();
    console.log(resp);
    res.status(200).send({
      data: resp,
      success: true,
      message: "successfull crate new post",
    });
  } catch (error) {
    res
      .status(500)
      .send({ data: null, success: false, message: "Internal Server Error.!" });
  }
};

/**
 * get all blog post
 * @param {*} req
 * @param {*} res
 */
export const getAllBlog = async(req, res) => {
  try {
    const resp = await Post.find();
    res.status(200).send({
      data: resp,
      success: true,
      message: "successfull crate new post",
    });
  } catch (error) {
    res
      .status(500)
      .send({ data: null, success: false, message: "Internal Server Error.!" });
  }
};

/**
 * update blog post
 * @param {*} req
 * @param {*} res
 */
export const updateBlogPost = async(req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPost) {
      return res.status(404).send({ success: false, message: 'Blog post not found' });
    }
    res.status(200).send({
      data: updatedPost,
      success: true,
      message: 'Blog post updated successfully',
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: 'Error updating blog post' });
  }
};


/**
 * delete the post
 * @param {*} req
 * @param {*} res
 */
export const deleteBlogPost = async(req, res) => {
  try {
    const id = req.params.id;
    const resp = await Post.findByIdAndDelete(id);
    res.status(200).send({
      data: resp,
      success: true,
      message: "successfull crate new post",
    });
  } catch (error) {
    res
      .status(500)
      .send({ data: null, success: false, message: "Internal Server Error.!" });
  }
};
