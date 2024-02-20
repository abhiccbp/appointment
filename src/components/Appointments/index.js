import {Component} from 'react'

import {format} from 'date-fns'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {
    titleInput: ' ',
    dateInput: ' ',
    appointmentsList: [],
    isfliterActive: false,
  }

  toggle = id => {
    this.setState(prev => ({
      appointmentsList: prev.appointmentsList.map(each => {
        if (id === each.id) {
          return {...each, isClicked: !each.isClicked}
        }
        return each
      }),
    }))
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeDate = event => {
    this.setState({dateInput: event.target.value})
    console.log(event.target.value)
  }

  onClickBtn = () => {
    const {titleInput, dateInput, appointmentsList} = this.state
    const newList = {
      id: uuidv4(),
      title: titleInput,
      date: dateInput,
      isClicked: true,
    }
    this.setState(prev => ({
      appointmentsList: [...prev.appointmentsList, newList],
    }))
  }

  onclickStarred = () => {
    const {appointmentsList, isfliterActive} = this.state
    this.setState({
      isfliterActive: !isfliterActive,
    })
  }

  renderabc = () => {
    const {appointmentsList, isfliterActive} = this.state
    if (isfliterActive) {
      return appointmentsList.filter(each => each.isClicked === true)
    }
    return appointmentsList
  }

  render() {
    const abc = this.renderabc()
    const {appointmentsList, isfliterActive} = this.state
    return (
      <div>
        <div className="main">
          <div className="container1">
            <h1>Add Appointments</h1>
            <h1>Appointments</h1>
            <label htmlFor="title">TITLE</label>
            <input onChange={this.onChangeTitle} id="title" type="text" />
            <label htmlFor="date">DATE</label>
            <input onChange={this.onChangeDate} id="date" type="date" />
            <button onClick={this.onClickBtn}>Add</button>
          </div>
          <div>
            <img
              alt="appointments"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
            />
          </div>
        </div>

        <h1>Appointments</h1>
        <button onClick={this.onclickStarred}>Starred</button>
        <ul className="result">
          {abc.map(each => (
            <AppointmentItem
              key={each.id}
              appointmentDetails={each}
              toggle={this.toggle}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Appointments
