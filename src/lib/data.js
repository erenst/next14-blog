import { User,Post } from "./models";
import { connectToDB } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
    try {
        connectToDB();
        const posts = await Post.find();
        return posts;

    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch data");
    }
};
export const getPost = async (slug) => {
    try {
        connectToDB();
        const post = await Post.findOne({ slug: slug });
        return post;

    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch data");
    }
};
export const getUsers = async () => {
    try {
        connectToDB();
        const users = await User.find();
        return users;

    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch data");
    }
};
export const getUser = async (id) => {
    noStore();
    try {
        connectToDB();
        const user = await User.findById(id);
        return user;

    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch data");
    }
};