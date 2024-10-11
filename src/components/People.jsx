import { Box, Grid, Skeleton, Typography } from "@mui/material";
import React from "react";
import PeopleCard from "../ui/PeopleCard";
import person1 from "../assets/images/people1.webp";
import person2 from "../assets/images/people2.webp";
import person3 from "../assets/images/people3.webp";
import person4 from "../assets/images/people4.webp";
const People = () => {
  const peopleData = [
    {
      image: person1,
      title: "John Doe",
      subtitle: "CEO",
    },
    {
      image: person2,
      title: "Jane Smith",
      subtitle: "Co-Founder",
    },
    {
      image: person3,
      title: "Alex Johnson",
      subtitle: "Head of Product",
    },
    {
      image: person4,
      title: "Michael Brown",
      subtitle: "Head of Marketing",
    },
  ];
  return (
    <Box padding={{ xs: 5, md: 10 }}  mt={10}>
      <>
        <Typography fontSize={{xs: "32px", md: "44px"}} fontWeight={700} textAlign={"center"}>
          The People Behind Xcard
        </Typography>

        <Typography variant="h5" width={{ xs: "100%", md: "50%" }} mt={2}  mx={"auto"} textAlign={"center"}>
          Discover the passionate individuals driving Xcard's mission to
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
          <Grid item md={3} key={index}>
            <PeopleCard content={person} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default People;
