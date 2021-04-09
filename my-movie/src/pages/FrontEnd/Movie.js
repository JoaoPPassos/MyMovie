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
import { getDetails, getVideosList } from '../../Store/ducks/getInfos/getMovieInfos/select';

export default function Movie() {
  const details = useSelector(getDetails);
  const videos = useSelector(getVideosList);
  let { id } = useParams();
  const dispatch = useDispatch();

  //useStates
  const [detailsID, setDetails] = useState("");
  const [videosID, setVideos] = useState("");
  const [trailer, setTrailer] = useState("");

  useEffect(() => {
    setDetails(id);
    setVideos(id);

    if (detailsID !== "") {
      dispatch(requestMovieDetails(detailsID));
      dispatch(requestMovieVideos(videosID));
    }
  }, [detailsID, videosID, id, dispatch]);



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

