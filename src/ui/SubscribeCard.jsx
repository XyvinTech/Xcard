import { Box, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import StyledTextField from "./StyledTextField";
import StyledButton from "./StyledButton";

const SubscribeCard = () => {
  return (
    <Stack
      border={"1px solid #595959"}
      borderRadius={"8px"}
      padding={"32px"}
      spacing={2}
      backgroundColor={"#1C1C1C"}
    >
      <Typography variant="h1">Subscribe to our newsletter</Typography>
      <Typography variant="h5" color="text.secondary">
        Network smarter, connect deeper, and grow your business faster.
      </Typography>
      <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
        <StyledTextField label={"Enter your  mail..."} />
        <StyledButton name={"Subscribe"} />
      </Stack>
    </Stack>
  );
};

export default SubscribeCard;
