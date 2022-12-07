import React, {useRef} from "react";
import s from "./logComponent.module.css"

export default function LogComponent( {getLogID}) {
    const logRef = useRef([])
    logRef.current[logRef.current.length-1] !== getLogID && logRef.current.push(getLogID)
        console.log(logRef)
    console.log(getLogID)
    const logs = logRef.current
    logs[0]==[''] && logs.splice(0)
    console.log(logs)
    const logElement = logs.map((log) =>   <div><p>hit coordinates col {log[0]} row {log[1]}  </p></div>).reverse()
    const logList =<div className={s.logBox}>{logElement}</div>

    return(
         <>
             {logs && logList}
         </>
    )
}