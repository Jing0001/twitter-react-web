import React from "react";
import {updateTuitThunk} from "../../services/tuits-thunks";
// import {likeTuit, unlikeTuit} from "../reducers/tuits-reducer";
import {useDispatch} from "react-redux";

const TuitStats = (
    {tuit}
) => {
    const dispatch = useDispatch();
    const likeTuitHandler = (tuit) => {
        dispatch(updateTuitThunk({
            ...tuit,
            likes: tuit.likes + 1,
            liked: true
        }));
    }
    const unlikeTuitHandler = (tuit) => {
        dispatch(updateTuitThunk({
            ...tuit,
            likes: tuit.likes - 1,
            liked: false
        }));
    }
    // const likeTuitHandler = (tuit) => {
    //     dispatch(likeTuit(tuit));
    // }
    // const unlikeTuitHandler = (tuit) => {
    //     dispatch(unlikeTuit(tuit));
    // }
    return(
        <div className="row text-secondary mt-3">
            <div className="col"><i className="bi bi-chat me-2"></i> {tuit.replies}</div>
            <div className="col"><i className="bi bi-repeat me-2"></i> {tuit.retuits}</div>
            <div className="col">
                {tuit.liked && <i onClick={() => unlikeTuitHandler(tuit)} className="bi bi-heart-fill text-danger"></i>}
                {!tuit.liked && <i onClick={() => likeTuitHandler(tuit)} className="bi bi-heart me-2"></i>}
                {tuit.likes}
            </div>
            <div className="col"><i className="bi bi-share"></i></div>
        </div>
    )
}
export default TuitStats;
