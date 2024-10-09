import { Button } from "@mui/material";
import React from "react";
import ButtonImage from "../assets/images/Button.png";

const StyledButton = ({name}) => {
  return (
    <>
      <Button
        sx={{
          backgroundImage: `url(${ButtonImage})`,
          backgroundSize: "cover",
          objectFit: "cover",
          borderRadius: "44px",
          padding: "10px 32px",
          fontSize: "16px",
          color: "rgba(0, 0, 0, 1)",
          textTransform: "none",
        }}
      >
        {name}
      </Button>
    </>
  );
};

export default StyledButton;
