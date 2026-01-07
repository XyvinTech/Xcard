import React, { useRef } from "react";
import { Grid, Stack, Typography, Box, Button } from "@mui/material";
import { motion, useInView } from "framer-motion";
import brochurePdf from "../assets/Buziness-Connectz.pdf";


const NewsHero = ({ data }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { triggerOnce: false, threshold: 0.1 });

    const slideIn = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 1 } },
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } },
    };

    const slideAnimation = {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
    };

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = brochurePdf;
        link.download = "Buziness-Connectz.pdf";
        link.click();
    };

    return (
        <Grid
            container
            spacing={2}
            padding={{ xs: 3, sm: 4, md: 8 }}
            marginBottom={0}
            sx={{
                minHeight: { lg: "600px" },
                backgroundColor: "#FFFFFF",
                backgroundImage: `url(${data.bannerImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 60px,
          rgba(200, 200, 200, 0.1) 60px,
          rgba(200, 200, 200, 0.1) 61px
        ),
        repeating-linear-gradient(
          90deg,
          transparent,
          transparent 60px,
          rgba(200, 200, 200, 0.1) 60px,
          rgba(200, 200, 200, 0.1) 61px
        )`,
                    pointerEvents: "none",
                    zIndex: 1,
                },
            }}
        >


            <Grid
                item
                md={6}
                sm={12}
                xs={12}
                display={"flex"}
                justifyContent={"flex-start"}
                sx={{
                    position: "relative",
                    zIndex: 2,
                    paddingLeft: { xs: 3, md: 6, lg: 10 }
                }}
            >
                <Stack spacing={2}>
                    {/* Title */}
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={slideIn}
                    >
                        <Typography
                            fontSize={{
                                xs: "32px",
                                md: "60px",
                                sm: "40px",
                            }}
                            lineHeight={{
                                xs: "40px",
                                md: "70px",
                                sm: "50px",
                            }}
                            fontWeight={800}
                            color="#FF6B35"
                            textTransform="uppercase"
                            letterSpacing="2px"
                        >
                            {data.title}
                        </Typography>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.div
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={fadeIn}
                    >
                        <Typography
                            variant="h4"
                            fontSize={{
                                xs: "30px",
                                sm: "50px",
                                md: "40px",
                            }}
                            fontWeight={500}
                            color="#000000"
                            lineHeight={1.5}
                        >
                            {data.subtitle}
                        </Typography>
                    </motion.div>

                    {/* Description */}
                    <motion.div
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={fadeIn}
                    >
                        <Typography
                            variant="h6"
                            fontSize={{
                                xs: "14px",
                                md: "22px",
                                sm: "20px",
                            }}
                            fontWeight={400}
                            color="#666666"
                        >
                            {data.description}
                        </Typography>
                    </motion.div>

                    {/* Download PDF Button */}
                    <Box pt={2}>
                        <Button
                            sx={{
                                mt: 2,
                                borderRadius: "999px",
                                px: 4,
                                py: 1.5,
                                textTransform: "none",
                                backgroundColor: "#F5E39C",
                                color: "#000",
                                fontWeight: 600,
                                "&:hover": { backgroundColor: "#f0d97b" },
                            }}
                            onClick={handleDownload}
                        >
                            Download PDF
                        </Button>
                    </Box>
                </Stack>
            </Grid>

            <Grid
                item
                md={6}
                sm={12}
                xs={12}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{ position: "relative", zIndex: 2 }}
            >
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={slideAnimation}
                >
                    <Box
                        component="img"
                        src={data.contentImage}
                        alt="App Preview"
                        sx={{
                            objectFit: "contain",
                            width: {
                                xs: "100%",
                                lg: "100%",
                                md: "100%",
                                sm: "100%",
                            },
                            height: {
                                xs: "auto",
                                lg: "500px",
                                md: "450px",
                                sm: "auto",
                            },
                            filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.15))",
                        }}
                    />
                </motion.div>
            </Grid>
        </Grid>
    );
};

export default NewsHero;