import React, { useEffect, useState } from 'react';
import {
  Grid,
  Theme,
  Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useDispatch } from 'react-redux';
import Layout from '../../components/layout';
import StyledRadioButton from '../../components/styledRadioButton';
import SearchInput from '../../components/searchBar';
import Slider from '../../components/slider';
import BarChart from '../../components/barChart';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import fetchWeather from '../../services/weather';
import { temperatureOptions } from '../../fixtures/temperatureOptions';
import { getTempUnitSymbol } from '../../utils/helper';

const WeatherScreen = () => {
  const [searchTerm, setSearchTerm] = useState('Tunis');
  const [unit, setUnit] = useState('metric');
  const dispatch = useDispatch();
  const styles = weatherScreenStyles();
  const { weather } = useTypedSelector((state:any) => state.weather)

  const handleSearch = () => {
    dispatch(fetchWeather(searchTerm, unit) as any);
  }

  useEffect(() => {
    handleSearch();
  }, []);

  return <Layout>
    <Grid className={styles.weatherSection}>
      <Grid>
        <StyledRadioButton options={temperatureOptions} unit={unit} setUnit={setUnit} />
      </Grid>
      <Grid className={styles.searchInputContainer}>
        <Grid className={styles.searchInputSection}>
          <SearchInput
            title='Search'
            placeholder='Search by city'
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleSearch={handleSearch}
          />
        </Grid>
      </Grid>
      {weather.length && <Grid>
        <Typography variant='h4'>{searchTerm}</Typography>
      </Grid>}
      {weather.length && <Grid>
        <Slider data={weather} unit={getTempUnitSymbol(unit)}/>
      </Grid>}
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

