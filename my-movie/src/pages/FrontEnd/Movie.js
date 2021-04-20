import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Background,
  InfoArea,
  SectionInfoArea,
  SvgPoster,
  ImagePoster,
  TrailerArea
} from './styledMovie';
import Header from '../../components/headerComponent/Header';
import { requestMovieDetails, requestMovieVideos, requestMovieTrailer } from '../../Store/ducks/getInfos/getMovieInfos/actions';
import { getDetails, getVideosList, getTrailer } from '../../Store/ducks/getInfos/getMovieInfos/select';

export default function Movie() {
  const details = useSelector(getDetails);
  const videos = useSelector(getVideosList);
  const trailer = useSelector(getTrailer);
  let { id } = useParams();
  const dispatch = useDispatch();

  //useStates
  const [trailerID, setTrailerID] = useState("");

  useEffect(() => {
    dispatch(requestMovieDetails(id));
    dispatch(requestMovieVideos(id));
  }, []);

  useEffect(() => {
    //dispatch(requestMovieTrailer())
    console.log("tem video")
  }, [videos])

  return (
    <Background>
      <Header />
      <SectionInfoArea marginTop='3.2em'>
        <InfoArea className="infoMovie">
          {Object.entries(details).length === 0 ? null :
            <SvgPoster className="poster">
              <ImagePoster href={details.image.url} />
            </SvgPoster>
          }

          {
            Object.entries(videos).length === 0 ? null :
              <TrailerArea>

              </TrailerArea>
          }
        </InfoArea>
      </SectionInfoArea>

      <SectionInfoArea className="info2" marginTop='10em'>
        <InfoArea className="infoSinopse" >

        </InfoArea>
        <InfoArea className="infoFotos">

        </InfoArea>
      </SectionInfoArea>

      <SectionInfoArea marginTop='10em'>
        <InfoArea className="infoElenco">

        </InfoArea>
      </SectionInfoArea>

    </Background>
  );
};

