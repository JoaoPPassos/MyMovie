import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Background } from './styledMovie';
import Header from '../../components/headerComponent/Header';

export default function Movie() {
  let { id } = useParams();
  return (
    <Background>
      <Header>

      </Header>
    </Background>
  );
};

