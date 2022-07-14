import React, {useState} from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


export default function MuiDatePicker() {
  const [dateValue, setDateValue] = useState<Date | null>(null);

  const handleChange = (newValue) => {
    setDateValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
      
        <DateTimePicker
          label="Date&Time picker"
          value={dateValue}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}



//const [selectedDate, setSelectedDate ] = useState<Date | null>(null)