import React from "react";
const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div className="text-secondary">{post.topic}</div>
                    <div class="fw-bold">{post.userName}<i className="bi-check-circle-fill"></i> <span class="fw-normal text-secondary">- {post.time}</span></div>

                    <div class="fw-bold">{post.title}</div>
                </div>
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={`${post.image}`}/>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;