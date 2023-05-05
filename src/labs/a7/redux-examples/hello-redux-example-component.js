import React from "react";
import {useSelector} from "react-redux";

const HelloReduxExampleComponent = () => {
    // use Redux's useSelector hook to extract the message from the reducers
    // when the component loads, reducers pass the data in the function declared in useSelector
    const message = useSelector((state) => state.hello.message);
    return(
        <h1>{message}</h1>
    );
};

export default HelloReduxExampleComponent;
