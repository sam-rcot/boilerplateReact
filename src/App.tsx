import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styles from './App.module.scss'
import NavBar from './components/navbar/navbar';
import PasswordReset from './components/passwordreset/passwordreset'
import GeneralPurpose from './components/generalpurpose/generalpurpose';

function App() {
  const [firstName, setFirstName] = useState('');

  return (
    <BrowserRouter>
      <div className={styles.App}>
        <NavBar />
        <Routes>
        <Route path="/" element={<PasswordReset />} />
          <Route path="generalpurpose/*" element={<GeneralPurpose
            firstName={firstName}
            setFirstName={setFirstName} />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
