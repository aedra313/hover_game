import React, {useRef} from "react";
import s from "./logComponent.module.css"

export default function LogComponent( {getLogID}) {
    const logRef = useRef([])
    logRef.current[logRef.current.length - 1] !== getLogID && logRef.current.push(getLogID)
    console.log(logRef)

    console.log(getLogID)
    const logs = logRef.current


    if(logs.length >= 2 && logs[logs.length - 1][1] === undefined){
        logs[logs.length - 1][1] = logs[logs.length - 2][1]
    }


    logs[0]===[''] && logs.splice(0)
    console.log(logs)
    const logElement = logs.map((log) =>   <div><p className={s.logItem}>hit coordinates col {log[0]} row {log[1]}  </p></div>).reverse()
    const logList =<div className={s.logBox}>{logElement}</div>

    return(
         <>
             {logs && logList}
         </>
    )
}