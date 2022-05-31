import React, { ReactNode } from 'react';
import {
  Box,
  CssBaseline,
  Grid,
  Theme,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

interface Props {
  children: ReactNode
};

const Layout = (props: Props) => {
  const styles = LayoutStyles();
  const { children } = props;
  return <React.Fragment>
    <CssBaseline />
    <Grid className={styles.container}>
      <Box className={styles.box}>
        {children}
      </Box>
    </Grid>
  </React.Fragment>
};

export default Layout;

const LayoutStyles = makeStyles((theme: Theme) => ({
  container: {
    backgroundColor: '#E8E8E8',
    padding: 50,
  },
  box: {
    backgroundColor: '#FFFFFF',
  }
}))
