// import {Link}
//     from "react-router-dom";
//
//
// import Assignment6 from "./a6";
// function Labs() {
//     return(
//         <div>
//             {/*<h1>Assignment 6</h1>*/}
//             <Assignment6/>
//         </div>
//     );
// }
// export default Labs;

import Nav from "../nav";
import Assignment6 from "./a6";
import Assignment7 from "./a7";
import {Routes, Route} from "react-router";

function Labs() {
    return (
        <div>
            <Nav/>
            <Routes>
                <Route index
                       element={<Assignment6/>}/>
                <Route path="a7"
                       element={<Assignment7/>}/>
            </Routes>
        </div>
    );
}

export default Labs;