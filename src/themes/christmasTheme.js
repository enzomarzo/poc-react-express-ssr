import { createTheme } from '@mui/material/styles';

const christmasTheme = createTheme({
  palette: {
    background: {
      default: '#165B33',
    },
    primary: {
      main: '#BB2528',
    },
    secondary: {
      main: '#ECECEE',
    },
  },
  typography: {
    fontFamily: 'sans-serif',
    fontSize: 14,
  },
});

export default christmasTheme;
