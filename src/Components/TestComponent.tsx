import React,{ useContext } from 'react';

import AppContext from '../AppContext'

function TestComponent () {
  const [theme] = useContext(AppContext);
  return (
    <h1 style={{ color: theme}}> Test Component </h1>
  )
}

export default TestComponent;