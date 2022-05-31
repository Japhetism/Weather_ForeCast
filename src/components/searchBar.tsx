import React from 'react';
import {
  FormControl,
  OutlinedInput,
  Theme
} from '@mui/material';
import { makeStyles } from '@mui/styles';

interface Props {
  placeholder: string
}

const SearchInput = (props: Props) => {
  const { placeholder } = props;
  const styles = searchInputStyles();
  return <FormControl className={styles.formControl}>
    <OutlinedInput placeholder={placeholder} className={styles.input} />
  </FormControl>
};

export default SearchInput;

const searchInputStyles = makeStyles((theme: Theme) => ({
  formControl: {
    width: '100%',
  },
  input: {
    border: '1px solid #000000',
    borderRadius: '10px',
  }
}))