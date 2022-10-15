/* eslint-env jquery */

import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList";
import PostSummaryList from "../PostSummaryList/index.js";
// import PostSummaryList from "../PostSummaryList";
// import PostSummaryItem from "../PostSummaryList/PostSummaryItem";

function exploreComponent() {
    $('#wd-explore').append(`
       <h2>Explore</h2>
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
   <!--<h3>Navigation Sidebar</h3>-->
    ${NavigationSidebar()}
   </div>
   <div class="col-10 col-lg-7 col-xl-6 text-white">
<!--    <h3>ExploreComponent</h3>-->
        <div class="mt-2">
            ${PostSummaryList()}
        </div>

   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 text-white">
<!--    <h3>WhoToFollowList </h3>-->
        ${WhoToFollowList()}
   </div>
  </div>
   `);
}
$(exploreComponent);