import React from 'react'
import { DatePicker } from '@mui/x-date-pickers';
import DateFnsUtils from "@date-io/date-fns";

export default function DatePickerCustom(props) {

    const { name, label, value, onChange } = props


    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })

    return (
        <DatePicker
                label={label}
                format="MMM/dd/yyyy"
                name={name}
                value={value}
                onChange={date =>onChange(convertToDefEventPara(name,date))}

            />
        
    )
}
