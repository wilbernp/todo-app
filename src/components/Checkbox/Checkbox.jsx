import React, { useState } from 'react'
import "./checkbox.css"
export default function Checkbox({ handleActive, active, label }) {
    return (
        <div className='container-items-checkbox'>
            <div onClick={() => handleActive(!active)} className={`checkbox ${active && "checkbox-active"}`}>
                <div  className="check"></div>
            </div>
            {
                label?.length && <label className='label-checkbox'>{label}</label>
            }
        </div>
    )
}
