import React from "react";
import HelloReduxExampleComponent
    from "./hello-redux-example-component";
// import reducer that calculates/generates the data
import hello from "./reducers/hello";
import todos from "./reducers/todos-reducer";
// import Provider which will deliver the data
import {Provider} from "react-redux";
import { configureStore }
    from '@reduxjs/toolkit';
import Todos from "./todos-component";

// create data storage, combine all reducers into a single store, each available through these namespaces
const store = configureStore({
    reducer: {hello, todos}
});

const ReduxExamples = () => {
    return(
        // Provider delivers data in store to all its child components
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                {/*render todos component*/}
                <Todos/>
                {/*component consumes the data*/}
                <HelloReduxExampleComponent/>
            </div>
        </Provider>
    );
};
export default ReduxExamples;
