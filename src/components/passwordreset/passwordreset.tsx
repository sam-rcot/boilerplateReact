import { useState } from 'react'
import styles from './passwordreset.module.scss'
import UserDetails from '../userdetails/userdetails'
import UserForm from '../userform/userform'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

const PasswordReset = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [isInfoTextVisible, setInfoTextVisibility] = useState(true);

  return (
    <div className={styles.PasswordReset}>
      <h1>Password Reset Boilerplate</h1>
      <div>
        <button className={styles.hideButton} onClick={() => setInfoTextVisibility(!isInfoTextVisible)}>
          {isInfoTextVisible ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown}/>}
        </button>
        {isInfoTextVisible &&
          <ul className={styles.infoText}>
            <li>Enter the user's first name and email and the text should automatically update.</li>
            <li>Single clicking on either the email or password should highlight it for ease of copying.</li>
            <li>The copy button at the bottom will set the clipboard to the boilerplate text <strong>with formatting. </strong></li>
            <li>When pasting into Outlook it should be formatted correctly without having to select <i>"Match destination formatting"</i>.</li>
          </ul>
        }
      </div>
      <UserForm setEmail={setEmail} setFirstName={setFirstName} />
      <UserDetails email={email} firstName={firstName} />
    </div>
  )
}

export default PasswordReset
