// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

/* const alertNotificationsList = [
  {
    reactIcon: 'AiFillCheckCircle',
    status: 'Success',
    description: 'You can access all the files in the folder',
  },
  {
    reactIcon: 'RiErrorWarningFill',
    status: 'Error',
    description:
      'Sorry, you are not authorized to have access to delete the file',
  },
  {
    reactIcon: 'MdWarning',
    status: 'Warning',
    description: ' Viewers of this file can see comments and suggestions',
  },
  {
    reactIcon: 'MdInfo',
    status: 'Info',
    description: ' Anyone on the internet can view these files',
  },
] */

const AlertNotifications = () => (
  <div className="app-container">
    <h1 className="main-heading">Alert Notifications</h1>
    <ul className="notifications-list">
      <Notification>
        <>
          <div className="icon-and-heading-paragraph">
            <AiFillCheckCircle className="alert-icon success-icon" />
            <div>
              <h1 className="heading success-heading">Success</h1>
              <p className="paragraph">
                You can access all the files in the folder
              </p>
            </div>
          </div>
        </>
      </Notification>

      <Notification>
        <>
          <div className="icon-and-heading-paragraph">
            <RiErrorWarningFill className="alert-icon error-icon" />
            <div>
              <h1 className="heading error-heading">Error</h1>
              <p className="paragraph">
                Sorry, you are not authorized to have access to delete the file
              </p>
            </div>
          </div>
        </>
      </Notification>

      <Notification>
        <>
          <div className="icon-and-heading-paragraph">
            <MdWarning className="alert-icon warning-icon" />
            <div>
              <h1 className="heading warning-heading">Warning</h1>
              <p className="paragraph">
                Viewers of this file can see comments and suggestions
              </p>
            </div>
          </div>
        </>
      </Notification>

      <Notification>
        <>
          <div className="icon-and-heading-paragraph">
            <MdInfo className="alert-icon info-icon" />
            <div>
              <h1 className="heading info-heading">Info</h1>
              <p className="paragraph">
                Anyone on the internet can view these files
              </p>
            </div>
          </div>
        </>
      </Notification>
    </ul>
  </div>
)

export default AlertNotifications
