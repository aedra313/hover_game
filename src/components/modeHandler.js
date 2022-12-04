import React from "react";

export default function ModeHandler( {mode}) {

    const ROW = [];
    for (let i=1; i<=mode; i++) {
        ROW.push(<td id={i.toString()}>  </td>)
    }

    const COLUMN = [];
    for (let i=1; i<=mode; i++) {
        COLUMN.push(<tr id={i.toString()}> {ROW} </tr>)
    }

return(
    <table>
        {COLUMN}
    </table>
)

}