import React from "react";
import { CircularProgress, Box } from "@mui/material";

const LoadingSpinner = ({
  size = 40,
  thickness = 4,
  color = "primary",
  style = {},
}) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
      style={style}
    >
      <CircularProgress size={size} thickness={thickness} color={color} />
    </Box>
  );
};

export default LoadingSpinner;
