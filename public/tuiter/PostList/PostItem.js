const PostItem = (post) => {
    return(`
    <li class="list-group-item">
        <div class="row border-bottom border-light">
    
            <div class="col-2">
                <img src=${post.avatarIcon} alt="avatar" class="img-fluid rounded-circle">
            </div>
        
            <div class="col-10">
                <div>
                    <p class="m-0 fs-6"><span class="fw-bold">${post.name}</span> <i class="fa fa-check-circle"></i> <span class="text-secondary">${post.handle} - ${post.time}</span></span></p>
                    <p class="m-0 fs-6">${post.quote}</p>
                </div>                
           
                ${!post.skip ?
                    `<div class="row mt-2 m-0 p-0 wd-PostItem-img-top"> 
                        <img src=${post.image} class="rounded-top border border-secondary m-0 p-0"> 
                    </div>
                    <div class="m-0 p-0 rounded-bottom border border-secondary">
                        <p class="ms-3 mt-0 mb-0 pt-2 fs-6">${post.title}</p>
                        <p class="ms-3 mt-0 mb-0 p-0 fs-6 text-secondary">${post.story}</p>
                        <p class="ms-3 mt-0 mb-2 p-0 fs-6 text-secondary"><i class="fa fa-link"></i> ${post.website}</p>
                    </div>`:
                    `<div class="row mt-2 m-0 p-0 wd-PostItem-img-top-bottom">
                        <img src=${post.image} class="rounded m-0 p-0">
                    </div>`
                }
                    
			
                <div class="row mt-3">
                    <div class="row col-3">
                        <p class="col-1"><a href="#"><i class="fa fa-comment text-secondary"></i></a></p>
                        <p class="col-1 ms-0 text-secondary">${post.comments}</p>
                    </div>
                    <div class="row col-3 ms-2">
                        <p class="col-1"><a href="#"><i class="fa fa-retweet text-secondary"></i></a></p>
                        <p class="col-1 ms-0 text-secondary">${post.tweets}</p>
                    </div>
                    <div class="row col-3 ms-3">
                        <p class="col-1"><a href="#"><i class="fa fa-heart text-secondary"></i></a></p>
                        <p class="col-1 ms-0 text-secondary">${post.heart}</p>
                    </div>
                    <div class="row col-3 ms-4">
                        <p class="text-secondary"><a href="#"><i class="fa fa-share text-secondary"></i></a></p>
                    </div>
                </div>
            </div>
        </div>
     </li>
    `);
}
export default PostItem;