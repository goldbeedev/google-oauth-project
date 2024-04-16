import outlinedInputClasses from "@mui/material/OutlinedInput/outlinedInputClasses";
import { createTheme } from "@mui/material/styles";
import tw, { theme as tailwindTheme } from "twin.macro";

const theme = createTheme({
  palette: {
    primary: {
      main: tailwindTheme`colors.primary`,
    },
    secondary: {
      main: tailwindTheme`colors.secondary`,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          ...tw`flex flex-row flex-wrap m-auto h-screen items-center justify-center`,
      }
    },
  },
}
});

export default theme;