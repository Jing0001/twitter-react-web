const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item">
             <div class="row ps-1 pe-sm-0">
                <div class="col-2 pe-0">
                    <img class="rounded-circle" src=${who.avatarIcon} style="width: 50px; height: 50px; border-radius: 50%"/>
                </div>
                <div class="col-7 ps-1">
                    <div class="fw-bolder ms-3">${who.userName} <i class="fas fa-check-circle ms-1"></i></div>
                    <div class="ms-3">${who.handleName}</div>
                </div>
                <div class="col-3 ps-0">
                    <button href="#" class="btn btn-primary rounded-pill mt-2">Follow</button>
                </div>
             </div>
        </li>     
    `);
}
export default WhoToFollowListItem;