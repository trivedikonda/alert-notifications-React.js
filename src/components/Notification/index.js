// Write your code here
import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <li className="each-list-item">
      {children}
      <GrFormClose className="cross" />
    </li>
  )
}

export default Notification
