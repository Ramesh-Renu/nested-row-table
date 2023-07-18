import React from "react";

export default function IconsCheck({className,onClick,ariaLabel}) {

    return(
        <span className={className} onClick={onClick} aria-label={ariaLabel}></span>
    )
}