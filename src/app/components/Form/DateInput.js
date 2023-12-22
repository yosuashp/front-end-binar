import { useEffect, useRef, useState } from "react"
import $ from "jquery"
window.jQuery = $;
require("./daterangepicker")
import "./daterangepicker/daterangepicker.css"

export default function DateInput(props) {
    const {
        varName = "date",
        label = "LABEL_TEXT",
        placeholder = "PLACEHOLDER_TEXT",
        parentHandler,
        value = null,
        overlayHandler
    } = props

    const inputRef = useRef(null)

    useEffect(() => {
        const dateRange = $(`input[name="${varName}"]`);

        dateRange.daterangepicker({
            singleDatePicker: true,
            showDropdowns: true,
            minDate: new Date(),
            maxYear: 2030,
            showDropdowns: false,
            autoUpdateInput: false,
            "applyButtonClasses": "btn-success",
            "cancelClass": "hidden",
            locale: {
                format: "DD/MM/YYYY",
                applyLabel: "Pilih Tanggal",
                monthNames: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December"
                ],
                daysOfWeek: [
                    "S",
                    "M",
                    "T",
                    "W",
                    "T",
                    "F",
                    "S"
                ],
            }
        });

        const dateInputBox = document.querySelector(".date-input .input-container");


        dateRange.on("show.daterangepicker", () => {
            dateInputBox.classList.toggle("active");
            overlayHandler(true)
            // checkAndToggleOverlay(dateInputBox.classList.contains("active"))
        })
        dateRange.on("hide.daterangepicker", () => {
            dateInputBox.classList.remove("active");
            setTimeout(() => {
                overlayHandler(false)
            }, 100)
        })

        dateRange.on('apply.daterangepicker', function (ev, picker) {
            dateRange.val(picker.startDate.format('DD-MM-YYYY'));
            parentHandler(inputRef.current.value)
            overlayHandler(false)
        });

    })

    return (
        <div className="date-input">
            <label htmlFor="pickupDate">{label}</label>
            <div className="input-container">
                <input
                    type="text"
                    name={varName}
                    value={value || ""}
                    onChange={() => { }}
                    placeholder={placeholder}
                    ref={inputRef}
                    autoComplete="off"
                />
                <img src="/img/icon_calendar.svg" alt="" height="18" width="18" />
            </div>
        </div>
    )
}