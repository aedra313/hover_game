import React from "react";

export default function ModeHandler( {mode, getLogID}) {

    let rowID;

    const handleMouseEnterRow = event => { rowID = event.currentTarget.id; }

    const handleMouseEnterColumn = event => { getLogID([event.currentTarget.id, rowID]);    }


    const COLUMN = [];
    for (let i=1; i<=mode; i++) {
        COLUMN.push(<td onMouseEnter={handleMouseEnterColumn} id={i.toString()}>  </td>)
    }

    const ROW = [];
    for (let i=1; i<=mode; i++) {
        ROW.push(<tr onMouseEnter={handleMouseEnterRow} id={i.toString()}> {COLUMN} </tr>)
    }

return(
    <table>
        {ROW}
    </table>
)

}