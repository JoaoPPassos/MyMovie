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
import { requestMovieDetails } from '../../Store/ducks/getInfos/getMovieInfos/actions';
import { getDetails } from '../../Store/ducks/getInfos/getMovieInfos/select';

export default function Movie() {
  const details = useSelector(getDetails);
  let { id } = useParams();
  const dispatch = useDispatch();
  const [det, setDetails] = useState("");
  const [trailer, setTrailer] = useState

  useEffect(() => {
    setDetails(id);
    if (det !== "")
      dispatch(requestMovieDetails(det));
  }, [det, id, dispatch])

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

