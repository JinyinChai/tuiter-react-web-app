import React from "react";
import {useDispatch} from "react-redux";                                        // import useDispatch
import TuitStat from "./tuitStats";
import {deleteTuit} from "../reducers/tuits-reducer";



const TuitListItem = ({tuits}) => {

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return(
        <>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-2">
                        <img src={tuits.avatarIcon} alt="avatar" className="img-fluid rounded-circle"/>
                    </div>

                    <div className="col-10">
                        <div>
                            <p className="m-0 fs-6">{tuits.username} <i className="fa-solid fa-circle-check"></i>
                                <span className="fg-color-darkgray">{tuits.handle}<i onClick={() => deleteTuitHandler(tuits._id)} className="bi bi-x-lg float-end"></i></span></p>
                            <p className="m-0 fs-6">{tuits.tuit}</p>
                        </div>

                        <div className="row mt-2 m-0 p-0 wd-PostItem-img-bottom">
                            {
                                tuits.attachments && tuits.attachments.video &&
                                <iframe className="wd-border-width-thin-rounded-bottom m-0 p-0" width="560" height="236"
                                        src={tuits.attachments.video} title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                                </iframe>
                            }
                            {
                                tuits.attachments && tuits.attachments.image &&
                                <img src={tuits.attachments.image} alt="attachment" className="wd-border-width-thin-rounded-bottom m-0 p-0"/>
                            }
                        </div>

                    {/*<div class="col-2">*/}
                    {/*    <img src={tuits.avatarIcon} alt="avatar" class="img-fluid rounded-circle"/>*/}
                    {/*</div>*/}

                    {/*<div class="col-10">*/}
                    {/*    <div>*/}
                    {/*        <p class="m-0 fs-6"><span class="fw-bold">{tuits.name}</span> <i class="bi-check-circle-fill"></i> <span class="text-secondary">{tuits.handle}<span> - </span>{tuits.time}</span></p>*/}
                    {/*        {!tuits.title.includes('#') ?*/}

                    {/*            <p className="m-0 fs-6 ">{tuits.quote.split('#H')[0]}*/}
                    {/*                <span class="text-primary">{tuits.highlight}</span>*/}
                    {/*                {tuits.quote.split('#H')[1]}</p>:*/}
                    {/*            <p class="m-0 fs-6">{tuits.quote}</p>*/}
                    {/*        }*/}
                    {/*    </div>*/}

                    {/*    {!tuits.skip ?*/}
                    {/*        <div>*/}
                    {/*            <div class="row mt-2 m-0 p-0 wd-PostItem-img-top">*/}
                    {/*                <img src={tuits.image} class="rounded-top border border-secondary m-0 p-0"/>*/}
                    {/*            </div>*/}
                    {/*            <div class="m-0 p-0 rounded-bottom border border-secondary">*/}
                    {/*                <p class="ms-3 mt-0 mb-0 pt-2 fs-6">{tuits.title}</p>*/}
                    {/*                <p class="ms-3 mt-0 mb-0 p-0 fs-6 text-secondary">{tuits.story}</p>*/}
                    {/*                <p class="ms-3 mt-0 mb-2 p-0 fs-6 text-secondary"><i class="bi-link"></i> {tuits.website}</p>*/}
                    {/*            </div>*/}
                    {/*        </div> :*/}

                    {/*        <div class="row mt-2 m-0 p-0 wd-PostItem-img-top-bottom">*/}
                    {/*            <img src={tuits.image} class="rounded m-0 p-0"/>*/}
                    {/*        </div>*/}
                    {/*    }*/}

                        {/* Update tuits here! */}
                        <TuitStat tuits={tuits}/>

                    </div>
                </div>
            </li>

        </>
    )
}

export default TuitListItem;