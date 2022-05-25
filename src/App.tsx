import { ThemeProvider } from "@mui/material";
import { Banners } from "./pages";
import { Theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Banners />
    </ThemeProvider>
  );
}

export default App;
