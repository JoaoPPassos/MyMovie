import React from 'react';
import { useParams } from 'react-router-dom';


export default function Movie() {
  let { id } = useParams();
  return (
    <div>
      <button>{id}</button>
    </div>
  );
};

