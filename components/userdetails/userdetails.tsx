import { useRef, useState } from 'react'
import styles from "./userdetails.module.scss";
import generatePassword from "../../utils/generatePassword";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import CopyButton from '../copybutton/copybutton';

type UserDetailsProps = {
    email: string,
    firstName: string
}

const UserDetails = ({ email, firstName }: UserDetailsProps) => {
    const resultRef = useRef(null);
    const [password, setPassword] = useState(generatePassword());

    const handleButtonClick = () => {
        const resultContainerElement = resultRef.current;
        const selection = window.getSelection();
        selection.selectAllChildren(resultContainerElement);

        try {
            const successful = document.execCommand('copy');
            const msg = successful ? 'successful' : 'unsuccessful';
            console.log(`Copy command was ${msg}`);
        } catch (err) {
            console.error('Unable to copy', err);
        }

        selection.collapseToEnd();
    };
    const handleNewPassword = () => {
        const newPassword = generatePassword();
        setPassword(newPassword);
    };
    const [pressedButtonId, setPressedButtonId] = useState(null);

    const handleButtonPress = (id) => {
        setPressedButtonId(id);
    };

    const handleButtonRelease = () => {
        setPressedButtonId(null);
    };


    return (
        <>
            <div className={styles.UserDetails}>
                <div className={styles.resultContainer} ref={resultRef}>
                    <p>Hello {firstName.charAt(0).toUpperCase() + firstName.slice(1)},</p>
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
                        Web Team</p>
                </div>
                <div className={styles.buttonContainer}>
                    <CopyButton
                        pressedButtonId={pressedButtonId}
                        handleButtonPress={handleButtonPress}
                        handleButtonRelease={handleButtonRelease}
                        resultRef={resultRef}
                    />
                    <button
                        className={`${styles.button} ${pressedButtonId === 'newPasswordButton' ? styles['buttonPressed'] : ''}`}
                        onMouseDown={() => handleButtonPress('newPasswordButton')}
                        onMouseUp={handleButtonRelease}
                        onMouseLeave={handleButtonRelease}
                        onClick={handleNewPassword}
                    >
                        <FontAwesomeIcon icon={faArrowsRotate} size="3x" className={styles.buttonIcon} />
                        <span className={styles.buttonText}>Create new password</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default UserDetails;
