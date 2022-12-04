import React from "react";

export default function ModeHandler( {mode}) {


    const ROW = [];
    const TD = <td>  </td>
    for (let i=0; i<mode; i++) {
        ROW.push(TD)
    }

    const TR = <tr> {ROW} </tr>
    const COLUMN = [];
    for (let i=0; i<mode; i++) {
        COLUMN.push(TR)
    }

return(
    <table>
        {COLUMN}

    </table>
)

}