import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    text: {
      primary: "#FFFFFF",
      secondary: "#8E8E8E",
      tertiary: "#000000",
    },
  },
  typography: {
    fontFamily: "'Barlow', sans-serif",
    h1: {
      fontSize: "24px",
      fontWeight: 600,
    },
    h2: {
      fontSize: "22px",
      fontWeight: 600,
    },
    h3: {
      fontSize: "20px",
      fontWeight: 600, //fix
    },
    h4: {
      fontSize: "18px",
      fontWeight: 500,//fix
    },
    h5: {
      fontSize: "16px",
      fontWeight: 300, //fixed
    },
    h6: {
      fontSize: "16px",
      fontWeight: 400, //fixed
    },
    h7: {
      fontSize: "14px",
      fontWeight: 500,//fix
    },
    h8: {
      fontSize: "14px",
      fontWeight: 400,
    },
    h9: {
      fontSize: "12px",
      fontWeight: 400,
    },
    h10: {
      fontSize: "10px",
      fontWeight: 600,
    },
  },
});

export default theme;
