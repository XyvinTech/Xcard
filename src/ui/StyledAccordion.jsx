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
            margin: 0,
            "&::before": {
              display: "none",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#ADADAD" }} />}
            aria-controls={`${item.id}-content`}
            id={`${item.id}-header`}
            sx={{
              border: "none",
              boxShadow: "none",
              outline: "none",
            }}
          >
            <Button
              sx={{
                color: "white",
                fontSize: {
                  xs: "20px",
                  md: "24px",
                },
                fontWeight: "600",
                textTransform: "none",
                padding: {
                  xs: "10px 20px",
                  md: "12px 24px",
                },
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
