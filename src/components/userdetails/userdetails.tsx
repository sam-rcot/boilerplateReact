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
    
    const handleSelectAll = (event: React.MouseEvent<HTMLSpanElement>) => {
        const target = event.target as HTMLSpanElement; // Type assert the target

        const range = document.createRange();
        range.selectNodeContents(target);

        const selection = window.getSelection();
        if (selection) { // Check if selection is not null
            selection.removeAllRanges();
            selection.addRange(range);
        }
    };



    return (
        <>
            <div className={styles.UserDetails}>
                <div className={styles.resultContainer} ref={resultRef} style={{ fontFamily: 'Arial' }}>
                    <p>Hi{firstName ? ` ${firstName.charAt(0).toUpperCase() + firstName.slice(1)}` : ""},<br /><br />


                        Apologies for the issues you have been having logging in. I have now
                        updated your account and created a new temporary password.
                        <br /><br />
                        Please login to the{" "}
                        <a href="https://portal.rcot.co.uk/">
                            <strong>RCOT Portal</strong>
                        </a>{" "}
                        (https://portal.rcot.co.uk/) in a new browser window or tab using the access
                        credentials shown below and amend your password to something more
                        secure.
                        <br /><br />
                        <strong>Username:</strong> <span className={styles.select} onClick={handleSelectAll}>{email}</span>
                        <br />
                        <strong>Temporary password:</strong>{" "}
                        <span className={styles.select} onClick={handleSelectAll}>{password}</span>
                        <br /><br />
                        Kind Regards,<br />
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
