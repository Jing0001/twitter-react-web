import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
    return (`
            <div class="list-group">
                <div class="list-group-item fw-bold">Who to follow</div>
                <ul class="list-group-item">
                ${
        who.map(who => {
            return (WhoToFollowListItem(who));
        }).join('')
    }
    </ul>
    </div>
    </div>
    `);
}
export default WhoToFollowList;