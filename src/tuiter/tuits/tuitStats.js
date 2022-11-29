import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {deleteTuit, updateTuit} from "../reducers/tuits-reducer";

const TuitStat = ({tuits}) => {
    const dispatch = useDispatch();
    // const likeTuitHandler = (id) => {
    //     dispatch(updateTuitThunk(id));
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

                <div className="row col-3 ms-3">
                    <p className="col-1 fg-color-white"><i onClick={() => dispatch(updateTuitThunk({
                        ...tuits,
                        likes: tuits.likes + 1
                    }))} className="bi-hand-thumbs-up-fill"></i></p>
                    <p className="col-1 ms-0 text-white">{tuits.likes}</p>
                </div>

                <div className="row col-3 ms-3">
                    <p className="col-1 fg-color-white"><i onClick={() => dispatch(updateTuitThunk({
                        ...tuits,
                        dislikes: tuits.dislikes + 1
                    }))} className="bi-hand-thumbs-down-fill"></i></p>
                    <p className="col-1 ms-0 text-white">{tuits.dislikes}</p>
                </div>

            </div>
        </>

    )
}

export default TuitStat;