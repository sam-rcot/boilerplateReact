import { useState } from 'react'
import styles from './App.module.scss'
import PasswordReset from './components/passwordreset/passwordreset'

function App() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");


  return (
    <div className={styles.App}>
      <PasswordReset />

    </div>
  )
}

export default App
