import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  Background,
  InfoArea,
  DivInfoArea
} from './styledMovie';
import Header from '../../components/headerComponent/Header';

export default function Movie() {
  let { id } = useParams();

  return (
    <Background>
      <Header />
      <DivInfoArea marginTop='3.2em'>
        <InfoArea className="infoMovie">

        </InfoArea>
      </DivInfoArea>

      <DivInfoArea marginTop='10em' display='grid' style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        <InfoArea className="infoSinopse" >

        </InfoArea>
        <InfoArea className="infoFotos">

        </InfoArea>
      </DivInfoArea>

      <DivInfoArea marginTop='10em'>
        <InfoArea className="infoElenco">

        </InfoArea>
      </DivInfoArea>

    </Background>
  );
};

