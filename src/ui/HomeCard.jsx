import { Stack, Typography, Skeleton } from "@mui/material";
import React from "react";

const HomeCard = ({ data, loading }) => {
  const { img, name, phone, location } = data || {};

  // Convert various phone formats to E.164-like numeric string for wa.me links
  const makeWhatsappLink = (raw) => {
    if (!raw) return null;
    // remove spaces, dashes, parentheses, plus signs
    let digits = String(raw).replace(/[^0-9]/g, "");
    // If number starts with leading zeros from international format like 00971 -> 971, trim leading zeros
    digits = digits.replace(/^0+/, "");
    // If the original had a leading + and we've removed it above, keep digits as-is
    if (!digits) return null;
    return `https://wa.me/${digits}`;
  };

  return (
    <Stack
      spacing={2}
      boxShadow={"0px 8px 16px rgba(0, 0, 0, 0.08)"}
      padding={"10px"}
      borderRadius={"8px"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      border={"1px #E3E3E3 solid"}
      textAlign={"center"}
      height={{ lg: "350px", md: "330px", sm: "auto", xs: "auto" }}
      width={{ lg: "380px", md: "250px", sm: "300px", xs: "100%" }}
      maxWidth={{ xs: "350px" }}
    >

      {loading ? (
        <Skeleton
          variant="circular"
          width={180}
          height={180}
          animation="wave"
        />
      ) : (
        <img
          src={img}
          alt="img1"
          width={"200px"}
          height={"200px"}
          style={{ borderRadius: "50%", objectFit: "cover" }}
        />
      )}
      <Stack
        spacing={1}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {loading ? (
          <Skeleton variant="text" width={"60%"} height={25} animation="wave" />
        ) : (
          <Typography variant="h3" color="text.tertiary">
            {name}
          </Typography>
        )}
        {loading ? (
          <Skeleton variant="text" width={"50%"} height={20} animation="wave" />
        ) : (
          // Render phone as a link to WhatsApp using wa.me
          (() => {
            const link = makeWhatsappLink(phone);
            if (!link) {
              return (
                <Typography variant="h7" color="text.secondary">
                  {phone}
                </Typography>
              );
            }

            return (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
                aria-label={`Open WhatsApp chat with ${name || phone}`}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  {/* Inline WhatsApp SVG icon */}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    style={{ display: "block" }}
                  >
                    <path d="M20.52 3.48A11.86 11.86 0 0012 0C5.37 0 .01 5.36 0 12c0 2.12.56 4.19 1.62 6.02L0 24l6.2-1.6A11.9 11.9 0 0012 24c6.63 0 12-5.36 12-12 0-3.2-1.25-6.2-3.48-8.52z" fill="#25D366"/>
                    <path d="M17.22 14.11c-.28-.14-1.66-.82-1.92-.92-.26-.1-.45-.14-.64.14-.19.28-.74.92-.9 1.11-.16.19-.31.21-.59.07-.28-.14-1.18-.44-2.25-1.38-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.12-.12.28-.31.42-.47.14-.16.19-.27.28-.46.09-.19.04-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.36-.26.28-1 1-1 2.45 0 1.45 1.03 2.85 1.17 3.05.14.19 2.02 3.08 4.9 4.31 2.18 1.01 2.98 1.05 3.43 1.01.44-.04 1.41-.57 1.61-1.12.2-.55.2-1.02.14-1.12-.07-.1-.26-.16-.54-.3z" fill="#FFF"/>
                  </svg>

                  <Typography variant="h7" color="text.secondary">
                    {phone}
                  </Typography>
                </div>
              </a>
            );
          })()
        )}
        {loading ? (
          <Skeleton variant="text" width={"50%"} height={20} animation="wave" />
        ) : (
          <Typography variant="h7" color="text.tertiary">
            {location}
          </Typography>
        )}
      </Stack>
    </Stack>
  );
};

export default HomeCard;
