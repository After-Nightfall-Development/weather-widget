import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { State } from '../configs/redux/store';
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({

  })
);

const ForecastCard = (props: ForecastCardProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader />
      <CardContent>
        <Typography>{'Card Content'}</Typography>
      </CardContent>
    </Card>
  );
};

export interface ForecastCardProps {
  initValue: string;
}

const mapStateToProps = (state: State): ForecastCardProps => {
  return ({
    initValue: state.applicationState.initValue,
  } as unknown) as ForecastCardProps;
};

const mapDispatchToProps = (dispatch: Dispatch): ForecastCardProps =>
  (({} as unknown) as ForecastCardProps);

export default connect(mapStateToProps, mapDispatchToProps)(ForecastCard);
