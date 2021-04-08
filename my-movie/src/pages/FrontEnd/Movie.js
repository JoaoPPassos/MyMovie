import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  Background,
  InfoArea,
  SectionInfoArea
} from './styledMovie';
import Header from '../../components/headerComponent/Header';
import { requestMovieDetails } from '../../Store/ducks/getInfos/getMovieInfos/actions';
import { getDetails } from '../../Store/ducks/getInfos/getMovieInfos/select';

export default function Movie() {
  const details = useSelector(getDetails);
  let { id } = useParams();
  const dispatch = useDispatch();
  const [det, setDetails] = useState("");

  useEffect(() => {
    setDetails(id);
    if (det !== "")
      dispatch(requestMovieDetails(det));
  }, [det, id, dispatch])

  console.log(details);

  return (
    <Background>
      <Header />
      <SectionInfoArea marginTop='3.2em'>
        <InfoArea className="infoMovie">
          {details === {} ? null
            :
            <svg height='400px' width='200px'>
              <image href={details.image.url} height='400px' width='200px' />
            </svg>}
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

