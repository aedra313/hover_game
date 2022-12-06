import React from "react";


export default function ModeHandler( {chosenMode, getLogID}) {

    let rowID;
    let mode;


    const handleMouseEnterRow = event => { rowID = event.currentTarget.id; }

    const handleMouseEnterColumn = event => {
        getLogID([event.currentTarget.id, rowID]);
        if (event.currentTarget.classList.contains('active')) {
            event.currentTarget.classList.remove('active')
        } else {
            event.currentTarget.classList.add('active')
        }

    }

    switch (chosenMode) {
        case "easyMode":
            mode = 5;
            break;
        case "normalMode":
            mode = 10
            break;
        case "hardMode":
            mode = 15
            break;
    }
    console.log(chosenMode)

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