import { Box, Grid, Stack, Typography } from "@mui/material";
import StyledInput from "../ui/StyledInput";
import StyledButton from "../ui/StyledButton";
import { Controller, useForm } from "react-hook-form";
import { sendEmail } from "../api/sendEmail";
import { useNavigate } from "react-router-dom";
import StyledSelect from "../ui/StyledSelect";
import contactImage from "../assets/images/uim_whatsapp.png";
const GetInTouch = () => {
  const navigate = useNavigate();
  const { control, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    try {
      await sendEmail(data);
      navigate("/thank");
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box padding={{ xs: 5, md: 10 }} pb={0}>
      <Grid container spacing={4} alignItems="flex-start">
        <Grid item xs={12} md={7} lg={11}>
          <Typography
            fontSize={{ xs: "32px", md: "44px" }}
            fontWeight={700}
            textAlign={"center"}
          >
            Get in touch
          </Typography>
          <Typography variant="h5" textAlign={"center"}>
            Please feel free to send us any questions, feedback or suggestions
            you might have.
          </Typography>{" "}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid
              container
              spacing={2}
              justifyContent={"center"}
              padding={{ xs: 0, md: 10, lg: 20 }}
              paddingTop={{ xs: 5, md: 10, lg: 5 }}
              paddingBottom={{ xs: 5, md: 0, lg: 5 }}
            >
              <Grid item md={12} xs={12}>
                <Typography mb={1}>Product</Typography>
                <Controller
                  name="subject"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <StyledSelect
                      options={[
                        {
                          value: "Digital Profiles",
                          label: "Digital Profiles",
                        },
                        {
                          value: "NFC Business Card",
                          label: "NFC Business Card",
                        },
                        {
                          value: "Digital Catalogue",
                          label: "Digital Catalogue",
                        },
                        {
                          value: "Digital Restaurant Menu",
                          label: "Digital Restaurant Menu",
                        },
                        {
                          value: "Membership Management System",
                          label: "Membership Management System",
                        },
                        {
                          value: "Franchise Partnership Request",
                          label: "Franchise Partnership Request",
                        },
                      ]}
                      placeholder="Choose product"
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography mb={1}>Full Name</Typography>
                <Controller
                  name="fullName"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <StyledInput
                      placeholder="Enter Your Full Name"
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography mb={1}>Phone Number</Typography>
                <Controller
                  name="phone"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <StyledInput
                      placeholder="Enter Your Phone Number"
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item md={12} xs={12}>
                <Typography mb={1}>Email Address</Typography>
                <Controller
                  name="emailAddress"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <StyledInput placeholder="Enter Email" {...field} />
                  )}
                />
              </Grid>
              <Grid item md={12} xs={12}>
                <Typography mb={1}>Message</Typography>
                <Controller
                  name="message"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <StyledInput
                      placeholder="Enter Message"
                      rows={5}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item md={12} xs={12}>
                <Stack width={"100%"}>
                  <StyledButton
                    name={"Send Message"}
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                  />
                </Stack>
              </Grid>
            </Grid>
          </form>
        </Grid>

        <Grid
          item
          xs={12}
          md={5}
          lg={1}
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-start"
        >
          <Box
            component="img"
            src={contactImage}
            alt="Contact Us"
            sx={{
              width: "65px",
              height: "65px",
              cursor: "pointer",
              position: "fixed", 
              bottom: "20px", 
              right: "20px", 
              zIndex: 1000, 
            }}
        
            onClick={() =>
              (window.location.href = "https://wa.me/+917592888111")
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default GetInTouch;
