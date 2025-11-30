import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const jsx = (<h1>React JS using JSX</h1>);

//React Component shud start with captial letter
const JsxComponent =  () =>  (
   
        <h1>React JS using JsxComponent</h1>
    
);
//or
//const JsxComponent =  () => {
// return <h1>React JS using JSX</h1>
// };

const JsxComponent1 =  () =>  (
    <div>
        <JsxComponent/>
        <h1>React JS using JsxComponent1</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<JsxComponent1/>);
