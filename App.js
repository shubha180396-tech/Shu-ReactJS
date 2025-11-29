import React from "react";
import ReactDOM from "react-dom/client";

{/* <div id='parent'>
    <div id='child'>
        <h1>Nested H1 Tag</h1>
    </div>
</div> */}

// const parent = React.createElement("div", { id: "parent" },React.createElement("div", { id: "child" },[React.createElement("h1", {},"Nested H1 Tag"),React.createElement("h2", {},"Nested H2 Tag"), React.createElement("h3", {},"Nested H3 Tagdffddf")]));
//====================================================================================
// const heading = React.createElement("h1",{id:"heading"},"ReactJS using core React element");
//Line 12 and 14 are same
const jsx = (<h1>React JS using JSX</h1>);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsx);
