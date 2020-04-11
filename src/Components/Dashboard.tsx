import React, { Component } from 'react';

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
      <div>
        <h1> Lights Out </h1>
        <div>
          <h2> Game Info </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt voluptates repellendus harum quisquam eius reiciendis, accusamus, soluta consectetur alias eligendi cum quaerat ipsum? Dolor esse dicta vitae sint? Itaque, vero!
            </p>
          <p>
            Consectetur adipisicing elit. Incidunt voluptates repellendus harum quisquam eius reiciendis, accusamus, soluta consectetur alias eligendi cum quaerat ipsum? Dolor esse dicta vitae sint? Itaque, vero!
            </p>
        </div>
        <div>

          <h2> Settings </h2>


          <div>
            <div>
              <p> Number of Blocks: </p>
              <input name="noOfBlocks" value="5" id="5" onChange={(e) => { this.handleBlockSelect(e) }} type="radio" />
              <label htmlFor="5"> 5 X 5  </label>
              <input name="noOfBlocks" value="10" id="10" onChange={(e) => { this.handleBlockSelect(e) }} type="radio" defaultChecked />
              <label htmlFor="10"> 10 X 10  </label>
              <input name="noOfBlocks" value="20" id="20" onChange={(e) => { this.handleBlockSelect(e) }} type="radio" />
              <label htmlFor="20"> 20 X 20  </label>
            </div>
            <div>
              <p> DifficultyLevel: </p>
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