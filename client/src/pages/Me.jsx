import {Calendar} from "@skbkontur/react-ui";
import React from "react";

const Main = () => {
    return (
        <div>
            <h2>Это страница ВТОРАЯ</h2>
            <Calendar value={'01.01.2025'} onValueChange={(() => alert('ggg'))}></Calendar>
        </div>
    )
}

export const PageTwo = () => Main();