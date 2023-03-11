import Assignment6 from "./a6";
import Nav from "../../src/nav";
import Assignment7 from "./a7";
import {Routes, Route} from "react-router";
function Labs() {
    return (
        <div>
            <Nav/>
            <Routes>
                <Route index
                       element={<Assignment7/>}/>
                <Route path="a6"
                       element={<Assignment6/>}/>
            </Routes>
        </div>
    );
}

export default Labs;