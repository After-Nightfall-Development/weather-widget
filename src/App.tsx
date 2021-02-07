import {
  Theme,
  WithStyles,
  withStyles,
  StyledComponentProps,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';
import AppBar from './components/AppBar';
import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import { Styles } from '@material-ui/styles';
import ForecastCard from './components/ForecastCard';
import { getTheme } from './configs/themes/dark-theme';
import CssBaseline from '@material-ui/core/CssBaseline';

const styles: Styles<Theme, StyledComponentProps> = (theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
});

class App extends Component<AppProps> {
  render(): JSX.Element {
    const { classes, displayAppBar, title } = this.props;

    return (
      <MuiThemeProvider theme={getTheme()}>
        <CssBaseline />
        {displayAppBar ? <AppBar title={title} /> : undefined}

        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <ForecastCard />
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export interface AppProps extends WithStyles<typeof styles> {
  title: string;
  displayAppBar: boolean;
}

export default withStyles(styles, { withTheme: true })(App);
