import React from "react";
import ReactDOM from "react-dom/client";

// JSX (Transpiled before it reaches the JS using Babel in Parcel)
// JSX => Reaact.createElement => ReactElement-JS Oject => HTMLElement(render)

const el = <span>Rect Element</span>

const title = (
<h1 id = "head" tabIndex="5">
    {el}
    This is Rect Element 
</h1>
);
const Title1 = () => (
<h1 id = "head" tabIndex="5">
    This is React Function Component
    {/* <HeadingComponent - Don't do this it will creaate aan infinit loop */}
</h1>
);

//Both React Core and JSX make Ojects 

//React Fuctional Components (Its Name always needs to be in Captial Letters)

const HeadingComponent = () => (
    <div id="container">
    {title}
    
    {/* This 3 things are same:
    -> {Title()}
    -> <Title/>
    -> <Title></Title>
    */}

    <Title1 />
    <h1 id="heading">React Functional Components</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);