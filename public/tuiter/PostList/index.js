import MiddlePosts from "./MiddlePosts.js";
import PostItem from "./PostItem.js";

const PostList = () => {
    return (`
            <ul class="list-group">
                ${
        MiddlePosts.map(middleposts => {
            return (PostItem(middleposts));
        }).join('')
    }</ul>
    `);
}
export default PostList;