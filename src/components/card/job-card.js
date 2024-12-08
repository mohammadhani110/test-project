import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  styled,
  Typography,
  Stack,
} from "@mui/material";
import Iconify from "../iconify/iconify";
import teamsIcon from "../../assets/teams-icon.svg";

const JobCard = ({ job }) => {
  const { title, isPromoted, company, location, postedOn, applicants } = job;
  console.log("title, isPromoted, company, location, postedOn", {
    title,
    isPromoted,
    company,
    location,
    postedOn,
    applicants,
  });
  // Styled Card
  const StyledCard = styled(Card)(({ theme }) => ({
    maxWidth: "190px",
    padding: "0.625rem 1.25rem",
    display: "flex",
    flexDirection: "column",
    gap: ".75rem",
    "& .MuiCardContent-root": {
      padding: "0",
      display: "flex",
      flexDirection: "column",
      gap: "0.375rem",
    },
    "& .MuiCardActions-root": {
      padding: "0",
    },
  }));
  console.log("job", job);

  return (
    <StyledCard>
      <CardContent>
        {isPromoted && (
          <Typography variant="body3" color="textPrimary">
            Promoted
          </Typography>
        )}
        <Box display="flex" alignItems="center" gap=".25rem">
          <img src={teamsIcon} alt="icon teams" height={40} width={40} />
          <Stack>
            <Typography variant="body1" color="textPrimary">
              {title || "UI/UX Designer"}
            </Typography>
            <Typography variant="body2" color="textPrimary">
              {company || "Teams"}
            </Typography>
          </Stack>
        </Box>
        <Stack gap=".25rem">
          <Box display="flex" alignItems="baseline" gap=".25rem">
            <Iconify
              icon="qlementine-icons:location-16"
              sx={{ height: ".75rem", width: ".75rem" }}
            />

            <Typography variant="body2">
              {location || "Seattle, USA (Remote)"}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap=".25rem">
            <Iconify
              icon="mdi:clock-outline"
              sx={{ height: ".75rem", width: ".75rem" }}
            />

            <Box display="flex" alignItems="center" gap=".25rem">
              <Typography variant="body2">
                {postedOn || "1 day ago "} |
              </Typography>
              <Typography variant="body2" color="primary">
                {applicants || "22"} applicants
              </Typography>
            </Box>
          </Box>
        </Stack>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          sx={{
            textTransform: "capitalize",
            minWidth: "116px",
            fontSize: "12px",
            fontWeight: "500",
          }}
        >
          Apply Now
        </Button>
        <IconButton>
          <Iconify
            icon="majesticons:bookmark-line"
            sx={{
              color: "#AAAAAA",
            }}
          />
        </IconButton>
      </CardActions>
    </StyledCard>
  );
};

export default JobCard;
