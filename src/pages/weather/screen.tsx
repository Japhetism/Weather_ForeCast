import React from 'react';
import {
  Grid,
  Theme,
  Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Layout from '../../components/layout';
import StyledRadioButton from '../../components/styledRadioButton';
import SearchInput from '../../components/searchBar';
import Slider from '../../components/slider';
import BarChart from '../../components/barChart';

const temperatureOptions = ['celcius', 'fahrenheit']

const WeatherScreen = () => {
  const styles = weatherScreenStyles()
  return <Layout>
    <Grid className={styles.weatherSection}>
      <Grid>
        <StyledRadioButton options={temperatureOptions} />
      </Grid>
      <Grid className={styles.searchInputContainer}>
        <Grid className={styles.searchInputSection}>
          <SearchInput placeholder='Search by city'/>
        </Grid>
      </Grid>
      <Grid>
        <Typography variant='h4'>Tunis</Typography>
      </Grid>
      <Grid>
        <Slider />
      </Grid>
      <Grid className={styles.chartSection}>
        <BarChart />
      </Grid>
    </Grid>
  </Layout>
};

export default WeatherScreen;


const weatherScreenStyles = makeStyles((theme: Theme) => ({
  weatherSection: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    paddingBottom: 40,
  },
  searchInputContainer: {
    marginTop: '40px',
    marginBottom: '40px',
  },
  searchInputSection: {
    width: '60%',
    margin: 'auto',
  },
  chartSection: {
    width: '50%',
    margin: 'auto',
  },
}))

