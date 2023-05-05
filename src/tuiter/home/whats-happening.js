import React, {useState} from "react";
import {createTuit} from "../reducers/tuits-reducer";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    // whatsHappening: represents the current state value, which is initially an empty string.
    // setWhatsHappening: This function is used to update the state value.
    let [whatsHappening, setWhatsHappening] = useState('');
    // retrieve dispatch function with hook
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        // create new tuit with text typed in textarea
        const newTuit = {
            tuit: whatsHappening
        }
        // send tuit as action payload
        dispatch(createTuit(newTuit));
    }
    return (
        <div className="row">
            <div className="col-auto">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg" width={60}/>
            </div>
            <div className="col-10">
                <textarea value={whatsHappening}
                          placeholder="What's happening?"
                          className="form-control border-solid"
                          onChange={(event) => setWhatsHappening(event.target.value)}>
                </textarea>
                <div>
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                            onClick={tuitClickHandler}>
                        Tuit
                    </button>
                    {/*<div className="text-primary fs-2">*/}
                    {/*    <i className="bi bi-card-image me-3"></i>*/}
                    {/*    <i className="bi bi-filetype-gif me-3"></i>*/}
                    {/*    <i className="bi bi-bar-chart me-3"></i>*/}
                    {/*    <i className="bi bi-emoji-smile me-3"></i>*/}
                    {/*    <i className="bi bi-geo-alt"></i>*/}
                    {/*</div>*/}
                </div>
            </div>
            {/*displayed a horizontal rule that is used to separate content*/}
            <div className="col-12">
                <hr/>
            </div>
        </div>
    );
}
export default WhatsHappening;
