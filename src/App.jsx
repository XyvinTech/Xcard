import { Box, Grid, Stack, Typography } from "@mui/material";
import StyledButton from "./ui/StyledButton";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import GetInTouch from "./components/Home/GetInTouch";
import Header from "./components/Home/Header";
import Header2 from "./components/Home/Header2";
import Header3 from "./components/Home/Header3";
import HomeCard from "./ui/HomeCard";
import Header4 from "./components/Home/Header4";
import Custom from "./ui/Custom";
import StyledAccordion from "./ui/StyledAccordion";
import HelpComponent from "./components/Home/HelpComponent";

function App() {
  return (
    <>
      <Navbar />
      <StyledButton />

      <Box
        sx={{
          mt: 10,
          backgroundImage: `linear-gradient(127deg, black 0%, #1E1E1E 100%), url(https://via.placeholder.com/330x330)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Header />
        <Header2 />
        <Header3 />
        <HelpComponent/>
        <GetInTouch />
      </Box>
      <Grid container padding={10}spacing={3}>
        <Grid item md={3}>
          <HomeCard />
        </Grid>
        <Grid item md={3}>
          <HomeCard />
        </Grid>
        <Grid item md={3}>
          <HomeCard />
        </Grid>
        <Grid item md={3}>
          <HomeCard />
        </Grid>
      </Grid>
      <Header4/>
      <Custom/>
     <StyledAccordion/>
      <Footer />
    </>
  );
}

export default App;
