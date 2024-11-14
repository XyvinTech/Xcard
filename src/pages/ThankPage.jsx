import { Box } from "@mui/material";
import ThankHeader from "../components/Thank/ThankHeader";

const ThankPage = () => {
  return (
    <Box
      sx={{
        mt: 10,
        backgroundImage: `linear-gradient(127deg, black 0%, #1E1E1E 100%)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <ThankHeader />
    </Box>
  );
};

export default ThankPage;
