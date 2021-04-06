import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import {
  Background,
  Logo,
  SearchBar,
  DivSearchBar,
  SelectButton
} from './styledHome';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import { requestAutoCompleteMovies } from '../../Store/ducks/getMovieList/actions';
import { getValue } from '../../Store/ducks/getMovieList/select';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50rem',
    fontSize: '18px'
  }
}));

export default function Home() {
  const movieList = useSelector(getValue);
  const dispatch = useDispatch();
  const [movie, setMovies] = useState("")

  const classes = useStyles();

  useEffect(() => {
    const timeOutToGetMovies = setTimeout(() => {
      dispatch(requestAutoCompleteMovies(movie));
    }, 1000);
    return () => clearTimeout(timeOutToGetMovies);
  }, [movie]);

  return (
    <Background>
      <Logo src='./Logo1.png' alt='logo' />
      <DivSearchBar>
        <span style={{ height: '2.7rem', marginLeft: '3rem' }}>
          <img src='./loupe.png' alt='search' style={{ height: '100%' }} />
        </span>
        <SearchBar>
          <Autocomplete
            classes={classes}
            id="size-medium-standard"
            freeSolo
            style={{ height: '5rem' }}
            renderOption={(op) => <span onClick={(e) => {
              setMovies(e.target.outerText)
            }}>{op}</span>}
            options={movieList.map((movie) => movie.l)}
            renderInput={(params) => (
              <div ref={params.InputProps.ref}>
                <input
                  {...params.inputProps}
                  style={{
                    height: '3rem',
                    width: '100%',
                    fontSize: '18px',
                    border: 0,
                    backgroundColor: '#f7f7ff',
                    fontFamily: 'Montserrat, sans-serif',
                    marginLeft: '1rem',
                    boxShadow: '0',
                    outline: '0',
                  }}
                  value={movie}
                  onChange={(ev) => setMovies(ev.target.value)}
                  type='text'
                />
              </div>
            )}
          />
        </SearchBar>
      </DivSearchBar>
      <SelectButton id='0'>
        Todos
      </SelectButton>
      <SelectButton id='1'>
        Filme
      </SelectButton>
      <SelectButton id='2'>
        Série
      </SelectButton>
      <SelectButton id='3'>
        Autor
      </SelectButton>
    </Background>
  );
};

