import React, {useEffect} from "react";
/*import tuits from "../data/tuits.json";*/               // import the tuits
import TuitListItem from "./tuitItem";           // import the TuitListItem
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk}
    from "../../services/tuits-thunks";

const TuitList = () => {
    const {tuits, loading} = useSelector((state) => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])


    return(
        <>
            {
                tuits.map(tuit => {
                    return(
                        <TuitListItem tuits={tuit} key={tuit._id}/>
                    );
                })
            }
        </>
    )
}

export default TuitList;

