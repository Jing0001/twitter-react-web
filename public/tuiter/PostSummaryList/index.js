import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return (`
        <ul class="list-group-item">
                ${
        posts.map(post => {
            return(PostSummaryItem(post));
        }).join('')
    }                            
        </ul>
    `);
}
export default PostSummaryList;