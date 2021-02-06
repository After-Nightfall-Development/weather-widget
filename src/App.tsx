import React, { Component } from 'react';
import {
  Theme,
  WithStyles,
  withStyles,
  StyledComponentProps,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from './components/AppBar';
import { getTheme } from './configs/themes/dark-theme';
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from '@material-ui/core';

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

        <Grid container spacing={2} className={classes.root}>
          <Grid item xs={12}>
            <Card>
              <CardHeader />
              <CardContent>
                <Typography>{'Card Content'}</Typography>
              </CardContent>
            </Card>
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
