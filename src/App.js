import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme"; // Path to the theme file
import { Typography } from "@mui/material";
import Layout from "./layout/layout";
import Main from "./pages/main";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Main />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
