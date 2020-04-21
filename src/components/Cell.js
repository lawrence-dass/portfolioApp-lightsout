import React, { useContext } from 'react';

import { AppContext } from '../AppContext';
import './Cell.scss';

const Cell = (props) => {
  const { appState } = useContext(AppContext);

  const handleClick = (evt) => {
    props.flipCellsAroundMe();
  };

  let classes = 'Cell' + (props.isLit ? ' Cell-lit' : '');

  let style = {
    height: '100px',
    width: '100px',
  };

  if (parseInt(appState.settings.nrows) === 10) {
    style = {
      height: '50px',
      width: '50px',
    };
  } else if (parseInt(appState.settings.nrows) === 20) {
    style = {
      height: '20px',
      width: '20px',
    };
  } else {
    style = {
      height: '100px',
      width: '100px',
    };
  }

  return <td style={style} className={classes} onClick={handleClick} />;
};

export default Cell;
