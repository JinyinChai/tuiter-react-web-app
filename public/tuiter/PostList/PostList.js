import post from "./post.js";
import PostItem from "./PostItem.js";

const PostList = () => {
    return (`
                ${post.map(item => {return PostItem(item);}).join('')}
    `); }
export default PostList;