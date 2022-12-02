import React from "react";
import { Select } from 'antd';




export default function ModeSwitcher( {chooseMode}){
    const handleChange = (value) => {
        chooseMode(value);
    };
    return(
        <>
            <Select
                defaultValue="Pick your mode"
                style={{
                    width: 120,
                }}
                onChange={handleChange}
                options={[
                    {
                        value: 'easyMode',
                        label: 'Easy',
                    },
                    {
                        value: 'normalMode',
                        label: 'Normal',
                    },
                    {
                        value: 'hardMode',
                        label: 'Hard',
                    },
                ]}
            />
        </>
    )
}