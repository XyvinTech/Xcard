import { Button } from "@mui/material";
import React from "react";
import ButtonImage from "../assets/images/Button.png";

const StyledButton = ({ name, secondary , onClick}) => {
  return (
    <>
      <Button
        sx={{
          backgroundImage: secondary ? "none" : `url(${ButtonImage})`,
          backgroundSize: "cover",
          objectFit: "cover",
          borderRadius: "44px",
          padding: "10px 32px",
          border: secondary ? "1px solid #D4B55B": "none",
          fontSize: "16px",
          color: secondary ? "#D4B55B" : "rgba(0, 0, 0, 1)",
          textTransform: "none",
        }}
        onClick={onClick}
      >
        {name}
      </Button>
    </>
  );
};

export default StyledButton;
