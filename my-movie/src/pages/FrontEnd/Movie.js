import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  Background,
  InfoArea,
  SectionInfoArea
} from './styledMovie';
import Header from '../../components/headerComponent/Header';

export default function Movie() {
  let { id } = useParams();

  return (
    <Background>
      <Header />
      <SectionInfoArea marginTop='3.2em'>
        <InfoArea className="infoMovie">

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

