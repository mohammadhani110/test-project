import { Stack } from "@mui/material";
import NavDesktop from "../components/navbar/nav-desktop";

// ----------------------------------------------------------------------

export default function Layout({ children }) {
  return (
    <Stack>
      <NavDesktop />
      {children}
    </Stack>
  );
}
