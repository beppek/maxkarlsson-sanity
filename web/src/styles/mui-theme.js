import { createMuiTheme } from '@material-ui/core/styles';
import { theme } from './theme';

export const muiTheme = createMuiTheme({
  typography: {
    // Tell Material-UI what's the font-size on the html element is.
    htmlFontSize: 10
  },
  palette: {
    primary: { main: theme.primary },
    secondary: { main: theme.secondary },
    error: { main: theme.error }
  }
});

export default muiTheme;
