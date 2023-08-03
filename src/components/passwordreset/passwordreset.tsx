import { useState } from 'react'
import styles from './passwordreset.module.css'
import UserDetails from '../userdetails/userdetails'
import UserForm from '../userform/userform'

function PasswordReset() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");


  return (
    <div className={styles.PasswordReset}>
      <h1>Password Reset Boilerplate</h1>
      <UserForm setEmail={setEmail} setFirstName={setFirstName} />
      <UserDetails email={email} firstName={firstName} />

    </div>
  )
}

export default PasswordReset
