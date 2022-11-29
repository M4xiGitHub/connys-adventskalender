import React from "react";
import Main from "./Main";
import { createTheme, ThemeProvider } from "@mui/material/styles";

///Deployment
///  "homepage":"https://M4xiGitHub.github.io/connys-adventskalender",


let theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 500,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    palette: {
      primary: {
        main: "#3bab3c",
        dark: "#cccccc"
      },
      secondary: {
        main: "#1E5BFA",
        light:"#7188ff",
        dark: "#0033c6"
      },
    },
  });
  

  theme.typography.Christmas = {
    fontSize: "1.6rem",
    fontWeight:"bold",
    fontFamily: "Mountains of Christmas",
    "@media (min-width:500px)": {
      fontSize: "2rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.5rem",
    },
  };

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Main/>
        </ThemeProvider>
    );
}

export default App;
