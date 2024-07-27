import React from "react";
import style from "../modules/card.module.css"

export default function Card({title, description, imgName, border}) {
    return (
        <div className={style.card} style={{borderColor:border}}>
            <h3>{title}</h3>
            <p className={style.desc}>{description}</p>
            <img className={style.icon} src={`./icon-${imgName}.svg`} alt={`icon-${imgName}`}/>
        </div>
    )
}
