import {format} from 'date-fns'
import './index.css'
const AppointmentItem = props => {
  const {appointmentDetails, toggle} = props
  const {id, date, title, isClicked} = appointmentDetails
  const onClickStar = () => {
    toggle(id)
  }

  const starImg = isClicked
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="resultContainer">
      <div>
        <h1>{title}</h1>
        <p>{format(new Date(date), 'dd MMMM yyyy, EEEE')}</p>
      </div>
      <button testid="star" onClick={onClickStar} className="likeBtn">
        <img alt="star" src={starImg} />
      </button>
    </li>
  )
}
export default AppointmentItem
