import styled from "@emotion/styled";
import { Box, Chip, Typography } from "@mui/material";
import React from "react";
// Styled Tags Box
const StyledTagsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  marginBottom: ".375rem",
  "& .tag-box": {
    display: "flex",
    alignItems: "center",
    gap: ".75rem",
  },
}));

// Styled Chip
const StyledChip = styled(Chip)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  borderRadius: "6px", //
}));
const TagList = () => {
  return (
    <StyledTagsBox>
      <Typography variant="body" color="secondary">
        Similar:
      </Typography>
      <Box className="tag-box">
        {["Frontend", "Backend", "Graphic Design"].map((label, index) => (
          <StyledChip variant="outlined" key={label} label={label} />
        ))}
      </Box>
    </StyledTagsBox>
  );
};

export default TagList;
