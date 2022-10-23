import React from "react";



const PostItem = (
    {
        post = {
            "avatarIcon":"images/elon_musk_avatar.jpeg",
            "name":"Elon Musk",
            "handle":"@elonmusk",
            "time":"23h",
            "quote": "Amazing show about #S@inspiration4x#E mission!",
            "image":"images/inspiration4.jpeg",
            "title":"Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "story": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space",
            "website":"netflix.com",
            "comments":"4.2K",
            "tweets":"3.5K",
            "heart":"37.5K",
            "skip": false
        }
    }
) => {
    return(
    <li class="list-group-item">
        <div class="row border-bottom border-light">
    
            <div class="col-2">
                <img src={post.avatarIcon} alt="avatar" class="img-fluid rounded-circle"/>
            </div>
        
            <div class="col-10">
                <div>
                    <p class="m-0 fs-6"><span class="fw-bold">{post.name}</span> <i class="bi-check-circle-fill"></i> <span class="text-secondary">{post.handle}<span> - </span>{post.time}</span></p>
                    {!post.title.includes('#') ?

                        <p className="m-0 fs-6 ">{post.quote.split('#H')[0]}
                            <span class="text-primary">{post.highlight}</span>
                            {post.quote.split('#H')[1]}</p>:
                        <p class="m-0 fs-6">{post.quote}</p>
                    }
            </div>

                {!post.skip ?
                    <div>
                        <div class="row mt-2 m-0 p-0 wd-PostItem-img-top">
                                <img src={post.image} class="rounded-top border border-secondary m-0 p-0"/>
                        </div>
                            <div class="m-0 p-0 rounded-bottom border border-secondary">
                                <p class="ms-3 mt-0 mb-0 pt-2 fs-6">{post.title}</p>
                                <p class="ms-3 mt-0 mb-0 p-0 fs-6 text-secondary">{post.story}</p>
                                <p class="ms-3 mt-0 mb-2 p-0 fs-6 text-secondary"><i class="bi-link"></i> {post.website}</p>
                        </div>
                    </div> :

                    <div class="row mt-2 m-0 p-0 wd-PostItem-img-top-bottom">
                      <img src={post.image} class="rounded m-0 p-0"/>
                    </div>
                }
			
                <div class="row mt-3">
                    <div class="row col-3">
                        <p class="col-1"><a href="#"><i class="bi-chat-text-fill text-secondary"></i></a></p>
                        <p class="col-1 ms-0 text-secondary">{post.comments}</p>
                    </div>
                    <div class="row col-3 ms-2">
                        <p class="col-1"><a href="#"><i class="bi-forward-fill text-secondary"></i></a></p>
                        <p class="col-1 ms-0 text-secondary">{post.tweets}</p>
                    </div>
                    <div class="row col-3 ms-3">
                        <p class="col-1"><a href="#"><i class="bi-heart-fill text-secondary"></i></a></p>
                        <p class="col-1 ms-0 text-secondary">{post.heart}</p>
                    </div>
                    <div class="row col-3 ms-4">
                        <p class="text-secondary"><a href="#"><i class="bi-share-fill text-secondary"></i></a></p>
                    </div>
                </div>
            </div>
        </div>
     </li>
    );
};
export default PostItem;


