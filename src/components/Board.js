import React, { useContext } from 'react';
import Cell from './Cell';
import './Board.scss';
import { AppContext } from '../AppContext';

const Board = (props) => {
  const { appState, flipCellsAround } = useContext(AppContext);

  function handleBlockClick(coord) {
    flipCellsAround(coord);
  }

  function handleRedirect() {
    props.history.push('/');
  }

  const makeTable = () => {
    let tblBoard = [];
    for (let y = 0; y < appState.settings.nrows; y++) {
      let row = [];
      for (let x = 0; x < appState.settings.ncols; x++) {
        let coord = `${y}-${x}`;
        row.push(
          <Cell
            key={coord}
            isLit={appState.board[y][x]}
            flipCellsAroundMe={() => {
              handleBlockClick(coord);
            }}
          />
        );
      }
      tblBoard.push(<tr key={y}>{row}</tr>);
    }
    return (
      <table className="Board">
        <tbody>{tblBoard}</tbody>
      </table>
    );
  };
  return (
    <div>
      {appState.hasWon ? (
        <div className="winner">
          <span className="neon-orange">YOU</span>
          <span className="neon-blue">WIN!</span>
        </div>
      ) : (
          <div>
            <div className="Board-title" onClick={handleRedirect}>
              <div className="neon-orange">Lights</div>
              <div className="neon-blue">Out</div>
            </div>
            {makeTable()}
            <h2 className="board__footer"> Moves: {appState.moves} </h2>
          </div>
        )}
    </div>
  );
};
export default Board;
