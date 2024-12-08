import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Iconify from "../../components/iconify/iconify";
import styled from "@emotion/styled";
const StyledSearchBox = styled(Box)(({ theme }) => ({
  marginBottom: ".375rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1.25rem",
  borderRadius: ".75rem",
  backgroundColor: theme.palette.background.white,
  fontSize: "14px",
  gap: "1rem",
  "& .searchBox": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // padding: "1.25rem 1rem",
    borderRadius: ".5rem",
    flex: ".5",
    // gap: "1rem",
    "& .MuiFormControl-root": {
      minWidth: "10rem",
      "& .MuiSelect-select.MuiSelect-outlined": {
        padding: ".5rem 1.75rem",
      },
    },
  },
}));
// Styled Select

const StyledSelect = styled(Select, {
  shouldForwardProp: (prop) => prop !== "isSecondItem",
})(({ theme, isSecondItem }) => ({
  "&.MuiOutlinedInput-root": {
    borderRadius: 0, // Remove corner rounding
    color: theme.palette.secondary.dark,
    borderLeft: isSecondItem
      ? "none"
      : `1px solid ${theme.palette.secondary.light}`, // left border
    borderRight: isSecondItem
      ? "none"
      : `1px solid ${theme.palette.secondary.light}`, // right border

    "& fieldset": {
      border: "none", // Remove the outline
    },
    "&:hover fieldset": {
      border: "none", // No border on hover
    },
    "&.Mui-focused fieldset": {
      border: "none", // No border on focus
    },
  },
  "& .MuiSelect-icon": {
    color: theme.palette.grey[700], // Customize icon color
    marginRight: "1.75rem",
    marginTop: "-.25rem",
  },
  "& .MuiPaper-root": {
    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
  },
}));
const SearchBox = () => {
  const [location, setLocation] = useState("");
  const handleChange = (e) => {
    setLocation(e.target.value);
  };
  return (
    <StyledSearchBox>
      <Typography variant="h2">Job Title, Company, or Keywords</Typography>
      <Box className="searchBox">
        <FormControl fullWidth>
          <StyledSelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={location}
            aria-placeholder="Location"
            IconComponent={(props) => (
              <Iconify icon="icon-park:down" {...props} />
            )}
            onChange={handleChange}
            //   displayEmpty
          >
            <MenuItem value="">
              <em>Location</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </StyledSelect>
        </FormControl>
        <FormControl fullWidth>
          <StyledSelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={location}
            aria-placeholder="Location"
            IconComponent={(props) => (
              <Iconify icon="icon-park:down" {...props} />
            )}
            onChange={handleChange}
            isSecondItem
          >
            <MenuItem value="">
              <em>Location</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </StyledSelect>
        </FormControl>
        <Button
          variant="contained"
          sx={{ minWidth: "140px", textTransform: "capitalize" }}
          startIcon={
            <Iconify
              icon={"lucide:search"}
              sx={{ width: "1.5rem", height: "1.5rem" }}
              color="white"
            />
          }
        >
          Search
        </Button>
      </Box>
    </StyledSearchBox>
  );
};

export default SearchBox;
