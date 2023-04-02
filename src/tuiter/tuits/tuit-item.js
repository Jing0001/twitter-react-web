import React from "react";
import TuitStats from "./tuit-stats";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitItem = (
    {tuit}
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-auto">
                    <img width={50} className="float-end rounded-circle" src={tuit.image}/>
                </div>
                <div className="col-10">
                    <div>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}></i>
                        <div className="fw-bold">{tuit.userName}<i className="bi bi-check-circle-fill text-primary ms-2 me-1"></i><span
                            className="fw-normal text-secondary"> {tuit.handle} • {tuit.time}</span></div>
                    </div>
                    <div>{tuit.tuit}</div>
                    <TuitStats tuit={tuit}/>
                </div>
            </div>
        </li>
    );
}
export default TuitItem;