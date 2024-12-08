import React from "react";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Avatar,
  InputBase,
  Typography,
} from "@mui/material";
import SearchIcon from "../../assets/search-icon.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import avatarSM from "../../assets/avatar-sm.png";
import Iconify from "../iconify/iconify";

const StyledNavbar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.white,
  boxShadow: "none",
  padding: "0 16px",
}));

const LogoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginRight: theme.spacing(2),
}));

const NavLinksBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(4),
  flexGrow: 1,
}));

const StyledLink = styled(Typography)(({ theme, active }) => ({
  fontSize: "16px",
  fontWeight: active ? 600 : 500,
  color: active ? theme.palette.primary.main : theme.palette.text.secondary,
  cursor: "pointer",
  textDecoration: "none",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const SearchBarBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));

const StyledInput = styled(InputBase)(({ theme }) => ({
  padding: "4px 12px",
  backgroundColor: theme.palette.background.searchInput,
  borderRadius: theme.shape.borderRadius,
  //   border: `1px solid ${theme.palette.divider}`,
  fontSize: "14px",
  gap: "1rem",
}));

const NavDesktop = () => {
  return (
    <StyledNavbar position="static">
      <Toolbar disableGutters sx={{ gap: "1rem" }}>
        <LogoBox>
          <Logo alt="Logo" width="40" height="40" />
        </LogoBox>

        {/* Navigation Links */}
        <NavLinksBox>
          {[
            "Find Jobs",
            "Top Companies",
            "Job Tracker",
            "My Calendar",
            "Documents",
            "Messages",
            "Notifications",
          ].map((label, index) => (
            <StyledLink key={label} active={index === 0 ? 1 : 0}>
              {label}
            </StyledLink>
          ))}
        </NavLinksBox>

        {/* Search, Button, and Avatar */}
        <SearchBarBox>
          <StyledInput
            placeholder="Search"
            startAdornment={
              <Iconify
                icon={"lucide:search"}
                sx={{ width: "1.5rem", height: "1.5rem" }}
                color="grey"
              />
            }
          />
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: "10px", textTransform: "capitalize" }}
          >
            Resume Builder
          </Button>
          <Avatar alt="User Avatar" src={avatarSM} />
        </SearchBarBox>
      </Toolbar>
    </StyledNavbar>
  );
};

export default NavDesktop;
