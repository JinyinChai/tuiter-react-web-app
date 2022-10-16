/* eslint-env jquery */
import PostList from "../PostList/PostList.js";
import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "../ExploreScreen/ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import PostSummaryList from "../PostSummaryList/index.js";

(function ($) {
    $('#wd-home').append(`
      <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
   <div class="">
  <a href="../../index.html">Back</a>
</div>
   <!--<h3>Navigation Sidebar</h3>-->
    ${NavigationSidebar('home')}
   </div>
   <div class="col-10 col-lg-7 col-xl-6 mt-4 text-white ps-0">
<!--    <h3>ExploreComponent</h3>-->
<div class="p-2 bg-light">${PostList()}</div>
     

   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 mt-4 text-white">
<!--    <h3>WhoToFollowList </h3>-->

      ${PostSummaryList()}
   </div>
  </div>

        
    `);
})($);

