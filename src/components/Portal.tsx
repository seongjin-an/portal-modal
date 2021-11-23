import React from "react";
import {createPortal} from "react-dom";

interface IProps {
    selector?: string;
}

const Portal: React.FC<IProps> = ({children, selector}) => {
    const rootElement = selector && document.getElementById(selector);
    return(
        <>
            {
                rootElement ? createPortal(children, rootElement) : children
            }
        </>
    )
}
export default Portal