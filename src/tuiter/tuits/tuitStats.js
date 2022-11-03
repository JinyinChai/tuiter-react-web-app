import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit, likeTuit} from "../reducers/tuits-reducer";

const TuitStat = ({tuits}) => {
    const dispatch = useDispatch();
    const likeTuitHandler = (id) => {
        dispatch(likeTuit(id));
    }
    return(
        <>
            <div className="row mt-3">
                <div className="row col-3">
                    <p className="col-1"><a href="\"><i className="bi-chat-text-fill text-white"></i></a></p>
                    <p className="col-1 ms-0 text-white">{tuits.comments}</p>
                </div>
                <div className="row col-3 ms-2">
                    <p className="col-1"><a href="\"><i className="bi-forward-fill text-white"></i></a></p>
                    <p className="col-1 ms-0 text-white">{tuits.tweets}</p>
                </div>

                <div className="row col-3 ms-3" onClick={() => likeTuitHandler(tuits._id)}>
                    {
                        tuits.liked &&
                        <p className="col-1 text-white"><i className="bi-heart-fill" style={{color:tuits.liked ? 'red' : 'white'}}></i></p>

                    }
                    {
                        !tuits.liked &&
                        <p className="col-1 text-white"><i className="bi-heart"></i></p>
                    }
                    {
                        <p className="col-1 ms-0 text-white">{tuits.heart}</p>
                    }
                </div>

                <div className="row col-3 ms-4">
                    <p className="text-white"><a href="\"><i className="bi-share-fill text-white"></i></a></p>
                </div>
            </div>
        </>

    )
}

export default TuitStat;