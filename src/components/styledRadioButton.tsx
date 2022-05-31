import React from 'react';
import {
  Grid,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Theme
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { capitalizeFirstLetter } from '../utils/helper';

interface Option {
  name: string;
  unit: string;
};

interface Props {
  options: Option[],
  unit: string;
  setUnit: (unitInput:string) => void;
};

const StyledRadioButton = ({ options, unit, setUnit}: Props) => {
  const styles = styledRadioButtonStyles();
  const controlProps = (item: string) => ({
    checked: unit === item,
    value: item,
    name: 'temperature-radio-button-demo',
    inputProps: { 'aria-label': item },
  });
  return <FormControl>
    <RadioGroup
      row
      aria-labelledby='temperature-radio-button'
      name='temperature'
      onChange={(event) => setUnit(event.target.value)}
    >
      {options.map((item, index) => (
        <Grid className={styles.grid} key={index}>
          <FormControlLabel value={item} control={<Radio  {...controlProps(item.unit)} sx={RadioStyles} />} label={capitalizeFirstLetter(item.name)} />
        </Grid>
      ))}
    </RadioGroup>
  </FormControl>
}

export default StyledRadioButton;

const RadioStyles = {
  '& .MuiSvgIcon-root': {
    fontSize: 38,
    color: '#22F34B',
  },
};

const styledRadioButtonStyles = makeStyles((theme: Theme) => ({
  grid: {
    marginLeft: 100
  }
}));
