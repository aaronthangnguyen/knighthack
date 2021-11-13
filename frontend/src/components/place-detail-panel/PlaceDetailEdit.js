import { Box, Typography, Chip } from "@mui/material";

export const PlaceDetailEdit = () => {
  return (
    <Box>
      <Box sx={{ backgroundColor: "red", height: "16rem" }}></Box>
      <Typography
        sx={{
          fontWeight: "medium",
          fontSize: "2rem",
          mt: 2,
          textTransform: "uppercase",
        }}
      >
        Edit
        <Chip label="housing" color="info" size="small" sx={{ ml: 4 }} />
      </Typography>
      <Typography sx={{ fontSize: "1.2rem", mb: 1 }}>[From] - [To]</Typography>
      <Typography sx={{ fontSize: "1.2rem", mb: 1 }}>Address</Typography>
      <Typography sx={{ fontSize: "1.2rem" }}>Comment</Typography>
    </Box>
  );
};
