import React, {useRef} from "react";


export default function LogComponent( {getLogID}) {
    const logRef = useRef([])
    logRef.current[logRef.current.length-1] !== getLogID && logRef.current.push(getLogID)
        console.log(logRef)
    const logs = logRef.current
    const logElement = logs.map((log) => <div><p>hit coordinates col {log[0]} row {log[1]}  </p></div>).reverse()

    return(
        <div>
            {logElement}
        </div>
    )
}