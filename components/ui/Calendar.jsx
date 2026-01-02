import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay, pickersDayClasses } from "@mui/x-date-pickers/PickersDay";
import { dateAction } from "../../store/date";
import dayjs from "dayjs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";

export default function Calendar({ startDate, endDate }) {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.dateSelect.date);
  const theme = createTheme({
    components: {
      MuiTouchRipple: {
        styleOverrides: {
          root: {
            height: 50,
          },
        },
      },
      MuiPickersSlideTransition: {
        styleOverrides: {
          root: {
            height: 20,
          },
        },
      },
      MuiDayCalendar: {
        styleOverrides: {
          weekDayLabel: {
            width: "10%",
            height: "80%",
          },
        },
      },
      MuiDateCalendar: {
        styleOverrides: {
          root: {
            width: "100%",
            marginTop: -5,
            marginLeft: -10,
          },
        },
      },
      MuiPickersCalendarHeader: {
        styleOverrides: {
          root: {
            color: "#0E212F",
          },
        },
      },
      MuiPickersDay: {
        styleOverrides: {
          root: {
            width: "10%",
            "&.MuiPickersDay-today": {
              width: 40,
              height: 40,
              marginLeft: 7,
              marginRight: 7,
            },
            "&.Mui-selected": {
              width: 40,
              height: 40,
              marginLeft: 7,
              marginRight: 7,
              backgroundColor: "#F89422",
              color: "#FFFFFF",
            },
            "&.Mui-selected:hover": {
              width: 40,
              height: 40,
              marginLeft: 7,
              marginRight: 7,
              backgroundColor: "#F89422",
              color: "#FFFFFF",
            },
          },
        },
      },
    },
  });

  // initialize date to the start date, if there is a new value, use that value
  let setDate = startDate;
  if (selectedDate.length > 0) {
    setDate = selectedDate;
  } 

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          minDate={dayjs(startDate)}
          maxDate={dayjs(endDate)}
          value={dayjs(setDate)}
          onChange={(newDate) =>
            dispatch(
              dateAction.changeDate({ date: newDate.format("YYYY-MM-DD") })
            )
          }
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
}
