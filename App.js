import React from "react";
import ReactDOM from "react-dom/client";

// JSX (Transpiled before it reaches the JS using Babel in Parcel)
// JSX => Reaact.createElement => ReactElement-JS Oject => HTMLElement(render)

const jsxHeading = <h1 id = "heading">React using JSX</h1>;

//Both React Core and JSX make Ojects 

//React Fuctional Components (Its Name always needs to be in Captial Letters)
const HeadingComponent = () => {
    return <h1>React Functional Components</h1>

}
const HeadingComponent2 = () => (
    <h1>React Functional Components</h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);