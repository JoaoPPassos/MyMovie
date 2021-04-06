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
  const [category, setCategory] = useState(0);
  const classes = useStyles();

  const filterMovieList = [];

  useEffect(() => {
    const timeOutToGetMovies = setTimeout(() => {
      if (movie !== "")
        dispatch(requestAutoCompleteMovies(movie));

    }, 1000);
    return () => clearTimeout(timeOutToGetMovies);
  }, [movie]);

  for (let i = 0, j = 0; i < movieList.length; i++) {
    switch (category) {
      case 1:
        if (movieList[i].id[0] === 't') {
          filterMovieList[j] = movieList[i].l;
        }
        j++;
        break;
      case 2:
        if (movieList[i].id[0] === 'n') {
          filterMovieList[j] = movieList[i].l;
        }
        j++;
        break;
      default:
        filterMovieList[j] = movieList[i].l;
        j++;
    }
  }

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
            options={filterMovieList.map((movie) => movie)}
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
      <SelectButton id='0' onClick={() => { setCategory(0) }}>
        Todos
      </SelectButton>
      <SelectButton id='1' onClick={() => { setCategory(1) }}>
        Titulos
      </SelectButton>
      <SelectButton id='2' onClick={() => { setCategory(2) }}>
        Autor
      </SelectButton>
    </Background>
  );
};

