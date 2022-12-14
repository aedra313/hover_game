import React, {useEffect, useRef, useState} from "react";
import s from "./modeHandler.module.css"


export default function ModeHandler( {chosenMode, getLogID, switchMode}) {
    const modeRef = useRef([])
    modeRef.current[modeRef.current.length - 1] !== chosenMode && modeRef.current.push(chosenMode)
    const[length, setLength] = useState(1)
    const[toggle, setToggle] = useState(false)


    console.log(length != modeRef.current.length)

    let elements = document.querySelectorAll(' div > div');

    if(length != modeRef.current.length){
        setToggle(!toggle)
        switchMode(toggle)
        console.log(toggle)
        setLength(modeRef.current.length) ;
        for (let elem of elements) {
            elem.classList.remove('active')
        }}

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
        COLUMN.push(<div onMouseEnter={handleMouseEnterColumn} id={i.toString()}>  </div>)
    }

    const ROW = [];
    for (let i=1; i<=mode; i++) {
        ROW.push(<div onMouseEnter={handleMouseEnterRow} id={i.toString()}> {COLUMN} </div>)
    }

return(
    <div className={s.table}>
        {ROW}
    </div>
)

}