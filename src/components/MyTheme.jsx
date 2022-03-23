import { createTheme } from "@mui/material"

const MyTheme = createTheme({
  palette: {
    primary: {
      main: "#fff"
    }, 
    secondary: {
      main: "rgba(134, 132, 144, 1)",
      second: "rgba(248, 231, 161, 1)"
    }
  },
  typography: {
    fontFamily: [
      'Poppins'
    ]
  }
})

export default MyTheme