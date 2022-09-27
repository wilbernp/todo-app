import React, { useState } from 'react'
import "./checkbox.css"
export default function Checkbox({ handleActive, active, lightMode }) {
    let classCheckbox = `checkbox 
    ${active && "checkbox-active"} 
    ${lightMode && "checkbox-light"}`
    return (
        <div className='container-items-checkbox'>
            <div onClick={() => handleActive(!active)} className={classCheckbox}>
                <div className="check"></div>
            </div>
        </div>
    )
}
