const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       <a class="list-group-item" href="/">
       <i class="fa fa-home"> <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">Home</span></i></a>
       <a class="list-group-item active" href="/">
       <i class="fa fa-hashtag"> <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">Explore</span></i></a>
       <a class="list-group-item" href="/">
       <i class="fa fa-bell"> <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">Notifications</span></i></a>
       <a class="list-group-item" href="/">
       <i class="fa fa-envelope"> <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">Messages</span></i></a>
       <a class="list-group-item" href="/">
       <i class="fa fa-bookmark"> <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">Bookmarks</span></i></a>
       <a class="list-group-item" href="/">
       <i class="fa fa-list"> <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">Lists</span></i></a>
       <a class="list-group-item" href="/">
       <i class="fa fa-user"> <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">Profile</span></i></a>
       <a class="list-group-item" href="/">
       <i class="fa fa-circle"> <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">More</span></i></a>
       
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;