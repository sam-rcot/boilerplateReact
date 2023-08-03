import { useState } from 'react'
import styles from './App.module.scss'
import NavBar from './components/navbar/navbar';
import PasswordReset from './components/passwordreset/passwordreset'

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <PasswordReset />

    </div>
  )
}

export default App
