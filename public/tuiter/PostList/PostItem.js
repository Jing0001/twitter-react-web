const PostItem = (middleposts) => {
    return (`
        <li class="list-group-item bg-black">
            <div class="row">
                <div class="col-2">
                    <img class="rounded-circle me-2 d-inline-block" src=${middleposts.icon} height="70px" width="70px"/>
                </div>
                <div class="col-10 ps-3">
                    <div class="d-flex justify-content-between">
                        <div class="fw-bold">${middleposts.userName} 
                        <i class="fas fa-check-circle"></i>
                        <span class="fw-light text-secondary ms-0">${middleposts.handleName} • ${middleposts.time}</span>
                        </div>
                        <i class="fas fa-ellipsis-h text-secondary wd-flex-noWrap"></i>
                    </div>
                    <div class='mb-1'>${middleposts.topTitle}</div>
                    <div class="bg-black card border-secondary mt-2">
                        <img class="border-bottom border-secondary" src=${middleposts.image}>
                        ${middleposts.title != '' ? `
                        <div class="card-body">
                            <div class="card-title">${middleposts.title}</div>
                            <p class="card-text text-secondary">${middleposts.content}</p>
                            <div><i class="fas fa-link text-secondary"></i>${middleposts.link}</div>
                        </div>
                        `
                        : ``}
                    </div>
                    <div class="row text-secondary mt-2 ps-1">
                        <div class="col"><i class="far fa-comment me-2"></i>${middleposts.comment}</div>
                        <div class="col"><i class="fas fa-retweet me-2"></i>${middleposts.retuit}</div>
                        <div class="col"><i class="far fa-heart me-2"></i>${middleposts.like}</div>
                        <div class="col"><i class="far fa-share-square me-2"></i></div>
                    </div>
                </div>
            </div>
        </li>
    `);
}
export default PostItem;