import { useRef, useState } from 'react'
import styles from "./userdetails.module.scss";
import generatePassword from "../../utils/generatePassword";
import CopyButton from '../copybutton/copybutton';
import PasswordButton from '../passwordbutton/passwordbutton';

type UserDetailsProps = {
    email: string,
    firstName: string
}

const UserDetails = ({ email, firstName }: UserDetailsProps) => {
    const resultRef = useRef<HTMLDivElement>(null);
    const [password, setPassword] = useState(generatePassword());

    
    
    const [pressedButtonId, setPressedButtonId] = useState<null | string>(null);

    const handleButtonPress = (id: string) => {
        setPressedButtonId(id);
    };

    const handleButtonRelease = () => {
        setPressedButtonId(null);
    };


    return (
        <>
            <div className={styles.UserDetails}>
                <div className={styles.resultContainer} ref={resultRef} style={{fontFamily: 'Arial'}}>
                    <p>Hi{firstName ? ` ${firstName.charAt(0).toUpperCase() + firstName.slice(1)}` : ""},</p>
                    <p>
                        Apologies for the issues you have been having logging in. I have now
                        updated your account and created a new temporary password.
                        <br /><br />
                        Please login to the{" "}
                        <a href="https://portal.rcot.co.uk/">
                            <strong>RCOT Portal</strong>
                        </a>{" "}
                        (https://portal.rcot.co.uk/) on a fresh web browser using the access
                        credentials shown below and amend your password to something more
                        secure.
                    </p>
                    <br />
                    <strong>Username:</strong> <span className={styles.select}>{email}</span>
                    <br />
                    <strong>Temporary password:</strong>{" "}
                    <span className={styles.select}>{password}</span>
                    <br />
                    <p>Kind Regards,<br />
                        Digital Team</p>
                </div>
                <div className={styles.buttonContainer}>
                    <CopyButton
                        pressedButtonId={pressedButtonId}
                        handleButtonPress={handleButtonPress}
                        handleButtonRelease={handleButtonRelease}
                        resultRef={resultRef}
                    />
                    <PasswordButton
                        pressedButtonId={pressedButtonId}
                        handleButtonPress={handleButtonPress}
                        handleButtonRelease={handleButtonRelease}
                        setPassword={setPassword}
                    />
                </div>
                
            </div>
        </>
    );
};

export default UserDetails;
