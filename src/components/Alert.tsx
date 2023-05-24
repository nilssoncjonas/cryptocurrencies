import React from "react";

interface IProp {
    data: string
}

const Alert: React.FC<IProp> = ({data}) => {
    return (
        <div id="alert">
            <p>Vänligen försök igen om en stund!<span>{data}</span></p>
        </div>
    )
}
export default Alert