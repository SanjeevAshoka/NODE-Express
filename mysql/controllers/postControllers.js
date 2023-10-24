import Post from "../models/post.js"

class PostController {
    static getAllPost = async (req, res, next)=>{ 
        res.send("getAllPost route")
    }
    static createNewPost = (req, res, next)=>{ 
        const post = new Post("Post from client", "POst Body from Client here");
        post.save();
        res.send("create new")
    }
    static getPostById = (req, res, next)=>{ 
        res.send("get post by id");
    }
}
export default PostController;