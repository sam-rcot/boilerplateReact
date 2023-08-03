import { useState } from 'react'
import styles from './passwordreset.module.scss'
import UserDetails from '../userdetails/userdetails'
import UserForm from '../userform/userform'

function PasswordReset() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");


  return (
    <div className={styles.PasswordReset}>
      <h1>Password Reset Boilerplate</h1>
      <ul className={styles.infoText}>
        <li>Enter the user's first name and email and the text should automatically update.</li>
        <li>Single clicking on either the email or password should highlight it for ease of copying.</li>
        <li>The copy button at the bottom will set the clipboard to the boilerplate text <strong>with formatting. </strong></li>
        <li>When pasting into Outlook make sure to select <i>"Match destination formatting"</i>.</li>
      </ul>
      <UserForm setEmail={setEmail} setFirstName={setFirstName} />
      <UserDetails email={email} firstName={firstName} />

    </div>
  )
}

export default PasswordReset
