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
    <Box sx={{ px: { xs: 2, sm: 3, md: 5, lg: 8 }, py: { xs: 4, sm: 5, md: 6, lg: 8 } }}>
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} mb={{ xs: 3, sm: 4, md: 5 }}>
       
        <Grid item xs={12}>
          <Typography
            fontSize={{ xs: "28px", sm: "32px", md: "38px", lg: "44px" }}
            fontWeight={700}
            textAlign="center"
            mb={2}
          >
            Get in touch
          </Typography>
          <Typography 
            variant="h5" 
            textAlign="center"
            fontSize={{ xs: "16px", sm: "18px", md: "20px", lg: "22px" }}
            mb={{ xs: 3, sm: 4, md: 5 }}
          >
            Please feel free to send us any questions, feedback or suggestions
            you might have.
          </Typography>
        </Grid>
        
        <Grid item xs={12} md={10} lg={8} sx={{ mx: "auto" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={{ xs: 2, sm: 3 }}>
           
              <Grid item xs={12}>
                <Typography mb={1} fontSize={{ xs: "14px", sm: "16px" }}>Product</Typography>
                <Controller
                  name="subject"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <StyledSelect
                      options={[
                        { value: "Digital Profiles", label: "Digital Profiles" },
                        { value: "NFC Business Card", label: "NFC Business Card" },
                        { value: "Digital Catalogue", label: "Digital Catalogue" },
                        { value: "Digital Restaurant Menu", label: "Digital Restaurant Menu" },
                        { value: "Community Management platform", label: "Community Management platform" },
                        { value: "Franchise Partnership Request", label: "Franchise Partnership Request" },
                      ]}
                      placeholder="Choose product"
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography mb={1} fontSize={{ xs: "14px", sm: "16px" }}>Full Name</Typography>
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
              
              {/* Phone Field */}
              <Grid item xs={12} sm={6}>
                <Typography mb={1} fontSize={{ xs: "14px", sm: "16px" }}>Phone Number</Typography>
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
              
              {/* Email Field */}
              <Grid item xs={12}>
                <Typography mb={1} fontSize={{ xs: "14px", sm: "16px" }}>Email Address</Typography>
                <Controller
                  name="emailAddress"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <StyledInput 
                      placeholder="Enter Email" 
                      {...field} 
                    />
                  )}
                />
              </Grid>
              
              <Grid item xs={12}>
                <Typography mb={1} fontSize={{ xs: "14px", sm: "16px" }}>Message</Typography>
                <Controller
                  name="message"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <StyledInput
                      placeholder="Enter Message"
                      rows={5}
                      multiline
                      {...field}
                    />
                  )}
                />
              </Grid>
              
              <Grid item xs={12} sm={8} md={6} >
                <StyledButton
                  name="Send Message"
                  type="submit"
                  fullWidth
                  onClick={handleSubmit(onSubmit)}
                />
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
      
      <Box
        component="img"
        src={contactImage}
        alt="Contact Us"
        sx={{
          width: { xs: "50px", sm: "60px", md: "65px" },
          height: { xs: "50px", sm: "60px", md: "65px" },
          cursor: "pointer",
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
          animation: "blinking 1.5s infinite",
          "@keyframes blinking": {
            "0%": { opacity: 1 },
            "50%": { opacity: 0.5 },
            "100%": { opacity: 1 },
          },
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: "50%",
        }}
        onClick={() => (window.location.href = "https://wa.me/+917592888111")}
      />
    </Box>
  );
};

export default GetInTouch;