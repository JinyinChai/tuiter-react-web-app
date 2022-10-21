import React from "react";
import Post from './Post.json';
import PostItem
    from "./PostItem";
import postsArray from "../post-summary-list/posts.json";
import PostSummaryItem from "../post-summary-list/post-summary-item";

const PostList = () => {
    return (
        <ul className="list-group">
            {
                Post.map(post =>
                    <PostItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
}
export default PostList;