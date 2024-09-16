import { RiErrorWarningLine } from "@remixicon/react";
import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <main>
            <div className="error">
                <RiErrorWarningLine/>
                <h1>{err.status} : {err.statusText}</h1>
                <h5>OOPS SOMETHING WENT WRONG!!!</h5>
            </div>
        </main>
)};

export default Error;