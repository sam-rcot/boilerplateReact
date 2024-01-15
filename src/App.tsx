import { useState } from 'react'
import {
  HashRouter as Router, // Rename BrowserRouter to HashRouter
  Routes,
  Route
} from "react-router-dom";
import styles from './App.module.scss'
import NavBar from './components/navbar/navbar';
import PasswordReset from './components/passwordreset/passwordreset'
import GeneralPurpose from './components/generalpurpose/generalpurpose';
import InboxMonitoring from './components/inboxmonitoring/inboxmonitoring';
import NewUser from './components/newuser/newuser';

function App() {
  const [firstName, setFirstName] = useState('');

  return (
    <Router> {/* Use renamed HashRouter here */}
      <div className={styles.App}>
        <NavBar />
        <Routes>
          <Route path="/" element={<PasswordReset />} />
          <Route path="generalpurpose/*" element={<GeneralPurpose
            firstName={firstName}
            setFirstName={setFirstName} />} />
          <Route path="inboxmonitoring/*" element={<InboxMonitoring firstName={firstName}
            setFirstName={setFirstName} />} />
            <Route path="newuser/*" element={<NewUser/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
