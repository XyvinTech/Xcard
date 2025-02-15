import { Box, Grid, Stack, Typography } from "@mui/material";
import StyledInput from "../ui/StyledInput";
import StyledButton from "../ui/StyledButton";
import { Controller, useForm } from "react-hook-form";
import { sendEmail } from "../api/sendEmail";
import { useNavigate } from "react-router-dom";
import StyledSelect from "../ui/StyledSelect";

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
      <Typography
        fontSize={{ xs: "32px", md: "44px" }}
        fontWeight={700}
        textAlign={"center"}
      >
        Get in touch
      </Typography>
      <Typography variant="h5" textAlign={"center"}>
        Please feel free to send us any questions, feedback or suggestions you
        might have.
      </Typography>{" "}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          spacing={2}
          display={"flex"}
          justifyContent={"center"}
          padding={{ xs: 0, md: 10, lg: 40 }}
          paddingTop={{ xs: 5, md: 10, lg: 5 }}
          paddingBottom={{ xs: 5, md: 0, lg: 5 }}
        >
          <Grid item md={12} xs={12}>
            <>
              {" "}
              <Typography mb={1}>Product</Typography>
              <Controller
                name="subject"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledSelect
                    options={[
                      { value: "Digital Profiles", label: "Digital Profiles" },
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
                    ]}
                    placeholder="Choose product"
                    {...field}
                  />
                )}
              />
            </>
          </Grid>
          <Grid item md={6} xs={12}>
            <>
              {" "}
              <Typography mb={1}>Full Name</Typography>{" "}
              <Controller
                name="fullName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledInput placeholder="Enter Your Full Name" {...field} />
                )}
              />
            </>
          </Grid>
          <Grid item md={6} xs={12}>
            <>
              <Typography mb={1}>Phone Number</Typography>{" "}
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
            </>{" "}
          </Grid>
          <Grid item md={12} xs={12}>
            <>
              <Typography mb={1}>Email Address</Typography>{" "}
              <Controller
                name="emailAddress"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledInput placeholder="Enter Email" {...field} />
                )}
              />
            </>
          </Grid>
          <Grid item md={12} xs={12}>
            <>
              <Typography mb={1}>Message</Typography>{" "}
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
            </>
          </Grid>
          <Grid item md={12} xs={12}>
            <Stack width={"100%"}>
              {" "}
              <StyledButton
                name={"Send Message"}
                type="submit"
                onClick={handleSubmit(onSubmit)}
              />
            </Stack>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default GetInTouch;
