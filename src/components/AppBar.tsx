import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
    },
    appBar: {
      borderTop: '12px solid ' + theme.palette.primary.dark,
    },
  })
);

export default function TopAppBar(props: TopAppBarProps): JSX.Element {
  const classes = useStyles();

  return (
    <AppBar position={'static'} className={classes.appBar}>
      <Toolbar>
        <Typography variant={'h6'} className={classes.title}>
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export interface TopAppBarProps {
  title?: string;
}
