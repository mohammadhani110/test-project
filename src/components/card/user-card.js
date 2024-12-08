import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";

// ----------------------------------------------------------------------

export default function UserCard({ user }) {
  const { name, coverUrl, roles, avatarUrl, location } = user;
  const updatedRoles = roles.map(
    (role, index) => `${role} ${index === roles.length - 1 ? "" : " | "}`
  );
  return (
    <Card sx={{ textAlign: "center", pb: "1.25rem" }}>
      <Box sx={{ position: "relative" }}>
        <Avatar
          alt={name}
          src={avatarUrl}
          sx={{
            width: 86,
            height: 86,
            zIndex: 11,
            left: 0,
            right: 0,
            bottom: -32,
            mx: "auto",
            position: "absolute",
          }}
        />

        <img
          src={coverUrl}
          alt={coverUrl}
          width="100%"
          //   ratio="16/9"
        />
      </Box>

      <ListItemText
        sx={{
          mt: "40px",
          mb: "4px",
          "&.MuiListItemText-root": {
            "& .MuiListItemText-secondary": {
              maxWidth: 270,
              marginInline: "auto",
            },
          },
        }}
        primary={name}
        secondary={updatedRoles}
        primaryTypographyProps={{ typography: "h1", color: "textPrimary" }}
        secondaryTypographyProps={{
          component: "span",
          mt: 0.5,
          mr: 0.5,
          typography: "h4",
          color: "textPrimary",
        }}
      />
      <Typography variant="body2">{location}</Typography>
    </Card>
  );
}
