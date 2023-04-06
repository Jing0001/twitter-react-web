import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/index.js";
const HomeScreenComponent = () => {
    let active = 'home';
    $('#wd-home').append(`
         <div class="row mt-2">
            <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                ${NavigationSidebar('home')}
            </div>
            <div class="col-10 col-lg-7 col-xl-6 text-white">
                ${PostList()}
            </div>
            <div class="d-none d-sm-none d-md-none col-lg-4 col-xl-4 text-white d-lg-block">
                ${PostSummaryList()}
            </div>
         </div>
    `);
    $("#home1").addClass("active");
}
$(HomeScreenComponent);