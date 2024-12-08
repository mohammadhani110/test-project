import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import JobCardList from "../../components/card/job-card-list";

const RecommendedJobs = ({ jobs }) => {
  return (
    <Stack gap="1rem">
      <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <Typography variant="h2" color="textPrimary">
          Recommended Jobs:
        </Typography>
        <Typography
          variant="h2"
          lineHeight={"1rem"}
          sx={{ textDecoration: "underline" }}
          color="primary"
        >
          See Recommended Jobs
        </Typography>
      </Box>
      {/* cards list */}
      <JobCardList jobs={jobs} />
    </Stack>
  );
};

export default RecommendedJobs;
