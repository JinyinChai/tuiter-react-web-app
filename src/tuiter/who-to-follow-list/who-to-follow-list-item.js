import React from "react";

const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: 'https://erdavid.w3spaces.com/NASA_logo.png',
            userName: 'NASA',
            handler: '@NASA',
            UID: '4'
        }
    }
) => {
    return(
        <>
            <li className="list-group-item">
                {/*<div className="row">*/}
                {/*    <div className="col-2">*/}
                {/*        <img src={who.avatarIcon} alt="avatar" className="img-fluid img-thumbnail wd-image-sizing"/>*/}
                {/*    </div>*/}
                {/*    <div className="col-6">*/}
                {/*        <p className="mt-0 mb-0"><strong>{who.userName} </strong><i className="fa-solid fa-circle-check"></i></p><p className="mt-0 mb-0">{who.handle}</p>*/}
                {/*    </div>*/}
                {/*    <div className="col-4 mt-1">*/}
                {/*        <button className="btn btn-primary wd-left-button-tweet text-center override-button">*/}
                {/*            <span>Follow</span>*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="row">
                    <div className="col-2">
                        <img src={who.avatarIcon} className="img-fluid rounded-circle"/>
                    </div>
                    <div className="col-6">
                        <p className="mt-0 mb-0"><strong>{who.userName} </strong><i className="fa fa-check-circle"></i>
                        </p><p className="mt-0 mb-0">{who.handle}</p>
                    </div>
                    <div className="col-4 mt-1">
                        <button className="btn btn-primary rounded-pill float-end text-center">
                            <span>Follow</span>
                        </button>
                    </div>
                </div>
            </li>
        </>
    );
}
export default WhoToFollowListItem;