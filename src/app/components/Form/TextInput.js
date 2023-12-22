import { useState } from "react"

export default function TextInput(props) {
    // TODO: ADD NUMBER TYPE WITH VALIDATOR
    const {
        type,
        label = "LABEL_TEXT",
        placeholder = "PLACEHOLDER_TEXT",
        varName = "varName",
        icon,
        parentHandler,
        overlayHandler
    } = props

    function isNumeric(str) {
        if (typeof str != "string") return false // we only process strings!  
        return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
            !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
    }

    const onChangeHandler = e => {
        const value = e.currentTarget.value

        parentHandler(value)
    }

    return (
        <div className="text-input">
            <label htmlFor="">{label}</label>
            <div className="input-container">
                <input
                    name={varName}
                    type={type}
                    placeholder={placeholder}
                    autoComplete="off"
                    onChange={onChangeHandler}
                    onFocus={e => {
                        overlayHandler(true)
                    }}
                    onBlur={e => {
                        overlayHandler(false)
                    }}
                />
                <img src={icon} alt="" height="18" width="18" />
            </div>
        </div>
    )
}