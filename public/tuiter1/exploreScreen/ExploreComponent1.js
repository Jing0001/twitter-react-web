import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent1 = () => {
    return(`
            <div class="row">
                <div class="col-11">
                    <span class="wd-search-tuits position-absolute" style="color:grey;"><i class="fas fa-search"></i></span>
                    <input class="form-control rounded-pill ps-5 mb-1" placeholder="Search Twitter" type="text"/>
                </div>
                <div class="col-1 mt-1 float-end">
                    <i class="fas fa-cog fa-2x text-primary"></i>
                </div>
            </div>
            <ul class="nav nav-tabs mt-1 mb-2">
                <li class="nav-item">
                    <a class="nav-link active" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="#">Entertainment</a>
                </li>
            </ul>
            <div class="row mt-1 position-relative">
                <img class="card-img-bottom" src="../../images/space.jpg" width="100%"/>
                <h2 class="text-white position-absolute bottom-0 left-0">SpaceX's Starship</h2>
            </div>
            ${PostSummaryList()}
    `);
}
export default ExploreComponent1;
