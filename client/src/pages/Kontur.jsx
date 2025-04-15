import {Calendar} from "@skbkontur/react-ui";
import React from "react";

const Main = () => {
    return (
        <div>
            <Calendar value={'01.01.2025'} onValueChange={(() => alert('ggg'))}></Calendar>
        </div>
    )
}

export const PageOne = () => Main();