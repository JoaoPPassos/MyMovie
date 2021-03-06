import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import {
  Background,
  Logo,
  SearchBar,
  DivSearchBar,
  SelectButton,
  SearchButton
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
  let movieInfo;
  const [url, setUrl] = useState("");

  const setFilter = (mov) => {
    switch (category) {
      case 1:
        return mov.id[0] === 't';
      case 2:
        return mov.id[0] === 'n';
      default:
        return mov.id !== '';
    }
  }

  useEffect(() => {
    const timeoutToGetMovies = setTimeout(() => {
      if (movie !== "")
        dispatch(requestAutoCompleteMovies(movie));
    }, 1000);
    return () => clearTimeout(timeoutToGetMovies);
  }, [movie, dispatch]);

  return (
    <Background>
      <Logo src='./Logo1.png' alt='logo' />
      <DivSearchBar>
        <span style={{ height: '1.5rem', marginLeft: '2.4rem' }}>
          <img src='./loupe.png' alt='search' style={{ height: '100%' }} />
        </span>
        <SearchBar>
          <Autocomplete
            classes={classes}
            id="size-medium-standard"
            freeSolo
            style={{ height: '5rem', fontFamily: 'serif' }}
            renderOption={(op) => <span onClick={(e) => {
              movieInfo = movieList.filter(mov => mov.l === e.target.outerText);
              setUrl(`/movie/${movieInfo[0].id}`);

              setMovies(e.target.outerText)
            }}>{op}</span>}
            options={movieList.filter(setFilter).map((movie) => movie.l)}
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
        <SearchButton to={url}>
          <img src='./loupe.png' alt='search' style={{ height: '60%' }} />
        </SearchButton>
      </DivSearchBar>
      <SelectButton id='0' onClick={() => { setCategory(0) }}>
        Todos
      </SelectButton>
      <SelectButton id='1' onClick={() => { setCategory(1) }}>
        Titulos
      </SelectButton>
      <SelectButton id='2' onClick={() => { setCategory(2) }}>
        Ator/Atriz
      </SelectButton>
    </Background >
  );
};

