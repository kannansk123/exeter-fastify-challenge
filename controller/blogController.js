 const boom = require('boom')
const Blog = require("../model/Post")


exports.getAllPost = async (req, reply) => {
    try {
        let posts = await Blog.find();
        return posts;
    } catch (err) {
        throw boom.boomify(err)
    }
}


exports.addNewPost = async (req, reply) => {
    try {
        let post = new Blog(req.body);
        let newpost = await post.save();
        return {
            Message:"Added sucessfully"
        }

    } catch (err) {
        throw boom.boomify(err)
    }
}

exports.updatePost = async (req, reply) => {
    try {
        const id = req.params.id
        let result = await Blog.findByIdAndUpdate(id, req.body, {
            new: true
        });
        return {Message:"updated sucessfully"}

    } catch (err) {
        throw boom.boomify(err)
    }
}

exports.deletePost = async (req, reply) => {
    try {
        const id = req.params.id
        let result = await Blog.findByIdAndDelete(
            id
        );
        return {
            Message: "Deleted sucessfully"
        }

    } catch (err) {
        throw boom.boomify(err)

    }
}
