import React, {useContext} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Paper} from '@material-ui/core';
import Context from '../context';
import NoContent from './Pin/NoContent';
import CreatePin from './Pin/CreatePin';

const Blog = ({classes}) => {
  const {state} = useContext (Context);
  const {draft} = state;
  let BlogContext;
  if (!draft) {
    BlogContext = NoContent;
    // no content
  } else if (draft) {
    BlogContext = CreatePin;
    // create ping component
  }
  return <Paper className={classes.root}><BlogContext /></Paper>;
};

const styles = {
  root: {
    minWidth: 350,
    maxWidth: 400,
    maxHeight: 'calc(100vh - 64px)',
    overflowY: 'scroll',
    display: 'flex',
    justifyContent: 'center',
  },
  rootMobile: {
    maxWidth: '100%',
    maxHeight: 300,
    overflowX: 'hidden',
    overflowY: 'scroll',
  },
};

export default withStyles (styles) (Blog);
