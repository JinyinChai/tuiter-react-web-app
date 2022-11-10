import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {deleteTuit, likeTuit} from "../reducers/tuits-reducer";

const TuitStat = ({tuits}) => {
    const dispatch = useDispatch();
    // const likeTuitHandler = (id) => {
    //     dispatch(updateTuitThunk(id));
    //     tuits.heart = tuits.heart + 1;
    // }

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
                {/*onClick={() => likeTuitHandler(tuits._id)}*/}
                <div className="row col-3 ms-3">
                    <p className="col-1 fg-color-white"><i onClick={() => updateTuitThunk(dispatch, {...tuits, heart: tuits.heart + 1})} className="bi-hand-thumbs-up-fill"></i></p>
                    <p className="col-1 ms-0 text-white">{tuits.heart}</p>
                </div>

                <div className="row col-3 ms-4">
                    <p className="text-white"><a href="\"><i className="bi-share-fill text-white"></i></a></p>
                </div>
            </div>
        </>

    )
}

export default TuitStat;