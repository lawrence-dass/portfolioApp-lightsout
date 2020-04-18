import React, { Component, useContext } from 'react';

import './Dashboard.scss';
import TestComponent from './TestComponent'
type myState = {

}

type myProps = {
  history: any
}

class Dashboard extends Component <myProps ,myState > {

  constructor(props: any) {
    super(props);
    this.state = {
      numberOfBlocks: 5,
      difficultyLevel: .25
    }
    this.handleBlockSelect = this.handleBlockSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleBlockSelect(e: any) {
    console.log('selected', e.target.value)
  }

  handleSubmit(e: any) {
    e.preventDefault();
    // localStorage.setItem('noOfBlock', '5');
    // localStorage.setItem('difficultyLevel', 'medium');
    console.log('form Submitted');
    this.props.history.push('/board');
  }

  render() {
    return (
      <div className="dashboard">
        <h1 className="dashboard__title"> Lights Out </h1>
        <div className="dashboard__game-info">
          <TestComponent></TestComponent>
          <h2 className="dashboard__game-title"> Game Information </h2>
          <p>
            <strong> Objective: </strong> To turn all the lights out on the board, but each time you press a lit or unlit button, it not only changes that block, but also the adjacent blocks! You must
            try to turn the lights out in the minimum number of moves!
            </p>
          <p> Now let’s turn the Lights Out! </p>
        </div>
        <div className="dashboard__setting">

          <h2 className="dashboard__setting-title"> Settings </h2>


          <div className="dashboard__setting-form">
            <div>
              <b> Number of Blocks: </b>
              <input name="noOfBlocks" value="5" id="5" onChange={(e) => { this.handleBlockSelect(e) }} type="radio" />
              <label htmlFor="5"> 5 X 5  </label>
              <input name="noOfBlocks" value="10" id="10" onChange={(e) => { this.handleBlockSelect(e) }} type="radio" defaultChecked />
              <label htmlFor="10"> 10 X 10  </label>
              <input name="noOfBlocks" value="20" id="20" onChange={(e) => { this.handleBlockSelect(e) }} type="radio" />
              <label htmlFor="20"> 20 X 20  </label>
            </div>
            <div>
              <b> DifficultyLevel: </b>
              <input name="difficultyLevel" value=".25" id="easy" onChange={(e) => { this.handleBlockSelect(e) }} type="radio" />
              <label htmlFor="easy"> Easy </label>
              <input name="difficultyLevel" value=".50" id="medium" onChange={(e) => { this.handleBlockSelect(e) }} type="radio" defaultChecked />
              <label htmlFor="medium"> Medium </label>
              <input name="difficultyLevel" value=".75" id="hard" onChange={(e) => { this.handleBlockSelect(e) }} type="radio" />
              <label htmlFor="har"> Hard </label>
            </div>
            <button type="submit" onClick={(e) => { this.handleSubmit(e) }}> Start </button>
          </div>
        </div>

      </div>
    )
  }
}

export default Dashboard;