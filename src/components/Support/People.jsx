import { Box, Grid, Skeleton, Typography } from "@mui/material";
import React from "react";
import PeopleCard from "../../ui/PeopleCard";
import person1 from "../../assets/images/Support/suresh.jpg";
import person2 from "../../assets/images/Support/anto.jpg";
import person3 from "../../assets/images/Support/jayan.jpg";
import person4 from "../../assets/images/Support/rajeev.jpg";
import person5 from "../../assets/images/Support/reshmi.jpg";
const People = () => {
  const peopleData = [
  
    {
      image: person2,
      title: "Anto Jose",
      subtitle: "COO",
    },
    {
      image: person1,
      title: "Suresh K",
      subtitle: "Managing Director",
    },
    {
      image: person3,
      title: "Jayachandran A K ",
      subtitle: "Director",
    },
    {
      image: person4,
      title: "Rajeev P R ",
      subtitle: "Web Designer",
    },
    {
      image: person5,
      title: "Reshmi K ",
      subtitle: "Whole Time Director",
    },
  ];
  return (
    <Box padding={{ xs: 5, md: 10 }} mt={10}>
      <>
        <Typography
          fontSize={{ xs: "32px", md: "44px" }}
          fontWeight={700}
          textAlign={"center"}
        >
          The People Behind Buziness Connect
        </Typography>

        <Typography
          variant="h5"
          width={{ xs: "100%", md: "50%" }}
          mt={2}
          mx={"auto"}
          textAlign={"center"}
        >
          Discover the passionate individuals driving Buziness Connect's mission to
          revolutionize networking.
        </Typography>
      </>

      <Grid
        container
        spacing={3}
        pt={10}
        display={"flex"}
        justifyContent={"center"}
      >
        {peopleData?.map((person, index) => (
          <Grid item md={3} lg={4} sm={6} xs={12} key={index} display={"flex"} justifyContent={"center"}>
            <PeopleCard content={person} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default People;
