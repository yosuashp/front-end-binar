import { useEffect, useRef, useState } from "react"

export default function DropdownInput(props) {
    let {
        type = "normal",
        label = "LABEL_TEXT",
        placeholder = "PLACEHOLDER_TEXT",
        varName = "var",
        option = {
            key: "value",
            key2: "value2"
        },
        parentHandler,
        overlayHandler
    } = props
    const inputRef = useRef(null)
    const [optionVis, setOptionVis] = useState(false);
    const [selectedOption, setSelectedOption] = useState(placeholder);
    const [dropdownWidth, setDropdownWidth] = useState(200);

    const showOption = (vis) => {
        overlayHandler(vis)
        setOptionVis(vis)
    }
    const optionCLickHandler = (e) => {
        const value = e.currentTarget.children[1].innerHTML
        e.currentTarget.children[0].checked = true

        parentHandler(e.currentTarget.children[0].value)
        setSelectedOption((type === "time") ? value + " WIB" : value)
        showOption(false)
    }

    const optionChildClickHandler = e => {
        const value = e.currentTarget.parentNode.children[1].innerHTML
        e.currentTarget.children[0].checked = true

        parentHandler(e.currentTarget.children[0].value)
        setSelectedOption((type === "time") ? value + " WIB" : value)
        showOption(false)
    }

    const appendElement = []
    if (type === "time") {
        Object.keys(option).forEach(function (key, _) {
            appendElement.push(
                <li onClick={optionCLickHandler} key={key}>
                    <input type="radio" name={varName} id={key} value={key} />
                    <label htmlFor={key} onClick={optionChildClickHandler}>{option[key]}</label>
                    <span onClick={optionChildClickHandler}>WIB</span>
                </li>
            )
        });
    } else {
        Object.keys(option).forEach(function (key, _) {
            appendElement.push(
                <li onClick={optionCLickHandler} key={key}>
                    <input type="radio" name={varName} id={key} value={key} />
                    <label htmlFor={key} onClick={optionChildClickHandler}>{option[key]}</label>
                </li>
            )
        });
    }
    const optionList = (
        <ul className={`select-dropdown ${(type === "time") ? "pickup-time-list" : ""}`} style={{ width: dropdownWidth + "px" }}>
            {appendElement}
        </ul>
    )

    useEffect(() => {
        setDropdownWidth(inputRef.current.offsetWidth)
    }, [])

    useEffect(() => {
        window.onresize = () => {
            setDropdownWidth(inputRef.current.offsetWidth)
        }
    })

    return (
        <div ref={inputRef} className="select-input">
            <label>{label}</label>
            <button
                type="button"
                className="select-btn input-container"
                onClick={e => showOption(true)}
                onBlur={e => setTimeout(() => {
                    showOption(false)
                }, 100)}
            >
                <span>{selectedOption}</span>
                <img src="/img/form-arrow-down.svg" alt="" height="18" width="18" className={(optionVis) ? "active" : ""} />
            </button>
            {(optionVis) ? optionList : ""}
        </div >
    )
}