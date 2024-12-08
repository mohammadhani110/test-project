// @mui
import Box from "@mui/material/Box";
//
import JobCard from "./job-card";

// ----------------------------------------------------------------------

export default function JobCardList({ jobs }) {
  return (
    <Box
      gap={1}
      display="grid"
      gridTemplateColumns={{
        xs: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(5, 1fr)",
      }}
    >
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </Box>
  );
}
