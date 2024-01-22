// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirst: false, isLast: false}

  onFirstbtn = () => {
    this.setState(prevState => ({isFirst: !prevState.isFirst}))
  }
  onLastbtn = () => {
    this.setState(prevState => ({isLast: !prevState.isLast}))
  }

  render() {
    const {isFirst, isLast} = this.state
    return (
      <div className="bg-conatiner">
        <h1 className="heading">Show/Hide</h1>
        <div className="card-container">
          <div className="button-container">
            <button onClick={this.onFirstbtn} type="button" className="btn">
              Show/Hide Firstname
            </button>
            <div>
              {isFirst ? (
                <div className="card-item">
                  <p className="card-details">Joe</p>
                </div>
              ) : (
                <span />
              )}
            </div>
          </div>
          <div className="button-container">
            <button onClick={this.onLastbtn} type="button" className="btn">
              Show/Hide Lastname
            </button>
            <div>
              {isLast ? (
                <div className="card-item">
                  <p className="card-details">Jonas</p>
                </div>
              ) : (
                <span />
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
