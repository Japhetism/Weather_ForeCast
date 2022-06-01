import React from 'react';
import {
  Button,
  FormControl,
  Grid,
  OutlinedInput,
  Theme
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { inputValidation } from '../utils/validation';

interface Props {
  title: string;
  placeholder: string;
  searchTerm: string;
  setSearchTerm: (searchInput:string) => void;
  handleSearch: () => void;
}

const SearchInput = ({ placeholder, searchTerm, title, setSearchTerm ,handleSearch }: Props) => {
  const styles = searchInputStyles();
  return <Grid>
    <FormControl className={styles.formControlInput}>
      <OutlinedInput value={searchTerm} placeholder={placeholder} className={styles.input} onChange={(event) => setSearchTerm(event.target.value)} />
    </FormControl>
    <FormControl className={styles.formControlButton}>
      <Button variant="contained" disabled={!inputValidation(searchTerm)} onClick={() => handleSearch()}>{title}</Button>
    </FormControl>
  </Grid>
};

export default SearchInput;

const searchInputStyles = makeStyles((theme: Theme) => ({
  formControlInput: {
    width: '100%',
  },
  input: {
    border: '1px solid #000000',
    borderRadius: '10px',
  },
  formControlButton: {
    '&&': {
      marginTop: '10px',
      width: '20%',
    }
  },
}))