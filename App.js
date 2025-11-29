import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1",{id:"heading"},"ReactJS!!!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

{/* <div id='parent'>
    <div id='child'>
        <h1>Nested H1 Tag</h1>
    </div>
</div> */}

const parent = React.createElement("div", { id: "parent" },React.createElement("div", { id: "child" },[React.createElement("h1", {},"Nested H1 Tag"),React.createElement("h2", {},"Nested H2 Tag"), React.createElement("h3", {},"Nested H3 Tagdffddf")]));

console.log(parent)// createElement is nothing but the object which has attributes and child
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

root.render(parent);