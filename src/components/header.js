import React from "react";
import s from './header.module.css'
export default function Header( {chosenMode}) {
    let mode;

    switch (chosenMode) {
        case "easyMode":
            mode = "easy";
            break;
        case "normalMode":
            mode = "normal"
            break;
        case "hardMode":
            mode = "hard"
            break;
    }

    return (
        <header>
            <div className={s.wrapper}>
            <h1>Welcome to our little game</h1>
            <p>{mode ? "Your mode is " + mode  : "Let's start. Please choose your mode"}</p>
            </div>
        </header>
    )

}