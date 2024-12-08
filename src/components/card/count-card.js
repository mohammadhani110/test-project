import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Card } from "@mui/material";

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

export default function InteractiveList({ data }) {
  const { profileVisitors, resumeViewers, jobsCount } = data;

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Card sx={{ padding: "1.25rem" }}>
        <List>
          {/* {generate( */}
          <ListItem
            sx={{
              borderBottom: "1px solid #E9ECEF",
              "&:last-child": { borderBottom: 0 },
            }}
            secondaryAction={
              <ListItemText
                primary={profileVisitors}
                primaryTypographyProps={{
                  typography: "h3",
                  color: "primary",
                }}
              />
            }
          >
            <ListItemText
              primary="Profile Visitors"
              primaryTypographyProps={{
                typography: "h4",
                color: "textPrimary",
              }}
            />
          </ListItem>
          <ListItem
            sx={{
              borderBottom: "1px solid #E9ECEF",
              "&:last-child": { borderBottom: 0 },
            }}
            secondaryAction={
              <ListItemText
                primary={resumeViewers}
                primaryTypographyProps={{
                  typography: "h3",
                  color: "primary",
                }}
              />
            }
          >
            <ListItemText
              primary="Resume Viewers"
              primaryTypographyProps={{
                typography: "h4",
                color: "textPrimary",
              }}
            />
          </ListItem>
          <ListItem
            sx={{
              borderBottom: "1px solid #E9ECEF",
              "&:last-child": { borderBottom: 0 },
            }}
            secondaryAction={
              <ListItemText
                primary={jobsCount}
                primaryTypographyProps={{
                  typography: "h3",
                  color: "primary",
                }}
              />
            }
          >
            <ListItemText
              primary="My Jobs"
              primaryTypographyProps={{
                typography: "h4",
                color: "textPrimary",
              }}
            />
          </ListItem>
          {/* )} */}
        </List>
      </Card>
    </Box>
  );
}
