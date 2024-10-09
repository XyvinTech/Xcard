import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme/Theme";
import { RouterProvider } from "react-router-dom";
// import App from "./App";
import router from "./routes/Router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />{" "}
    </ThemeProvider>
  </StrictMode>
);
