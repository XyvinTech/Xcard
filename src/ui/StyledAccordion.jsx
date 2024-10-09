import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

const StyledAccordion = ({ data }) => {
  return (
    <>
      {data?.map((item) => (
        <Accordion
          key={item.id}
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            border: "none",
            margin: 0, // Remove margin between Accordions
            "&::before": {
              display: "none", // Remove the default border that appears before the Accordion
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#ADADAD" }} />}
            aria-controls={`${item.id}-content`}
            id={`${item.id}-header`}
            sx={{
              border: "none", // Ensure there's no border
              boxShadow: "none", // Remove any box shadow
              outline: "none", // Remove any outline
            }}
          >
            <Button
              sx={{
                color: "white",
                fontSize: "24px",
                fontWeight: "600",
                textTransform: "none",
              }}
            >
              {item.title}
            </Button>
          </AccordionSummary>
          <AccordionDetails
            sx={{ color: "#ADADAD", fontSize: "18px", fontWeight: "400" }}
          >
            {item.content}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default StyledAccordion;
