import React, {useState} from "react";
import {createTuitThunk}
    from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        const newTuit = {
            tuit: whatsHappening
        }
        // use thunk instead of reducer function
        // createTuitThunk: posts the new tuit to the server using the corresponding service createTuit
        // and the new tuit is dispatched to the reducer to be added to the state.
        // The reducer updates the state appending the new tuit to the current state
        // which makes its way through the store, provider, selector and back into the user interface for rendering.
        dispatch(createTuitThunk(newTuit));
    }
    return (
        <div className="row">
            <div className="col-auto">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg" width={60}/>
            </div>
            <div className="col-10">
       <textarea value={whatsHappening} placeholder="What's happening?"
                 className="form-control border-0"
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
            <div className="col-12"><hr/></div>
        </div>
    );
}
export default WhatsHappening;
