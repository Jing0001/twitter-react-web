const NavigationSidebar = (activeElement) => {
    $(document).ready(function () {
        $('#' + activeElement).addClass('active');
    });
    return(`
   <div class="list-group">
     <a class="list-group-item" href="#">
       <i class="fab fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
        <a href="../HomeScreen/index.html" id="home1" class="list-group-item list-group-item-action d-inline-flex justify-content-start">
            <i class="fas fa-home mt-1"></i>
            <span class="d-none d-xl-block ms-1">Home</span></a>
        <a href="../explore/index.html" id="explore1" class="list-group-item list-group-item-action d-inline-flex justify-content-start">
            <i class="fas fa-hashtag mt-1"></i>
            <span class="d-none d-xl-block ms-1">Explore</span></a>
        <a href="#" class="list-group-item list-group-item-action d-inline-flex justify-content-start">
            <i class="fas fa-bell mt-1"></i>
            <span class="d-none d-xl-block ms-1">Notifications</span></a>
        <a href="#" class="list-group-item list-group-item-action d-inline-flex justify-content-start">
            <i class="fas fa-envelope mt-1"></i>
            <span class="d-none d-xl-block ms-1">Messages</span></a>
        <a href="#" class="list-group-item list-group-item-action d-inline-flex justify-content-start">
            <i class="fas fa-bookmark mt-1"></i>
            <span class="d-none d-xl-block ms-1">Bookmarks</span></a>
        <a href="#" class="list-group-item list-group-item-action d-inline-flex justify-content-start">
            <i class="fas fa-list mt-1"></i>
            <span class="d-none d-xl-block ms-1">Lists</span></a>
        <a href="#" class="list-group-item list-group-item-action d-inline-flex justify-content-start">
            <i class="fas fa-user mt-1"></i>
            <span class="d-none d-xl-block ms-1">Profile</span></a>
        <a href="#" class="list-group-item list-group-item-action d-inline-flex justify-content-start">
            <i class="fas fa-ellipsis-h mt-1"></i>
            <span class="d-none d-xl-block ms-1">More</span></a>    
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;