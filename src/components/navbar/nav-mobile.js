import PropTypes from "prop-types";
import { useEffect, useState } from "react";
// @mui
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Iconify from "../../iconify/iconify";
import { Box, ListItem, Menu } from "@mui/material";

// ----------------------------------------------------------------------

export default function NavMobile() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <IconButton
        onClick={() => setOpen(!open)}
        sx={{
          ml: 1,
        }}
      >
        <Iconify icon="heroicons-solid:menu-alt-2" />
      </IconButton>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            pb: 5,
            width: 260,
          },
        }}
      >
        <Box>
          <Iconify icon="heroicons-solid:menu-alt-2" sx={{ mx: 2.5, my: 3 }} />

          <List component="nav" disablePadding>
            <ListItem>a</ListItem>
            <ListItem>b</ListItem>
            <ListItem>c</ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

NavMobile.propTypes = {
  data: PropTypes.array,
  offsetTop: PropTypes.bool,
};
