import PostSummaryItem from "./PostSummaryItem.js";
import post from "./post.js"

const PostSummaryList = () => {
    return (`
            <div>
                ${post.map(item => {return PostSummaryItem(item);}).join('')}
            </div>
            
`); }
export default PostSummaryList;