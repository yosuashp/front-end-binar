import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import DateInput from "../Form/DateInput"
import DropdownInput from "../Form/DropdownInput"
import "../Form/Form.css"
import TextInput from "../Form/TextInput"
import { saveDriverType, savePickupDate, savePickupTime, savePeopleAmount } from "./carFormSlice"

export default function ({ parentHandler, overlayHandler }) {
    const formValue = useSelector(state => state.carForm.value)
    const dispatch = useDispatch()

    const validation = (arr) => {
        let isValid = true
        arr.forEach(element => {
            if (element == null || element == "" || element == false) isValid = false
        });
        return isValid
    }

    const clickHandler = (e) => {
        parentHandler(formValue)
    }

    return (
        <div id="car-form">
            <DropdownInput
                varName="driverType"
                label="Tipe Driver"
                placeholder="Pilih Tipe Driver"
                option={{
                    withDriver: "Dengan Sopir",
                    noDriver: "Tanpa Sopir (Lepas Kunci)"
                }}
                parentHandler={value => dispatch(saveDriverType(value))}
                overlayHandler={overlayHandler}
            />

            <DateInput
                varName="pickupDate"
                label="Tanggal"
                placeholder="Pilih Tanggal"
                parentHandler={value => dispatch(savePickupDate(value))}
                value={formValue.pickupDate}
                overlayHandler={overlayHandler}
            />

            <DropdownInput
                type="time"
                varName="pickupTime"
                label="Waktu Jemput"
                placeholder="Pilih Waktu Jemput"
                option={{
                    "08.00": "08.00",
                    "09.00": "09.00",
                    "10.00": "10.00",
                    "11.00": "11.00",
                    "12.00": "12.00"
                }}
                parentHandler={value => dispatch(savePickupTime(value))}
                overlayHandler={overlayHandler}
            />

            <TextInput
                label="Jumlah Penumpang (optional)"
                placeholder="Jumlah Penumpang"
                varName="peopleAmount"
                icon="/img/icon_people.svg"
                parentHandler={value => dispatch(savePeopleAmount(value))}
                type="number"
                overlayHandler={overlayHandler}
            />

            <button
                id="search-car-btn"
                className={`btn btn-success ${(validation([formValue.driverType, formValue.pickupDate, formValue.pickupTime])) ? "" : "disabled"}`}
                onClick={clickHandler}
            >
                Cari Mobil
            </button>
        </div>
    )
}