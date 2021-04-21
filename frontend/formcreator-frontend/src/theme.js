import { createMuiTheme } from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow';
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#EDE7E3', // balta
      main: '#2978A0', // melyna
      dark: '#131B23', // juoda
      contrastText: '#FFA62B', // geltona
      // #44AABB sviesiai melyna; 
    },
    secondary: {
      light: '#EDE7E3',
      main: '#FFA62B',
      dark: '#EEBB44',
      contrastText: '#131B23',
    }
  },
  overrides: {
    MuiButton: {
      text: {
        'text-transform': 'none',
      },
    },
  },
});

export default theme;