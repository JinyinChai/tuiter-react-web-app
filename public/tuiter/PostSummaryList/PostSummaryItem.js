const PostSummaryItem = (post) => {

    if (post.tweets !== undefined){
        return(`
        <div class="row mt-0 border-col border-dark bg-light">
            <div class="col-10 mt-1 mb-3">
                <p class="m-0 fs-6 text-secondary">${post.topic}</p>
                <p class="m-0 fs-6 fw-bold text-white">${post.userName} <i class="fa fa-check-circle"></i><span class="fw-lighter text-secondary"> - ${post.time}</span></p>
                <p class="m-0 fs-6 fw-bold text-white">${post.title}</p>
                <p class="m-0 fs-6 text-secondary">${post.tweets} Tweets</p>
            </div>
            <div class="col-2 mt-1 mb-3">
                <img src="${post.image}" class="img-fluid img-thumbnail mt-1 border-0">
            </div>
        </div>
    
        `);
    } else {
        return(`
        <div class="row mt-0 border-col border-dark bg-light">
            <div class="col-10 mt-1 mb-3">
                <p class="m-0 fs-6 text-secondary">${post.topic}</p>
                <p class="m-0 fs-6 fw-bold text-white">${post.userName} <i class="fa fa-check-circle"></i><span class="fw-lighter text-secondary"> - ${post.time}</span></p>
                <p class="m-0 fs-6 fw-bold text-white">${post.title}</p>
            </div>
            <div class="col-2 mt-1 mb-3">
                <img src="${post.image}" class="img-fluid img-thumbnail mt-1 border-0">
            </div>
        </div>
    
        `);
    }



}

export default PostSummaryItem;