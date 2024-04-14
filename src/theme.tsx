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
    MuiTextField: {
      styleOverrides: {
        root: {
          ...tw`text-primary text-2xl border-primary`,
          '& .MuiOutlinedInput-input': {
            ...tw`text-primary border-primary`
          },
          '& .MuiOutlinedInput-notchedOutline': {
            ...tw`border-primary`
          },
          '& .MuiFormLabel-root': {
            ...tw`text-primary`
          },
          [`&:hover .MuiFormLabel-root`]: {
            ...tw`text-secondary`
          },
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          [`.MuiSelect-icon`]: {
            ...tw`text-primary`
          },
          [`.${outlinedInputClasses.notchedOutline}`]: {
            ...tw`border-primary`
          },
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            ...tw`border-secondary text-secondary`
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            ...tw`border-secondary`
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          ...tw`text-primary`
        }
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          ...tw`text-primary`
        }
      }
    },
  },
});

export default theme;