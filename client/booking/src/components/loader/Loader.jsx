import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Loader = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CircularProgress style={{ color: "#003580" }} />
      </Box>
    </>
  );
};

export default Loader;
