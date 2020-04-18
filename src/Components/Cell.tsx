import React, {Component} from 'react'
import "./Cell.scss"


/** A single cell on the board.
 *
 * This has no state --- just two props:
 *
 * - flipCellsAroundMe: a function rec'd from the board which flips this
 *      cell and the cells around of it
 *
 * - isLit: boolean, is this cell lit?
 *
 * This handles clicks --- by calling flipCellsAroundMe
 *
 **/

 type myState = {

 }

 type myProps = {
  flipCellsAroundMe: any,
  isLit: any
 }

class Cell extends Component <myProps, myState> {
  constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt : any) {
    // call up to the board to flip cells around this cell
    this.props.flipCellsAroundMe();
  }

  render() {
    let classes = "Cell" + (this.props.isLit ? " Cell-lit" : "");

    return (
        <td className={classes} onClick={this.handleClick} />
    )
  }
}


export default Cell