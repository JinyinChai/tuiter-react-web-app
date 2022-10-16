import PostSummaryList from "../PostSummaryList/index.js"

const ExploreComponent = () => {
    return(`
            <div class="row">
                       <!-- search field and cog -->  
               <div class="col-11 mt-1 position-relative">
                    <input class="col-12 rounded-pill ps-5 pt-2 pb-2 bg-white border-0" type="search" placeholder="Search Twitter"/>
                    <i class="fa fa-search position-absolute top-0 start-0 ps-4 pt-2 text-secondary"></i>
                </div>
    
               <div class="col-1">
                   <a href="explore-settings.html"><i class="fa fa-cog fa-2x text-primary"></i></a>
               </div>              

           </div>
           <ul class="nav mb-2 nav-tabs">
                      <!-- tabs -->
                      <ul class="nav nav-tabs border-0">
                        <li class="nav-item">
                            <a class="nav-link active bg-black text-white border-top-0 border-start-0 border-end-0 border-primary border-bottom border-4" href="for-you.html">For you</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link border-top-0 border-start-0 border-end-0" href="trending.html">Trending</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link border-top-0 border-start-0 border-end-0" href="news.html">News</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link border-top-0 border-start-0 border-end-0" href="sports.html">Sports</a>
                        </li>
                        <li class="nav-item d-none d-sm-none d-md-inline d-lg-inline d-xl-inline d-xl-inline d-xxl-inline">
                            <a class="nav-link border-top-0 border-start-0 border-end-0" href="entertainment.html">Entertainment</a>
                        </li>
                    </ul>
           </ul>
           <!-- image with overlaid text -->
           <div class="row border border-dark border-1 position-relative float-start">
                <img src="../images/spaceX_starship.webp" class="m-0 p-0">
                <div class="h1 text-white position-absolute bottom-0">SpaceX's Starship</div>
           </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
