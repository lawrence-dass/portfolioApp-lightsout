import React, { createContext, useReducer } from 'react';

const createBoard = (nrows, ncols, chanceLightStartsOn) => {
  let board = [];
  // TODO: create array-of-arrays of true/false values
  for (let y = 0; y < nrows; y++) {
    let row = [];
    for (let x = 0; x < ncols; x++) {
      row.push(Math.random() < chanceLightStartsOn);
    }
    board.push(row);
  }
  return board;
};

export const AppContext = createContext();

const START_GAME = 'START_GAME';
const BLOCK_CLICK = 'BLOCK_CLICK';

const reducer = (state, action) => {
  const defaultState = {
    moves: 0,
    hasWon: false,
    settings: {
      nrows: 10,
      ncols: 10,
      difficultyLevel: 0.50,
    },
    board: createBoard(10, 10, 0.50),
  };

  if (action.type === START_GAME) {
    const board = createBoard(
      action.payload.nrows,
      action.payload.ncols,
      action.payload.difficultyLevel
    );
    return { ...defaultState, settings: action.payload, board };
  }

  if (action.type === BLOCK_CLICK) {
    const { board, hasWon } = action.payload;
    return { ...state, board, hasWon, moves: state.moves + 1 };
  }

  return state;
};
const localStorageAppState = JSON.parse(localStorage.getItem('appState'));
const defaultState = {
  moves: 0,
  hasWon: false,
  settings: {
    nrows: 10,
    ncols: 10,
    difficultyLevel: 0.50,
  },
  board: createBoard(10, 10, 0.50),
};
const initialState = localStorageAppState ? localStorageAppState : defaultState;

export const AppProvider = ({ children }) => {
  const [appState, dispatch] = useReducer(reducer, initialState);

  const startGame = (noOfBlocks, difficultyLevel) => {
    dispatch({
      type: START_GAME,
      payload: {
        nrows: noOfBlocks,
        ncols: noOfBlocks,
        difficultyLevel: difficultyLevel,
      },
    });
  };

  localStorage.setItem('appState', JSON.stringify(appState));

  const flipCellsAround = (coord) => {
    let { ncols, nrows } = appState.settings;
    let board = appState.board;
    let [y, x] = coord.split('-').map(Number);

    function flipCell(y, x) {

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }
    flipCell(y, x);
    flipCell(y, x - 1);
    flipCell(y, x + 1);
    flipCell(y - 1, x);
    flipCell(y + 1, x);


    let hasWon = board.every((row) => row.every((cell) => !cell));


    dispatch({
      type: BLOCK_CLICK,
      payload: { board, hasWon },
    });
  };

  const value = { appState, startGame, flipCellsAround };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
