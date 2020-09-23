import React from 'react';
import { useParams } from 'react-router-dom';

function Campaign() {
  const { id } = useParams();
  
  return (
    <div>
      <h1>Campaign</h1>
      <p>ID: {id}</p>
    </div>
  );
}

export default Campaign;
