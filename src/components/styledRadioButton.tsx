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

interface Props {
  options: Array<string>
};

const StyledRadioButton = (props: Props) => {
  const { options } = props;
  const styles = styledRadioButtonStyles();
  const controlProps = (item: string) => ({
    //checked: selectedValue === item,
    //onChange: handleChange,
    value: item,
    name: 'temperature-radio-button-demo',
    inputProps: { 'aria-label': item },
  });
  return <FormControl>
    <RadioGroup
      row
      aria-labelledby='temperature-radio-button'
      name="temperature"
    >
      {options.map((item, index) => (
        <Grid className={styles.grid}>
          <FormControlLabel value={item} control={<Radio  {...controlProps(item)} sx={RadioStyles} />} label={capitalizeFirstLetter(item)} />
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
