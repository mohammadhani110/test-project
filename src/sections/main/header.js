import styled from "@emotion/styled";
import { Stack, Typography } from "@mui/material";
import React from "react";
const StyledHeadingBox = styled(Stack)(({ theme }) => ({
  gap: ".25rem",
}));
const Header = () => {
  return (
    <StyledHeadingBox>
      <Typography variant="h1" color="secondary">
        Find your Dream Job,
        <Typography
          marginLeft={1}
          variant="span"
          display="inline-flex"
          color="primary"
        >
          Albert!
        </Typography>
      </Typography>
      <Typography variant="body1">
        Explore the latest job openings and apply for the best opportunities
        available today!
      </Typography>
    </StyledHeadingBox>
  );
};

export default Header;
