import { Theme } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export function getTheme(): Theme {
  return createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        light: '#4dabf5',
        main: '#2196f3',
        dark: '#1769aa',
        contrastText: '#fff',
      },
      secondary: {
        light: '#5393ff',
        main: '#2979ff',
        dark: '#1c54b2',
        contrastText: '#fff',
      },
    },
  });
}
